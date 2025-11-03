---
title: background-blend-mode
slug: Web/CSS/Reference/Properties/background-blend-mode
---

## 概述

`background-blend-mode` CSS 属性定义该元素的背景图片，以及背景色如何混合。

混合模式应该按{{cssxref("background-image")}} CSS 属性同样的顺序定义。如果混合模式数量与背景图像的数量不相等，它会被截取至相等的数量。

{{cssinfo}}

## 语法

```css
/* 单值 */
background-blend-mode: normal;

/* 双值，一个值对应一个背景 */
background-blend-mode: darken, luminosity;

/* 全局值 */
background-blend-mode: inherit;
background-blend-mode: initial;
background-blend-mode: revert;
background-blend-mode: revert-layer;
background-blend-mode: unset;
```

### 值

- {{cssxref("&lt;blend-mode&gt;")}}
  - : 一个定义混合的模式，可以有多个值，用逗号间隔。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

```html hidden
<div id="div"></div>
<select id="select">
  <option>normal</option>
  <option>multiply</option>
  <option selected>screen</option>
  <option>overlay</option>
  <option>darken</option>
  <option>lighten</option>
  <option>color-dodge</option>
  <option>color-burn</option>
  <option>hard-light</option>
  <option>soft-light</option>
  <option>difference</option>
  <option>exclusion</option>
  <option>hue</option>
  <option>saturation</option>
  <option>color</option>
  <option>luminosity</option>
</select>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: screen;
}
```

```js
document.getElementById("select").onchange = function (event) {
  document.getElementById("div").style.backgroundBlendMode =
    document.getElementById("select").selectedOptions[0].innerHTML;
};
console.log(document.getElementById("div"));
```

{{ EmbedLiveSample('示例', "330", "330") }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("&lt;blend-mode&gt;")}}
- {{cssxref("mix-blend-mode")}}
