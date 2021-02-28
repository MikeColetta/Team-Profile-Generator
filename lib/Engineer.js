const Engineer = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email, github)
        this.github = github;
    }
}

// github—GitHub username
// getGithub()
// getRole()—overridden to return 'Engineer'