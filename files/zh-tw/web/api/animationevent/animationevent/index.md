---
title: AnimationEvent.initAnimationEvent()
slug: Web/API/AnimationEvent/AnimationEvent
original_slug: Web/API/AnimationEvent/initAnimationEvent
---

{{ apiref("Web Animations API") }}

The **`AnimationEvent.initAnimationEvent()`** method Initializes an animation event created using the deprecated {{domxref("Document.createEvent()", "Document.createEvent(\"AnimationEvent\")")}} method.

`AnimationEvent` created this way are untrusted.

> **備註：** During the standardization process, this method was removed from the specification. It has been deprecated and is in the progress of being removed from most implementations. **Do not use this method**; instead, use the standard constructor, {{domxref("AnimationEvent.AnimationEvent", "AnimationEvent()")}}, to create a synthetic {{domxref("AnimationEvent")}}.

## Syntax

```plain
animationEvent.initAnimationEvent(typeArg, canBubbleArg, cancelableArg, animationNameArg, elapsedTimeArg);
```

### Parameters

- `typeArg`

  - : A {{domxref("DOMString")}} identifying the specific type of animation event that occurred. The following values are allowed:

    | Value                | Meaning                               |
    | -------------------- | ------------------------------------- |
    | `animationstart`     | The animation has started.            |
    | `animationend`       | The animation completed.              |
    | `animationiteration` | The current iteration just completed. |

- `canBubbleArg`
  - : A {{domxref("Boolean")}} flag indicating if the event can bubble (`true`) or not (`false)`.
- `cancelableArg`
  - : A {{domxref("Boolean")}} flag indicating if the event associated action can be avoided (`true`) or not (`false)`.
- `animationNameArg`
  - : A {{domxref("DOMString")}} containing the value of the {{cssxref("animation-name")}} CSS property associated with the transition.
- `elapsedTimeArg`
  - : A `float` indicating the amount of time the animation has been running, in seconds, as of the time the event was fired, excluding any time the animation was paused. For an `"animationstart"` event, `elapsedTime` is `0.0` unless there was a negative value for [`animation-delay`](/zh-TW/docs/Web/CSS/animation-delay), in which case the event will be fired with `elapsedTime` containing `(-1 * delay)`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS animations](/zh-TW/docs/CSS/Using_CSS_animations)
- Animation-related CSS properties and at-rules: {{cssxref("animation")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}}, {{cssxref("@keyframes")}}.
- The {{domxref("AnimationEvent")}} interface it belongs to.
