---
title: CSS 객체 모델 (CSSOM)
slug: Web/API/CSS_Object_Model
---

{{DefaultAPISidebar('CSSOM')}}

**CSS Object Model**은 JavaScript에서 CSS를 조작할 수 있는 API 집합입니다. HTML 대신 CSS가 대상인 DOM이라고 생각할 수 있으며, 사용자가 CSS 스타일을 동적으로 읽고 수정할 수 있는 방법입니다.

## 참고서

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

여러 다른 인터페이스도 CSSOM-related 규격에 의해 확장됩니다 : {{domxref("Document")}}, {{domxref("Window")}}, {{domxref("Element")}}, {{domxref("HTMLElement")}}, {{domxref("HTMLImageElement")}}, {{domxref("Range")}}, {{domxref("MouseEvent")}}, and {{domxref("SVGElement")}}.

### CSS 자료형 객체 모델 {{experimental_inline}}

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

## 자습서

- [화면 방향 관리](/ko/docs/WebAPI/Managing_screen_orientation)

## 명세서

{{Specifications}}

## 같이 보기

- [문서 객체 모델 (DOM)](/ko/docs/Web/API/Document_Object_Model)
- [CSS Houdini](/ko/docs/Web/Houdini/)
