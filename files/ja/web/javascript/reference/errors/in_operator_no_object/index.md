---
title: "TypeError: cannot use 'in' operator to search for 'x' in 'y'"
slug: Web/JavaScript/Reference/Errors/in_operator_no_object
---

{{jsSidebar("Errors")}}

JavaScript の例外 "right-hand side of 'in' should be an object" は、 [`in` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/in)が文字列、数値、その他のプリミティブ型の中を検索するために使用された場合に発生します。これは、あるプロパティがオブジェクト内にあることをチェックする用途でしか使用することができません。

## エラーメッセージ

```js
TypeError: Invalid operand to 'in' (Edge)
TypeError: right-hand side of 'in' should be an object, got 'x' (Firefox)
TypeError: cannot use 'in' operator to search for 'x' in 'y' (Firefox, Chrome)
```

## エラーの種類

{{jsxref("TypeError")}}

## エラーの原因

[`in` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/in)はあるプロパティがオブジェクト内にあることをチェックする用途でしか使用することができません。文字列、数値、その他のプリミティブ型の中を検索することはできません。

## 例

### 文字列内の検索

他のプログラミング言語 (Python など) とは異なり、 [`in` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/in)を使用して文字列の中を検索することはできません。

```js example-bad
"Hello" in "Hello World";
// TypeError: cannot use 'in' operator to search for 'Hello' in 'Hello World'
```

ここでは代わりに {{jsxref("String.prototype.indexOf()")}} を使う必要があります。

```js example-good
"Hello World".indexOf("Hello") !== -1;
// true
```

### オペランドを null や undefined にすることはできない

調査対象のオブジェクトが実際に {{jsxref("null")}} や {{jsxref("undefined")}} になっていないことを確認してください。

```js example-bad
var foo = null;
"bar" in foo;
// TypeError: cannot use 'in' operator to search for 'bar' in 'foo' (Chrome)
// TypeError: right-hand side of 'in' should be an object, got null (Firefox)
```

`in` 演算子は常にオブジェクトを期待します。

```js example-good
var foo = { baz: "bar" };
"bar" in foo; // false

"PI" in Math; // true
"pi" in Math; // false
```

### 配列の中の検索

`in` 演算子を使用して {{jsxref("Array")}} オブジェクトの中を検索するときは注意してください。 `in` 演算子は添字の数値をチェックするものであり、その位置の値をチェックするのではありません。

```js
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
3 in trees; // true
"oak" in trees; // false
```

## 関連情報

- [`in` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/in)
