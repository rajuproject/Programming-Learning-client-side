
import { RouterProvider } from "react-router-dom";
import Navba from "./components/Navbar";
import router from "./routes/routes";




function App() {
  return (
    <div>
      <RouterProvider router = {router}/>
      <Navba></Navba>
    </div>
  );
}

export default App;
