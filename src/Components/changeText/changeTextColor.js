const Text = ({ colorText, upperCase }) => {
  return (
    <>
      <h1 style={{ color: "red", fontSize: 40, textTransform: upperCase }}>
        Desafio React Native
      </h1>

      <p style={{ color: colorText, textTransform: upperCase }}>
        Paragrafo bem escrito 😎
      </p>
    </>
  );
};

Text.defaultProps = {
  colorText: "blue",
  upperCase: "uppercase",
};

export default Text;
