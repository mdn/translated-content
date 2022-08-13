---
title: Modelo de Objeto de Documento (DOM)
slug: Web/API/Document_Object_Model
translation_of: Web/API/Document_Object_Model
original_slug: DOM/Referencia_do_DOM
---
<p>{{DefaultAPISidebar("DOM")}}</p>

<p>O <strong>Modelo de Objeto de Documento  (<em>DOM</em>)</strong> é uma interface de programação para documentos HTML, XML e SVG . Ele fornece uma representação estruturada do documento como uma árvore. O DOM define métodos que permitem acesso à árvore, para que eles possam alterar a estrutura, estilo e conteúdo do documento. O DOM fornece uma representação do documento como um grupo estruturado de nós e objetos, possuindo várias propriedades e métodos. Os nós também podem ter manipuladores de eventos que lhe são inerentes, e uma vez que um evento é acionado, os manipuladores de eventos são executados. Essencialmente, ele conecta páginas web a scripts ou linguagens de programação.</p>

<p>Embora o DOM seja frequentemente acessado usando JavaScript, não é uma parte da linguagem JavaScript. Ele também pode ser acessado por outras linguagens.</p>

<p>Uma <a href="/en-US/docs/DOM/DOM_Reference/Introduction">introdução</a> ao DOM está disponível.</p>

<h2 id="DOM_interfaces">DOM interfaces</h2>

<div class="index">
<ul>
 <li>{{domxref("Attr")}}</li>
 <li>{{domxref("CharacterData")}}</li>
 <li>{{domxref("ChildNode")}} {{experimental_inline}}</li>
 <li>{{domxref("Comment")}}</li>
 <li>{{domxref("CustomEvent")}}</li>
 <li>{{domxref("Document")}}</li>
 <li>{{domxref("DocumentFragment")}}</li>
 <li>{{domxref("DocumentType")}}</li>
 <li>{{domxref("DOMError")}}</li>
 <li>{{domxref("DOMException")}}</li>
 <li>{{domxref("DOMImplementation")}}</li>
 <li>{{domxref("DOMString")}}</li>
 <li>{{domxref("DOMTimeStamp")}}</li>
 <li>{{domxref("DOMSettableTokenList")}}</li>
 <li>{{domxref("DOMStringList")}}</li>
 <li>{{domxref("DOMTokenList")}}</li>
 <li>{{domxref("Element")}}</li>
 <li>{{domxref("Event")}}</li>
 <li>{{domxref("EventTarget")}}</li>
 <li>{{domxref("HTMLCollection")}}</li>
 <li>{{domxref("MutationObserver")}}</li>
 <li>{{domxref("MutationRecord")}}</li>
 <li>{{domxref("Node")}}</li>
 <li>{{domxref("NodeFilter")}}</li>
 <li>{{domxref("NodeIterator")}}</li>
 <li>{{domxref("NodeList")}}</li>
 <li>{{domxref("ParentNode")}} {{experimental_inline}}</li>
 <li>{{domxref("ProcessingInstruction")}}</li>
 <li>{{domxref("Range")}}</li>
 <li>{{domxref("Text")}}</li>
 <li>{{domxref("TreeWalker")}}</li>
 <li>{{domxref("URL")}}</li>
 <li>{{domxref("Window")}}</li>
 <li>{{domxref("Worker")}}</li>
 <li>{{domxref("XMLDocument")}} {{experimental_inline}}</li>
</ul>
</div>

<h2 id="Interfaces_DOM_obsoletas">Interfaces DOM obsoletas</h2>

<p>O Modelo de Objeto de Documento foi altamente simplificado. Para conseguir isso, as seguintes interfaces presentes na especificação DOM nível 3 ou especificação anterior foi removida. Ainda não está muito claro se alguns podem ser reintroduzidos ou não, mas por enquanto eles têm que ser considerados obsoletos e devem ser evitados:</p>

<div class="index">
<ul>
 <li>{{domxref("CDATASection")}}</li>
 <li>{{domxref("DOMConfiguration")}}</li>
 <li>{{domxref("DOMErrorHandler")}}</li>
 <li>{{domxref("DOMImplementationList")}}</li>
 <li>{{domxref("DOMImplementationRegistry")}}</li>
 <li>{{domxref("DOMImplementationSource")}}</li>
 <li>{{domxref("DOMLocator")}}</li>
 <li>{{domxref("DOMObject")}}</li>
 <li>{{domxref("DOMUserData")}}</li>
 <li>{{domxref("Entity")}}</li>
 <li>{{domxref("EntityReference")}}</li>
 <li>{{domxref("NamedNodeMap")}}</li>
 <li>{{domxref("NameList")}}</li>
 <li>{{domxref("Notation")}}</li>
 <li>{{domxref("TypeInfo")}}</li>
 <li>{{domxref("UserDataHandler")}}</li>
 <li></li>
