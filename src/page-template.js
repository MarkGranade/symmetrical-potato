const managerHTML = manager => {
    return `
            <div class="col">
                <div class="card border border-dark shadow-lg">
                    <div class="bg-primary">
                        <div class="card-header">
                            <h2 class="text-light">${manager.name}</h2>
                            <div class="row">
                                <div class="col-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup" viewBox="0 0 16 16">
                                        <path d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8zM13 2H2v10.5A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5V2z"/>
                                    </svg>
                                </div>
                                <div class="col-11">
                                    <h5 class="text-light">Manager</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <li class="list-group-item">ID: ${manager.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                        <li class="list-group-item">Office number: ${manager.officeNumber}</li>
                    </div>
                </div>
            </div>
    `;
};

const engineerHTML = engineer => {
    return `
            <div class="col">
                <div class="card border border-dark shadow-lg">
                    <div class="bg-primary">
                        <div class="card-header">
                            <h2 class="text-light">${engineer.name}</h2>
                            <div class="row">
                                <div class="col-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyeglasses" viewBox="0 0 16 16">
                                        <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
                                    </svg>
                                </div>
                                <div class="col-11">
                                    <h5 class="text-light">Engineer</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <li class="list-group-item">ID: ${engineer.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                        <li class="list-group-item">GitHub: <a href="www.github.com/${engineer.github}">${engineer.github}</a></li>
                    </div>
                </div>
            </div>
    `;
};

const internHTML = intern => {
    return `
            <div class="col">
                <div class="card border border-dark shadow-lg">
                    <div class="bg-primary">
                        <div class="card-header">
                            <h2 class="text-light">${intern.name}</h2>
                            <div class="row">
                                <div class="col-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                    </svg>
                                </div>
                                <div class="col-11">
                                    <h5 class="text-light">Intern</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <li class="list-group-item">ID: ${intern.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                        <li class="list-group-item">School: ${intern.school}</li>
                    </div>
                </div>
            </div>
    `;
};

const createCards = (cardArray) => {
    const roleCards = [];
    roleCards.push(cardArray.filter(teamMember => teamMember.getRole() === 'Manager')
        .map(manager => managerHTML(manager))
    );
    roleCards.push(cardArray.filter(teamMember => teamMember.getRole() === 'Engineer')
        .map(engineer => engineerHTML(engineer))
    );
    roleCards.push(cardArray.filter(teamMember => teamMember.getRole() === 'Intern').map(intern => internHTML(intern)));
    console.log(roleCards);
    return roleCards.join('');
};

function generateTemplate(data) {
    console.log('generateTemplate', data);
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
</head>

<body>
    <header class="container-fluid bg-danger text-light .bg-gradient p-4 mb-5">
        <div class="row">
            <h1 class="col-12 text-center">My Team</h1>
        </div>
    </header>

    <div class="container">
        <div class="row row-cols-1 row-cols-md-2 g-4">
${createCards(data)}
        </div>
    </div>
</body>
</html>
    `;
}

module.exports = generateTemplate;
