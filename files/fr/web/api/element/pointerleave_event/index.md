---
title: "Element : évènement pointerleave"
short-title: pointerleave
slug: Web/API/Element/pointerleave_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Pointer Events")}}

L'évènement **`pointerleave`** se déclenche lorsqu'un dispositif de pointage est déplacé en dehors des limites de test de l'élément. Pour les dispositifs de type stylet, cet évènement se déclenche lorsque le stylet quitte la zone de survol détectable par le numériseur. Sinon, `pointerleave` fonctionne de la même manière que {{DOMxRef("Element/mouseleave_event", "mouseleave")}}, et sont déclenchés en même temps. Ils sont également déclenchés en même temps que les évènements {{DOMxRef("Element/mouseout_event", "mouseout")}} et {{DOMxRef("Element/pointerout_event", "pointerout")}}, le cas échéant.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("pointerleave", (event) => { })

onpointerleave = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("PointerEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("PointerEvent")}}

## Exemples

Utilisation de `addEventListener()`&nbsp;:

```js
const para = document.querySelector("p");

para.addEventListener("pointerleave", (event) => {
  console.log("Le pointeur a quitté l'élément");
});
```

Utilisation de la propriété de gestionnaire d'évènements `onpointerleave`&nbsp;:

```js
const para = document.querySelector("p");

para.onpointerleave = (event) => {
  console.log("Le pointeur a quitté l'élément");
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
  - {{DOMxRef("Element/pointerover_event", "pointerover")}}
  - {{DOMxRef("Element/pointerenter_event", "pointerenter")}}
  - {{DOMxRef("Element/pointerdown_event", "pointerdown")}}
  - {{DOMxRef("Element/pointermove_event", "pointermove")}}
  - {{DOMxRef("Element/pointerup_event", "pointerup")}}
  - {{DOMxRef("Element/pointercancel_event", "pointercancel")}}
  - {{DOMxRef("Element/pointerout_event", "pointerout")}}
  - {{DOMxRef("Element/pointerrawupdate_event", "pointerrawupdate")}}
  - {{DOMxRef("Element/mouseleave_event", "mouseleave")}}
