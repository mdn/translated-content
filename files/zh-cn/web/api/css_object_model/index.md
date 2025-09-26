---
title: CSS 对象模型（CSSOM）
slug: Web/API/CSS_Object_Model
l10n:
  sourceCommit: 23d4eb925c7394922e271e733421716e4055b095
---

{{DefaultAPISidebar("CSSOM")}}

**CSS 对象模型**是一组允许用 JavaScript 操纵 CSS 的 API。它很像 DOM，但针对的是 CSS 而不是 HTML。它允许用户动态地读取和修改 CSS 样式。

CSS 的值是没有类型的，也就是使用 {{JSxRef("String")}} 对象来表示。

## 参考

- {{DOMxRef("AnimationEvent")}}
- {{DOMxRef("CaretPosition")}}
- {{DOMxRef("CSS")}}
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
- {{DOMxRef("FontFace")}}
- {{DOMxRef("FontFaceSet")}}
- {{DOMxRef("FontFaceSetLoadEvent")}}
- {{DOMxRef("MediaList")}}
- {{DOMxRef("MediaQueryList")}}
- {{DOMxRef("MediaQueryListEvent")}}
- {{DOMxRef("Screen")}}
- {{DOMxRef("StyleSheet")}}
- {{DOMxRef("StyleSheetList")}}
- {{DOMxRef("TransitionEvent")}}

CSSOM 相关规范也扩展了其他几个接口：{{DOMxRef("Document")}}、{{DOMxRef("Window")}}、{{DOMxRef("Element")}}、{{DOMxRef("HTMLElement")}}、{{DOMxRef("HTMLImageElement")}}、{{DOMxRef("Range")}}、{{DOMxRef("MouseEvent")}} 和 {{DOMxRef("SVGElement")}}。

### CSS 类型对象模型

- {{DOMxRef("CSSImageValue")}}
- {{DOMxRef("CSSKeywordValue")}}
- {{DOMxRef("CSSMathInvert")}}
- {{DOMxRef("CSSMathMax")}}
- {{DOMxRef("CSSMathMin")}}
- {{DOMxRef("CSSMathNegate")}}
- {{DOMxRef("CSSMathProduct")}}
- {{DOMxRef("CSSMathSum")}}
- {{DOMxRef("CSSMathValue")}}
- {{DOMxRef("CSSMatrixComponent")}}
- {{DOMxRef("CSSNumericArray")}}
- {{DOMxRef("CSSNumericValue")}}
- {{DOMxRef("CSSPerspective")}}
- {{DOMxRef("CSSPositionValue")}}
- {{DOMxRef("CSSRotate")}}
- {{DOMxRef("CSSScale")}}
- {{DOMxRef("CSSSkew")}}
- {{DOMxRef("CSSSkewX")}}
- {{DOMxRef("CSSSkewY")}}
- {{DOMxRef("CSSStyleValue")}}
- {{DOMxRef("CSSTransformComponent")}}
- {{DOMxRef("CSSTransformValue")}}
- {{DOMxRef("CSSTranslate")}}
- {{DOMxRef("CSSUnitValue")}}
- {{DOMxRef("CSSUnparsedValue")}}
- {{DOMxRef("CSSVariableReferenceValue")}}
- {{DOMxRef("StylePropertyMap")}}
- {{DOMxRef("StylePropertyMapReadOnly")}}

### 废弃的 CSSOM 接口 {{deprecated_inline}}

{{deprecated_header}}

- {{DOMxRef("CSSPrimitiveValue")}} {{deprecated_inline}}
- {{DOMxRef("CSSValue")}} {{deprecated_inline}}
- {{DOMxRef("CSSValueList")}} {{deprecated_inline}}

## 教程

- [确定元素的尺寸](/zh-CN/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- [管理屏幕方向](/zh-CN/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)

## 规范

{{Specifications}}

## 浏览器兼容性

所有这些功能都是多年来一点一点地添加到不同的浏览器中的：这是一个相当复杂的过程，不能用一个简单的表格来概括。请参考具体的接口以了解其可用性。

## 参见

- [文档对象模型（DOM）](/zh-CN/docs/Web/API/Document_Object_Model)
- [Houdini API](/zh-CN/docs/Web/API/Houdini_APIs)
