import Welcome from "./pages/Welcome.jsx";
import AppHeader from "./components/layout/AppHeader.jsx";
import SignUp from "./pages/SignUp.jsx";
import AppFooter from "./components/layout/AppFooter.jsx";
import Login from "./pages/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden'
};

export default function App() {
  return ( 
    <BrowserRouter>
    <div>
        <AppHeader />

        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/registration" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <AppFooter />
    </div>
    </BrowserRouter>
    )
}

