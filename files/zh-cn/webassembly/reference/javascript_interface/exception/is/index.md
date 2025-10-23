---
title: WebAssembly.Exception.prototype.is()
slug: WebAssembly/Reference/JavaScript_interface/Exception/is
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

[`Exception`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Exception) 对象的 **`is()`** 原型方法可以用于测试 `Exception` 是否匹配一个指定的标签。

在将标签传递给 [`Exception.prototype.getArg()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg) 获取传递值之前，可以用该方法测试标签的正确性。可以用在 JavaScript 中创建的标签或者在 WebAssembly 中创建并导出到 JavaScript 中的标签。

> [!NOTE]
> 数据类型顺序相同的标签是不够的——必须和异常创建时用的标签具有相同的*身份*（同一个标签）。

## 语法

```js-nolint
is(tag)
```

### 参数

- `tag`
  - : 用来验证异常的类型的 [`WebAssembly.Tag`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Tag)。

### 返回值

如果指定的标签匹配异常，则返回布尔值 `true`，否则返回 `false`。

## 示例

下面的代码展示如何使用 `is()` 验证一个标签匹配一个 [`Exception`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Exception)。

```js
// 创建标签，并用它创建异常
const tag1 = new WebAssembly.Tag({ parameters: ["i32", "f64"] });
const exception1 = new WebAssembly.Exception(tag1, [42, 42.3]);

// 验证“tag1”匹配这个异常
console.log(`Tag1: ${exception1.is(tag1)}`);

// 日志输出：
// Tag1: true
```

我们也可以展示这个异常不匹配另一个标签，即使该标签是用相同的参数创建的。

```js
// 创建一个新的标签（用一样的参数）并验证它不匹配该异常
const tag2 = new WebAssembly.Tag({ parameters: ["i32", "f64"] });
console.log(`Tag2: ${exception1.is(tag2)}`);

// 日志输出：
// Tag2: false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebAssembly](/zh-CN/docs/WebAssembly) 概览
- [WebAssembly 概念](/zh-CN/docs/WebAssembly/Guides/Concepts)
- [使用 WebAssembly JavaScript API](/zh-CN/docs/WebAssembly/Guides/Using_the_JavaScript_API)
