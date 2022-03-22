import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Single from "./pages/singledetails/Single";
import Addnew from "./pages/addnew/Addnew";
import Datalist from "./pages/datalist/Datalist";
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
              <Route path="new" element={<Addnew />} />
            </Route>
            <Route path="products">
              <Route index element={<Datalist />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<Addnew />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
