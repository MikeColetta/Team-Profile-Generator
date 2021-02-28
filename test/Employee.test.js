const Employee = require('.lib/Employee');

describe('employee', () => {
    it('should return the name of the employee', () => {
        const Greg = new Employee('Greg', 10, 'greg@business.com');
        expect(Employee(Greg.name).toBe('Greg'))
    })
})