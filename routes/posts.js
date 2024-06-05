import express from 'express';
const router = express.Router();

let posts = [
	{
		id: 1,
		title: 'post one',
	},
	{
		id: 2,
		title: 'post two',
	},
	{
		id: 3,
		title: 'post three',
	},
];

const logger = (req, res, next) => {
	console.log(
		`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`
	);
	next();
};

//get ALLL posts
router.get('/');
//get SINGLE post
router.get('/:id');
//create new post
router.post('/');

//Update Post
router.put('/:id');

//Delete Post
router.delete('/:id');
export default router;
