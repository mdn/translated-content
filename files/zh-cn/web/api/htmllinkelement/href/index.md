---
title: HTMLLinkElement：href 属性
slug: Web/API/HTMLLinkElement/href
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLLinkElement")}} 接口的 **`href`** 属性包含一个字符串，该字符串是与链接相关联的 URL。

它反映 {{HTMLElement("link")}} 元素的 `href` 属性。如果元素没有 `href` 属性，则此属性的值为空字符串（`""`）。

> [!NOTE]
> 每个 `<link>` 元素都必须包含 `href` 属性或 [`imagesrcset`](/zh-CN/docs/Web/HTML/Reference/Elements/link#imagesrcset) 属性中的一个或两个。这意味着，对于每个有效的 `<link>`，此属性或 {{domxref("HTMLLinkElement.imageSrcset", "imageSrcset")}} 都不会为空。

## 值

包含 URL 的字符串，如果没有 `href` 元素，则为空字符串（`""`）。

## 示例

```html
<link rel="stylesheet" href="example.css" />
```

```js
const link = document.getElementsByTag("link")[0];
console.log(link.href); // 'example.css'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLLinkElement.imageSrcset")}} 属性
- {{domxref("HTMLAnchorElement.href")}} 属性
