import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from "dotenv";
dotenv.config();

const DBConnect = async()=> {
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log("Connected to DB Successfully");
    }catch(err){
      console.log("Error in DB connection",err);
      process.exit(1);
    }
}
export {DBConnect}