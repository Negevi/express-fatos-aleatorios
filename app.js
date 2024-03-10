const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');

const app = express();

// Set the directory for static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, "js")));
// Set up Pug as the view engine
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Define a route for the root
app.get('/login', (req, res) => {
    res.sendFile('main.html', { root: path.join(__dirname, "views") });
});

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, "views") })
})
app.post('/login', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

// Start the server
app.listen(3000, () => {
    console.log("Server running on port 3000");
}).on('error', (e) => {
    console.error('Error starting server:', e);
});