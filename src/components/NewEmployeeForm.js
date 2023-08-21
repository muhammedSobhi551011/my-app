import { useState } from "react"

const NewEmployeeForm = (props) => {
    // STATES
    const [name,setName] = useState("")
    const [job,setJob] = useState("Developer")
    // END STATES
    // FUNCTIONS
    const handleName = (event)=>{
        setName(event.target.value)
    }
    const handleJob = (event)=>{
        setJob(event.target.value)
    }
    const submitEmployee = (e)=>{
        e.preventDefault()
        if(name===""){
            alert("add name")
            return
        }
        const employee = {
            id: new Date().getTime(),
            name,
            job,
            isActive:true
        }
        props.addNewEmployee(employee)
        setName("")
        setJob("Developer")
    }
    // END FUNCTIONS
    return (
            <form className="d-flex flex-column align-items-center">
                <h2 className="mb-3 mt-3">Add new employee</h2>
                <div className="mb-4">
                    <label htmlFor="name" className="form-label">Employee Name</label>
                    <input value={name} onChange={handleName} type="text" className="form-control mb-2 border-0 bg-secondary text-white placeholder-wave" placeholder="Employee Name..."></input>
                    <label htmlFor="job" className="form-label">Job</label>
                    <select value={job} onChange={handleJob} className="form-select bg-secondary text-white border-0">
                        <option value="Developer">Developer</option>
                        <option value="UX/UI Designer">UX/UI Designer</option>
                        <option value="Electrical Engineer">Electrical Engineer</option>
                    </select>
                </div>
                <button onClick={submitEmployee} type="submit" className="btn btn-outline-primary mb-3 ">Submit</button>
            </form>
    )
}

export default NewEmployeeForm