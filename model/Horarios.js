import mongoose from "mongoose";

const HorariosSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    dias: {
        type: String,
        required: true
    },
    Hora_inicial: {
        type: String,
        required: true
    },
    Hora_final: {
        type: String,
        required: true
    }
})

export default mongoose.model('Horarios', HorariosSchema)