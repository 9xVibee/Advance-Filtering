/* eslint-disable react/prop-types */
import Input from "../../components/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <div className="container">
        <Input
          handleChange={handleChange}
          value={""}
          title={"All"}
          name={"test2"}
        />
        <Input
          handleChange={handleChange}
          value={50}
          title={"$0 - $50"}
          name={"test2"}
        />
        <Input
          handleChange={handleChange}
          value={100}
          title={"$50 - $100"}
          name={"test2"}
        />
        <Input
          handleChange={handleChange}
          value={150}
          title={"$100 - $150"}
          name={"test2"}
        />
        <Input
          handleChange={handleChange}
          value={200}
          title={"Over $150"}
          name={"test2"}
        />
      </div>
    </div>
  );
};

export default Price;