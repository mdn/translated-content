---
title: Document.hidden
slug: Web/API/Document/hidden
translation_of: Web/API/Document/hidden
---
{{ ApiRef("DOM") }}

El **`Document.hidden`** Es una propiedad solo de lectura, retorna un valor Booleano que indica si la pagina esta conciderada oculta o no.

## Sintaxis

    var boolean = document.hidden

## Ejemplo

```js
document.addEventListener("visibilitychange", function() {
  console.log( document.hidden );
  // Modify behavior...
});
```

## Especificaciones

| Especificacion                                                                                           | Estado                                       | Comentario         |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ------------------ |
| {{SpecName('Page Visibility API','#dom-document-hidden', 'Document.hidden')}} | {{Spec2('Page Visibility API')}} | definicion inicial |

## Compatibilidad con Navegadores

{{Compat("api.Document.hidden")}}
