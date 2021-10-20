const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Mark', 4, 'test@gmail.com');

    expect(typeof(employee)).toBe('object');
});

test('creates a name correctly', () => {
    const employee = new Employee('Mark', 4, 'test@gmail.com');

    expect(employee.getName()).toBe('Mark');
});

test('creates an id correctly', () => {
    const employee = new Employee('Mark', 4, 'test@gmail.com');

    expect(employee.getId()).toBe(4);
});

test('creates an email correctly', () => {
    const employee = new Employee('Mark', 4, 'test@gmail.com');

    expect(employee.getEmail()).toBe('test@gmail.com');
});