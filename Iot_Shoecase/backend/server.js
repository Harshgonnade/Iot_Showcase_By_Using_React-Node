//Importing the Dependencies
// A web framework for Node.js to build web applications and APIs
const express = require('express');
// Middleware to parse the incoming request bodies in a middleware before handling it.
const bodyParser = require('body-parser');
// A MySQL client for Node.js to interact with MySQL databases.
const mysql = require('mysql');

//cors:Cross Origin Resource Specifier
// Middleware to enable Cross-Origin Resource Sharing (CORS), allowing your server to handle requests from different origins.
const cors=require('cors');

//Instantiating the express and PORT number
const app=express(); 
const PORT= 3000;

//using cors and bodyParser.json
app.use(cors());
// It is used to parse JSON bodies sent in requests.
app.use(bodyParser.json());

//Getting the db credentials
const dB = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Harsh@123',
        database: 'Iot'
    }
);

//Checking the connection
dB.connect((err) => {
    if (err) throw err;
    console.log(" Db Connected................");
});

app.post('/register',(req,res)=>{
    const {name,email,phone,address,pincode,city,state,message}=req.body;
    console.log(req.body);

    const sql="INSERT INTO Iot.user (name,email,phone,address,pincode,city,state,message) VALUES(?,?,?,?,?,?,?,?)";

    dB.query(sql,[name,email,phone,address,pincode,city,state,message],(err)=>{
        if(err){
            console.log(err);
            res.status(500).send("Error Occured during adding data in dB");
        }
        else{
            res.status(200).send("Values Inserted in dB");
        }
    })//query ends here
})// app.post ends here

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})