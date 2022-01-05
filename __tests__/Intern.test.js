const Intern = require('../lib/Intern');
const intern = new Intern('fatou', '1000350', 'fatoufall95@gmail.com', 'London');

test('test if we can get the constructor values for the engineer object', () => {
    expect(intern.name).toBe('fatou');
    expect(intern.id).toBe('1000350');
    expect(intern.email).toBe('fatoufall95@gmail.com');
    expect(intern.school).toBe('London');
});

test('test if we can get the name from the getName() method', () => {
    expect(intern.getName()).toBe('fatou');
});

test('test if we can get the id from the getId() method', () => {
    expect(intern.getId()).toBe('1000350');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('fatoufall95@gmail.com');
});

test('test if we can get the school name from the getSchool() method', () => {
    expect(intern.getSchool()).toBe('London');
});

test('test if we can get the role from the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});