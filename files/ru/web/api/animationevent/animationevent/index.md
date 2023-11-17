---
title: AnimationEvent()
slug: Web/API/AnimationEvent/AnimationEvent
---

{{APIRef("Web Animations")}}{{SeeCompatTable}}

The **`AnimationEvent()`** constructor returns a newly created {{domxref("AnimationEvent")}}, representing an event in relation with an animation.

## Синтаксис

```
animationEvent = new AnimationEvent(type, {animationName: aPropertyName,
                                           elapsedTime  : aFloat,
                                           pseudoElement: aPseudoElementName});
```

### Параметры

_Конструктор `AnimationEvent()` также наследует аргументы от объекта {{domxref("Event.Event", "Event()")}}._

- `type`
  - : A {{domxref("DOMString")}} representing the name of the type of the `AnimationEvent`. It is case-sensitive and can be: `'animationstart'`, `'animationend'`, or `'animationiteration'`.
- `animationName` {{optional_inline}}
  - : A {{domxref("DOMString")}} containing the value of the {{cssxref("animation-name")}} CSS property associated with the transition. It defaults to `""`.
- `elapsedTime` {{optional_inline}}
  - : A `float` giving the amount of time the animation has been running, in seconds, when this event fired, excluding any time the animation was paused. For an `"animationstart"` event, `elapsedTime` is `0.0` unless there was a negative value for {{cssxref("animation-delay")}}, in which case the event will be fired with `elapsedTime` containing `(-1 * delay)`. It defaults to `0.0`.
- `pseudoElement` {{optional_inline}}
  - : Is a {{domxref("DOMString")}}, starting with `"::"`, containing the name of the [pseudo-element](/ru/docs/Web/CSS/Pseudo-elements) the animation runs on. If the animation doesn't run on a pseudo-element but on the element itself, specify an empty string: `""`. It defaults to `""`.

### Возвращаемое значение

A new {{domxref("AnimationEvent")}}, initialized per any provided options.

## Спецификации

{{Specifications}}

## Браузерная совместимость

{{Compat}}

## Смотрите также

- [Using CSS animations](/ru/docs/CSS/Using_CSS_animations)
- Animation-related CSS properties and at-rules: {{cssxref("animation")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}}, {{cssxref("@keyframes")}}
- The {{domxref("AnimationEvent")}} interface it belongs to.
