---
title: CSSFontFaceRule：style 属性
slug: Web/API/CSSFontFaceRule/style
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("CSSOM")}}

{{domxref("CSSFontFaceRule")}} 接口的只读属性 **`style`** 返回 {{cssxref("@font-face")}} [At 规则](/zh-CN/docs/Web/CSS/Guides/Syntax/At-rules)的样式信息。这些信息以 {{domxref("CSSStyleDeclaration")}} 对象的形式提供。

## 值

{{domxref("CSSStyleDeclaration")}} 对象。

## 示例

以下示例使用了 {{cssxref("@font-face")}} 页面中的示例 CSS。返回的第一个 {{domxref("CSSRule")}} 将是一个 `CSSFontFaceRule`。`style` 属性返回一个 {{domxref("CSSStyleDeclaration")}}，其中包含 `fontFamily`、`fontWeight` 和 `src` 属性，这些属性包含规则中的信息。

```css
@font-face {
  font-family: MyHelvetica;
  src:
    local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
    url(MgOpenModernaBold.ttf);
  font-weight: bold;
}
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].style); // CSSStyleDeclaration
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
