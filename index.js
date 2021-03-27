// Image you thinking that we IP log you...
// List of NPM Modules we used for this project.
const express = require('express');
const cors = require('cors');
const path = require("path");
const fs = require('fs');
const https = require("https");
const chalk = require('chalk');
const figlet = require('figlet');
let request = require(`request`);
const sts = require('strict-transport-security');

var generator = require('generate-password');

const app = express();
const PORT = 80;
const globalSTS = sts.getSTS({'max-age':{'days': 3}});

app.use(globalSTS);

app.use(cors());


app.listen(PORT, () => {
	console.log(`Server Works !!! At port ${PORT}`);
});

// For the SSL and TLS shit

const options = {
  key: fs.readFileSync("./cert/key.key"),
  cert: fs.readFileSync("./cert/cert.crt")
};
const MongoClient = require('mongodb');

MongoClient.connect(keys, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(client => {
            app.locals.db = client.db('sharexkeys');
            console.log("Connected To Database");
        })
        .catch(() => console.error('Failed to connect to the database'));

const checkIfShortIdExists = (db, code) => db.collection('sharexkeys')
        .findOne({
            short_id: keyss
        });

https.createServer(options, app).listen(443);

// Logger Console
var logger = require('./logger.js');
// Random string
var randomString = require('random-string');
// file-exists
var fileExists = require('file-exists');

// Create /uploads directory if not exists
if(!fs.existsSync('./uploads/')) {
    fs.mkdirSync('./uploads/');
    logger.info('Created /uploads directory');
}
var indexPg = path.join(__dirname, "./uploads/index.html");

app.get("/", function(req,res){
  res.sendFile(indexPg);
});

// Static directory for files
app.use('/', express.static('./uploads'))


// body-parser middleware
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
// express-fileupload middleware
var fileUpload = require('express-fileupload');
app.use(fileUpload({
    safeFileNames: true,
    preserveExtension: true,
    limits: {
        fileSize: config.fileSizeLimit
    }
}));
