---
title: document.documentElement
slug: Web/API/Document/documentElement
---

{{ ApiRef("DOM") }}

### Resumen

**Solo-lectura**

Devuelve el [`Element`](/es/DOM/element) que es el elemento raíz de [document](/es/DOM/document) (por ejemplo, devuelve el elemento `<html>` en los documentos HTML).

### Sintaxis

```js
varelement = document.documentElement;
```

### Ejemplo

```js
var rootElement = document.documentElement;
var firstTier = rootElement.childNodes;
// firstTier el la NodeList de los hijos directos del elemento raízof the direct children of the root element
for (var i = 0; i < firstTier.length; i++) {
  // hacer algo con cada uno de los hijos directos del elemento raíz
  // como firstTier[i]
}
```

### Notas

Esta propiedad es de sólo-lectura, facilitada para obtener el elemento raíz de cualquier documento.

Los documentos HTML contienen normalmente un único hijo directo, `<html>`, quizá con una declaración DOCTYPE antes que él. Los documento XML contienen a menudo, múltiples hijos: el elemento raíz, la declaración DOCTYPE y [processing instructions](/es/DOM/ProcessingInstruction).

Por tanto, deberías usar `document.documentElement` en lugar de {{ Domxref("document.firstChild") }} para obtener el elemento raíz.

## Especificaciones

{{Specifications}}

## Compatibilidad del Navegador

{{Compat}}
