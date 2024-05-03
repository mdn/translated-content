---
title: HTMLIFrameElement：width 属性
slug: Web/API/HTMLIFrameElement/width
l10n:
  sourceCommit: d8a52569d8d465eb626af3d33600c8c638a7a322
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLIFrameElement")}} 接口的 **`width`** 属性返回一个反映 {{HTMLElement("iframe")}} 元素的 `width` 属性的字符串，表示 iframe 的 CSS 像素宽度。

## 值

表示 iframe 宽度的字符串（以 CSS 像素为单位）。

## 示例

```html
<iframe id="el" width="800" height="600"></iframe>
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
- {{domxref("HTMLEmbedElement.width")}}
- {{domxref("HTMLImageElement.width")}}
- {{domxref("HTMLObjectElement.width")}}
- {{domxref("HTMLSourceElement.width")}}
- {{domxref("HTMLVideoElement.width")}}
