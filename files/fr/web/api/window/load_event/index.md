---
title: "Window : évènement load"
slug: Web/API/Window/load_event
l10n:
  sourceCommit: 95d6c222f9aba9a60dee4adc738d741a28c8b83a
---

{{APIRef}}

L'évènement **`load`** est déclenché lorsque la page et toutes ses ressources dépendantes (telles que des feuilles de style et des images) sont complètement chargées. Cela contraste avec [`DOMContentLoaded`](/fr/docs/Web/API/Document/DOMContentLoaded_event), qui est déclenché lorsque le <i lang="en">DOM</i> de la page est chargé sans attendre la fin du chargement des ressources.

Cet évènement n'est pas annulable et ne bouillonne pas.

## Syntaxe

Utilisez cet évènement dans des méthodes telles que [`addEventListener()`](/fr/docs/Web/API/EventTarget/addEventListener), ou définissez un gestionnaire d'évènement.

```js
addEventListener("load", (event) => {});

onload = (event) => {};
```

## Type d'évènement

Un [`Event`](/fr/docs/Web/API/Event) générique.

## Exemples

Le code suivant affiche un message dans la console lorsque que la page est complètement chargée&nbsp;:

```js
window.addEventListener("load", (event) => {
  console.log("La page est complètement chargée");
});
```

Voici un exemple similaire qui utilise un gestionnaire d'évènement `onload`&nbsp;:

```js
window.onload = (event) => {
  console.log("La page est complètement chargée");
};
```

### Exemple <i lang="en">live</i>

#### HTML

```html
<div class="controls">
  <button id="reload" type="button">Recharger</button>
</div>

<div class="event-log">
  <label for="eventLog">Journal d'évènements :</label>
  <textarea
    readonly
    class="event-log-contents"
    rows="8"
    cols="30"
    id="eventLog"></textarea>
</div>
```

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
  window.setTimeout(() => {
    window.location.reload(true);
  }, 200);
});

window.addEventListener("load", (event) => {
  log.textContent += "load\n";
});

document.addEventListener("readystatechange", (event) => {
  log.textContent += `readystate : ${document.readyState}\n`;
});

document.addEventListener("DOMContentLoaded", (event) => {
  log.textContent += `DOMContentLoaded\n`;
});
```

#### Résultat

{{EmbedLiveSample('', '100%', '180px')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Évènements liés&nbsp;:
  - [`DOMContentLoaded`](/fr/docs/Web/API/Document/DOMContentLoaded_event)
  - [`readystatechange`](/fr/docs/Web/API/Document/readystatechange_event)
  - [`beforeunload`](/fr/docs/Web/API/Window/beforeunload_event)
  - [`unload`](/fr/docs/Web/API/Window/unload_event)
