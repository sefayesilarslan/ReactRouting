import React from "react";
import Menu from "../../components/Menu";
import { Outlet } from "react-router-dom";
function DashboardLayout(){

   
    return  <div>
         <Menu/>
        

        <div id="content">
            <Outlet></Outlet>
        </div>
    </div>
}


export default DashboardLayout;