---
title: "::highlight()"
slug: Web/CSS/::highlight
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{CSSRef}}

**`::highlight()`** CSS [伪元素](/zh-CN/docs/Web/CSS/Pseudo-elements) 用于将样式应用到自定义高亮。

自定义高亮是一组 {{domxref("Range")}} 对象，并且通过 {{domxref("HighlightRegistry")}} 在网页上注册。

## 允许的属性值

只有特定的 CSS 属性可以与 `::highlight()` 一起使用：

- {{CSSxRef("color")}}
- {{CSSxRef("background-color")}}
- {{CSSxRef("text-decoration")}} 及其相关属性
- {{CSSxRef("text-shadow")}}
- {{CSSxRef("-webkit-text-stroke-color")}}, {{CSSxRef("-webkit-text-fill-color")}} and {{CSSxRef("-webkit-text-stroke-width")}}

特别地，{{CSSxRef("background-image")}} 将被忽略。

## 语法

```css-nolint
::highlight(custom-highlight-name)
```

## 示例

### 字符高亮

#### HTML

```html
<p id="rainbow-text">CSS Custom Highlight API rainbow</p>
```

#### CSS

```css
#rainbow-text {
  font-family: monospace;
  font-size: 1.5rem;
}

::highlight(rainbow-color-1) {
  color: #ad26ad;
  text-decoration: underline;
}
::highlight(rainbow-color-2) {
  color: #5d0a99;
  text-decoration: underline;
}
::highlight(rainbow-color-3) {
  color: #0000ff;
  text-decoration: underline;
}
::highlight(rainbow-color-4) {
  color: #07c607;
  text-decoration: underline;
}
::highlight(rainbow-color-5) {
  color: #b3b308;
  text-decoration: underline;
}
::highlight(rainbow-color-6) {
  color: #ffa500;
  text-decoration: underline;
}
::highlight(rainbow-color-7) {
  color: #ff0000;
  text-decoration: underline;
}
```

#### JavaScript

```js
const textNode = document.getElementById("rainbow-text").firstChild;

if (!CSS.highlights) {
  textNode.textContent =
    "The CSS Custom Highlight API is not supported in this browser!";
}

// Create and register highlights for each color in the rainbow.
const highlights = [];
for (let i = 0; i < 7; i++) {
  // Create a new highlight for this color.
  const colorHighlight = new Highlight();
  highlights.push(colorHighlight);

  // Register this highlight under a custom name.
  CSS.highlights.set(`rainbow-color-${i + 1}`, colorHighlight);
}

// Iterate over the text, character by character.
for (let i = 0; i < textNode.textContent.length; i++) {
  // Create a new range just for this character.
  const range = new Range();
  range.setStart(textNode, i);
  range.setEnd(textNode, i + 1);

  // Add the range to the next available highlight,
  // looping back to the first one once we've reached the 7th.
  highlights[i % 7].add(range);
}
```

#### 结果

{{ EmbedLiveSample("字符高亮") }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
