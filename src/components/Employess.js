import Employee from "./Employee";
import NewEmployeeForm from "./NewEmployeeForm";
import { useState } from "react";
const initialData = [
  {
    id: 1,
    name: "Mohammed 1",
    job: "Developer",
    isActive: true,
  },
  {
    id: 2,
    name: "Mohammed 2",
    job: "UX/UI Designer",
    isActive: true,
  },
  {
    id: 3,
    name: "Mohammed 3",
    job: "Electrical Engineer",
    isActive: false,
  },
  {
    id: 4,
    name: "Mohammed 4",
    job: "UX/UI Designer",
    isActive: true,
  },
  {
    id: 5,
    name: "Mohammed 5",
    job: "Developer",
    isActive: false,
  },
  {
    id: 6,
    name: "Mohammed 6",
    job: "UX/UI Designer",
    isActive: false,
  },
];

const Employess = () => {
  // STATES
  const [data, setData] = useState(initialData);
  const [show, setShow] = useState(false);

  // END STATES
  // FUNCTIONS
  const handleEmployeesData = (employee) => {
    setData((state) => {
      const newData = [employee, ...state];
      return newData;
    });
    setShow(!show);
  };
  const toggleForm = (event) => {
    setShow(!show);
  };
  // END FUNCTIONS
  return (
    <div className='d-flex flex-column align-items-center row-gap-3 '>
      {show ? (
        <div className='card bg-dark text-white w-50 '>
          <NewEmployeeForm addNewEmployee={handleEmployeesData} />
        </div>
      ) : (
        <button onClick={toggleForm} className='btn btn-danger'>
          Add New Employee
        </button>
      )}
      <hr className='w-100' />
      <div className='w-100'>
        <ul className='list p-3 bg-gradient bg-secondary-subtle rounded-4'>
          {data.map((user) => (
            <Employee key={user.id} data={user} />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Employess;
