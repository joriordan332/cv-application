import { useState } from "react";

function Practical() {
    const [company, setCompanyName] = useState('');
    const [position, setPosition] = useState('');
    const [responsibilities, setResponsibilities] = useState('');
    const [dates, setDates] = useState('');

    function handleCompany(e) {
        setCompanyName(e.target.value);
    }

    function handlePosition(e) {
        setPosition(e.target.value);
    }

    function handleResponsibilities(e) {
        setResponsibilities(e.target.value);
    }

    function handleDates(e) {
        setDates(e.target.value);
    }

    function editInput() {
        setCompanyName('');
        setPosition('');
        setResponsibilities('');
        setDates('');
    }

    return (
        <>
        <h2>Practical Experience</h2>
        
        <form onSubmit={e => e.preventDefault()}>
        <ul>
            <label htmlFor="company">Company Name</label>
            <input 
            type="text"
            id="company"
            placeholder="Santander"
            value={company}
            onChange={handleCompany}
            />
        </ul>
        <ul>
        <label htmlFor="position">Position Title</label>
            <input 
            type="text"
            id="position"
            placeholder="Quality Checker"
            value={position}
            onChange={handlePosition}
            />
       </ul>
       <ul>
        <label htmlFor="responsibilities">Responsibilities</label>
            <input 
            type="text"
            id="responsibilities"
            placeholder="Quality checked departments work to make sure all the correct information was being send to the customer etc" 
            value={responsibilities}
            onChange={handleResponsibilities}
            />
        </ul>
        <ul>
        <label htmlFor="dates">Date from and until when you worked for that company</label>
            <input 
            type="text"
            id="dates"
            placeholder="2015-Present"
            value={dates}
            onChange={handleDates}
            />
        </ul>
        </form>
        <button onClick={editInput}>Edit</button>
        <button onClick={renderPractical}>Submit</button>
        </>
    )
}


function renderPractical({title, companyName, positionTitle, responsibilities, dates}) {
    return (
        <section>
            <h2>HI THERE</h2>

        </section>
    )
}

export default Practical