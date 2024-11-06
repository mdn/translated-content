---
title: clip-path
slug: Web/CSS/clip-path
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS)-свойство `clip-path` создаёт ограниченную область, которая определяет какая часть элемента должна быть видимой. Части, которые находятся внутри области, видимы, а части вне области скрыты.

{{EmbedInteractiveExample("pages/css/clip-path.html")}}

## Синтаксис

```css
/* Ключевые слова */
clip-path: none;

/* Значения <clip-source> */
clip-path: url(resources.svg#c1);

/* Значения <geometry-box> */
clip-path: margin-box;
clip-path: border-box;
clip-path: padding-box;
clip-path: content-box;
clip-path: fill-box;
clip-path: stroke-box;
clip-path: view-box;

/* Значения <basic-shape> */
clip-path: inset(100px 50px);
clip-path: circle(50px at 0 100px);
clip-path: ellipse(50px 60px at 0 10% 20%);
clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
clip-path: path(
  "M0.5,1 C0.5,1,0,0.7,0,0.3 A0.25,0.25,1,1,1,0.5,0.3 A0.25,0.25,1,1,1,1,0.3 C1,0.7,0.5,1,0.5,1 Z"
);

/* Комбинация значений границ и формы блока */
clip-path: padding-box circle(50px at 0 100px);

/* Глобальные значения */
clip-path: inherit;
clip-path: initial;
clip-path: revert;
clip-path: revert-layer;
clip-path: unset;
```

Свойство `clip-path` определяется как значение или комбинация значений перечисленных ниже.

### Значения

- `<clip-source>`
  - : {{cssxref("url", "url()")}} указывающий на [SVG](/ru/docs/Web/SVG)-элемент {{SVGElement("clipPath")}} .
- {{cssxref("&lt;basic-shape&gt;")}}

  - : Форма, размер и расположение которой определяется значением `<geometry-box>`. Если геометрия не указана, то в качестве блока будет использоваться `border-box`. Может определяться одной из следующих функций:
    - {{cssxref("basic-shape/inset","inset()")}}
      - : Определяет внутренний прямоугольник.
    - {{cssxref("basic-shape/circle","circle()")}}
      - : Определяет окружность, используя радиус и расположение.
    - {{cssxref("basic-shape/ellipse","ellipse()")}}
      - : Определяет эллипс, используя два радиуса и расположение.
    - {{cssxref("basic-shape/polygon","polygon()")}}
      - : Определяет многоугольник, используя стиль заполнения фигуры и набор вершин.
    - {{cssxref("path","path()")}}
      - : Определяет фигуру, используя объявление SVG фигуры и правило заполнения.

