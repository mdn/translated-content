---
title: Interfaces déplacées dans Firefox 3.6
slug: Mozilla/Firefox/Releases/3.6/Interfaces_moved
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Ces interfaces ont été déplacées vers de nouveaux emplacements dans l'arborescence de Gecko 1.9.2.
Cela n'intéresse généralement que les personnes développant directement sur Mozilla.

## Interfaces DOM déplacées

Les interfaces suivantes ont été déplacées de `dom/public/idl/base/` vers `dom/interfaces/base/`&nbsp;:

| De                         | Vers                     |
| -------------------------- | ------------------------ |
| `nsIBrowserDOMWindow`      | `nsIDOMBarProp`          |
| `nsIDOMCRMFObject`         | `nsIDOMChromeWindow`     |
| `nsIDOMClientInformation`  | `nsIDOMClientRect`       |
| `nsIDOMClientRectList`     | `nsIDOMConstructor`      |
| `nsIDOMCrypto`             | `nsIDOMHistory`          |
| `nsIDOMJSWindow`           | `nsIDOMLocation`         |
| `nsIDOMMimeType`           | `nsIDOMMimeTypeArray`    |
| `nsIDOMModalContentWindow` | `nsIDOMNSFeatureFactory` |
| `nsIDOMNavigator`          | `nsIDOMPkcs11`           |
| `nsIDOMPlugin`             | `nsIDOMPluginArray`      |
| `nsIDOMScreen`             | `nsIDOMWindow`           |
| `nsIDOMWindow2`            | `nsIDOMWindowCollection` |
| `nsIDOMWindowInternal`     | `nsIDOMWindowUtils`      |

Les interfaces suivantes ont été déplacées de `dom/public/idl/core/` vers `dom/interfaces/core/`&nbsp;:

| De                   | Vers                          |
| -------------------- | ----------------------------- |
| `nsIDOM3Attr`        | `nsIDOM3Document`             |
| `nsIDOM3Node`        | `nsIDOM3Text`                 |
| `nsIDOM3TypeInfo`    | `nsIDOMAttr`                  |
| `nsIDOMCDATASection` | `nsIDOMCharacterData`         |
| `nsIDOMComment`      | `nsIDOMDOMConfiguration`      |
| `nsIDOMDOMError`     | `nsIDOMDOMErrorHandler`       |
| `nsIDOMDOMException` | `nsIDOMDOMImplementation`     |
| `nsIDOMDOMLocator`   | `nsIDOMDOMStringList`         |
| `nsIDOMDocument`     | `nsIDOMDocumentFragment`      |
| `nsIDOMDocumentType` | `nsIDOMElement`               |
| `nsIDOMEntity`       | `nsIDOMEntityReference`       |
| `nsIDOMNSDocument`   | `nsIDOMNSEditableElement`     |
| `nsIDOMNSElement`    | `nsIDOMNameList`              |
| `nsIDOMNamedNodeMap` | `nsIDOMNode`                  |
| `nsIDOMNodeList`     | `nsIDOMNodeSelector`          |
| `nsIDOMNotation`     | `nsIDOMProcessingInstruction` |
| `nsIDOMText`         | `nsIDOMUserDataHandler`       |
| `nsIDOMXMLDocument`  |                               |

Les interfaces suivantes ont été déplacées de `dom/public/idl/css/` vers `dom/interfaces/css/`&nbsp;:

| De                            | Vers                       |
| ----------------------------- | -------------------------- |
| `nsIDOMCSS2Properties`        | `nsIDOMCSSCharsetRule`     |
| `nsIDOMCSSFontFaceRule`       | `nsIDOMCSSImportRule`      |
| `nsIDOMCSSMediaRule`          | `nsIDOMCSSMozDocumentRule` |
| `nsIDOMCSSPageRule`           | `nsIDOMCSSPrimitiveValue`  |
| `nsIDOMCSSRule`               | `nsIDOMCSSRuleList`        |
| `nsIDOMCSSStyleDeclaration`   | `nsIDOMCSSStyleRule`       |
| `nsIDOMCSSStyleSheet`         | `nsIDOMCSSUnknownRule`     |
| `nsIDOMCSSValue`              | `nsIDOMCSSValueList`       |
| `nsIDOMCounter`               | `nsIDOMDocumentCSS`        |
| `nsIDOMElementCSSInlineStyle` | `nsIDOMNSCSS2Properties`   |
| `nsIDOMNSRGBAColor`           | `nsIDOMRGBColor`           |
| `nsIDOMRect`                  | `nsIDOMViewCSS`            |

