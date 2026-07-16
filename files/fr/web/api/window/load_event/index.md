---
title: "Window : évènement load"
slug: Web/API/Window/load_event
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{APIRef}}

L'évènement **`load`** de l'interface {{DOMxRef("Window")}} est déclenché lorsque la page et toutes ses ressources dépendantes (telles que des feuilles de style, des scripts (y compris les scripts asynchrones, différés et les modules), des cadres intégrés et des images) sont complètement chargées, à l'exception de celles qui sont [chargées paresseusement](/fr/docs/Web/Performance/Guides/Lazy_loading#images_et_iframes).
Cela contraste avec {{DOMxRef("Document/DOMContentLoaded_event", "DOMContentLoaded")}}, qui est déclenché dès que le DOM de la page est chargé, sans attendre la fin du chargement des ressources.

Cet événement n'est pas annulable et ne se propage pas.

> [!NOTE]
> _Tous les évènements nommés `load` ne se propageront pas vers `Window`_, même si `bubbles` est initialisé à `true`. Pour intercepter les évènements `load` sur la `window`, cet évènement `load` doit être dispatché directement vers la `window`.

> [!NOTE]
> L'évènement `load` qui est dispatché lorsque le document principal est chargé _est_ dispatché sur la `window`, mais possède deux propriétés modifiées&nbsp;: `target` est `document`, et `path` est `undefined`. Ces deux propriétés sont modifiées pour des raisons de compatibilité avec les versions précédentes.

Pour éviter d'exécuter un script avant que le DOM qu'il manipule soit entièrement construit, vous pouvez placer le script à la fin du corps du document, juste avant la balise de fermeture `</body>`, sans l'envelopper dans un écouteur d'événement. Vous ne devriez généralement utiliser l'événement `load` que pour attendre le chargement des ressources externes, telles que les images ou les scripts différés.

## Syntaxe

Utilisez cet évènement dans des méthodes telles que {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez un gestionnaire d'évènement.

```js-nolint
addEventListener("load", (event) => { })

onload = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

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

### Exemple en direct

#### HTML

```html
<div class="controls">
  <button id="reload" type="button">Recharger</button>
</div>

<div class="event-log">
  <label for="eventLog">Journal d'évènements&nbsp;:</label>
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
  log.textContent += `readystate: ${document.readyState}\n`;
});

document.addEventListener("DOMContentLoaded", (event) => {
  log.textContent += `DOMContentLoaded\n`;
});
```

#### Résultat

{{EmbedLiveSample("Exemple en direct", "100%", 160)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'API Document [`readyState`](/fr/docs/Web/API/Document/readyState)
- Évènements associés&nbsp;:
  - {{DOMxRef("Document/DOMContentLoaded_event", "DOMContentLoaded")}}
  - {{DOMxRef("Document/readystatechange_event", "readystatechange")}}
  - {{DOMxRef("Window/beforeunload_event", "beforeunload")}}
  - {{DOMxRef("Window/unload_event", "unload")}}
