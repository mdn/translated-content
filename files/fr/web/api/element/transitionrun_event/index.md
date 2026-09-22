---
title: "Element : évènement transitionrun"
short-title: transitionrun
slug: Web/API/Element/transitionrun_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef}}

L'évènement **`transitionrun`** est déclenché lorsqu'une [transition CSS](/fr/docs/Web/CSS/Guides/Transitions/Using) est créée, c'est-à-dire avant que tout {{CSSxRef("transition-delay")}} n'ait commencé.

Cet évènement n'est pas annulable.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("transitionrun", (event) => { })

ontransitionrun = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("TransitionEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("TransitionEvent")}}

## Exemples

Ce code ajoute un écouteur pour l'évènement `transitionrun`&nbsp;:

```js
el.addEventListener("transitionrun", () => {
  console.log(
    "La transition est en cours mais n'a pas nécessairement commencé à se produire",
  );
});
```

Le même exemple, mais en utilisant la propriété `ontransitionrun` au lieu de `addEventListener()`&nbsp;:

```js
el.ontransitionrun = () => {
  console.log(
    "La transition a commencé à s'exécuter et commence à se produire lorsque le délai de transition est écoulé",
  );
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

À cela, nous ajoutons du JavaScript pour indiquer où les évènements {{DOMxRef("Element/transitionstart_event", "transitionstart")}} et `transitionrun` sont déclenchés.

```js
const el = document.querySelector(".transition");
const message = document.querySelector(".message");

el.addEventListener("transitionrun", () => {
  message.textContent = "transitionrun déclenché";
});

el.addEventListener("transitionstart", () => {
  message.textContent = "transitionstart déclenché";
});

el.addEventListener("transitionend", () => {
  message.textContent = "transitionend déclenché";
});
```

{{EmbedLiveSample("Exemple interactif", "100%", 150)}}

La différence est la suivante&nbsp;:

- `transitionrun` est déclenché lorsque la transition est créée (c'est-à-dire au début de tout délai).
- `transitionstart` est déclenché lorsque l'animation effective a commencé (c'est-à-dire à la fin de tout délai).

L'évènement `transitionrun` se produit même si la transition est annulée avant l'expiration du délai. S'il n'y a aucun délai de transition ou si le délai de transition est négatif, `transitionrun` et `transitionstart` sont tous deux déclenchés.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("TransitionEvent")}}
- Les propriétés CSS {{CSSxRef("transition")}}, {{CSSxRef("transition-delay")}}, {{CSSxRef("transition-duration")}}, {{CSSxRef("transition-property")}}, {{CSSxRef("transition-timing-function")}}
- Évènements associés&nbsp;: {{DOMxRef("Element/transitionend_event", "transitionend")}}, {{DOMxRef("Element/transitionstart_event", "transitionstart")}}, {{DOMxRef("Element/transitioncancel_event", "transitioncancel")}}
