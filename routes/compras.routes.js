import express from "express";
const router = express.Router()
export default router
import comprasSchema from "../model/compras.js";

//Create compras
router.post('/compras', (req, res) => {
    const compras = comprasSchema(req.body)
    compras.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//Get compras
router.get('/compras', (req, res) => {
    comprasSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//Get a compras
router.get('/compras/:id', (req, res) => {
    const { id } = req.params
    comprasSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//Update one
router.put('/compras/:id', (req, res) => {
    const { id } = req.params
    const { id_compra, fecha_compra, total_compra } = req.body
    comprasSchema
        .updateOne({ _id: id }, { $set: { id_compra, fecha_compra, total_compra } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//Delete one
router.delete('/compras/:id', (req, res) => {
    const { id } = req.params
    comprasSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message }))
})