// eslint.config.js（Flat Config形式・2025年最新版）

import js from "@eslint/js"; // ✅ ESLint公式が提供する基本ルールセット

export default [
    js.configs.recommended, // 推奨ルール（旧: "extends": "eslint:recommended" の代わり）

    {
        files: ["**/*.js", "**/*.mjs"], // 対象ファイル
        languageOptions: {
            sourceType: "module",
            ecmaVersion: "latest",
        },
        rules: {
            "no-unused-vars": "warn",
            "no-console": "off",
        },
    },
];
