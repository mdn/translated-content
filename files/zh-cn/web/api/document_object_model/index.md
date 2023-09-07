---
title: 文档对象模型 (DOM)
slug: Web/API/Document_Object_Model
---

{{DefaultAPISidebar("DOM")}}

**文档对象模型 (_DOM)_** 将 web 页面与到脚本或编程语言连接起来。通常是指 JavaScript，但将 HTML、SVG 或 XML 文档建模为对象并不是 JavaScript 语言的一部分。DOM 模型用一个逻辑树来表示一个文档，树的每个分支的终点都是一个节点 (node)，每个节点都包含着对象 (objects)。DOM 的方法 (methods) 让你可以用特定方式操作这个树，用这些方法你可以改变文档的结构、样式或者内容。节点可以关联上事件处理器，一旦某一事件被触发了，那些事件处理器就会被执行。

这里还有一篇关于 DOM 的 [介绍](/zh-CN/docs/Web/API/Document_Object_Model/Introduction) 。

## DOM 接口

- {{DOMxRef("AbortController")}}
- {{DOMxRef("AbortSignal")}}
- {{DOMxRef("AbstractRange")}}
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
- {{DOMxRef("DOMParser")}}
- {{DOMxRef("DOMPoint")}}
- {{DOMxRef("DOMPointReadOnly")}}
- {{DOMxRef("DOMRect")}}
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
- {{DOMxRef("StaticRange")}}
- {{DOMxRef("Text")}}
- {{DOMxRef("TextDecoder")}}
- {{DOMxRef("TextEncoder")}}
- {{DOMxRef("TimeRanges")}}
- {{DOMxRef("TreeWalker")}}
- {{DOMxRef("XMLDocument")}}

### 过时的 DOM 接口

DOM 模型已经被高度简化了。为此，以下出现在 DOM level 3 或更早的规范里的接口已经被移除了。现在不是非常确定是否有一些会被重新引进，但是当前应该把它们看作废弃的，应当避免使用：

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

包含 HTML 的文档使用 {{DOMxRef("Document")}} 接口进行描述，该接口由 HTML 规范扩展，包含了各种特定于 HTML 的功能。特别是，{{domxref("Element")}} 接口得到了增强，成为 {{domxref("HTMLElement")}} 和各种子类，每个子类代表一个（或一系列密切相关的）元素。

HTML DOM API 提供对各种浏览器功能的访问，例如选项卡和窗口、CSS 样式和样式表、浏览器历史记录等。这些接口将在 [HTML DOM API](/zh-CN/docs/Web/API/HTML_DOM_API) 中进一步讨论。

## SVG 接口

### SVG 元素接口

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

### SVG 数据类型接口

以下是 SVG 属性和属性定义中使用的数据类型的 DOM API。

#### 静态类型

- {{DOMxRef("SVGAngle")}}
- {{DOMxRef("SVGColor")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGICCColor")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGElementInstance")}}
- {{DOMxRef("SVGElementInstanceList")}}
- {{DOMxRef("SVGLength")}}
- {{DOMxRef("SVGLengthList")}}
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

#### 动画类型

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

### SMIL 相关接口

- {{domxref("ElementTimeControl")}}
- {{domxref("TimeEvent")}}

### 其他的 SVG 接口

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

## 规范

{{Specifications}}

## 参见

- [DOM 示例](/zh-CN/docs/DOM/DOM_Reference/Examples)
- [CSS 对象模型 (CSSOM)](/zh-CN/docs/Web/API/CSS_Object_Model)
