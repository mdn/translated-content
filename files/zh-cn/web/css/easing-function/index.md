---
title: <easing-function>
slug: Web/CSS/easing-function
---

{{CSSRef}}

The **`<easing-function>`** [CSS](/zh-CN/docs/Web/CSS) [data type](/zh-CN/docs/Web/CSS/CSS_Types) denotes a mathematical function that describes how fast one-dimensional values change during animations. This lets you vary the animation's speed over the course of its duration.

The easing functions in the cubic-bezier subset of easing functions are often called "smooth" easing functions, because they can be used to smooth down the start and end of the animation. They correlate a time ratio to an output ratio, both expressed as {{cssxref("&lt;number&gt;")}}s. For these values, `0.0` represents the initial state, and `1.0` represents the final state.

![](/files/3434/TF_with_output_gt_than_1.png)![](/files/3435/TF_with_output_gt_than_1_clipped.png)Depending on the specific function used, the calculated output can sometimes grow to be greater than `1.0` or smaller than `0.0` during the course of an animation. This causes the animation to go farther than the final state, and then return. For some properties, such as {{cssxref("left")}} or {{cssxref("right")}}, this creates a kind of "bouncing" effect.

However, certain properties will restrict the output if it goes outside an allowable range. For example, a color component greater than `255` or smaller than `0` will be clipped to the closest allowed value (`255` and `0`, respectively). Some `cubic-bezier()` curves exhibit this property.

## Easing functions

CSS supports two kinds of easing functions: the subset of the cubic Bézier curves that are functions, and staircase functions. The most useful of these functions are given a keyword that allows them to be easily referenced.

### The `cubic-bezier()` class of easing functions

![](/files/3433/cubic-bezier,%20example.png)

