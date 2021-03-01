const fs = require('fs');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

const managerCard = `
div class="card employeeCard">
    <div class="card-header">
        <h5 class="staffText">${Manager.name}</h5>
        <h6 class="mb-2 staffText">${Manager.role}</h6>
    </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${Manager.id}</li>
            <li class="list-group-item">Email: ${Manager.email}</li>
            <li class="list-group-item">Office Number: ${Manager.officeNum}</li>
        </ul>
    
</div>
`

const engineerCard = `
div class="card employeeCard">
<div class="card-header">
        <h5 class="staffText">${Engineer.name}</h5>
        <h6 class="mb-2 staffText">${Engineer.role}</h6>
    </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${Engineer.id}</li>
            <li class="list-group-item">Email: ${Engineer.email}</li>
            <li class="list-group-item">Office Number: ${Engineer.gitHub}</li>
        </ul>
    
</div>
`

const internCard = `
div class="card employeeCard">
    <div class="card-header">
        <h5 class="staffText">${Intern.name}</h5>
        <h6 class="mb-2 staffText">${Intern.role}</h6>
    </div>    
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${Intern.id}</li>
            <li class="list-group-item">Email: ${Intern.email}</li>
            <li class="list-group-item">Office Number: ${Intern.school}</li>
        </ul>
    
</div>
`