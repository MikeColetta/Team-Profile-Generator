const Intern = require('../lib/Intern')

describe('Intern', () => {
    describe('getName', () => {
        it('should return the name of the Intern', () => {
            const Greg = new Intern('Greg', 10, 'greg@business.com', 'Intern', 'University of Interns');
            const gregName = 'Greg';
            expect(Greg.getName()).toBe(gregName);
        })
    })
    describe('getID', () => {
        it('should return the ID of the Intern', () => {
            const Greg = new Intern('Greg', 10, 'greg@business.com', 'Intern', 'University of Interns');
            const gregID = 10;
            expect(Greg.getID()).toBe(gregID);
        })
    })
    describe('getEmail', () => {
        it('should return the email of the Intern', () => {
            const Greg = new Intern('Greg', 10, 'greg@business.com', 'Intern', 'University of Interns');
            const gregEmail = 'greg@business.com';
            expect(Greg.getEmail()).toBe(gregEmail);
        })
    })
    describe('getRole', () => {
        it('should return the Role of the Intern', () => {
            const Greg = new Intern('Greg', 10, 'greg@business.com', 'Intern', 'University of Interns');
            const gregRole = 'Intern';
            expect(Greg.getRole()).toBe(gregRole);
        })
    })
    describe('getSchool', () => {
        it('should return the Role of the Intern', () => {
            const Greg = new Intern('Greg', 10, 'greg@business.com', 'Intern', 'University of Interns');
            const gregSchool = 'University of Interns';
            expect(Greg.getSchool()).toBe(gregSchool);
        })
    })
})