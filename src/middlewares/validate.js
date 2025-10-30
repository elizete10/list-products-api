export const validade = (schemas = {}) => (request, _response, next) => {
    try {

    } catch (error) {
        const issues = error?.issues?.map(item => ({
         path: item.path,
         message: item.message   
        }))

        return next({
            message: "Validation Error",
            status:400,
            code: "BAD_REQUEST",
            details: issues
        })

    }
}