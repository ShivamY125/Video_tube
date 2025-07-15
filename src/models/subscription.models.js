import mongoose, {Schema} from "mongoose";

const subscriptionSchema = new Schema({
     subscriber: {
        type: Schema.Types.ObjectId, // One who is Subscribing.
        ref: "User",
     },
     channel: {
        type: Schema.Types.ObjectId,  // Whom you are subscribing
        ref: "User", 
     }
},
{
    timestamps: true
}
)


const Subscription = mongoose.model("Subscription", subscriptionSchema);

export default Subscription;