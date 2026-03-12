---
title: "Document : propriété pictureInPictureElement"
short-title: pictureInPictureElement
slug: Web/API/Document/pictureInPictureElement
l10n:
  sourceCommit: 20e15ad6027f10c7bdd48f36776876cd1aa3a63c
---

{{APIRef("Picture-in-Picture API")}}

La propriété en lecture seule **`pictureInPictureElement`** de l'interface {{DOMxRef("Document")}} retourne un {{DOMxRef("Element")}} actuellement affiché en mode image dans l'image dans ce document, ou `null` si le mode image dans l'image n'est pas utilisé.

Bien que cette propriété soit en lecture seule, elle ne génère pas d'exception si elle est modifiée (même en mode strict)&nbsp;; le mutateur est une opération nulle et sera ignoré.

## Valeur

Une référence à l'objet {{DOMxRef("Element")}} actuellement en mode image dans l'image.

Retourne `null` si le document n'a aucun élément associé en mode image dans l'image. Par exemple, il n'y a pas d'élément image dans l'image, ou l'élément provient d'un cadre intégré.

## Exemples

Cet exemple présente une fonction, `exitPictureInPicture()`,
qui teste la valeur retournée par `pictureInPictureElement`. Si le document est en mode image dans l'image (`pictureInPictureElement` n'est pas `null`), alors {{DOMxRef("Document.exitPictureInPicture()")}} est exécutée pour quitter le mode image dans l'image.

```js
function exitPictureInPicture() {
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
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
- La propriété {{DOMxRef("Document.pictureInPictureEnabled")}}
- La méthode {{DOMxRef("Document.exitPictureInPicture()")}}
- La pseudo-classe CSS {{CSSxRef(":picture-in-picture")}}
