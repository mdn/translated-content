---
title: "Element : évènement gotpointercapture"
short-title: gotpointercapture
slug: Web/API/Element/gotpointercapture_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Pointer Events")}}

L'évènement **`gotpointercapture`** est déclenché lorsqu'un élément capture un pointeur en utilisant {{DOMxRef("Element.setPointerCapture", "setPointerCapture()")}}.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("gotpointercapture", (event) => { })

ongotpointercapture = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("PointerEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("PointerEvent")}}

## Exemples

Cet exemple obtient un élément `<p>` et écoute l'évènement `gotpointercapture`. Il appelle ensuite `setPointerCapture()` sur l'élément lors d'un évènement `pointerdown`, ce qui déclenche `gotpointercapture`.

```js
const para = document.querySelector("p");

para.addEventListener("gotpointercapture", () => {
  console.log("J'ai été capturé !");
});

para.addEventListener("pointerdown", (event) => {
  para.setPointerCapture(event.pointerId);
});
```

Le même exemple, utilisant la propriété de gestionnaire d'évènement `ongotpointercapture`&nbsp;:

```js
const para = document.querySelector("p");

para.ongotpointercapture = () => {
  console.log("J'ai été capturé !");
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
  - {{DOMxRef("Element/lostpointercapture_event", "lostpointercapture")}}
  - {{DOMxRef("Element/pointerover_event", "pointerover")}}
  - {{DOMxRef("Element/pointerenter_event", "pointerenter")}}
  - {{DOMxRef("Element/pointerdown_event", "pointerdown")}}
  - {{DOMxRef("Element/pointermove_event", "pointermove")}}
  - {{DOMxRef("Element/pointerup_event", "pointerup")}}
  - {{DOMxRef("Element/pointercancel_event", "pointercancel")}}
  - {{DOMxRef("Element/pointerout_event", "pointerout")}}
  - {{DOMxRef("Element/pointerleave_event", "pointerleave")}}
  - {{DOMxRef("Element/pointerrawupdate_event", "pointerrawupdate")}}
