🚀 A template that serves as a starter for quickly and efficiently creating serverless APIs with fastify and typescript

Toolstack:

-   fastify
-   @fastify/aws-lambda
-   serverless framework
-   typescript
-   webpack
-   nodemon
-   prettier
-   husky
-   commitlint
-   cz

# How to use

> It is recommended that you use the same node version as the deployed lambda would which is `nodejs18.x`. But is completely up to you if you wish to change it.

```
yarn install
```

then run:

```
yarn dev
```

It will spin-up the local environment and will listen for changes and restart the server.

You can create an `.env` file and your environment variables will be automatically be injected.

### Creating new endpoints

You can use the `hello.ts` as a guideline. All you need to do is to export a `serverlessFunction` with your handler, route and method and import it from `index.ts`.

## Deploying

```
yarn deploy
```

It will build for production and use serverless framework to deploy to aws
