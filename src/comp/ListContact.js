import React   from "react";
import { Link } from "react-router-dom";

import { Icon,  Item } from 'semantic-ui-react'




const ListContact = (props) => {

   

return (

  
    <div className="ui main">
        <h2 style={{display:'flex',justifyContent:'space-between'}}>

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
                 
                            <Icon name='delete' size='large' style={{color:'red'}}  onClick={()=>props.removeContactHandler(contact.id)}/>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>


);


    

};


export default ListContact;