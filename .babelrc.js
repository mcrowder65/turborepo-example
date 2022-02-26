module.exports = {
  presets: [
    "@babel/preset-env",
    //hello
    "@babel/preset-react",
  ],
  plugins: [
    function myCustomPlugin() {
      return {
        visitor: {
          ImportDeclaration(path) {
            if (this.filename.includes("shared/")) {
              const value = path.node.source.value

              if (value.includes("src/")) {
                path.node.source.value = `shared/${value}`
                return
              }
            }
            if (this.filename.includes("/apps/rs/")) {
              const value = path.node.source.value
              if (value.includes("src/")) {
                path.node.source.value = `rs/${value}`
                return
              }
            }
            if (this.filename.includes("/apps/rstwo/")) {
              const value = path.node.source.value
              if (value.includes("src/")) {
                path.node.source.value = `rstwo/${value}`
                return
              }
            }
          },
        },
      }
    },
    // [
    //   "module-resolver",
    //   {
    //     alias: {
    //       "src/components": "shared/src/components",
    //       src: "rs/src",
    //     },
    //   },
    // ],
  ],
}
