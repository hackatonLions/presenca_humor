import {Schema, model} from "mongoose";

const formSchema = new Schema({
    textQuestion: {
        type: [Schema.Types.String],
        required: true
    },
    user:{
        type: Schema.ObjectId,
        ref: "user"
    }
})

const Form = model("Form", formSchema);

export default Form