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
  emptyEmployeeInput();
} // end addEmployee

function displayEmployee() {
  console.log('in displayEmployee');
  let el = $('.employeesOut');
  let lineNo = 1;
  el.empty();
  for (let i = 0; i < employee.length; i++) {
    el.append(
      '<td>' +
        employee[i].first +
        '</td> <td>' +
        employee[i].last +
        '</td> <td>' +
        employee[i].id +
        '</td> <td>' +
        employee[i].title +
        '</td> <td>' +
        employee[i].salary
    ) +
      '</td>' +
      '<td><button class="deleteEmployeeButton">Delete</button></td>';
    //   `<td>${employee[i].first}</td> <td>${employee[i].last}</td> <td>${employee[i].id}</td> <td>${employee[i].title}</td> <td>$${employee[i].salary}</td> <td><button class="deleteEmployeeButton" data-index="${i}">Delete</button></td>`
    // );
    lineNo++;
  }
}

function emptyEmployeeInput() {
  $('#firstNameIn').val('');
  $('#lastNameIn').val('');
  $('#idNumberIn').val('');
  $('#titleIn').val('');
  $('#annualSalaryIn').val('');
} // end empty input value
