$(document).ready(onReady);

let employee = [];

function onReady() {
  $('#addEmployeeButton').on('click', addEmployee);
  $('.employeesOut').on('click', '.deleteEmployeeButton', deleteEmployee);
} // end onReady

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
  let annualSalary = 0;
  el.empty();
  for (let i = 0; i < employee.length; i++) {
    el.append(
      '<tr> <td>' +
        employee[i].first +
        '</td> <td>' +
        employee[i].last +
        '</td> <td>' +
        employee[i].id +
        '</td> <td>' +
        employee[i].title +
        '</td> <td>' +
        employee[i].salary +
        '</td>' +
        `<td><button class="deleteEmployeeButton" data-id="${i}">Delete</button></td></tr>`
      //   `<td>${employee[i].first}</td> <td>${employee[i].last}</td> <td>${employee[i].id}</td> <td>${employee[i].title}</td> <td>$${employee[i].salary}</td> <td><button class="deleteEmployeeButton" data-index="${i}">Delete</button></td>`
    );
    lineNo++;
    annualSalary += Number(employee[i].salary) / 12;
  }
  // display total monthly value
  el = $('#monthlyValueOut');
  el.empty();
  el.append('Total Monthly: $' + annualSalary.toFixed(2));
  if (annualSalary.toFixed(2) > 20000) {
    $('#monthlyValueOut').css('background-color', 'red');
  } else {
    $('#monthlyValueOut').css('background-color', 'white');
  }
} // end displayEmployee

function emptyEmployeeInput() {
  $('#firstNameIn').val('');
  $('#lastNameIn').val('');
  $('#idNumberIn').val('');
  $('#titleIn').val('');
  $('#annualSalaryIn').val('');
} // end empty input value

function deleteEmployee() {
  console.log($(this).data('id'));
  employee.splice($(this).data('id'), 1);
  // this.closest('tr').remove();
  displayEmployee();
} // end delete button
