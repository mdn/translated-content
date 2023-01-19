---
title: AnimationEvent()
slug: Web/API/AnimationEvent/AnimationEvent
---

{{APIRef("Web Animations API")}}{{SeeCompatTable}}

The **`AnimationEvent()`** constructor returns a newly created {{domxref("AnimationEvent")}}, representing an event in relation with an animation.

## 语法

```
animationEvent = new AnimationEvent(type, {animationName: aPropertyName,
                                           elapsedTime  : aFloat,
                                           pseudoElement: aPseudoElementName});
```

### 参数

_Also inherits properties from its parent {{domxref("Event")}}_.

- {{domxref("AnimationEvent.animationName")}} {{ReadOnlyInline}}
  - : A string containing the value of the {{cssxref("animation-name")}} that generated the animation.
- {{domxref("AnimationEvent.elapsedTime")}} {{ReadOnlyInline}}
  - : A `float` giving the amount of time the animation has been running, in seconds, when this event fired, excluding any time the animation was paused. For an `animationstart` event, `elapsedTime` is `0.0` unless there was a negative value for {{cssxref("animation-delay")}}, in which case the event will be fired with `elapsedTime` containing `(-1 * delay)`.
- {{domxref("AnimationEvent.pseudoElement")}} {{ReadOnlyInline}}
  - : A string, starting with `'::'`, containing the name of the [pseudo-element](/zh-CN/docs/Web/CSS/Pseudo-elements) the animation runs on. If the animation doesn't run on a pseudo-element but on the element, an empty string: `''`.

## 标准

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- [Using CSS animations](/zh-CN/docs/CSS/Using_CSS_animations)
- Animation-related CSS properties and at-rules: [`animation`](/zh-CN/docs/Web/CSS/animation), [`animation-delay`](/zh-CN/docs/Web/CSS/animation-delay), [`animation-direction`](/zh-CN/docs/Web/CSS/animation-direction), [`animation-duration`](/zh-CN/docs/Web/CSS/animation-duration), [`animation-fill-mode`](/zh-CN/docs/Web/CSS/animation-fill-mode), [`animation-iteration-count`](/zh-CN/docs/Web/CSS/animation-iteration-count), [`animation-name`](/zh-CN/docs/Web/CSS/animation-name), [`animation-play-state`](/zh-CN/docs/Web/CSS/animation-play-state), [`animation-timing-function`](/zh-CN/docs/Web/CSS/animation-timing-function), [`@keyframes`](/zh-CN/docs/Web/CSS/@keyframes)
- The {{domxref("AnimationEvent")}} interface it belongs to.
