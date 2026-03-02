---
title: "HTMLVideoElement : évènement enterpictureinpicture"
short-title: enterpictureinpicture
slug: Web/API/HTMLVideoElement/enterpictureinpicture_event
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{APIRef("Picture-in-Picture API")}}

L'évènement `enterpictureinpicture` est déclenché lorsque le {{DOMxRef("HTMLVideoElement")}} passe avec succès en mode image dans l'image.

Cet évènement n'est pas annulable et ne se propage pas.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("enterpictureinpicture", (event) => { })

onenterpictureinpicture = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("PictureInPictureEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("PictureInPictureEvent")}}

## Propriétés de l'évènement

Cette interface hérite également des propriétés de son parent {{DOMxRef("Event")}}.

## Exemples

Ces exemples ajoutent un gestionnaire d'évènement pour l'évènement `enterpictureinpicture` de **HTMLVideoElement**, puis affichent un message lorsque ce gestionnaire réagit au déclenchement de l'évènement.

Avec `addEventListener()`&nbsp;:

```js
const video = document.querySelector("#video");
const button = document.querySelector("#button");

function onEnterPip() {
  console.log("Mode image dans l'image activé !");
}

video.addEventListener("enterpictureinpicture", onEnterPip);

button.onclick = () => {
  video.requestPictureInPicture();
};
```

Avec la propriété de gestionnaire d'évènement `onenterpictureinpicture`&nbsp;:

```js
const video = document.querySelector("#video");
const button = document.querySelector("#button");

function onEnterPip() {
  console.log("Mode image dans l'image activé !");
}

video.onenterpictureinpicture = onEnterPip;

button.onclick = () => {
  video.requestPictureInPicture();
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLVideoElement")}}
- [L'API Picture-in-Picture](/fr/docs/Web/API/Picture-in-Picture_API)
