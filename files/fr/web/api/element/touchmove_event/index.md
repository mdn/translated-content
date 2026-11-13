---
title: "Element : évènement touchmove"
short-title: touchmove
slug: Web/API/Element/touchmove_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Touch Events")}}

L'évènement `touchmove` est déclenché lorsqu'un ou plusieurs points de contact sont déplacés le long de la surface tactile.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("touchmove", (event) => { })

ontouchmove = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("TouchEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("TouchEvent")}}

## Exemples

Des exemples de code pour ces évènements sont disponibles sur la page dédiée&nbsp;: [Évènements tactiles](/fr/docs/Web/API/Touch_events).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les évènements tactiles](/fr/docs/Web/API/Touch_events)
- L'évènement {{DOMxRef("Element/mousemove_event", "mousemove")}}
