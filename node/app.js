const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const useRouter = require('./rourters/userRouter');
const nasaRouter = require('./rourters/nasaPictureRouter');
const dotenv = require('dotenv');
dotenv.config();
app.use(bodyParser.json({ limit: "500mb", extended: false }));
app.use(bodyParser.urlencoded({
    limit: "500mb",
    extended: false
}));

const options = cors.CorsOptions = {
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    preflightContinue: false
};

app.use(cors());
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    next();
});
const connectionParams = {
    newUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}
mongoose.connect(process.env.DB_CONNECT, connectionParams)
    .then(() => {
        console.log('connected db')
    })
    .catch((err) => {
        console.log(`err connected${err}`)
    })

app.use('/user', useRouter)
app.use('/picture', nasaRouter)

app.listen(3000, () => console.log('listening port 3000'));
