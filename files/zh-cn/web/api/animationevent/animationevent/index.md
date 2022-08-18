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

_The `AnimationEvent()`_ _constructor also inherits arguments from {{domxref("Event.Event", "Event()")}}._

- `type`
  - : {{domxref("DOMString")}} 代表 `AnimationEvent` 类型的名称。大小写敏感，有三个值可选：`'animationstart'`、`'animationend'` 和 `'animationiteration'`。
- `animationName` {{optional_inline}}
  - : A {{domxref("DOMString")}} containing the value of the {{cssxref("animation-name")}} CSS property associated with the transition. It defaults to `""`.
- `elapsedTime` {{optional_inline}}
  - : A `float` giving the amount of time the animation has been running, in seconds, when this event fired, excluding any time the animation was paused. For an `"animationstart"` event, `elapsedTime` is `0.0` unless there was a negative value for [`animation-delay`](/en-US/docs/Web/CSS/animation-delay), in which case the event will be fired with `elapsedTime` containing `(-1 * delay)`. It defaults to `0.0`.
- `pseudoElement` {{optional_inline}}
  - : Is a {{domxref("DOMString")}}, starting with `"::"`, containing the name of the [pseudo-element](/zh-CN/docs/Web/CSS/Pseudo-elements) the animation runs on. If the animation doesn't run on a pseudo-element but on the element, an empty string: ` ""``. ` It defaults to `""`.

## 标准

{{Specifications}}

## 浏览器兼容性

{{Compat("api.AnimationEvent.AnimationEvent")}}

## 参考

- [Using CSS animations](/zh-CN/docs/CSS/Using_CSS_animations)
- Animation-related CSS properties and at-rules: [`animation`](/en-US/docs/Web/CSS/animation), [`animation-delay`](/en-US/docs/Web/CSS/animation-delay), [`animation-direction`](/en-US/docs/Web/CSS/animation-direction), [`animation-duration`](/en-US/docs/Web/CSS/animation-duration), [`animation-fill-mode`](/en-US/docs/Web/CSS/animation-fill-mode), [`animation-iteration-count`](/en-US/docs/Web/CSS/animation-iteration-count), [`animation-name`](/en-US/docs/Web/CSS/animation-name), [`animation-play-state`](/en-US/docs/Web/CSS/animation-play-state), [`animation-timing-function`](/en-US/docs/Web/CSS/animation-timing-function), [`@keyframes`](/en-US/docs/Web/CSS/@keyframes)
- The {{domxref("AnimationEvent")}} interface it belongs to.
