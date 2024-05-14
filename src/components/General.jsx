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
        
        <div className="experience">
       
        <h2>General</h2>
        <form onSubmit={e => {
            e.preventDefault();
            setIsEditing(!isEditing);
        }}>
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
        <p className="nameMain">
            {name}
        </p>

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
        <p className="emailMain">
            {email}
        </p>

        <label>
            Phone number:{' '}
            {isEditing ? (
            <input
                value={number}
                onChange={handleNumber}
            />
        ) : (
            <b>{number}</b>
        )}
        </label>
        <p className="numberMain">
            {number}
        </p>
        <button type="submit">{isEditing ? 'Save' : 'Edit'}</button>
        </form>
        </div>
    );
}

export default General