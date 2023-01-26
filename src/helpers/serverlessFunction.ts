import { FastifyInstance } from "fastify"
import { FastifyReply } from "fastify/types/reply"
import { FastifyRequest } from "fastify/types/request"
import { HTTPMethods } from "fastify/types/utils"

export type ServerlessFunction = {
    handler: (request: FastifyRequest, reply: FastifyReply) => void
    url: string
    method: HTTPMethods
}

export const serverlessFunction =
    (data: ServerlessFunction) => (server: FastifyInstance) => {
        const { handler, url, method } = data
        server.route({ url, handler, method })
    }
