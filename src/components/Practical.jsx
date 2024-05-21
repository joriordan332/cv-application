import { useState } from "react";

function Practical() {
    const [isEditing, setIsEditing] = useState(false);
    const [company, setCompanyName] = useState('Santander');
    const [position, setPosition] = useState('Quality Checker');
    const [responsibilities, setResponsibilities] = useState('Quality checking');
    const [startDate, setStartDate] = useState('10/05/2024');
    const [endDate, setEndDate] = useState('Present');

    function handleCompany(e) {
        setCompanyName(e.target.value);
    }

    function handlePosition(e) {
        setPosition(e.target.value);
    }

    function handleResponsibilities(e) {
        setResponsibilities(e.target.value);
    }

    function handleStartDate(e) {
        setStartDate(e.target.value);
    }

    function handleEndDate(e) {
        setEndDate(e.target.value);
    }


    return (
        
        <div className="practical">
        <div className="practicalSideBar">
        <h2>Practical Experience</h2>
        <form onSubmit={e => {
            e.preventDefault();
            setIsEditing(!isEditing);
        }}>
        <div className="company">
        <label>
            Company Name:{' '}
            {isEditing ? (
            <input
                value={company}
                onChange={handleCompany}
            />
        ) : (
            <b>{company}</b>
        )}
        </label>
        </div>

        <div className="position">
        <label>
            Position:{' '}
            {isEditing ? (
            <input
                value={position}
                onChange={handlePosition}
            />
        ) : (
            <b>{position}</b>
        )}
        </label>
        </div>

        <div className="responsibilities">
        <label>
            Responsibilities:{' '}
            {isEditing ? (
            <input
                value={responsibilities}
                onChange={handleResponsibilities}
            />
        ) : (
            <b>{responsibilities}</b>
        )}
        </label>
        </div>

        <div className="dates">
        <label>
            Start Date:{' '}
            {isEditing ? (
            <input
                value={startDate}
                onChange={handleStartDate}
            />
        ) : (
            <b>{startDate}</b>
        )}
        </label>
        </div>
        
        <div className="endDates">
        <label>
             End Date:{' '}
            {isEditing ? (
            <input
                value={endDate}
                onChange={handleEndDate}
            />
        ) : (
            <b>{endDate}</b>
        )}
        </label>
        </div>
        <button type="submit">{isEditing ? 'Save' : 'Edit'}</button>
        </form>
        </div>
        <div className="practicalMain">
            <h2 className="practicalHeading">Practical Experience</h2>
            <div className="practicalDetails">
            <p className="companyMain">
            {company}
            </p>

            <p className="positionMain">
            {position}
        </p>

        <p className="responsibilitiesMain">
            {responsibilities}
        </p>

        <p className="startDateMain">
            {startDate}
        </p>

        <p className="endDateMain">
            {endDate}
        </p>
        </div>
        </div>
        </div>
    );
}


export default Practical