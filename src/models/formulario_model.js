import {Schema, model} from "mongoose";

const formSchema = new Schema({
    textQuestion: {
        type: Schema.Types.String,
        required: true
    }
})

const Form = model("Form", formSchema);

export default Form