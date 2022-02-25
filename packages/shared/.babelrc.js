module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    [
      "import-path-replace",
      {
        rules: [
          {
            match: "src",
            replacement: "lib",
          },
        ],
      },
    ],
  ],
}
