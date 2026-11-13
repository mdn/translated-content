---
title: "HTMLVideoElement : méthode cancelVideoFrameCallback()"
short-title: cancelVideoFrameCallback()
slug: Web/API/HTMLVideoElement/cancelVideoFrameCallback
l10n:
  sourceCommit: 3cbd2b2b2eb0be9425949c20ca5d398645f7c0e9
---

{{APIRef("HTML DOM")}}

La méthode **`cancelVideoFrameCallback()`** de l'interface {{DOMxRef("HTMLVideoElement")}} annule une fonction de rappel de trame vidéo précédemment enregistrée.

## Syntaxe

```js-nolint
cancelVideoFrameCallback(id)
```

### Paramètres

- `id`
  - : Un nombre représentant l'identifiant de la fonction de rappel de trame vidéo à annuler. Il s'agit de la valeur retournée par l'appel correspondant à {{DOMxRef("HTMLVideoElement.requestVideoFrameCallback")}}.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

### Annuler une fonction de rappel de trame vidéo

Cet exemple montre comment utiliser `cancelVideoFrameCallback()` pour annuler une fonction de rappel de trame vidéo précédemment enregistrée.

```js
let videoCallbackId = null;

function updateCanvas(now, metadata) {
  // Traiter la trame

  // …

  // Réenregistrer la fonction de rappel pour la prochaine trame
  // Il est important de mettre à jour videoCallbackId à chaque itération
  // afin de pouvoir annuler la fonction de rappel correctement
  videoCallbackId = video.requestVideoFrameCallback(updateCanvas);
}

// Enregistrement initial de la fonction de rappel pour la première trame
videoCallbackId = video.requestVideoFrameCallback(updateCanvas);

// …

// Annuler la fonction de rappel de trame vidéo en utilisant le dernier videoCallbackId
if (videoCallbackId !== null) {
  video.cancelVideoFrameCallback(videoCallbackId);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("video")}}
- La méthode {{DOMxRef("HTMLVideoElement.requestVideoFrameCallback()")}}
- [Effectuer des opérations efficaces sur chaque trame vidéo avec `requestVideoFrameCallback()` <sup>(angl.)</sup>](https://web.dev/articles/requestvideoframecallback-rvfc)
