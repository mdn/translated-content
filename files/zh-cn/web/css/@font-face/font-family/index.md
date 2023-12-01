---
title: font-family
slug: Web/CSS/@font-face/font-family
---

{{CSSRef}}

**`font-family`** 属性允许我们为页面上的字体指定一个由 {{cssxref("@font-face")}} 规则定义的字体族

The **`font-family`** CSS descriptor allows authors to specify the font family for the font specified in an {{cssxref("@font-face")}} rule.

{{cssinfo}}

## 语法

```css
/* <string> values */
font-family: "font family";
font-family: "another font family";

/* <IDENT> value */
font-family: examplefont;
```

### 取值

- `<family-name>`
  - : 指定字体族名称

### Formal syntax

{{csssyntax}}

## 示例

```css
@font-face {
  font-family: examplefont;
  src: url("examplefont.ttf");
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
