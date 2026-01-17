import { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Home({ data, setData }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [ageFilter, setAgeFilter] = useState("");

  const handleDelete = (id) => {
    if (id > 0) {
      if (window.confirm("Are You sure to delete this Employee??")) {
        setData(data.filter((item) => item.id !== id));
      }
    }
  };

  const filteredUsers = data.filter((u) => {
    const matchesSearch =
      u.name?.toLowerCase().includes(search.toLowerCase()) ||
      String(u.mobile ?? "").includes(search) ||
      String(u.age ?? "").includes(search) ||
      String(u.id ?? "").includes(search);

    const matchesAge = ageFilter === "" || String(u.age) === ageFilter;

    return matchesSearch && matchesAge;
  });

  return (
    <>
      <section className="mt-5 min-h-screen  lg:mt-10 px-2 lg:px-10 mb-5 lg:mb-20 select-none ">
        <div className="flex justify-between gap-5">
          <input
            type="text"
            placeholder="Search users."
            className="border-2 border-sky-200 backdrop-blur-xs  text-white font-semibold duration-300  mb-2 px-4 py-2 rounded-lg w-full md:w-64 focus:ring-2 focus:border-none focus:ring-sky-400 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="border-2 border-sky-200  text-white  bg-black duration-300 mb-2 px-4 py-2 rounded-lg md:w-64 focus:ring-2 focus:border-none focus:ring-sky-400 outline-none w-48"
            value={ageFilter}
            onChange={(e) => setAgeFilter(e.target.value)}
          >
            <option value="">All Ages</option>
            <option value="20">20</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="30">30</option>
          </select>

          <div>
            <button
              className="border rounded-lg bg-green-400 font-semibold  hover:bg-green-300 cursor-pointer lg:w-20 p-2 "
              onClick={() => navigate("/create")}
            >
              Create
            </button>
          </div>
        </div>

        {/* table  */}
        <div>
          <table className="w-full backdrop-blur-xs  mt-2  border-separate border-spacing-y-2 lg:border-spacing-y-3 ">
            <thead>
              <tr className="bg-gray-600 text-white  font-semibold text-sm  lg:text-lg">
                <td className="lg:p-3 p-1 text-left">SR No.</td>
                <td className="lg:p-3 p-1 text-left">Id</td>
                <td className="lg:p-3 p-1 text-left">Name</td>
                <td className="lg:p-3 p-1 text-left">Mo. number</td>
                <td className="lg:p-3 p-1 text-left">Age</td>
                <td className="lg:p-3 p-1 text-left">Actions</td>
              </tr>
            </thead>
            <tbody>
              {filteredUsers?.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center p-4 text-gray-500">
                    No records found
                  </td>
                </tr>
              ) : (
                filteredUsers?.map((item, index) => (
                  <tr
                    className="bg-gray-800 text-white shadow-2xs rounded-lg"
                    key={item.id}
                  >
                    <td className="lg:p-3 p-1">{index + 1}</td>
                    <td className="lg:p-3 p-1">{item.id}</td>
                    <td className="lg:p-3 p-1">{item.name}</td>
                    <td className="lg:p-3 p-1">{item.mobile}</td>
                    <td className="lg:p-3 p-1">{item.age}</td>
                    <td>
                      <div className="flex lg:gap-2">
                        <button
                          className="border text-black rounded-full md:rounded-lg font-semibold bg-sky-300 hover:bg-sky-200 cursor-pointer lg:w-15 p-2"
                          onClick={() => navigate(`/edit/${item.id}`)}
                        >
                          <MdEdit className="md:hidden" />
                          <span className="hidden md:inline">Edit</span>
                        </button>
                        &nbsp;
                        <button
                          className="border text-black rounded-full md:rounded-lg font-semibold bg-red-400  hover:bg-red-300 cursor-pointer lg:w-17 p-2 "
                          onClick={() => handleDelete(item.id)}
                        >
                          <MdDelete className="md:hidden" />
                          <span className="hidden md:inline">Delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default Home;
