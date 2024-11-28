import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connectDb() {

const connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.gt5fv.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.DB_DATABASE}`;

mongoose.connect('mongodb+srv://dev:45052120@cluster0.gt5fv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
return mongoose.connection;
    
}
export default connectDb;