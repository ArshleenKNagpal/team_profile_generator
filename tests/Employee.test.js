// using Employee constructor 
const Employee = require('../lib/engineer');

// creates employee object 
test('create employee object', ()=>{
    const employee = new Employee('amelia',30,'amelia@test.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// gets empl role
test('get role of employee', ()=>{
    const employee = new Employee('amelia',30,'amelia@test.com');
    expect(employee.getRole()).toEqual("Employee");
});

// gets empl name
test('gets employee name',()=>{
    const employee = new Employee('amelia',30,'amelia@test.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

// gets empl ID
test('gets id from getId',()=>{
    const employee = new Employee('amelia',30,'amelia@test.com');
    expect(employee.getId()).toEqual(expect.any(Number));
});

// gets empl email
test('gets email from getEmail',()=>{
    const employee = new Employee('amelia',30,'amelia@test.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

