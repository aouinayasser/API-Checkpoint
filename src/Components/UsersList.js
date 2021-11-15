import axios from "axios"
import { useEffect, useState } from "react"
import UserCard from './UserCard';



export default function UsersList() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(resp => setUsers(resp.data))
        .catch((err) => console.log(err))
    },[])


    return(
        <div>
            <div className="Cards">
                    {users.map((user) => (
                        <UserCard user={user} key={user.id} />
                    ))}
            </div>
        </div>
    )
};
