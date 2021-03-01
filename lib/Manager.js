const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, role, officeNum){
        super(name, id, email, role, officeNum)
        this.officeNum = officeNum;
    }

    getOfficeNum(){
        console.log(this.officeNum);
        return this.officeNum;
    }
}

module.exports = Manager;