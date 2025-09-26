---
title: HTMLLinkElement：media 属性
slug: Web/API/HTMLLinkElement/media
l10n:
  sourceCommit: 167bf62480885e850452ea0dfb8d83393cd36ddd
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLLinkElement")}} 接口的 **`media`** 属性是一个字符串，表示资源适用的一个或多个媒体格式的列表。

它反映 {{HTMLElement("link")}} 元素的 `media` 属性。

## 值

一个字符串。

## 示例

```html
<link
  id="el"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  media="screen and (min-width: 600px)"
  crossorigin="anonymous" />
```

```js
const el = document.getElementById("el");
console.log(el.media); // 输出：“screen and (min-width: 600px)”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
