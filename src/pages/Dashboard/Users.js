import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

function Users(){

    const [users,SetUsers]=useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((res) => res.json())
          .then((data) => SetUsers(data)) 
          .catch((error) => console.error("Error fetching data:", error));
      }, []);



    return <div>
        
        <h2>Kullanıcılar</h2>
      <ul>
        {
        users.map((user)=>(
            <li key={user.id}>
               <Link to={`${user.id}`} state={{user}}>{user.name}</Link>  
            </li>
        ))
        }
        </ul>
    </div>
}


export default Users;