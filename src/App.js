import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Single from "./pages/singledetails/Single";
import Addnew from "./pages/addnew/Addnew";
import Datalist from "./pages/datalist/Datalist";
import { userInputs } from "./formSource";
import { productInputs } from "./formSource";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<Datalist />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<Addnew inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<Datalist />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={
                  <Addnew inputs={productInputs} title="Add New Product" />
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
