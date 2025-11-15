---
title: transform-origin
slug: Web/CSS/Reference/Properties/transform-origin
---

[CSS](/zh-TW/docs/Web/CSS) 內的**`transform-origin`**屬性可以設定元素變化的原點。

{{InteractiveExample("CSS Demo: transform-origin")}}

```css interactive-example-choice
transform-origin: center;
```

```css interactive-example-choice
transform-origin: top left;
```

```css interactive-example-choice
transform-origin: 50px 50px;
```

```css interactive-example-choice
/* 3D rotation with z-axis origin */
transform-origin: bottom right 60px;
```

```html interactive-example
<section id="default-example">
  <div id="example-container">
    <div id="example-element">Rotate me!</div>
    <img
      alt=""
      id="crosshair"
      src="/shared-assets/images/examples/crosshair.svg"
      width="24px" />
    <div id="static-element"></div>
  </div>
</section>
```

```css interactive-example
@keyframes rotate {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(30deg);
  }
}

@keyframes rotate3d {
  from {
    transform: rotate3d(0);
  }

  to {
    transform: rotate3d(1, 2, 0, 60deg);
  }
}

#example-container {
  width: 160px;
  height: 160px;
  position: relative;
}

#example-element {
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  background: #f7ebee;
  color: #000000;
  font-size: 1.2rem;
  text-transform: uppercase;
}

#example-element.rotate {
  animation: rotate 1s forwards;
}

#example-element.rotate3d {
  animation: rotate3d 1s forwards;
}

#crosshair {
  width: 24px;
  height: 24px;
  opacity: 0;
  position: absolute;
}

#static-element {
  width: 100%;
  height: 100%;
  position: absolute;
  border: dotted 3px #ff1100;
}
```

```js interactive-example
"use strict";

window.addEventListener("load", () => {
  function update() {
    const selected = document.querySelector(".selected");

    /* Restart the animation
           https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Tips */
    el.className = "";
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        el.className =
          el.style.transformOrigin.split(" ")[2] === "60px"
            ? "rotate3d"
            : "rotate";
      });
    });

    const transformOrigin = getComputedStyle(el).transformOrigin;
    const pos = transformOrigin.split(/\s+/);
    crosshair.style.left = `calc(${pos[0]} - 12px)`;
    crosshair.style.top = `calc(${pos[1]} - 12px)`;
  }

  const crosshair = document.getElementById("crosshair");
  const el = document.getElementById("example-element");

  const observer = new MutationObserver(() => {
    update();
  });

  observer.observe(el, {
    attributes: true,
    attributeFilter: ["style"],
  });

  update();
  crosshair.style.opacity = "1";
});
```

變化原點指的是應用變化的點。舉例來說， [`rotate()`](/zh-TW/docs/Web/CSS/Reference/Values/transform-function/rotate)函數的原點為旋轉中心。 (This property is applied by first translating the element by the negated value of the property, then applying the element's transform, then translating by the property value.)

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

`transform-origin` 屬性可以使用多次，每一次都代表著一個偏移量。若未設定偏移量，則重置為其對應的[初始值](/zh-TW/docs/Web/CSS/Guides/Cascade/Property_value_processing#初始值)。

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

## 範例

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

{{EmbedLiveSample('範例', '', 1350) }}

## 規範

{{Specifications}}

{{Cssinfo}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [Using CSS transforms](/zh-TW/docs/Web/CSS/Guides/Transforms/Using)
