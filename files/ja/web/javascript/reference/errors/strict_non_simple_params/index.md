---
title: 'SyntaxError: "use strict" not allowed in function with non-simple parameters'
slug: Web/JavaScript/Reference/Errors/Strict_non_simple_params
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の例外 "`"use strict"` not allowed in function" は、{{jsxref("Functions/Default_parameters", "デフォルト引数", "", 1)}}、{{jsxref("Functions/rest_parameters", "残余引数", "", 1)}}、{{jsxref("Operators/Destructuring", "構造分解引数", "", 1)}}を持つ関数の先頭で `"use strict"` ディレクティブを使用したときに発生します。

## エラーメッセージ

```plain
SyntaxError: Illegal 'use strict' directive in function with non-simple parameter list (V8-based)
SyntaxError: "use strict" not allowed in function with default parameter (Firefox)
SyntaxError: "use strict" not allowed in function with rest parameter (Firefox)
SyntaxError: "use strict" not allowed in function with destructuring parameter (Firefox)
SyntaxError: 'use strict' directive not allowed inside a function with a non-simple parameter list. (Safari)
```

## エラー型

{{jsxref("SyntaxError")}}。

## 何がうまくいかなかったのか？

次の引数のいずれかを持つ関数の先頭に `"use strict"` ディレクティブが書かれています。

- {{jsxref("Functions/Default_parameters", "デフォルト引数", "", 1)}}
- {{jsxref("Functions/rest_parameters", "残余引数", "", 1)}}
- {{jsxref("Operators/Destructuring", "構造分解引数", "", 1)}}

ECMAScript 仕様では、このような関数の先頭に `"use strict"` を使用することは許可されていません。

## 例

### 関数宣言

この例では、関数 `sum` はデフォルト引数 `a=1` と `b=2` を持っています。

```js-nolint example-bad
function sum(a = 1, b = 2) {
  // SyntaxError: "use strict" not allowed in function with default parameter
  "use strict";
  return a + b;
}
```

関数を[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)にしたく、スクリプト全体または外側の関数も厳格モードになってよい場合は、`"use strict"` ディレクティブを関数の外側に移動できます。

```js example-good
"use strict";
function sum(a = 1, b = 2) {
  return a + b;
}
```

### 関数式

関数式では、別の回避策を使えます。

```js-nolint example-bad
const sum = function sum([a, b]) {
  // SyntaxError: "use strict" not allowed in function with destructuring parameter
  "use strict";
  return a + b;
};
```

これは、次の式に変換できます。

```js example-good
const sum = (function () {
  "use strict";
  return function sum([a, b]) {
    return a + b;
  };
})();
```

### アロー関数

アロー関数が `this` 変数にアクセスする必要がある場合、アロー関数を外側の関数として使用できます。

```js-nolint example-bad
const callback = (...args) => {
  // SyntaxError: "use strict" not allowed in function with rest parameter
  "use strict";
  return this.run(args);
};
```

これは、次の式に変換できます。

```js example-good
const callback = (() => {
  "use strict";
  return (...args) => this.run(args);
})();
```

## 関連情報

- {{jsxref("Strict_mode", "厳格モード", "", 1)}}
- {{jsxref("Statements/function", "関数宣言", "", 1)}}
- {{jsxref("Operators/function", "関数式", "", 1)}}
- {{jsxref("Functions/Default_parameters", "デフォルト引数", "", 1)}}
- {{jsxref("Functions/rest_parameters", "残余引数", "", 1)}}
- {{jsxref("Operators/Destructuring", "構造分解引数", "", 1)}}
