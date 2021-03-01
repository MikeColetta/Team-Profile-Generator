const Manager = require('../lib/Manager')

describe('Manager', () => {
    describe('getName', () => {
        it('should return the name of the Manager', () => {
            const Greg = new Manager('Greg', 10, 'GregtheManager@business.com', 'Manager', 15);
            const gregName = 'Greg';
            expect(Greg.getName()).toBe(gregName);
        })
    })
    describe('getID', () => {
        it('should return the ID of the Manager', () => {
            const Greg = new Manager('Greg', 10, 'GregtheManager@business.com', 'Manager', 15);
            const gregID = 10;
            expect(Greg.getID()).toBe(gregID);
        })
    })
    describe('getEmail', () => {
        it('should return the email of the Manager', () => {
            const Greg = new Manager('Greg', 10, 'GregtheManager@business.com', 'Manager', 15);
            const gregEmail = 'GregtheManager@business.com';
            expect(Greg.getEmail()).toBe(gregEmail);
        })
    })
    describe('getRole', () => {
        it('should return the Role of the Manager', () => {
            const Greg = new Manager('Greg', 10, 'GregtheManager@business.com', 'Manager', 15);
            const gregRole = 'Manager';
            expect(Greg.getRole()).toBe(gregRole);
        })
    })
    describe('getOfficeNum', () => {
        it('should return the Office Number of the Manager', () => {
            const Greg = new Manager('Greg', 10, 'GregtheManager@business.com', 'Manager', 15);
            const gregOfficeNum = 15;
            expect(Greg.getOfficeNum()).toBe(gregOfficeNum);
        })
    })
})