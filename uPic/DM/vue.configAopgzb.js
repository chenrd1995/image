module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "./src/assets/css/common.scss";`,
            },
        },
    },
}