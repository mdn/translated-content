---
title: "Window : propriété documentPictureInPicture"
short-title: documentPictureInPicture
slug: Web/API/Window/documentPictureInPicture
l10n:
  sourceCommit: c9773fc1268b974b6c009208b259c53954c839ef
---

{{APIRef("Document Picture-in-Picture API")}}{{SecureContext_Header}}

La propriété en lecture seule **`documentPictureInPicture`** de l'interface {{DOMxRef("Window")}} retourne une référence à l'objet {{DOMxRef("DocumentPictureInPicture")}} pour le contexte de document actuel.

## Valeur

Une instance de l'objet {{DOMxRef("DocumentPictureInPicture")}}.

## Exemples

```js
const lecteurVideo = document.getElementById("player");

// …

// Ouvrir une fenêtre Picture-in-Picture.
await window.documentPictureInPicture.requestWindow({
  width: lecteurVideo.clientWidth,
  height: lecteurVideo.clientHeight,
});

// …
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{DOMxRef("Document Picture-in-Picture API", "L'API Document Picture-in-Picture", "", "nocode")}}
- [Utiliser l'API Document Picture-in-Picture](/fr/docs/Web/API/Document_Picture-in-Picture_API/Using)
