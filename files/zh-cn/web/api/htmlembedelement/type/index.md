---
title: HTMLEmbedElement：type 属性
slug: Web/API/HTMLEmbedElement/type
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLEmbedElement")}} 接口的 **`type`** 属性返回一个反映 {{HTMLElement("embed")}} 元素的 `type` 属性的字符串，用于表示资源的 {{glossary("MIME type", "MIME 类型")}}。它反映 {{htmlelement("embed")}} 元素的 [`type`](/zh-CN/docs/Web/HTML/Element/embed#type) 属性。

## 值

一个字符串，表示资源的 MIME 类型。

## 示例

```js
const el = document.getElementById("el");
console.log(el.type); // 输出：“video/webp”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLObjectElement.type")}}
- {{domxref("HTMLSourceElement.type")}}
- [Web 上的媒体类型](/zh-CN/docs/Web/Media/Guides/Formats)
- [对 Web 开发者至关重要的 MIME 类型](/zh-CN/docs/Web/HTTP/MIME_types#对_web_开发者至关重要的_mime_类型)
