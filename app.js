const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, "js")));

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Define a route for the root
app.get('/', (req, res) => {
    res.sendFile('title.html', { root: path.join(__dirname, "views") });
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
}).on('error', (e) => {
    console.error('Error starting server:', e);
});