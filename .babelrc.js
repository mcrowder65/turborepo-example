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
            if (this.filename.includes("shared")) {
              const value = path.node.source.value

              if (value.includes("src/components")) {
                path.node.source.value = `shared/${value}`
              }
            }
            if (this.filename.includes("rs")) {
              const value = path.node.source.value
              if (value.includes("src/")) {
                path.node.source.value = `rs/${value}`
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
