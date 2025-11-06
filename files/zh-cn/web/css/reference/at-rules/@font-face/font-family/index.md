---
title: font-family
slug: Web/CSS/Reference/At-rules/@font-face/font-family
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`font-family`** CSS 描述符为 {{cssxref("@font-face")}} At 规则中指定的字体设置字体族。

该值用于在使用 [`font-family`](/zh-CN/docs/Web/CSS/Reference/Properties/font-family) 属性对元素进行样式设置时，与特定的 `@font-face` 名称进行匹配。可以使用任何名称，并且该名称会覆盖底层字体数据中指定的任何名称。

## 语法

```css
/* <string> 值 */
font-family: "font family";
font-family: "another font family";

/* <custom-ident> 值 */
font-family: example-font;
```

### 值

- `<family-name>`
  - : 指定字体族的名称。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置字体族

```css
@font-face {
  font-family: "字体族名称";
  src: url("some_font_name.ttf");
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
