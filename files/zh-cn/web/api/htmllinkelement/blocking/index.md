---
title: HTMLLinkElement：blocking 属性
slug: Web/API/HTMLLinkElement/blocking
l10n:
  sourceCommit: 7cd4706990ab95794415aee05ba0a9662e742a17
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLLinkElement")}} 接口的 **`blocking`** 属性是一个字符串，表示在获取外部资源时应阻塞某些操作。

它反映 {{HTMLElement("link")}} 元素的 `blocking` 属性。

## 值

一个字符串，必须是以下列出的用空格分隔的阻塞标记列表，这些标记指示应被阻塞的操作：

- `render`
  - : 屏幕上的内容渲染被阻塞。

## 示例

```html
<link
  id="el"
  rel="stylesheet"
  href="/example.css"
  blocking="render"
  crossorigin />
```

```js
const el = document.getElementById("el");
console.log(el.blocking); // 输出：“render”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLScriptElement.blocking")}}
- {{domxref("HTMLStyleElement.blocking")}}
