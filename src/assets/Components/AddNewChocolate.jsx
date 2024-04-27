import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const AddNewChocolate = () => {
  const handleAddChocolate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const country = form.country.value;
    const category = form.selectedOptions.value;
    const chocoleteInfo = { name, country, category };
    console.log(chocoleteInfo);
  };

  return (
    <div>
      <div className="flex justify-center -ms-96">
        <Link className="btn" to="/">
          <FiArrowLeft></FiArrowLeft> All Chocolate
        </Link>
      </div>
      <div className=" mt-6 flex justify-center ">
        <form onSubmit={handleAddChocolate} className="w-full ps-96 pe-96">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              name="name"
              placeholder="Chocolate Name"
            />
          </label>
          <label className=" mt-4 input input-bordered flex items-center gap-2">
            <input
              type="text"
              name="country"
              className="grow"
              placeholder="Country"
            />
          </label>

          <select
            name="selectedOptions"
            className="select select-bordered mt-4 w-full"
          >
            <option disabled selected value="Category">
              Category
            </option>
            <option className="" value="Premium">
              Premium
            </option>
            <option value="Free">Free</option>
          </select>

          <input className="mt-4 btn" type="submit" value="Add Chocolate" />
        </form>
      </div>
    </div>
  );
};

export default AddNewChocolate;
