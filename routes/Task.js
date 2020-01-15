// **Making crud operation with MongoDB and express js 
const express = require("express");
const Task = require("../models/Task");

const router = express.Router();

router.get("/", async (req,res) => {
    try{
        const tasks = await Task.find({});
        res.send(tasks);
    }catch(err){
        throw new Error(err);
    }
});

router.get("/:id",async(req,res) => {
    try{
        const task =await Task.findById(req.params.id);
        if(task)res.json({task});
        else res.json({messege:"Record Not Found or Error finding Record"});
    }catch(err){
        throw err.messege;
    }
});

router.post("/", async(req,res) =>{
    const tasks =new Task({
        title:req.body.title,
    });
    if(tasks.save())res.json({messege:"Task Successfully Added"});
    else res.json({messege:"Error saving Task"});
});

router.put("/:id",async(req,res) => {
    try{
        const task =await Task.findByIdAndUpdate(req.params.id,{
            title:req.body.title,
        });
        if(task)res.json({messege:"Task Updated Successfully"});
        else res.json({messege:"Record Not Found or Error Updating Record!"});
    }catch(error){
        res.json({messege:err.messege});
    }
});

router.delete("/:id",async(req,res) => {
    try{
        const task =await Task.findByIdAndDelete(req.params.id);
        if(task)res.json({messege:"Task Deleted Successfully"});
        else res.json({messege:"Record Not Found or Error Deleting Record"});
    }catch(err){
        throw err;
    }
});

module.exports = router;

// **setup api routes in node js using express js **
// const express = require("express");
// const router = express.Router();
// router.get("/",(req,res) => {
//     res.send("Task API is Working!");
// });

// router.post("/", (req,res) =>{
//     res.send ("Post Request Received!");
// });

// router.put("/:id",(req,res) => {
//     res.send(`${req.params.id} received to Edit`);
// });
// router.delete("/:id",(req,res) => {
//     res.send(`${req.params.id} received to delete`);
// });

// module.exports = router;