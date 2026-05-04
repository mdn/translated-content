---
title: 'TypeError: "x" is (not) "y"'
slug: Web/JavaScript/Reference/Errors/Unexpected_type
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の例外 "_x_ is (not) _y_" は、予期しない型があったときに発生します。よくあるのは、予期せず {{jsxref("undefined")}} または [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) の値があった場合です。

## エラーメッセージ

```plain
TypeError: Cannot read properties of undefined (reading 'x') (V8 ベース)
TypeError: "x" is undefined (Firefox)
TypeError: "undefined" is not an object (Firefox)
TypeError: undefined is not an object (evaluating 'obj.x') (Safari)

TypeError: "x" is not a symbol (V8 ベース & Firefox)
TypeError: Symbol.keyFor requires that the first argument be a symbol (Safari)
```

## エラーの種類

{{jsxref("TypeError")}}

## エラーの原因

予期しない型がありました。これは {{jsxref("undefined")}} または [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) の値でしばしば発生します。

また、{{jsxref("Object.create()")}} や {{jsxref("Symbol.keyFor()")}} のようなある種のメソッドは、特定の型を要求し、それを提供する必要があります。

## 例

### 無効な場合

`undefined` または `null` の変数に対してメソッドを呼び出すことはできません。

```js example-bad
const foo = undefined;
foo.substring(1); // TypeError: foo is undefined

const foo2 = null;
foo2.substring(1); // TypeError: foo2 is null
```

ある種のメソッドでは、特定の型が求められることがあります。

```js example-bad
const foo = {};
Symbol.keyFor(foo); // TypeError: foo is not a symbol

const foo2 = "bar";
Object.create(foo2); // TypeError: "foo2" is not an object or null
```

### 問題の修正

null ポインターを `undefined` または `null` 値に修正するには、まずその値が `undefined` または `null` であるかどうかを検査してください。

```js example-good
if (foo !== undefined && foo !== null) {
  // これで、 foo が定義されていることがわかるので、実行することができる。
}
```

あるいは、`foo` が何らかの[偽値](/ja/docs/Glossary/Falsy)（`""` や `0` など）ではないと確信している場合、あるいはそうした場合を除外しても問題にならない場合は、単純に真値であるかどうかを検査するだけで済みます。

```js example-good
if (foo) {
  // foo は真値であることが分かるので、おそらく null/undefined ではない。
}
```

## 関連情報

- {{jsxref("undefined")}}
- [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null)
