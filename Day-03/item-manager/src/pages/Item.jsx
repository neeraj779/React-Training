import { useEffect, useState } from "react";
import useItems from "../hooks/useItems";
import useFilterAndSort from "../hooks/useFilterAndSort";
import ItemForm from "../components/ItemForm";
import SearchBar from "../components/SearchBar";
import ItemTable from "../components/ItemTable";

const Item = () => {
  const { state, dispatch } = useItems();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  const filteredAndSortedItems = useFilterAndSort(
    state,
    searchTerm,
    sortOption
  );

  const addItem = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeItem = (index) => {
    dispatch({ type: "REMOVE_ITEM", payload: index });
  };

  useEffect(() => {
    console.info(state);
  }, [state]);

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
        <ItemForm addItem={addItem} />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ItemTable
          items={filteredAndSortedItems}
          removeItem={removeItem}
          sortOption={sortOption}
          toggleSort={toggleSort}
        />
      </div>
    </div>
  );
};

export default Item;
