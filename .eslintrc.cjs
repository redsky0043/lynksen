module.exports = {
  "parser": "@typescript-eslint/parser",
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true,
    "jasmine": true,
    "es6": true
  },
  "globals": {
    "test": true
  },
  "plugins": [
    "@typescript-eslint",
    "react-hooks"
  ],
  "rules": {
    '@typescript-eslint/no-unused-vars': "off",
    "prefer-arrow-callback": [2, { "allowNamedFunctions": true } ],
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "react/function-component-definition": "off",
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    "no-multi-spaces": "error",
    "no-nested-ternary": 0,
    "react/destructuring-assignment": ["off"],
    "import/no-unresolved": ["off"],
    "prefer-destructuring": ["off"],
    "import/extensions": ["off"],
    "react/jsx-uses-react": "off",
    "no-shadow": "off",
    "react/react-in-jsx-scope": "off",
    "react/no-danger": ["off"],
    "jsx-a11y/no-static-element-interactions": ["off"],
    "linebreak-style": ["off"],
    "react/jsx-filename-extension": ["off"],
    "import/prefer-default-export": ["off"],
    "no-unused-vars": ["off"],
    "jsx-a11y/click-events-have-key-events": ["off"],
    "jsx-a11y/anchor-is-valid": ["off"],
    "jsx-a11y/label-has-associated-control": ["off"],
    "jsx-a11y/label-has-for": ["off"],
    "max-len": ["off", { "code": 600 }],
    "camelcase": "off",
    "no-magic-numbers": ["off"],
    "react/jsx-one-expression-per-line": ["error"],
    "no-param-reassign": ["off"],
    "semi": ["error", "never"],
    "no-console": ["off"],
    "eol-last": ["off"],
    "import/order": ["error", {
      "newlines-between": "always",
      "groups": [
        "builtin",
        "external",
        "internal",
        "parent",
        "sibling",
        "index"
      ],
      "pathGroups": [
        {
          "pattern": "root-components/**",
          "group": "internal",
          "position": "after"
        },
        {
          "pattern": "components/**",
          "group": "internal",
          "position": "after"
        },
        {
          "pattern": "pages/**",
          "group": "internal",
          "position": "after"
        },
        {
          "pattern": "reduxs/**",
          "group": "internal",
          "position": "after"
        },
        {
          "pattern": "hooks/**",
          "group": "internal",
          "position": "after"
        },
        {
          "pattern": "assets/**",
          "group": "internal",
          "position": "after"
        },
        {
          "pattern": "utils/**",
          "group": "internal",
          "position": "after"
        },
        {
          "pattern": "helpers/**",
          "group": "internal",
          "position": "after"
        },
        {
          "pattern": "routes/**",
          "group": "internal",
          "position": "after"
        },
        {
          "pattern": "services/**",
          "group": "internal",
          "position": "after"
        },
        {
          "pattern": "theme/**",
          "group": "internal",
          "position": "after"
        },
        {
          "pattern": "customPropTypes/**",
          "group": "internal",
          "position": "after"
        }
      ],
      "pathGroupsExcludedImportTypes": ["builtin"]
    }],
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1,
        "ignoredNodes": [
          "TemplateLiteral"
        ]
      }
    ],
    "template-curly-spacing": ["off"],
    "react/jsx-max-props-per-line": ["error", {
      "maximum": 1, "when": "always"
    }],
    "no-implicit-globals": ["error"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "rules": {
        "no-unused-vars": "off",
        "@typescript-eslint/explicit-module-boundary-types": ["error"],
        "@typescript-eslint/no-var-requires": ["error"],
        "react/require-default-props": "off"
      }
    },
    {
      "files": ["*.js", "*.jsx"],
      "rules": {
        "react/prop-types": ["error"]
      }
    }
  ]
}
