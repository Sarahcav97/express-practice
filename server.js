const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();
//setup static folder

app.use(express.static(path.join(__dirname, 'public')));
// app.get('/', (req, res) => {
// 	res.send(path.join(__dirname, 'public', 'index.html'));
// });
//
// app.get('/about', (req, res) => {
// 	res.send(path.join(__dirname, 'public', 'about.html'));
// });

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

//get ALLL posts
app.get('/api/posts', (req, res) => {
	res.json(posts);
});

app.listen(port, () => console.log(`server running on port ${port}`));
