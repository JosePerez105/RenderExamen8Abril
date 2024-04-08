import express from "express"
import { Router } from "express"

const router = Router()
const app = express()

app.set("/api",router)

router.get("/", async(req,res) => {
    res.json({"message": "Hola a todos"})
})