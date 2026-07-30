---
title: "Element : évènement gesturestart"
short-title: gesturestart
slug: Web/API/Element/gesturestart_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef}}{{Non-standard_Header}}

L'évènement **`gesturestart`** se déclenche lorsque plusieurs doigts touchent la surface tactile, démarrant ainsi un nouveau geste. Pendant le geste, des évènements {{DOMxRef("Element/gesturechange_event", "gesturechange")}} sont déclenchés. Lorsque le geste est terminé, un évènement {{DOMxRef("Element/gestureend_event", "gestureend")}} est déclenché.

C'est un évènement propriétaire spécifique à WebKit.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("gesturestart", (event) => { })

ongesturestart = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("GestureEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("GestureEvent")}}

## Spécifications

Ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [GestureEventClassReference sur la Bibliothèque des développeur·euse·s de Safari <sup>(angl.)</sup>](https://developer.apple.com/documentation/webkitjs/gestureevent)
