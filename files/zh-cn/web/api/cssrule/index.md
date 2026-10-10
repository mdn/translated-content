---
title: CSSRule
slug: Web/API/CSSRule
l10n:
  sourceCommit: c00944e9622f0796758877623ee33283c68494d7
---

{{APIRef("CSSOM")}}

**`CSSRule`** 接口表示一条 CSS 规则。有若干种规则类型会从 `CSSRule` 继承属性。

- {{DOMXRef("CSSGroupingRule")}}
- {{DOMXRef("CSSStyleRule")}}
- {{DOMXRef("CSSImportRule")}}
- {{DOMXRef("CSSMediaRule")}}
- {{DOMXRef("CSSFontFaceRule")}}
- {{DOMxRef("CSSFunctionDeclarations")}}
- {{DOMXRef("CSSPageRule")}}
- {{DOMXRef("CSSNamespaceRule")}}
- {{DOMXRef("CSSKeyframesRule")}}
- {{DOMXRef("CSSKeyframeRule")}}
- {{DOMXRef("CSSCounterStyleRule")}}
- {{DOMXRef("CSSSupportsRule")}}
- {{DOMXRef("CSSFontFeatureValuesRule")}}
- {{DOMXRef("CSSFontPaletteValuesRule")}}
- {{DOMXRef("CSSLayerBlockRule")}}
- {{DOMXRef("CSSLayerStatementRule")}}
- {{DOMXRef("CSSPropertyRule")}}
- {{DOMXRef("CSSNestedDeclarations")}}
- {{DOMXRef("CSSViewTransitionRule")}}

## 实例属性

`CSSRule` 接口规定所有规则共有的属性，而特定规则类型独有的属性则在各规则类型更专门的接口中规定。

- {{domxref("CSSRule.cssText")}}
  - : 表示该规则的文本形式，例如 `"h1,h2 { font-size: 16pt }"` 或 `"@import 'url'"`。要访问或修改规则的各部分（例如示例中“font-size”的值），请使用该规则类型专用接口上的属性（见上文）。
- {{domxref("CSSRule.parentRule")}} {{ReadOnlyInline}}
  - : 返回包含此规则的规则，否则为 `null`。例如，如果此规则是 {{cssxref("@media")}} 块内的样式规则，则父规则为该 {{domxref("CSSMediaRule")}}。
- {{domxref("CSSRule.parentStyleSheet")}} {{ReadOnlyInline}}
  - : 返回包含此规则的样式表所对应的 {{domxref("CSSStyleSheet")}} 对象。
- {{domxref("CSSRule.type")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : 返回类型常量之一，以确定所表示的规则类型。

## 示例

可通过查看 {{domxref("CSSStyleSheet")}} 的 `cssRules` 列表来获取对 `CSSRule` 的引用。

```js
let myRules = document.styleSheets[0].cssRules; // 返回 CSSRuleList
console.log(myRules);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [关于使用动态样式的信息](/zh-CN/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
