import {Schema, model} from "mongoose";

const formSchema = new Schema({
    humor:{
        type: Schema.Types.String,
        enum: ["FELIZ", "CONTENTE", "ANIMADO", "MAL-HUMORADO", "TRISTE", "ENJOADO", "INDISPOSTO", "DIVERTIDO", "MOTIVADO"],
        required: true
    },
    textQuestion: {
        type: [Schema.Types.String],
        required: true
    },
    user:{
        type: Schema.ObjectId,
        ref: "user"
    }
}, {
    timestamps: true
})

const Form = model("Form", formSchema);

export default Form