import mongoose, {Schema} from "mongoose";

const videoSchema = new Schema({
     videoFile: {
        type: String,  // URL
        required: true
     },
     thumbnail:{
        type: String,
        required:true
     },
     title: {
        type: String,
        required: true
     },
     description: {
        type: String,
        required: true
     },
     views: {
        type: Number,
        default: 0
     },
     duration: {
         type: Number,
         required:true
     },
     isPublished: {
        type : Boolean,
        default: true
     },
     owner: {
        type: Schema.type.ObjectId,
        ref: "User"
     } 
},
{
    timestamps: true
}
)


const Video = mongoose.model("Video", videoSchema);

export default Video;