const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/tonconnect-manifest.json', (req, res) => {
    res.json({
        url: 'https://space-dogs-two.vercel.app',
        name: 'Space Dogs',
        iconUrl: 'https://space-dogs-two.vercel.app/dogicon.png'
    });
});

app.listen(PORT, () => {
    console.log(`=== SERVER STARTED ===`);
    console.log(`URL: http://localhost:${PORT}`);
});

module.exports = app;