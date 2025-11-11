---
title: HTMLEmbedElement：height 属性
slug: Web/API/HTMLEmbedElement/height
l10n:
  sourceCommit: d8a52569d8d465eb626af3d33600c8c638a7a322
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLEmbedElement")}} 接口的 **`height`** 属性返回一个反映 {{HTMLElement("embed")}} 元素的 `height` 属性的字符串，其以 CSS 像素为单位指示资源的显示高度。

## 值

一个字符串，以 CSS 像素为单位指示资源的显示高度。

## 示例

```html
<embed id="el" width="800" height="600" />
```

```js
const el = document.getElementById("el");
console.log(el.height); // 输出：“600”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLCanvasElement.height")}}
- {{domxref("HTMLIFrameElement.height")}}
- {{domxref("HTMLImageElement.height")}}
- {{domxref("HTMLObjectElement.height")}}
- {{domxref("HTMLSourceElement.height")}}
- {{domxref("HTMLVideoElement.height")}}
