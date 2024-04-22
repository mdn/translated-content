---
title: "HTMLMediaElement: canplay"
slug: Web/API/HTMLMediaElement/canplay_event
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTMLMediaElement")}}

El evento `canplay` es activado cuando el _{{Glossary("user agent")}}_ puede reproducir contenido multimedia, pero estima que no han sido cargados suficientes datos para reproducir el contenido multimedia hasta su final sin tener que parar para cargar más contenido.

Este evento no es cancelable y no escala a sus padres (_bubble_).

## Sintaxis

Se puede usar el nombre del evento en métodos como {{domxref("EventTarget.addEventListener", "addEventListener()")}}, o establecerlo como una propiedad manejadora de eventos.

```js
addEventListener("canplay", (event) => {});

oncanplay = (event) => {};
```

## Tipo de evento

Un objeto {{domxref("Event")}} genérico.

## Ejemplos

Estos ejemplos agregan un detector de eventos para el evento `canplay` del objeto HTMLMediaElement, después envían un mensaje cuando ese manejador de eventos ha reaccionado a la activación del evento.

Usando `addEventListener()`:

```js
const video = document.querySelector("video");

video.addEventListener("canplay", (event) => {
  console.log(
    "El video puede iniciar, pero sin la seguridad de que pueda ser reproducido.",
  );
});
```

Usando la propiedad manejadora de eventos `oncanplay`:

```js
const video = document.querySelector("video");

video.oncanplay = (event) => {
  console.log(
    "El video puede iniciar, pero sin la seguridad de que pueda ser reproducido.",
  );
};
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Eventos relacionados

- El evento HTMLMediaElement {{domxref("HTMLMediaElement.playing_event", 'playing')}}
- El evento HTMLMediaElement {{domxref("HTMLMediaElement.waiting_event", 'waiting')}}
- El evento HTMLMediaElement {{domxref("HTMLMediaElement.seeking_event", 'seeking')}}
- El evento HTMLMediaElement {{domxref("HTMLMediaElement.seeked_event", 'seeked')}}
- El evento HTMLMediaElement {{domxref("HTMLMediaElement.ended_event", 'ended')}}
- El evento HTMLMediaElement {{domxref("HTMLMediaElement.loadedmetadata_event", 'loadedmetadata')}}
- El evento HTMLMediaElement {{domxref("HTMLMediaElement.loadeddata_event", 'loadeddata')}}
- El evento HTMLMediaElement {{domxref("HTMLMediaElement.canplay_event", 'canplay')}}
- El evento HTMLMediaElement {{domxref("HTMLMediaElement.canplaythrough_event", 'canplaythrough')}}
- El evento HTMLMediaElement {{domxref("HTMLMediaElement.durationchange_event", 'durationchange')}}
- El evento HTMLMediaElement {{domxref("HTMLMediaElement.timeupdate_event", 'timeupdate')}}
- El evento HTMLMediaElement {{domxref("HTMLMediaElement.play_event", 'play')}}
- El evento HTMLMediaElement {{domxref("HTMLMediaElement.pause_event", 'pause')}}
- El evento HTMLMediaElement {{domxref("HTMLMediaElement.ratechange_event", 'ratechange')}}
- El evento HTMLMediaElement {{domxref("HTMLMediaElement.volumechange_event", 'volumechange')}}
- El evento HTMLMediaElement {{domxref("HTMLMediaElement.suspend_event", 'suspend')}}
- El evento HTMLMediaElement {{domxref("HTMLMediaElement.emptied_event", 'emptied')}}
- El evento HTMLMediaElement {{domxref("HTMLMediaElement.stalled_event", 'stalled')}}

## Véase también

- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLVideoElement")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
