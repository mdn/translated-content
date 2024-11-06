---
title: Document.hidden
slug: Web/API/Document/hidden
---

{{ ApiRef("DOM") }}

El **`Document.hidden`** Es una propiedad solo de lectura, retorna un valor Booleano que indica si la pagina esta conciderada oculta o no.

## Sintaxis

```js
var boolean = document.hidden;
```

## Ejemplo

```js
document.addEventListener("visibilitychange", function () {
  console.log(document.hidden);
  // Modify behavior...
});
```

## Especificaciones

{{Specifications}}

## Compatibilidad del Navegador

{{Compat}}
