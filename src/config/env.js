import dotenv from "dotenv"
dotenv.config()

export const env= {
    port: Number(process.env.PORT ?? 3333),
    jwtSecret: process.env.JTW_SECRET ?? "change-me",
    jwExpiresIn: process.env.JWT_EXPIRES_IN ?? "15m",
    corsOrigin: process.env.CORS_ORIGIN ?? "*"
}