import fastify from "fastify"
import * as functions from "./functions"
import { ServerlessFunction } from "./types/ServerlessFunction"

const server = fastify({
    logger: true,
})

// Map over the functions and register them with Fastify
for (const [_key, value] of Object.entries(functions)) {
    const { handler, url, method } = value.default as ServerlessFunction
    server.route({ url, handler, method })
}

export default server
