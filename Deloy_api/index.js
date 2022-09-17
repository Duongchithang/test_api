const express = require('express');
const cors = require('cors');
const BodyParse = require('body-parser');
const app = express();
app.use(cors())
app.use(BodyParse.json());
app.use(BodyParse.urlencoded({
    extended: true,
}));
 
const PORT = process.env.PORT || 3000;
const { Route } = require('./Route/index')
app.use('/v1',Route);
app.listen(PORT,()=>{
    console.log('server is running');
})