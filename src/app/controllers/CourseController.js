const Course = require('../models/Course')

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
		res.send('Course saved!')
	}
}

module.exports = new CourseController()