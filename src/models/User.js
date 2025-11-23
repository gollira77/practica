import { profile } from "console";
import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    firstName: {
        type: String,
        minLength: 2,
        maxLength: 50,
        required: true,
    },

    lastName: {
        minLength: 2,
        maxLength: 50,
        type: String,
    },

    biography: {
        type: String,
        required: false,
        maxLength: 500,
    },

    avatarUrl: {
        type: String,
        match: /^https?:\/\/.+/i,
    },

    birthdate: {
        type: Date,
    },
}, { _id: false });



const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        match: /^\S+@\S+\.\S+$/,
    },

    password: {
        type: String,
        required: true,
        minLength: 8,
    },

    role: {
        type: String,
        enum: ["user","admin"],
        default: "user",
    },

    profile: profileSchema,

    deteleAt: {
        type: Date,
        default: null,
    }

}, { timestamps: true });

export const User = mongoose.model('User', userSchema);