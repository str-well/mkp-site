import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/HomePage";
import { Login } from "./pages/LoginPage/index.tsx";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
