import { useState } from "react";

function Practical() {

    const [company, setCompanyName] = useState('');
    const [position, setPosition] = useState('');
    const [responsibilities, setResponsibilities] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

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
       
        <h2>Practical Experience</h2>
        <label>
            Company Name:{''}
            <input
                placeholder="Santander"
                value={company}
                onChange={handleCompany}
            />
        </label>
        <p className="companyMain">
            {company}
        </p>

        <label>
            Position:{''}
            <input
                placeholder="Quality Checker"
                value={position}
                onChange={handlePosition}
            />
        </label>
        <p className="positionMain">
            {position}
        </p>

        <label>
            Responsibilities:{''}
            <input
                placeholder="Quality checking"
                value={responsibilities}
                onChange={handleResponsibilities}
            />
        </label>
        <p className="responsibilitiesMain">
            {responsibilities}
        </p>

        <label>
            Start Date:{''}
            <input
                placeholder="10/05/2024"
                value={startDate}
                onChange={handleStartDate}
            />
        </label>
        <p className="startDateMain">
            {startDate}
        </p>

        <label>
             End Date:{''}
            <input
                placeholder="Present"
                value={endDate}
                onChange={handleEndDate}
            />
        </label>
        <p className="endDateMain">
            {endDate}
        </p>
        
        </div>
    );
}


export default Practical