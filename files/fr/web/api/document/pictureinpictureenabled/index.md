---
title: "Document : propriété pictureInPictureEnabled"
short-title: pictureInPictureEnabled
slug: Web/API/Document/pictureInPictureEnabled
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Picture-in-Picture API")}}

La propriété en lecture seule **`pictureInPictureEnabled`** de l'interface {{DOMxRef("Document")}} indique si le mode image dans l'image est disponible ou non.

Le mode image dans l'image est disponible par défaut sauf indication contraire par une [politique de permission](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy/picture-in-picture).

Bien que cette propriété soit en lecture seule, elle ne génère pas d'exception si elle est modifiée (même en mode strict)&nbsp;; le mutateur est une opération nulle et sera ignoré.

## Valeur

Une valeur booléenne, qui est `true` si une vidéo peut passer en mode image dans l'image et être affichée dans une fenêtre flottante en appelant {{DOMxRef("HTMLVideoElement.requestPictureInPicture()")}}. Si le mode image dans l'image n'est pas disponible, cette valeur est `false`.

## Exemples

Dans cet exemple, avant de tenter de passer en mode image dans l'image pour un élément HTML {{HTMLElement("video")}}, la valeur de `pictureInPictureEnabled` est vérifiée pour éviter l'appel si la fonctionnalité n'est pas disponible.

```js
function requestPictureInPicture() {
  if (document.pictureInPictureEnabled) {
    videoElement.requestPictureInPicture();
  } else {
    console.log(
      "Votre navigateur ne peut pas utiliser le mode image dans l'image actuellement",
    );
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("HTMLVideoElement.requestPictureInPicture()")}}
- La propriété {{DOMxRef("HTMLVideoElement.disablePictureInPicture")}}
- La méthode {{DOMxRef("Document.exitPictureInPicture()")}}
- La propriété {{DOMxRef("Document.pictureInPictureElement")}}
- La pseudo-classe CSS {{CSSxRef(":picture-in-picture")}}
