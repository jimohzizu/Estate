export const errorHandler = (statuCode, message) =>{
    const error = new Error()
    error.statusCode = statuCode
    error.message = message
    return error
}