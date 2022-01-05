const Employee = require('../lib/Employee');
const employee = new Employee('fatou', '1000350', 'fatoufall95@gmail.com');

test('test if we can get the constructor values for the employee object', () => {
    expect(employee.name).toBe('fatou');
    expect(employee.id).toBe('1000350');
    expect(employee.email).toBe('fatoufall95@gmail.com');
});

test('test if we can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('fatou');
});

test('test if we can get the id from the getId() method', () => {
    expect(employee.getId()).toBe('1000350');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('fatoufall95@gmail.com');
});

test('test if we can get the role from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});