import mongoose from "mongoose";

(async() => {
    try {
        mongoose.connect(process.env.MONGODB + process.env.DB);
        console.log("Connected with DB");
    } catch (error) {
        console.log(error);
    }
})