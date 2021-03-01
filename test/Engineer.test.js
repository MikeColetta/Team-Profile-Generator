const Engineer = require('../lib/Engineer')

describe('Engineer', () => {
    describe('getName', () => {
        it('should return the name of the Engineer', () => {
            const Greg = new Engineer('Greg', 10, 'GregtheEngineer@business.com', 'Engineer');
            const gregName = 'Greg';
            expect(Greg.getName()).toBe(gregName);
        })
    })
    describe('getID', () => {
        it('should return the ID of the Engineer', () => {
            const Greg = new Engineer('Greg', 10, 'GregtheEngineer@business.com', 'Engineer', 'GregtheEngineer');
            const gregID = 10;
            expect(Greg.getID()).toBe(gregID);
        })
    })
    describe('getEmail', () => {
        it('should return the email of the Engineer', () => {
            const Greg = new Engineer('Greg', 10, 'GregtheEngineer@business.com', 'Engineer', 'GregtheEngineer');
            const gregEmail = 'GregtheEngineer@business.com';
            expect(Greg.getEmail()).toBe(gregEmail);
        })
    })
    describe('getRole', () => {
        it('should return the Role of the Engineer', () => {
            const Greg = new Engineer('Greg', 10, 'GregtheEngineer@business.com', 'Engineer', 'GregtheEngineer');
            const gregRole = 'Engineer';
            expect(Greg.getRole()).toBe(gregRole);
        })
    })
    describe('getGitHub', () => {
        it('should return the GitHub username of the Engineer', () => {
            const Greg = new Engineer('Greg', 10, 'GregtheEngineer@business.com', 'Engineer', 'GregtheEngineer');
            const gregGitHub = 'GregtheEngineer';
            expect(Greg.getGitHub()).toBe(gregGitHub);
        })
    })
})