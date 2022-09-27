---
title: DOMImplementation
slug: Web/API/DOMImplementation
tags:
  - API
  - DOM
  - Interface
  - NeedsTranslation
  - Reference
  - Référence(2)
  - TopicStub
translation_of: Web/API/DOMImplementation
---
{{ ApiRef("DOM") }}

The **`DOMImplementation`** interface represent an object providing methods which are not dependent on any particular document. Such an object is returned by the {{domxref("Document.implementation")}} property.

## Property

_This interface has no specific property and doesn't inherit any._

## Methods

_No inherited method._

- {{domxref("DOMImplementation.createDocument()")}}
  - : Creates and returns an {{domxref("XMLDocument")}}.
- {{domxref("DOMImplementation.createDocumentType()")}}
  - : Creates and returns a {{domxref("DocumentType")}}.
- {{domxref("DOMImplementation.createHTMLDocument()")}}
  - : Creates and returns an HTML {{domxref("Document")}}.
- {{domxref("DOMImplementation.hasFeature()")}}
  - : Returns a {{domxref("Boolean")}} indicating if a given feature is supported or not. This function is unreliable and kept for compatibility purpose alone: except for SVG-related queries, it always returns `true`. Old browsers are very inconsistent in their behavior.

## Specifications

| Specification                                                                                            | Status                           | Comment                                                                                                                                                                                                   |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('DOM WHATWG', '#domimplementation', 'DOMImplementation')}}             | {{Spec2('DOM WHATWG')}} | Removed the `getFeature()` method. Added the `createHTMLDocument()` method. Modified the return type of `createDocument()` from {{domxref("Document")}} to {{domxref("XMLDocument")}}. |
| {{SpecName('DOM3 Core', 'core.html#ID-102161490', 'DOMImplementation')}}         | {{Spec2('DOM3 Core')}}     | Added the `getFeature()` method (never implemented by any user agent).                                                                                                                                    |
| {{SpecName('DOM2 Core', 'core.html#ID-102161490', 'DOMImplementation')}}         | {{Spec2('DOM2 Core')}}     | Added the `createDocument()` and `createDocumentType()` methods.                                                                                                                                          |
| {{SpecName('DOM1', 'level-one-core.html#ID-102161490', 'DOMImplementation')}} | {{Spec2('DOM1')}}         | Initial definition.                                                                                                                                                                                       |

## Compatibilidade com navegadores

{{Compat("api.DOMImplementation")}}

## See also

- [The DOM interfaces index.](/pt-BR/docs/DOM/DOM_Reference)
