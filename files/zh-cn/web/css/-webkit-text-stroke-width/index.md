---
title: -webkit-text-stroke-width
slug: Web/CSS/-webkit-text-stroke-width
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`-webkit-text-stroke-width`** 指定了文本的笔触宽度。

## 语法

```css
/* 关键词值 */
-webkit-text-stroke-width: thin;
-webkit-text-stroke-width: medium;
-webkit-text-stroke-width: thick;

/* 长度值 */
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

### 取值

- `<line-width>`
  - : 笔触宽度。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

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

- [宣布此特性的 Safari 博客文章](https://webkit.org/blog/85/introducing-text-stroke/)
- [解释此特性的 CSS-Tricks 文章](https://css-tricks.com/adding-stroke-to-web-text/)
- {{CSSXref("-webkit-text-stroke-color")}}
- {{CSSXref("-webkit-text-stroke")}}
- {{CSSXref("-webkit-text-fill-color")}}