- `<geometry-box>`

  - : При использовании в сочетании с `<basic-shape>` это значение определяет блок для базовой области. При самостоятельном использовании определяет границы указанного блока, включая формирование углов (например, {{cssxref("border-radius")}}). Геометрия может быть определена с помощью одного из следующих значений:
    - `margin-box`
      - : Использует [margin box](/ru/docs/Web/CSS/CSS_shapes/From_box_values#margin-box) для определения блока.
    - `border-box`
      - : Использует [border box](/ru/docs/Web/CSS/CSS_shapes/From_box_values#border-box) для определения блока.
    - `padding-box`
      - : Использует [padding box](/ru/docs/Web/CSS/CSS_shapes/From_box_values#padding-box) для определения блока.
    - `content-box`
      - : Использует [content box](/ru/docs/Web/CSS/CSS_shapes/From_box_values#content-box) для определения блока.
    - `fill-box`
      - : Использует область заливки объекта для определения блока.
    - `stroke-box`
      - : Использует границы объекта для определения блока.
    - `view-box`
      - : Использует ближайший SVG вьюпорт для определения блока. Если атрибут {{SVGAttr("viewBox")}} определён для элемента, создающего вьюпорт, то блок будет позиционироваться в координатной системе, установленной атрибутом `viewBox`, а размеры блока устанавливаются равными значениям ширины и высоты атрибута `viewBox`.

- `none`
  - : Область не создается.

> [!NOTE]
> Значение, отличное от `none`, приводит к созданию нового [контекста наложения](/ru/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context) так же, как при использовании значений CSS-свойства {{cssxref("opacity")}}, отличных от `1`.

## Формальное определение

{{cssinfo}}

### Формальный синтаксис

{{csssyntax}}

## Примеры

### Сравнение HTML и SVG

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
          <p class="none">Я люблю<br /><em>разные формы</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container view-box">
          <svg viewBox="0 0 192 192">
            <g class="none">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">Я люблю</text>
              <text x="96" y="109" class="em">разные формы</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">
      clip-path: url(#myPath)<br /><br />
      Для этого примера определим такой вспомогательный элемент:
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
          <p class="svg">Я люблю<br /><em>разные формы</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container view-box">
          <svg viewBox="0 0 192 192">
            <g class="svg">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">Я люблю</text>
              <text x="96" y="109" class="em">разные формы</text>
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
          <p class="svg2">Я люблю<br /><em>разные формы</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container view-box">
          <svg viewBox="0 0 192 192">
            <g class="svg2">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">Я люблю</text>
              <text x="96" y="109" class="em">разные формы</text>
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
          <p class="shape1">Я люблю<br /><em>разные формы</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container view-box">
          <svg viewBox="0 0 192 192">
            <g class="shape1">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">Я люблю</text>
              <text x="96" y="109" class="em">разные формы</text>
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
          <p class="shape2">Я люблю<br /><em>разные формы</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container view-box">
          <svg viewBox="0 0 192 192">
            <g class="shape2">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">Я люблю</text>
              <text x="96" y="109" class="em">разные формы</text>
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
          <p class="shape3">Я люблю<br /><em>разные формы</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container view-box">
          <svg viewBox="0 0 192 192">
            <g class="shape3">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">Я люблю</text>
              <text x="96" y="109" class="em">разные формы</text>
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
          <p class="shape4">Я люблю<br /><em>разные формы</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container view-box">
          <svg viewBox="0 0 192 192">
            <g class="shape4">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">Я люблю</text>
              <text x="96" y="109" class="em">разные формы</text>
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
          <p class="shape5">Я люблю<br /><em>разные формы</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container view-box">
          <svg viewBox="0 0 192 192">
            <g class="shape5">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">Я люблю</text>
              <text x="96" y="109" class="em">разные формы</text>
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
          <p class="shape6">Я люблю<br /><em>разные формы</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container view-box">
          <svg viewBox="0 0 192 192">
            <g class="shape6">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">Я люблю</text>
              <text x="96" y="109" class="em">разные формы</text>
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
          <p class="shape7">Я люблю<br /><em>разные формы</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container view-box">
          <svg viewBox="0 0 192 192">
            <g class="shape7">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">Я люблю</text>
              <text x="96" y="109" class="em">разные формы</text>
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
          <p class="shape8">Я люблю<br /><em>разные формы</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container view-box">
          <svg viewBox="0 0 192 192">
            <g class="shape8">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">Я люблю</text>
              <text x="96" y="109" class="em">разные формы</text>
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
          <p class="shape9">Я люблю<br /><em>разные формы</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container view-box">
          <svg viewBox="0 0 192 192">
            <g class="shape9">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">Я люблю</text>
              <text x="96" y="109" class="em">разные формы</text>
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

.container::before {
  content: "margin";
  position: absolute;
  top: 2px;
  left: 2px;
  font: italic 0.6em sans-serif;
}

.view-box {
  box-shadow:
    1rem 1rem 0 #efefef inset,
    -1rem -1rem 0 #efefef inset;
}

.container.view-box::after {
  content: "view-box";
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

{{EmbedLiveSample("Сравнение_HTML_и_SVG", "100%", "800px")}}

### Полный пример

#### HTML

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
  <option value="path('M 0 200 L 0,110 A 110,90 0,0,1 240,100 L 200 340 z')">
    path
  </option>
</select>
```

#### CSS

```css
#clipped {
  margin-bottom: 20px;
  clip-path: url(#cross);
}
```

```js hidden
const clipPathSelect = document.getElementById("clipPath");
clipPathSelect.addEventListener("change", (evt) => {
  document.getElementById("clipped").style.clipPath = evt.target.value;
});
```

#### Результат

{{EmbedLiveSample("Полный_пример", 230, 250)}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Shapes in clipping and masking – and how to use them](https://hacks.mozilla.org/2017/06/css-shapes-clipping-and-masking/)
- [Применение эффектов SVG к содержимому HTML](/ru/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
- CSS-свойства:
  - {{cssxref("mask")}}
  - {{cssxref("filter")}}
- Атрибуты SVG:
  - {{SVGAttr("clip-path")}}
  - {{SVGAttr("clip-rule")}}
