const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Course = new Schema({
	_id: Schema.ObjectId,
	name: { type: String, maxLength: 255 },
	image: { type: String },
	learned: { type: Number, maxLength: 600 },
	slug: { type: String, maxLength: 255 },
	updateAt: { type: Date, default: Date.now },
	createAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Course', Course)
