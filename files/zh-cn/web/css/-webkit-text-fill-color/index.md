---
title: -webkit-text-fill-color
slug: Web/CSS/-webkit-text-fill-color
---

{{CSSRef}}

CSS 属性 **`-webkit-text-fill-color`** 指定了文本字符的填充[颜色](/zh-CN/docs/Web/CSS/color_value)。若未设置此属性，则使用 {{CSSXref("color")}} 属性的值。

## 语法

```css
/* 颜色值 */
-webkit-text-fill-color: red;
-webkit-text-fill-color: #000000;
-webkit-text-fill-color: rgb(100 200 0);

/* 全局值 */
-webkit-text-fill-color: inherit;
-webkit-text-fill-color: initial;
-webkit-text-fill-color: revert;
-webkit-text-fill-color: revert-layer;
-webkit-text-fill-color: unset;
```

### 取值

- `<color>`
  - : 元素的文本内容的前景填充颜色。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

### 改变填充颜色

#### CSS

```css
p {
  margin: 0;
  font-size: 3em;
  -webkit-text-fill-color: green;
}
```

#### HTML

```html
<p>此文本为绿色的。</p>
```

#### 结果

{{EmbedLiveSample("改变填充颜色", "380px", "60px")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [宣布此特性的 Safari 博客文章](https://webkit.org/blog/85/introducing-text-stroke/)
- [解释此特性的 CSS-Tricks 文章](https://css-tricks.com/adding-stroke-to-web-text/)
- {{CSSXref("-webkit-text-stroke-color")}}
- {{CSSXref("-webkit-text-stroke-width")}}
- {{CSSXref("-webkit-text-stroke")}}
