import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

function EmployeeForm({ data, setData }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const isEdit = Boolean(id);

  const emp = isEdit ? data.find((e) => e.id === Number(id)) : null;

  const [form, setForm] = useState(emp ?? { id: "", name: "", mobile: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEdit) {
      // UPDATE DATA
      setData((prev) => prev.map((e) => (e.id === Number(id) ? form : e)));
    } else {
      // CREATE DATA
      const newId =
        data.length > 0 ? Math.max(...data.map((e) => e.id)) + 1 : 1;
      setData((prev) => [...prev, { ...form, id: newId }]);
    }

    navigate("/");
  };

  return (
    <section>
      <button
        onClick={() => navigate(-1)}
        className="px-3 text-2xl justify-center  m-2 h-8 cursor-pointer text-white rounded  transition"
      >
        <IoMdArrowRoundBack />
      </button>
      <div className=" justify-items-center   mt-5 lg:mt-10 mx-5 lg:mx-50 select-none ">
        <form
          onSubmit={handleSubmit}
          className="p-10 border-2 border-sky-200 my-10 rounded-lg  backdrop-blur-sm   w-auto shadow-sky-300 shadow-2xl "
        >
          <div className="w-max">
            <h2 className="  mb-10 pr-5 lg:text-5xl text-2xl text-white font-bold hover:text-sky-400 transition-colors">
              {isEdit ? "Edit Employee" : "Create Employee"}
            </h2>
          </div>

          <input
            placeholder="Name"
            required
            pattern="[A-Za-z ]+"
            title="Only alphabets allowed"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border-2 border-sky-200  text-white font-semibold w-full p-2 mb-2 block rounded-md focus:ring-2 focus:border-none focus:ring-sky-400 outline-none"
          />

          <input
            placeholder="Mobile"
            required
            value={form.mobile}
            pattern="(\+91[\-\s]?)?[6-9]\d{9}"
            title="Enter valid Indian mobile number"
            onChange={(e) => setForm({ ...form, mobile: e.target.value })}
            className="border-2 border-sky-200  text-white font-semibold w-full p-2 mb-2 block rounded-md focus:ring-2 focus:border-none focus:ring-sky-400 outline-none"
          />

          <input
            placeholder="Age"
            type="number"
            min="1"
            max="120"
            required
            value={form.age}
            onChange={(e) => setForm({ ...form, age: e.target.value })}
            className="border-2 border-sky-200  text-white font-semibold w-full  p-2 mb-2 block rounded-md focus:ring-2 focus:border-none focus:ring-sky-400 outline-none"
          />

          <div className="flex justify-center mt-5">
            <button className="bg-green-500 font-semibold text-black hover:bg-green-600 hover:text-white cursor-pointer  px-4 py-2 rounded">
              {isEdit ? "Update" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default EmployeeForm;
