const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "title is require"],

        },
        duscription: {
            type: String,
            required: [true, "description is require"],
        },
        image: {
            type: String,
            required: [true, "image is require"],
        },
       
    },
    {timestamps: true}
);

const blogModel = mongoose.model("Blog", blogSchema);

module.exports = blogModel;
