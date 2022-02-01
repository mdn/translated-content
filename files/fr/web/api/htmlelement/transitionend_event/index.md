---
title: transitionend
slug: Web/API/HTMLElement/transitionend_event
tags:
  - DOM
  - Event
  - TransitionEvent
  - Transitions CSS
  - Transitions CSS3
  - transitionend
translation_of: Web/API/HTMLElement/transitionend_event
original_slug: Web/Events/transitionend
---
{{APIRef}}

L'événement **`transitionend`** est déclenché lorsqu'une [transition CSS](/en-US/docs/CSS/Using_CSS_transitions) est terminée. Dans le cas où une transition est supprimée avant la fin, par exemple si {{cssxref ("transition-property")}} est supprimé ou {{cssxref ("display")}} est défini sur `none`, alors l'événement ne pourra pas être généré.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bulles</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Annulable</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("TransitionEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Propriété de gestionnaire d'événements</th>
      <td>
        {{domxref("GlobalEventHandlers/ontransitionend", "ontransitionend")}}
      </td>
    </tr>
  </tbody>
</table>

L'événement `transitionend` est déclenché dans les deux sens - à la fin de la transition vers l'état de transition et lorsqu'il revient complètement à l'état par défaut ou sans transition. S'il n'y a pas de délai ou de durée de transition, si les deux sont 0 ou qu'aucun n'est déclaré, il n'y a pas de transition et aucun des événements de transition n'est déclenché.  Si l'événement `transitioncancel` est déclenché, l'événement `transitionend` ne se déclenchera pas.

## Propriétés

| Propriétés                               | Type                                 | Description                                                                                                                                                                                                                                                                                                |
| ---------------------------------------- | ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}        | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree).                                                                                                                                                                                                                                                     |
| `type` {{readonlyInline}}          | {{domxref("DOMString")}}     | The type of event.                                                                                                                                                                                                                                                                                         |
| `bubbles` {{readonlyInline}}       | {{jsxref("Boolean")}}         | Whether the event normally bubbles or not.                                                                                                                                                                                                                                                                 |
| `cancelable` {{readonlyInline}}    | {{jsxref("Boolean")}}         | Whether the event is cancellable or not.                                                                                                                                                                                                                                                                   |
| `propertyName` {{readonlyInline}}  | {{domxref("DOMString")}}     | The name of the CSS property associated with the transition.                                                                                                                                                                                                                                               |
| `elapsedTime` {{readonlyInline}}   | Float                                | The amount of time the transition has been running, in seconds, as of the time the event was generated. This value is not affected by the value of `transition-delay`.                                                                                                                                     |
| `pseudoElement` {{readonlyInline}} | {{domxref("DOMString")}}     | The name (beginning with two colons) of the CSS pseudo-element on which the transition occured (in which case the target of the event is that pseudo-element's corresponding element), or the empty string if the transition occurred on an element (which means the target of the event is that element). |

## Examples

This code gets an element that has a transition defined and adds a listener to the `transitionend` event:

```js
const transition = document.querySelector('.transition');

transition.addEventListener('transitionend', () => {
  console.log('Transition ended');
});
```

The same, but using the {{domxref("GlobalEventHandlers/ontransitionend", "ontransitionend")}}:

```js
const transition = document.querySelector('.transition');

transition.ontransitionend = () => {
  console.log('Transition ended');
};
```

### Live example

In the following example, we have a simple {{htmlelement("div")}} element, styled with a transition that includes a delay:

```html
<div class="transition">Hover over me</div>
<div class="message"></div>
```

```css
.transition {
  width: 100px;
  height: 100px;
  background: rgba(255,0,0,1);
  transition-property: transform background;
  transition-duration: 2s;
  transition-delay: 1s;
}

.transition:hover {
  transform: rotate(90deg);
  background: rgba(255,0,0,0);
}
```

To this, we'll add some JavaScript to indicate that the [`transitionstart`](/en-US/docs/Web/API/HTMLElement/transitionstart_event), [`transitionrun`](/en-US/docs/Web/API/HTMLElement/transitionrun_event), [`transitioncancel`](/en-US/docs/Web/API/Window/transitioncancel_event) and `transitionend` events fire. In this example, to cancel the transition, stop hovering over the transitioning box before the transition ends. For the transition end event to fire, stay hovered over the transition until the transition ends.

```js
const message = document.querySelector('.message');
const el = document.querySelector('.transition');

el.addEventListener('transitionrun', function() {
  message.textContent = 'transitionrun fired';
});

el.addEventListener('transitionstart', function() {
  message.textContent = 'transitionstart fired';
});

el.addEventListener('transitioncancel', function() {
  message.textContent = 'transitioncancel fired';
});

el.addEventListener('transitionend', function() {
  message.textContent = 'transitionend fired';
});
```

{{ EmbedLiveSample('Live_example', '100%', '150px') }}

The `transitionend` event is fired in both directions: when the box finishes turning and the opacity hits 0 or 1, depending on the direction.

If there is no transition delay or duration, if both are 0s or neither is declared, there is no transition, and none of the transition events are fired.

If the `transitioncancel` event is fired, the `transitionend` event will not fire.

## Spécifications

| Spécification                                                                            | Statut                                   | Commentaire          |
| ---------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName("CSS3 Transitions", "#transitionend", "transitionend")}} | {{Spec2('CSS3 Transitions')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.HTMLElement.transitionend_event")}}

## Voir également

- Le gestionnaire d'événements {{domxref("GlobalEventHandlers.ontransitionend")}}
- L'interface {{domxref("TransitionEvent")}}
- Propriétés CSS : {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- Événements liés: {{domxref("HTMLElement/transitionrun_event", "transitionrun")}}, {{domxref("HTMLElement/transitionstart_event", "transitionstart")}}, {{domxref("HTMLElement/transitioncancel_event", "transitioncancel")}}
- Cet événement sur {{domxref("Document")}} cible : {{domxref("Document/transitionend_event", "transitionend")}}
- Cet événement sur {{domxref("Window")}} cible : {{domxref("Window/transitionend_event", "transitionend")}}
