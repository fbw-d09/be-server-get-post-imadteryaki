const http = require('http');
const fs = require('fs');
const path = require('path');

require('dotenv').config(); // Lade die Umgebungsvariablen aus der .env-Datei

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {

        // Verarbeite GET-Anfragen
        const filePath = path.join(__dirname, 'dist', req.url);
        console.log(filePath)
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end('File not found');
            } else {
                res.writeHead(200);
                res.end(data);
            }
        });
    } else if (req.method === 'POST' && req.url === '/signup') {
        // Verarbeite POST-Anfragen für das SignUp-Formular
        let body = '';
        
        req.on('data', chunk => {
            body += chunk.toString();
        });
        
        req.on('end', () => {
            const formData = new URLSearchParams(body);
            const name = formData.get('name');
            const email = formData.get('email');
            
            console.log('Received SignUp:', name, email);
            
            res.writeHead(200);
            res.end('Sign up successful');
        });
    } else {
        res.writeHead(405); // Methode nicht erlaubt
        res.end('Method not allowed');
    }
});

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
