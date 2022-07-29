const {
    VantResolver
} = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');

const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    configureWebpack: {
        rules: [{
            test: /\.scss$/,
            use: [
                'vue-style-loader',
                'css-loader',
                'sass-loader'
            ]
        }],
        plugins: [
            ComponentsPlugin({
                resolvers: [VantResolver()],
            }),
        ]
    },
    chainWebpack: config => {
        config
            .resolve.alias
            .set("@", resolve("src"))
            .set("@assets", resolve("src/assets"))
    }
}