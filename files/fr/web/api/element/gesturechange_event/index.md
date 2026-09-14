---
title: "Element : évènement gesturechange"
short-title: gesturechange
slug: Web/API/Element/gesturechange_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef}}{{Non-standard_Header}}

L'évènement **`gesturechange`** se déclenche lorsque des doigts se déplacent lors d'un geste tactile.

C'est un évènement propriétaire spécifique à WebKit.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("gesturechange", (event) => { })

ongesturechange = (event) => { }
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
