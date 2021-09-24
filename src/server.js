const express = require('express');

const app = express();
 
app.get('/', (req, res) =>{

    let request = req.query.name;
    let promise = new Promise((resolve, reject) => {
        if (request !== undefined){
            resolve('Hello ' + request)
        } else {
            reject('Please Specify Your Name')
        }
    });

    promise.then((response) => {
        res.status(200).json({'Message': response})
    }).catch((err) => {
        res.status(400).json({"Error": err})
    })
})








app.listen(3001, ()=>{
    console.log("Server Started")
});
