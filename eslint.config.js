// eslint.config.js
// 🧩 ESLint設定ファイル（HTMLとインラインJSを同時チェック）
// これ1つでHTMLタグの構文も<script>内のJSもLintできます

import js from "@eslint/js"; // JS標準ルール
import html from "@html-eslint/eslint-plugin"; // HTMLルール集
import parser from "@html-eslint/parser"; // HTML+JS対応パーサー

export default [
    js.configs.recommended, // JS基本ルールを読み込み
    {
        files: ["**/*.html"], // HTMLファイル対象
        languageOptions: {
            parser, // ← HTMLを読むパーサーを指定
            ecmaVersion: "latest", // 最新JS構文対応
            sourceType: "script", // import/exportなしの通常スクリプト
        },
        plugins: { "@html-eslint": html }, // HTML用ルールを有効化
        rules: {
            "@html-eslint/indent": ["error", 2], // インデント2スペース
            "@html-eslint/no-duplicate-attrs": "error", // 属性の重複禁止
            "no-console": "warn", // console.logを警告
            "eqeqeq": "error", // ==禁止、===推奨
        },
    },
];
