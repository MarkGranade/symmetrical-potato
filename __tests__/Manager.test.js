const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('Mark', 4, 'test@gmail.com', 5555555555);
    
    expect(typeof(manager)).toBe('object');
});

test('creates office number correctly', () => {
    const manager = new Manager('Mark', 4, 'test@gmail.com', 5555555555);

    expect(manager.getOfficeNumber()).toBe(5555555555);
});