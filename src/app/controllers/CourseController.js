const Course = require('../models/Course')
const mongoose = require('mongoose')

class CourseController {
    // [GET] /courses
	index(req, res, next) {
		Course.find({})
			.then((courses) => {
				courses = courses.map((course) => course.toObject())
				res.render('courses/index', { courses })
			})
			.catch(next)
	}

	// [GET] /courses/:slug
	show(req, res, next) {
		Course.findOne({ slug: req.params.slug })
		.then((course) => {
			res.render('courses/show', { course: course.toObject() })
		})
		.catch(next)
	}

	// [GET] /courses/create
	create(req, res, next) {
		res.render('courses/create')
	}

	// [POST] /courses/store
	store(req, res, next) {
		const formData = req.body
		const _id = new mongoose.Types.ObjectId()
		const course = new Course({_id, ...formData})
		course.save()
			.then(() => res.redirect('/courses', 201))
			.catch((error) => {next(error)})
	}
}

module.exports = new CourseController()