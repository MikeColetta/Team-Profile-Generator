const fs = require('fs');


const renderHTML = (currentStaff) => {
    let renderedHTML = '';
    currentStaff.forEach(element => {
        let currentCard = `
        <div class="card employeeCard">
        <div class="card-header">
                <h5 class="staffText">${element.name}</h5>
                <h6 class="mb-2 staffText">${element.role}</h6>
            </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${element.id}</li>
                    <li class="list-group-item">Email: <a  href="mailto:${element.email}">${element.email}</a></li>`

        if (element.role == 'Engineer') {
            currentCard += `<li class="list-group-item">GitHub: <a href="https://github.com/${element.github}">${element.github}</a></li>`
        }
        else if (element.role == 'Intern'){
            currentCard += `<li class="list-group-item">School: ${element.school}</li>`
            
        }
        else if (element.role == 'Manager'){
            currentCard += `<li class="list-group-item">Office Number: ${element.officeNum}</li>`           
        }
        currentCard += `
            </ul>
        </div>
        `
        renderedHTML += currentCard
    });

    let htmlTemplate = `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <nav id="navBar" class="navbar" style="justify-content: center;">
        <h1>My Team</h1>
    </nav>
    <br>
    <br>
    <br>
    <main class="container" >
        <div class="row staffCard" id="staffSection">
            ${renderedHTML}
        </div>
    </main>
</body>

</html>
    `

    createHTMLCSS(htmlTemplate);
}

const createHTMLCSS = (htmlTemplate) => {
    try {
        fs.writeFileSync('./dist/teamProfile.html', htmlTemplate);
        console.log('Success, HTML generated!');
        fs.writeFileSync('./dist/style.css', cssTemplate);
        console.log('Success, CSS generated!');
    } catch (error) {
        console.log(error);
    }
}

const cssTemplate = `
#navBar{
    background-color: rgb(204, 87, 87);
    color: white;
}

.staffCard {
    display: flex;
    justify-content: space-evenly;
}

.employeeCard {
    background-color: white;
    width: 18rem;
}

.staffText {
    color: white;
}

.card-header {
    background-color: blue;
    color: white;
}
`

module.exports = renderHTML;