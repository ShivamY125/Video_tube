import { app } from "./app.js";
import dotenv from "dotenv";
dotenv.config({
    path: "./.env"
});
import { DBConnect } from "./db/index.js";

const Port = process.env.PORT  || 8001;


DBConnect()
.then(()=> {
app.listen(Port,()=>{

    console.log(`App is listening on Port ${Port}`);
})}
).catch((err)=> {
    console.log("MongoDB Connection error", err);
})


