---
title: "SyntaxError: missing name after . operator"
slug: Web/JavaScript/Reference/Errors/Missing_name_after_dot_operator
---

{{jsSidebar("Errors")}}

## 错误提示

```plain
SyntaxError: missing name after . operator
```

## 错误类型

{{jsxref("SyntaxError")}}

## 哪里出错了？

点操作符 (`.`) 用于[属性访问](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_accessors)。你需要指定要访问的属性名称。对于属性名称是运算表达式的属性访问，需要将属性访问的方式从点操作符转换为方括号操作符。这样你就可以在其中进行表达式运算了。或许你想要进行字符串拼接操作？那么请使用加号操作符（+）。请参考下面的示例。

## 示例

### 属性访问

在 JavaScript 中，[属性访问器](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_accessors)或者使用点操作符 (.)，或者使用方括号操作符 (\[])，但是二者不能同时使用。方括号操作符允许属性名称为运算表达式的属性访问。

```js example-bad
var obj = { foo: { bar: "baz", bar2: "baz2" } };
var i = 2;

obj.[foo].[bar]
// SyntaxError: missing name after . operator

obj.foo."bar"+i;
// SyntaxError: missing name after . operator
```

为了进行代码修复，你需要向下面这样来访问对象：

```js example-good
obj.foo.bar; // "baz"
// or alternatively
obj["foo"]["bar"]; // "baz"

// computed properties require square brackets
obj.foo["bar" + i]; // "baz2"
```

### 属性访问与字符串拼接

如果你是中其他编程语言（如 {{Glossary("PHP")}}）转到 JavaScript 的，很容易将点操作符 (.) 与连接操作符 (+) 混用：

```js example-bad
console.log("Hello" . "world");

// SyntaxError: missing name after . operator
```

相反要使用加号来进行字符串拼接：

```js example-good
console.log("Hello" + "World");
```

## 相关页面

- [属性访问器](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_accessors)
