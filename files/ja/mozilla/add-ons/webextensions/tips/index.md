---
title: Tips and Tricks
slug: Mozilla/Add-ons/WebExtensions/Tips
---

{{AddonSidebar}}

このページには開発者が WebExtensions を開発するのに便利ないろいろなコツや技術が書かれています。

## Using advanced JavaScript features from ECMAScript 6 and 7

Firefox は[たくさんの独創的な ECMAScript6](/Web/JavaScript/New_in_JavaScript/ECMAScript_6_support_in_Mozilla)の特徴を含んでいます。いくつかの新しい、そして実験的な特徴は、デフォルトでは Web や WebExtension では使用できません。もしあなたがこれらの機能を使いたい場合、[Babel](https://babeljs.io/)のようなトランスパイラを使用するのがベストでしょう。

Babel は大半の ES6 の特徴に対する transformations を提供します

provides transformations for the vast majority of ES6 features, and enables them by default.

Since Firefox already fully supports most of these, it's best to configure Babel to ignore them.

私達は.babelrc ファイルの作成やあなたの package.json の babel セクションに以下の設定を含めることを提案します。

```js
{
  "env": {
    "firefox": {
      "sourceMaps": "inline",
      "blacklist": [
        "es5.properties.mutators",
        "es6.arrowFunctions",
        "es6.destructuring",
        "es6.forOf",
        "es6.parameters",
        "es6.properties.computed",
        "es6.properties.shorthand",
        "es6.spec.symbols",
        "es6.spread",
        "es6.tailCall",
        "es6.templateLiterals",
        "es6.regex.sticky",
        "es6.regex.unicode"
      ]
    }
  }
}
```

Then, to compile an individual script, simply run:

```
BABEL_ENV=firefox babel <filename>
```

Or, to compile every JavaScript file under the directory `src` and place the compiled files in `compiled`, copying over non-JavaScript files in the process, run:

```
BABEL_ENV=firefox babel -Dd compiled src
```
