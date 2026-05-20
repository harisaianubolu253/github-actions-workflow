const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,
  {
    files: ["eslint.config.js", "src/**/*.js", "tests/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        module: "readonly",
        require: "readonly",
        describe: "readonly",
        test: "readonly",
        expect: "readonly",
      },
    },
  },
];
