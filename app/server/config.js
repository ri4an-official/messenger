export const PORT = 5000,
    DB_URL =
        'mongodb+srv://user:user@cluster0.fsigh.mongodb.net/?retryWrites=true&w=majority',
    BASE_URL = '/api/v1/'
export const mongodbOptions = {
    // useUnifiedTypology: true,
    // useNewParser: true,
}
export const status = {
    OK: 200,
    UNSET: 422,
    UNAUTH: 401,
    SERVER_ERROR: 500,
}
