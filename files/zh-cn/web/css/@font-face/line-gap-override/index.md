---
title: line-gap-override
slug: Web/CSS/@font-face/line-gap-override
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

{{cssxref("@font-face")}} 规则的 **`line-gap-override`** 是一个 CSS 描述符，用于定义字体的行间距（line-gap）度量值。行间距度量值是字体推荐的行间距，或称为外部行距（external leading）。

## 语法

```css
line-gap-override: normal;
line-gap-override: 90%;
```

### 值

- `normal`
  - : 默认值。使用该值时，度量数值将从字体文件中获取。
- `<percentage>`
  - : {{cssxref("&lt;percentage&gt;")}} 值。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 覆盖后备字体的度量值

`line-gap-override` 属性在覆盖后备字体的度量值时非常有用，可以让其更好地匹配主要 Web 字体的度量值。

```css
@font-face {
  font-family: web-font;
  src: url("https://example.com/font.woff");
}

@font-face {
  font-family: local-font;
  src: local("Local Font");
  line-gap-override: 125%;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("@font-face/descent-override", "descent-override")}}
- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/size-adjust", "size-adjust")}}
- {{cssxref("@font-face/unicode-range", "unicode-range")}} 描述符
