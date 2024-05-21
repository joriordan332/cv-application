import { useState } from "react";

function Education() {
    const [isEditing, setIsEditing] = useState(false);
    const [school, setSchool] = useState('St Patrick');
    const [study, setStudy] = useState('Science');
    const [date, setDates] = useState('2005-2009');

    function handleSchool(e) {
        setSchool(e.target.value);
    }

    function handleStudy(e) {
        setStudy(e.target.value);
    }

    function handleDates(e) {
        setDates(e.target.value);
    }


    return (
        
        <div className="education">
            <div className="educationSideBar">
        <h2>Educational Experience</h2>
        <form onSubmit={e => {
            e.preventDefault();
            setIsEditing(!isEditing);
        }}>
        
        <div className="school">
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
        </div>

        <div className="study">
        <label>
            Title of Study:{' '}
            {isEditing ? (
            <input
                value={study}
                onChange={handleStudy}
            />
        ) : (
            <b>{study}</b>
        )}
        </label>
        </div>
        <div className="date">
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
        </div>
        <button type="submit">{isEditing ? 'Save' : 'Edit'}</button>
        </form>
        </div>
        <div className="educationMain">
            <h2 className="educationHeading">Education</h2>
            <div className="educationDetails">
            <p className="schoolMain">
            {school}
        </p>
        <p className="studyMain">
            {study}
        </p>
        <p className="datesMain">
            {date}
        </p>
        </div>
        </div>
        </div>
        
        
    );
}

export default Education