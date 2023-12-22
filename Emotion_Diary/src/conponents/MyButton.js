const MyButton = ({ text, type, onClick }) => {
  // 예외의 버튼 타입 발생 예방
  const btnType = ["positive", "negative"].includes(type) ? type : "default";

  return (
    <button
      // class에 타입을 두가지 줄 수 있는 방법
      className={["MyButton", `MyButton_${btnType}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

MyButton.defaultProps = {
  type: "default",
};

export default MyButton;
