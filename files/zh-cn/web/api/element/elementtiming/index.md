---
title: Element：elementTiming 属性
slug: Web/API/Element/elementTiming
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}{{SeeCompatTable}}

{{domxref("Element")}} 接口的 **`elementTiming`** 属性用于标识在 {{domxref("PerformanceElementTiming")}} API 中观测的元素。`elementTiming` 属性反映了 [`elementtiming`](/zh-CN/docs/Web/HTML/Reference/Attributes/elementtiming) HTML 属性的值。

## 值

一个字符串。

## 示例

### 打印 `elementTiming` 的值

在该示例中，将 [`elementtiming`](/zh-CN/docs/Web/HTML/Reference/Attributes/elementtiming) 属性添加到 {{HTMLElement("img")}} 元素上，以便观测该图像。

```html
<img
  src="image.jpg"
  alt="a nice image"
  elementtiming="big-image"
  id="myImage" />
```

你可以通过调用 `el.elementTiming` 来获取 `elementtiming` HTML 属性的字符串值。

```js
const el = document.getElementById("myImage");
console.log(el.elementTiming); // "big-image"
```

有关使用 Element Timing API 的更完整示例，请参见 {{domxref("PerformanceElementTiming")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("PerformanceElementTiming")}}
- [`elementtiming`](/zh-CN/docs/Web/HTML/Reference/Attributes/elementtiming) HTML 属性
