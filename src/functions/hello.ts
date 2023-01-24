import { FastifyReply, FastifyRequest } from "fastify"

const handler = (_request: FastifyRequest, reply: FastifyReply) => {
    reply.send({
        statusCode: 200,
        body: `Hello and ${process.env.MY_VARIABLE}!}`,
    })
}

export default { handler, url: "/hello", method: "GET" }
