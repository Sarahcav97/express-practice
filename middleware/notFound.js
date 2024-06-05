const notFound = (req, res, next) => {
	const error = new Error('Notfound');
	error.status = 404;
	next(error);
};

export default notFound;
