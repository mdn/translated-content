---
title: WebAssembly.Exception 构造函数
slug: WebAssembly/Reference/JavaScript_interface/Exception/Exception
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

**`WebAssembly.Exception()`** 构造函数用于创建一个新的 [`WebAssembly.Exception`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Exception)。

构造函数接受一个 [`Tag`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Exception) 参数和一个由数据字段组成的 `payload` 数组。每一个 payload 元素的数据类型必须匹配在 `Tag` 中指定的相应的数据类型。

构造函数也可以接受一个 `options` 对象。`options.traceStack` 属性可以设置为 `true`（默认为 `false`），表明可能将一个 Wasm 堆栈跟踪附着到异常的 [`stack`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Exception/stack) 属性上。

## 语法

```js-nolint
new Exception(tag, payload)
new Exception(tag, payload, options)
```

### 参数

- `tag`
  - : [`WebAssembly.Tag`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Tag) 定义的是 `payload` 中每个值所被期待的数据类型。
- `payload`
  - : 一个由一个或多个数据字段组成的数组，构成异常的载荷。元素的数据类型必须和 `tag` 中对应元素的数据类型相匹配。如果载荷中的数据字段的数量不匹配，则抛出 {{jsxref("TypeError")}} 异常。
- `options` {{optional_inline}} {{non-standard_inline}}
  - : 一个对象，有下列的可选字段：
    - `traceStack` {{optional_inline}} {{non-standard_inline}}
      - : 设置为 `true` 表明 `Exception` 可能有一个附着到 [`stack`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Exception/stack) 属性的堆栈跟踪，否者设置为 `false`。这个属性默认为 `false`（如果 `options` 或 `options.traceStack` 未提供的话）。

### 异常

- `TypeError`
  - : `payload` 和 `tag` 序列的元素数量不一致并且（或者）元素类型不匹配。

## 示例

这个例子展示的是用一个简单的标签创建一个异常。

```js
// 创建标签并用它创建一个异常
const tag = new WebAssembly.Tag({ parameters: ["i32", "f32"] });
const exception = new WebAssembly.Exception(tag, [42, 42.3]);
```

[`stack` 示例](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Exception/stack#示例)展示的是用 `options` 参数创建的一个异常。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebAssembly](/zh-CN/docs/WebAssembly) 概览
- [WebAssembly 概念](/zh-CN/docs/WebAssembly/Guides/Concepts)
- [使用 WebAssembly JavaScript API](/zh-CN/docs/WebAssembly/Guides/Using_the_JavaScript_API)
