---
title: "HTMLVideoElement : évènement leavepictureinpicture"
short-title: leavepictureinpicture
slug: Web/API/HTMLVideoElement/leavepictureinpicture_event
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{APIRef("Picture-in-Picture API")}}

L'évènement `leavepictureinpicture` est déclenché lorsque le {{DOMxRef("HTMLVideoElement")}} quitte avec succès le mode image dans l'image.

Cet évènement n'est pas annulable et ne se propage pas.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("leavepictureinpicture", (event) => { })

onleavepictureinpicture = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("PictureInPictureEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("PictureInPictureEvent")}}

## Propriétés de l'évènement

Cette interface hérite également des propriétés de son parent {{DOMxRef("Event")}}.

## Exemples

Ces exemples ajoutent un gestionnaire d'évènement pour l'évènement `leavepictureinpicture` de **HTMLVideoElement**, puis affichent un message lorsque ce gestionnaire réagit au déclenchement de l'évènement.

Avec `addEventListener()`&nbsp;:

```js
const video = document.querySelector("#video");
const button = document.querySelector("#button");

function onExitPip() {
  console.log("Mode image dans l'image désactivé !");
}

video.addEventListener("leavepictureinpicture", onExitPip);

button.onclick = () => {
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
  }
};
```

Avec la propriété de gestionnaire d'évènement `onleavepictureinpicture`&nbsp;:

```js
const video = document.querySelector("#video");
const button = document.querySelector("#button");

function onExitPip() {
  console.log("Mode image dans l'image désactivé !");
}

video.onleavepictureinpicture = onExitPip;

button.onclick = () => {
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
  }
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLVideoElement")}}
- [L'API Picture-in-Picture](/fr/docs/Web/API/Picture-in-Picture_API)
