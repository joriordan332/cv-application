import { useState } from "react";

function Education() {

    const [school, setSchool] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDates] = useState('');

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
        <label>
            School Name:{''}
            <input
                placeholder="St Patrick's"
                value={school}
                onChange={handleSchool}
            />
        </label>
        <p className="nameMain">
            {school}
        </p>

        <label>
            Title of Study:{''}
            <input
                placeholder="Science"
                value={email}
                onChange={handleTitle}
            />
        </label>
        <p className="emailMain">
            {email}
        </p>

        <label>
            Date of Study:{''}
            <input
                placeholder="2005-2009"
                value={date}
                onChange={handleDates}
            />
        </label>
        <p className="datesMain">
            {date}
        </p>

        </div>
    );
}

export default Education