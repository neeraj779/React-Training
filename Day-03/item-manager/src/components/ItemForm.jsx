import { useState } from "react";
import PropTypes from "prop-types";

const ItemForm = ({ addItem }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description) {
      addItem({ name, description });
      setName("");
      setDescription("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-3"
    >
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
        type="submit"
        className="p-3 font-semibold text-white transition duration-300 ease-in-out bg-blue-500 rounded-lg hover:bg-blue-600"
      >
        Add Item
      </button>
    </form>
  );
};
ItemForm.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default ItemForm;
