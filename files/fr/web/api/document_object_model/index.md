---
title: Référence du DOM
slug: Web/API/Document_Object_Model
---

{{DefaultAPISidebar("DOM")}}

Le **_Document Object Model_** ou **DOM** (pour modèle objet de document) est une interface de programmation pour les documents HTML, XML et SVG. Il fournit une représentation structurée du document sous forme d'un arbre et définit la façon dont la structure peut être manipulée par les programmes, en termes de style et de contenu. Le DOM représente le document comme un ensemble de nœuds et d'objets possédant des propriétés et des méthodes. Les nœuds peuvent également avoir des gestionnaires d'événements qui se déclenchent lorsqu'un événement se produit. Cela permet de manipuler des pages web grâce à des scripts et/ou des langages de programmation. Les nœuds peuvent être associés à des gestionnaires d'événements. Une fois qu'un événement est déclenché, les gestionnaires d'événements sont exécutés.

Pour mieux comprendre le fonctionnement du DOM, [une introduction est disponible](/fr/docs/Web/API/Document_Object_Model/Introduction).

## Interfaces du DOM

- {{domxref("Attr")}}
- {{domxref("CharacterData")}}
- {{domxref("ChildNode")}} {{experimental_inline}}
- {{domxref("Comment")}}
- {{domxref("CustomEvent")}}
- {{domxref("Document")}}
- {{domxref("DocumentFragment")}}
- {{domxref("DocumentType")}}
- {{domxref("DOMError")}} {{deprecated_inline}}
- {{domxref("DOMException")}}
- {{domxref("DOMImplementation")}}
- {{domxref("DOMString")}}
- {{domxref("DOMTimeStamp")}}
- {{domxref("DOMSettableTokenList")}}
- {{domxref("DOMStringList")}}
- {{domxref("DOMTokenList")}}
- {{domxref("Element")}}
- {{domxref("EventTarget")}}
- {{domxref("HTMLCollection")}}
- {{domxref("MutationObserver")}}
- {{domxref("Event")}}
- {{domxref("MutationRecord")}}
- {{domxref("NamedNodeMap")}}
- {{domxref("Node")}}
- {{domxref("NodeFilter")}}
- {{domxref("NodeIterator")}}
- {{domxref("NodeList")}}
- {{domxref("NonDocumentTypeChildNode")}}
- {{domxref("ParentNode")}}
- {{domxref("ProcessingInstruction")}}
- {{domxref("Selection")}}{{experimental_inline}}
- {{domxref("Range")}}
- {{domxref("Text")}}
- {{domxref("TextDecoder")}} {{experimental_inline}}
- {{domxref("TextEncoder")}} {{experimental_inline}}
- {{domxref("TimeRanges")}}
- {{domxref("TreeWalker")}}
- {{domxref("URL")}}
- {{domxref("Window")}}
- {{domxref("Worker")}}
- {{domxref("XMLDocument")}} {{experimental_inline}}

## Interfaces obsolètes du DOM

Le DOM a été simplifié au cours du temps. Pour cette raison, les interfaces qui suivent, présentes dans la spécification du DOM de niveau 3 ou des niveaux antérieurs, ont été supprimées. Bien qu'il ne soit pas certain qu'elles ne soient pas réintroduites, elles doivent être considérées comme obsolètes et il faut éviter de les utiliser :

- {{domxref("CDATASection")}}
- {{domxref("DocumentTouch")}}
- {{domxref("DOMConfiguration")}}
- {{domxref("DOMErrorHandler")}}
- {{domxref("DOMImplementationList")}}
- {{domxref("DOMImplementationRegistry")}}
- {{domxref("DOMImplementationSource")}}
- {{domxref("DOMLocator")}}
- {{domxref("DOMObject")}}
- {{domxref("DOMUserData")}}
- {{domxref("ElementTraversal")}}
- {{domxref("Entity")}}
- {{domxref("EntityReference")}}
- {{domxref("NamedNodeMap")}}
- {{domxref("NameList")}}
- {{domxref("Notation")}}
- {{domxref("TypeInfo")}}
- {{domxref("UserDataHandler")}}

