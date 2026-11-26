---
title: "TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed"
slug: Web/JavaScript/Reference/Errors/Deprecated_caller_or_arguments_usage
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の [厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)でのみ発生する例外 "'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them" は、非推奨の {{jsxref("Functions/arguments/callee", "arguments.callee")}}、{{jsxref("Function.prototype.caller")}}、または {{jsxref("Function.prototype.arguments")}} プロパティが使用されたときに発生します。

## エラーメッセージ

```plain
TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them (V8-based & Firefox)
TypeError: 'arguments', 'callee', and 'caller' cannot be accessed in this context. (Safari)
```

## エラー型

{{jsxref("TypeError")}} です。[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)でのみ発生します。

## エラーの原因

[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)で、{{jsxref("Functions/arguments/callee", "arguments.callee")}}、{{jsxref("Function.prototype.caller")}}、または {{jsxref("Function.prototype.arguments")}} プロパティが使用されていますが、これらは使うべきではありません。関数の呼び出し元が漏洩し、標準化されておらず、最適化が難しく、パフォーマンスに悪影響を及ぼす可能性があるため、非推奨です。

## 例

### 非推奨の `function.caller` または `arguments.callee`

{{jsxref("Function.prototype.caller")}} と [`arguments.callee`](/ja/docs/Web/JavaScript/Reference/Functions/arguments/callee) は非推奨です（詳しくは各リファレンス記事を参照してください）。

```js example-bad
"use strict";

function myFunc() {
  if (myFunc.caller === null) {
    return "The function was called from the top!";
  }
  return `This function's caller was ${myFunc.caller}`;
}

myFunc();
// TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
```

### `Function.prototype.arguments`

{{jsxref("Function.prototype.arguments")}} は非推奨です（詳しくはリファレンス記事を参照してください）。

```js example-bad
"use strict";

function f(n) {
  g(n - 1);
}

function g(n) {
  console.log(`before: ${g.arguments[0]}`);
  if (n > 0) {
    f(n);
  }
  console.log(`after: ${g.arguments[0]}`);
}

f(2);

console.log(`returned: ${g.arguments}`);
// TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
```

## 関連情報

- [非推奨の機能、廃止された機能](/ja/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features)
- [厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)
- {{jsxref("Function.prototype.arguments")}}
- {{jsxref("Function.prototype.caller")}}
- [`arguments.callee`](/ja/docs/Web/JavaScript/Reference/Functions/arguments/callee)
