---
title: EffectTiming.easing
slug: Web/API/KeyframeEffect/KeyframeEffect
---

{{ SeeCompatTable() }}{{ APIRef("Web Animations") }}

这个{{domxref("EffectTiming")}} 词的 **`easing`** 属性在 [Web Animations API](/zh-CN/docs/Web/API/Web_Animations_API) 指定用于缩放时间以产生缓和效果的计时函数，_easing_ 是动画随时间变化的速率。

> **备注：** {{domxref("Element.animate()")}}, {{domxref("KeyframeEffectReadOnly.KeyframeEffectReadOnly", "KeyframeEffectReadOnly()")}}, and {{domxref("KeyframeEffect.KeyframeEffect", "KeyframeEffect()")}} all accept an object of timing properties including `easing`. The value of easing corresponds directly to {{domxref("AnimationEffectTimingReadOnly.easing")}} in {{domxref("AnimationEffectReadOnly.timing", "timing")}} objects returned by {{domxref("AnimationEffectReadOnly")}}, {{domxref("KeyframeEffectReadOnly")}}, and {{domxref("KeyframeEffect")}}.

## Syntax

```
var timingProperties = {
  easing: {{cssxref("single-transition-timing-function")}}
}

timingProperties.easing = {{cssxref("single-transition-timing-function")}}
```

### Value

A string defining the timing function to use for easing transitions during the animation process. Accepts several pre-defined {{domxref("DOMString")}} values, a `steps()` timing function like `steps(5, end)`, or a custom `cubic-bezier` value like `cubic-bezier(0.42, 0, 0.58, 1)`. Defaults to `linear`. Available values include:

- `linear`
  - : A constant rate of change, neither accelerating nor deccelerating.
- `cubic-bezier(<number>, <number>, <number>, <number>)`
  - : ![A diagram showing the points of a cubic bezier timing function.](https://www.w3.org/TR/css-timing-1/cubic-bezier-timing-curve.svg)
    Specifies [a cubic Bézier timing function](https://w3c.github.io/web-animations/#cubic-bzier-timing-function). The four numbers specify points P1 and P2 of the curve as (x1, y1, x2, y2). Both x values must be in the range \[0, 1] or the definition is invalid.
- `ease`
  - : A decelerated rate of change, going from fast to slow. Equivalent to `cubic-bezier(0.25, 0.1, 0.25, 1)`.
- `ease-in`
  - : An accelerated rate of change, going from slow to fast. Equivalent to `cubic-bezier(0.42, 0, 1, 1)`.
- `ease-out`
  - : 变化速率变慢了，从快到慢，等价于`cubic-bezier(0, 0, 0.58, 1)`.
- `ease-in-out`
  - : This rate of change speeds up in the middle. Equivalent to `cubic-bezier(0.42, 0, 0.58, 1)`.
- `frames(<integer>)`
  - : Specifies a [frames timing function](https://www.w3.org/TR/css-timing-1/#frames-timing-functions), which breaks the animation down into a number of equal time intervals but also displays the start (0%) and end (100%) states for an equal amount of time to the other intervals. The browser flips to a different static frame when each interval is reached, rather than animating smoothly. See GitHub for a [simple example](https://mdn.github.io/css-examples/animation-frames-timing-function/index-waa.html) that illustrates the difference between `steps()` and `frames()`.
- `steps(<integer>[, [ start | end ] ]?)`
  - : ![A diagram of the various steps timing functions.](https://www.w3.org/TR/css-timing-1/step-timing-func-examples.svg)
    Specifies [a step timing function](https://w3c.github.io/web-animations/#step-timing-function), which breaks the animation down into a number of equal time intervals. The browser flips to a different static frame when each interval is reached, rather than animating smoothly. The first parameter specifies the number of intervals in the function. It must be a positive integer (greater than 0). The second parameter, which is optional, specifies the point at which the change of values occur within the interval. If the second parameter is omitted, it is given the value end.
- `step-start`
  - : Equivalent to `steps(1, start)`
- `step-end`
  - : Equivalent to `steps(1, end)`.

## Examples

In the [Red Queen's Race](http://codepen.io/rachelnabors/pen/PNGGaV?editors=0010) example, we animate Alice and the Red Queen by passing an easing `of steps(7, end)` to `animate()`:

```js
// Define the key frames
var spriteFrames = [
  { transform: 'translateY(0)' },
  { transform: 'translateY(-100%)' }
];

// Get the element that represents Alice and the Red Queen
var redQueen_alice_sprite = document.getElementById('red-queen_and_alice_sprite');

// Animate Alice and the Red Queen using steps()
var redQueen_alice = redQueen_alice_sprite.animate(
spriteFrames, {
  easing: 'steps(7, end)',
  direction: "reverse",
  duration: 600,
  playbackRate: 1,
  iterations: Infinity
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/zh-CN/docs/Web/API/Web_Animations_API)
- {{domxref("Element.animate()")}}, {{domxref("KeyframeEffect.KeyframeEffect", "KeyframeEffect()")}}, and {{domxref("AnimationEffect.updateTiming()")}} all accept an object of timing properties including this one.
- The value of this property corresponds to the one in {{domxref("EffectTiming")}} (which is returned from {{domxref("AnimationEffect.getTiming()")}} and {{domxref("AnimationEffect.getComputedTiming()")}}).
- CSS's [`animation-timing-function`](/zh-CN/docs/Web/CSS/animation-timing-function) and [`transition-timing-function`](/zh-CN/docs/Web/CSS/transition-timing-function).