## Interfaces HTML

Un document contenant du HTML est décrit grâce à l'interface {{domxref("HTMLDocument")}}. On notera que la spécification HTML étend également l'interface {{domxref("Document")}}.

Un objet `HTMLDocument` donne également accès à différentes fonctionnalités liées au navigateur comme l'onglet ou la fenêtre dans laquelle la page est dessinée, notamment grâce à l'interface {{domxref("Window")}}. On peut accéder à la mise en forme de la page via {{domxref("window.style")}} (généralement le CSS associé au document), à l'historique de navigation relatif au contexte via {{domxref("window.history")}} et enfin à la sélection faite dans le document via {{domxref("Selection")}}.

### Interfaces des éléments HTML

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

### Autres interfaces

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

### Interfaces HTML obsolètes

- {{domxref("HTMLBaseFontElement")}}
- {{domxref("HTMLIsIndexElement")}}

## Interfaces SVG

### Interfaces des éléments SVG

- {{domxref("SVGAElement")}}
- {{domxref("SVGAltGlyphElement")}} {{deprecated_inline}}
- {{domxref("SVGAltGlyphDefElement")}} {{deprecated_inline}}
- {{domxref("SVGAltGlyphItemElement")}} {{deprecated_inline}}
- {{domxref("SVGAnimationElement")}}
- {{domxref("SVGAnimateElement")}}
- {{domxref("SVGAnimateColorElement")}} {{deprecated_inline}}
- {{domxref("SVGAnimateMotionElement")}}
- {{domxref("SVGAnimateTransformElement")}}
- {{domxref("SVGCircleElement")}}
- {{domxref("SVGClipPathElement")}}
- {{domxref("SVGColorProfileElement")}} {{deprecated_inline}}
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
- {{domxref("SVGFEDropShadowElement")}}
- {{domxref("SVGFEFloodElement")}}
- {{domxref("SVGFEFuncAElement")}}
- {{domxref("SVGFEFuncBElement")}}
- {{domxref("SVGFEFuncGElement")}}
- {{domxref("SVGFEFuncRElement")}}
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
- {{domxref("SVGFilterElement")}}
- {{domxref("SVGFilterPrimitiveStandardAttributes")}}
- {{domxref("SVGFontElement")}} {{deprecated_inline}}
- {{domxref("SVGFontFaceElement")}} {{deprecated_inline}}
- {{domxref("SVGFontFaceFormatElement")}} {{deprecated_inline}}
- {{domxref("SVGFontFaceNameElement")}} {{deprecated_inline}}
- {{domxref("SVGFontFaceSrcElement")}} {{deprecated_inline}}
- {{domxref("SVGFontFaceUriElement")}} {{deprecated_inline}}
- {{domxref("SVGForeignObjectElement")}}
- {{domxref("SVGGElement")}}
- {{domxref("SVGGeometryElement")}}
- {{domxref("SVGGlyphElement")}} {{deprecated_inline}}
- {{domxref("SVGGlyphRefElement")}} {{deprecated_inline}}
- {{domxref("SVGGradientElement")}}
- {{domxref("SVGGraphicsElement")}}
- {{domxref("SVGHatchElement")}} {{experimental_inline}}
- {{domxref("SVGHatchpathElement")}} {{experimental_inline}}
- {{domxref("SVGHKernElement")}} {{deprecated_inline}}
- {{domxref("SVGImageElement")}}
- {{domxref("SVGLinearGradientElement")}}
- {{domxref("SVGLineElement")}}
- {{domxref("SVGMarkerElement")}} {{experimental_inline}}
- {{domxref("SVGMaskElement")}}
- {{domxref("SVGMeshElement")}} {{experimental_inline}}
- {{domxref("SVGMeshGradientElement")}} {{experimental_inline}}
- {{domxref("SVGMeshpatchElement")}} {{experimental_inline}}
- {{domxref("SVGMeshrowElement")}} {{experimental_inline}}
- {{domxref("SVGMetadataElement")}}
- {{domxref("SVGMissingGlyphElement")}} {{deprecated_inline}}
- {{domxref("SVGMPathElement")}}
- {{domxref("SVGPathElement")}}
- {{domxref("SVGPatternElement")}}
- {{domxref("SVGPolylineElement")}}
- {{domxref("SVGPolygonElement")}}
- {{domxref("SVGRadialGradientElement")}}
- {{domxref("SVGRectElement")}}
- {{domxref("SVGScriptElement")}}
- {{domxref("SVGSetElement")}}
- {{domxref("SVGSolidcolorElement")}} {{experimental_inline}}
- {{domxref("SVGStopElement")}}
- {{domxref("SVGStyleElement")}}
- {{domxref("SVGSVGElement")}}
- {{domxref("SVGSwitchElement")}}
- {{domxref("SVGSymbolElement")}}
- {{domxref("SVGTextContentElement")}}
- {{domxref("SVGTextElement")}}
- {{domxref("SVGTextPathElement")}}
- {{domxref("SVGTextPositioningElement")}}
- {{domxref("SVGTitleElement")}}
- {{domxref("SVGTRefElement")}} {{deprecated_inline}}
- {{domxref("SVGTSpanElement")}}
- {{domxref("SVGUseElement")}}
- {{domxref("SVGUnknownElement")}} {{experimental_inline}}
- {{domxref("SVGViewElement")}}
- {{domxref("SVGVKernElement")}} {{deprecated_inline}}

