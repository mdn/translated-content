---
title: HTMLIFrameElement：src 属性
slug: Web/API/HTMLIFrameElement/src
l10n:
  sourceCommit: 1862c53e6c1299f07f7810d018efb24ced2c8ac4
---

{{APIRef}}

**`HTMLIFrameElement.src`** 是一个反映包含要嵌入内容地址的 [`src`](/zh-CN/docs/Web/HTML/Element/iframe#src) HTML 属性的字符串。

请注意，以编程的方式，通过 {{domxref("Element.removeAttribute()")}} 等方法从 `<iframe>` 中移除 `src` 属性会导致 iframe 加载 `about:blank`。

## 语法

```js-nolint
src = iframeElt.src
iframeElt.src = src
```

## 示例

```js
const iframe = document.createElement("iframe");
iframe.src = "/";
const body = document.querySelector("body");
body.appendChild(iframe); // 使用完整的 URL 作为引用源来获取图像
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{DOMxRef("HTMLAnchorElement.src")}}
- {{DOMxRef("HTMLAreaElement.src")}}
- {{DOMxRef("HTMLAreaElement.src")}}
