import express from "express";

const app = express();
const port = 3000;

const d = new Date();
let day = d.getDay();

let dayType = "a week day";
let advice = "Time to work hard!";

if (day == 0  || day == 6){
    dayType = "the weekend";
    advice = "time to relax"
}
app.get("/", (req, res) => {
    res.render("index.ejs",{
        dayType, advice
    })
})
app.listen(port, ()=>{
    console.log(`Sever is running on ${port}`);
}
);