### Interfaces pour les types de donnée SVG

Voici l'API du DOM pour les types de donnée utilisés pour les propriétés et attributs SVG.

> **Note :** À partir de Gecko 5.0, les interfaces suivantes relatives à SVG et qui représentent des listes d'objets sont indexées et permettent d'y accéder. Elles possèdent en plus une propriété de longueur qui indique le nombre d'éléments dans la liste : {{domxref("SVGLengthList")}}, {{domxref("SVGNumberList")}}, {{domxref("SVGPathSegList")}} et {{domxref("SVGPointList")}}.

#### Interfaces statiques

- {{domxref("SVGAngle")}}
- {{domxref("SVGColor")}} {{deprecated_inline}}
- {{domxref("SVGICCColor")}} {{deprecated_inline}}
- {{domxref("SVGElementInstance")}}
- {{domxref("SVGElementInstanceList")}}
- {{domxref("SVGLength")}}
- {{domxref("SVGLengthList")}}
- {{domxref("SVGMatrix")}} {{deprecated_inline}}
- {{domxref("SVGNameList")}}
- {{domxref("SVGNumber")}}
- {{domxref("SVGNumberList")}}
- {{domxref("SVGPaint")}}
- {{domxref("SVGPathSeg")}} {{deprecated_inline}}
- {{domxref("SVGPathSegClosePath")}} {{deprecated_inline}}
- {{domxref("SVGPathSegMovetoAbs")}} {{deprecated_inline}}
- {{domxref("SVGPathSegMovetoRel")}} {{deprecated_inline}}
- {{domxref("SVGPathSegLinetoAbs")}} {{deprecated_inline}}
- {{domxref("SVGPathSegLinetoRel")}} {{deprecated_inline}}
- {{domxref("SVGPathSegCurvetoCubicAbs")}} {{deprecated_inline}}
- {{domxref("SVGPathSegCurvetoCubicRel")}} {{deprecated_inline}}
- {{domxref("SVGPathSegCurvetoQuadraticAbs")}} {{deprecated_inline}}
- {{domxref("SVGPathSegCurvetoQuadraticRel")}} {{deprecated_inline}}
- {{domxref("SVGPathSegArcAbs")}} {{deprecated_inline}}
- {{domxref("SVGPathSegArcRel")}} {{deprecated_inline}}
- {{domxref("SVGPathSegLinetoHorizontalAbs")}} {{deprecated_inline}}
- {{domxref("SVGPathSegLinetoHorizontalRel")}} {{deprecated_inline}}
- {{domxref("SVGPathSegLinetoVerticalAbs")}} {{deprecated_inline}}
- {{domxref("SVGPathSegLinetoVerticalRel")}} {{deprecated_inline}}
- {{domxref("SVGPathSegCurvetoCubicSmoothAbs")}} {{deprecated_inline}}
- {{domxref("SVGPathSegCurvetoCubicSmoothRel")}} {{deprecated_inline}}
- {{domxref("SVGPathSegCurvetoQuadraticSmoothAbs")}} {{deprecated_inline}}
- {{domxref("SVGPathSegCurvetoQuadraticSmoothRel")}} {{deprecated_inline}}
- {{domxref("SVGPathSegList")}} {{deprecated_inline}}
- {{domxref("SVGPoint")}} {{deprecated_inline}}
- {{domxref("SVGPointList")}} {{deprecated_inline}}
- {{domxref("SVGPreserveAspectRatio")}}
- {{domxref("SVGRect")}} {{deprecated_inline}}
- {{domxref("SVGStringList")}}
- {{domxref("SVGTransform")}}
- {{domxref("SVGTransformList")}}

