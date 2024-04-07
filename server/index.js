const express = require('express');
const cors = require('cors')
const jwt = require ('jsonwebtoken')
const {expressjwt: exjwt} = require ('express-jwt')
const jwt_decode = require('jwt-decode')

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello from the express.")
})

const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb+srv://dasakshayata03:8471965988@cluster0.xvta9oe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
client.connect();

const db = client.db("skill");
const col = db.collection("user");

var jwtmw = exjwt({
    secret:'Akshayata',
    algorithms:['HS256']
});

const secret='Akshayata';

app.post('/insert', (req, res) => {
    console.log(req.body);
    col.insertOne(req.body);
    res.send("Data Received")
})

app.post('/check', async(req, res) => {
    console.log("Entering Check")
    console.log(req.body)
    var token = null;
    const result =await col.findOne({'Name' : req.body.username});
    if(result.password == req.body.password){
        token = jwt.sign(result,secret,{
            algorithm: "HS256",
            expiresIn: "5m"
        })
        res.send({
            msg: result,
            token:token
        })
    }
    else{
        res.send({
            msg: "failed",
            token:token
        })
    }
    console.log(token);
    console.log(result);
});

app.get('/main', (req,res) => {
    res.send("welcome to the main page!");
});

app.get('/showall',jwtmw, async (req, res) => {
    console.log(req.header)
    const result =await col.find().toArray();
    res.send(result);
})

app.listen(8081, () => {
    console.log(`Server is running`);
})



