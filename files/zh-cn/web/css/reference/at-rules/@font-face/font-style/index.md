---
title: font-style
slug: Web/CSS/Reference/At-rules/@font-face/font-style
l10n:
  sourceCommit: 418b3ebf6464716649125199385c39d86c944973
---

**`font-style`** CSS 描述符允许作者为 {{cssxref("@font-face")}} @ 规则中指定的字体指定字体样式。

对于特定字体家族，作者可以下载与同一字体家族的不同风格相对应的各种字体，然后使用 `font-style` 描述符明确指定字体的风格。该 CSS 描述符的值与相应的 {{cssxref("font-style")}} 属性的值相同。

## 语法

```css
font-style: normal;
font-style: italic;
font-style: oblique;
font-style: oblique 30deg;
font-style: oblique 30deg 50deg;
```

### 值

- `normal`
  - : 选择 font-family 的常规版本。
- `italic`
  - : 指定 font-face 为普通字体的斜体版本。
- `oblique`
  - : 指定 font-face 是普通字体的人工倾斜版本。
- 带有角度值 `oblique`
  - : 选择被归类为 `oblique` 的字体，并指定文字倾斜的角度。
- 带有角度范围的 `oblique`
  - : 选择被归类为 `oblique` 的字体，并指定文字倾斜角度的允许范围。请注意，只有当 `font-style` 为 `oblique` 时，才支持范围；对于 `font-style: normal` 或 `italic`，不允许使用第二个值。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 指定斜体字体样式

以 garamond 字体家族为例，在其正常形式下，我们可以得到以下结果：

```css
@font-face {
  font-family: garamond;
  src: url("garamond.ttf");
}
```

![未加额外样式的 Garamond](garamondunstyled.jpg)

该文本的斜体版本使用与无样式版本相同的字形，但它们被人为地倾斜了几度。

![人工倾斜的 Garamond](garamondartificialstyle.jpg)

另一方面，如果存在字体家族的真正斜体版本，我们可以将其包含在 `src` 描述符中，并将字体样式指定为斜体，这样就可以清楚地看到字体是斜体了。真正的斜体使用不同的字形，与正体有些不同，具有一些独特的特征，通常具有圆润的书法气质。这些字体是由字体设计师专门设计的，并**不是**人为倾斜的。

```css
@font-face {
  font-family: garamond;
  src: url("garamond-italic.ttf");
  font-style: italic;
}
```

![斜体 Garamond](garamonditalic.jpg)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
