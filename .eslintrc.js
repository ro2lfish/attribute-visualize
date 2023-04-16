module.exports = {
  root: true,
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: [
    "node_modules/*.js",
    "**/node_modules/*.js",
    "**/dist/*.js",
    "dist/*.js",
  ],
  extends: ["alloy", "alloy/react"],
  env: {
    // Your environments (which contains several predefined global variables)
    //
    browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {},
  overrides: [
    {
      files: ["**/*.tsx", "*.ts"],
      parser: "@typescript-eslint/parser",
      rules: {
        "no-undef": "off",
      },
    },
  ],
  rules: {
    // Customize your rules
    curly: "error",
    complexity: "off",
    "brace-style": [
      "error",
      "1tbs",
      {
        allowSingleLine: false,
      },
    ],
    indent: [
      "error",
      2,
      {
        SwitchCase: 1,
        MemberExpression: 1,
      },
    ],
    "no-mixed-spaces-and-tabs": "error",
    "object-curly-spacing": ["error", "always"],
    "multiline-ternary": ["error", "always-multiline"],
    // "operator-linebreak": [
    //   "error",
    //   "before",
    //   {
    //     overrides: {
    //       //
    //       "?": "before",
    //       ":": "before",
    //       "&&": "after",
    //       "||": "after",
    //     },
    //   },
    // ],
    "object-property-newline": [
      "error",
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],
    "no-unused-vars": "off",
  },
};
