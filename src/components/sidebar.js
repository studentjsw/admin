import React from "react";
import { Link } from "react-router-dom";
import '../startbootstrap-sb-admin-2-gh-pages/css/sb-admin-2.min.css';
import '../startbootstrap-sb-admin-2-gh-pages/vendor/fontawesome-free/css/all.min.css'

export default function Sidebar()
{
    return(
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

          
            
               
                    <li className="treka">
                    <i class="fas fa-laugh-wink"></i>
                        <Link to="/">SB Admin <sup>2</sup></Link>
                        </li>
                
              
                
            
            <hr className="sidebar-divider my-0"/>

           
            <li className="nav-item treka">
                
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                   <Link to="/"><b>Dashboard</b></Link>
            </li>

           
            <hr className="sidebar-divider"/>

            
            <div className="sidebar-heading">
                Interface
            </div>

          
            <li className="nav-item">
                <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Components</span>
                </a>
                <ul className="text">
                            <li><Link to={"/cards"}>Cards</Link></li>
                            <li ><Link to={"/buttons"}>Buttons</Link></li>
                        </ul>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Components:</h6>
                        <a className="collapse-item" href="buttons.html">Buttons</a>
                        <a className="collapse-item" href="cards.html">Cards</a>
                       
                    </div>
                </div>
            </li>

           
            <li className="nav-item">
                <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>Utilities</span>
                </a>
                <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Utilities:</h6>
                        <a className="collapse-item" href="utilities-color.html">Colors</a>
                        <a className="collapse-item" href="utilities-border.html">Borders</a>
                        <a className="collapse-item" href="utilities-animation.html">Animations</a>
                        <a className="collapse-item" href="utilities-other.html">Other</a>
                    </div>
                </div>
            </li>

         
            <hr className="sidebar-divider"/>

           
            <div className="sidebar-heading">
                Addons
            </div>

            
            <li className="nav-item active">
                <a className="nav-link" href="/" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true"
                    aria-controls="collapsePages">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                </a>
                <div id="collapsePages" class="collapse show" aria-labelledby="headingPages"
                    data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Login Screens:</h6>

                        
                      
                        <ul>
                            <li>
                                <Link to={"/login"}>Login</Link>
                            </li>
                            <li>
                             <Link to={"/register"}>Register</Link>
                            </li>
                            <li>
                                <Link to={"/forgotpassword"}>Forgot Password</Link>
                            </li>
                           
                            
                        </ul>
                        
                        
                    </div>
                </div>
            </li>

          
            <li class="nav-item treka">
                
                    <i class="fas fa-fw fa-chart-area"></i>
                    <Link to={"/charts"}><b>Charts</b></Link>

                    
            </li>

           
            <li class="nav-item treka">
                
                    <i class="fas fa-fw fa-table"></i>
                    <Link to={"/tables"}><b>Tables</b></Link>
            </li>

           
            <hr class="sidebar-divider d-none d-md-block"/>

           
            <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

        </ul>
      
    )
}