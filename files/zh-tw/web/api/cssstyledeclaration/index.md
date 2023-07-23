---
title: CSSStyleDeclaration
slug: Web/API/CSSStyleDeclaration
---

{{ APIRef("CSSOM") }}

## 概要

`CSSStyleDeclaration` 表示了一個 CSS 屬性名值對（property-value pairs）的集合。它被用於幾個 API 當中：

- {{domxref("HTMLElement.style")}} - to manipulate the style of a single element (\<elem style="...">);
- (TODO: reword) is an interface to the [declaration block](http://www.w3.org/TR/1998/REC-CSS2-19980512/syndata.html#block) returned by the [`style`](/zh-TW/DOM/cssRule.style) property of a [`cssRule`](/zh-TW/DOM/cssRule) in a [stylesheet](/zh-TW/DOM/stylesheet), when the rule is a [CSSStyleRule](/zh-TW/DOM/cssRule#CSSStyleRule).
- `CSSStyleDeclaration` is also a **read-only** interface to the result of [window.getComputedStyle](/zh-TW/DOM/window.getComputedStyle)().

## 屬性

- {{domxref("CSSStyleDeclaration.cssText")}}
  - : Textual representation of the declaration block. Setting this attribute changes the style.
- {{domxref("CSSStyleDeclaration.length")}} {{readonlyInline}}
  - : The number of properties. See the {{domxref("CSSStyleDeclaration.item", 'item()')}} method below.
- {{domxref("CSSStyleDeclaration.parentRule")}} {{readonlyInline}}
  - : The containing {{domxref("CSSRule")}}.

## 方法

- {{domxref("CSSStyleDeclaration.getPropertyPriority()")}}
  - : Returns the optional priority, "important".
- {{domxref("CSSStyleDeclaration.getPropertyValue()")}}
  - : Returns the property value given a property name.
- {{domxref("CSSStyleDeclaration.item()")}}
  - : Returns a property name.
- {{domxref("CSSStyleDeclaration.removeProperty()")}}
  - : Removes a property from the CSS declaration block.
- {{domxref("CSSStyleDeclaration.setProperty()")}}
  - : Modifies an existing CSS property or creates a new CSS property in the declaration block/.
- {{domxref("CSSStyleDeclaration.getPropertyCSSValue()")}} {{Deprecated_Inline}}
  - : Only supported via getComputedStyle in Firefox. Returns the property value as a {{ domxref("CSSPrimitiveValue") }} or `null` for [shorthand properties](/zh-TW/CSS/Shorthand_properties).

## 範例

```js
var styleObj = document.styleSheets[0].cssRules[0].style;
console.log(styleObj.cssText);

for (var i = styleObj.length; i--; ) {
  var nameString = styleObj[i];
  styleObj.removeProperty(nameString);
}

console.log(styleObj.cssText);
```

## 備註

The declaration block is that part of the style rule that appears within the braces and that actually provides the style definitions (for the selector, the part that comes before the braces).

## 參見

- [DOM CSS Properties](/zh-TW/docs/Web/CSS/CSS_Properties_Reference)

## 規範

{{Specifications}}
