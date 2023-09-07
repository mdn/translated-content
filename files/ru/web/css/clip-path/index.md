---
title: clip-path
slug: Web/CSS/clip-path
---

{{CSSRef}}{{SeeCompatTable}}

[CSS](/ru/docs/Web/CSS) свойство **`clip-path`** создаёт ограниченную область, которая определяет какая часть элемента должна быть видимой. Те части, которые находятся внутри области, видимы, в то время как части вне области, скрыты. Обрезанная область - это траектория, определяемая либо как внутренняя ссылка, либо как внешний SVG , либо как фигура, такая как круг ([`circle()`](/ru/docs/Web/SVG/%D0%AD%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82/circle)).

> **Примечание:** Свойство clip-path заменило устаревшее свойство {{cssxref("clip")}} .

```css
/* Keyword values */
clip-path: none;

/* Image values */
clip-path: url(resources.svg#c1);

/* Box values */
clip-path: fill-box;
clip-path: stroke-box;
clip-path: view-box;
clip-path: margin-box;
clip-path: border-box;
clip-path: padding-box;
clip-path: content-box;

/* Geometry values */
clip-path: inset(100px 50px);
clip-path: circle(50px at 0 100px);
clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);

/* Box and geometry values combined */
clip-path: padding-box circle(50px at 0 100px);

/* Global values */
clip-path: inherit;
clip-path: initial;
clip-path: unset;
```

```html hidden
<svg class="defs">
  <defs>
    <clipPath id="myPath" clipPathUnits="objectBoundingBox">
      <path
        d="M0.5,1 C0.5,1,0,0.7,0,0.3 A0.25,0.25,1,1,1,0.5,0.3 A0.25,0.25,1,1,1,1,0.3 C1,0.7,0.5,1,0.5,1 Z" />
    </clipPath>
  </defs>
</svg>

<div class="grid">
  <div class="col">
    <div class="note">clip-path: none</div>
    <div class="row">
      <div class="cell">
        <span>HTML</span>
        <div class="container">
          <p class="none">I LOVE<br /><em>clipping</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container viewbox">
          <svg viewBox="0 0 192 192">
            <g class="none">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">I LOVE</text>
              <text x="96" y="109" class="em">clipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">
      clip-path: url(#myPath)<br /><br />
      Assuming the following clipPath definition:
      <pre>
&lt;svg&gt;
  &lt;clipPath id="myPath" clipPathUnits="objectBoundingBox"&gt;
    &lt;path d="M0.5,1
      C 0.5,1,0,0.7,0,0.3
      A 0.25,0.25,1,1,1,0.5,0.3
      A 0.25,0.25,1,1,1,1,0.3
      C 1,0.7,0.5,1,0.5,1 Z" /&gt;
  &lt;/clipPath&gt;
&lt;/svg&gt;</pre
      >
    </div>
    <div class="row">
      <div class="cell">
        <span>HTML</span>
        <div class="container">
          <p class="svg">I LOVE<br /><em>clipping</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container viewbox">
          <svg viewBox="0 0 192 192">
            <g class="svg">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">I LOVE</text>
              <text x="96" y="109" class="em">clipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">
      clip-path: path('M15,45 A30,30,0,0,1,75,45 A30,30,0,0,1,135,45
      Q135,90,75,130 Q15,90,15,45 Z')
    </div>
    <div class="row">
      <div class="cell">
        <span>HTML</span>
        <div class="container">
          <p class="svg2">I LOVE<br /><em>clipping</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container viewbox">
          <svg viewBox="0 0 192 192">
            <g class="svg2">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">I LOVE</text>
              <text x="96" y="109" class="em">clipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">clip-path: circle(25%)</div>
    <div class="row">
      <div class="cell">
        <span>HTML</span>
        <div class="container">
          <p class="shape1">I LOVE<br /><em>clipping</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container viewbox">
          <svg viewBox="0 0 192 192">
            <g class="shape1">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">I LOVE</text>
              <text x="96" y="109" class="em">clipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">clip-path: circle(25% at 25% 25%)</div>
    <div class="row">
      <div class="cell">
        <span>HTML</span>
        <div class="container">
          <p class="shape2">I LOVE<br /><em>clipping</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container viewbox">
          <svg viewBox="0 0 192 192">
            <g class="shape2">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">I LOVE</text>
              <text x="96" y="109" class="em">clipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">clip-path: fill-box circle(25% at 25% 25%)</div>
    <div class="row">
      <div class="cell">
        <span>HTML</span>
        <div class="container">
          <p class="shape3">I LOVE<br /><em>clipping</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container viewbox">
          <svg viewBox="0 0 192 192">
            <g class="shape3">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">I LOVE</text>
              <text x="96" y="109" class="em">clipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">clip-path: stroke-box circle(25% at 25% 25%)</div>
    <div class="row">
      <div class="cell">
        <span>HTML</span>
        <div class="container">
          <p class="shape4">I LOVE<br /><em>clipping</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container viewbox">
          <svg viewBox="0 0 192 192">
            <g class="shape4">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">I LOVE</text>
              <text x="96" y="109" class="em">clipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">clip-path: view-box circle(25% at 25% 25%)</div>
    <div class="row">
      <div class="cell">
        <span>HTML</span>
        <div class="container">
          <p class="shape5">I LOVE<br /><em>clipping</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container viewbox">
          <svg viewBox="0 0 192 192">
            <g class="shape5">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">I LOVE</text>
              <text x="96" y="109" class="em">clipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">clip-path: margin-box circle(25% at 25% 25%)</div>
    <div class="row">
      <div class="cell">
        <span>HTML</span>
        <div class="container">
          <p class="shape6">I LOVE<br /><em>clipping</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container viewbox">
          <svg viewBox="0 0 192 192">
            <g class="shape6">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">I LOVE</text>
              <text x="96" y="109" class="em">clipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">clip-path: border-box circle(25% at 25% 25%)</div>
    <div class="row">
      <div class="cell">
        <span>HTML</span>
        <div class="container">
          <p class="shape7">I LOVE<br /><em>clipping</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container viewbox">
          <svg viewBox="0 0 192 192">
            <g class="shape7">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">I LOVE</text>
              <text x="96" y="109" class="em">clipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">clip-path: padding-box circle(25% at 25% 25%)</div>
    <div class="row">
      <div class="cell">
        <span>HTML</span>
        <div class="container">
          <p class="shape8">I LOVE<br /><em>clipping</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container viewbox">
          <svg viewBox="0 0 192 192">
            <g class="shape8">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">I LOVE</text>
              <text x="96" y="109" class="em">clipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">clip-path: content-box circle(25% at 25% 25%)</div>
    <div class="row">
      <div class="cell">
        <span>HTML</span>
        <div class="container">
          <p class="shape9">I LOVE<br /><em>clipping</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container viewbox">
          <svg viewBox="0 0 192 192">
            <g class="shape9">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">I LOVE</text>
              <text x="96" y="109" class="em">clipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>
```

