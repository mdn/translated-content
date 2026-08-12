---
title: "Element : évènement transitioncancel"
short-title: transitioncancel
slug: Web/API/Element/transitioncancel_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef}}

L'évènement **`transitioncancel`** est déclenché lorsqu'une [transition CSS](/fr/docs/Web/CSS/Guides/Transitions/Using) est annulée.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("transitioncancel", (event) => { })

ontransitioncancel = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("TransitionEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("TransitionEvent")}}

## Exemples

Ce code récupère un élément qui a une transition définie et ajoute un écouteur pour l'évènement `transitioncancel`&nbsp;:

```js
const transition = document.querySelector(".transition");

transition.addEventListener("transitioncancel", () => {
  console.log("Transition annulée");
});
```

Le même exemple, mais en utilisant la propriété `ontransitioncancel` au lieu de `addEventListener()`&nbsp;:

```js
const transition = document.querySelector(".transition");

transition.ontransitioncancel = () => {
  console.log("Transition annulée");
};
```

### Exemple interactif

Dans l'exemple suivant, nous avons un simple élément HTML {{HTMLElement("div")}}, stylé avec une transition qui inclut un délai&nbsp;:

```html
<div class="transition"></div>
<div class="message"></div>
```

```css
.transition {
  width: 100px;
  height: 100px;
  background: red;
  transition-property: transform, background;
  transition-duration: 2s;
  transition-delay: 2s;
}

.transition:hover {
  transform: rotate(90deg);
  background: transparent;
}
```

À cela, nous ajoutons du JavaScript pour indiquer que les évènements {{DOMxRef("Element.transitionstart_event", "transitionstart")}}, {{DOMxRef("Element/transitionrun_event", "transitionrun")}}, `transitioncancel` et {{DOMxRef("Element/transitionend_event", "transitionend")}} se déclenchent. Dans cet exemple, pour annuler la transition, cessez de survoler la boîte en transition avant la fin de la transition. Pour que l'évènement de fin de transition se déclenche, restez sur la transition jusqu'à la fin de celle-ci.

```js
const message = document.querySelector(".message");
const el = document.querySelector(".transition");

el.addEventListener("transitionrun", () => {
  message.textContent = "transitionrun déclenché";
});

el.addEventListener("transitionstart", () => {
  message.textContent = "transitionstart déclenché";
});

el.addEventListener("transitioncancel", () => {
  message.textContent = "transitioncancel déclenché";
});

el.addEventListener("transitionend", () => {
  message.textContent = "transitionend déclenché";
});
```

{{EmbedLiveSample("Exemple interactif", "100%", 150)}}

L'évènement `transitioncancel` est déclenché si la transition est annulée dans un sens ou dans l'autre après que l'évènement `transitionrun` se soit produit et avant que l'évènement `transitionend` ne soit déclenché.

Si aucune durée ou délai de transition n'est défini, si les deux sont à 0s ou si aucun n'est déclaré, il n'y a pas de transition et aucun des évènements de transition n'est déclenché.

Si l'évènement `transitioncancel` est déclenché, l'évènement `transitionend` n'est pas déclenché.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("TransitionEvent")}}
- Les propriétés CSS {{CSSxRef("transition")}}, {{CSSxRef("transition-delay")}}, {{CSSxRef("transition-duration")}}, {{CSSxRef("transition-property")}}, {{CSSxRef("transition-timing-function")}}
- Évènements associés&nbsp;: {{DOMxRef("Element/transitionrun_event", "transitionrun")}}, {{DOMxRef("Element/transitionstart_event", "transitionstart")}}, {{DOMxRef("Element/transitionend_event", "transitionend")}}
