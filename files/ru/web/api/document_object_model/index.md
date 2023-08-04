---
title: Руководство по DOM
slug: Web/API/Document_Object_Model
---

**Объектная Модель Документа (_DOM_)** является программным интерфейсом для HTML, XML и SVG документов. Это обеспечивает структурированное представление документа (дерева), и определяет способ, по которому структура может быть доступна для программы, для изменения структуры документа, его стиля и содержания. DOM обеспечивает представление документа в виде структурированной группы узлов и объектов, которые имеют свойства и методы. По сути, она связывает веб -страницы со скриптами или языками программирования.

DOM чаще всего используется в JavaScript, но не является его частью, поэтому иногда с DOM работают в других языках.

[Введение](/ru/docs/DOM/DOM_Reference/Введение) в DOM доступно.

## DOM интерфейсы

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

## Устаревшие интерфейсы

Объектная модель документа находится в процессе значительного упрощения. Для того, чтобы достигнуть этого следующие интерфейсы, присутствующие на различных DOM level 3 или более ранних спецификациях были удалены. До сих пор неясно, будут ли некоторые из них возвращены, но на данный момент они должны быть рассмотрены как устаревшие, и их использования следует избегать:

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

## HTML интерфейсы

Документ, содержащий HTML описывается с помощью {{domxref("HTMLDocument")}} интерфейса. Обратите внимание, что HTML спецификация также расширяет {{domxref("Document")}} интерфейс.

`Объект HTMLDocument` также даёт доступ к следующим возможностям браузера: вкладки, окна, в которых отрисовывается страница, используя интерфейс {{domxref("Window")}}, ассоциированный с ним {{domxref("window.style", "Style")}} (обычно CSS), история браузера, относящаяся к контексту, {{domxref("window.history", "History")}}, в конце концов, {{domxref("Selection")}} в документе.

### Интерфейсы HTML-элементов

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

### Другие интерфейсы

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

### Устаревшие HTML интерфейсы

- {{domxref("HTMLBaseFontElement")}}
- {{domxref("HTMLIsIndexElement")}}

## SVG интерфейсы

### Интерфейсы SVG элементов

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

### Интерфейсы SVG данных

DOM API для типов данных, используемых в определениях SVG свойств и атрибутов.

> **Примечание:** Начиная с Gecko 5.0, следующие относящиеся к SVG DOM интерфейсы, представляя списки объектов, индексируются и к ним можно иметь доступ как к массивам; к тому же, у них есть свойство длины, обозначающее количество элементов в списках: {{domxref("SVGLengthList")}}, {{domxref("SVGNumberList")}}, {{domxref("SVGPathSegList")}} и {{domxref("SVGPointList")}}.

#### Статический тип

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

#### Анимированный тип

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

### Относящиеся к SMIL

- {{domxref("ElementTimeControl")}}
- {{domxref("TimeEvent")}}

### Другие SVG интерфейсы

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

## Смотрите также

- [Примеры DOM](/ru/docs/DOM/DOM_Reference/Examples)
