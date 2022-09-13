// https://dummy.restapiexample.com/

const employeesList = document.querySelector("#my-employees-list");
const API_URL = 'https://dummy.restapiexample.com/api/v1/employees';
console.log(API_URL);

function getEmployees() {
  fetch(API_URL)
    .then(data => {
      console.log(data);
      return data.json();
    })
    .then(({data: employeesData}) => {
      // const newEmployeesData = employeesData.map() - from example in guidance
      // got message it was redundant & to replace with this:
      employeesList.innerHTML = employeesData.map(({ employee_name, employee_age }) => {
        return `<li>
                    <div>
                        <p>Name: ${employee_name}, age: ${employee_age}</p>
                    </div>
                </li>`
      }).join('');
      // employeesList.innerHTML = newEmployeesData - from example in guidance
    })
}
getEmployees();
