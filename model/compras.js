import mongoose from "mongoose";

const comprasSchema = mongoose.Schema({
    id_compra: {
        type: String,
        required: true
    },
    fecha_compra: {
        type: String,
        required: true
    },
    total_compra: {
        type: String,
        required: true
    }
})

export default mongoose.model('compras', comprasSchema)