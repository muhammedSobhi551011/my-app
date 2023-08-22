const Employee = (props) => {
  const userData = props.data;
  return (
    <li
      className='rounded-2 p-4 ps-2'
      style={{
        borderColor: `${
          userData.job === "Developer"
            ? "black"
            : userData.job === "UX/UI Designer"
            ? "green"
            : "yellow"
        }`,
      }}>
      <h3>{userData.name}</h3>
      <small className='fst-italic font-monospace p-1'>{userData.job}</small>
      <i style={{ color: "brown" }}>
        {userData.isActive === true ? "Active" : "Inactive"}
      </i>
    </li>
  );
};

export default Employee;
