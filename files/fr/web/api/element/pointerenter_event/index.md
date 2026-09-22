---
title: "Element : évènement pointerenter"
short-title: pointerenter
slug: Web/API/Element/pointerenter_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Pointer Events")}}

L'évènement **`pointerenter`** se déclenche lorsqu'un dispositif de pointage est déplacé dans les limites de test de l'élément ou de l'un de ses descendants, y compris à la suite d'un évènement {{DOMxRef("Element/pointerdown_event", "pointerdown")}} provenant d'un dispositif qui ne prend pas en charge le survol (voir {{DOMxRef("Element/pointerdown_event", "pointerdown")}}). Sinon, `pointerenter` fonctionne de la même manière que {{DOMxRef("Element/mouseenter_event", "mouseenter")}}, et sont déclenchés en même temps. Ils sont également déclenchés en même temps que les évènements {{DOMxRef("Element/mouseover_event", "mouseover")}} et {{DOMxRef("Element/pointerover_event", "pointerover")}}, le cas échéant.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("pointerenter", (event) => { })

onpointerenter = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("PointerEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("PointerEvent")}}

## Exemples

Utilisation de `addEventListener()`&nbsp;:

```js
const para = document.querySelector("p");

para.addEventListener("pointerenter", (event) => {
  console.log("Le pointeur est entré dans l'élément");
});
```

Utilisation de la propriété de gestionnaire d'évènements `onpointerenter`&nbsp;:

```js
const para = document.querySelector("p");

para.onpointerenter = (event) => {
  console.log("Le pointeur est entré dans l'élément");
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
  - {{DOMxRef("Element/pointerdown_event", "pointerdown")}}
  - {{DOMxRef("Element/pointermove_event", "pointermove")}}
  - {{DOMxRef("Element/pointerup_event", "pointerup")}}
  - {{DOMxRef("Element/pointercancel_event", "pointercancel")}}
  - {{DOMxRef("Element/pointerout_event", "pointerout")}}
  - {{DOMxRef("Element/pointerleave_event", "pointerleave")}}
  - {{DOMxRef("Element/pointerrawupdate_event", "pointerrawupdate")}}
  - {{DOMxRef("Element/mouseenter_event", "mouseenter")}}
