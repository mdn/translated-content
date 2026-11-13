---
title: "Element : évènement pointerdown"
short-title: pointerdown
slug: Web/API/Element/pointerdown_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Pointer Events")}}

L'évènement **`pointerdown`** est déclenché lorsqu'un pointeur devient actif. Pour la souris, il est déclenché lorsque le périphérique passe de aucun bouton enfoncé à au moins un bouton enfoncé. Pour le tactile, il est déclenché lorsqu'un contact physique est établi avec le numériseur. Pour le stylet, il est déclenché lorsque le stylet entre en contact physique avec le numériseur.

Ce comportement est différent de celui des évènements {{DOMxRef("Element/mousedown_event", "mousedown")}}. Lors de l'utilisation d'une souris physique, les évènements `mousedown` se déclenchent chaque fois qu'un bouton de la souris est enfoncé. Les évènements `pointerdown` ne se déclenchent que lors du premier appui sur un bouton&nbsp;; les appuis suivants ne déclenchent pas d'évènement `pointerdown`.

> [!NOTE]
> Pour les navigateurs tactiles qui permettent la [manipulation directe <sup>(angl.)</sup>](https://w3c.github.io/pointerevents/#dfn-direct-manipulation), un évènement `pointerdown` déclenche une [capture implicite du pointeur <sup>(angl.)</sup>](https://w3c.github.io/pointerevents/#dfn-implicit-pointer-capture), ce qui fait que la cible capture tous les évènements de pointeur suivants comme s'ils se produisent sur la cible de capture. En conséquence, `pointerover`, `pointerenter`, `pointerleave` et `pointerout` **ne se déclenchent pas** tant que cette capture est active. La capture peut être libérée manuellement en appelant {{DOMxRef("element.releasePointerCapture")}} sur l'élément cible, ou elle est libérée implicitement après un évènement `pointerup` ou `pointercancel`.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("pointerdown", (event) => { })

onpointerdown = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("PointerEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("PointerEvent")}}

## Exemples

Utilisation de `addEventListener()`&nbsp;:

```js
const para = document.querySelector("p");

para.addEventListener("pointerdown", (event) => {
  console.log("Évènement d'appui sur le pointeur");
});
```

Utilisation de la propriété de gestionnaire d'évènement `onpointerdown`&nbsp;:

```js
const para = document.querySelector("p");

para.onpointerdown = (event) => {
  console.log("Évènement d'appui sur le pointeur");
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
  - {{DOMxRef("Element/pointermove_event", "pointermove")}}
  - {{DOMxRef("Element/pointerup_event", "pointerup")}}
  - {{DOMxRef("Element/pointercancel_event", "pointercancel")}}
  - {{DOMxRef("Element/pointerout_event", "pointerout")}}
  - {{DOMxRef("Element/pointerleave_event", "pointerleave")}}
  - {{DOMxRef("Element/pointerrawupdate_event", "pointerrawupdate")}}
  - {{DOMxRef("Element/mousedown_event", "mousedown")}}
