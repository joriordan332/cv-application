function Education() {


    return (
        <>
        <h2>Educational Experience</h2>
        
        <form onSubmit={e => e.preventDefault()}>
        <ul>
            <label htmlFor="school">School Name</label>
            <input 
            type="text"
            id="school"
            placeholder="St Patrick's" 
            />
        </ul>
        <ul>
        <label htmlFor="study">Title of Study</label>
            <input 
            type="text"
            id="study"
            placeholder="Science" 
            />
       </ul>
       <ul>
        <label htmlFor="date">Date of Study</label>
            <input 
            type="text"
            id="date"
            placeholder="2005-2009" 
            />
        </ul>
        </form>
        </>
    )
}

export default Education