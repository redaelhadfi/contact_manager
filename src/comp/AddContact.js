 
import React from "react";
import { Link } from "react-router-dom";





const AddContact = (props) => {
const item={
    name:"",
    email:"",

};

const add=(e)=>{
    e.preventDefault();  
    if(e.target.name.value==="" || e.target.email.value==="" ){
        alert("All the fields are mandatory!");
        return;
    } 
    item.name=e.target.name.value;
    item.email=e.target.email.value;
    props.addContactHandler(item);
    console.log(item);  
    e.target.name.value="";
    e.target.email.value="";

   
    return;
};

   

    return (
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={add}>

                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email" />
                </div>
                <button className="ui button blue">Add</button>
                <Link to="/">
                    <button className="ui button blue">Cancel</button>
                </Link>
             
               
            </form>
        </div>
    );};





export default AddContact;