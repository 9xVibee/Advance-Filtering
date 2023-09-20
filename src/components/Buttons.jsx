/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const Buttons = ({ onClickHandler, title, value }) => {
  return (
    <button className="btns" value={value} onClick={onClickHandler}>
      {title}
    </button>
  );
};

export default Buttons;
