---
title: "Element : évènement pointerover"
short-title: pointerover
slug: Web/API/Element/pointerover_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Pointer Events")}}

L'évènement **`pointerover`** est déclenché lorsque le dispositif de pointage est déplacé à l'intérieur des limites du teste de toucher d'un élément.

Les évènements `pointerover` ont les mêmes problèmes que {{DOMxRef("Element/mouseover_event", "mouseover")}}. Si l'élément cible a des éléments enfants, les évènements `pointerout` et `pointerover` se déclenchent également lorsque le pointeur se déplace sur les limites de ces éléments, et pas seulement sur l'élément cible lui-même. En général, le comportement des évènements {{DOMxRef("Element/pointerenter_event", "pointerenter")}} et {{DOMxRef("Element/pointerleave_event", "pointerleave")}} est plus logique, car ils ne sont pas affectés par le déplacement dans les éléments enfants.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("pointerover", (event) => { })

onpointerover = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("PointerEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("PointerEvent")}}

## Exemples

L'utilisation de `addEventListener()`&nbsp;:

```js
const para = document.querySelector("p");

para.addEventListener("pointerover", (event) => {
  console.log("Le pointeur est entré");
});
```

Utilisation de la propriété de gestionnaire d'évènements `onpointerover`&nbsp;:

```js
const para = document.querySelector("p");

para.onpointerover = (event) => {
  console.log("Le pointeur est entré");
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Évènements associés&nbsp;:
  - {{DOMxRef("Element/gotpointercapture_event", "gotpointercapture")}}
  - {{DOMxRef("Element/lostpointercapture_event", "lostpointercapture")}}
  - {{DOMxRef("Element/pointerenter_event", "pointerenter")}}
  - {{DOMxRef("Element/pointerdown_event", "pointerdown")}}
  - {{DOMxRef("Element/pointermove_event", "pointermove")}}
  - {{DOMxRef("Element/pointerup_event", "pointerup")}}
  - {{DOMxRef("Element/pointercancel_event", "pointercancel")}}
  - {{DOMxRef("Element/pointerout_event", "pointerout")}}
  - {{DOMxRef("Element/pointerleave_event", "pointerleave")}}
  - {{DOMxRef("Element/pointerrawupdate_event", "pointerrawupdate")}}
  - {{DOMxRef("Element/mouseover_event", "mouseover")}}