</ul>
</div>

<h2 id="Interfaces_HTML">Interfaces HTML</h2>

<p>Um documento contendo HTML é descrito usando o {{domxref("HTMLDocument")}} interface. Nota-se que a especificação HTML também se extende a {{domxref("Document")}} interface.</p>

<p>Um objeto <code>HTMLDocument</code> também da acesso á vários recursos de navegadores como a aba ou janela, em que uma página é desenhada usando {{domxref("Window")}} interface, o {{domxref("window.style", "Style")}} associado a ele (normalmente CSS), a história do navegador relativa ao contexto, {{domxref("window.history", "History")}}. Eventualmente, {{domxref("Selection")}} é feito no documento.</p>

<h3 id="HTML_elemento_interfaces">HTML elemento interfaces</h3>

<div class="index">
<ul>
 <li>{{domxref("HTMLAnchorElement")}}</li>
 <li>{{domxref("HTMLAppletElement")}}</li>
 <li>{{domxref("HTMLAreaElement")}}</li>
 <li>{{domxref("HTMLAudioElement")}}</li>
 <li>{{domxref("HTMLBaseElement")}}</li>
 <li>{{domxref("HTMLBodyElement")}}</li>
 <li>{{domxref("HTMLBRElement")}}</li>
 <li>{{domxref("HTMLButtonElement")}}</li>
 <li>{{domxref("HTMLCanvasElement")}}</li>
 <li>{{domxref("HTMLDataElement")}}</li>
 <li>{{domxref("HTMLDataListElement")}}</li>
 <li>{{domxref("HTMLDialogElement")}}</li>
 <li>{{domxref("HTMLDirectoryElement")}}</li>
 <li>{{domxref("HTMLDivElement")}}</li>
 <li>{{domxref("HTMLDListElement")}}</li>
 <li>{{domxref("HTMLElement")}}</li>
 <li>{{domxref("HTMLEmbedElement")}}</li>
 <li>{{domxref("HTMLFieldSetElement")}}</li>
 <li>{{domxref("HTMLFontElement")}}</li>
 <li>{{domxref("HTMLFormElement")}}</li>
 <li>{{domxref("HTMLFrameElement")}}</li>
 <li>{{domxref("HTMLFrameSetElement")}}</li>
 <li>{{domxref("HTMLHeadElement")}}</li>
 <li>{{domxref("HTMLHeadingElement")}}</li>
 <li>{{domxref("HTMLHtmlElement")}}</li>
 <li>{{domxref("HTMLHRElement")}}</li>
 <li>{{domxref("HTMLIFrameElement")}}</li>
 <li>{{domxref("HTMLImageElement")}}</li>
 <li>{{domxref("HTMLInputElement")}}</li>
 <li>{{domxref("HTMLKeygenElement")}}</li>
 <li>{{domxref("HTMLLabelElement")}}</li>
 <li>{{domxref("HTMLLegendElement")}}</li>
 <li>{{domxref("HTMLLIElement")}}</li>
 <li>{{domxref("HTMLLinkElement")}}</li>
 <li>{{domxref("HTMLMapElement")}}</li>
 <li>{{domxref("HTMLMediaElement")}}</li>
 <li>{{domxref("HTMLMenuElement")}}</li>
 <li>{{domxref("HTMLMetaElement")}}</li>
 <li>{{domxref("HTMLMeterElement")}}</li>
 <li>{{domxref("HTMLModElement")}}</li>
 <li>{{domxref("HTMLObjectElement")}}</li>
 <li>{{domxref("HTMLOListElement")}}</li>
 <li>{{domxref("HTMLOptGroupElement")}}</li>
 <li>{{domxref("HTMLOptionElement")}}</li>
 <li>{{domxref("HTMLOutputElement")}}</li>
 <li>{{domxref("HTMLParagraphElement")}}</li>
 <li>{{domxref("HTMLParamElement")}}</li>
 <li>{{domxref("HTMLPreElement")}}</li>
 <li>{{domxref("HTMLProgressElement")}}</li>
 <li>{{domxref("HTMLQuoteElement")}}</li>
 <li>{{domxref("HTMLScriptElement")}}</li>
 <li>{{domxref("HTMLSelectElement")}}</li>
 <li>{{domxref("HTMLSourceElement")}}</li>
 <li>{{domxref("HTMLSpanElement")}}</li>
 <li>{{domxref("HTMLStyleElement")}}</li>
 <li>{{domxref("HTMLTableElement")}}</li>
 <li>{{domxref("HTMLTableCaptionElement")}}</li>
 <li>{{domxref("HTMLTableCellElement")}}</li>
 <li>{{domxref("HTMLTableDataCellElement")}}</li>
 <li>{{domxref("HTMLTableHeaderCellElement")}}</li>
 <li>{{domxref("HTMLTableColElement")}}</li>
 <li>{{domxref("HTMLTableRowElement")}}</li>
 <li>{{domxref("HTMLTableSectionElement")}}</li>
 <li>{{domxref("HTMLTextAreaElement")}}</li>
 <li>{{domxref("HTMLTimeElement")}}</li>
 <li>{{domxref("HTMLTitleElement")}}</li>
 <li>{{domxref("HTMLTrackElement")}}</li>
 <li>{{domxref("HTMLUListElement")}}</li>
 <li>{{domxref("HTMLUnknownElement")}}</li>
 <li>{{domxref("HTMLVideoElement")}}</li>
