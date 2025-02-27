---
title: HTMLAnchorElement：text 属性
slug: Web/API/HTMLAnchorElement/text
l10n:
  sourceCommit: 5d670c42df8ede57e3d6341cb15d8251eb188dc4
---

{{ApiRef("HTML DOM")}}

{{domxref("HTMLAnchorElement")}} 的 **`text`** 属性表示元素内部的文本。此属性与 {{domxref("Node.textContent")}} 表示的信息相同。

## 值

一个字符串。

## 示例

```html
<a id="exampleLink" href="https://example.com">示例链接</a>
<p class="text"></p>
```

```css
#exampleLink {
  font-size: 1.5rem;
}
```

```js
const anchorElement = document.getElementById("exampleLink");
const pTag = document.querySelector(".text");
pTag.textContent = `文本属性：${anchorElement.text}`;
```

### 结果

{{EmbedLiveSample("示例",100,100)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLScriptElement.text")}} 属性
- {{domxref("HTMLOptionElement.text")}} 属性
