---
title: -webkit-text-stroke-width
slug: Web/CSS/Reference/Properties/-webkit-text-stroke-width
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

**`-webkit-text-stroke-width`** [CSS](/zh-CN/docs/Web/CSS) 属性指定了文本的笔触宽度。

## 语法

```css
/* 关键字值 */
-webkit-text-stroke-width: thin;
-webkit-text-stroke-width: medium;
-webkit-text-stroke-width: thick;

/* <length> 值 */
-webkit-text-stroke-width: 2px;
-webkit-text-stroke-width: 0.1em;
-webkit-text-stroke-width: 1mm;
-webkit-text-stroke-width: 5pt;

/* 全局值 */
-webkit-text-stroke-width: inherit;
-webkit-text-stroke-width: initial;
-webkit-text-stroke-width: revert;
-webkit-text-stroke-width: revert-layer;
-webkit-text-stroke-width: unset;
```

### 值

- `<line-width>`
  - : 笔触宽度。

## 形式定义

{{CSSInfo}}

## 形式语法

{{csssyntax}}

## 示例

### 不同的笔触宽度

#### CSS

```css
p {
  margin: 0;
  font-size: 4em;
  -webkit-text-stroke-color: red;
}

#thin {
  -webkit-text-stroke-width: thin;
}

#medium {
  -webkit-text-stroke-width: 3px;
}

#thick {
  -webkit-text-stroke-width: 1.5mm;
}
```

#### HTML

```html
<p id="thin">细笔触</p>
<p id="medium">中笔触</p>
<p id="thick">粗笔触</p>
```

#### 结果

{{EmbedLiveSample("不同的笔触宽度", "450px", "230px")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [介绍 Text-Stroke](https://webkit.org/blog/85/introducing-text-stroke/)（webkit.org，2006 年）
- [解释此特性的 CSS-Tricks 文章](https://css-tricks.com/adding-stroke-to-web-text/)
- {{cssxref("-webkit-text-stroke-color")}}
- {{cssxref("-webkit-text-stroke")}}
- {{cssxref("-webkit-text-fill-color")}}
