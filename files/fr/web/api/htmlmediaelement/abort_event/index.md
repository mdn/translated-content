---
title: "HTMLMediaElement : évènement abort"
short-title: abort
slug: Web/API/HTMLMediaElement/abort_event
l10n:
  sourceCommit: 9032b617a2e2904618291c86a48e56e298e474bd
---

{{APIRef("HTML DOM")}}

L'évènement **`abort`** se déclenche lorsque le chargement d'une ressource média est arrêté avant son achèvement, mais pas à la suite d'une erreur.
Cela se produit généralement en supprimant l'attribut `src` ou en le définissant sur une chaîne de caractères vide (`""`), puis en appelant `load()`.

Cet évènement n'est pas annulable et ne se propage pas.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("abort", (event) => { })

onabort = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Exemples

### Abandonner le chargement d'une ressource média

L'exemple suivant montre comment abandonner le chargement d'une vidéo.
Lorsque vous appuyez sur le bouton, le chargement d'une ressource vidéo commence.
Après un court délai, le chargement est abandonné en supprimant l'attribut `src` et en appelant la méthode `load()`.
Si la ressource vidéo est toujours en cours de chargement lorsque `load()` est appelée, l'évènement `abort` se déclenche.

#### HTML

```html
<video controls width="250"></video>

<button id="loadAndAbort">Charger et abandonner la vidéo</button>

<pre id="log"></pre>
```

#### CSS

```css
video,
button,
pre {
  display: block;
  margin-block: 1rem;
}
```

#### JavaScript

```js
const video = document.querySelector("video");
const loadAndAbortButton = document.querySelector("#loadAndAbort");
const log = document.querySelector("#log");

video.addEventListener("abort", () => {
  log.textContent += "Chargement de la vidéo abandonné\n";
});

loadAndAbortButton.addEventListener("click", () => {
  log.textContent = "Chargement de la vidéo...\n";

  video.src = `/shared-assets/videos/flower.webm?nocache=${Date.now()}`;
  video.load();

  setTimeout(() => {
    video.removeAttribute("src");
    video.load();
  }, 50);
});
```

#### Résultat

{{EmbedLiveSample("Abandonner le chargement d'une ressource média", "100%", 300)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLAudioElement")}}
- L'interface {{DOMxRef("HTMLVideoElement")}}
- L'élément HTML {{HTMLElement("audio")}}
- L'élément HTML {{HTMLElement("video")}}
