---
title: DOMImplementation.createDocument()
slug: Web/API/DOMImplementation/createDocument
translation_of: Web/API/DOMImplementation/createDocument
---
{{ApiRef("DOM")}}

O método **`DOMImplementation.createDocument()`** cria e retorna um {{domxref("XMLDocument")}}.

## Sintaxe

```
doc = document.implementation.createDocument(namespaceURI, qualifiedNameStr, documentType);
```

### Parâmetros

- _namespaceURI_
  - : É um {{domxref("DOMString")}} contendo a URI do namespace do documento que será criado, ou `null` se o documento não pertencer a nenhum.
- _qualifiedNameStr_
  - : Is a {{domxref("DOMString")}} containing the qualified name, that is an optional prefix and colon plus the local root element name, of the document to be created.
- _documentType_ {{optional_inline}}
  - : Is the {{domxref("DocumentType")}} of the document to be created. It defaults to `null`.

## Example

```js
var doc = document.implementation.createDocument ('http://www.w3.org/1999/xhtml', 'html', null);
var body = document.createElementNS('http://www.w3.org/1999/xhtml', 'body');
body.setAttribute('id', 'abc');
doc.documentElement.appendChild(body);
alert(doc.getElementById('abc')); // [object HTMLBodyElement]
```

## Specifications

| Specification                                                                                                                                | Status                           | Comment                                                                                                                                                                                                                   |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('DOM WHATWG', '#dom-domimplementation-createdocument', 'DOMImplementation.createDocument')}}     | {{Spec2('DOM WHATWG')}} | Modified the return type of `createDocument()` from {{domxref("Document")}} to {{domxref("XMLDocument")}}. The third argument of `createDocument()`, _doctype_, is now optional and default to `null`. |
| {{SpecName('DOM3 Core', 'core.html#Level-2-Core-DOM-createDocument', 'DOMImplementation.createDocument')}} | {{Spec2('DOM3 Core')}}     | No change from {{SpecName("DOM2 Core")}}                                                                                                                                                                           |
| {{SpecName('DOM2 Core', 'core.html#Level-2-Core-DOM-createDocument', 'DOMImplementation.createDocument')}} | {{Spec2('DOM2 Core')}}     | Initial definition.                                                                                                                                                                                                       |

## Compatibilidade com navegadores

{{Compat("api.DOMImplementation.createDocument")}}

## See also

- The {{domxref("DOMImplementation")}} interface it belongs to.