Les interfaces suivantes ont été déplacées de `dom/public/idl/events/` vers `dom/interfaces/events/`&nbsp;:

| De                          | Vers                       |
| --------------------------- | -------------------------- |
| `nsIDOM3DocumentEvent`      | `nsIDOM3EventTarget`       |
| `nsIDOMBeforeUnloadEvent`   | `nsIDOMCommandEvent`       |
| `nsIDOMDataContainerEvent`  | `nsIDOMDataTransfer`       |
| `nsIDOMDocumentEvent`       | `nsIDOMDragEvent`          |
| `nsIDOMEvent`               | `nsIDOMEventGroup`         |
| `nsIDOMEventListener`       | `nsIDOMEventTarget`        |
| `nsIDOMKeyEvent`            | `nsIDOMMessageEvent`       |
| `nsIDOMMouseEvent`          | `nsIDOMMouseScrollEvent`   |
| `nsIDOMMutationEvent`       | `nsIDOMNSEvent`            |
| `nsIDOMNSEventTarget`       | `nsIDOMNSMouseEvent`       |
| `nsIDOMNSUIEvent`           | `nsIDOMNotifyPaintEvent`   |
| `nsIDOMPageTransitionEvent` | `nsIDOMPopupBlockedEvent`  |
| `nsIDOMProgressEvent`       | `nsIDOMSimpleGestureEvent` |
| `nsIDOMSmartCardEvent`      | `nsIDOMUIEvent`            |

Les interfaces suivantes ont été déplacées de `dom/public/idl/geolocation/` vers `dom/interfaces/geolocation/`&nbsp;:

| De                          | Vers                             |
| --------------------------- | -------------------------------- |
| `nsIDOMGeoGeolocation`      | `nsIDOMGeoPosition`              |
| `nsIDOMGeoPositionCallback` | `nsIDOMGeoPositionCoords`        |
| `nsIDOMGeoPositionError`    | `nsIDOMGeoPositionErrorCallback` |
| `nsIDOMGeoPositionOptions`  | `nsIDOMNavigatorGeolocation`     |
| `nsIGeolocationProvider`    | `nsIGeolocationProvider`         |

Les interfaces suivantes ont été déplacées de `dom/public/idl/html/` vers `dom/interfaces/html/`&nbsp;:

