---
title: ::highlight()
slug: Web/CSS/Reference/Selectors/::highlight
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

**`::highlight()`** CSS [伪元素](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-elements)用于设置自定义高亮样式。

自定义高亮是一组 {{domxref("Range")}} 对象，并且通过 {{domxref("HighlightRegistry")}} 在网页上注册。

## 允许的属性值

只有特定的 CSS 属性可以与 `::highlight()` 一起使用：

- {{CSSxRef("color")}}
- {{CSSxRef("background-color")}}
- {{CSSxRef("text-decoration")}} 及其相关属性
- {{CSSxRef("text-shadow")}}
- {{CSSxRef("-webkit-text-stroke-color")}}、{{CSSxRef("-webkit-text-fill-color")}} 和 {{CSSxRef("-webkit-text-stroke-width")}}

特别地，{{CSSxRef("background-image")}} 将被忽略。

## 语法

```css-nolint
::highlight(custom-highlight-name)
```

## 示例

### 高亮字符

#### HTML

```html
<p id="rainbow-text">CSS 自定义高亮 API——彩虹色</p>
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
  textNode.textContent = "此浏览器不支持 CSS 自定义高亮 API！";
}

// 创建并注册彩虹色中每种颜色的高亮。
const highlights = [];
for (let i = 0; i < 7; i++) {
  // 为该颜色创建新的高亮。
  const colorHighlight = new Highlight();
  highlights.push(colorHighlight);

  // 以自定义名称注册此高亮。
  CSS.highlights.set(`rainbow-color-${i + 1}`, colorHighlight);
}

// 逐个字符迭代文本。
for (let i = 0; i < textNode.textContent.length; i++) {
  // 专门为此字符创建一个新范围。
  const range = new Range();
  range.setStart(textNode, i);
  range.setEnd(textNode, i + 1);

  // 将该范围添加到下一个可用的高亮中，当达到第 7 个高亮时，循环回到第一个高亮。
  highlights[i % 7].add(range);
}
```

#### 结果

{{ EmbedLiveSample("高亮字符") }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
