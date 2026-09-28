---
title: 'TypeError: "x" is not a non-null object'
slug: Web/JavaScript/Reference/Errors/No_non-null_object
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の例外 "is not a non-null object" は、ある場所でオブジェクトが期待されているのに提供されなかった場合に発生します。 [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) はオブジェクトではなく、動作しません。

## エラーメッセージ

```plain
TypeError: Property description must be an object: x (V8-based)
TypeError: Property descriptor must be an object, got "x" (Firefox)
TypeError: Property description must be an object. (Safari)
```

## エラー型

{{jsxref("TypeError")}}

## エラーの原因

ある場所でオブジェクトが期待されていますが、提供されませんでした。 [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) はオブジェクトではなく、動作しません。与えられた状況で適切なオブジェクトを提供しなければなりません。

## 例

## プロパティ記述子が求められている場合

{{jsxref("Object.create()")}} メソッドや {{jsxref("Object.defineProperty()")}} メソッド、{{jsxref("Object.defineProperties()")}} メソッドを使用するとき、省略可能な記述子の引数として、プロパティ記述子オブジェクトが想定されます。 (ただの数値など) オブジェクト以外のものを提供すると、エラーが発生します。

```js example-bad
Object.defineProperty({}, "key", 1);
// TypeError: 1 is not a non-null object

Object.defineProperty({}, "key", null);
// TypeError: null is not a non-null object
```

有効なプロパティ記述子はこのようになります。

```js example-good
Object.defineProperty({}, "key", { value: "foo", writable: false });
```

## 関連情報

- {{jsxref("Object.create()")}}
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.defineProperties()")}}
