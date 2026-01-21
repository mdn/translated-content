---
title: "HTMLVideoElement: resize event"
short-title: resize
slug: Web/API/HTMLVideoElement/resize_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("HTML DOM")}}

L'évènement **`resize`** de l'interface {{DOMxRef("HTMLVideoElement")}} est déclenché lorsque l'une ou les deux propriétés {{DOMxRef("HTMLVideoElement.videoWidth", "videoWidth")}} et {{DOMxRef("HTMLVideoElement.videoHeight", "videoHeight")}} viennent d'être mises à jour.

Cet évènement n'est pas annulable mais peut se propager.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("resize", (event) => { })

onresize = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Exemples

```html
<video id="media" src="https://exemple.com/video.mp4"></video>
```

```js
const el = document.getElementById("media");
el.addEventListener("resize", () => {
  console.log("La taille de l'élément vidéo a changé !");
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propiété {{DOMxRef("HTMLVideoElement.videoHeight")}}
- La propiété {{DOMxRef("HTMLVideoElement.videoWidth")}}
