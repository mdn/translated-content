---
title: Document.height
slug: conflicting/Web/API/Element/clientHeight
original_slug: Web/API/Document/height
---
{{APIRef("DOM")}} {{deprecated_header}}

> **备注：** 在 Gecko 的 6.0 版本之后， `document.height` 不再被支持。 使用 `document.body.clientHeight 来代替`. 详见 {{domxref("element.clientHeight")}}.

返回 {{domxref("document")}} 对象的高度。在大多数场景中， 它相当于当前文档的 {{HTMLElement("body")}} 元素。

## 语法

```plain
pixels = document.height
```

## 示例

```js
// alert document height
alert(document.height);
```

## 可选操作

```plain
document.body.clientHeight
document.documentElement.clientHeight
document.documentElement.scrollHeight
```

## 规范

HTML5

## 兼容性

{{Compat("api.Document.height")}}

## 另请参阅

- {{domxref("document.width")}}
- {{domxref("Element.clientHeight")}}
- {{domxref("Element.scrollHeight")}}
