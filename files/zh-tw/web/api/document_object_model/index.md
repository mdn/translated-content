---
title: 文件物件模型 (DOM)
slug: Web/API/Document_Object_Model
---

{{DefaultAPISidebar("DOM")}}

**文件物件模型（_Document Object Model, DOM_）**是 HTML、XML 和 SVG 文件的程式介面。它提供了一個文件（樹）的結構化表示法，並定義讓程式可以存取並改變文件架構、風格和內容的方法。DOM 提供了文件以擁有屬性與函式的節點與物件組成的結構化表示。節點也可以附加事件處理程序，一旦觸發事件就會執行處理程序。 本質上，它將網頁與腳本或程式語言連結在一起。

雖然常常使用 JavaScript 來存取 DOM，但它本身並不是 JavaScript 語言的一部分，而且它也可以被其他語言存取（雖然不太常見就是了）。

這裡有一篇 DOM 的[介紹](/zh-TW/docs/Web/API/Document_Object_Model/Introduction)可供查閱。

## DOM 介面

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
- {{domxref("Range")}}
- {{domxref("Text")}}
- {{domxref("TreeWalker")}}
- {{domxref("URL")}}
- {{domxref("Window")}}
- {{domxref("Worker")}}
- {{domxref("XMLDocument")}} {{experimental_inline}}

## 棄用的 DOM 介面

文件物件模型正被大量的簡化。為了達成這個目的，下這些介面是在 DOM level 3 或更早的規範中就被刪掉了。由於不清楚是否會被再度納入，請姑且當他們已經被遺棄，並避免使用：

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

## HTML 介面

一份包含 html 的文件會透過 {{domxref("HTMLDocument")}} 介面來描述。注意 HTML 規範也擴展了 {{domxref("Document")}} 介面。

`HTMLDocument` 物件也提供了瀏覽器功能的存取：分頁、透過 {{domxref("Window")}} 介面描繪頁面的視窗、與其相關的 {{domxref("window.style", "樣式")}} （通常是 CSS ）、與本文關聯的瀏覽器 {{domxref("window.history", "歷史")}}、以及一個文件內的 {{domxref("Selection", "選擇器")}}。

### HTML 元素介面

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
- {{domxref("HTMLDialogElement")}}
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

### 其他介面

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

### 棄用的 HTML 介面

- {{domxref("HTMLIsIndexElement")}}

## SVG 介面

### SVG 元素介面

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

### SVG 資料型別介面

這裡是資料型態的 DOM API，在 SVG 特性和性質的定義中被使用。

> [!NOTE]
> 從 Gecko 5.0 開始，下列 SVG 相關的 DOM 介面物件的表示清單，現在可以被索引且可以像陣列般被取用；此外，他們也有 length 屬性來標示其清單中的項目個數：{{domxref("SVGLengthList")}}、{{domxref("SVGNumberList")}}、{{domxref("SVGPathSegList")}}，和 {{domxref("SVGPointList")}}。

#### 靜態類型

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

#### 動畫類型

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

### SMIL 相關介面

- {{domxref("ElementTimeControl")}}
- {{domxref("TimeEvent")}}

### 其他的 SVG 介面

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

## 相關連結

- [DOM 範例](/zh-TW/docs/Web/API/Document_Object_Model/Examples)
