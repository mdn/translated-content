---
title: "TypeError: invalid 'instanceof' operand 'x'"
slug: Web/JavaScript/Reference/Errors/invalid_right_hand_side_instanceof_operand
---

{{jsSidebar("Errors")}}

## 消息

```plain
TypeError: invalid 'instanceof' operand "x" (Firefox)
TypeError: "x" is not a function (Firefox)
TypeError: Right-hand side of 'instanceof' is not an object (Chrome)
TypeError: Right-hand side of 'instanceof' is not callable (Chrome)
```

## 错误类型

{{jsxref("TypeError")}}

## 哪里出错了？

[`instanceof` 操作符](/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof) 希望右边的操作数为一个构造对象，即一个有 `prototype` 属性且可以调用的对象。

## 示例

```js example-bad
"test" instanceof ""; // TypeError: invalid 'instanceof' operand ""
42 instanceof 0; // TypeError: invalid 'instanceof' operand 0

function Foo() {}
var f = Foo(); // Foo() is called and returns undefined
var x = new Foo();

x instanceof f; // TypeError: invalid 'instanceof' operand f
x instanceof x; // TypeError: x is not a function
```

为了解决上述问题，你可能需要将[`instanceof` 操作符](/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof) 换成 [`typeof` 操作符](/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof)，或者确保你使用的是函数名称，而不是函数计算的结果。

```js example-good
typeof "test" == "string"; // true
typeof 42 == "number"; // true

function Foo() {}
var f = Foo; // Do not call Foo.
var x = new Foo();

x instanceof f; // true
x instanceof Foo; // true
```

## 参见

- [`instanceof` 操作符](/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof)
- [`typeof` 操作符](/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof)
