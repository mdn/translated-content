---
title: HTMLMediaElement：src 属性
slug: Web/API/HTMLMediaElement/src
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.src`** 属性反映 HTML 媒体元素的 `src` 属性的值，其指示要在元素中使用的媒体资源的 URL。

> [!NOTE]
> 了解此元素当前正在使用的媒体资源的 URL 的最佳方法是查看 {{domxref("HTMLMediaElement.currentSrc", "currentSrc")}} 属性的值，该属性还考虑从 {{domxref("HTMLSourceElement")}}（代表 {{HTMLElement("source")}} 元素）中提供的列表中选择的最佳或首选媒体资源。

## 值

一个包含要在元素中使用的媒体资源的 URL 的字符串；此属性反映 HTML 元素的 `src` 属性的值。

## 示例

```js
const obj = document.createElement("video");
console.log(obj.src); // ""
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLMediaElement")}}：用于定义 `HTMLMediaElement.src` 属性的接口。
