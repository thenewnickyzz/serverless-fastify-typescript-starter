import lambdaFastify from "@fastify/aws-lambda"
import server from "./base"

export const handler = lambdaFastify(server)
