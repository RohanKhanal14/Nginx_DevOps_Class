const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('This is server 3');
});

app.listen(3003, () => {
    console.log('Server is running on http://localhost:3003');
});
