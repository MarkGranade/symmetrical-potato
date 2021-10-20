const Engineer = require('../lib/Engineer.js');

test('creates a engineer object', () => {
    const engineer = new Engineer('Sarah', 12, 'test@gmail.com', 'MarkGranade');
    
    expect(typeof(engineer)).toBe('object');
});