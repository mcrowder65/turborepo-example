function rename({ path, folder, filename }) {
  if (filename.includes(`/${folder}`)) {
    const value = path.node.source.value

    if (value.indexOf("src/") === 0) {
      path.node.source.value = `${folder}${value}`
      return
    }
  }
}
module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    function myCustomPlugin() {
      return {
        visitor: {
          ImportDeclaration(path) {
            rename({ path, filename: this.filename, folder: "shared/" })
            rename({ path, filename: this.filename, folder: "shared-two/" })
            rename({ path, filename: this.filename, folder: "rs/" })
            rename({ path, filename: this.filename, folder: "rstwo/" })
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