</ul>
</div>

<h3 id="Outras_interfaces">Outras interfaces</h3>

<div class="index">
<ul>
 <li>{{domxref("CanvasRenderingContext2D")}}</li>
 <li>{{domxref("CanvasGradient")}}</li>
 <li>{{domxref("CanvasPattern")}}</li>
 <li>{{domxref("TextMetrics")}}</li>
 <li>{{domxref("ImageData")}}</li>
 <li>{{domxref("CanvasPixelArray")}}</li>
 <li>{{domxref("NotifyAudioAvailableEvent")}}</li>
 <li>{{domxref("HTMLAllCollection")}}</li>
 <li>{{domxref("HTMLFormControlsCollection")}}</li>
 <li>{{domxref("HTMLOptionsCollection")}}</li>
 <li>{{domxref("HTMLPropertiesCollection")}}</li>
 <li>{{domxref("DOMStringMap")}}</li>
 <li>{{domxref("RadioNodeList")}}</li>
 <li>{{domxref("MediaError")}}</li>
</ul>
</div>

<h3 id="Obsoleto_HTML_interfaces">Obsoleto HTML interfaces</h3>

<div class="index">
<ul>
 <li>{{domxref("HTMLBaseFontElement")}}</li>
 <li>{{domxref("HTMLIsIndexElement")}}</li>
</ul>
</div>

<h2 id="SVG_interfaces">SVG interfaces</h2>

<h3 id="SVG_elemento_interfaces">SVG elemento  interfaces</h3>

