---
title: HTMLScriptElement：defer 属性
short-title: defer
slug: Web/API/HTMLScriptElement/defer
l10n:
  sourceCommit: 86e6a39c09408844137f307b83d35eca43d5cfda
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLScriptElement")}} 接口的 **`defer`** 属性是一个布尔值，用于控制脚本的执行方式。对于经典脚本，若 `defer` 属性为 `true`，则外部脚本会在文档解析完成后、触发 {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} 事件之前执行。对于[模块脚本](/zh-CN/docs/Web/JavaScript/Guide/Modules)，`defer` 属性不起作用。

它反映 {{HTMLElement("script")}} 元素的 `defer` 属性。

## 值

一个布尔值。

## 示例

```html
<script id="el" src="/example.js" defer></script>
```

```js
const el = document.getElementById("el");
console.log(el.defer); // 输出：true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLScriptElement.async")}}
