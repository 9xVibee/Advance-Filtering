/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Input from "../../components/Input";
import "./Colors.css";

const Colors = ({ handleChange }) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <div className="color">
        <Input
          handleChange={handleChange}
          title={"All"}
          value={""}
          name={"test1"}
        />
        <Input
          handleChange={handleChange}
          title={"Black"}
          value={"black"}
          name={"test1"}
          color={"black"}
        />
        <Input
          handleChange={handleChange}
          title={"Blue"}
          value={"blue"}
          name={"test1"}
          color={"blue"}
        />
        <Input
          handleChange={handleChange}
          title={"Red"}
          value={"red"}
          name={"test1"}
          color={"red"}
        />
        <Input
          handleChange={handleChange}
          title={"Green"}
          value={"green"}
          color={"green"}
          name={"test1"}
        />
        <Input
          handleChange={handleChange}
          title={"White"}
          value={"white"}
          name={"test1"}
        />
      </div>
    </div>
  );
};

export default Colors;
