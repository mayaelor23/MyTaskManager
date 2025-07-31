import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

//const URI = process.env.MONGODB_URI;
const URI = 'mongodb://localhost:27017/tasksDB'
//const URI = 'mongodb://localhost:28018/tasksDB'

if (!URI) {
  throw new Error("❌ Missing MONGODB_URI in .env file!");
}

export async function connectToDatabase() {
    try {
    await mongoose.connect(URI);
      console.log('Connected to MongoDB successfully!');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
}
