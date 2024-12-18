---
title: transform-origin
slug: Web/CSS/transform-origin
---

{{CSSRef}}

[CSS](/zh-TW/docs/Web/CSS) 內的**`transform-origin`**屬性可以設定元素變化的原點。

{{EmbedInteractiveExample("pages/css/transform-origin.html")}}

變化原點指的是應用變化的點。舉例來說， [`rotate()`](/zh-TW/docs/Web/CSS/transform-function/rotate)函數的原點為旋轉中心。 (This property is applied by first translating the element by the negated value of the property, then applying the element's transform, then translating by the property value.)

## 語法

```css
/* One-value syntax */
transform-origin: 2px;
transform-origin: bottom;

/* x-offset | y-offset */
transform-origin: 3cm 2px;

/* x-offset-keyword | y-offset */
transform-origin: left 2px;

/* x-offset-keyword | y-offset-keyword */
transform-origin: right top;

/* y-offset-keyword | x-offset-keyword */
transform-origin: top right;

/* x-offset | y-offset | z-offset */
transform-origin: 2px 30% 10px;

/* x-offset-keyword | y-offset | z-offset */
transform-origin: left 5px -3px;

/* x-offset-keyword | y-offset-keyword | z-offset */
transform-origin: right bottom 2cm;

/* y-offset-keyword | x-offset-keyword | z-offset */
transform-origin: bottom right 2cm;

/* Global values */
transform-origin: inherit;
transform-origin: initial;
transform-origin: unset;
```

The `transform-origin` p 屬性可以使用多次，每一次都代表著一個偏移量。若未設定偏移量，則重置為其對應的 [初始值](/zh-TW/docs/Web/CSS/initial_value)。

If two or more values are defined and either no value is a keyword, or the only used keyword is `center`, then the first value represents the horizontal offset and the second represents the vertical offset.

- One-value syntax:

  - The value must be a {{cssxref("&lt;length&gt;")}}, a {{cssxref("&lt;percentage&gt;")}}, or one of the keywords `left`, `center`, `right`, `top` or `bottom`.

- Two-value syntax:

  - One value must be a {{cssxref("&lt;length&gt;")}}, a {{cssxref("&lt;percentage&gt;")}}, or one of the keywords `left`, `center`, and `right`.
  - The other value must be a {{cssxref("&lt;length&gt;")}}, a {{cssxref("&lt;percentage&gt;")}}, or one of the keywords `top`, `center`, and `bottom`.

- Three-value syntax:

  - The first two values are the same as for the two-value syntax.
  - The third value must be a {{cssxref("&lt;length&gt;")}}. It always represents the Z offset.

### Values

- _x-offset_
  - : Is a {{cssxref("&lt;length&gt;")}} or a {{cssxref("&lt;percentage&gt;")}} describing how far from the left edge of the box the origin of the transform is set.
- _offset-keyword_
  - : Is one of the `left`, `right`, `top`, `bottom`, or `center` keyword describing the corresponding offset.
- _y-offset_
  - : Is a {{cssxref("&lt;length&gt;")}} or a {{cssxref("&lt;percentage&gt;")}} describing how far from the top edge of the box the origin of the transform is set.
- _x-offset-keyword_
  - : Is one of the `left`, `right`, or `center` keyword describing how far from the left edge of the box the origin of the transform is set.
- _y-offset-keyword_
  - : Is one of the `top`, `bottom`, or `center` keyword describing how far from the top edge of the box the origin of the transform is set.
- _z-offset_
  - : Is a {{cssxref("&lt;length&gt;")}} (and never a {{cssxref("&lt;percentage&gt;")}} which would make the statement invalid) describing how far from the user eye the z=0 origin is set.

The keywords are convenience shorthands and match the following {{cssxref("&lt;percentage&gt;")}} values:

| Keyword  | Value  |
| -------- | ------ |
| `left`   | `0%`   |
| `center` | `50%`  |
| `right`  | `100%` |
| `top`    | `0%`   |
| `bottom` | `100%` |

### Formal syntax

{{csssyntax}}

## Examples

```html hidden
<div class="container">
  <div class="example">
    <div class="box box1">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: none;
</pre
  >

  <div class="example">
    <div class="box box2">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: rotate(30deg);
</pre
  >

  <div class="example">
    <div class="box box3">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: rotate(30deg);
transform-origin: 0 0;
</pre
  >

  <div class="example">
    <div class="box box4">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: rotate(30deg);
transform-origin: 100% 100%;
</pre
  >

  <div class="example">
    <div class="box box5">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: rotate(30deg);
transform-origin: -1em -3em;
</pre
  >

  <div class="example">
    <div class="box box6">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: scale(1.7);
</pre
  >

  <div class="example">
    <div class="box box7">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: scale(1.7);
transform-origin: 0 0;
</pre
  >

  <div class="example">
    <div class="box box8">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: scale(1.7);
transform-origin: 100% -30%;
</pre
  >

  <div class="example">
    <div class="box box9">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: skewX(50deg);
transform-origin: 100% -30%;
</pre
  >

  <div class="example">
    <div class="box box10">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: skewY(50deg);
transform-origin: 100% -30%;
</pre
  >
</div>
```

```css hidden
.container {
  display: grid;
  grid-template-columns: 200px 100px;
  gap: 20px;
}

.example {
  position: relative;
  margin: 0 2em 4em 5em;
}

.box {
  display: inline-block;
  width: 3em;
  height: 3em;
  border: solid 1px;
  background-color: palegreen;
}

.original {
  position: absolute;
  left: 0;
  opacity: 20%;
}

.box1 {
  transform: none;
}

.box2 {
  transform: rotate(30deg);
}

.box3 {
  transform: rotate(30deg);
  transform-origin: 0 0;
}

.box4 {
  transform: rotate(30deg);
  transform-origin: 100% 100%;
}

.box5 {
  transform: rotate(30deg);
  transform-origin: -1em -3em;
}

.box6 {
  transform: scale(1.7);
}

.box7 {
  transform: scale(1.7);
  transform-origin: 0 0;
}

.box8 {
  transform: scale(1.7);
  transform-origin: 100% -30%;
}

.box9 {
  transform: skewX(50deg);
  transform-origin: 100% -30%;
}

.box10 {
  transform: skewY(50deg);
  transform-origin: 100% -30%;
}
```

{{EmbedLiveSample('Examples', '', 1350) }}

## Specifications

{{Specifications}}

{{Cssinfo}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS transforms](/zh-TW/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
