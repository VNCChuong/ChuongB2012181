class ApiError extends Error{
	constructor(statusCode , message){
	super();
	this.statusCode = statusCode;
	this.messsage = message;
	}
}

module.exports = ApiError;