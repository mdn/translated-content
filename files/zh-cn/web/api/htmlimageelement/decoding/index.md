---
title: HTMLImageElement.decoding
slug: Web/API/HTMLImageElement/decoding
---

{{APIRef}}{{domxref("HTMLImageElement")}} 接口的 **`decoding`** 属性用于告诉浏览器使用何种方式解析图像数据。

## Syntax

```
refStr = imgElem.decoding;
imgElem.decoding = refStr;
```

### Values

使用 {{domxref("DOMString")}} 表示解码方式。可使用以下值：

- **`sync`**: 同步解码图像，保证与其他内容一起显示。
- **`async`**: 异步解码图像，加快显示其他内容。
- **`auto`**: 默认模式，表示不偏好解码模式。由浏览器决定哪种方式更适合用户。

## Usage notes

`decoding` 属性使您可以控制是否允许浏览器尝试异步加载图像。如果这样做会引起问题，您可指定值为 `sync` 禁止异步加载。异步加载对 {{HTMLElement("img")}} 元素很有用，对屏幕外的图像对象可能会更有用。

## Examples

```js
var img = new Image();
img.decoding = "sync";
img.src = "img/logo.png";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
