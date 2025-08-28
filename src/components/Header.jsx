import formLogo from "../assets/formLogo.png";
export default function Header() {
  return (
    <header>
      <img src={formLogo} alt="A form and a pencil" />
      <h1>React Forms</h1>
    </header>
  );
}
