// TODO: Configure the environment variables

const mockAPIResponse = require('./mockAPI.js')
const path = require("path");
const cors = require("cors");
const axios = require("axios");
const express = require("express");
const bodyParser=require('body-parser');
const PORT = 8081
const app = express();
app.use(express.static("dist"));
app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


console.log(__dirname)
// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server run on port ${PORT}!`)
})

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})
const url={url:''}    
app.post("/url",(req,res)=>{
    url.url=req.body.url
})
app.get('/alldata', async(req,res)=>{
    const mykey='ef7744ac4922ccbb08657925e5a046ac'
    try{//check my api issus
        const genrate=await axios.get(`https://api.meaningcloud.com/sentiment-2.1?key=${mykey}&url=${url.url}&lang=en`)
        //https://api.meaningcloud.com/sentiment-2.1?key=${mykey}&url=${req.body.url}&lang=en`);
        const{agreement, subjectivity, confidence, irony}=genrate.data
        //console.log(agreement, subjectivity, confidence, irony)
        const all ={
            "agreement":agreement, 
            "subjectivity":subjectivity, 
            "confidence":confidence,
            "irony":irony
        }
        //res send network
        res.send({agreement, subjectivity, confidence,irony})
        //console.log(all)
    }catch{
        console.log(`not V`)
    }
})


app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})