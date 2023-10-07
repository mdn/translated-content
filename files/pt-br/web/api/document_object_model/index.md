---
title: Modelo de Objeto de Documento (DOM)
slug: Web/API/Document_Object_Model
---

{{DefaultAPISidebar("DOM")}}

O **Modelo de Objeto de Documento (_DOM_)** é uma interface de programação para documentos HTML, XML e SVG . Ele fornece uma representação estruturada do documento como uma árvore. O DOM define métodos que permitem acesso à árvore, para que eles possam alterar a estrutura, estilo e conteúdo do documento. O DOM fornece uma representação do documento como um grupo estruturado de nós e objetos, possuindo várias propriedades e métodos. Os nós também podem ter manipuladores de eventos que lhe são inerentes, e uma vez que um evento é acionado, os manipuladores de eventos são executados. Essencialmente, ele conecta páginas web a scripts ou linguagens de programação.

Embora o DOM seja frequentemente acessado usando JavaScript, não é uma parte da linguagem JavaScript. Ele também pode ser acessado por outras linguagens.

Uma [introdução](/pt-BR/docs/DOM/DOM_Reference/Introduction) ao DOM está disponível.

## DOM interfaces

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

## Interfaces DOM obsoletas

O Modelo de Objeto de Documento foi altamente simplificado. Para conseguir isso, as seguintes interfaces presentes na especificação DOM nível 3 ou especificação anterior foi removida. Ainda não está muito claro se alguns podem ser reintroduzidos ou não, mas por enquanto eles têm que ser considerados obsoletos e devem ser evitados:

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

## Interfaces HTML

Um documento contendo HTML é descrito usando o {{domxref("HTMLDocument")}} interface. Nota-se que a especificação HTML também se extende a {{domxref("Document")}} interface.

Um objeto `HTMLDocument` também da acesso á vários recursos de navegadores como a aba ou janela, em que uma página é desenhada usando {{domxref("Window")}} interface, o {{domxref("window.style", "Style")}} associado a ele (normalmente CSS), a história do navegador relativa ao contexto, {{domxref("window.history", "History")}}. Eventualmente, {{domxref("Selection")}} é feito no documento.

### HTML elemento interfaces

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

### Outras interfaces

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

### Obsoleto HTML interfaces

- {{domxref("HTMLBaseFontElement")}}
- {{domxref("HTMLIsIndexElement")}}

## SVG interfaces

### SVG elemento interfaces

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

### SVG data type interfaces

Aqui estão a DOM API para tipos de dados utilizados nas definições de propriedades SVG e atributos.

> **Nota:** Starting in Gecko 5.0, the following SVG-related DOM interfaces representing lists of objects are now indexable and can be accessed ; in addition, they have a length property indicating the number of items in the lists: {{domxref("SVGLengthList")}}, {{domxref("SVGNumberList")}}, {{domxref("SVGPathSegList")}}, and {{domxref("SVGPointList")}}.

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

### SMIL related interfaces

- {{domxref("ElementTimeControl")}}
- {{domxref("TimeEvent")}}

### Other SVG interfaces

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

## Veja também

- [DOM Exemplos](/pt-BR/docs/DOM/DOM_Reference/Examples)
