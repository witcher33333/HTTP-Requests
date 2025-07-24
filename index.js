import express from "express";
const app = express();
app.listen(3000 , () => {
    console.log("Server is running on port 3000.");
    
});
app.get("/" , (req , res) => {
    res.send("<h1>Hello , World !<h1>");
})
app.get("/contact" , (req , res) => {
    res.send("<h1>Hello</h1><hr><h2>My Phone Number is:</h2><p>012345678</p>")
})
app.get("/about" , (req , res) => {
    res.send("<p>Hello there its me talking to you from a local host server that is made by me !</p>")
})