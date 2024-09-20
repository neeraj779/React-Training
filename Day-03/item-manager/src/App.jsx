import { ItemProvider } from "./contexts/ItemContext";
import Item from "./pages/Item";

function App() {
  return (
    <ItemProvider>
      <Item />
    </ItemProvider>
  );
}

export default App;
