import { Link, useLoaderData } from "react-router-dom";

import { FiPlus } from "react-icons/fi";

const Chocolate = () => {
  const chocolates = useLoaderData();
  console.log(chocolates);
  return (
    <div>
      <div className="flex justify-center -ms-96">
        <Link className="btn" to="/addnew">
          <FiPlus></FiPlus> New Chocolate
        </Link>
      </div>
      <div className="flex justify-center ">
        <div className="overflow-x-auto">
          <table className="table ">
            <thead className="text-lime-600">
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Country/Factory</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {chocolates.map((chocolate) => (
                <tr key={chocolate._id}>
                  <td>
                    {" "}
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="https://img.icons8.com/ios/50/user-male-circle--v1.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{chocolate.name}</td>
                  <td>{chocolate.country}</td>
                  <td>{chocolate.category}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Chocolate;
