const employees = require('../index');

const generateTeam = (employees) => {

let cards=``

employees.forEach(employee => {
    if (employee.getRole() === 'Manager') {
        cards+= `
        <div class='card col-3 m-3 rounded'>
        <div class='card-body bg-secondary'>
        <h1>${employee.name}</h1>
        <h2>${employee.role}</h2>
        </div>
        <div>
        <h3>ID: ${employee.id}</h3>
        <h3>Email: <a href='mailto:${employee.email}'>${employee.email}</a></h3>
        <h3>Office Number: ${employee.getOfficeNumber().officeNumber}</h3>
        </div>
        </div>
        `
    } else if (employee.getRole() === 'Engineer') {
        cards+= `
        <div class='card col-3 m-3 rounded'>
        <div class='card-body bg-secondary'>
        <h1>${employee.name}</h1>
        <h2>${employee.role}</h2>
        </div>
        <div>
        <h3>ID: ${employee.id}</h3>
        <h3>Email: <a href='mailto:${employee.email}'>${employee.email}</a></h3>
        <h3>GitHub: <a href='https://github.com/${employee.getGithub().github}'>${employee.getGithub().github}</a></h3>
        </div>
        </div>
        `
    } else {
        cards+= `
        <div class='card col-3 m-3 rounded'>
        <div class='card-body bg-secondary'>
        <h1>${employee.name}</h1>
        <h2>${employee.role}</h2>
        </div>
        <div>
        <h3>ID: ${employee.id}</h3>
        <h3>Email: <a href='mailto:${employee.email}'>${employee.email}</a></h3>
        <h3>School: ${employee.getSchool().school}</h3>
        </div>
        </div>
        `
    }
});

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel='stylesheet' href='style.css'>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
        <title>Team Generator</title>
    </head>
    <body>
    <header>
    <h1>My Team</h1>
    </header>
    <div class='container'>
        <div class='wrapper'>
            <div class='row justify-content-center'>
                ${cards}
            </div>
        </div>
    </div>
    </body>
    </html>
    `
}

module.exports = generateTeam;