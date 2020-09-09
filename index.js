const express = require('express');
const formidable = require('formidable');
const multer = require('multer')
const fs = require('fs');
const app = express();
const path = require('path')
const staticPath = path.resolve(__dirname, 'static')
const static = express.static(staticPath)

app.use(static)

const port = 9080;

app.set('view engine', 'pug')
app.set('views', './views')

app.get('/', (req, res) => {
    res.render('index.pug');
});

var storage = multer.memoryStorage()
var upload = multer({ storage: storage })

const calculateHash = require('./calculatingHash')

app.post('/upload', upload.single('file'), async function(req, res) {
    let file = req.file // Buffer

    if (!file) return res.send('')
    let fileBuffer = file.buffer

    // console.log(file)

    let hash = await calculateHash(fileBuffer)

    return res.status(200).send(hash)

});

// app.post('/hash', (req, res) => {
//     let algr = req.body.hashAlgorithm
//     switch(algr) {
//         case "SHA-256":
//             hashSHA
//     }
// })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});