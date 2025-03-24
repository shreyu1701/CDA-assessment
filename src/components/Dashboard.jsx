import logo from "../assets/CDA-logo.png";
import { useState, useEffect } from "react";
import data from "../data/testdata.json";

function Dashboard() {
  const [researchData, setResearchData] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sortKey, setSortKey] = useState("title");
  const [sortOrder, setSortOrder] = useState("asc");
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      if (!data?.en) throw new Error("Failed to load data.");
      setResearchData(data.en);
    } catch (err) {
      setError(err.message);
    }
  }, []);

  const filteredData = researchData
    ?.filter((item) =>
      filter === "All" ? true : item?.therapeuticArea === filter
    )
    .filter((item) => item?.title?.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      const valueA = a?.[sortKey] || "";
      const valueB = b?.[sortKey] || "";
      return sortOrder === "asc"
        ? valueA > valueB
          ? 1
          : -1
        : valueA < valueB
        ? 1
        : -1;
    });

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between text-sm sm:text-lg font-bold text-left mb-5">
        <img src={logo} alt="CDA logo" className="h-12 sm:h-16 mb-2 sm:mb-0" />
        <h1 className="text-center sm:text-left">
          Medical Research Status Dashboard
        </h1>
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      {/* Search & Filter Container */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-between items-center mb-4">
        <input
          type="text"
          name="search-text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name"
          className="border px-3 py-2 rounded-md w-full sm:w-64"
        />
        <select
          className=" bg-[#1a1a1a] text-white px-3 py-2 rounded-md w-full sm:w-48"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Gastrointestinal">Gastrointestinal</option>
          <option value="Respiratory">Respiratory</option>
          <option value="Oncology">Oncology</option>
        </select>
        <select
          className="bg-[#1a1a1a] text-white px-3 py-2 rounded-md w-full sm:w-48"
          onChange={(e) => setSortKey(e.target.value)}
        >
          <option value="startDate">Start Date</option>
          <option value="projectedCompletion">Projected Completion</option>
        </select>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md w-full sm:w-auto"
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        >
          Sort {sortOrder === "asc" ? "👆" : "👇"}
        </button>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border text-left text-sm sm:text-md">
          <thead>
            <tr>
              <th className="p-3 border">Title</th>
              <th className="p-3 border">Therapeutic Area</th>
              <th className="p-3 border">Response Team</th>
              <th className="p-3 border">Start Date</th>
              <th className="p-3 border">Projected Completion</th>
              <th className="p-3 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <tr key={item?.id} className="border hover:bg-gray-900">
                  <td className="p-3">{item?.title || "N/A"}</td>
                  <td className="p-3">{item?.therapeuticArea || "N/A"}</td>
                  <td className="p-3">{item?.responseTeam || "N/A"}</td>
                  <td className="p-3">{item?.startDate || "N/A"}</td>
                  <td className="p-3">{item?.projectedCompletion || "N/A"}</td>
                  <td className="p-3">{item?.status || "N/A"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="p-3 text-center text-gray-400">
                  No matching records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
