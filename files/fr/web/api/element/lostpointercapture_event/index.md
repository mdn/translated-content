---
title: "Element : évènement lostpointercapture"
short-title: lostpointercapture
slug: Web/API/Element/lostpointercapture_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Pointer Events")}}

L'évènement **`lostpointercapture`** est déclenché lorsqu'un [pointeur capturé](/fr/docs/Web/API/Pointer_events#pointer_capture) est libéré.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété gestionnaire d'évènement.

```js-nolint
addEventListener("lostpointercapture", (event) => { })

onlostpointercapture = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("PointerEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("PointerEvent")}}

## Exemples

Cet exemple écoute l'évènement `lostpointercapture` pour un élément, et capture le pointeur pour l'élément lors de l'évènement `pointerdown`. Lorsque l'utilisateur·ice libère ensuite le pointeur, l'évènement `lostpointercapture` est déclenché.

```js
const para = document.querySelector("p");

para.addEventListener("lostpointercapture", () => {
  console.log("J'ai été libéré !");
});

para.addEventListener("pointerdown", (event) => {
  para.setPointerCapture(event.pointerId);
});
```

Le même exemple, mais en utilisant la propriété gestionnaire d'évènement `onlostpointercapture`&nbsp;:

```js
const para = document.querySelector("p");

para.onlostpointercapture = () => {
  console.log("J'ai été libéré !");
};

para.addEventListener("pointerdown", (event) => {
  para.setPointerCapture(event.pointerId);
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Évènements associés&nbsp;:
  - {{DOMxRef("Element/gotpointercapture_event", "gotpointercapture")}}
  - {{DOMxRef("Element/pointerover_event", "pointerover")}}
  - {{DOMxRef("Element/pointerenter_event", "pointerenter")}}
  - {{DOMxRef("Element/pointerdown_event", "pointerdown")}}
  - {{DOMxRef("Element/pointermove_event", "pointermove")}}
  - {{DOMxRef("Element/pointerup_event", "pointerup")}}
  - {{DOMxRef("Element/pointercancel_event", "pointercancel")}}
  - {{DOMxRef("Element/pointerout_event", "pointerout")}}
  - {{DOMxRef("Element/pointerleave_event", "pointerleave")}}
  - {{DOMxRef("Element/pointerrawupdate_event", "pointerrawupdate")}}
