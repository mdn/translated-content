---
title: "XMLHttpRequestEventTarget : évènement loadend"
short-title: loadend
slug: Web/API/XMLHttpRequestEventTarget/loadend_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

L'évènement **`loadend`** est déclenché lorsqu'une requête est terminée, que ce soit avec succès (après {{DOMxRef("XMLHttpRequestEventTarget/load_event", "load")}}) ou en échec (après {{DOMxRef("XMLHttpRequestEventTarget/abort_event", "abort")}} ou {{DOMxRef("XMLHttpRequestEventTarget/error_event", "error")}}).

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("loadend", (event) => { })

onloadend = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("ProgressEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("ProgressEvent")}}

## Exemples

### Utiliser XMLHttpRequest

#### HTML

```html
<div class="controls">
  <input
    class="xhr success"
    type="button"
    name="xhr"
    value="Cliquez pour démarrer XHR (succès)" />
  <input
    class="xhr error"
    type="button"
    name="xhr"
    value="Cliquez pour démarrer XHR (erreur)" />
  <input
    class="xhr abort"
    type="button"
    name="xhr"
    value="Cliquez pour démarrer XHR (annulation)" />
</div>

<textarea readonly class="event-log"></textarea>
```

```css hidden
.event-log {
  width: 25rem;
  height: 4rem;
  border: 1px solid black;
  margin: 0.5rem;
  padding: 0.2rem;
}

input {
  width: 11rem;
  margin: 0.5rem;
}
```

#### JavaScript

```js
const xhrButtonSuccess = document.querySelector(".xhr.success");
const xhrButtonError = document.querySelector(".xhr.error");
const xhrButtonAbort = document.querySelector(".xhr.abort");
const log = document.querySelector(".event-log");

function handleEvent(e) {
  log.textContent = `${log.textContent}${e.type} : ${e.loaded} octets transférés\n`;
}

function addListeners(xhr) {
  xhr.addEventListener("loadstart", handleEvent);
  xhr.addEventListener("load", handleEvent);
  xhr.addEventListener("loadend", handleEvent);
  xhr.addEventListener("progress", handleEvent);
  xhr.addEventListener("error", handleEvent);
  xhr.addEventListener("abort", handleEvent);
}

function runXHR(url) {
  log.textContent = "";

  const xhr = new XMLHttpRequest();
  addListeners(xhr);
  xhr.open("GET", url);
  xhr.send();
  return xhr;
}

xhrButtonSuccess.addEventListener("click", () => {
  runXHR(
    "https://raw.githubusercontent.com/mdn/content/main/files/fr/_wikihistory.json",
  );
});

xhrButtonError.addEventListener("click", () => {
  runXHR("http://i-dont-exist");
});

xhrButtonAbort.addEventListener("click", () => {
  runXHR(
    "https://raw.githubusercontent.com/mdn/content/main/files/fr/_wikihistory.json",
  ).abort();
});
```

#### Résultat

{{EmbedLiveSample("Utiliser XMLHttpRequest", "100%", 150)}}

### Utiliser XMLHttpRequestUpload

Vous pouvez utiliser l'évènement `loadend` pour détecter la fin (qu'elle soit réussie ou non) d'un téléchargement. Pour un exemple de code complet qui télécharge un fichier et affiche une barre de progression, consultez la page principale {{DOMxRef("XMLHttpRequestUpload")}}.

```js
// Lorsqu'un téléchargement est terminé, nous masquons la barre de progression.
xhr.upload.addEventListener("loadend", (event) => {
  progressBar.classList.remove("visible");
  if (event.loaded !== 0) {
    // Terminaison réussie
    log.textContent = "Téléversement terminé.";
  }
  abortButton.disabled = true;
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les évènements associés&nbsp;: {{DOMxRef("XMLHttpRequestEventTarget/loadstart_event", "loadstart")}}, {{DOMxRef("XMLHttpRequestEventTarget/load_event", "load")}}, {{DOMxRef("XMLHttpRequestEventTarget/progress_event", "progress")}}, {{DOMxRef("XMLHttpRequestEventTarget/error_event", "error")}}, {{DOMxRef("XMLHttpRequestEventTarget/abort_event", "abort")}}
- [Surveiller la progression](/fr/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#surveiller_la_progression)
