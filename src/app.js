require('dotenv').config();
const express = require('express');
require('./db/conn');
const cookieParser = require("cookie-parser");
const userRouter = require('./routes/user-router');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const bcryptjs = require('bcryptjs');


const port = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(cors());
app.use(cookieParser());
// app.use(express.json());  // we are not using this method then data will not saved in db only id will be save
app.use(bodyParser.json());  // we are not using this method then data will not saved in db only id will be save

app.use('/userapi', userRouter);

app.listen(port, () => {
    console.log(`Server is listening the Port No: ${port}`);
})

