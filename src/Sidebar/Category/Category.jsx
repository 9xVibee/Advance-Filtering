/* eslint-disable react/prop-types */
import Input from "../../components/Input";
import "./Category.css";

const Category = ({ handleChange }) => {
  return (
    <div className="category">
      <h2 className="sidebar-title">Category</h2>
      <div className="container">
        <Input
          // key={Math.random}
          handleChange={handleChange}
          value={""}
          title={"All"}
          name={"test"}
        />
        <Input
          handleChange={handleChange}
          value={"sneakers"}
          title={"Sneakers"}
          name={"test"}
        />
        <Input
          handleChange={handleChange}
          value={"flats"}
          title={"Flats"}
          name={"test"}
        />
        <Input
          handleChange={handleChange}
          value={"sandals"}
          title={"Sandals"}
          name={"test"}
        />
      </div>
    </div>
  );
};

export default Category;
