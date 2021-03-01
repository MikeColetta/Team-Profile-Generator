const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, role, github){
        super(name, id, email, role, github)
        this.github = github;
    }

    getGitHub(){
        console.log(this.github)
    }

    getRole(){
        console.log(this.role)
    }
}

// github—GitHub username
// getGithub()
// getRole()—overridden to return 'Engineer'

const tom = new Engineer('Tom', 10, 'tom@business.com', 'Engineer', 'TomtheEngineer')

tom.getRole()