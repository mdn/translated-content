---
title: fullscreenchange
slug: Web/API/Document/fullscreenchange_event
---

L'événement **`onfullscreenchange`** est déclenché lorsque le navigateur alterne entre le mode fenêtré et plein écran.

## Informations générales

- Spécification
  - : [Fullscreen](https://dvcs.w3.org/hg/fullscreen/raw-file/tip/Overview.html#api)
- Interface
  - : {{domxref("Event")}}
- Propagation
  - : Oui
- Annulable
  - : Non
- Cible
  - : {{domxref("Document")}}
- Action par défaut
  - : Aucune

## Propriétés

| Property                        | Type                       | Description                                          |
| ------------------------------- | -------------------------- | ---------------------------------------------------- |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | L'élément recevant l'événement.                      |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}   | Le type de l'événement.                              |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}      | Indique si l'événement bubble habituellement ou non. |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}      | Indique si l'événement est annulable ou non.         |

## Exemple

```js
// Noter que l'API est toujours vendor-prefixed dans les navigateurs l'implémentant
document.addEventListener("fullscreenchange", function (event) {
  // L'objet event ne porte pas l'information à propos du mode plein écran
  // Cependant, il est possible de la trouver à travers l'API fullscreen
  if (document.fullscreen) {
    // La cible de l'événement est toujours le document,
    // mais il est possible de retrouver l'élément fullscreen à travers l'API
    document.fullscreenElement;
  }
});
```

## Evénements liés

- [`fullscreenerror`](/fr/docs/Mozilla_event_reference/fullscreenerror)

## Voir aussi

- [Utilisation du mode plein écran](/fr/docs/DOM/Using_full-screen_mode)
