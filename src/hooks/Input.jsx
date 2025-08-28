import { useState } from "react";
const useInput = (defaultValue, validationFn) => {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const valueIsValid = validationFn(enteredValue);
  // for blur validation
  const [didEdit, setDidEdit] = useState(false);
  function handleInputBlur(identifier) {
    setDidEdit(true);
  }

  function handleInputChange(event) {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  }
  return {
    value: enteredValue,
    handleInputBlur: handleInputBlur,
    handleInputChange: handleInputChange,
    hasError: didEdit && !valueIsValid,
  };
};

export default useInput;
