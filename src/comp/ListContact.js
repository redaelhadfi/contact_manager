import React   from "react";
import { Link } from "react-router-dom";

import { Icon,  Item } from 'semantic-ui-react'




const ListContact = (props) => {

   

return (

  
    <div className="ui main">
        <h2>List Contact 
        <Link to="/add">
        <Icon name='add' size='large' style={{color:'blue'}} />
        </Link>
        </h2>
        <table className="ui celled table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.contacts.map((contact) => (
                    <tr key={contact.id}>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                        <td>
                            <Link to={`/edit/${contact.id}`}>
                                <Icon name='edit' size='large' style={{color:'green'}} />
                            </Link>
                            <Icon name='delete' size='large' style={{color:'red'}}  onClick={()=>props.removeContactHandler(contact.id)}/>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>

/* 
    <div className="ui celled list"> 
 
        <h2>List Contact 
        <Link to="/add">
        <Icon name='add' size='large' style={{color:'blue'}} />
        </Link>
        </h2>
        <Item.Group divided >
            {props.contacts.map((contact) => (
                <Item>
                 <Icon name='user circle' size='huge' />
            
                <Item.Content >
                   <Item.Header>{contact.name}</Item.Header>
                   <Item.Description>{contact.email}</Item.Description>
                </Item.Content>
            <Icon name='delete' size='large' style={{color:'red'}}  onClick={()=>props.removeContactHandler(contact.id)}/>
              </Item>
            ))}
    
        </Item.Group>
    </div> */


);


    

};


export default ListContact;