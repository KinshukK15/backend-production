class ApiError extends Error{
    constructor(
        statusCode,
        message = "Soemthing wwent",
        error = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = fasle;
        this.errors = errors


        if(stack){
            this.stack =stack
        } else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}