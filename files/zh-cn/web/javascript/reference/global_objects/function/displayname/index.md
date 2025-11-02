---
title: Function.displayName
slug: Web/JavaScript/Reference/Global_Objects/Function/displayName
---

{{non-standard_header}}

{{jsxref("Function")}} 实例的 **`displayName`** 可选属性指定函数的显示名称。

## 值

`displayName` 属性最初在任何函数上都不存在，它是由代码作者添加的。出于显示的目的，它应该是一个字符串。

## 描述

如果存在 `displayName` 属性，其可能会被控制台和性能分析工具优先选择，作为函数的名称显示。

在各种浏览器中，只有 Firefox 控制台使用该属性。React 开发者工具在显示组件树时也使用 [`displayName`](https://reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging) 属性。

Firefox 对可能由[匿名 JavaScript 函数命名约定](http://johnjbarton.github.io/nonymous/index.html)算法生成的 `displayName` 进行了一些基本的解码尝试。以下模式可以被检测到：

- 如果 `displayName` 以一系列字母数字字符、`_` 和 `$` 结尾，最长的这种后缀将被显示。
- 如果 `displayName` 以一系列以 `[]` 包围的字符结尾，该序列将被显示，但不包括方括号。
- 如果 `displayName` 以一系列字母数字字符和 `_`，后面跟着一些 `/`、`.` 或 `<` 结尾，将返回该序列，但不包括尾部的 `/`、`.` 或 `<` 字符。
- 如果 `displayName` 以一系列字母数字字符和 `_`，后面跟着 `(^)` 结尾，该序列将被显示，但不包括 `(^)`。

如果以上模式都不匹配，则显示整个 `displayName`。

## 示例

### 设置 displayName

通过在 Firefox 控制台中输入以下内容，它应该显示为类似 `function MyFunction()` 的内容：

```js
const a = function () {};
a.displayName = "MyFunction";

a; // function MyFunction()
```

### 动态更改 displayName

你可以动态更改函数的 `displayName`：

```js
const object = {
  // anonymous
  someMethod: function someMethod(value) {
    someMethod.displayName = `someMethod (${value})`;
  },
};

console.log(object.someMethod.displayName); // undefined

object.someMethod("123");
console.log(object.someMethod.displayName); // "someMethod (123)"
```

### 清理 displayName

Firefox 开发者工具会在显示 `displayName` 属性之前清理一些常见的模式。

```js
function foo() {}

function testName(name) {
  foo.displayName = name;
  console.log(foo);
}

testName("$foo$"); // function $foo$()
testName("foo bar"); // function bar()
testName("Foo.prototype.add"); // function add()
testName("foo ."); // function foo .()
testName("foo <"); // function foo <()
testName("foo?"); // function foo?()
testName("foo()"); // function foo()()

testName("[...]"); // function ...()
testName("foo<"); // function foo()
testName("foo..."); // function foo()
testName("foo(^)"); // function foo()
```

## 规范

不属于任何规范。

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Function.prototype.name")}}
