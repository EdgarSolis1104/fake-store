export default [
  {
    files: ["js/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        fetch: "readonly",
        console: "readonly",
        localStorage: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
      "eqeqeq": "error",
      "no-var": "error",
      "prefer-const": "warn",
      "semi": ["warn", "never"],
      "quotes": ["warn", "double"]
    }
  }
]
 