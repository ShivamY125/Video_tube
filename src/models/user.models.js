import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
     username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index:true
     }, 
     email: {
        type: String,
        required: true,
        unqiue: true,
        lowercase:true,
        trim:true
     },
     fullname:{
        type: String,
        required: true,
        trim:true,
        index: true
     },
     avatar: {
        type: String, // aws URL
        required: true
     },
     coverImage: {
        type: String // aws URL
     },
     watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
     ],
     password: {
        type: String,
        required:  [true, "password is required"],
        minLength: 8

     },
     refreshToken: {
        type: String
     }

},
{
    timestamps: true  // as soon as we keep this our document on its own creates createdAt and updatedAt.

}


)

const User = mongoose.model("User", userSchema);

export default User;


//      id string pk
// username string
// email string
// fullName string
// avatar string
// coverImage string
// watchHistory ObjectId[] videos
// password string
// refreshToken string
// createdAt Date
// updatedAt Date