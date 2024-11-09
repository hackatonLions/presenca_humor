import {Schema, model} from "mongoose";

const userSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true
    },
    digital: {
        type: Schema.Types.Number,
        required: true
    },
    appBlocked: {
        type: Schema.Types.Boolean,
        default: true
    }
})

const User = model("user", userSchema);

export default User