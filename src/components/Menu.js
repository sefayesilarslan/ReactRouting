import React from "react";
import { Link,useNavigate } from "react-router-dom";
function Menu() {
    const navigate=useNavigate();
    return <div>

        <ul className="menu">
        <li onClick={()=>navigate(-1)}>Geri</li>
            <li><Link to="/" >Anasayfa</Link></li>
            <li><Link to="users">Kullanıcılar</Link></li>
            <li><Link to="contact">İleştişim</Link></li>
            <li onClick={()=>navigate("contact")}>İleştişim</li>
            
            
            
            
        </ul>
    </div>
}


export default Menu;