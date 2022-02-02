import React from 'react';
import { Card,Button } from 'react-bootstrap';
import PropTypes from "prop-types";
function Profile(props) {
    return (
        <div style={{display:'flex' ,justifyContent:'center'}}>
            
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.children}></Card.Img>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                {props.bio}
                </Card.Text>
                <Card.Text>
                {props.profession}
                </Card.Text>
            <Button variant="primary" onClick={()=>props.a(props.name)} >Alert</Button>
            </Card.Body>
            </Card>
        </div>
        
    )
}
Profile.defaultProps = {
    name:"name" ,bio:"bio" ,profession:"profession"
}
Profile.propTypes = {

    name:PropTypes.string , bio:PropTypes.string , profession:PropTypes.string

}
export default Profile;
