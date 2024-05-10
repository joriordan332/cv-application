import { useState } from "react";

function General() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

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
        <label>
            Name:{''}
            <input
                placeholder="Jonathan O'Riordan"
                value={name}
                onChange={handleName}
            />
        </label>
        <p className="nameMain">
            {name}
        </p>

        <label>
            Email:{''}
            <input
                placeholder="jonathan.o'riordan@outlook.com"
                value={email}
                onChange={handleEmail}
            />
        </label>
        <p className="emailMain">
            {email}
        </p>

        <label>
            Phone number:{''}
            <input
                placeholder="07895485628"
                value={number}
                onChange={handleNumber}
            />
        </label>
        <p className="numberMain">
            {number}
        </p>

        </div>
    );
}

export default General