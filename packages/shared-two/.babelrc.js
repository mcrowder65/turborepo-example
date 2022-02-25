module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "src/functions": "./lib/functions",
        },
      },
    ],
  ],
}
