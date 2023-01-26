import fastify from "fastify"
import * as functions from "./functions"

const server = fastify({
    logger: true,
})

// Register all functions
for (const [_key, value] of Object.entries(functions)) {
    value.default(server)
}

export default server
