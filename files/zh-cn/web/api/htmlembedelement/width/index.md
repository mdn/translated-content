---
title: HTMLEmbedElement：width 属性
slug: Web/API/HTMLEmbedElement/width
l10n:
  sourceCommit: d8a52569d8d465eb626af3d33600c8c638a7a322
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLEmbedElement")}} 接口的 **`width`** 属性返回一个反映 {{HTMLElement("embed")}} 元素的 `width` 属性的字符串，其以 CSS 像素为单位指示资源的显示宽度。

## 值

一个字符串，以 CSS 像素为单位指示资源的显示宽度。

## 示例

```html
<embed id="el" width="800" height="600" />
```

```js
const el = document.getElementById("el");
console.log(el.width); // 输出：“800”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLCanvasElement.width")}}
- {{domxref("HTMLIFrameElement.width")}}
- {{domxref("HTMLImageElement.width")}}
- {{domxref("HTMLObjectElement.width")}}
- {{domxref("HTMLSourceElement.width")}}
- {{domxref("HTMLVideoElement.width")}}
