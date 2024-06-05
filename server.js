import express from 'express';
import path from 'path';
import posts from './routes/posts';
import logger from './middleware/logger.js';
import errorHandler from './middleware/errorHandler.js';
import notFound from './middleware/notFound.js';

const port = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//setup static folder

// app.use(express.static(path.join(__dirname, 'public')));
// app.get('/', (req, res) => {
// 	res.send(path.join(__dirname, 'public', 'index.html'));
// });
//
// app.get('/about', (req, res) => {
// 	res.send(path.join(__dirname, 'public', 'about.html'));
// });

//ROUTES
app.use(logger);
app.use('/api/posts', posts);
app.use(notFound);
app.use(errorHandler);
app.listen(port, () => console.log(`server running on port ${port}`));
