import { FastifyReply, FastifyRequest } from "fastify"
import { serverlessFunction } from "../helpers/serverlessFunction"

const handler = (_request: FastifyRequest, reply: FastifyReply) => {
    reply.send({
        statusCode: 200,
        body: `Hello ${process.env.MY_VARIABLE}!}`,
    })
}

export default serverlessFunction({ handler, url: "/hello", method: "GET" })
