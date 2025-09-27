import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://sofusofiya2004_db_user:resume123@resumebuilder.4lqbtfh.mongodb.net/RESUME?retryWrites=true&w=majority&appName=ResumeBuilder')
    .then(()=> console.log('DB Connected'))
}