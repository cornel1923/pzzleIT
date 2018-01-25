module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module",
        "allowImportExportEverywhere": true
    },
    "globals": {
        "StropheWrapper": true
    },
    "plugins": [
        "prettier"
    ],
    "extends": [
        "prettier",
        "airbnb"
    ],
    "env": {
        "browser": true
    },
    "rules": {
        // "prettier/prettier": "error"
        "linebreak-style": 0,
        "indent": [2, 2, { "SwitchCase": 1 }],
        "react/prop-types": [
            "off"
        ],
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [
                    ".js",
                    ".jsx"
                ]
            }
        ],
        "react/require-default-props": [
            "off"
        ],
        "react/jsx-closing-bracket-location": [
            "off",
            "props-aligned"
        ],
        "react/no-unused-prop-types": [
            "off"
        ]
    }

};