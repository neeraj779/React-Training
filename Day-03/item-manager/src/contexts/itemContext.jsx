import PropTypes from "prop-types";
import { useEffect, createContext, useReducer } from "react";
import itemReducer from "../reducers/itemReducer";

const ItemContext = createContext();

const initialState = JSON.parse(localStorage.getItem("items")) || [];

export function ItemProvider({ children }) {
  const [state, dispatch] = useReducer(itemReducer, initialState);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(state));
  }, [state]);

  return (
    <ItemContext.Provider value={{ state, dispatch }}>
      {children}
    </ItemContext.Provider>
  );
}

ItemProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ItemContext;
