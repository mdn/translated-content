---
title: HTMLScriptElement：async 属性
short-title: async
slug: Web/API/HTMLScriptElement/async
l10n:
  sourceCommit: 3d57022613fbc562cc948938972aeffcaece819b
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLScriptElement")}} 接口的 **`async`** 属性是一个布尔值，用于控制脚本的执行方式。对于经典脚本，若 `async` 属性为 `true`，外部脚本会在文档解析的同时并行获取，并在可用时立即执行。对于[模块脚本](/zh-CN/docs/Web/JavaScript/Guide/Modules)，若 `async` 属性为 `true`，脚本及其所有依赖项会在文档解析的同时并行获取，并在可用时立即执行。

它反映 {{HTMLElement("script")}} 元素的 `async` 属性。

## 值

一个布尔值。

## 示例

```html
<script id="el" src="/example.js" async></script>
```

```js
const el = document.getElementById("el");
console.log(el.async); // 输出：true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLScriptElement.defer")}}
