---
title: "HTMLMediaElement: loadeddata event"
slug: Web/API/HTMLMediaElement/loadeddata_event
---

{{APIRef("HTMLMediaElement")}}

El evento **`loadeddata`** se arroja cuando el cuadro en la posición de reproducción actual del medio ha terminado de cargarse; a menudo el primer marco

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Burbujas</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interfaz</th>
      <td>{{DOMxRef("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Objetivo</th>
      <td>Element</td>
    </tr>
    <tr>
      <th scope="row">Acción por defecto</th>
      <td>Ninguno</td>
    </tr>
    <tr>
      <th scope="row">Propiedad del controlador de eventos</th>
      <td>{{domxref("GlobalEventHandlers.onloadeddata")}}</td>
    </tr>
    <tr>
      <th scope="row">Especificación</th>
      <td>
        <a
          class="external"
          href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#event-media-playing"
          >HTML5 media</a
        >
      </td>
    </tr>
  </tbody>
</table>

> **Nota:** Tenga en cuenta que este evento no se activará en dispositivos móviles / tablet, si el protector de datos está activado en configuración del navegador.

## Ejemplos

Estos ejemplos agregan un escucha de eventos para el evento de `loadeddata` del HTMLMediaElement, luego publican un mensaje cuando ese controlador de eventos ha respondido al disparo del evento.

Utilizando `addEventListener()`:

```js
const video = document.querySelector("video");

video.addEventListener("loadeddata", (event) => {
  console.log(
    "Hurra! El readyState solo aumentó a " +
      "HAVE_CURRENT_DATA or mayor por primera vez.",
  );
});
```

Utilizando el `onloadeddata` propiedad del controlador de eventos:

```js
const video = document.querySelector("video");

video.onloadeddata = (event) => {
  console.log(
    "Hurra! El readyState solo aumentó a " +
      "HAVE_CURRENT_DATA or mayor por primera vez.",
  );
};
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Eventos Relacionados

- {{domxref("HTMLMediaElement.playing_event", 'HTMLMediaElement: playing event')}}
- {{domxref("HTMLMediaElement.waiting_event", 'HTMLMediaElement: waiting event')}}
- {{domxref("HTMLMediaElement.seeking_event", 'HTMLMediaElement: seeking event')}}
- {{domxref("HTMLMediaElement.seeked_event", 'HTMLMediaElement: seeked event')}}
- {{domxref("HTMLMediaElement.ended_event", 'HTMLMediaElement: ended event')}}
- {{domxref("HTMLMediaElement.loadedmetadata_event", 'HTMLMediaElement: loadedmetadata event')}}
- {{domxref("HTMLMediaElement.loadeddata_event", 'HTMLMediaElement: loadeddata event')}}
- {{domxref("HTMLMediaElement.canplay_event", 'HTMLMediaElement: canplay event')}}
- {{domxref("HTMLMediaElement.canplaythrough_event", 'HTMLMediaElement: canplaythrough event')}}
- {{domxref("HTMLMediaElement.durationchange_event", 'HTMLMediaElement: durationchange event')}}
- {{domxref("HTMLMediaElement.timeupdate_event", 'HTMLMediaElement: timeupdate event')}}
- {{domxref("HTMLMediaElement.play_event", 'HTMLMediaElement: play event')}}
- {{domxref("HTMLMediaElement.pause_event", 'HTMLMediaElement: pause event')}}
- {{domxref("HTMLMediaElement.ratechange_event", 'HTMLMediaElement: ratechange event')}}
- {{domxref("HTMLMediaElement.volumechange_event", 'HTMLMediaElement: volumechange event')}}
- {{domxref("HTMLMediaElement.suspend_event", 'HTMLMediaElement: suspend event')}}
- {{domxref("HTMLMediaElement.emptied_event", 'HTMLMediaElement: emptied event')}}
- {{domxref("HTMLMediaElement.stalled_event", 'HTMLMediaElement: stalled event')}}

## Ver También

- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLVideoElement")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
