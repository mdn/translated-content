---
title: font-kerning
slug: Web/CSS/font-kerning
---

{{CSSRef}}

**`font-kerning`** CSS 属性设置是否使用字体中储存的字距信息。

```css
/* Keyword values */
font-kerning: auto;
font-kerning: normal;
font-kerning: none;

/* Global values */
font-kerning: inherit;
font-kerning: initial;
font-kerning: unset;
```

_Kerning_（字距）定义了字母的分布情况。对于良好地规定了字距的字体，字距特性使得字母分布更为统一，阅读体验更佳。如下图所示，左侧的示例没有应用字距，而右侧使用了：

![Example of font-kerning](font-kerning.png)

{{cssinfo}}

## 语法

`font-kerning` 属性通过以下的关键字进行指定。

### 值

- `auto`
  - : 浏览器来决定是否使用字体字距。比如，一些浏览器会在小字体的情况下禁用字距，因为这会使得文本可读性下降。
- `normal`
  - : 必须应用字体中的字距信息。
- `none`
  - : 禁用字体中的字距信息。

### 形式语法

{{csssyntax}}

## 示例

### HTML

```html
<div id="kern"></div>
<div id="nokern"></div>
<textarea id="input">AV T. ij</textarea>
```

### CSS

```css
div {
  font-size: 2rem;
  font-family: serif;
}

#nokern {
  font-kerning: none;
}

#kern {
  font-kerning: normal;
}
```

### JavaScript

```js
var input = document.getElementById("input"),
  kern = document.getElementById("kern"),
  nokern = document.getElementById("nokern");

input.addEventListener("keyup", function () {
  kern.textContent = input.value; /* Update content */
  nokern.textContent = input.value;
});

kern.textContent = input.value; /* Initialize content */
nokern.textContent = input.value;
```

{{ EmbedLiveSample('示例') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("font-variant")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-synthesis")}}, {{cssxref("letter-spacing")}}
