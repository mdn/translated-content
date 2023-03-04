---
title: "-webkit-text-stroke"
slug: Web/CSS/-webkit-text-stroke
---

{{CSSRef}}

**`-webkit-text-stroke`** [CSS](/zh-CN/docs/Web/CSS) 属性为文本字符指定了[宽](/zh-CN/docs/Web/CSS/length)和[颜色](/zh-CN/docs/Web/CSS/color_value)。它是 {{cssxref("-webkit-text-stroke-width")}} 和 {{cssxref("-webkit-text-stroke-color")}} 属性的缩写。

## 语法

```css
/* 宽度和颜色属性 */
-webkit-text-stroke: 4px navy;
text-stroke: 4px navy;

/* 全局属性 */
-webkit-text-stroke: inherit;
-webkit-text-stroke: initial;
-webkit-text-stroke: unset;
text-stroke: inherit;
text-stroke: initial;
text-stroke: unset;
```

## 复合属性

该属性是以下 CSS 属性的简写：

- {{cssxref("-webkit-text-stroke-color")}}
- {{cssxref("-webkit-text-stroke-width")}}

## 语法

### 值

- {{cssxref("&lt;length&gt;")}}
  - : 文本宽。
- {{cssxref("&lt;color&gt;")}}
  - : 文本颜色。

## 形式定义

{{CSSInfo}}

## 形式语法

{{csssyntax}}

## 示例

### 添加红色文字描边

#### HTML

```html
<p id="example">The stroke of this text is red.</p>
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

{{EmbedLiveSample("添加红色文字描边", 600, 60)}}

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
