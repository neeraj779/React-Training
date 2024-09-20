import { useRef, useLayoutEffect } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const searchInputRef = useRef(null);

  useLayoutEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  return (
    <input
      type="text"
      placeholder="Search"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      ref={searchInputRef}
      className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  );
};
SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};

export default SearchBar;