| De                            | Vers                          |
| ----------------------------- | ----------------------------- |
| `nsIDOMHTMLAnchorElement`     | `nsIDOMHTMLAppletElement`     |
| `nsIDOMHTMLAreaElement`       | `nsIDOMHTMLAudioElement`      |
| `nsIDOMHTMLBRElement`         | `nsIDOMHTMLBaseElement`       |
| `nsIDOMHTMLBaseFontElement`   | `nsIDOMHTMLBodyElement`       |
| `nsIDOMHTMLButtonElement`     | `nsIDOMHTMLByteRanges`        |
| `nsIDOMHTMLCanvasElement`     | `nsIDOMHTMLCollection`        |
| `nsIDOMHTMLDListElement`      | `nsIDOMHTMLDirectoryElement`  |
| `nsIDOMHTMLDivElement`        | `nsIDOMHTMLDocument`          |
| `nsIDOMHTMLElement`           | `nsIDOMHTMLEmbedElement`      |
| `nsIDOMHTMLFieldSetElement`   | `nsIDOMHTMLFontElement`       |
| `nsIDOMHTMLFormElement`       | `nsIDOMHTMLFrameElement`      |
| `nsIDOMHTMLFrameSetElement`   | `nsIDOMHTMLHRElement`         |
| `nsIDOMHTMLHeadElement`       | `nsIDOMHTMLHeadingElement`    |
| `nsIDOMHTMLHtmlElement`       | `nsIDOMHTMLIFrameElement`     |
| `nsIDOMHTMLImageElement`      | `nsIDOMHTMLInputElement`      |
| `nsIDOMHTMLIsIndexElement`    | `nsIDOMHTMLLIElement`         |
| `nsIDOMHTMLLabelElement`      | `nsIDOMHTMLLegendElement`     |
| `nsIDOMHTMLLinkElement`       | `nsIDOMHTMLMapElement`        |
| `nsIDOMHTMLMediaElement`      | `nsIDOMHTMLMediaError`        |
| `nsIDOMHTMLMenuElement`       | `nsIDOMHTMLMetaElement`       |
| `nsIDOMHTMLModElement`        | `nsIDOMHTMLOListElement`      |
| `nsIDOMHTMLObjectElement`     | `nsIDOMHTMLOptGroupElement`   |
| `nsIDOMHTMLOptionElement`     | `nsIDOMHTMLOptionsCollection` |
| `nsIDOMHTMLParagraphElement`  | `nsIDOMHTMLParamElement`      |
| `nsIDOMHTMLPreElement`        | `nsIDOMHTMLQuoteElement`      |
| `nsIDOMHTMLScriptElement`     | `nsIDOMHTMLSelectElement`     |
| `nsIDOMHTMLSourceElement`     | `nsIDOMHTMLStyleElement`      |
| `nsIDOMHTMLTableCaptionElem`  | `nsIDOMHTMLTableCellElement`  |
| `nsIDOMHTMLTableColElement`   | `nsIDOMHTMLTableElement`      |
| `nsIDOMHTMLTableRowElement`   | `nsIDOMHTMLTableSectionElem`  |
| `nsIDOMHTMLTextAreaElement`   | `nsIDOMHTMLTimeRanges`        |
| `nsIDOMHTMLTitleElement`      | `nsIDOMHTMLUListElement`      |
| `nsIDOMHTMLVideoElement`      | `nsIDOMHTMLVoidCallback`      |
| `nsIDOMNSHTMLAnchorElement`   | `nsIDOMNSHTMLAnchorElement2`  |
| `nsIDOMNSHTMLAreaElement`     | `nsIDOMNSHTMLAreaElement2`    |
| `nsIDOMNSHTMLButtonElement`   | `nsIDOMNSHTMLDocument`        |
| `nsIDOMNSHTMLElement`         | `nsIDOMNSHTMLFormControlList` |
| `nsIDOMNSHTMLFormElement`     | `nsIDOMNSHTMLFrameElement`    |
| `nsIDOMNSHTMLHRElement`       | `nsIDOMNSHTMLImageElement`    |
| `nsIDOMNSHTMLInputElement`    | `nsIDOMNSHTMLOptionCollectn`  |
| `nsIDOMNSHTMLOptionElement`   | `nsIDOMNSHTMLSelectElement`   |
| `nsIDOMNSHTMLTextAreaElement` | `nsIDOMNSXBLFormControl`      |

Les interfaces suivantes ont été déplacées de `dom/public/idl/json/` vers `dom/interfaces/json/`&nbsp;:

| De        | Vers      |
| --------- | --------- |
| `nsIJSON` | `nsIJSON` |

Les interfaces suivantes ont été déplacées de `dom/public/idl/ls/` vers `dom/interfaces/load-save/`&nbsp;:

| De                          | Vers                       |
| --------------------------- | -------------------------- |
| `nsIDOMDOMImplementationLS` | `nsIDOMLSException`        |
| `nsIDOMLSInput`             | `nsIDOMLSLoadEvent`        |
| `nsIDOMLSOutput`            | `nsIDOMLSParser`           |
| `nsIDOMLSParserFilter`      | `nsIDOMLSProgressEvent`    |
| `nsIDOMLSResourceResolver`  | `nsIDOMLSSerializer`       |
| `nsIDOMLSSerializerFilter`  | `nsIDOMLSSerializerFilter` |

Les interfaces suivantes ont été déplacées de `dom/public/idl/offline/` vers `dom/interfaces/offline/`&nbsp;:

| De                          | Vers                        |
| --------------------------- | --------------------------- |
| `nsIDOMLoadStatus`          | `nsIDOMLoadStatusEvent`     |
| `nsIDOMOfflineResourceList` | `nsIDOMOfflineResourceList` |

Les interfaces suivantes ont été déplacées de `dom/public/idl/range/` vers `dom/interfaces/range/`&nbsp;:

