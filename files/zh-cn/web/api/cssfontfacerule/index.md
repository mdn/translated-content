---
title: CSSFontFaceRule
slug: Web/API/CSSFontFaceRule
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("CSSOM")}}

**`CSSFontFaceRule`** 接口表示 {{cssxref("@font-face")}} [at 规则](/zh-CN/docs/Web/CSS/Guides/Syntax/At-rules)。

{{InheritanceDiagram}}

## 实例属性

_继承其祖先 {{domxref("CSSRule")}} 的属性。_

- {{domxref("CSSFontFaceRule.style")}} {{ReadOnlyInline}}
  - : 返回一个 {{domxref("CSSStyleDeclaration")}}。

## 实例方法

_继承其祖先 {{domxref("CSSRule")}} 的方法。_

## 示例

此示例使用 {{cssxref("@font-face")}} 页面上的示例 CSS。返回的第一个 {{domxref("CSSRule")}} 将是一个 `CSSFontFaceRule`。

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
console.log(myRules[0]); // CSSFontFaceRule
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
