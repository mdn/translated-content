---
title: "TextTrack: evento cuechange"
slug: Web/API/TextTrack/cuechange_event
---

{{APIRef}}

El evento **`cuechange`** se activa cuando un {{domxref("TextTrack")}} ha cambiado las anotaciones que se estan mostrando. El evento es activado tanto en `TextTrack` _y_ en el {{domxref("HTMLTrackElement")}} donde esta siendo mostrado, si lo hay.

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
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Propiedad del controlador de eventos</th>
      <td>{{domxref("GlobalEventHandlers.oncuechange")}}</td>
    </tr>
  </tbody>
</table>

## Ejemplos

### En el TextTrack

Tu puedes preparar una escucha para el evento `cuechange` en un `TextTrack` usando el método {{domxref("EventTarget.addEventListener", "addEventListener()")}}:

```js
track.addEventListener("cuechange", function () {
  let cues = track.activeCues; // array de las anotaciones actuales
});
```

O puedes solo preparar la propiedad del controlador de eventos {{domxref("GlobalEventHandlers.oncuechange", "oncuechange")}}:

```js
track.oncuechange = function () {
  let cues = track.activeCues; // array of current cues
};
```

### En el elemento track

El subyacente {{domxref("TextTrack")}}, indicado por la propiedad {{domxref("HTMLTrackElement.track", "track")}}, recive un evento {{domxref("TextTrack.cuechange_event", "cuechange")}} cada vez que la anotación que esta siendo actualmente presentada cambia. Est sucede incluso si la pista de texto no está asociada cun un elemento multimedia.

Si la pista de texto _está_ asociada con el elemento multimedia, usando el elemento {{HTMLElement("track")}} como hijo del elemento {{HTMLElement("audio")}} o del elemento {{HTMLElement("video")}}, el evento `cuechange` es también enviado al {{domxref("HTMLTrackElement")}}.

```js
let textTrackElem = document.getElementById("texttrack");

textTrackElem.addEventListener("cuechange", (event) => {
  let cues = event.target.track.activeCues;
});
```

Además, puedes utilizar el controlador de eventos `oncuechange`:

```js
let textTrackElem = document.getElementById("texttrack");

textTrackElem.oncuechange = (event) => {
  let cues = event.target.track.activeCues;
});
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{glossary("WebVTT")}}
