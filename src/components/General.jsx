function General() {


    return (
        <>
        <h2>General Information</h2>
        
        <form onSubmit={e => e.preventDefault()}>
        <ul>
            <label htmlFor="name">Name</label>
            <input 
            type="text"
            id="name"
            placeholder="Jonathan ORiordan" 
            />
        </ul>
        <ul>
        <label htmlFor="email">Email</label>
            <input 
            type="text"
            id="email"
            placeholder="jonathanoriordan@outlook.com" 
            />
       </ul>
       <ul>
        <label htmlFor="phone">Phone Number</label>
            <input 
            type="text"
            id="email"
            placeholder="jonathanoriordan@outlook.com" 
            />
        </ul>
        </form>
        
        
        </>
    )
}

export default General