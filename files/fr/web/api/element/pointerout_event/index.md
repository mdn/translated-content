---
title: "Element : évènement pointerout"
short-title: pointerout
slug: Web/API/Element/pointerout_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Pointer Events")}}

L'évènement **`pointerout`** est déclenché pour plusieurs raisons, notamment&nbsp;: le dispositif de pointage est déplacé en dehors des limites du _teste de toucher_ d'un élément&nbsp;; le déclenchement de l'évènement {{DOMxRef("Element/pointerup_event", "pointerup")}} pour un dispositif qui ne supporte pas le survol (voir {{DOMxRef("Element/pointerup_event", "pointerup")}})&nbsp;; après le déclenchement de l'évènement {{DOMxRef("Element/pointercancel_event", "pointercancel")}} (voir {{DOMxRef("Element/pointercancel_event", "pointercancel")}})&nbsp;; lorsque le stylet d'un crayon quitte la plage de survol détectable par le numériseur.

Les évènements `pointerout` ont les mêmes problèmes que {{DOMxRef("Element/mouseout_event", "mouseout")}}. Si l'élément cible a des éléments enfants, les évènements `pointerout` et `pointerover` se déclenchent également lorsque le pointeur se déplace sur les limites de ces éléments, et pas seulement sur l'élément cible lui-même. En général, le comportement des évènements {{DOMxRef("Element/pointerenter_event", "pointerenter")}} et {{DOMxRef("Element/pointerleave_event", "pointerleave")}} est plus logique, car ils ne sont pas affectés par le déplacement dans les éléments enfants.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("pointerout", (event) => { })

onpointerout = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("PointerEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("PointerEvent")}}

## Exemples

L'utilisation de `addEventListener()`&nbsp;:

```js
const para = document.querySelector("p");

para.addEventListener("pointerout", (event) => {
  console.log("Le pointeur est sorti");
});
```

Utilisation de la propriété de gestionnaire d'évènements `onpointerout`&nbsp;:

```js
const para = document.querySelector("p");

para.onpointerout = (event) => {
  console.log("Le pointeur est sorti");
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
  - {{DOMxRef("Element/pointerleave_event", "pointerleave")}}
  - {{DOMxRef("Element/pointerrawupdate_event", "pointerrawupdate")}}
  - {{DOMxRef("Element/mouseout_event", "mouseout")}}
