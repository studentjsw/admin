import React from "react";
import Sidebar from "./components/sidebar";
import Topbar from "./components/topbar";
import Footer from "./components/footer";
import Login from "./components/login";
import Buttons from "./components/buttons";
import Cards from "./components/cards";
import Register from "./components/register";
import Forgot from "./components/forgot";
import Tables from "./components/tables";
import Charts from "./components/charts";
import Dash from "./components/dashboard";
import { Route,Routes } from "react-router-dom";
export default function Wrapper()
{return(
    <div className="app-container">
        <div className="sidebar-container"><Sidebar/></div>
        <div className="content-container">
            <div className="topbar-container"><Topbar/></div>
            <div className="actualcontent-container">
                <Routes>
                    <Route path="/" element={<Dash/>}/>
                </Routes>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/forgotpassword" element={<Forgot/>}/>
                </Routes>
                <Routes>
                    <Route path="/tables" element={<Tables/>}/>
                    <Route path="/charts" element={<Charts/>}/>
                </Routes>
                <Routes>
                    <Route path="/buttons" element={<Buttons/>}></Route>
                    <Route path="/cards" element={<Cards/>}></Route>

                </Routes>
                </div>
            <div className="footer-container"><Footer/></div>
        </div>
        
    </div>
)
    
   
}