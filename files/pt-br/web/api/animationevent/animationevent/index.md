---
title: AnimationEvent()
slug: Web/API/AnimationEvent/AnimationEvent
tags:
  - AnimationEvent
  - Apps
  - CSSOM
  - Experimental
  - Referencia
translation_of: Web/API/AnimationEvent/AnimationEvent
---

{{APIRef("Web Animations API")}}{{SeeCompatTable}}

`O construtor AnimationEvent()` retorna o recente criado {{domxref("AnimationEvent")}}, representando um evento em relação a animação.

## Síntaxe

    animationEvent = new AnimationEvent(type, {animationName: aPropertyName,
                                               elapsedTime  : aFloat,
                                               pseudoElement: aPseudoElementName});

### Argumentos

*O construtor `AnimationEvent()`* *também herda argumentos do {{domxref("Event.Event", "Event()")}}.*

- `type`
  - : Um {{domxref("DOMString")}} representando o nome do tipo de `AnimationEvent`. É caso sensitivo e pode ser: `'animationstart'`, `'animationend'`, ou `'animationiteration'`.
- `animationName` {{optional_inline}}
  - : Um{{domxref("DOMString")}} contendo o valor do {{cssxref("animation-name")}} propriedade CSS associada com a transição. É por padrão `""`.
- `elapsedTime` {{optional_inline}}
  - : Um ponto flutuante dando a quantidade de tempo que a animação esteve rodando, em segundos, quando o evento termina, excluindo qualquer tempo que ela passou pausada. Para um evento `"animationstart"`, `elapsedTime` é `0.0` a não ser que haja um valor negativo para [`animation-delay`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay "The animation-delay CSS property specifies when the animation should start. This lets the animation sequence begin some time after it's applied to an element."), nesse caso o evento terminará com `elapsedTime contendo`  `(-1 * `_delay_`)`. É por padrão `0.0`.
- `pseudoElement` {{optional_inline}}
  - : É um `{{domxref("DOMString")}}`, começando com`"::"`, contendo o nome do [pseudo-element](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements '/en-US/docs/Web/CSS/Pseudo-elements') que a animação roda. Se a animação não roda em um pseudo-elementomas em um elemento, então temos um _string_ vazio `"" .`É por padrão `""`.

## Especificações

| Especificações                                                                     | Estado                        | Comentário          |
| ---------------------------------------------------------------------------------- | ----------------------------- | ------------------- |
| {{ SpecName('CSS3 Animations', '#AnimationEvent-interface', 'AnimationEvent()') }} | {{ Spec2('CSS3 Animations')}} | Initial definition. |

## Compatibilidade com navegadores

{{Compat}}

## Veja também 

- [Usando animações CSS](https://developer.mozilla.org/en-US/docs/CSS/Using_CSS_animations).
- Tópicos relacionados a animação CSS, propriedades e regras: [`animation`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation 'The animation CSS property is a shorthand property for animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count and animation-direction.'), [`animation-delay`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay "The animation-delay CSS property specifies when the animation should start. This lets the animation sequence begin some time after it's applied to an element."), [`animation-direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction 'The animation-direction CSS property indicates whether the animation should play in reverse on alternate cycles.'), [`animation-duration`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration 'The animation-duration CSS property specifies the length of time that an animation should take to complete one cycle.'), [`animation-fill-mode`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode 'The animation-fill-mode CSS property specifies how a CSS animation should apply styles to its target before and after it is executing.'), [`animation-iteration-count`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count 'The animation-iteration-count CSS property defines the number of times an animation cycle should be played before stopping.'), [`animation-name`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name 'The animation-name CSS property specifies a list of animations that should be applied to the selected element. Each name indicates a @keyframes at-rule that defines the property values for the animation sequence.'), [`animation-play-state`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state "The animation-play-state CSS property determines whether an animation is running or paused. You can query this property's value to determine whether or not the animation is currently running; in addition, you can set its value to pause and resume playback of an animation."), [`animation-timing-function`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function 'The CSS animation-timing-function property specifies how a CSS animation should progress over the duration of each cycle. The possible values are one or several <timing-function>.'), [`@keyframes`](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes 'The @keyframes CSS at-rule lets authors control the intermediate steps in a CSS animation sequence by establishing keyframes (or waypoints) along the animation sequence that must be reached by certain points during the animation. This gives you more specific control over the intermediate steps of the animation sequence than you get when letting the browser handle everything automatically.')
- The {{domxref("AnimationEvent")}} interface it belongs to.
