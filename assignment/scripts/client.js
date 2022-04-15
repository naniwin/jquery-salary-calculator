$(document).ready(onReady);

let employee = [];

function onReady() {
  $('#addEmployeeButton').on('click', addEmployee);
}

function addEmployee() {
  console.log('in addEmployee');
  let newEmployee = {
    first: $('#firstNameIn').val(),
    last: $('#lastNameIn').val(),
    id: $('#idNumberIn').val(),
    title: $('#titleIn').val(),
    salary: $('#annualSalaryIn').val(),
  };
  employee.push(newEmployee);
  console.log(employee);
  displayEmployee();
} // end addEmployee

function displayEmployee() {
  console.log('in displayEmployee');
  let el = $('#employeesOut');
  el.empty();
  for (let i = 0; i < employee.length; i++) {
    el.append(
      `<li>${employee[i].first} ${employee[i].last} ${employee[i].id} ${employee[i].title} $${employee[i].salary} <button class="deleteEmployeeButton" data-index="${i}">Delete</button></li>`
    );
  }
}
