//desc - get ALL posts
//@route GET /api/posts

const getPosts = (req, res, next) => {
	const limit = parseInt(req.query.limit);
	if (!isNaN(limit) && limit > 0) {
		return res.status(200).json(posts.slice(0, limit));
	}
	res.status(200).json(posts);
};

//desc - get single post
// route GET /api/posts/:id
const getPost = (req, res, next) => {
	const id = parse.Int(req.params.id);
	const post = posts.find((post) => post.id === id);
	if (!post) {
		const error = new Error(`A post with id of ${id} is not found`);
		error.status = 404;
		return next(error);
	}
	res.status(200).json(post);
};

//desc - create a new post
// route POST /api/posts

const createPost = (req, res, next) => {
	const newPost = {
		id: posts.length + 1,
		title: req.body.title,
	};
	if (!newPost.title) {
		const error = new Error(`A post with id of ${id} is not found`);
		error.status = 404;
		return next(error);
	}
	posts.push(newPost);
	res.status(201).json(posts);
};

// desc - Updateeeeee post
// PUT
const updatePost = (req, res, next) => {
	const id = parseInt(req.params.id);
	const post = posts.find((post) => post.id === id);
	if (!post) {
		const error = new Error(`A post with id of ${id} is not found`);
		error.status = 404;
		return next(error);
	}
	post.title = req.body.title;
	res.status(200).json(posts);
};
console.log(newPost);
//desc - delete post
//DELETE
const deletePost = (req, res, next) => {
	const id = parseInt(req.params.id);
	const post = posts.find((post) => post.id === id);
	if (!post) {
		const error = new Error(`A post with id of ${id} is not found`);
		error.status = 404;
		return next(error);
	}
	posts = posts.filter((post) => post.id !== id);
	res.status(200).json(posts);
};

export default getPosts;
