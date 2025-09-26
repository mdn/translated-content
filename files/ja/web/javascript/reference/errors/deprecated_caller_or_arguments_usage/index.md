---
title: "ReferenceError: deprecated caller or arguments usage"
slug: Web/JavaScript/Reference/Errors/Deprecated_caller_or_arguments_usage
---

{{jsSidebar("Errors")}}

JavaScript の [strict モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)独自の例外 "deprecated caller or arguments usage" は、非推奨の {{jsxref("Function.caller")}} または {{jsxref("Function.arguments")}} プロパティが使用されたときに発生します。

## エラーメッセージ

```js
TypeError: 'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context (Edge)
Warning: ReferenceError: deprecated caller usage (Firefox)
Warning: ReferenceError: deprecated arguments usage (Firefox)
TypeError: 'callee' and 'caller' cannot be accessed in strict mode. (Safari)
```

## エラーの種類

strict モードでのみ、{{jsxref("ReferenceError")}} の警告が発生します。 JavaScript の実行は、停止しません。

## エラーの原因

[strict モード](/ja/docs/Web/JavaScript/Reference/Strict_mode) で、 {{jsxref("Function.caller")}} または {{jsxref("Function.arguments")}} が使われていますが、それらは使用すべきではありません。呼び出し元を漏洩させること、標準外であること、最適化が困難になること、性能に悪影響を与える機能であるため、非推奨になりました。

## 例

### 非推奨の `function.caller` または `arguments.callee.caller`

{{jsxref("Function.caller")}} と [`arguments.callee.caller`](/ja/docs/Web/JavaScript/Reference/Functions/arguments/callee) は非推奨です (詳細は参照記事を見てください)。

```js example-bad
"use strict";

function myFunc() {
  if (myFunc.caller == null) {
    return "The function was called from the top!";
  } else {
    return "This function's caller was " + myFunc.caller;
  }
}

myFunc();
// Warning: ReferenceError: deprecated caller usage
// "The function was called from the top!"
```

### `Function.arguments`

{{jsxref("Function.arguments")}} は非推奨です (詳細は参照記事を見てください)。

```js example-bad
"use strict";

function f(n) {
  g(n - 1);
}

function g(n) {
  console.log("before: " + g.arguments[0]);
  if (n > 0) {
    f(n);
  }
  console.log("after: " + g.arguments[0]);
}

f(2);

console.log("returned: " + g.arguments);
// Warning: ReferenceError: deprecated arguments usage
```

## 関連情報

- [非推奨の機能、廃止された機能](/ja/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features)
- [Strict モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)
- {{jsxref("Function.arguments")}}
- {{jsxref("Function.caller")}} と [`arguments.callee.caller`](/ja/docs/Web/JavaScript/Reference/Functions/arguments/callee)
