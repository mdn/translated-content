---
title: Modelo de Objetos del Documento (DOM)
slug: Web/API/Document_Object_Model
l10n:
  sourceCommit: f45409ba2169ff05e433d21aa4ee0424079916b8
---

{{DefaultAPISidebar("DOM")}}

El **Modelo de Objetos del Documento** (**DOM**, por sus siglas en Inglés) conecta páginas web a scripts o lenguajes de programación al representar la estructura de un documento, como el HTML que representa una página web, en la memoria. Por lo general, se refiere a JavaScript, aunque el modelado de documentos HTML, SVG o XML como objetos no forma parte del lenguaje principal de JavaScript.

El DOM representa un documento con un árbol lógico. Cada rama del árbol termina en un nodo y cada nodo contiene objetos. Los métodos DOM permiten el acceso programático al árbol. Con ellos, puede cambiar la estructura, el estilo o el contenido del documento.

Los nodos también pueden tener controladores de eventos adjuntos. Una vez que se activa un evento, los controladores de eventos se ejecutan.

Para saber más sobre qué es el DOM y cómo representa los documentos, consulta nuestro artículo [Introducción al DOM](/es/docs/Web/API/Document_Object_Model/Introduction).

## Interfaces DOM

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

### Interfaces DOM obsoletas

El modelo de objetos del documento se ha simplificado mucho. Para lograr esto, se han eliminado las siguientes interfaces presentes en los diferentes DOM nivel 3 o especificaciones anteriores. No está claro si algunos podrán reintroducirse en el futuro o no, pero por el momento deben considerarse obsoletos y deben evitarse:

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

Un documento que contiene HTML se describe utilizando la interfaz {{DOMxRef("Document")}}, que se amplía mediante la especificación HTML para incluir varias características específicas de HTML. En particular, la interfaz {{domxref("Element")}} se mejora para convertirse en {{domxref("HTMLElement")}} y varias subclases, cada una de las cuales representa uno (o una familia de parientes cercanos) de los elementos.

La API de HTML DOM brinda acceso a varias funciones del navegador, como pestañas y ventanas, estilos y hojas de estilo CSS, historial del navegador, etc. Estas interfaces se analizan con más detalle en la documentación de [la API de HTML DOM](/es/docs/Web/API/HTML_DOM_API).

## Interfaces SVG

### Interfaces de elementos SVG

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

### Interfaces de tipo de datos SVG

Estas son las API de DOM para los tipos de datos utilizados en las definiciones de propiedades y atributos de SVG.

#### Tipos estáticos

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

#### Tipos animados

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

### Interfaces relacionadas con SMIL

- {{DOMxRef("ElementTimeControl")}}
- {{DOMxRef("TimeEvent")}}

### Otras interfaces SVG

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

## Especificaciones

{{Specifications}}

## Véase también

- [Ejemplos de DOM](/es/docs/Web/API/Document_Object_Model/Examples)
- [Módelos de Objetos de CSS (CSSOM, por sus siglas en Inglés)](/es/docs/Web/API/CSS_Object_Model)
