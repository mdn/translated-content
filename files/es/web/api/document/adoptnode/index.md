---
title: Document.adoptNode()
slug: Web/API/Document/adoptNode
---

{{ ApiRef("DOM") }}

**`Document.adoptNode()`** transfiere un {{Glossary("node/dom", "node")}} desde otro {{domxref("Document", "document", "", "1")}} al documento del método. El nodo adoptado y sus subnodos se eliminan del documento original (si lo hubiera), encuentra y su {{domxref("Node.ownerDocument", "ownerDocument")}} se cambia por el documento actual. El nodo puede entoces ser insertado en el documento actual.

## Sintaxis

```js
node = document.adoptNode(externalNode);
```

- `node`
  - : El nodo adoptado que ahora tiene este documento como su {{domxref("Node.ownerDocument", "ownerDocument")}}. El {{domxref("Node.parentNode", "parentNode")}} del nodo es `null`, esto se debe a que aún no a sido insertado en el árbol del documento. Tenga en cuenta que `node` y `externalNode` son el mismo objeto después de esta llamada.
- `externalNode`
  - : El nodo a ser adoptado desde otro documento.

## Ejemplo

```js
var iframe = document.querySelector("iframe");
var iframeImages = iframe.contentDocument.querySelectorAll("img");
var newParent = document.getElementById("images");

iframeImages.forEach(function (imgEl) {
  newParent.appendChild(document.adoptNode(imgEl));
});
```

## Notas

Los nodos de documentos externos deberían ser clonados utilizando {{domxref("document.importNode()")}} (o adoptado utilizando `document.adoptNode()`) antes de que puedan ser insertados en el documento actual. Para más incidencias sobre {{domxref("Node.ownerDocument")}}, vea el [W3C DOM FAQ](https://www.w3.org/DOM/faq.html#ownerdoc).

Firefox actualmente no obliga a cumplir esta regla (lo hizo un tiempo durante el desarrollo de Firefox 3, pero muchos sitios se rompían cuando esta regla era obligatoria). Animamos a los desarrolladores web a que corrijan su código para seguir esta regla con el fin de mejorar la compatibilidad futura.

## Especificaciones

{{Specifications}}

## Compatibilidad del Navegador

{{Compat}}

## Vea también

- {{domxref("document.importNode")}}
