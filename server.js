const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const host = process.env.BASE_URL || "http:localhost:3000";
const Task = require("./routes/Task");
const mongoose = require("mongoose");
mongoose.connect(
    "mongodb://localhost:27017/bdmeans",
    { useNewUrlParser: true},
    err => {
        if (err) throw err.messege;
        console.log("Mongodb Connection Successful");
    },
);
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,"public")));
app.use("/",express.static(path.join(__dirname,"public")));

app.use("/api/task", Task);  

app.listen(port, () => console.log(`Listening at ${host}`));
// hello