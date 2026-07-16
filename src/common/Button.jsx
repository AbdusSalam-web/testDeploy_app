const Button = ({ btnText, buttonStyle }) => {
  return (
    <>
      <button className={buttonStyle}>{btnText}</button>
    </>
  );
};

export default Button;