| De                    | Vers                   |
| --------------------- | ---------------------- |
| `nsIDOMDocumentRange` | `nsIDOMNSRange`        |
| `nsIDOMRange`         | `nsIDOMRangeException` |

Cette interface a été déplacée de `dom/public/idl/smil` vers `dom/interfaces/smil/`&nbsp;:

| De                         | Vers                       |
| -------------------------- | -------------------------- |
| `nsIDOMElementTimeControl` | `nsIDOMElementTimeControl` |

Les interfaces suivantes ont été déplacées de `dom/public/idl/storage/` vers `dom/interfaces/storage/`&nbsp;:

| De                     | Vers                  |
| ---------------------- | --------------------- |
| `nsIDOMStorage`        | `nsIDOMStorageEvent`  |
| `nsIDOMStorageItem`    | `nsIDOMStorageList`   |
| `nsIDOMStorageManager` | `nsIDOMStorageWindow` |
| `nsIDOMToString`       | `nsIDOMToString`      |

Les interfaces suivantes ont été déplacées de `dom/public/idl/stylesheets/` vers `dom/interfaces/stylesheets/`&nbsp;:

| De                    | Vers                    |
| --------------------- | ----------------------- |
| `nsIDOMDocumentStyle` | `nsIDOMLinkStyle`       |
| `nsIDOMMediaList`     | `nsIDOMNSDocumentStyle` |
| `nsIDOMStyleSheet`    | `nsIDOMStyleSheetList`  |

Les interfaces suivantes ont été déplacées de `dom/public/idl/svg/` vers `dom/interfaces/svg/`&nbsp;:

| De                                 | Vers                        |
| ---------------------------------- | --------------------------- |
| `nsIDOMGetSVGDocument`             | `nsIDOMSVGAElement`         |
| `nsIDOMSVGAngle`                   | `nsIDOMSVGAnimPresAspRatio` |
| `nsIDOMSVGAnimTransformList`       | `nsIDOMSVGAnimateElement`   |
| `nsIDOMSVGAnimateTransformElement` | `nsIDOMSVGAnimatedAngle`    |
| `nsIDOMSVGAnimatedBoolean`         | `nsIDOMSVGAnimatedEnum`     |
| `nsIDOMSVGAnimatedInteger`         | `nsIDOMSVGAnimatedLength`   |
| `nsIDOMSVGAnimatedLengthList`      | `nsIDOMSVGAnimatedNumber`   |
| `nsIDOMSVGAnimatedNumberList`      | `nsIDOMSVGAnimatedPathData` |
| `nsIDOMSVGAnimatedPoints`          | `nsIDOMSVGAnimatedRect`     |
| `nsIDOMSVGAnimatedString`          | `nsIDOMSVGAnimationElement` |
| `nsIDOMSVGCircleElement`           | `nsIDOMSVGClipPathElement`  |
| `nsIDOMSVGDefsElement`             | `nsIDOMSVGDescElement`      |
| `nsIDOMSVGDocument`                | `nsIDOMSVGElement`          |
| `nsIDOMSVGEllipseElement`          | `nsIDOMSVGEvent`            |
| `nsIDOMSVGException`               | `nsIDOMSVGFilterElement`    |
| `nsIDOMSVGFilters`                 | `nsIDOMSVGFitToViewBox`     |
| `nsIDOMSVGForeignObjectElem`       | `nsIDOMSVGGElement`         |
| `nsIDOMSVGGradientElement`         | `nsIDOMSVGImageElement`     |
| `nsIDOMSVGLength`                  | `nsIDOMSVGLengthList`       |
| `nsIDOMSVGLineElement`             | `nsIDOMSVGLocatable`        |
| `nsIDOMSVGMarkerElement`           | `nsIDOMSVGMaskElement`      |
| `nsIDOMSVGMatrix`                  | `nsIDOMSVGMetadataElement`  |
| `nsIDOMSVGNumber`                  | `nsIDOMSVGNumberList`       |
| `nsIDOMSVGPathElement`             | `nsIDOMSVGPathSeg`          |
| `nsIDOMSVGPathSegList`             | `nsIDOMSVGPatternElement`   |
| `nsIDOMSVGPoint`                   | `nsIDOMSVGPointList`        |
| `nsIDOMSVGPolygonElement`          | `nsIDOMSVGPolylineElement`  |
| `nsIDOMSVGPresAspectRatio`         | `nsIDOMSVGRect`             |
| `nsIDOMSVGRectElement`             | `nsIDOMSVGSVGElement`       |
| `nsIDOMSVGScriptElement`           | `nsIDOMSVGSetElement`       |
| `nsIDOMSVGStopElement`             | `nsIDOMSVGStylable`         |
| `nsIDOMSVGStyleElement`            | `nsIDOMSVGSwitchElement`    |
| `nsIDOMSVGSymbolElement`           | `nsIDOMSVGTSpanElement`     |
| `nsIDOMSVGTextContentElement`      | `nsIDOMSVGTextElement`      |
| `nsIDOMSVGTextPathElement`         | `nsIDOMSVGTextPositionElem` |
| `nsIDOMSVGTitleElement`            | `nsIDOMSVGTransform`        |
| `nsIDOMSVGTransformList`           | `nsIDOMSVGTransformable`    |
| `nsIDOMSVGURIReference`            | `nsIDOMSVGUnitTypes`        |
| `nsIDOMSVGUseElement`              | `nsIDOMSVGViewSpec`         |
| `nsIDOMSVGZoomAndPan`              | `nsIDOMSVGZoomEvent`        |

