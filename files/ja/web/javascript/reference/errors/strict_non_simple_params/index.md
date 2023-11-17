---
title: 'SyntaxError: "use strict" not allowed in function with non-simple parameters'
slug: Web/JavaScript/Reference/Errors/Strict_non_simple_params
---

{{jsSidebar("Errors")}}

## メッセージ

```
Firefox:
SyntaxError: "use strict" not allowed in function with default parameter
SyntaxError: "use strict" not allowed in function with rest parameter
SyntaxError: "use strict" not allowed in function with destructuring parameter

Chrome:
SyntaxError: Illegal 'use strict' directive in function with non-simple parameter list
```

## エラーの種類

{{jsxref("SyntaxError")}}。

## 何がうまくいかなかったのか？

次の引数のうちいずれかを持つ関数の先頭に `"use strict"` ディレクティブが書かれています:

- {{jsxref("Functions/Default_parameters", "Default parameters", "", 1)}}
- {{jsxref("Functions/rest_parameters", "Rest parameters", "", 1)}}
- {{jsxref("Operators/Destructuring_assignment", "Destructuring parameters", "", 1)}}

ECMAScript 仕様に則って、このような関数の先頭では `"use strict"` を使用できません。

## 例

### Function ステートメント

このケースでは、関数 `sum` は既定値を持つ引数 `a=1` と `b=2` を持っています:

```js example-bad
function sum(a=1, b=2) {
  // SyntaxError: "use strict" not allowed in function with default parameter
  "use strict";
  return a + b;
}
```

関数を [strict モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)にしたい、かつスクリプト全体、またはエンクロージャー関数が strict モードになってもよいなら、`"use strict"` ディレクティブを関数の外側に移動できます:

```js example-good
"use strict";
function sum(a = 1, b = 2) {
  return a + b;
}
```

### Function 式

function 式では、別の回避策をとることができます:

```js example-bad
var sum = function sum([a, b]) {
  // SyntaxError: "use strict" not allowed in function with destructuring parameter
  "use strict";
  return a + b;
};
```

これは、次の式に変換できます:

```js example-good
var sum = (function () {
  "use strict";
  return function sum([a, b]) {
    return a + b;
  };
})();
```

### アロー関数

アロー関数が `this` 変数にアクセスする必要がある場合、アロー関数をエンクロージャー関数として使用できます:

```js example-bad
var callback = (...args) => {
  // SyntaxError: "use strict" not allowed in function with rest parameter
  "use strict";
  return this.run(args);
};
```

これは、次の式に変換できます:

```js example-good
var callback = (() => {
  "use strict";
  return (...args) => {
    return this.run(args);
  };
})();
```

## 関連項目

- {{jsxref("Strict_mode", "Strict mode", "", 1)}}
- {{jsxref("Statements/function", "function statement", "", 1)}}
- {{jsxref("Operators/function", "function expression", "", 1)}}
- {{jsxref("Functions/Default_parameters", "Default parameters", "", 1)}}
- {{jsxref("Functions/rest_parameters", "Rest parameters", "", 1)}}
- {{jsxref("Operators/Destructuring_assignment", "Destructuring parameters", "", 1)}}
