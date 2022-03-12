import {Provider} from "react-redux"
import CountComponent from "./Component/CountComponent";
import {store} from "./redux/store"

function App() {
  return (
    <Provider store={store}>
      <CountComponent/>
    </Provider>
  );
}

export default App;
