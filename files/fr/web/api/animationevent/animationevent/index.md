---
title: AnimationEvent()
slug: Web/API/AnimationEvent/AnimationEvent
translation_of: Web/API/AnimationEvent/AnimationEvent
---
{{APIRef("Web Animations")}}{{SeeCompatTable}}

Le constructeur **`AnimationEvent()`** retourne un nouvel {{domxref("AnimationEvent")}}, représentant un évènement en relation avec une animation.

## Syntaxe

    animationEvent = new AnimationEvent(type, {animationName: aPropertyName,
                                               elapsedTime  : aFloat,
                                               pseudoElement: aPseudoElementName});

### Paramètres

*Le constructeur `AnimationEvent()` hérite également des arguments du constructeur [`Event()`](/fr/docs/Web/API/Event/Event).*

- `type`
  - : Un {{domxref("DOMString")}} représentant le nom du type de `AnimationEvent`. Il est sensible à la casse (majuscule-minuscule) et peut être: `'animationstart'`, `'animationend'`, or `'animationiteration'`.
- `animationName` {{optional_inline}}
  - : Un {{domxref("DOMString")}} contenant la valeur de  la propriété associée avec la transition.{{cssxref("animation-name")}} . Prend par défaut `""`.
- `elapsedTime` {{optional_inline}}
  - : Un `float` donne le montant de temps d'une application qui a fonctionné, en secondes, quand l'évènement est déclenché, excluant le temps de pause des animations. Pour un évènement `animationstart`, `elapsedTime` est de `0.0` jusqu'à ce qu'il y ait une valeur négative pour une valeur [`animation-delay`](/fr/docs/Web/CSS/animation-delay), dans le cas où l'évènement est déclenché par `elapsedTime` contenant `(-1 * délai)`. Sa valeur par défaut vaut `0.0`.
- `pseudoElement` {{optional_inline}}
  - : Is a {{domxref("DOMString")}}, starting with `"::"`, containing the name of the [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) the animation runs on. If the animation doesn't run on a pseudo-element but on the element itself, specify an empty string: `""`. It defaults to `""`.

### Return value

A new {{domxref("AnimationEvent")}}, initialized per any provided options.

## Specifications

| Specification                                                                                                | Status                                   | Comment             |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | ------------------- |
| {{ SpecName('CSS3 Animations', '#AnimationEvent-interface', 'AnimationEvent()') }} | {{ Spec2('CSS3 Animations')}} | Initial definition. |

## Browser compatibility

{{Compat("api.AnimationEvent.AnimationEvent")}}

## See also

- [Using CSS animations](/en-US/docs/CSS/Using_CSS_animations)
- Animation-related CSS properties and at-rules: {{cssxref("animation")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}}, {{cssxref("@keyframes")}}
- The {{domxref("AnimationEvent")}} interface it belongs to.
