
const Manager = require('../lib/Manager');
const manager = new Manager('fatou', '1000350', 'fatoufall95@gmail.com', '350');

test('test if we can get the constructor values for the manager object', () => {
    expect(manager.name).toBe('fatou');
    expect(manager.id).toBe('1000350');
    expect(manager.email).toBe('fatoufall95@gmail.com');
    expect(manager.officeNumber).toBe('350');
});

test('test if we can get the name from the getName() method', () => {
    expect(manager.getName()).toBe('fatou');
});

test('test if we can get the id from the getId() method', () => {
    expect(manager.getId()).toBe('1000350');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('fatoufall95@gmail.com');
});

test('test if we can get the office number from the getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('350');
});

test('test if we can get the role from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});