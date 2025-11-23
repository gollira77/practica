import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 200,
    },

    content: {
        type: String,
        required: true,
        minLength: 50,
    },

    excerpt: {
        type: String,
        maxLength: 500,
    },

    status: {
        type: String,
        enum: ["published", "archived"],
        default: "published",
    },

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        requerido: true,
    },

    tags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag",
    }],

}, { timestamps: true });

articleSchema.pre("findOneAndDelete", async function (next) {
    const articleId = this.getQuery()._id;
    await mongoose.model("Comment").deleteMany({ article: articleId });
    next();
});

export const Article = mongoose.model("Article", articleSchema);