
import { Toaster } from "react-hot-toast";
import {RouterProvider } from "react-router-dom";
import {routes} from './routes/routes.js'





function App() {
  return (
    <div>
      <RouterProvider router = {routes}/>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
