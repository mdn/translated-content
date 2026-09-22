---
title: "Element : évènement transitionend"
short-title: transitionend
slug: Web/API/Element/transitionend_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef}}

L'évènement **`transitionend`** est déclenché lorsqu'une [transition CSS](/fr/docs/Web/CSS/Guides/Transitions/Using) est terminée. Dans le cas où une transition est supprimée avant d'avoir terminé, comme si la {{CSSxRef("transition-property")}} est supprimée ou si {{CSSxRef("display")}} est définie sur `none`, alors l'évènement n'est pas généré.

L'évènement `transitionend` est déclenché dans les deux sens — lorsqu'il termine la transition vers l'état transitionné, et lorsqu'il revient complètement à l'état par défaut ou non transitionné. Si aucune durée ou délai de transition n'est défini, si les deux sont à 0s ou si aucun n'est déclaré, il n'y a pas de transition et aucun des évènements de transition n'est déclenché. Si l'évènement `transitioncancel` est déclenché, l'évènement `transitionend` ne l'est pas.

Cet évènement n'est pas annulable.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("transitionend", (event) => { })

ontransitionend = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("TransitionEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("TransitionEvent")}}

## Exemples

Ce code récupère un élément qui a une transition définie et ajoute un écouteur pour l'évènement `transitionend`&nbsp;:

```js
const transition = document.querySelector(".transition");

transition.addEventListener("transitionend", () => {
  console.log("Transition terminée");
});
```

Le même exemple, mais en utilisant la propriété `ontransitionend` au lieu de `addEventListener()`&nbsp;:

```js
const transition = document.querySelector(".transition");

transition.ontransitionend = () => {
  console.log("Transition terminée");
};
```

### Exemple interactif

Dans l'exemple suivant, nous avons un simple élément HTML {{HTMLElement("div")}}, stylé avec une transition qui inclut un délai&nbsp;:

```html
<div class="transition">Survolez-moi</div>
<div class="message"></div>
```

```css
.transition {
  width: 100px;
  height: 100px;
  background: red;
  transition-property: transform, background;
  transition-duration: 2s;
  transition-delay: 1s;
}

.transition:hover {
  transform: rotate(90deg);
  background: transparent;
}
```

À cela, nous ajoutons du JavaScript pour indiquer que les évènements {{DOMxRef("Element/transitionstart_event", "transitionstart")}}, {{DOMxRef("Element/transitionrun_event", "transitionrun")}}, {{DOMxRef("Element/transitioncancel_event", "transitioncancel")}} et `transitionend` sont déclenchés. Dans cet exemple, pour annuler la transition, cessez de survoler la boîte en transition avant la fin de la transition. Pour que l'évènement de fin de transition soit déclenché, restez sur la transition jusqu'à la fin de celle-ci.

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

L'évènement `transitionend` est déclenché dans les deux sens&nbsp;: lorsque la boîte a fini de tourner et que l'opacité atteint 0 ou 1, selon la direction.

S'il n'y a pas de délai ou de durée de transition, si les deux sont à 0s ou si aucun n'est déclaré, il n'y a pas de transition, et aucun des évènements de transition n'est déclenché.

Si l'évènement `transitioncancel` est déclenché, l'évènement `transitionend` ne l'est pas.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("TransitionEvent")}}
- Les propriétés CSS {{CSSxRef("transition")}}, {{CSSxRef("transition-delay")}}, {{CSSxRef("transition-duration")}}, {{CSSxRef("transition-property")}}, {{CSSxRef("transition-timing-function")}}
- Évènements associés&nbsp;: {{DOMxRef("Element/transitionrun_event", "transitionrun")}}, {{DOMxRef("Element/transitionstart_event", "transitionstart")}}, {{DOMxRef("Element/transitioncancel_event", "transitioncancel")}}
