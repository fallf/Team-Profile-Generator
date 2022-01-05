const Engineer = require('../lib/Engineer');
const engineer = new Engineer('fatou', '1000350', 'fatoufall95@gmail.com', 'fallf');

test('test if we can get the constructor values for the engineer object', () => {
    expect(engineer.name).toBe('fatou');
    expect(engineer.id).toBe('1000350');
    expect(engineer.email).toBe('fatoufall95@gmail.com');
    expect(engineer.githubUsername).toBe('fallf');
});

test('test if we can get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('fatou');
});

test('test if we can get the id from the getId() method', () => {
    expect(engineer.getId()).toBe('1000350');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('fatoufall95@gmail.com');
});

test('test if we can get the github username from the getGithub() method', () => {
    expect(engineer.getGithub()).toBe('fallf');
});

test('test if we can get the role from the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});