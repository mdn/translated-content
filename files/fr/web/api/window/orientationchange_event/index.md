---
title: "Window : évènement orientationchange"
short-title: orientationchange
slug: Web/API/Window/orientationchange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}{{Deprecated_Header}}

L'évènement `orientationchange` de l'interface {{DOMxRef("Window")}} est déclenché lorsque l'orientation de l'appareil a changé.

Cet évènement n'est pas annulable et ne se propage pas.

Cet évènement est obsolète. Écoutez plutôt l'évènement {{DOMxRef("ScreenOrientation.change_event", "change")}} de l'interface {{DOMxRef("ScreenOrientation")}}.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("orientationchange", (event) => { })

onorientationchange = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Exemples

Vous pouvez utiliser l'évènement `orientationchange` dans une méthode {{DOMxRef("EventTarget.addEventListener", "addEventListener")}}&nbsp;:

```js
window.addEventListener("orientationchange", (event) => {
  console.log(
    `l'orientation de l'appareil est maintenant ${event.target.screen.orientation.angle}`,
  );
});
```

Ou utilisez la propriété de gestionnaire d'évènement `onorientationchange`&nbsp;:

```js
window.onorientationchange = (event) => {
  console.log(
    `l'orientation de l'appareil est maintenant ${event.target.screen.orientation.angle}`,
  );
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
