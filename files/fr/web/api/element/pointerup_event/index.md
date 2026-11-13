---
title: "Element : évènement pointerup"
short-title: pointerup
slug: Web/API/Element/pointerup_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Pointer Events")}}

L'évènement **`pointerup`** est déclenché lorsqu'un pointeur n'est plus actif. Notez qu'il est possible de recevoir un évènement [`pointercancel`](/fr/docs/Web/API/Element/pointercancel_event) à la place.

Ce comportement est différent de celui des évènements {{DOMxRef("Element/mouseup_event", "mouseup")}}. Lors de l'utilisation d'une souris physique, les évènements `mouseup` se déclenchent chaque fois qu'un bouton de la souris est relâché. Les évènements `pointerup` ne se déclenchent que lors du relâchement du dernier bouton&nbsp;; les relâchements des boutons précédents, tant que d'autres boutons sont maintenus enfoncés, ne déclenchent pas d'évènement `pointerup`.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("pointerup", (event) => { })

onpointerup = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("PointerEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("PointerEvent")}}

## Exemples

Utilisation de `addEventListener()`&nbsp;:

```js
const para = document.querySelector("p");

para.addEventListener("pointerup", (event) => {
  console.log("Relâchement du pointeur");
});
```

Utilisation de la propriété de gestionnaire d'évènements `onpointerup`&nbsp;:

```js
const para = document.querySelector("p");

para.onpointerup = (event) => {
  console.log("Relâchement du pointeur");
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
  - {{DOMxRef("Element/pointercancel_event", "pointercancel")}}
  - {{DOMxRef("Element/pointerout_event", "pointerout")}}
  - {{DOMxRef("Element/pointerleave_event", "pointerleave")}}
  - {{DOMxRef("Element/pointerrawupdate_event", "pointerrawupdate")}}
  - {{DOMxRef("Element/mouseup_event", "mouseup")}}
