---
title: HTMLTimeElement：dateTime 属性
slug: Web/API/HTMLTimeElement/dateTime
l10n:
  sourceCommit: 835c199410845eed61aaf8439cb2e9719e7e9f98
---

{{ APIRef("HTML DOM") }}

**`HTMLTimeElement.dateTime`** 属性是一个反映 [`datetime`](/zh-CN/docs/Web/HTML/Reference/Elements/time#datetime) HTML 属性的字符串，包含元素日期和时间值的机器可读形式。

## 值

一个字符串。对于有效的字符串格式，请参见 [`datetime` 有效值](/zh-CN/docs/Web/HTML/Reference/Elements/time#有效的日期时间值)。

## 示例

```js
// 假设 HTML 中有 <time id="t"> 元素
const t = document.getElementById("t");
t.dateTime = "6w 5h 34m 5s";
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 它所属的 {{domxref("HTMLTimeElement")}} 接口。
