const Employee = require('../lib/Employee');

  describe('Employee' , () => {
    
    describe('getName', () => {
        it('should return the name of the employee', () => {
            const Greg = new Employee('Greg', 10, 'greg@business.com', 'Employee');
            const gregName = 'Greg';
            expect(Greg.getName()).toBe(gregName);
        })
    })
    describe('getID', () => {
        it('should return the ID of the employee', () => {
            const Greg = new Employee('Greg', 10, 'greg@business.com', 'Employee');
            const gregID = 10;
            expect(Greg.getID()).toBe(gregID);
        })
    })
    describe('getEmail', () => {
        it('should return the email of the employee', () => {
            const Greg = new Employee('Greg', 10, 'greg@business.com', 'Employee');
            const gregEmail = 'greg@business.com';
            expect(Greg.getEmail()).toBe(gregEmail);
        })
    })
    describe('getRole', () => {
        it('should return the Role of the employee', () => {
            const Greg = new Employee('Greg', 10, 'greg@business.com', 'Employee');
            const gregRole = 'Employee';
            expect(Greg.getRole()).toBe(gregRole);
        })
    })
})