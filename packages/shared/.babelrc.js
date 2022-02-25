module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "src/hooks": "./lib/hooks",
          "src/components": "./lib/components",
        },
      },
    ],
  ],
}
