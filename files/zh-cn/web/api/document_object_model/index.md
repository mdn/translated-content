---
title: 文档对象模型 (DOM)
slug: Web/API/Document_Object_Model
---

{{DefaultAPISidebar("DOM")}}

**文档对象模型 (_DOM)_** 将 web 页面与到脚本或编程语言连接起来。通常是指 JavaScript，但将 HTML、SVG 或 XML 文档建模为对象并不是 JavaScript 语言的一部分。DOM 模型用一个逻辑树来表示一个文档，树的每个分支的终点都是一个节点 (node)，每个节点都包含着对象 (objects)。DOM 的方法 (methods) 让你可以用特定方式操作这个树，用这些方法你可以改变文档的结构、样式或者内容。节点可以关联上事件处理器，一旦某一事件被触发了，那些事件处理器就会被执行。

这里还有一篇关于 DOM 的 [介绍](/zh-CN/docs/Web/API/Document_Object_Model/Introduction) 。

## DOM 接口

- {{domxref("Attr")}}
- {{domxref("CharacterData")}}
- {{domxref("ChildNode")}} {{experimental_inline}}
- {{domxref("Comment")}}
- {{domxref("CustomEvent")}}
- {{domxref("Document")}}
- {{domxref("DocumentFragment")}}
- {{domxref("DocumentType")}}
- {{domxref("DOMError")}}
- {{domxref("DOMException")}}
- {{domxref("DOMImplementation")}}
- {{domxref("DOMString")}}
- {{domxref("DOMTimeStamp")}}
- {{domxref("DOMSettableTokenList")}}
- {{domxref("DOMStringList")}}
- {{domxref("DOMTokenList")}}
- {{domxref("Element")}}
- {{domxref("Event")}}
- {{domxref("EventTarget")}}
- {{domxref("HTMLCollection")}}
- {{domxref("MutationObserver")}}
- {{domxref("MutationRecord")}}
- {{domxref("Node")}}
- {{domxref("NodeFilter")}}
- {{domxref("NodeIterator")}}
- {{domxref("NodeList")}}
- {{domxref("ParentNode")}} {{experimental_inline}}
- {{domxref("ProcessingInstruction")}}
- {{domxref("Promise")}} {{experimental_inline}}
- {{domxref("PromiseResolver")}} {{experimental_inline}}
- {{domxref("Range")}}
- {{domxref("Text")}}
- {{domxref("TreeWalker")}}
- {{domxref("URL")}}
- {{domxref("Window")}}
- {{domxref("Worker")}}
- {{domxref("XMLDocument")}} {{experimental_inline}}

## 过时的 DOM 接口

DOM 模型已经被高度简化了。为此，以下出现在 DOM level 3 或更早的规范里的接口已经被移除了。现在不是非常确定是否有一些会被重新引进，但是当前应该把它们看作废弃的，应当避免使用：

- {{domxref("CDATASection")}}
- {{domxref("DOMConfiguration")}}
- {{domxref("DOMErrorHandler")}}
- {{domxref("DOMImplementationList")}}
- {{domxref("DOMImplementationRegistry")}}
- {{domxref("DOMImplementationSource")}}
- {{domxref("DOMLocator")}}
- {{domxref("DOMObject")}}
- {{domxref("DOMUserData")}}
- {{domxref("Entity")}}
- {{domxref("EntityReference")}}
- {{domxref("NamedNodeMap")}}
- {{domxref("NameList")}}
- {{domxref("Notation")}}
- {{domxref("TypeInfo")}}
- {{domxref("UserDataHandler")}}
-

## HTML 接口

{{domxref("HTMLDocument")}} 接口描述了包含 HTML 的文档。注意：HTML 规范也继承了{{domxref("Document")}} 接口。

一个 `HTMLDocument` 对象还可以访问浏览器的各种功能：例如使用 {{domxref("Window")}} 接口来绘制的标签或窗口，与之关联的样式 {{domxref("window.style", "Style")}}（通常是 CSS），浏览器相对于上下文的历史记录 {{domxref("window.history", "History")}}，以及文档内的选区 {{domxref("Selection")}} 等。

### HTML 元素接口