The `cubic-bezier()` functional notation defines a [cubic Bézier curve](https://en.wikipedia.org/wiki/B%C3%A9zier_curve#Cubic_B.C3.A9zier_curves). As these curves are continuous, they are often used to smooth down the start and end of the animation and are therefore sometimes called _easing functions_.

A cubic Bézier curve is defined by four points P0, P1, P2, and P3. P0 and P3 are the start and the end of the curve and, in CSS these points are fixed as the coordinates are ratios (the abscissa the ratio of time, the ordinate the ratio of the output range). P0 is `(0, 0)` and represents the initial time and the initial state, P3 is `(1, 1)` and represents the final time and the final state.

Not all cubic Bézier curves are suitable as easing functions as not all are [mathematical functions](https://en.wikipedia.org/wiki/Function_%28mathematics%29); i.e., curves that for a given abscissa have zero or one value. With P0 and P3 fixed as defined by CSS, a cubic Bézier curve is a function, and is therefore valid, if and only if the abscissas of P1 and P2 are both in the `[0, 1]` range.

Cubic Bézier curves with the P1 or P2 ordinate outside the `[0, 1]` range may generate _bouncing_ effects.

When you specify an invalid `cubic-bezier` curve, CSS ignores the whole property.

#### Syntax

```
cubic-bezier(x1, y1, x2, y2)
```

where:

- **_x1_, _y1_, _x2_, _y2_**
  - : Are {{cssxref("&lt;number&gt;")}} values representing the abscissas, and ordinates of the P1 and P2 points defining the cubic Bézier curve. x1 and x2 must be in the range \[0, 1] or the value is invalid.

#### Examples

These cubic Bézier curves are valid for use in CSS:

```css
/* The canonical Bézier curve with four <number> in the [0,1] range. */
cubic-bezier(0.1, 0.7, 1.0, 0.1)

/* Using <integer> is valid as any <integer> is also a <number>. */
cubic-bezier(0, 0, 1, 1)

/* Negative values for ordinates are valid, leading to bouncing effects.*/
cubic-bezier(0.1, -0.6, 0.2, 0)

/* Values > 1.0 for ordinates are also valid. */
cubic-bezier(0, 1.1, 0.8, 4)
```

These cubic Bézier curves definitions are invalid:

```css example-bad
/* Though the animated output type may be a color,
   Bézier curves work w/ numerical ratios.*/
cubic-bezier(0.1, red, 1.0, green)

/* Abscissas must be in the [0, 1] range or
   the curve is not a function of time. */
cubic-bezier(2.45, 0.6, 4, 0.1)

/* The two points must be defined, there is no default value. */
cubic-bezier(0.3, 2.1)

/* Abscissas must be in the [0, 1] range or
   the curve is not a function of time. */
cubic-bezier(-1.9, 0.3, -0.2, 2.1)
```

### Keywords for common cubic-bezier easing functions

#### `linear`

![](/files/3425/cubic-bezier,linear.png)

动画以恒定速度运行。此关键词表示缓冲函数 `cubic-bezier(0.0, 0.0, 1.0, 1.0)`。

#### `ease`

![](/files/3429/cubic-bezier,ease.png)

动画缓慢开始，然后突然加速，最后缓慢移向目标。此关键词表示缓冲函数 `cubic-bezier(0.25, 0.1, 0.25, 1.0)`.。它与 [`ease-in-out`](#ease-in-out) 类似，但它在开始时加速更快。

#### `ease-in`

![](/files/3426/cubic-bezier,ease-in.png)

动画缓慢开始，然后逐渐加速直到结束，在结束点时突然停止。此关键词表示缓冲函数 `cubic-bezier(0.42, 0.0, 1.0, 1.0)`。

#### `ease-in-out`

![](/files/3428/cubic-bezier,ease-in-out.png)

动画缓慢开始，然后加速，最后减速直至结束。此关键词表示缓冲函数 `cubic-bezier(0.42, 0.0, 0.58, 1.0)`。开始时，其表现与 [`ease-in`](#ease-in) 函数类似；结束时，与 [`ease-out`](#ease-out) 函数类似。

#### `ease-out`

![](/files/3427/cubic-bezer,ease-out.png)

此动画突然开始，然后逐渐减速直至结束。此关键词表示缓冲函数 `cubic-bezier(0.0, 0.0, 0.58, 1.0)`。

### The `steps()` class of easing functions

The `steps()` functional notation defines a [step function](https://en.wikipedia.org/wiki/Step_function) dividing the domain of output values in equidistant steps.This subclass of step functions are sometimes also called staircase functions.

#### Syntax

```
steps(number_of_steps, direction)
```

where:

- _number_of_steps_
  - : Is a strictly positive {{cssxref("&lt;integer&gt;")}}, representing the amount of equidistant treads composing the stepping function.
- _direction_

  - : Is a keyword indicating if it the function is [left- or right-continuous](https://en.wikipedia.org/wiki/Left-continuous#Directional_and_semi-continuity):

    - `jump-start` denotes a left-continuous function, so that the first step or jump happens when the animation begins;
    - `jump-end` denotes a right-continuous function, so that the last step or jump happens when the animation ends;
    - `jump-both` denotes a right and left continuous function, includes pauses at both the 0% and 100% marks, effectively adding a step during the animation iteration;
    - `jump-none` There is no jump on either end. Instead, holding at both the 0% mark and the 100% mark, each for 1/n of the duration
    - `start` is the equivalent of `jump-start`
    - `end` is the equivalent of `jump-end`

    `end` is the default.

#### `steps( n, <direction> )`

- `steps(2, jump-start)`
  `steps(2, start)`

  ![](</files/3436/steps(2,start).png>)

- `steps(4, jump-end) steps(4, end)`

  ![four steps, with a jump from the fourth step to the final value at the 100% mark](</files/3437/steps(4,end).png>)

- `steps(5, jump-none)`

  ![five steps, with no jumps, so 20% of the time is at the beginning state or 0% mark and the last 20% is at the final state, or 100% mark](/files/16419/step5none.png)

- `steps(3, jump-both)`

  ![](step3both.png)

- `steps-start`
  - : The equivalent of `steps(1, jump-start)`
- `steps-end`
  - : The equivalent of `steps(1, jump-end)`

#### `step-start`

![](</files/3423/steps(1,start).png>) The animation jumps immediately to its final state, where it stays until the end. This keyword represents the easing function `steps(1, jump-start)` or `steps(1, start)`.

#### `step-end`

![](</files/3424/steps(1,end).png>) The animation stays in its initial state until the end, at which point it jumps directly to its final state. This keyword represents the easing function `steps(1, jump-end)` or `steps(1, end)`.

#### Examples

These easing functions are valid:

```css
/* There is 5 treads, the last one happens
   right before the end of the animation. */
steps(5, end)

/* A two-step staircase, the first one happening
   at the start of the animation. */
steps(2, start)

/* The second parameter is optional. */
steps(2)
```

These easing function are invalid:

```css example-bad
/* The first parameter must be an <integer> and
   cannot be a real value, even if it is equal to one. */
steps(2.0, jump-end)

/* The amount of steps must be non-negative. */
steps(-3, start)

/* There must be at least one step.*/
steps(0, jump-none)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Animations](/zh-CN/docs/Web/CSS/CSS_Animations)
- [CSS Transitions](/zh-CN/docs/Web/CSS/CSS_Transitions)
- [cubic-bezier](http://cubic-bezier.com/)
