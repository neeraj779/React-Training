import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { FaSortAlphaDown, FaSortAlphaUp, FaTrashAlt } from "react-icons/fa";
import useItems from "../hooks/useItems";
import useFilterAndSort from "../hooks/useFilterAndSort";

const Item = () => {
  const { state, dispatch } = useItems();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const searchInputRef = useRef(null);

  const filteredAndSortedItems = useFilterAndSort(
    state,
    searchTerm,
    sortOption
  );

  const addItem = () => {
    if (name && description) {
      dispatch({ type: "ADD_ITEM", payload: { name, description } });
      setName("");
      setDescription("");
    }
  };

  const removeItem = (index) => {
    dispatch({ type: "REMOVE_ITEM", payload: index });
  };

  useEffect(() => {
    console.info(state);
  }, [state]);

  useLayoutEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  const toggleSort = (option) => {
    setSortOption((prevSortOption) =>
      prevSortOption === option ? `${option}_desc` : option
    );
  };

  return (
    <div className="container max-w-4xl p-6 mx-auto">
      <h1 className="mb-8 text-3xl font-bold text-center text-gray-800">
        Dynamic Item Manager
      </h1>

      <div className="p-6 mb-6 bg-white rounded-lg shadow-md">
        <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-3">
          <input
            type="text"
            placeholder="Item Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Item Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={addItem}
            className="p-3 font-semibold text-white transition duration-300 ease-in-out bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Add Item
          </button>
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            ref={searchInputRef}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <table className="min-w-full overflow-hidden rounded-lg shadow-lg bg-gray-50">
          <thead className="text-sm leading-normal text-gray-600 uppercase bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-left">
                Name
                <button
                  onClick={() => toggleSort("name")}
                  className="ml-2 text-gray-500 hover:text-gray-700"
                >
                  {sortOption === "name" ? (
                    <FaSortAlphaDown />
                  ) : sortOption === "name_desc" ? (
                    <FaSortAlphaUp />
                  ) : (
                    <FaSortAlphaDown />
                  )}
                </button>
              </th>
              <th className="px-6 py-3 text-left">
                Description
                <button
                  onClick={() => toggleSort("description")}
                  className="ml-2 text-gray-500 hover:text-gray-700"
                >
                  {sortOption === "description" ? (
                    <FaSortAlphaDown />
                  ) : sortOption === "description_desc" ? (
                    <FaSortAlphaUp />
                  ) : (
                    <FaSortAlphaDown />
                  )}
                </button>
              </th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {filteredAndSortedItems.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="px-6 py-3 text-left">{item.name}</td>
                <td className="px-6 py-3 text-left">{item.description}</td>
                <td className="px-6 py-3 text-center">
                  <button
                    onClick={() => removeItem(index)}
                    className="text-red-500 transition duration-300 ease-in-out hover:text-red-700"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Item;
