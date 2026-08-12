---
title: "Element : évènement pointermove"
short-title: pointermove
slug: Web/API/Element/pointermove_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Pointer Events")}}

L'évènement **`pointermove`** se déclenche lorsqu'un dispositif de pointage change de coordonnées, et que le pointeur n'a pas été [annulé](/fr/docs/Web/API/Element/pointercancel_event) par une [action tactile](/fr/docs/Web/CSS/Reference/Properties/touch-action) du navigateur. Il est très similaire à l'évènement {{DOMxRef("Element/mousemove_event", "mousemove")}}, mais avec plus de fonctionnalités.

Ces évènements se produisent que des boutons du dispositif de pointage soient enfoncés ou non. Ils peuvent se déclencher à un rythme très élevé, en fonction de la rapidité avec laquelle l'utilisateur·ice déplace le pointeur, de la rapidité de la machine, des autres tâches et processus en cours, etc.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("pointermove", (event) => { })

onpointermove = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("PointerEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("PointerEvent")}}

## Notes d'utilisation

L'évènement, qui est de type {{DOMxRef("PointerEvent")}}, fournit toutes les informations nécessaires sur l'interaction de l'utilisateur·ice avec le dispositif de pointage, y compris la position, la distance de déplacement, l'état des boutons, et bien plus encore.

## Exemples

Pour ajouter un gestionnaire pour les évènements `pointermove` en utilisant {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}&nbsp;:

```js
const para = document.querySelector("p");

para.addEventListener("pointermove", (event) => {
  console.log("Le pointeur a bougé");
});
```

Utilisation de la propriété de gestionnaire d'évènements `onpointermove`&nbsp;:

```js
const para = document.querySelector("p");

para.onpointermove = (event) => {
  console.log("Le pointeur a bougé");
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
  - {{DOMxRef("Element/pointerup_event", "pointerup")}}
  - {{DOMxRef("Element/pointercancel_event", "pointercancel")}}
  - {{DOMxRef("Element/pointerout_event", "pointerout")}}
  - {{DOMxRef("Element/pointerleave_event", "pointerleave")}}
  - {{DOMxRef("Element/pointerrawupdate_event", "pointerrawupdate")}}
  - {{DOMxRef("Element/mousemove_event", "mousemove")}}
