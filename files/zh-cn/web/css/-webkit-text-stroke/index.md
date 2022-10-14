---
title: '-webkit-text-stroke'
slug: Web/CSS/-webkit-text-stroke
---

## 摘要

**`-webkit-text-stroke`** [CSS](/zh-CN/docs/Web/CSS)属性为文本字符指定了[宽](/zh-CN/docs/Web/CSS/length) 和 [颜色](/zh-CN/docs/Web/CSS/color_value) . 它是{{cssxref("-webkit-text-stroke-width")}} 和{{cssxref("-webkit-text-stroke-color")}}属性的缩写。

## 语法

```css
/* 宽度和颜色属性 */
-webkit-text-stroke: 4px navy;

/* 全局属性 */
-webkit-text-stroke: inherit;
-webkit-text-stroke: initial;
-webkit-text-stroke: unset;
```

### 值

- `<length>`
  - : 文本宽。
- `<color>`
  - : 文本颜色。

### 常规用法

```plain
/* 设置宽度和颜色 */
-webkit-text-stroke: <length> <color>;

/* 默认设置 */
-webkit-text-stroke: inherit/initial/unset;
```

## 用例

### HTML

```html
<p id="example">The stroke of this text is red.</p>
```

### CSS

```css
#example {
  font-size: 3em;
  margin: 0;
  -webkit-text-stroke: 2px red;
}
```

## 规格

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考文档

- [Surfin' Safari blog post announcing this feature](https://www.webkit.org/blog/85/introducing-text-stroke/)
- [CSS-Tricks article explaining this feature](https://css-tricks.com/adding-stroke-to-web-text/)
- {{cssxref("-webkit-text-stroke-width")}}
- {{cssxref("-webkit-text-stroke-color")}}
- {{cssxref("-webkit-text-fill-color")}}
