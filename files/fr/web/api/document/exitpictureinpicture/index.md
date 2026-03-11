---
title: "Document : méthode exitPictureInPicture()"
short-title: exitPictureInPicture()
slug: Web/API/Document/exitPictureInPicture
l10n:
  sourceCommit: 4cbb657f882495b1cd18cbbaa8d1c5237bce4eb8
---

{{APIRef("Picture-in-Picture API")}}

La méthode **`exitPictureInPicture()`** de l'interface {{DOMxRef("Document")}} demande qu'une vidéo contenue dans ce document, actuellement flottante, soit retirée du mode image dans l'image, restaurant l'état précédent de l'écran. Cela annule généralement les effets d'un appel précédent à {{DOMxRef("HTMLVideoElement.requestPictureInPicture()")}}.

## Syntaxe

```js-nolint
exitPictureInPicture()
```

### Paramètres

Aucun.

### Valeur de retour

Une promesse ({{JSxRef("Promise")}}), qui est résolue une fois que {{Glossary("user agent", "l'agent utilisateur")}} a terminé de quitter le mode image dans l'image. Si une erreur se produit lors de la tentative de sortie du mode image dans l'image, le gestionnaire `catch()` de la promesse est appelé.

### Exceptions

- `InvalidStateError` {{DOMxRef("DOMException")}}
  - : Levée si `document.pictureInPictureElement` est `null`.

## Exemples

Cet exemple permet au document actuel de quitter le mode image dans l'image chaque fois que le bouton de la souris est cliqué à l'intérieur.

```js
document.onclick = (event) => {
  if (document.pictureInPictureElement) {
    document
      .exitPictureInPicture()
      .then(() => console.log("Document a quitté le mode image dans l'image"))
      .catch((err) => console.error(err));
  } else {
    video.requestPictureInPicture();
  }
};
```

Notez que si vous souhaitez suivre quelle vidéo de votre page est actuellement en cours de lecture en mode image dans l'image, vous devez écouter les événements `enterpictureinpicture` et `exitpictureinpicture` sur l'élément {{DOMxRef("HTMLVideoElement")}} concerné. Alternativement, vous pouvez vérifier si {{DOMxRef("Document.pictureInPictureElement")}} fait référence à l'élément {{DOMxRef("HTMLVideoElement")}} actuel.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("HTMLVideoElement.requestPictureInPicture()")}}
- La méthode {{DOMxRef("HTMLVideoElement.disablePictureInPicture")}}
- La propriété {{DOMxRef("Document.pictureInPictureEnabled")}}
- La propriété {{DOMxRef("Document.pictureInPictureElement")}}
- La pseudo-classe CSS {{CSSxRef(":picture-in-picture")}}
- [Les évènements Picture-in-Picture](/fr/docs/Web/API/Picture-in-Picture_API#évènements)