<div class="index">
<ul>
 <li>{{domxref("SVGAElement")}}</li>
 <li>{{domxref("SVGAltGlyphElement")}}</li>
 <li>{{domxref("SVGAltGlyphDefElement")}}</li>
 <li>{{domxref("SVGAltGlyphItemElement")}}</li>
 <li>{{domxref("SVGAnimationElement")}}</li>
 <li>{{domxref("SVGAnimateElement")}}</li>
 <li>{{domxref("SVGAnimateColorElement")}}</li>
 <li>{{domxref("SVGAnimateMotionElement")}}</li>
 <li>{{domxref("SVGAnimateTransformElement")}}</li>
 <li>{{domxref("SVGCircleElement")}}</li>
 <li>{{domxref("SVGClipPathElement")}}</li>
 <li>{{domxref("SVGColorProfileElement")}}</li>
 <li>{{domxref("SVGComponentTransferFunctionElement")}}</li>
 <li>{{domxref("SVGCursorElement")}}</li>
 <li>{{domxref("SVGDefsElement")}}</li>
 <li>{{domxref("SVGDescElement")}}</li>
 <li>{{domxref("SVGElement")}}</li>
 <li>{{domxref("SVGEllipseElement")}}</li>
 <li>{{domxref("SVGFEBlendElement")}}</li>
 <li>{{domxref("SVGFEColorMatrixElement")}}</li>
 <li>{{domxref("SVGFEComponentTransferElement")}}</li>
 <li>{{domxref("SVGFECompositeElement")}}</li>
 <li>{{domxref("SVGFEConvolveMatrixElement")}}</li>
 <li>{{domxref("SVGFEDiffuseLightingElement")}}</li>
 <li>{{domxref("SVGFEDisplacementMapElement")}}</li>
 <li>{{domxref("SVGFEDistantLightElement")}}</li>
 <li>{{domxref("SVGFEFloodElement")}}</li>
 <li>{{domxref("SVGFEGaussianBlurElement")}}</li>
 <li>{{domxref("SVGFEImageElement")}}</li>
 <li>{{domxref("SVGFEMergeElement")}}</li>
 <li>{{domxref("SVGFEMergeNodeElement")}}</li>
 <li>{{domxref("SVGFEMorphologyElement")}}</li>
 <li>{{domxref("SVGFEOffsetElement")}}</li>
 <li>{{domxref("SVGFEPointLightElement")}}</li>
 <li>{{domxref("SVGFESpecularLightingElement")}}</li>
 <li>{{domxref("SVGFESpotLightElement")}}</li>
 <li>{{domxref("SVGFETileElement")}}</li>
 <li>{{domxref("SVGFETurbulenceElement")}}</li>
 <li>{{domxref("SVGFEFuncRElement")}}</li>
 <li>{{domxref("SVGFEFuncGElement")}}</li>
 <li>{{domxref("SVGFEFuncBElement")}}</li>
 <li>{{domxref("SVGFEFuncAElement")}}</li>
 <li>{{domxref("SVGFilterElement")}}</li>
 <li>{{domxref("SVGFilterPrimitiveStandardAttributes")}}</li>
 <li>{{domxref("SVGFontElement")}}</li>
 <li>{{domxref("SVGFontFaceElement")}}</li>
 <li>{{domxref("SVGFontFaceFormatElement")}}</li>
 <li>{{domxref("SVGFontFaceNameElement")}}</li>
 <li>{{domxref("SVGFontFaceSrcElement")}}</li>
 <li>{{domxref("SVGFontFaceUriElement")}}</li>
 <li>{{domxref("SVGForeignObjectElement")}}</li>
 <li>{{domxref("SVGGElement")}}</li>
 <li>{{domxref("SVGGlyphElement")}}</li>
 <li>{{domxref("SVGGlyphRefElement")}}</li>
 <li>{{domxref("SVGGradientElement")}}</li>
 <li>{{domxref("SVGHKernElement")}}</li>
 <li>{{domxref("SVGImageElement")}}</li>
 <li>{{domxref("SVGLinearGradientElement")}}</li>
 <li>{{domxref("SVGLineElement")}}</li>
 <li>{{domxref("SVGMarkerElement")}}</li>
 <li>{{domxref("SVGMaskElement")}}</li>
 <li>{{domxref("SVGMetadataElement")}}</li>
 <li>{{domxref("SVGMissingGlyphElement")}}</li>
 <li>{{domxref("SVGMPathElement")}}</li>
 <li>{{domxref("SVGPathElement")}}</li>
 <li>{{domxref("SVGPatternElement")}}</li>
 <li>{{domxref("SVGPolylineElement")}}</li>
 <li>{{domxref("SVGPolygonElement")}}</li>
 <li>{{domxref("SVGRadialGradientElement")}}</li>
 <li>{{domxref("SVGRectElement")}}</li>
 <li>{{domxref("SVGScriptElement")}}</li>
 <li>{{domxref("SVGSetElement")}}</li>
 <li>{{domxref("SVGStopElement")}}</li>
 <li>{{domxref("SVGStyleElement")}}</li>
 <li>{{domxref("SVGSVGElement")}}</li>
 <li>{{domxref("SVGSwitchElement")}}</li>
 <li>{{domxref("SVGSymbolElement")}}</li>
 <li>{{domxref("SVGTextElement")}}</li>
 <li>{{domxref("SVGTextPathElement")}}</li>
 <li>{{domxref("SVGTitleElement")}}</li>
 <li>{{domxref("SVGTRefElement")}}</li>
 <li>{{domxref("SVGTSpanElement")}}</li>
 <li>{{domxref("SVGUseElement")}}</li>
 <li>{{domxref("SVGViewElement")}}</li>
 <li>{{domxref("SVGVKernElement")}}</li>
</ul>
</div>

<h3 id="SVG_data_type_interfaces">SVG data type interfaces</h3>

