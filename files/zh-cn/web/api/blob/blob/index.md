---
title: Blob：Blob() 构造函数
slug: Web/API/Blob/Blob
l10n:
  sourceCommit: 94df34126960a2f1bd3032c6e2cf203d67b912d8
---

{{APIRef("File API")}}

**`Blob()`** 构造函数返回一个新的 {{domxref("Blob")}} 对象。blob 的内容由参数 `blobParts` 中给出的值串联而成。

## 语法

```js-nolint
new Blob(blobParts)
new Blob(blobParts, options)
```

### 参数

- `blobParts` {{optional_inline}}

  - : 一个[可迭代对象](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代协议)，比如 {{jsxref("Array")}}，包含 {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}}、{{jsxref("DataView")}}、{{domxref("Blob")}}、字符串或者任意这些元素的混合，这些元素将会被放入 {{domxref("Blob")}} 中。字符串应该是格式良好的 Unicode，而单独代理项（lone surrogate）会使用和 {{jsxref("String.prototype.toWellFormed()")}} 相同的算法进行清理。

- `options` {{optional_inline}}
  - : 一个可以指定以下任意属性的对象：
    - `type` {{optional_inline}}
      - : 将会被存储到 blob 中的数据的 {{Glossary("MIME type", "MIME 类型")}}。默认值是空字符（`""`）。
    - `endings` {{optional_inline}} {{non-standard_inline}}
      - : 如果数据是文本，那么如何解释其中的换行符（`\n`）。默认值 `transparent` 会将换行符复制到 blob 中而不会改变它们。要将换行符转换为主机系统的本地约定，请指定值 `native`。

### 返回值

一个包含指定数据的新的 {{domxref("Blob")}} 对象。

## 示例

```js
const blobParts = ['<q id="a"><span id="b">hey!</span></q>']; // 一个包含单个字符串的数组
const blob = new Blob(blobParts, { type: "text/html" }); // 得到 blob
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
