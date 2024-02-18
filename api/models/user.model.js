import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email : {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F771742%2Fpexels-photo-771742.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-mohamed-abdelghaffar-771742.jpg%26fm%3Djpg&tbnid=8D3zipsX-TpgmM&vet=12ahUKEwjRmPaYqLOEAxUMQaQEHRImBDYQMygAegQIARBz..i&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fprofile%2520picture%2F&docid=FvQHUVZ-cx81xM&w=4016&h=6016&q=profile%20picture&ved=2ahUKEwjRmPaYqLOEAxUMQaQEHRImBDYQMygAegQIARBz",
    },

}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;

