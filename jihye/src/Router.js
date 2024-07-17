import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage/Login";
import SignupPage from "./components/SignupPage/Signup";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/Login" element={<LoginPage />} />
                <Route exact path="/Singup" element={<SignupPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;