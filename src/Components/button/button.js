import "./button.css";

const Button = ({ label, showLabel, children }) => {
  return <button onClick={() => showLabel(label)}>{children}</button>;
};

Button.defaultProps = {
  label: "Clique Aqui",
};

export default Button;