<p>Aqui estão a DOM API para tipos de dados utilizados nas definições de propriedades SVG e atributos.</p>

<div class="note">
<p><strong>Nota:</strong> Starting in {{Gecko("5.0")}}, the following SVG-related DOM interfaces representing lists of objects are now indexable and can be accessed ; in addition, they have a length property indicating the number of items in the lists: {{domxref("SVGLengthList")}}, {{domxref("SVGNumberList")}}, {{domxref("SVGPathSegList")}}, and {{domxref("SVGPointList")}}.</p>
</div>

<h4 id="Static_type">Static type</h4>

<div class="index">
<ul>
 <li>{{domxref("SVGAngle")}}</li>
 <li>{{domxref("SVGColor")}}</li>
 <li>{{domxref("SVGICCColor")}}</li>
 <li>{{domxref("SVGElementInstance")}}</li>
 <li>{{domxref("SVGElementInstanceList")}}</li>
 <li>{{domxref("SVGLength")}}</li>
 <li>{{domxref("SVGLengthList")}}</li>
 <li>{{domxref("SVGMatrix")}}</li>
 <li>{{domxref("SVGNumber")}}</li>
 <li>{{domxref("SVGNumberList")}}</li>
 <li>{{domxref("SVGPaint")}}</li>
 <li>{{domxref("SVGPoint")}}</li>
 <li>{{domxref("SVGPointList")}}</li>
 <li>{{domxref("SVGPreserveAspectRatio")}}</li>
 <li>{{domxref("SVGRect")}}</li>
 <li>{{domxref("SVGStringList")}}</li>
 <li>{{domxref("SVGTransform")}}</li>
 <li>{{domxref("SVGTransformList")}}</li>
</ul>
</div>

<h4 id="Animated_type">Animated type</h4>

<div class="index">
<ul>
 <li>{{domxref("SVGAnimatedAngle")}}</li>
 <li>{{domxref("SVGAnimatedBoolean")}}</li>
 <li>{{domxref("SVGAnimatedEnumeration")}}</li>
 <li>{{domxref("SVGAnimatedInteger")}}</li>
 <li>{{domxref("SVGAnimatedLength")}}</li>
 <li>{{domxref("SVGAnimatedLengthList")}}</li>
 <li>{{domxref("SVGAnimatedNumber")}}</li>
 <li>{{domxref("SVGAnimatedNumberList")}}</li>
 <li>{{domxref("SVGAnimatedPreserveAspectRatio")}}</li>
 <li>{{domxref("SVGAnimatedRect")}}</li>
 <li>{{domxref("SVGAnimatedString")}}</li>
 <li>{{domxref("SVGAnimatedTransformList")}}</li>
</ul>
</div>

<h3 id="SMIL_related_interfaces">SMIL related interfaces</h3>

<div class="index">
<ul>
 <li>{{domxref("ElementTimeControl")}}</li>
 <li>{{domxref("TimeEvent")}}</li>
</ul>
</div>

<h3 id="Other_SVG_interfaces">Other SVG interfaces</h3>

<div class="index">
<ul>
 <li>{{domxref("SVGAnimatedPathData")}}</li>
 <li>{{domxref("SVGAnimatedPoints")}}</li>
 <li>{{domxref("SVGColorProfileRule")}}</li>
 <li>{{domxref("SVGCSSRule")}}</li>
 <li>{{domxref("SVGExternalResourcesRequired")}}</li>
 <li>{{domxref("SVGFitToViewBox")}}</li>
 <li>{{domxref("SVGLangSpace")}}</li>
 <li>{{domxref("SVGLocatable")}}</li>
 <li>{{domxref("SVGRenderingIntent")}}</li>
 <li>{{domxref("SVGStylable")}}</li>
 <li>{{domxref("SVGTests")}}</li>
 <li>{{domxref("SVGTextContentElement")}}</li>
 <li>{{domxref("SVGTextPositioningElement")}}</li>
 <li>{{domxref("SVGTransformable")}}</li>
 <li>{{domxref("SVGUnitTypes")}}</li>
 <li>{{domxref("SVGURIReference")}}</li>
 <li>{{domxref("SVGViewSpec")}}</li>
 <li>{{domxref("SVGZoomAndPan")}}</li>
</ul>
</div>

<h2 id="See_also" name="See_also">Veja também</h2>

<ul>
 <li><a href="/en-US/docs/DOM/DOM_Reference/Examples">DOM Exemplos</a></li>
</ul>
