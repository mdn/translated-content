---
title: "TypeError: invalid 'instanceof' operand 'x'"
slug: Web/JavaScript/Reference/Errors/invalid_right_hand_side_instanceof_operand
---

{{jsSidebar("Errors")}}

JavaScript の例外 "invalid 'instanceof' operand" は、 [`instanceof` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/instanceof)の右側のオペランドにコンストラクターオブジェクト、すなわち `prototype` を持ち呼び出すことができるものが使用されなかった場合に発生します。

## エラーメッセージ

```js
TypeError: invalid 'instanceof' operand "x" (Firefox)
TypeError: "x" is not a function (Firefox)
TypeError: Right-hand side of 'instanceof' is not an object (Chrome)
TypeError: Right-hand side of 'instanceof' is not callable (Chrome)
```

## エラータイプ

{{jsxref("TypeError")}}

## 何がうまくいかなかったのか？

[`instanceof` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/instanceof) は、右側のオペランドがコンストラクターオブジェクトであることを想定しています。つまり、右側のオペランドは `prototype` プロパティを持ち、呼び出し可能であるオブジェクトである必要があります。

## 例

### instanceof と typeof

```js example-bad
"test" instanceof ""; // TypeError: invalid 'instanceof' operand ""
42 instanceof 0; // TypeError: invalid 'instanceof' operand 0

function Foo() {}
var f = Foo(); // Foo() が呼び出されて undefined を返す
var x = new Foo();

x instanceof f; // TypeError: invalid 'instanceof' operand f
x instanceof x; // TypeError: x is not a function
```

これらのエラーを修正するには、[`instanceof` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/instanceof) を [`typeof` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/typeof) に置き換えるか、評価結果の代わりに関数名を使用するようにしてください。

```js example-good
typeof "test" == "string"; // true
typeof 42 == "number"; // true

function Foo() {}
var f = Foo; // Do not call Foo.
var x = new Foo();

x instanceof f; // true
x instanceof Foo; // true
```

## 関連項目

- [`instanceof` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/instanceof)
- [`typeof` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/typeof)
