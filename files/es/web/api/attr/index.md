---
title: Attr
slug: Web/API/Attr
---

{{APIRef("DOM")}}

Este tipo representa un atributo de un elemento DOM como un objeto. En muchos métodos DOM, probablemente vas a obtener el atributo como una cadena (e.g., {{domxref("Element.getAttribute()")}}, pero algunas funciones (e.g., {{domxref("Element.getAttributeNode()")}}) or means of iterating give `Attr` types.

{{InheritanceDiagram}}

> **Advertencia:** **Advertencia:En el DOM Core 1, 2 y 3**, `Attr` se hereda del {{domxref("Node")}}. Este ya no es el caso en [DOM4](https://www.w3.org/TR/dom/).Para llevar la implementación de Attr a la especifiación, se esta trabajando para cambiarlo y dejar de heredar de{{domxref("Node")}}. No debe de utilizar ninguna propiedad o método de nodo en los objetos `Attr`. A partir de Gecko 7.0 (Firefox 7.0 / Thunderbird 7.0 / SeaMonkey 2.4), los que se eliminarán enviarán mensajes de advertencia a la consola. Debe revisar su código en consecuencia. Consulte Propiedades y métodos en desuso para obtener una lista completa.

## Propiedades

- {{domxref("Attr.name", "name")}} {{readOnlyInline}}
  - : El nombre del atributo.
- {{domxref("Attr.namespaceURI", "namespaceURI")}} {{readOnlyInline}}
  - : Un {{domxref("DOMString")}} representing the namespace URI of the attribute, or `null` if there is no namespace.
- {{domxref("Attr.localName", "localName")}} {{readOnlyInline}}
  - : A {{domxref("DOMString")}} representing the local part of the qualified name of the attribute.
- {{domxref("Attr.prefix", "prefix")}} {{readOnlyInline}}
  - : A {{domxref("DOMString")}} representing the namespace prefix of the attribute, or `null` if no prefix is specified.
- {{domxref("Attr.specified", "specified")}} {{readOnlyInline}}
  - : This property always returns `true`. Originally, it returned `true` if the attribute was explicitly specified in the source code or by a script, and `false` if its value came from the default one defined in the document's DTD.
- {{domxref("Attr.value", "value")}}
  - : El valor del atributo.

> **Nota:** DOM Level 3 defined `namespaceURI`, `localName` and `prefix` on the {{domxref("Node")}} interface. In DOM4 they were moved to `Attr`.
>
> This change is implemented in Chrome since version 46.0 and Firefox since version 48.0.

## Propiedades y métodos obsoletos

Las siguientes propiedades son obsoletos. Where available, the appropriate replacement is provided.

- `attributes`
  - : Este propiedad ahora siempre devuelve `NULL`.
- `childNodes`
  - : Este propiedad ahora siempre devuelve `NULL`.
- `firstChild`
  - : Este propiedad ahora siempre devuelve `NULL`.
- `isId` {{readOnlyInline}}
  - : Indicates whether the attribute is an "ID attribute". An "ID attribute" being an attribute which value is expected to be unique across a DOM Document. In HTML DOM, "id" is the only ID attribute, but XML documents could define others. Whether or not an attribute is unique is often determined by a {{Glossary("DTD")}} or other schema description.
- `lastChild`
  - : Este propiedad ahora siempre devuelve `NULL`.
- `nextSibling`
  - : Este propiedad ahora siempre devuelve `NULL`.
- `nodeName`
  - : Utilizar {{domxref("Attr.name")}} en su lugar.
- `nodeType`
  - : Esta propiedad ahora siempre devuelve 2 (`ATTRIBUTE_NODE`).
- `nodeValue`
  - : Utilizar {{domxref("Attr.value")}} en su lugar.
- `ownerDocument`
  - : Seguramente nunca usaste esta propiedad asi que no deberias preocuparte si esque ya no está disponible.
- `ownerElement` {{deprecated_inline}} {{readOnlyInline}}

  - : Since you get an `Attr` object from an {{domxref("Element")}}, you should already know the associated element.

    Contrary to above claim, {{domxref("Document.evaluate")}} can return `Attr` objects from an XPath, in which case you would not easily know the owner.

- `parentNode`
  - : Estra propiedad ahora siempre devuelve `NULL`.
- `previousSibling`
  - : Estra propiedad ahora siempre devuelve `NULL`.
- `schemaTypeInfo` {{deprecated_inline}} {{readOnlyInline}}
  - : The type information associated with this attribute. While the type information contained in this attribute is guaranteed to be correct after loading the document or invoking {{domxref("Document.normalizeDocument")}}, this property may not be reliable if the node was moved.
- `specified`
  - : Estra propiedad ahora siempre devuelve `true`.
- `textContent`
  - : Utilizar {{domxref("Attr.value")}} en su lugar.

Los siguientes metodos ahora son obsoletos.

- `appendChild()`
  - : Modify the value of {{domxref("Attr.value")}} instead.
- `cloneNode()`
  - : Seguramente nunca usaste esta propiedad asi que no deberias preocuparte si esque ya no está disponible.
- `createAttribute()`
  - : Use {{domxref("Element.setAttribute()")}} instead.
- `createAttributeNS()`
  - : Use {{domxref("Element.setAttributeNS()")}} instead.
- `getAttributeNode()`
  - : Use {{domxref("Element.getAttribute()")}} instead.
- `getAttributeNodeNS()`
  - : Use {{domxref("Element.getAttributeNS()")}} instead.
- `hasAttributes()` {{deprecated_inline}}
  - : Estra propiedad ahora retorna false.
- `hasChildNodes()`
  - : Estra propiedad ahora devuelve `false`.
- `insertBefore()`
  - : Modify the value of {{domxref("Attr.value")}} instead.
- `isSupported()`
  - : Seguramente nunca usaste esta propiedad asi que no deberias preocuparte si esque ya no está disponible.
- `isEqualNode()`
  - : Seguramente nunca usaste esta propiedad asi que no deberias preocuparte si esque ya no está disponible.
- `normalize()`
  - : Seguramente nunca usaste esta propiedad asi que no deberias preocuparte si esque ya no está disponible.
- `removeAttributeNode()`
  - : Use {{domxref("Element.removeAttribute()")}} instead.
- `removeChild()`
  - : Modify the value of {{domxref("Attr.value")}} instead.
- `replaceChild()`
  - : Modify the value of {{domxref("Attr.value")}} instead.
- `setAttributeNode()`
  - : Use {{domxref("Element.setAttribute()")}} instead.
- `setAttributeNodeNS()`
  - : Use {{domxref("Element.setAttributeNS()")}} instead.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
