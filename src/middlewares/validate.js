export const validade = (schemas = {}) => (request, _response, next) => {
    try {
            if(schemas.body) request.body = schemas.body.parse(request.body)
            if(schemas.query) request.query = schemas.body.parse(request.query)
            if(schemas.params) request.params = schemas.body.parse(request.params)
       
                return next()
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