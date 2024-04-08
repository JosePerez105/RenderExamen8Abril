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
mongoose.connect("mongodb+srv://Juanes:123@cluster0.aqibkku.mongodb.net/?retryWrites=true&w=majority&appName=Yamix_horarios")
    .then(() => console.log("Connected to mongoDB Atlas"))
    .catch((error) => console.log(error))

app.listen(port, () => console.log("Server working on port", port))