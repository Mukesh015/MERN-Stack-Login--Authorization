const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const EmployeeModel = require('./models/Employee')

const app = express()
app.use(express.json())
app.use(cors())

const PORT = 3001;

mongoose.connect("mongodb+srv://Mukesh:Mukesh%402002@learn-mongodb.yxla1ty.mongodb.net/employee")

app.post('/login',(req,res)=>{
    const {email,password} = req.body;
    EmployeeModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password === password){
                res.json("Success");
            }
            else{
                res.json("Incorrect password");
            }
        }
        else{
            res.json("No records found");
        }
    })
})

app.post('/',async(req,res)=>{

    const {uname,email,password} = req.body;
    try {
        console.log(`Received data: Name - ${uname}, Email - ${email}, Password - ${password}`);
        const newUser = new EmployeeModel({uname,email,password})
        await newUser.save();
        res.status(200).send({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal server error' });
    }
})

app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})