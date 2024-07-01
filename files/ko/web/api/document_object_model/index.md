---
title: 문서 객체 모델(DOM)
slug: Web/API/Document_Object_Model
---

{{DefaultAPISidebar("DOM")}}

**문서 객체 모델**(**DOM**)은 메모리에 웹 페이지 문서 구조를 표현함으로써 스크립트 및 프로그래밍 언어와 페이지를 연결합니다. 이때 스크립트는 주로 JavaScript를 의미하나 HTML, SVG, XML 객체를 문서로 모델링 하는 것은 JavaScript 언어의 일부가 아닙니다.

DOM은 문서를 논리 트리로 표현합니다. 트리의 각 브랜치는 노드에서 끝나며, 각 노드는 객체를 갖습니다. DOM 메서드를 사용하면 프로그래밍적으로 트리에 접근할 수 있습니다. 이를 통해 문서의 구조, 스타일, 콘텐츠를 변경할 수 있습니다.

노드는 이벤트 처리기도 포함할 수 있습니다. 이벤트가 발생한 순간, 해당 이벤트와 연결한 처리기가 발동합니다.

> **참고:** **더 알아보려면:** [DOM 소개](/ko/docs/Web/API/Document_Object_Model/%EC%86%8C%EA%B0%9C) 문서를 방문해보세요.

## DOM 인터페이스

- {{DOMxRef("Attr")}}
- {{DOMxRef("CDATASection")}}
- {{DOMxRef("CharacterData")}}
- {{DOMxRef("Comment")}}
- {{DOMxRef("CustomEvent")}}
- {{DOMxRef("Document")}}
- {{DOMxRef("DocumentFragment")}}
- {{DOMxRef("DocumentType")}}
- {{DOMxRef("DOMError")}} {{Deprecated_Inline}}
- {{DOMxRef("DOMException")}}
- {{DOMxRef("DOMImplementation")}}
- {{DOMxRef("DOMTimeStamp")}}
- {{DOMxRef("DOMStringList")}}
- {{DOMxRef("DOMTokenList")}}
- {{DOMxRef("Element")}}
- {{DOMxRef("Event")}}
- {{DOMxRef("EventTarget")}}
- {{DOMxRef("HTMLCollection")}}
- {{DOMxRef("MutationObserver")}}
- {{DOMxRef("MutationRecord")}}
- {{DOMxRef("NamedNodeMap")}}
- {{DOMxRef("Node")}}
- {{DOMxRef("NodeFilter")}}
- {{DOMxRef("NodeIterator")}}
- {{DOMxRef("NodeList")}}
- {{DOMxRef("ProcessingInstruction")}}
- {{DOMxRef("Range")}}
- {{DOMxRef("Text")}}
- {{DOMxRef("TextDecoder")}} {{Experimental_Inline}}
- {{DOMxRef("TextEncoder")}} {{Experimental_Inline}}
- {{DOMxRef("TimeRanges")}}
- {{DOMxRef("TreeWalker")}}
- {{DOMxRef("URL")}}
- {{DOMxRef("Window")}}
- {{DOMxRef("Worker")}}
- {{DOMxRef("XMLDocument")}} {{Experimental_Inline}}

### 더 이상 사용하지 않는 DOM 인터페이스

문서객체모델 매우 단순하게 변하고 있습니다. 이를 위해 다른 DOM 레벨 3 혹은 이전 사양에 있었던 아래의 인터페이스들을 제거했습니다. 향후에 이 중 일부가 다시 도입될 지는 확실하지 않지만 당분간은 모두 폐기된 것으로 간주하고 사용을 피해야 합니다.

- `DOMConfiguration`
- `DOMErrorHandler`
- `DOMImplementationList`
- `DOMImplementationRegistry`
- `DOMImplementationSource`
- `DOMLocator`
- `DOMObject`
- `DOMSettableTokenList`
- `DOMUserData`
- `ElementTraversal`
- `Entity`
- `EntityReference`
- `NameList`
- `Notation`
- `TypeInfo`
- `UserDataHandler`

## HTML DOM

문서는 다양한 HTML 관련 기능들을 포함하는 HTML 명세에 의해 확장된 {{DOMxRef("Document")}} 을 사용해 설명된 HTML 을 포함합니다.

HTML 객체는 또한 {{DOMxRef("Window")}} 인터페이스, 이에 관련된 {{DOMxRef("window.style", "Style")}}(보통 CSS), 컨텍스트에 관련된 브라우저의 히스토리인 {{DOMxRef("window.history", "History")}} 를 사용해 페이지가 그려지는 탭이나 창과 같은 브라우저의 다양한 기능들에 접근할 수 있게 해줍니다. 마지막에는, 문서의 {{DOMxRef("Selection")}} 이 완료됩니다.

