---
title: "HTMLVideoElement : méthode requestPictureInPicture()"
short-title: requestPictureInPicture()
slug: Web/API/HTMLVideoElement/requestPictureInPicture
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Picture-in-Picture API")}}

La méthode **`requestPictureInPicture()`** de l'interface {{DOMxRef("HTMLVideoElement")}} émet une demande asynchrone pour afficher la vidéo en mode image dans l'image.

Il n'est pas garanti que la vidéo passera en mode image dans l'image. Si l'autorisation d'entrer dans ce mode est accordée, la promèsse ({{JSxRef("Promise")}}) retournée sera résolue et la vidéo recevra un évènement {{DOMxRef("HTMLVideoElement.enterpictureinpicture_event", "enterpictureinpicture")}} pour indiquer qu'elle est désormais en mode image dans l'image.

## Syntaxe

```js-nolint
requestPictureInPicture()
```

### Paramètres

Aucun.

### Valeur de retour

Une promesse ({{JSxRef("Promise")}}) qui sera résolue en un objet {{DOMxRef("PictureInPictureWindow")}} pouvant être utilisé pour écouter le redimensionnement de cette fenêtre flottante par l'utilisateur·ice.

### Exceptions

- `NotSupportedError` {{DOMxRef("DOMException")}}
  - : Levée si la fonctionnalité n'est pas prise en charge (par exemple, désactivée par une préférence utilisateur·ice ou par une limitation de la plateforme).
- `SecurityError` {{DOMxRef("DOMException")}}
  - : Levée si la fonctionnalité est bloquée par une [Politique d'autorisations](/fr/docs/Web/HTTP/Guides/Permissions_Policy).
- `InvalidStateError` {{DOMxRef("DOMException")}}
  - : Levée si la propriété `readState` de l'élément vidéo vaut `HAVE_NOTHING`, ou si l'élément vidéo n'a pas de piste vidéo, ou si l'attribut `disablePictureInPicture` de l'élément vidéo vaut `true`.
- `NotAllowedError` {{DOMxRef("DOMException")}}
  - : Levée si `document.pictureInPictureElement` vaut `null` et que le document ne dispose pas d'une {{Glossary("transient activation", "activation transitoire")}}.

## Sécurité

[Une activation utilisateur·ice transitoire](/fr/docs/Web/Security/Defenses/User_activation) est requise. L'utilisateur·ice doit interagir avec la page ou un élément d'interface pour que cette fonctionnalité fonctionne.

## Exemples

Cet exemple demande à ce que la vidéo passe en mode image dans l'image, et ajoute un gestionnaire d'évènement pour gérer le redimensionnement de la fenêtre flottante.

```js
function enterPictureInPicture() {
  videoElement.requestPictureInPicture().then((pictureInPictureWindow) => {
    pictureInPictureWindow.addEventListener("resize", () =>
      onPipWindowResize(),
    );
  });
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("video")}}
- La propriété {{DOMxRef("HTMLVideoElement.disablePictureInPicture")}}
- La propriété {{DOMxRef("Document.pictureInPictureEnabled")}}
- La méthode {{DOMxRef("Document.exitPictureInPicture()")}}
- La propriété {{DOMxRef("Document.pictureInPictureElement")}}
- La pseudo-classe CSS {{CSSxRef(":picture-in-picture")}}
