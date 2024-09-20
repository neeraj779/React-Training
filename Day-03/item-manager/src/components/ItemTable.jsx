import { FaSortAlphaDown, FaSortAlphaUp, FaTrashAlt } from "react-icons/fa";
import PropTypes from "prop-types";

const ItemTable = ({ items, removeItem, sortOption, toggleSort }) => {
  return (
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
        {items.map((item, index) => (
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
  );
};
ItemTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  removeItem: PropTypes.func.isRequired,
  sortOption: PropTypes.string.isRequired,
  toggleSort: PropTypes.func.isRequired,
};

export default ItemTable;
