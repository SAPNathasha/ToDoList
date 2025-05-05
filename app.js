const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/" , function(req,res){

    var today = new Date();
    if(today.getDate() === 6 || today.getDate() === 0){
        res.send("Woohoo! It's weekend!");
    }else{
        res.send("Ooh! I have to work!");
    };
});




app.listen(3000, function(){
    console.log("Running port 3000");
});