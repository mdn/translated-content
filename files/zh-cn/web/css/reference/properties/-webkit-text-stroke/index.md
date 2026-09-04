---
title: -webkit-text-stroke
slug: Web/CSS/Reference/Properties/-webkit-text-stroke
---

[CSS](/zh-CN/docs/Web/CSS) 属性 **`-webkit-text-stroke`** 指定了文本字符的笔触[宽度](/zh-CN/docs/Web/CSS/Reference/Values/length)和笔触[颜色](/zh-CN/docs/Web/CSS/Reference/Values/color_value)。此属性为全称属性 {{CSSXref("-webkit-text-stroke-width")}} 和 {{CSSXref("-webkit-text-stroke-color")}} 的简写属性。

```css
/* 宽度和颜色值 */
-webkit-text-stroke: 4px navy;
text-stroke: 4px navy;

/* 全局值 */
-webkit-text-stroke: inherit;
-webkit-text-stroke: initial;
-webkit-text-stroke: revert;
-webkit-text-stroke: revert-layer;
-webkit-text-stroke: unset;
```

## 属性构成

此属性为下列 CSS 属性的简写属性：

- {{cssxref("-webkit-text-stroke-color")}}
- {{cssxref("-webkit-text-stroke-width")}}

## 语法

### 取值

- {{cssxref("&lt;length&gt;")}}
  - : 笔触宽度。
- {{cssxref("&lt;color&gt;")}}
  - : 笔触颜色。

## 形式定义

{{CSSInfo}}

## 形式语法

{{csssyntax}}

## 示例

### 添加红色文本笔触

#### HTML

```html
<p id="example">此文本的笔触为红色的。</p>
```

#### CSS

```css
#example {
  font-size: 3em;
  margin: 0;
  -webkit-text-stroke: 2px red;
}
```

#### 结果

{{EmbedLiveSample("添加红色文本笔触", 600, 60)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Surfin 的 Safari 博客文章宣布了此特性](https://www.webkit.org/blog/85/introducing-text-stroke/)
- [解释该特性的 CSS-Tricks 文章](https://css-tricks.com/adding-stroke-to-web-text/)
- {{cssxref("-webkit-text-stroke-width")}}
- {{cssxref("-webkit-text-stroke-color")}}
- {{cssxref("-webkit-text-fill-color")}}
