import {Schema, model} from "mongoose";

const userSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true
    },
    digital: {
        type: Schema.Types.Number,
        unique: true,
        required: true
    },
    appBlocked: {
        type: Schema.Types.Boolean,
        default: true
    },
    entryHour: {
        type: Schema.Types.Number,
        default: 0
    },
    exitHour: {
        type: Schema.Types.Number,
        default: 0
    },
    role:{
        type: Schema.Types.String,
        enum: ["ALUNO", "PROFESSOR"],
        required: true
    },
    alunos:{
        type: [Schema.ObjectId],
        ref: "user"
    }
})

const User = model("user", userSchema);

export default User