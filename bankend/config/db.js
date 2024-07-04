import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://nhimalayas:atlasRishu70@cluster0.rszzqpp.mongodb.net/northern-himalayas').then(()=>console.log("DB Connected"))
}