---
title: HTMLMediaElement.src
slug: Web/API/HTMLMediaElement/src
---

{{APIRef("HTML DOM")}}**`HTMLMediaElement.src`**属性反映 HTML 媒体元素的`src` 属性的值，该属性指示要在元素中使用的媒体资源的 URL。

> **备注：** 了解此元素中当前正在使用的媒体资源的 URL 的最佳方法是查看 {{domxref("HTMLMediaElement.currentSrc", "currentSrc")}}属性的值，该属性还考虑从 {{domxref("HTMLSourceElement")}} (代表 {{HTMLElement("source")}} 元素) 中提供的列表中选择最佳或首选媒体资源

## Syntax

```plain
var mediaUrl = HTMLMediaElement.src;
```

### Value

一个{{domxref("USVString")}}对象，包含要在元素中使用的媒体资源的 URL;此属性反映 HTML 元素的`src` 属性的值。

## Example

```js
var obj = document.createElement("video");
console.log(obj.src); // ""
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining it, {{domxref("HTMLMediaElement")}}.
