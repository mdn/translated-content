---
title: RegExp.prototype.flags
slug: Web/JavaScript/Reference/Global_Objects/RegExp/flags
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

{{jsxref("RegExp")}} 实例的 **`flags`** 访问器属性返回当前正则表达式的[标志](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions#通过标志进行高级搜索)。

{{InteractiveExample("JavaScript Demo: RegExp.prototype.flags")}}

```js interactive-example
// Outputs RegExp flags in alphabetical order

console.log(/foo/gi.flags);
// Expected output: "gi"

console.log(/bar/muy.flags);
// Expected output: "muy"
```

## 描述

`RegExp.prototype.flags` 具有一个字符串值。`flags` 属性中的标志按字母顺序排列（从左到右，例如 `"dgimsuvy"`）。它实际上调用了其他标志访问器（如 [`hasIndices`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices)、[`global`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) 等）并逐个连接这些结果。

所有内置函数都是读取 `flags` 属性，而不是读取单独的标志访问器。

`flags` 的 set 访问器是 `undefined`。因此你不能直接修改该属性。

## 示例

### 使用 flags

```js
/foo/gi.flags; // "gi"
/bar/muy.flags; // "muy"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `RegExp.prototype.flags` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("RegExp.prototype.source")}}
