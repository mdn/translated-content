---
title: Function.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Function/toString
---

{{JSRef}}

**`toString()`** 方法返回一个表示当前函数源代码的字符串。

{{EmbedInteractiveExample("pages/js/function-tostring.html")}}

## 语法

```js-nolint
toString()
```

### 返回值

一个表示函数源代码的字符串。

## 描述

{{jsxref("Function")}} 对象覆盖了从 {{jsxref("Object")}} 继承来的 `toString()` 方法，而没有继承 {{jsxref("Object.prototype.toString", "toString")}}。对于用户定义的 `Function` 对象，`toString` 方法返回一个字符串，其中包含用于定义函数的源文本段。

在 `Function` 需要表示为字符串时，JavaScript 会自动调用函数的 `toString` 方法，例如：函数与一个字符串进行拼接。

若 `this` 不是 `Function` 对象，则 `toString()` 方法将抛出 {{jsxref("TypeError")}}（"Function.prototype.toString called on incompatible object"）异常。

```js example-bad
Function.prototype.toString.call("foo"); // throws TypeError
```

如果是在内置函数或由 `Function.prototype.bind` 返回的函数上调用 `toString()`，则`toString()` 返回原生代码字符串，如下

```js
"function someName() { [native code] }";
```

对于内部对象方法和函数，`someName` 是函数的初始名称；否则其可能是实现定义（implementation-defined）的，但始终以属性名称语法的形式呈现，如：`[1 + 1]`、`someName` 或 `1`。

> **备注：** 这意味着对原生函数的字符串调用 [`eval()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval) 将始终产生语法错误。

若是在由 `Function` 构造函数生成的函数上调用 `toString()`，则 `toString()` 返回创建后的函数源码，包括形参和函数体，函数名为“anonymous”。例如：对于 `Function("a", "b", "return a + b").toString()`，则会返回：

```js
"function anonymous(a,b\n) {\nreturn a + b\n}";
```

从 ES2018 开始，规范要求 `toString()` 的返回值与声明的源代码完全相同，包括空格和注释；或者因某种原因，主机没有源代码，则要求返回一个原生函数字符串。参见[兼容性表格](#浏览器兼容性)以查询对这一修改后的行为的支持情况。

## 示例

### 比较实际源代码与 toString 的结果

```js
function test(fn) {
  console.log(fn.toString());
}

function f() {}
class A {
  a() {}
}
function* g() {}

test(f); // "function f() {}"
test(A); // "class A { a() {} }"
test(g); // "function* g() {}"
test((a) => a); // "(a) => a"
test({ a() {} }.a); // "a() {}"
test({ *a() {} }.a); // "*a() {}"
test({ [0]() {} }[0]); // "[0]() {}"
test(
  Object.getOwnPropertyDescriptor(
    {
      get a() {},
    },
    "a",
  ).get,
); // "get a() {}"
test(
  Object.getOwnPropertyDescriptor(
    {
      set a(x) {},
    },
    "a",
  ).set,
); // "set a(x) {}"
test(Function.prototype.toString); // "function toString() { [native code] }"
test(function f() {}.bind(0)); // "function () { [native code] }"
test(Function("a", "b")); // function anonymous(a\n) {\nb\n}
```

注意：在 `Function.prototype.toString()` 的行为变更后，在调用 `toString()` 时，不允许对该方法的实现在其不是原生函数的字符串时合成函数的源码。方法始终返回创建函数时使用的确切的源代码——包括以上示例中的 [getter](/zh-CN/docs/Web/JavaScript/Reference/Functions/get) 和 [setter](/zh-CN/docs/Web/JavaScript/Reference/Functions/set)。[`Function`](/zh-CN/docs/Web/JavaScript/Reference/Functions) 构造函数本身具有合成函数源代码的能力（即，一种隐式的 [`eval()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval) 形式）。

### 获取函数的源文本

可以通过将函数强制转换为字符串来获取函数的源文本——例如，通过将其包装在模板字符串中：

```js
function foo() {
  return "bar";
}
console.log(`${foo}`); // "function foo() { return 'bar' }"
```

得到的源文本是*准确的*，包括其中的注释（否则引擎的内部表示不会存储这些注释）。

```js
function foo /* a comment */() {
  return "bar";
}
console.log(foo.toString()); // "function foo/* a comment */() { return 'bar' }"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Object.prototype.toString()")}}
