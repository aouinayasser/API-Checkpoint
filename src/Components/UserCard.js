import { Card ,Button } from 'react-bootstrap';
import { Link } from "react-router-dom";



function UserCard ({user}) {
    return (
       
            <Card style={{ marginTop :"10px", borderRadius:".75rem", width : "20rem"}}>
                <Card.Body>
                    <Card.Text>{user.name}</Card.Text>
                    <Card.Text>{user.email}</Card.Text>
                    <Button variant="dark">
                        <Link to={`/profile/${user.id}`} >
                            Profile
                        </Link>
                    </Button>
                </Card.Body>
            </Card>
      
    )
}

export default UserCard