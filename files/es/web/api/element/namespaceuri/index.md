---
title: Element.namespaceURI
slug: Web/API/Element/namespaceURI
---

{{APIRef}}

La propiedad `Element.namespaceURI` unicamente de lectura devuelve la URI namespace de el elemento, `o la anula si el elemento no está en un` namespace.

> **Nota:** Antes de DOM4 esta API fué definida dentro de la interfaz {{domxref("Node")}}.

## Síntaxis

```js
namespace = element.namespaceURI;
```

## Ejemplo

En este snippet, un elemento está siendo examinado por su {{domxref("localName")}} y su `namespaceURI`. Si el `namespaceURI` devuelve el XUL namespace y el `localName` devuelve "browser", entonces se entiende que el nodo es XUL `<browser/>`.

```js
if (
  element.localName == "browser" &&
  element.namespaceURI ==
    "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul"
) {
  // this is a XUL browser
}
```

## Notas

Esto no es un valor calculado resultante de una búsqueda de un namespace, basado en un examen de las declaraciones del namespace en el campo de aplicación. La URI del namespace de un nodo se congela en el momento de creación del nodo.

En Firefox 3.5 y versiones anteriores, la URI del namespace para elementos HTML en documentos HTML `es nula`. En versiones posteriores, de conformidad con HTML5, es [`https://www.w3.org/1999/xhtml`](https://www.w3.org/1999/xhtml) como en XHTML.

Se puede crear un elemento con el `namespaceURI` especificado utilizando el método DOM Level 2 [document.createElementNS](/es/docs/Web/API/Document/createElementNS).

El DOM no maneja o hace valer la validación del namespace por si mismo. Depende de la aplicación DOM para hacer cualquier validación necesaria. Date cuenta también que el prefijo del namespace , una vez que se asocia con un particular elemento, no puede ser cambiado.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{domxref("Element.localName")}}
- {{domxref("Element.prefix")}}
- {{domxref("Attr.namespaceURI")}}
- {{domxref("Node.namespaceURI")}}
