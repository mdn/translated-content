---
title: Document.width
slug: Web/API/Element/clientWidth
---

{{APIRef("DOM")}} {{deprecated_header}}

> **備註：** 從 Gecko 6.0 開始， `document.width` 將不再被支援。取而代之的是 `document.body.clientWidth`。請參照：{{domxref("element.clientWidth")}}.

傳回目前文件中，{{HTMLElement("body")}} 元素的寬度有多少像素。

Internet Explorer 不支援！

## 語法

```js
pixels = document.width;
```

## 範例

```js
function init() {
  alert("文件的寬度是 " + document.width + " 像素。");
}
```

## 其他替代

```js
document.body.clientWidth; /* <body> 的寬度 */
document.documentElement.clientWidth; /* <html> 的寬度 */
window.innerWidth; /* 視窗的寬度 */
```

## 規範於

HTML5

## 同時參考

- {{domxref("document.height")}}
- {{domxref("Element.clientWidth")}}
- {{domxref("Element.scrollWidth")}}
