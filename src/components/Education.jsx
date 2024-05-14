import { useState } from "react";

function Education() {
    const [isEditing, setIsEditing] = useState(false);
    const [school, setSchool] = useState('St Patrick');
    const [email, setEmail] = useState('Science');
    const [date, setDates] = useState('2005-2009');

    function handleSchool(e) {
        setSchool(e.target.value);
    }

    function handleTitle(e) {
        setEmail(e.target.value);
    }

    function handleDates(e) {
        setDates(e.target.value);
    }


    return (
        
        <div className="experience">
       
        <h2>Educational Experience</h2>
        <form onSubmit={e => {
            e.preventDefault();
            setIsEditing(!isEditing);
        }}>
        <label>
            School Name:{' '}
            {isEditing ? (
            <input
                value={school}
                onChange={handleSchool}
            />
        ) : (
            <b>{school}</b>
        )}
        </label>
        <p className="nameMain">
            {school}
        </p>

        <label>
            Title of Study:{' '}
            {isEditing ? (
            <input
                value={email}
                onChange={handleTitle}
            />
        ) : (
            <b>{email}</b>
        )}
        </label>
        <p className="emailMain">
            {email}
        </p>

        <label>
            Date of Study:{' '}
            {isEditing ? (
            <input
                value={date}
                onChange={handleDates}
            />
        ) : (
            <b>{date}</b>
        )}
        </label>
        <p className="datesMain">
            {date}
        </p>
        <button type="submit">{isEditing ? 'Save' : 'Edit'}</button>
        </form>
        </div>
    );
}

export default Education