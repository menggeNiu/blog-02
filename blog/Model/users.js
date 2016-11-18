var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Blog');

var blogSchema = new mongoose.Schema({
	username: String,
	password: String,
	email: String,
	content: Array,
});
module.exports = mongoose.model('blog', blogSchema, 'blog');