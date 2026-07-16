---
title: "Document : évènement readystatechange"
short-title: readystatechange
slug: Web/API/Document/readystatechange_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("DOM")}}

L'évènement **`readystatechange`** de l'interface {{DOMxRef("Document")}} est déclenché lorsque l'attribut {{DOMxRef("Document.readyState", "readyState")}} d'un document a changé.

Cet événement n'est pas annulable et ne se propage pas.

## Syntaxe

Utilisez le nom de l'événement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'événements.

```js-nolint
addEventListener("readystatechange", (event) => { })

onreadystatechange = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Exemples

### Exemple interactif

#### HTML

```html
<div class="controls">
  <button id="reload" type="button">Recharger</button>
</div>

<div class="event-log">
  <label for="eventLog">Journal des évènements&nbsp;:</label>
  <textarea
    readonly
    class="event-log-contents"
    rows="8"
    cols="30"
    id="eventLog"></textarea>
</div>
```

#### CSS

```css hidden
body {
  display: grid;
  grid-template-areas: "control log";
}

.controls {
  grid-area: control;
  display: flex;
  align-items: center;
  justify-content: center;
}

.event-log {
  grid-area: log;
}

.event-log-contents {
  resize: none;
}

label,
button {
  display: block;
}

#reload {
  height: 2rem;
}
```

#### JavaScript

```js
const log = document.querySelector(".event-log-contents");
const reload = document.querySelector("#reload");

reload.addEventListener("click", () => {
  log.textContent = "";
  setTimeout(() => {
    window.location.reload(true);
  }, 200);
});

window.addEventListener("load", (event) => {
  log.textContent = `${log.textContent}load\n`;
});

document.addEventListener("readystatechange", (event) => {
  log.textContent = `${log.textContent}readystate: ${document.readyState}\n`;
});

document.addEventListener("DOMContentLoaded", (event) => {
  log.textContent = `${log.textContent}DOMContentLoaded\n`;
});
```

#### Résultat

{{EmbedLiveSample("Exemple interactif", "100%", 160)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les évènements associés&nbsp;: {{DOMxRef("Document/DOMContentLoaded_event", "DOMContentLoaded")}}, {{DOMxRef("Window/load_event", "load")}}, {{DOMxRef("Window/beforeunload_event", "beforeunload")}}, {{DOMxRef("Window/unload_event", "unload")}}
