import {Schema, model} from "mongoose";

const adminSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true
    },
    digital: {
        type: Schema.Types.Number,
        required: true
    }
})

const Admin = model("Admin", adminSchema);

export default Admin