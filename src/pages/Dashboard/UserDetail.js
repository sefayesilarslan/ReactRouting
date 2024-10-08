import React, { useEffect, useState } from "react";
import { json, useParams,Link,useLocation } from "react-router-dom";

function UserDetail() {

    const { id } = useParams();
    const location=useLocation();
    const [user, SetUser] = useState(null);

    console.log(location);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => res.json())
            .then((data) => SetUser(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, [id])
    return <div>

        <h2>Kullanıcı Detay</h2>
        
            {
                user && <pre>{JSON.stringify(user, null, 2)}</pre>
            }
        <Link to={`/users/${Number(id)+1}`}>Sonraki Kullanıcı</Link>

    </div>
}


export default UserDetail;