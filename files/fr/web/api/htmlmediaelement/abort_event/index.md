---
title: "HTMLMediaElement: abort event"
slug: Web/API/HTMLMediaElement/abort_event
---

{{APIRef}}

L'événement **`abort`** se déclenche si l'élément écouté ne s'est pas chargé complétement. Il est désactivé si le résultat obtenu est une erreur.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("GlobalEventHandlers/onabort", "onabort")}}
      </td>
    </tr>
  </tbody>
</table>

## Exemples

```js
const video = document.querySelector("video");
const videoSrc = "https://path/to/video.webm";

video.addEventListener("abort", () => {
  console.log(`Abort loading: ${videoSrc}`);
});

const source = document.createElement("source");
source.setAttribute("src", videoSrc);
source.setAttribute("type", "video/webm");

video.appendChild(source);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLVideoElement")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
