import express from "express";
const router = express.Router()
export default router
import HorariosSchema from "../model/Horarios.js";

//Create Horarios
router.post('/Horarios', (req, res) => {
    const Horarios = HorariosSchema(req.body)
    Horarios.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//Get Horarios
router.get('/Horarios', (req, res) => {
    HorariosSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//Get a Horarios
router.get('/Horarios/:id', (req, res) => {
    const { id } = req.params
    HorariosSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//Update one
router.put('/Horarios/:id', (req, res) => {
    const { id } = req.params
    const { dias, Hora_inicial, Hora_final } = req.body
    HorariosSchema
        .updateOne({ _id: id }, { $set: { dias, Hora_inicial, Hora_final } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//Delete one
router.delete('/Horarios/:id', (req, res) => {
    const { id } = req.params
    HorariosSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message }))
})