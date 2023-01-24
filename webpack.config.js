const path = require("path")
const NodemonPlugin = require("nodemon-webpack-plugin")
const DotenvWebpackPlugin = require("dotenv-webpack")

const config = {
    entry: "",
    target: "node",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        library: {
            type: "commonjs2",
        },
    },
    plugins: [new DotenvWebpackPlugin()],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
}

module.exports = (_env, argv) => {
    if (argv.mode === "development") {
        config.entry = "./src/local.ts"
        config.devtool = "inline-source-map"
        config.watch = true
        config.plugins = [...config.plugins, new NodemonPlugin()]
    }

    if (argv.mode === "production") {
        config.entry = "./src/lambda.ts"
    }

    return config
}
