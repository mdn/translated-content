---
title: clip-path
slug: Web/CSS/clip-path
---

{{CSSRef}}

**`clip-path`** [CSS](/ko/docs/Web/CSS) 속성은 요소의 클리핑 범위를 지정합니다. 클리핑 범위 안의 부분은 보여지고, 바깥은 숨겨집니다.

{{EmbedInteractiveExample("pages/css/clip-path.html")}}

## 구문

```css
/* 키워드 값 */
clip-path: none;

/* <clip-source> 값 */
clip-path: url(resources.svg#c1);

/* <geometry-box> 값 */
clip-path: margin-box;
clip-path: border-box;
clip-path: padding-box;
clip-path: content-box;
clip-path: fill-box;
clip-path: stroke-box;
clip-path: view-box;

/* <basic-shape> 값 */
clip-path: inset(100px 50px);
clip-path: circle(50px at 0 100px);
clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
clip-path: path(
  "M0.5,1 C0.5,1,0,0.7,0,0.3 A0.25,0.25,1,1,1,0.5,0.3 A0.25,0.25,1,1,1,1,0.3 C1,0.7,0.5,1,0.5,1 Z"
);

/* 박스와 도형 값 조합 */
clip-path: padding-box circle(50px at 0 100px);

/* 전역 값 */
clip-path: inherit;
clip-path: initial;
clip-path: unset;
```

`clip-path` 속성은 아래의 값을 하나 이상 조합해 지정할 수 있습니다.

### 값

- `<clip-source>`
  - : [SVG](/ko/docs/Web/SVG) {{SVGElement("clipPath")}} 요소를 가리키는 {{cssxref("&lt;url&gt;")}}.
- {{cssxref("&lt;basic-shape&gt;")}}
  - : `<geometry-box>` 값으로 크기와 위치가 정해지는 도형. `<geometry-box>`를 지정하지 않는다면 `border-box`를 참조 박스로 사용합니다.
- `<geometry-box>`
  - : `<basic-shape>`와 함께 지정하면, `<basic-shape>`의 참조 박스를 정의합니다. 단독으로 지정한 경우, 값으로 주어진 상자와 그 상자의 모서리 형태({{cssxref("border-radius")}} 등)를 클리핑 패스로 적용합니다. 가능한 값은 다음과 같습니다.
- `margin-box`
  - : [바깥 여백 상자](/ko/docs/Web/CSS/CSS_Shapes/From_box_values#margin-box)를 참조로 사용합니다.
- `border-box`
  - : [테두리 상자](/ko/docs/Web/CSS/CSS_Shapes/From_box_values#border-box)를 참조로 사용합니다.
- `padding-box`
  - : [안쪽 여백 상자](/ko/docs/Web/CSS/CSS_Shapes/From_box_values#padding-box)를 참조로 사용합니다.
- `content-box`
  - : [콘텐츠 상자](/ko/docs/Web/CSS/CSS_Shapes/From_box_values#content-box)를 참조로 사용합니다.
- `fill-box`
  - : 객체의 바운딩 상자를 참조로 사용합니다.
- `stroke-box`
  - : 테두리 바운딩 상자를 참조로 사용합니다.
- `view-box`
  - : 가장 가까운 SVG 뷰포트를 참조 상자로 사용합니다. SVG 뷰포트를 생성한 요소가 {{SVGAttr("viewBox")}} 속성을 가진 경우, 참조 상자의 위치는 `viewBox` 속성이 정의하는 좌표계의 원점에 위치하고, 크기는 `viewBox` 속성의 너비와 높이 값과 동일합니다.
- `none`
  - : 클리핑 패스를 생성하지 않습니다.

> **참고:** {{cssxref("opacity")}}가 1이 아닌 값일 때와 마찬가지로, **`none`** 외의 계산값은 새로운 [쌓임 맥락](/ko/docs/CSS/Understanding_z-index/The_stacking_context)을 생성합니다.

### 형식 구문

{{csssyntax}}

## Examples

### Comparison of HTML and SVG

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

{{EmbedLiveSample("Comparison_of_HTML_and_SVG", "100%", 800, "", "", "example-outcome-frame")}}

### Complete example

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

#### Result

{{EmbedLiveSample("Complete_example", 230, 250)}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [Shapes in clipping and masking – and how to use them](https://hacks.mozilla.org/2017/06/css-shapes-clipping-and-masking/)
- CSS properties: {{cssxref("mask")}}, {{cssxref("filter")}}
- [Applying SVG effects to HTML content](/ko/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
- SVG attributes:

  - {{SVGAttr("clip-path")}}
  - {{SVGAttr("clip-rule")}}