Les fichiers IDL pour les travailleurs DOM ont également été déplacés, de `dom/public/idl/threads/` vers `dom/interfaces/threads/`&nbsp;:

| De                                                  | Vers                |
| --------------------------------------------------- | ------------------- |
| `nsIDOMWorkers.idl` (contient plusieurs interfaces) | `nsIDOMWorkers.idl` |

Les fichiers IDL suivants ont été déplacés de `dom/public/idl/traversal/` vers `dom/interfaces/traversal/`&nbsp;:

| De                        | Vers               |
| ------------------------- | ------------------ |
| `nsIDOMDocumentTraversal` | `nsIDOMNodeFilter` |
| `nsIDOMNodeIterator`      | `nsIDOMTreeWalker` |

Les fichiers IDL suivants ont été déplacés de `dom/public/idl/views/` vers `dom/interfaces/views/`&nbsp;:

| De                   | Vers                 |
| -------------------- | -------------------- |
| `nsIDOMAbstractView` | `nsIDOMDocumentView` |

Les fichiers IDL suivants ont été déplacés de `dom/public/idl/xbl/` vers `dom/interfaces/xbl/`&nbsp;:

| De                  | Vers                |
| ------------------- | ------------------- |
| `nsIDOMDocumentXBL` | `nsIDOMDocumentXBL` |

Les fichiers IDL suivants ont été déplacés de `dom/public/idl/xpath/` vers `dom/interfaces/xpath/`&nbsp;:

| De                        | Vers                    |
| ------------------------- | ----------------------- |
| `nsIDOMNSXPathExpression` | `nsIDOMXPathEvaluator`  |
| `nsIDOMXPathException`    | `nsIDOMXPathExpression` |
| `nsIDOMXPathNSResolver`   | `nsIDOMXPathNamespace`  |
| `nsIDOMXPathResult`       | `nsIDOMXPathResult`     |

Les fichiers IDL suivants ont été déplacés de `dom/public/idl/xul/` vers `dom/interfaces/xul/`&nbsp;:

| De                            | Vers                         |
| ----------------------------- | ---------------------------- |
| `nsIDOMXULButtonElement`      | `nsIDOMXULCheckboxElement`   |
| `nsIDOMXULCommandDispatcher`  | `nsIDOMXULCommandEvent`      |
| `nsIDOMXULContainerElement`   | `nsIDOMXULControlElement`    |
| `nsIDOMXULDescriptionElement` | `nsIDOMXULDocument`          |
| `nsIDOMXULElement`            | `nsIDOMXULImageElement`      |
| `nsIDOMXULLabelElement`       | `nsIDOMXULLabeledControlEl`  |
| `nsIDOMXULMenuListElement`    | `nsIDOMXULMultSelectCntrlEl` |
| `nsIDOMXULPopupElement`       | `nsIDOMXULSelectCntrlEl`     |
| `nsIDOMXULSelectCntrlItemEl`  | `nsIDOMXULTextboxElement`    |
| `nsIDOMXULTreeElement`        | `nsIDOMXULTreeElement`       |
