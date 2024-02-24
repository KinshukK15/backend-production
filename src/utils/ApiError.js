class ApiError extends Error{
    constructor(
        statusCode,
        message = "Soemthing wwent",
        error = [],
        statck = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = fasle;
        this.errors = errors


        if(statck){
            this.stack =statck
        } else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}