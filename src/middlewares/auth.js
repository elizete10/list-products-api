import jwt from "jsonwebtoken"
import { env } from "../config/env.js"

export const ensureAuth = (request, _response, next) => {
    const header = request.header.authorization

    if (!header) {
        return next({
            message: "Missing Authorization Header",
            status: 401,
            code: "UNAUTHORRIZED"
        })
    }

    const [type, token] = header.split(" ")

    if (type !== "Bearer" || !token) {
        return next({
            message: "Invalid Authorization Format",
            status: 400,
            code: "BAD_REQUEST"
        })
    }

    try {
      const payload  = jwt.verify(token, env.jwtSecret)

      request.user = {id: payload.sub }

      return next()
    } catch (error) {
        return next ({
            message: "invalid or expired token",
            status: 401,
            code: "UNIUTHORIZED"
        })
    }
}
