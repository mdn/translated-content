---
title: Document.exitFullscreen()
slug: Web/API/Document/exitFullscreen
---

{{ApiRef("Fullscreen API")}}

El método **`exitFullscreen()`** de {{domxref("Document")}} solicita que el elemento de este documento que se presenta actualmente en modo de pantalla completa se retire del modo de pantalla completa, restaurando el estado anterior de la pantalla. Esto generalmente revierte los efectos de una llamada previa a {{domxref("Element.requestFullscreen()")}}.

La excepción es si otro elemento ya estaba en modo de pantalla completa cuando el elemento actual se colocó en modo de pantalla completa usando `requestFullscreen()`. En ese caso, el elemento de pantalla completa anterior se restaura al estado de pantalla completa. En esencia, se mantiene un [stack](<https://es.wikipedia.org/wiki/Stack_(abstract_data_type)>) de elementos de pantalla completa.

## Sintaxis

```js
exitPromise = document.exitFullscreen();
```

### Parámetros

Ninguno.

### Valor de retorno

Un {{jsxref("Promise")}} que se resuelve una vez que el {{Glossary("user agent")}} a terminado de salir del modo de pantalla completa. Si se produce un error al intentar salir del modo de pantalla completa, se llama al controlador `catch()` para la promesa.

## Ejemplo

Este ejemplo hace que el documento actual entre y salga de una presentación a pantalla completa cada vez que se hace clic dentro del botón del mouse.

```js
document.onclick = function (event) {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen();
  }
};
```

> **Nota:** Para un ejemplo más completo, vea [Example](/es/docs/Web/API/Element/requestFullScreen#example).

## Especificaciones

{{Specifications}}

## Compatibilidad del Navegador

{{Compat}}

## Ver también

- [Fullscreen API](/es/docs/Web/API/Fullscreen_API)
- [Guide to the Fullscreen API](/es/docs/Web/API/Fullscreen_API/Guide)
- {{ domxref("Element.requestFullscreen()") }}
- {{ domxref("Document.fullscreenElement") }}
- {{ cssxref(":fullscreen") }} and {{cssxref("::backdrop")}}
- The {{HTMLElement("iframe")}} [`allowfullscreen`](/es/docs/Web/HTML/Element/iframe#allowfullscreen) attribute
