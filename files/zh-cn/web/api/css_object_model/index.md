---
title: CSS 对象模型
slug: Web/API/CSS_Object_Model
---

{{DefaultAPISidebar("CSSOM")}}

**CSS 对象模型**是一组允许用 JavaScript 操纵 CSS 的 API。它很像 DOM，但针对的是 CSS 而不是 HTML。它允许用户动态地读取和修改 CSS 样式。

CSS 的值是没有类型的，也就是使用 {{JSxRef("String")}} 对象来表示。

## 参考

- {{DOMxRef("AnimationEvent")}}
- {{DOMxRef("CaretPosition")}}
- {{DOMxRef("CSS")}}
- {{DOMxRef("CSSCharsetRule")}}
- {{DOMxRef("CSSConditionRule")}}
- {{DOMxRef("CSSCounterStyleRule")}}
- {{DOMxRef("CSSFontFaceRule")}}
- {{DOMxRef("CSSFontFeatureValuesMap")}}
- {{DOMxRef("CSSFontFeatureValuesRule")}}
- {{DOMxRef("CSSGroupingRule")}}
- {{DOMxRef("CSSImportRule")}}
- {{DOMxRef("CSSKeyframeRule")}}
- {{DOMxRef("CSSKeyframesRule")}}
- {{DOMxRef("CSSMarginRule")}}
- {{DOMxRef("CSSMediaRule")}}
- {{DOMxRef("CSSNamespaceRule")}}
- {{DOMxRef("CSSPageRule")}}
- {{DOMxRef("CSSRule")}}
- {{DOMxRef("CSSRuleList")}}
- {{DOMxRef("CSSStyleDeclaration")}}
- {{DOMxRef("CSSStyleSheet")}}
- {{DOMxRef("CSSStyleRule")}}
- {{DOMxRef("CSSSupportsRule")}}
- {{DOMxRef("CSSVariablesMap")}}
- {{DOMxRef("CSSViewportRule")}}
- {{DOMxRef("FontFace")}}
- {{DOMxRef("FontFaceSet")}}
- {{DOMxRef("FontFaceSetLoadEvent")}}
- {{DOMxRef("GetStyleUtils")}}
- {{DOMxRef("MediaList")}}
- {{DOMxRef("MediaQueryList")}}
- {{DOMxRef("MediaQueryListEvent")}}
- {{DOMxRef("Screen")}}
- {{DOMxRef("StyleSheet")}}
- {{DOMxRef("StyleSheetList")}}
- {{DOMxRef("TransitionEvent")}}

CSSOM 相关规范也扩展了其他几个接口：{{DOMxRef("Document")}}、{{DOMxRef("Window")}}、{{DOMxRef("Element")}}、{{DOMxRef("HTMLElement")}}、{{DOMxRef("HTMLImageElement")}}、{{DOMxRef("Range")}}、{{DOMxRef("MouseEvent")}} 和 {{DOMxRef("SVGElement")}}。

### CSS 类型化对象模型 {{Experimental_Inline}}

{{SeeCompatTable}}

- {{DOMxRef("CSSImageValue")}} {{Experimental_Inline}}
- {{DOMxRef("CSSKeywordValue")}} {{Experimental_Inline}}
- {{DOMxRef("CSSMathInvert")}} {{Experimental_Inline}}
- {{DOMxRef("CSSMathMax")}} {{Experimental_Inline}}
- {{DOMxRef("CSSMathMin")}} {{Experimental_Inline}}
- {{DOMxRef("CSSMathNegate")}} {{Experimental_Inline}}
- {{DOMxRef("CSSMathProduct")}} {{Experimental_Inline}}
- {{DOMxRef("CSSMathSum")}} {{Experimental_Inline}}
- {{DOMxRef("CSSMathValue")}} {{Experimental_Inline}}
- {{DOMxRef("CSSMatrixComponent")}} {{Experimental_Inline}}
- {{DOMxRef("CSSNumericArray")}} {{Experimental_Inline}}
- {{DOMxRef("CSSNumericValue")}} {{Experimental_Inline}}
- {{DOMxRef("CSSPerspective")}} {{Experimental_Inline}}
- {{DOMxRef("CSSPositionValue")}} {{Experimental_Inline}}
- {{DOMxRef("CSSRotate")}} {{Experimental_Inline}}
- {{DOMxRef("CSSScale")}} {{Experimental_Inline}}
- {{DOMxRef("CSSSkew")}} {{Experimental_Inline}}
- {{DOMxRef("CSSSkewX")}} {{Experimental_Inline}}
- {{DOMxRef("CSSSkewY")}} {{Experimental_Inline}}
- {{DOMxRef("CSSStyleValue")}} {{Experimental_Inline}}
- {{DOMxRef("CSSTransformComponent")}} {{Experimental_Inline}}
- {{DOMxRef("CSSTransformValue")}} {{Experimental_Inline}}
- {{DOMxRef("CSSTranslate")}} {{Experimental_Inline}}
- {{DOMxRef("CSSUnitValue")}} {{Experimental_Inline}}
- {{DOMxRef("CSSUnparsedValue")}} {{Experimental_Inline}}
- {{DOMxRef("CSSVariableReferenceValue")}} {{Experimental_Inline}}
- {{DOMxRef("StylePropertyMap")}} {{Experimental_Inline}}
- {{DOMxRef("StylePropertyMapReadOnly")}} {{Experimental_Inline}}

### 废弃的 CSSOM 接口 {{deprecated_inline}}

{{deprecated_header}}

- {{DOMxRef("CSSPrimitiveValue")}} {{deprecated_inline}}
- {{DOMxRef("CSSValue")}} {{deprecated_inline}}
- {{DOMxRef("CSSValueList")}} {{deprecated_inline}}

## 教程

- [决定元素的维度](/zh-CN/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)（这篇文档可能有点过时，因为它是在 DHTML/Ajax 时代写的）。
- [管理屏幕方向](/zh-CN/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)

## 规范

{{Specifications}}

## 浏览器兼容性

所有这些功能都是多年来一点一点地添加到不同的浏览器中的：这是一个相当复杂的过程，不能用一个简单的表格来概括。请参考具体的接口，了解其可用性。

## 参见

- [文档对象模型（DOM）](/zh-CN/docs/Web/API/Document_Object_Model)
- [Houdini](/zh-CN/docs/Web/Guide/Houdini)
