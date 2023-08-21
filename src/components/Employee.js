const Employee = (props) => {
  const data = props.data
  return (
    <ul className="list p-3 bg-gradient bg-secondary-subtle rounded-4">
      {data.map((ele)=>{
        return(
          <li key={ele.id} className="rounded-2 p-4 ps-2" style={{"borderColor":`${ele.job==="Developer"?("black"):(ele.job==="UX/UI Designer"?("green"):("yellow"))}`}}>
            <h3>{ele.name}</h3>
            <small className="fst-italic font-monospace p-1">{ele.job}</small>
            <i style={{"color":"brown"}}>{ele.isActive===true? ("Active"):("Inactive")}</i>
          </li>
        )
      })}
    </ul>
  )
}

export default Employee