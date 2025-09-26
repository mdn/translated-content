---
title: HTMLAnchorElement：hreflang 属性
slug: Web/API/HTMLAnchorElement/hreflang
l10n:
  sourceCommit: 5948500efb7d63d514966013adc8ed925ce28f69
---

{{ApiRef("HTML DOM")}}

{{domxref("HTMLAnchorElement")}} 接口的 **`hreflang`** 属性是一个表示链接资源的语言的字符串。

它反映 {{HTMLElement("a")}} 元素的 `hreflang` 属性，如果没有 `hreflang` 属性，则为空字符串（`""`）。

Web 浏览器和搜索引擎可能会使用此信息来更好地理解链接内容的语言，但它们并不一定要遵循此信息。为 `hreflang` 属性提供的值应遵循 {{RFC(5646, "用于标识语言的标记（也被称为 BCP 47）")}}中定义的格式。如果不符合该格式，则会被忽略。

在获取链接资源后，Web 浏览器并不完全依赖于 `hreflang` 属性。相反，它们会使用与资源直接关联的语言信息（例如，通过 HTTP 标头）来确定资源的语言。

## 值

一个包含语言标签的字符串，如果没有 `hreflang` 属性，则为空字符串（`""`）。

## 示例

```html
<a id="exampleLink" href="https://example.com" hreflang="en-IN">示例链接</a>
<p class="hreflang"></p>
```

```css
#exampleLink {
  font-size: 1.5rem;
}
```

```js
const anchorElement = document.getElementById("exampleLink");
const pTag = document.querySelector(".hreflang");
console.log(anchorElement.hreflang); // 输出：“en-IN”
pTag.textContent = anchorElement.hreflang;
```

## Result

{{EmbedLiveSample("示例",100,100)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLLinkElement.hreflang")}} 属性
