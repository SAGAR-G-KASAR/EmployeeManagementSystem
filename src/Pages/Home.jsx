import { useState, useEffect, useRef } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedBackground from "../Components/AnimatedBackground";

gsap.registerPlugin(ScrollTrigger);

function Home({ data, setData }) {
  const [search, setSearch] = useState("");
  const [ageFilter, setAgeFilter] = useState("");
  const navigate = useNavigate();

  const pageRef = useRef(null);
  const headerRef = useRef(null);
  const tableRef = useRef(null);
  const rowsRef = useRef([]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete this Employee?")) {
      setData(data.filter((item) => item.id !== id));
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

  /* GSAP ANIMATIONS  */
  useEffect(() => {
    // Page fade in
    gsap.fromTo(
      pageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6 }
    );

    // Table fade
    gsap.from(tableRef.current, {
      opacity: 10,
      duration: 0.6,
      delay: 0.5,
    });

    // Table row scroll animation (left / right)
    rowsRef.current.forEach((row, index) => {
      gsap.fromTo(
        row,
        {
          opacity: 0,
          x: index % 2 === 0 ? -100 : -90,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 70%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
  }, [filteredUsers]);

  return (
    <section
      ref={pageRef}
      className="mt-5 min-h-screen  lg:mt-5 px-2 lg:px-10 mb-5 lg:mb-20 select-none bg-black/50"
    >
        <AnimatedBackground />

      {/*  Search / Filter / Create */}
      <div
        ref={headerRef}
        className="flex justify-between gap-5 flex-wrap"
      >
        <input
          type="text"
          placeholder="Search users"
          className="border-2 border-sky-200 text-white font-semibold mb-2 px-4 py-2 rounded-lg w-full md:w-64 focus:ring-2 focus:ring-sky-400 outline-none bg-black/"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border-2 border-sky-200 text-white bg-black mb-2 px-4 py-2 rounded-lg md:w-64 w-48 focus:ring-2 focus:ring-sky-400 outline-none"
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

        <button
          className="border rounded-lg bg-green-400 font-semibold hover:bg-green-300 cursor-pointer lg:w-20 p-2 transition"
          onClick={() => navigate("/create")}
        >
          Create
        </button>
      </div>

      {/*  Table */}
      <table
        ref={tableRef}
        className="w-full mt-4 border-separate border-spacing-y-2 lg:border-spacing-y-3"
      >
        <thead>
          <tr className="bg-gray-600 text-white font-semibold text-sm lg:text-lg">
            <td className="lg:p-3 p-1">SR No.</td>
            <td className="lg:p-3 p-1">Id</td>
            <td className="lg:p-3 p-1">Name</td>
            <td className="lg:p-3 p-1">Mo. number</td>
            <td className="lg:p-3 p-1">Age</td>
            <td className="lg:p-3 p-1">Actions</td>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center p-4 text-gray-400">
                No records found
              </td>
            </tr>
          ) : (
            filteredUsers.map((item, index) => (
              <tr
                key={item.id}
                ref={(el) => (rowsRef.current[index] = el)}
                className="bg-gray-800 text-white rounded-lg"
              >
                <td className="lg:p-3 p-1">{index + 1}</td>
                <td className="lg:p-3 p-1">{item.id}</td>
                <td className="lg:p-3 p-1">{item.name}</td>
                <td className="lg:p-3 p-1">{item.mobile}</td>
                <td className="lg:p-3 p-1">{item.age}</td>
                <td>
                  <div className="flex lg:gap-2">
                    <button
                      className="border cursor-pointer  text-black rounded-full md:rounded-lg font-semibold bg-sky-300 hover:bg-sky-200 p-2 transition"
                      onClick={() => navigate(`/edit/${item.id}`)}
                    >
                      <MdEdit className="md:hidden" />
                      <span className="hidden md:inline">Edit</span>
                    </button>

                    <button
                      className="border cursor-pointer text-black rounded-full md:rounded-lg font-semibold bg-red-400 hover:bg-red-300 p-2 transition"
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
    </section>
  );
}

export default Home;
