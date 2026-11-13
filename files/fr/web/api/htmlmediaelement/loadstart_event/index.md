---
title: "HTMLMediaElement : évènement loadstart"
short-title: loadstart
slug: Web/API/HTMLMediaElement/loadstart_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML DOM")}}

L'évènement **`loadstart`** est déclenché lorsque le navigateur commence à charger une ressource.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("loadstart", (event) => { })

onloadstart = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Exemples

### Exemple en direct

#### HTML

```html
<div class="example">
  <button type="button">Charger la vidéo</button>
  <video controls width="250"></video>

  <div class="event-log">
    <label for="eventLog">Journal des évènements&nbsp;:</label>
    <textarea readonly class="event-log-contents" id="eventLog"></textarea>
  </div>
</div>
```

```css hidden
.event-log-contents {
  width: 18rem;
  height: 5rem;
  border: 1px solid black;
  margin: 0.2rem;
  padding: 0.2rem;
}

.example {
  display: grid;
  grid-template-areas:
    "button log"
    "video  log";
}

button {
  grid-area: button;
  width: 10rem;
  margin: 0.5rem 0;
}

video {
  grid-area: video;
}

.event-log {
  grid-area: log;
}

.event-log > label {
  display: block;
}
```

#### JavaScript

```js
const chargementVideo = document.querySelector("button");
const video = document.querySelector("video");
const journauxEvents = document.querySelector(".event-log-contents");
let source = null;

function handleEvent(event) {
  journauxEvents.textContent += `${event.type}\n`;
}

video.addEventListener("loadstart", handleEvent);
video.addEventListener("progress", handleEvent);
video.addEventListener("canplay", handleEvent);
video.addEventListener("canplaythrough", handleEvent);

chargementVideo.addEventListener("click", () => {
  if (source) {
    document.location.reload();
  } else {
    chargementVideo.textContent = "Réinitialiser l'exemple";
    source = document.createElement("source");
    source.setAttribute("src", "/shared-assets/videos/flower.webm");
    source.setAttribute("type", "video/webm");

    video.appendChild(source);
  }
});
```

#### Résultat

{{EmbedLiveSample("Exemple en direct", "100%", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLAudioElement")}}
- L'interface {{DOMxRef("HTMLVideoElement")}}
- L'élément HTML {{HTMLElement("audio")}}
- L'élément HTML {{HTMLElement("video")}}