자세한 내용은 [HTML DOM API](/ko/docs/Web/API/HTML_DOM) 문서를 참고하세요.

## SVG 인터페이스

### SVG 요소 인터페이스

- {{DOMxRef("SVGAElement")}}
- {{DOMxRef("SVGAltGlyphElement")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGAltGlyphDefElement")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGAltGlyphItemElement")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGAnimationElement")}}
- {{DOMxRef("SVGAnimateElement")}}
- {{DOMxRef("SVGAnimateColorElement")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGAnimateMotionElement")}}
- {{DOMxRef("SVGAnimateTransformElement")}}
- {{DOMxRef("SVGCircleElement")}}
- {{DOMxRef("SVGClipPathElement")}}
- {{DOMxRef("SVGComponentTransferFunctionElement")}}
- {{DOMxRef("SVGCursorElement")}}
- {{DOMxRef("SVGDefsElement")}}
- {{DOMxRef("SVGDescElement")}}
- {{DOMxRef("SVGElement")}}
- {{DOMxRef("SVGEllipseElement")}}
- {{DOMxRef("SVGFEBlendElement")}}
- {{DOMxRef("SVGFEColorMatrixElement")}}
- {{DOMxRef("SVGFEComponentTransferElement")}}
- {{DOMxRef("SVGFECompositeElement")}}
- {{DOMxRef("SVGFEConvolveMatrixElement")}}
- {{DOMxRef("SVGFEDiffuseLightingElement")}}
- {{DOMxRef("SVGFEDisplacementMapElement")}}
- {{DOMxRef("SVGFEDistantLightElement")}}
- {{DOMxRef("SVGFEDropShadowElement")}}
- {{DOMxRef("SVGFEFloodElement")}}
- {{DOMxRef("SVGFEFuncAElement")}}
- {{DOMxRef("SVGFEFuncBElement")}}
- {{DOMxRef("SVGFEFuncGElement")}}
- {{DOMxRef("SVGFEFuncRElement")}}
- {{DOMxRef("SVGFEGaussianBlurElement")}}
- {{DOMxRef("SVGFEImageElement")}}
- {{DOMxRef("SVGFEMergeElement")}}
- {{DOMxRef("SVGFEMergeNodeElement")}}
- {{DOMxRef("SVGFEMorphologyElement")}}
- {{DOMxRef("SVGFEOffsetElement")}}
- {{DOMxRef("SVGFEPointLightElement")}}
- {{DOMxRef("SVGFESpecularLightingElement")}}
- {{DOMxRef("SVGFESpotLightElement")}}
- {{DOMxRef("SVGFETileElement")}}
- {{DOMxRef("SVGFETurbulenceElement")}}
- {{DOMxRef("SVGFilterElement")}}
- {{DOMxRef("SVGFilterPrimitiveStandardAttributes")}}
- {{DOMxRef("SVGFontElement")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGFontFaceElement")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGFontFaceFormatElement")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGFontFaceNameElement")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGFontFaceSrcElement")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGFontFaceUriElement")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGForeignObjectElement")}}
- {{DOMxRef("SVGGElement")}}
- {{DOMxRef("SVGGeometryElement")}}
- {{DOMxRef("SVGGlyphElement")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGGlyphRefElement")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGGradientElement")}}
- {{DOMxRef("SVGGraphicsElement")}}
- {{DOMxRef("SVGHatchElement")}} {{Experimental_Inline}}
- {{DOMxRef("SVGHatchpathElement")}} {{Experimental_Inline}}
- {{DOMxRef("SVGHKernElement")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGImageElement")}}
- {{DOMxRef("SVGLinearGradientElement")}}
- {{DOMxRef("SVGLineElement")}}
- {{DOMxRef("SVGMarkerElement")}} {{Experimental_Inline}}
- {{DOMxRef("SVGMaskElement")}}
- {{DOMxRef("SVGMetadataElement")}}
- {{DOMxRef("SVGMissingGlyphElement")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGMPathElement")}}
- {{DOMxRef("SVGPathElement")}}
- {{DOMxRef("SVGPatternElement")}}
- {{DOMxRef("SVGPolylineElement")}}
- {{DOMxRef("SVGPolygonElement")}}
- {{DOMxRef("SVGRadialGradientElement")}}
- {{DOMxRef("SVGRectElement")}}
- {{DOMxRef("SVGScriptElement")}}
- {{DOMxRef("SVGSetElement")}}
- {{DOMxRef("SVGStopElement")}}
- {{DOMxRef("SVGStyleElement")}}
- {{DOMxRef("SVGSVGElement")}}
- {{DOMxRef("SVGSwitchElement")}}
- {{DOMxRef("SVGSymbolElement")}}
- {{DOMxRef("SVGTextContentElement")}}
- {{DOMxRef("SVGTextElement")}}
- {{DOMxRef("SVGTextPathElement")}}
- {{DOMxRef("SVGTextPositioningElement")}}
- {{DOMxRef("SVGTitleElement")}}
- {{DOMxRef("SVGTRefElement")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGTSpanElement")}}
- {{DOMxRef("SVGUseElement")}}
- {{DOMxRef("SVGViewElement")}}
- {{DOMxRef("SVGVKernElement")}} {{Deprecated_Inline}}

### SVG 데이터 타입 인터페이스

다음은 SVG 프로퍼티와 어트리뷰트 정의에 쓰이는 데이터 타입을 위한 DOM API입니다.

#### 정적 타입

- {{DOMxRef("SVGAngle")}}
- {{DOMxRef("SVGColor")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGICCColor")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGElementInstance")}}
- {{DOMxRef("SVGElementInstanceList")}}
- {{DOMxRef("SVGLength")}}
- {{DOMxRef("SVGLengthList")}}
- {{DOMxRef("SVGMatrix")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGNameList")}}
- {{DOMxRef("SVGNumber")}}
- {{DOMxRef("SVGNumberList")}}
- {{DOMxRef("SVGPaint")}}
- {{DOMxRef("SVGPathSeg")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPathSegClosePath")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPathSegMovetoAbs")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPathSegMovetoRel")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPathSegLinetoAbs")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPathSegLinetoRel")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPathSegCurvetoCubicAbs")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPathSegCurvetoCubicRel")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPathSegCurvetoQuadraticAbs")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPathSegCurvetoQuadraticRel")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPathSegArcAbs")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPathSegArcRel")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPathSegLinetoHorizontalAbs")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPathSegLinetoHorizontalRel")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPathSegLinetoVerticalAbs")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPathSegLinetoVerticalRel")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPathSegCurvetoCubicSmoothAbs")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPathSegCurvetoCubicSmoothRel")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPathSegCurvetoQuadraticSmoothAbs")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPathSegCurvetoQuadraticSmoothRel")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPathSegList")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPoint")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPointList")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPreserveAspectRatio")}}
- {{DOMxRef("SVGRect")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGStringList")}}
- {{DOMxRef("SVGTransform")}}
- {{DOMxRef("SVGTransformList")}}

#### 움직이는(animated) 형

- {{DOMxRef("SVGAnimatedAngle")}}
- {{DOMxRef("SVGAnimatedBoolean")}}
- {{DOMxRef("SVGAnimatedEnumeration")}}
- {{DOMxRef("SVGAnimatedInteger")}}
- {{DOMxRef("SVGAnimatedLength")}}
- {{DOMxRef("SVGAnimatedLengthList")}}
- {{DOMxRef("SVGAnimatedNumber")}}
- {{DOMxRef("SVGAnimatedNumberList")}}
- {{DOMxRef("SVGAnimatedPathData")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGAnimatedPoints")}}
- {{DOMxRef("SVGAnimatedPreserveAspectRatio")}}
- {{DOMxRef("SVGAnimatedRect")}}
- {{DOMxRef("SVGAnimatedString")}}
- {{DOMxRef("SVGAnimatedTransformList")}}

### SMIL 관련 인터페이스

- {{DOMxRef("ElementTimeControl")}}
- {{DOMxRef("TimeEvent")}}

### 기타 SVG 인터페이스

- {{DOMxRef("GetSVGDocument")}}
- {{DOMxRef("ShadowAnimation")}}
- {{DOMxRef("SVGColorProfileRule")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGCSSRule")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGDocument")}}
- {{DOMxRef("SVGException")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGFitToViewBox")}}
- {{DOMxRef("SVGLocatable")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGRenderingIntent")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGUnitTypes")}}
- {{DOMxRef("SVGUseElementShadowRoot")}}
- {{DOMxRef("SVGViewSpec")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGZoomEvent")}} {{Deprecated_Inline}}

## 명세

{{Specifications}}

## 같이 보기

- [DOM 예제](/ko/docs/Web/API/Document_Object_Model/Examples)
- [CSS 객체 모델 (CSSOM)](/ko/docs/Web/API/CSS_Object_Model)
