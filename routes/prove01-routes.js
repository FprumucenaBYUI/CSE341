/**
 * Route file for Prove 01 week 1 
 * @author Flavio Prumucena
 * 
 */

/**
 * REQUIRED MODULES
 */
const fs = require('fs');

/** HTML CONSTANTS */
const greetingSnipet = `
                    <html>
                    <head>
                        <title>Greetings</title>
                    <head>
                    <body>
                    <h1>Welcome to my Prove 1 "/" route!</h1>   
                    <form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form> 
                    </body>
                    </html>
`;


// USERS LIST CONSTANT
const users = [];

/**
 * Builds a HTML unordered user list 
 * @returns USER LIST
 */
const buildUserList = () => {
    let htmlList = `<html><head><title>User-List</title><head><body><h3>User List:</h3><ul>`;

    if (users.length === 0)
        return htmlList += '<li>No Users added to the user list at the moment</li></ul></body></html>';

    users.forEach(user => {
        htmlList += ` <li>${user}</li>`;
    });
    return htmlList += `</ul></body></html>`
}

/**
 * requestHandler
 * It Takes care of all incoming requests 
 * @param {*} req 
 * @param {*} res 
 * @returns HTML RESPONSE
 */
const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    // DEFAULT "/" REQUEST
    if (url === '/') {
        res.write(greetingSnipet);
        return res.end();
    }

    //USERS REQUEST
    if (url === '/users') {
        res.write(buildUserList());
        return res.end();
    }

    //CREATE USER REQUEST
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        //parsing the incoming data from the form submission and diplaying in the console.
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const user = parsedBody.split('=')[1];

            //display in the console
            console.log(user);

            //add user to user list
            users.push(user);

            //refresh page
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }

    /**
     * DEFAULT BLOCK IN CASE OF AN INVALID REQUEST
     */
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Unknown URL</title><head>');
    res.write('<body><h1>The server could not find the resource specified!</h1></body>');
    res.write('</html>');
    res.end();
};

/**
 * MODULE EXPORTS
 */
exports.handler = requestHandler;