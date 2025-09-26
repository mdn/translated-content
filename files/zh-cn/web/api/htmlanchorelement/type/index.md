---
title: HTMLAnchorElement：type 属性
slug: Web/API/HTMLAnchorElement/type
l10n:
  sourceCommit: 10346c8cf5dfe6e030bd1cdc32f04461afaa8c64
---

{{ApiRef("HTML DOM")}}

{{domxref("HTMLAnchorElement")}} 接口的 **`type`** 属性是一个字符串，用于指示链接资源的 MIME 类型。

它反映 {{HTMLElement("a")}} 元素的 `type` 属性。

## 值

一个字符串。

## 示例

```html
<a id="exampleLink" href="https://example.com" type="text/html">示例链接</a>
<p class="type"></p>
```

```css
#exampleLink {
  font-size: 1.5rem;
}
```

```js
const anchorElement = document.getElementById("exampleLink");
const pTag = document.querySelector(".type");
console.log(anchorElement.type); // 输出：“text/html”
pTag.textContent = anchorElement.type;
```

{{EmbedLiveSample("示例",100,100)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLLinkElement.type")}} 属性
- {{domxref("HTMLSourceElement.type")}} 属性
- {{domxref("HTMLEmbedElement.type")}} 属性
