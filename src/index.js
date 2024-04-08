import express from "express";
import mongoose from "mongoose";
import '../env.js'
import router from "../routes/Horarios.routes.js";

const app = express()
const port = 3000

//Middleware
app.use(express.json())
app.use('/api', router)

//Routes
app.get('/', (req, res) => {
    res.send("Welcome to my api")
})

//Connection
mongoose.connect("mongodb://jose2:123@ac-gvfxj5l-shard-00-00.vgme3cx.mongodb.net:27017,ac-gvfxj5l-shard-00-01.vgme3cx.mongodb.net:27017,ac-gvfxj5l-shard-00-02.vgme3cx.mongodb.net:27017/?ssl=true&replicaSet=atlas-zgh66s-shard-0&authSource=admin&retryWrites=true&w=majority&appName=api")
    .then(() => console.log("Connected to mongoDB Atlas"))
    .catch((error) => console.log(error))

app.listen(port, () => console.log("Server working on port", port))