import { FastifyReply } from "fastify/types/reply"
import { FastifyRequest } from "fastify/types/request"
import { HTTPMethods } from "fastify/types/utils"

export type ServerlessFunction = {
    handler: (request: FastifyRequest, reply: FastifyReply) => void
    url: string
    method: HTTPMethods
}
