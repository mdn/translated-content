---
title: "HTMLMediaElement : propriété error"
short-title: error
slug: Web/API/HTMLMediaElement/error
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("HTML DOM")}}

La propriété **`error`** de l'interface {{DOMxRef("HTMLMediaElement")}} est l'objet {{DOMxRef("MediaError")}} correspondant à la dernière erreur survenue, ou `null` s'il n'y a pas eu d'erreur. Lorsqu'un évènement {{DOMxRef("HTMLMediaElement/error_event", "error")}} est reçu par l'élément, vous pouvez déterminer les détails de ce qui s'est passé en examinant cet objet.

## Valeur

Un objet {{DOMxRef("MediaError")}} décrivant la dernière erreur survenue sur l'élément média ou `null` si aucune erreur n'est survenue.

## Exemples

Cet exemple crée un élément vidéo et lui ajoute un gestionnaire d'erreurs&nbsp;; le gestionnaire d'erreurs enregistre les détails dans la console.

```js
const videoElement = document.createElement("video");
videoElement.onerror = () => {
  console.error(
    `Erreur ${videoElement.error.code}; détails : ${videoElement.error.message}`,
  );
};
videoElement.src = "https://exemple.com/videocassee.mp4";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLMediaElement")}}&nbsp;: utilisée pour définir la propriété `HTMLMediaElement.error`
- Les éléments HTML {{HTMLElement("audio")}} et {{HTMLElement("video")}}
