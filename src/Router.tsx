import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/HomePage";
import { Login } from "./pages/LoginPage/index.tsx";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
