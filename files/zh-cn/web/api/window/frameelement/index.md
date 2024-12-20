---
title: Window：frameElement 属性
slug: Web/API/Window/frameElement
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{ApiRef}}

**`Window.frameElement`** 属性返回嵌入窗口的元素（例如 {{HTMLElement("iframe")}} 或 {{HTMLElement("object")}}）。

> [!NOTE]
> 尽管该属性的名称如此，但它适用于任何嵌入点内嵌入的文档，包括 {{HTMLElement("object")}}、{{HTMLElement("iframe")}} 或 {{HTMLElement("embed")}}。

## 值

表示窗口嵌入的元素。如果窗口未嵌入到其他文档中，或者嵌入的文档与窗口具有不同的{{glossary("origin", "源（origin）")}}，则该值为 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null)。

## 示例

```js
const frameEl = window.frameElement;
// 如果我们处于嵌入状态，则将容器元素的 URL 更改为 'https://mozilla.org/'
if (frameEl) {
  frameEl.src = "https://mozilla.org/";
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("window.frames")}} 返回一个类数组对象，该对象列出了当前窗口的下属的所有子框架。
- {{domxref("window.parent")}} 返回一个返回父窗口，即包含子窗口 `frameElement` 的窗口。
