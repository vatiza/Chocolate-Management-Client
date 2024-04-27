import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddNewChocolate = () => {
  const handleAddChocolate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const imgurl = form.imgurl.value;
    const country = form.country.value;
    const category = form.selectedOptions.value;
    const chocoleteInfo = { name, imgurl, country, category };
    console.log(chocoleteInfo);
    fetch("http://localhost:5000/chocolate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(chocoleteInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "New Chocolate Successfully Added!",
            icon: "success",
          });
        }
      });
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
          <div className="text-center mb-4 ">
            <h1 className="text-2xl font-bold">New Chocolates</h1>
            <p>Use the below form to create a new product</p>
          </div>
          <label className=" mb-4 input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              name="imgurl"
              placeholder="Image URL"
            />
          </label>
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
            <option disabled value="Category">
              Category
            </option>
            <option className="" value="Premium">
              Premium
            </option>
            <option value="Free">Free</option>
          </select>

          <input
            className="mt-4 btn w-full"
            type="submit"
            value="Add Chocolate"
          />
        </form>
      </div>
    </div>
  );
};

export default AddNewChocolate;
