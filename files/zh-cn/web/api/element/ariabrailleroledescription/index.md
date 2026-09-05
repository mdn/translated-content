---
title: Element：ariaBrailleRoleDescription 属性
slug: Web/API/Element/ariaBrailleRoleDescription
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

{{domxref("Element")}} 接口的 **`ariaBrailleRoleDescription`** 属性反映 [`aria-brailleroledescription`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription) 属性的值，该属性定义元素的 ARIA 盲文角色描述。

此属性可用于提供 [`aria-roledescription`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription) 值的缩略版本。仅当存在 `aria-roledescription`，且它对于盲文而言过于冗长这一少见情形下，才应使用该属性。[`aria-brailleroledescription`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription) 包含有关应在何时设置该属性的更多信息。

## 值

- `<string>`
  - ：该值是一个无约束的字符串值类型，旨在转换为盲文。

## 示例

### 获取和设置 ariaBrailleRoleDescription

本示例展示如何获取和设置 `ariaBrailleRoleDescription` 属性。

#### HTML

首先，定义一个用作幻灯片放映中幻灯片的 `<article>` 元素。将 `aria-roledescription` 属性设为 `"slide"`，并将其在 `aria-brailleroledescription` 中的盲文缩写设为 `"sld"`。

```html
<article
  id="article"
  aria-roledescription="slide"
  aria-brailleroledescription="sld"
  aria-labelledby="slide1heading">
  <h1 id="slide1heading">欢迎参加我的演讲</h1>
</article>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 70px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

使用 `ariaBrailleRoleDescription` 属性获取元素的角色描述。以下代码先获取并记录该值，随后将盲文角色描述设为 `"sd"` 并再次记录该值（仅用于说明；生产代码中不应设置此值）。

```js
const article = document.getElementById("article");
log(article.ariaBrailleRoleDescription);
article.ariaBrailleRoleDescription = "sd";
log(article.ariaBrailleRoleDescription);
```

#### 结果

{{EmbedLiveSample("获取和设置 ariaBrailleRoleDescription")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
