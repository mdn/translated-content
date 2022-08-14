---
title: CSS 객체 모델 (CSSOM)
slug: Web/API/CSS_Object_Model
tags:
  - API
  - CSSOM
  - Overview
  - Reference
translation_of: Web/API/CSS_Object_Model
---
<p>{{DefaultAPISidebar('CSSOM')}}</p>

<p><strong>CSS Object Model</strong>은 JavaScript에서 CSS를 조작할 수 있는 API 집합입니다. HTML 대신 CSS가 대상인 DOM이라고 생각할 수 있으며, 사용자가 CSS 스타일을 동적으로 읽고 수정할 수 있는 방법입니다.</p>

<h2 id="참고서">참고서</h2>

<div class="index">
<ul>
 <li>{{DOMxRef("AnimationEvent")}}</li>
 <li>{{DOMxRef("CaretPosition")}}</li>
 <li>{{DOMxRef("CSS")}}</li>
 <li>{{DOMxRef("CSSCharsetRule")}}</li>
 <li>{{DOMxRef("CSSConditionRule")}}</li>
 <li>{{DOMxRef("CSSCounterStyleRule")}}</li>
 <li>{{DOMxRef("CSSFontFaceRule")}}</li>
 <li>{{DOMxRef("CSSFontFeatureValuesMap")}}</li>
 <li>{{DOMxRef("CSSFontFeatureValuesRule")}}</li>
 <li>{{DOMxRef("CSSGroupingRule")}}</li>
 <li>{{DOMxRef("CSSImportRule")}}</li>
 <li>{{DOMxRef("CSSKeyframeRule")}}</li>
 <li>{{DOMxRef("CSSKeyframesRule")}}</li>
 <li>{{DOMxRef("CSSMarginRule")}}</li>
 <li>{{DOMxRef("CSSMediaRule")}}</li>
 <li>{{DOMxRef("CSSNamespaceRule")}}</li>
 <li>{{DOMxRef("CSSPageRule")}}</li>
 <li>{{DOMxRef("CSSRule")}}</li>
 <li>{{DOMxRef("CSSRuleList")}}</li>
 <li>{{DOMxRef("CSSStyleDeclaration")}}</li>
 <li>{{DOMxRef("CSSStyleSheet")}}</li>
 <li>{{DOMxRef("CSSStyleRule")}}</li>
 <li>{{DOMxRef("CSSSupportsRule")}}</li>
 <li>{{DOMxRef("CSSVariablesMap")}}</li>
 <li>{{DOMxRef("CSSViewportRule")}}</li>
 <li>{{DOMxRef("ElementCSSInlineStyle")}}</li>
 <li>{{DOMxRef("FontFace")}}</li>
 <li>{{DOMxRef("FontFaceSet")}}</li>
 <li>{{DOMxRef("FontFaceSetLoadEvent")}}</li>
 <li>{{DOMxRef("GeometryUtils")}}</li>
 <li>{{DOMxRef("GetStyleUtils")}}</li>
 <li>{{DOMxRef("LinkStyle")}}</li>
 <li>{{DOMxRef("MediaList")}}</li>
 <li>{{DOMxRef("MediaQueryList")}}</li>
 <li>{{DOMxRef("MediaQueryListEvent")}}</li>
 <li>{{DOMxRef("MediaQueryListListener")}}</li>
 <li>{{DOMxRef("Screen")}}</li>
 <li>{{DOMxRef("StyleSheet")}}</li>
 <li>{{DOMxRef("StyleSheetList")}}</li>
 <li>{{DOMxRef("TransitionEvent")}}</li>
</ul>
</div>

<p>여러 다른 인터페이스도 CSSOM-related 규격에 의해 확장됩니다 : {{domxref("Document")}}, {{domxref("Window")}}, {{domxref("Element")}}, {{domxref("HTMLElement")}}, {{domxref("HTMLImageElement")}}, {{domxref("Range")}}, {{domxref("MouseEvent")}}, and {{domxref("SVGElement")}}.</p>

<h3 id="CSS_Typed_Object_Model" name="CSS_Typed_Object_Model">CSS 자료형 객체 모델 {{experimental_inline}}</h3>

<p>{{SeeCompatTable}}</p>

<div class="index">
<ul>
 <li>{{DOMxRef("CSSImageValue")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSKeywordValue")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSMathInvert")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSMathMax")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSMathMin")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSMathNegate")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSMathProduct")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSMathSum")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSMathValue")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSMatrixComponent")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSNumericArray")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSNumericValue")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSPerspective")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSPositionValue")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSRotate")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSScale")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSSkew")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSSkewX")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSSkewY")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSStyleValue")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSTransformComponent")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSTransformValue")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSTranslate")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSUnitValue")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSUnparsedValue")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSVariableReferenceValue")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("StylePropertyMap")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("StylePropertyMapReadOnly")}} {{Experimental_Inline}}</li>
</ul>
</div>

<h2 id="자습서">자습서</h2>

<ul>
 <li><a href="/ko/docs/WebAPI/Managing_screen_orientation">화면 방향 관리</a></li>
</ul>

<h2 id="명세서">명세서</h2>

{{Specifications}}

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li><a href="/ko/docs/Web/API/Document_Object_Model">문서 객체 모델 (DOM)</a></li>
 <li><a href="/ko/docs/Web/Houdini/">CSS Houdini</a></li>
</ul>