```css
html,
body {
  height: 100%;
  box-sizing: border-box;
  background: #eee;
}

.grid {
  width: 100%;
  height: 100%;
  display: flex;
  font: 1em monospace;
}

.row {
  display: flex;
  flex: 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
}

.col {
  flex: 1 auto;
}

.cell {
  margin: 0.5em;
  padding: 0.5em;
  background-color: #fff;
  overflow: hidden;
  text-align: center;
  flex: 1;
}

.note {
  background: #fff3d4;
  padding: 1em;
  margin: 0.5em 0.5em 0;
  font: 0.8em sans-serif;
  text-align: left;
  white-space: nowrap;
}

.note + .row .cell {
  margin-top: 0;
}

.container {
  display: inline-block;
  border: 1px dotted grey;
  position: relative;
}

.container:before {
  content: "margin";
  position: absolute;
  top: 2px;
  left: 2px;
  font: italic 0.6em sans-serif;
}

.viewbox {
  box-shadow:
    1rem 1rem 0 #efefef inset,
    -1rem -1rem 0 #efefef inset;
}

.container.viewbox:after {
  content: "viewbox";
  position: absolute;
  left: 1.1rem;
  top: 1.1rem;
  font: italic 0.6em sans-serif;
}

.cell span {
  display: block;
  margin-bottom: 0.5em;
}

p {
  font-family: sans-serif;
  background: #000;
  color: pink;
  margin: 2em;
  padding: 3em 1em;
  border: 1em solid pink;
  width: 6em;
}

.none {
  clip-path: none;
}
.svg {
  clip-path: url(#myPath);
}
.svg2 {
  clip-path: path(
    "M15,45 A30,30,0,0,1,75,45 A30,30,0,0,1,135,45 Q135,90,75,130 Q15,90,15,45 Z"
  );
}
.shape1 {
  clip-path: circle(25%);
}
.shape2 {
  clip-path: circle(25% at 25% 25%);
}
.shape3 {
  clip-path: fill-box circle(25% at 25% 25%);
}
.shape4 {
  clip-path: stroke-box circle(25% at 25% 25%);
}
.shape5 {
  clip-path: view-box circle(25% at 25% 25%);
}
.shape6 {
  clip-path: margin-box circle(25% at 25% 25%);
}
.shape7 {
  clip-path: border-box circle(25% at 25% 25%);
}
.shape8 {
  clip-path: padding-box circle(25% at 25% 25%);
}
.shape9 {
  clip-path: content-box circle(25% at 25% 25%);
}

.defs {
  width: 0;
  height: 0;
  margin: 0;
}

pre {
  margin-bottom: 0;
}

svg {
  margin: 1em;
  font-family: sans-serif;
  width: 192px;
  height: 192px;
}

svg rect {
  stroke: pink;
  stroke-width: 16px;
}

svg text {
  fill: pink;
  text-anchor: middle;
}

svg text.em {
  font-style: italic;
}
```

