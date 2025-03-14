---
title: "Window: Evento online"
slug: Web/API/Window/online_event
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

El evento **`online`** de la interface {{domxref("Window")}} se activa cuando el navegador ha obtenido acceso a la red y el valor de {{domxref("Navigator.onLine")}} cambia a `true`.

> [!NOTE]
> Este evento no debe usarse para determinar la disponibilidad de un sitio web en particular. Los problemas de red o cortafuegos aun pueden impedir que se acceda al sitio web.

## Sintaxis

Usa el nombre del evento en métodos como {{domxref("EventTarget.addEventListener", "addEventListener()")}}, o establecer una propiedad de controlador de eventos.

```js
addEventListener("online", (event) => {});
ononline = (event) => {};
```

## Tipo de evento

Un {{domxref("Event", "Evento")}} genérico.

## Alias del controlador de eventos

Además de la interface `Window`, la propiedad de controlador de eventos `ononline` está disponible en los siguientes destinos.

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## Ejemplos

```js
// addEventListener version
window.addEventListener("online", (event) => {
  console.log("Estas conectado a la red.");
});

// ononline version
window.ononline = (event) => {
  console.log("Estas conectado a la red.");
};
```

## Especificacioness

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [`offline`](/es/docs/Web/API/Window/offline_event)
