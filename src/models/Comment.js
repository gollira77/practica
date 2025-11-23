import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({

    content: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 500,
    },

    author: {
        type: mongoose.Schema.Types.ObjectId,   
        ref: "User",
        required: true,
    },

    article: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Article",
        required: true,
    },
}, { timestamps: true });

export const Comment = mongoose.model("Comment", commentSchema);