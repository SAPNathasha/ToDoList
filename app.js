const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/" , function(req,res){

    var today = new Date();
    var currentDay = today.getDay();
    if(currentDay === 6 || currentDay === 0){
        res.send("<h1>Woohoo! It's weekend!</h1>");
    }else{
        res.send("<h1>Ooh! I have to work!</h1>");
    };
});




app.listen(3000, function(){
    console.log("Running port 3000");
});