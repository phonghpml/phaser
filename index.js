const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
console.log(__dirname + '/public')

app.listen(5000, () => {
    console.log('Server running on port 5000');
});