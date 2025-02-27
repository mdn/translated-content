---
title: HTMLEmbedElement：src 属性
slug: Web/API/HTMLEmbedElement/src
l10n:
  sourceCommit: a0460b9c26f5ad9b8bbc9cc569f4fdd8058aec8f
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLEmbedElement")}} 接口的 **`src`** 属性返回一个指示嵌入资源的 URL 字符串。

它反映 {{HTMLElement("embed")}} 元素的 `src` 属性。

## 值

一个字符串。

## 示例

```html
<embed
  id="el"
  type="video/quicktime"
  src="movie.mov"
  width="640"
  height="480"
  title="视频标题" />
```

```js
const el = document.getElementById("el");
console.log(el.src); // 输出：“movie.mov”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
