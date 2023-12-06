const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Course = new Schema(
    {
        _id: Schema.ObjectId,
        name: { type: String, maxLength: 255 },
        image: { type: String },
        learned: { type: Number, maxLength: 600 },
        slug: { type: String, maxLength: 255 },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Course", Course);