- {{domxref("HTMLAnchorElement")}}
- {{domxref("HTMLAppletElement")}}
- {{domxref("HTMLAreaElement")}}
- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLBaseElement")}}
- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLBRElement")}}
- {{domxref("HTMLButtonElement")}}
- {{domxref("HTMLCanvasElement")}}
- {{domxref("HTMLDataElement")}}
- {{domxref("HTMLDataListElement")}}
- {{domxref("HTMLDirectoryElement")}}
- {{domxref("HTMLDivElement")}}
- {{domxref("HTMLDListElement")}}
- {{domxref("HTMLElement")}}
- {{domxref("HTMLEmbedElement")}}
- {{domxref("HTMLFieldSetElement")}}
- {{domxref("HTMLFontElement")}}
- {{domxref("HTMLFormElement")}}
- {{domxref("HTMLFrameElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("HTMLHeadElement")}}
- {{domxref("HTMLHeadingElement")}}
- {{domxref("HTMLHtmlElement")}}
- {{domxref("HTMLHRElement")}}
- {{domxref("HTMLIFrameElement")}}
- {{domxref("HTMLImageElement")}}
- {{domxref("HTMLInputElement")}}
- {{domxref("HTMLKeygenElement")}}
- {{domxref("HTMLLabelElement")}}
- {{domxref("HTMLLegendElement")}}
- {{domxref("HTMLLIElement")}}
- {{domxref("HTMLLinkElement")}}
- {{domxref("HTMLMapElement")}}
- {{domxref("HTMLMediaElement")}}
- {{domxref("HTMLMenuElement")}}
- {{domxref("HTMLMetaElement")}}
- {{domxref("HTMLMeterElement")}}
- {{domxref("HTMLModElement")}}
- {{domxref("HTMLObjectElement")}}
- {{domxref("HTMLOListElement")}}
- {{domxref("HTMLOptGroupElement")}}
- {{domxref("HTMLOptionElement")}}
- {{domxref("HTMLOutputElement")}}
- {{domxref("HTMLParagraphElement")}}
- {{domxref("HTMLParamElement")}}
- {{domxref("HTMLPreElement")}}
- {{domxref("HTMLProgressElement")}}
- {{domxref("HTMLQuoteElement")}}
- {{domxref("HTMLScriptElement")}}
- {{domxref("HTMLSelectElement")}}
- {{domxref("HTMLSourceElement")}}
- {{domxref("HTMLSpanElement")}}
- {{domxref("HTMLStyleElement")}}
- {{domxref("HTMLTableElement")}}
- {{domxref("HTMLTableCaptionElement")}}
- {{domxref("HTMLTableCellElement")}}
- {{domxref("HTMLTableDataCellElement")}}
- {{domxref("HTMLTableHeaderCellElement")}}
- {{domxref("HTMLTableColElement")}}
- {{domxref("HTMLTableRowElement")}}
- {{domxref("HTMLTableSectionElement")}}
- {{domxref("HTMLTextAreaElement")}}
- {{domxref("HTMLTimeElement")}}
- {{domxref("HTMLTitleElement")}}
- {{domxref("HTMLTrackElement")}}
- {{domxref("HTMLUListElement")}}
- {{domxref("HTMLUnknownElement")}}
- {{domxref("HTMLVideoElement")}}

### 其他接口

- {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasGradient")}}
- {{domxref("CanvasPattern")}}
- {{domxref("TextMetrics")}}
- {{domxref("ImageData")}}
- {{domxref("CanvasPixelArray")}}
- {{domxref("NotifyAudioAvailableEvent")}}
- {{domxref("HTMLAllCollection")}}
- {{domxref("HTMLFormControlsCollection")}}
- {{domxref("HTMLOptionsCollection")}}
- {{domxref("HTMLPropertiesCollection")}}
- {{domxref("DOMStringMap")}}
- {{domxref("RadioNodeList")}}
- {{domxref("MediaError")}}

### 过时的 HTML 接口

- {{domxref("HTMLBaseFontElement")}}
- {{domxref("HTMLIsIndexElement")}}

## SVG 接口

### SVG 元素接口

- {{domxref("SVGAElement")}}
- {{domxref("SVGAltGlyphElement")}}
- {{domxref("SVGAltGlyphDefElement")}}
- {{domxref("SVGAltGlyphItemElement")}}
- {{domxref("SVGAnimationElement")}}
- {{domxref("SVGAnimateElement")}}
- {{domxref("SVGAnimateColorElement")}}
- {{domxref("SVGAnimateMotionElement")}}
- {{domxref("SVGAnimateTransformElement")}}
- {{domxref("SVGCircleElement")}}
- {{domxref("SVGClipPathElement")}}
- {{domxref("SVGColorProfileElement")}}
- {{domxref("SVGComponentTransferFunctionElement")}}
- {{domxref("SVGCursorElement")}}
- {{domxref("SVGDefsElement")}}
- {{domxref("SVGDescElement")}}
- {{domxref("SVGElement")}}
- {{domxref("SVGEllipseElement")}}
- {{domxref("SVGFEBlendElement")}}
- {{domxref("SVGFEColorMatrixElement")}}
- {{domxref("SVGFEComponentTransferElement")}}
- {{domxref("SVGFECompositeElement")}}
- {{domxref("SVGFEConvolveMatrixElement")}}
- {{domxref("SVGFEDiffuseLightingElement")}}
- {{domxref("SVGFEDisplacementMapElement")}}
- {{domxref("SVGFEDistantLightElement")}}
- {{domxref("SVGFEFloodElement")}}
- {{domxref("SVGFEGaussianBlurElement")}}
- {{domxref("SVGFEImageElement")}}
- {{domxref("SVGFEMergeElement")}}
- {{domxref("SVGFEMergeNodeElement")}}
- {{domxref("SVGFEMorphologyElement")}}
- {{domxref("SVGFEOffsetElement")}}
- {{domxref("SVGFEPointLightElement")}}
- {{domxref("SVGFESpecularLightingElement")}}
- {{domxref("SVGFESpotLightElement")}}
- {{domxref("SVGFETileElement")}}
- {{domxref("SVGFETurbulenceElement")}}
- {{domxref("SVGFEFuncRElement")}}
- {{domxref("SVGFEFuncGElement")}}
- {{domxref("SVGFEFuncBElement")}}
- {{domxref("SVGFEFuncAElement")}}
- {{domxref("SVGFilterElement")}}
- {{domxref("SVGFilterPrimitiveStandardAttributes")}}
- {{domxref("SVGFontElement")}}
- {{domxref("SVGFontFaceElement")}}
- {{domxref("SVGFontFaceFormatElement")}}
- {{domxref("SVGFontFaceNameElement")}}
- {{domxref("SVGFontFaceSrcElement")}}
- {{domxref("SVGFontFaceUriElement")}}
- {{domxref("SVGForeignObjectElement")}}
- {{domxref("SVGGElement")}}
- {{domxref("SVGGlyphElement")}}
- {{domxref("SVGGlyphRefElement")}}
- {{domxref("SVGGradientElement")}}
- {{domxref("SVGHKernElement")}}
- {{domxref("SVGImageElement")}}
- {{domxref("SVGLinearGradientElement")}}
- {{domxref("SVGLineElement")}}
- {{domxref("SVGMarkerElement")}}
- {{domxref("SVGMaskElement")}}
- {{domxref("SVGMetadataElement")}}
- {{domxref("SVGMissingGlyphElement")}}
- {{domxref("SVGMPathElement")}}
- {{domxref("SVGPathElement")}}
- {{domxref("SVGPatternElement")}}
- {{domxref("SVGPolylineElement")}}
- {{domxref("SVGPolygonElement")}}
- {{domxref("SVGRadialGradientElement")}}
- {{domxref("SVGRectElement")}}
- {{domxref("SVGScriptElement")}}
- {{domxref("SVGSetElement")}}
- {{domxref("SVGStopElement")}}
- {{domxref("SVGStyleElement")}}
- {{domxref("SVGSVGElement")}}
- {{domxref("SVGSwitchElement")}}
- {{domxref("SVGSymbolElement")}}
- {{domxref("SVGTextElement")}}
- {{domxref("SVGTextPathElement")}}
- {{domxref("SVGTitleElement")}}
- {{domxref("SVGTRefElement")}}
- {{domxref("SVGTSpanElement")}}
- {{domxref("SVGUseElement")}}
- {{domxref("SVGViewElement")}}
- {{domxref("SVGVKernElement")}}

### SVG 数据类型接口

Here are the DOM API for data types used in the definitions of SVG properties and attributes.

> **备注：** Starting in {{Gecko("5.0")}},the following SVG-related DOM interfaces representing lists of objects are now indexable and can be accessed like arrays; in addition, they have a length property indicating the number of items in the lists: {{domxref("SVGLengthList")}}, {{domxref("SVGNumberList")}}, {{domxref("SVGPathSegList")}}, and {{domxref("SVGPointList")}}.

#### Static type

- {{domxref("SVGAngle")}}
- {{domxref("SVGColor")}}
- {{domxref("SVGICCColor")}}
- {{domxref("SVGElementInstance")}}
- {{domxref("SVGElementInstanceList")}}
- {{domxref("SVGLength")}}
- {{domxref("SVGLengthList")}}
- {{domxref("SVGMatrix")}}
- {{domxref("SVGNumber")}}
- {{domxref("SVGNumberList")}}
- {{domxref("SVGPaint")}}
- {{domxref("SVGPoint")}}
- {{domxref("SVGPointList")}}
- {{domxref("SVGPreserveAspectRatio")}}
- {{domxref("SVGRect")}}
- {{domxref("SVGStringList")}}
- {{domxref("SVGTransform")}}
- {{domxref("SVGTransformList")}}

#### Animated type

- {{domxref("SVGAnimatedAngle")}}
- {{domxref("SVGAnimatedBoolean")}}
- {{domxref("SVGAnimatedEnumeration")}}
- {{domxref("SVGAnimatedInteger")}}
- {{domxref("SVGAnimatedLength")}}
- {{domxref("SVGAnimatedLengthList")}}
- {{domxref("SVGAnimatedNumber")}}
- {{domxref("SVGAnimatedNumberList")}}
- {{domxref("SVGAnimatedPreserveAspectRatio")}}
- {{domxref("SVGAnimatedRect")}}
- {{domxref("SVGAnimatedString")}}
- {{domxref("SVGAnimatedTransformList")}}

### SVG 路径段接口

- {{domxref("SVGPathSegList")}}
- {{domxref("SVGPathSeg")}}
- {{domxref("SVGPathSegArcAbs")}}
- {{domxref("SVGPathSegArcRel")}}
- {{domxref("SVGPathSegClosePath")}}
- {{domxref("SVGPathSegCurvetoCubicAbs")}}
- {{domxref("SVGPathSegCurvetoCubicRel")}}
- {{domxref("SVGPathSegCurvetoCubicSmoothAbs")}}
- {{domxref("SVGPathSegCurvetoCubicSmoothRel")}}
- {{domxref("SVGPathSegCurvetoQuadraticAbs")}}
- {{domxref("SVGPathSegCurvetoQuadraticRel")}}
- {{domxref("SVGPathSegCurvetoQuadraticSmoothAbs")}}
- {{domxref("SVGPathSegCurvetoQuadraticSmoothRel")}}
- {{domxref("SVGPathSegLinetoAbs")}}
- {{domxref("SVGPathSegLinetoHorizontalAbs")}}
- {{domxref("SVGPathSegLinetoHorizontalRel")}}
- {{domxref("SVGPathSegLinetoRel")}}
- {{domxref("SVGPathSegLinetoVerticalAbs")}}
- {{domxref("SVGPathSegLinetoVerticalRel")}}
- {{domxref("SVGPathSegMovetoAbs")}}
- {{domxref("SVGPathSegMovetoRel")}}

### SMIL 相关接口

- {{domxref("ElementTimeControl")}}
- {{domxref("TimeEvent")}}

### 其他的 SVG 接口

- {{domxref("SVGAnimatedPathData")}}
- {{domxref("SVGAnimatedPoints")}}
- {{domxref("SVGColorProfileRule")}}
- {{domxref("SVGCSSRule")}}
- {{domxref("SVGExternalResourcesRequired")}}
- {{domxref("SVGFitToViewBox")}}
- {{domxref("SVGLangSpace")}}
- {{domxref("SVGLocatable")}}
- {{domxref("SVGRenderingIntent")}}
- {{domxref("SVGStylable")}}
- {{domxref("SVGTests")}}
- {{domxref("SVGTextContentElement")}}
- {{domxref("SVGTextPositioningElement")}}
- {{domxref("SVGTransformable")}}
- {{domxref("SVGUnitTypes")}}
- {{domxref("SVGURIReference")}}
- {{domxref("SVGViewSpec")}}
- {{domxref("SVGZoomAndPan")}}

## 相关参考

- [DOM 示例](/zh-CN/docs/DOM/DOM_Reference/Examples)