#### Interfaces animées

- {{domxref("SVGAnimatedAngle")}}
- {{domxref("SVGAnimatedBoolean")}}
- {{domxref("SVGAnimatedEnumeration")}}
- {{domxref("SVGAnimatedInteger")}}
- {{domxref("SVGAnimatedLength")}}
- {{domxref("SVGAnimatedLengthList")}}
- {{domxref("SVGAnimatedNumber")}}
- {{domxref("SVGAnimatedNumberList")}}
- {{domxref("SVGAnimatedPathData")}} {{deprecated_inline}}
- {{domxref("SVGAnimatedPoints")}}
- {{domxref("SVGAnimatedPreserveAspectRatio")}}
- {{domxref("SVGAnimatedRect")}}
- {{domxref("SVGAnimatedString")}}
- {{domxref("SVGAnimatedTransformList")}}

### Interfaces relatives à SMIL

- {{domxref("ElementTimeControl")}}
- {{domxref("TimeEvent")}}

### Autres interfaces SVG

- {{domxref("GetSVGDocument")}}
- {{domxref("ShadowAnimation")}}
- {{domxref("SVGColorProfileRule")}} {{deprecated_inline}}
- {{domxref("SVGCSSRule")}} {{deprecated_inline}}
- {{domxref("SVGDocument")}}
- {{domxref("SVGException")}} {{deprecated_inline}}
- {{domxref("SVGExternalResourcesRequired")}} {{deprecated_inline}}
- {{domxref("SVGFitToViewBox")}}
- {{domxref("SVGLangSpace")}} {{deprecated_inline}}
- {{domxref("SVGLocatable")}} {{deprecated_inline}}
- {{domxref("SVGRenderingIntent")}} {{deprecated_inline}}
- {{domxref("SVGStylable")}} {{deprecated_inline}}
- {{domxref("SVGTests")}}
- {{domxref("SVGTransformable")}} {{deprecated_inline}}
- {{domxref("SVGUnitTypes")}}
- {{domxref("SVGUseElementShadowRoot")}}
- {{domxref("SVGURIReference")}}
- {{domxref("SVGViewSpec")}} {{deprecated_inline}}
- {{domxref("SVGZoomAndPan")}}
- {{domxref("SVGZoomEvent")}} {{deprecated_inline}}

## Voir aussi

- [Exemples appliqués pour le DOM](/fr/docs/Web/API/Référence_du_DOM_Gecko/Exemples)
