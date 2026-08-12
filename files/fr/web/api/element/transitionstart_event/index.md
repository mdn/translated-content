---
title: "Element : évènement transitionstart"
short-title: transitionstart
slug: Web/API/Element/transitionstart_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef}}

L'évènement **`transitionstart`** est déclenché lorsqu'une [transition CSS](/fr/docs/Web/CSS/Guides/Transitions/Using) a réellement commencé, c'est-à-dire après que tout {{CSSxRef("transition-delay")}} soit écoulé.

Cet évènement n'est pas annulable.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("transitionstart", (event) => { })

ontransitionstart = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("TransitionEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("TransitionEvent")}}

## Exemples

Ce code ajoute un écouteur pour l'évènement `transitionstart`&nbsp;:

```js
element.addEventListener("transitionstart", () => {
  console.log("La transition a commencé");
});
```

Le même exemple, mais en utilisant la propriété `ontransitionstart` au lieu de `addEventListener()`&nbsp;:

```js
element.ontransitionstart = () => {
  console.log("La transition a commencé");
};
```

### Exemple interactif

Dans l'exemple suivant, nous avons un simple élément HTML {{HTMLElement("div")}}, mis en forme avec une transition qui inclut un délai&nbsp;:

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

À cela, nous ajoutons du JavaScript pour indiquer où les évènements `transitionstart` et {{DOMxRef("Element/transitionrun_event", "transitionrun")}} sont déclenchés.

```js
const transition = document.querySelector(".transition");
const message = document.querySelector(".message");

transition.addEventListener("transitionrun", () => {
  message.textContent = "transitionrun déclenché";
});

transition.addEventListener("transitionstart", () => {
  message.textContent = "transitionstart déclenché";
});

transition.addEventListener("transitionend", () => {
  message.textContent = "transitionend déclenché";
});
```

{{EmbedLiveSample("Exemple interactif", "100%", 170)}}

La différence est la suivante&nbsp;:

- `transitionrun` est déclenché lorsque la transition est créée (c'est-à-dire au début de tout délai).
- `transitionstart` est déclenché lorsque l'animation effective a commencé (c'est-à-dire à la fin de tout délai).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("TransitionEvent")}}
- Les propriétés CSS {{CSSxRef("transition")}}, {{CSSxRef("transition-delay")}}, {{CSSxRef("transition-duration")}}, {{CSSxRef("transition-property")}}, {{CSSxRef("transition-timing-function")}}
- Évènements associés&nbsp;: {{DOMxRef("Element/transitionend_event", "transitionend")}}, {{DOMxRef("Element/transitionrun_event", "transitionrun")}}, {{DOMxRef("Element/transitioncancel_event", "transitioncancel")}}
