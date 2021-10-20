const Intern = require('../lib/Inter.js');

test('creates an intern object', () => {
    const intern = new Intern('Dave', 15, 'test@gmail.com', 'Rutgers');

    expect(typeof(intern)).toBe('object');
});