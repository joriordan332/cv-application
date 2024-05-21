import { useState } from "react";

function General() {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState('Jonathan ORiordan');
    const [email, setEmail] = useState('jonathan.oriordan@outlook.com');
    const [number, setNumber] = useState('07895485628');

    function handleName(e) {
        setName(e.target.value);
    }

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function handleNumber(e) {
        setNumber(e.target.value);
    }


    return (
        
        <div className="general">
            <div className="generalSideBar">
       
        <h2 className="generalTitle">General</h2>
        <form onSubmit={e => {
            e.preventDefault();
            setIsEditing(!isEditing);
        }}>
        <div className="name">
        <label>
            Name:{' '}
            {isEditing ? (
            <input
                value={name}
                onChange={handleName}
            />
        ) : (
            <b>{name}</b>
        )}
        </label>
        </div>

        <div className="email">
        <label>
            Email:{' '}
            {isEditing ? (
            <input
                value={email}
                onChange={handleEmail}
            />
        ) : (
            <b>{email}</b>
        )}
        </label>
        </div>

        <div className="phone">
        <label>
            Phone:{' '}
            {isEditing ? (
            <input
                value={number}
                onChange={handleNumber}
            />
        ) : (
            <b>{number}</b>
        )}
        </label>
        </div>
        <button type="submit">{isEditing ? 'Save' : 'Edit'}</button>
        </form>
            </div>
            <div className="generalMain">
                <h1 className="nameMain">
            {name}

            </h1>
            <div className="generalDetails">
            
            <p className="emailMain">
            {email}
        </p>

        <p className="numberMain">
            {number}
        </p>
        
        </div>
            </div>
        </div>
        
    );
    
}

export default General