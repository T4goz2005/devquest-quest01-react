import Button from "../button/button.js";

const btnLabels = ["Baixar CV 📄 "];

const showLabel = (label) => {
  alert(`A label do botão é ${label} !`);
};

const Buttons = () => {
  return (
    <>
      <div>
        {btnLabels.map((label, index) => (
          <Button key={index} label={btnLabels[index]} showLabel={showLabel}>
            {label}
          </Button>
        ))}
      </div>
    </>
  );
};

export default Buttons;
