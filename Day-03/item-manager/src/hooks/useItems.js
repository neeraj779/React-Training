import { useContext } from "react";
import ItemContext from "../contexts/ItemContext";

const useItems = () => {
  return useContext(ItemContext);
};

export default useItems;