{{EmbedLiveSample("clip-path", "100%", 800, "", "", "example-outcome-frame")}}

{{cssinfo}}

## Синтаксис

Свойство `clip-path` определяется как одно или комбинация значений перечисленных ниже.

### Значения

- `url()`
  - : Представляет URL ссылку на траекторию, ограничивающую элемент.
- `inset()`, `circle()`, `ellipse()`, `polygon()`
  - : Функция {{cssxref("&lt;basic-shape&gt;")}}. Размер и положение области определяется значением `<geometry-box>`. Если геометрия не определена, `border-box` будет использоваться в качестве блока.
- `<geometry-box>`
  - : Если определён в комбинации с `<basic-shape>`, это значение определяет блок для базовой области. Если задан самостоятельно, определяет границы блока, включая формирование углов (такое как {{cssxref("border-radius")}}). Геометрия может быть определена с помощью одного из следующих значений:
    - `fill-box`
      - : Использует границы объекта в качестве базовой области.
    - `stroke-box`
      - : Использует stroke bounding box в качестве базовой области.
    - `view-box`
      - : Использует ближайший SVG viewport в качестве базового блока. Если атрибут {{SVGAttr("viewBox")}} определён для элемента, создающего SVG viewport, базовый блок позиционируется в оригинальной системе координат, установленной атрибутом `viewBox` и ширина и высота базового блока устанавливаются равными значениям атрибута `viewBox`.
    - `margin-box`
      - : Использует [margin box](CSS_Box_Model/Introduction_to_the_CSS_box_model) в качестве базового блока.
    - `border-box`
      - : Использует [border box](CSS_Box_Model/Introduction_to_the_CSS_box_model) в качестве базового блока.
    - `padding-box`
      - : Использует [padding box](CSS_Box_Model/Introduction_to_the_CSS_box_model) в качестве базового блока.
    - `content-box`
      - : Использует [content box](CSS_Box_Model/Introduction_to_the_CSS_box_model) в качестве базового блока.
- `none`
  - : Обрезанная область не создается.

### Формальный синтаксис

{{csssyntax}}

## Примеры

```css
/* Inline SVG  */
.target {
  clip-path: url(#c1);
}

/* External SVG */
.anothertarget {
  clip-path: url(resources.svg#c1);
}

/* Circle shape */
.circleClass {
  clip-path: circle(15px at 20px 20px);
}
```

## Живой пример

### HTML

```html
<img id="clipped" src="mdn.svg" alt="MDN logo" />
<svg height="0" width="0">
  <defs>
    <clipPath id="cross">
      <rect y="110" x="137" width="90" height="90" />
      <rect x="0" y="110" width="90" height="90" />
      <rect x="137" y="0" width="90" height="90" />
      <rect x="0" y="0" width="90" height="90" />
    </clipPath>
  </defs>
</svg>

<select id="clipPath">
  <option value="none">none</option>
  <option value="circle(100px at 110px 100px)">circle</option>
  <option value="url(#cross)" selected>cross</option>
  <option value="inset(20px round 20px)">inset</option>
</select>
```

### CSS

```css
#clipped {
  margin-bottom: 20px;
  clip-path: url(#cross);
}
```

```js hidden
var clipPathSelect = document.getElementById("clipPath");
clipPathSelect.addEventListener("change", function (evt) {
  document.getElementById("clipped").style.clipPath = evt.target.value;
});
```

### Результат

{{EmbedLiveSample("Живой_пример", 230, 250)}}

## Спецификации

| Спецификация                                                         | Статус                 | Комментарий                                        |
| -------------------------------------------------------------------- | ---------------------- | -------------------------------------------------- |
| {{SpecName("CSS Masks", "#the-clip-path", 'clip-path')}}             | {{Spec2('CSS Masks')}} | Extends its application to HTML elements.          |
| {{SpecName('SVG1.1', 'masking.html#ClipPathProperty', 'clip-path')}} | {{Spec2('SVG1.1')}}    | Initial definition (applies to SVG elements only). |

## Совместимость

{{Compat}}

## Смотрите также

- [clip-rule](/ru/docs/Web/SVG/Attribute/clip-rule), {{cssxref("mask")}}, {{cssxref("filter")}}
- [CSS Shapes, clipping and masking – and how to use them](https://hacks.mozilla.org/2017/06/css-shapes-clipping-and-masking/)
- [Applying SVG effects to HTML content](/ru/docs/Applying_SVG_effects_to_HTML_content)
- {{SVGAttr("clip-path")}} SVG attribute
