---
title: AnimationEvent
slug: Web/API/AnimationEvent
---

{{SeeCompatTable}}{{APIRef("Web Animations API")}}

## Summary

**`AnimationEvent`** 接口表示提供与动画相关的信息的事件。

{{InheritanceDiagram}}

## Properties

_属性继承其父级{{domxref("Event")}}_.

- {{domxref("AnimationEvent.animationName")}} {{readonlyInline}}
  - : Is a {{domxref("DOMString")}} containing the value of the {{cssxref("animation-name")}} CSS property associated with the transition.
- {{domxref("AnimationEvent.elapsedTime")}} {{readonlyInline}}
  - : Is a `float` giving the amount of time the animation has been running, in seconds, when this event fired, excluding any time the animation was paused. For an `"animationstart"` event, `elapsedTime` is `0.0` unless there was a negative value for {{cssxref("animation-delay")}}, in which case the event will be fired with `elapsedTime` containing `(-1 * delay)`.
- {{domxref("AnimationEvent.pseudoElement")}} {{readonlyInline}}
  - : Is a {{domxref("DOMString")}}, starting with `'::'`, containing the name of the [pseudo-element](/zh-CN/docs/Web/CSS/Pseudo-elements) the animation runs on. If the animation doesn't run on a pseudo-element but on the element, an empty string: `''`.

## Constructor

- {{domxref("AnimationEvent.AnimationEvent", "AnimationEvent()")}}
  - : Creates an `AnimationEvent` event with the given parameters.

## Methods

_Also inherits methods from its parent {{domxref("Event")}}_.

- {{domxref("AnimationEvent.initAnimationEvent()")}} {{non-standard_inline}}{{deprecated_inline}}
  - : Initializes a `AnimationEvent` created using the deprecated {{domxref("Document.createEvent()", "Document.createEvent(\"AnimationEvent\")")}} method.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS animations](/zh-CN/docs/CSS/Using_CSS_animations)
- {{cssxref("animation")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}}, {{cssxref("@keyframes")}}.
