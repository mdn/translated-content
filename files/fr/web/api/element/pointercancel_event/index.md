---
title: "Element : évènement pointercancel"
short-title: pointercancel
slug: Web/API/Element/pointercancel_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Pointer Events")}}

L'évènement **`pointercancel`** est déclenché lorsque le navigateur détermine qu'il est peu probable qu'il y ait d'autres évènements de pointeur, ou si après que {{DOMxRef("Element/pointerdown_event", "pointerdown")}} est déclenché, le pointeur est ensuite utilisé pour manipuler la vue en effectuant un panoramique, un zoom ou un défilement.

Voici quelques exemples de situations qui déclenchent un évènement `pointercancel`&nbsp;:

- Un évènement matériel se produit et annule les activités du pointeur. Cela peut inclure, par exemple, le fait que l'utilisateur·ice change d'application en utilisant une interface de commutation d'application ou le bouton «&nbsp;accueil&nbsp;» sur un appareil mobile.
- L'orientation de l'écran de l'appareil est modifiée alors que le pointeur est actif.
- Le navigateur décide que l'utilisateur·ice a commencé une saisie au pointeur par accident. Cela peut se produire si, par exemple, le matériel prend en charge le rejet de la paume pour empêcher qu'une main reposant sur l'écran tout en utilisant un stylet ne déclenche accidentellement des évènements.
- La propriété CSS {{CSSxRef("touch-action")}} empêche la saisie de continuer.
- Lorsque l'utilisateur·ice interagit avec trop de pointeurs simultanés, le navigateur peut déclencher cet évènement pour tous les pointeurs existants (même si l'utilisateur·ice touche encore l'écran).

> [!NOTE]
> Après le déclenchement de l'évènement `pointercancel`, le navigateur envoie également {{DOMxRef("Element/pointerout_event", "pointerout")}} suivi de {{DOMxRef("Element/pointerleave_event", "pointerleave")}}.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("pointercancel", (event) => { })

onpointercancel = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("PointerEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("PointerEvent")}}

## Exemples

Utilisation de `addEventListener()`&nbsp;:

```js
const para = document.querySelector("p");

para.addEventListener("pointercancel", (event) => {
  console.log("Annulation de l'évènement pointer");
});
```

Utilisation de la propriété de gestionnaire d'évènement `onpointercancel`&nbsp;:

```js
const para = document.querySelector("p");

para.onpointercancel = (event) => {
  console.log("Annulation de l'évènement pointer");
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
  - {{DOMxRef("Element/pointerout_event", "pointerout")}}
  - {{DOMxRef("Element/pointerleave_event", "pointerleave")}}
  - {{DOMxRef("Element/pointerrawupdate_event", "pointerrawupdate")}}
