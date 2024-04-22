---
title: 'TypeError: invalid ''in'' operand "x"'
slug: Web/JavaScript/Reference/Errors/in_operator_no_object
---

{{jsSidebar("Errors")}}

## 错误提示

```plain
TypeError: invalid 'in' operand "x" (Firefox)
TypeError: Cannot use 'in' operator to search for 'x' in y (Chrome)
```

## 错误类型

{{jsxref("TypeError")}}

## 哪里出错了？

[`in` 操作符](/zh-CN/docs/Web/JavaScript/Reference/Operators/in)只可以用来检测对象中是否存在某个属性，而不能用来在字符串、数字或者其他基本类型的数据中进行检索。

## 示例

### 在字符串中进行检索

与其他语言不同（如 Python），不能使用 [`in` 操作符](/zh-CN/docs/Web/JavaScript/Reference/Operators/in)在字符串中进行检索。

```js example-bad
"Hello" in "Hello World";
// TypeError: invalid 'in' operand "Hello World"
```

可以使用 {{jsxref("String.prototype.indexOf()")}} 来代替：

```js example-good
"Hello World".indexOf("Hello") !== -1;
// true
```

### 操作数不能为 null 或者 undefined

确保你将要进行探测的对象不为 {{jsxref("null")}} 或者 {{jsxref("undefined")}}.

```js example-bad
var foo = null;
"bar" in foo;
// TypeError: invalid 'in' operand "foo"
```

in 操作符的预期操作数只有对象类型。

```js example-good
var foo = { baz: "bar" };
"bar" in foo; // false

"PI" in Math; // true
"pi" in Math; // false
```

### 在数组中进行检索

当使用 in 操作符来对 {{jsxref("Array")}} 对象进行检索的时候一定要特别小心，因为它检测的是索引值而不是位于索引位置的值。

```js
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
3 in trees; // true
"oak" in trees; // false
```

## 相关内容

- [`in` operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/in)
