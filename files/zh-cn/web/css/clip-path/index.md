---
title: clip-path
slug: Web/CSS/clip-path
---

{{CSSRef}}

**`clip-path`** [CSS](/zh-CN/docs/Web/CSS) 属性使用裁剪方式创建元素的可显示区域。区域内的部分显示，区域外的隐藏。

{{EmbedInteractiveExample("pages/css/clip-path.html")}}

## 语法

```css
/* Keyword values */
clip-path: none;

/* <clip-source> values */
clip-path: url(resources.svg#c1);

/* <geometry-box> values */
clip-path: margin-box;
clip-path: border-box;
clip-path: padding-box;
clip-path: content-box;
clip-path: fill-box;
clip-path: stroke-box;
clip-path: view-box;

/* <basic-shape> values */
clip-path: inset(100px 50px);
clip-path: circle(50px at 0 100px);
clip-path: ellipse(50px 60px at 0 10% 20%);
clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
clip-path: path(
  "M0.5,1 C0.5,1,0,0.7,0,0.3 A0.25,0.25,1,1,1,0.5,0.3 A0.25,0.25,1,1,1,1,0.3 C1,0.7,0.5,1,0.5,1 Z"
);

/* Box and shape values combined */
clip-path: padding-box circle(50px at 0 100px);

/* Global values */
clip-path: inherit;
clip-path: initial;
clip-path: revert;
clip-path: revert-layer;
clip-path: unset;
```

`clip-path` 属性指定为下面列出的值的一个或多个值的组合。

### 取值

- `<clip-source>`
  - : 用 {{cssxref("url", "url()")}} 引用 [SVG](/zh-CN/docs/Web/SVG) 的 {{SVGElement("clipPath")}} 元素
- {{cssxref("&lt;basic-shape&gt;")}}

  - : 一种形状，其大小和位置由 `<geometry-box>` 的值定义。如果没有指定 `<geometry-box>`，则将使用 `border-box` 用为参考框。取值可为以下值中的任意一个：

    - {{cssxref("basic-shape/inset","inset()")}}
      - : 定义一个 inset 矩形。
    - {{cssxref("basic-shape/circle","circle()")}}
      - : 定义一个圆形（使用一个半径和一个圆心位置）。
    - {{cssxref("basic-shape/ellipse","ellipse()")}}
      - : 定义一个椭圆（使用两个半径和一个圆心位置）。
    - {{cssxref("basic-shape/polygon","polygon()")}}
      - : 定义一个多边形（使用一个 SVG 填充规则和一组顶点）。
    - {{cssxref("path","path()")}}
      - : 定义一个任意形状（使用一个可选的 SVG 填充规则和一个 SVG 路径定义）。

- `<geometry-box>`

  - : 如果同 `<basic-shape>` 一起声明，它将为基本形状提供相应的参考框盒。通过自定义，它将利用确定的盒子边缘包括任何形状边角（比如说，被 {{cssxref("border-radius")}} 定义的剪切路径）。几何框盒可以有以下的值中的一个：

    - `margin-box`
      - : 使用 [margin box](/zh-CN/docs/Web/CSS/CSS_shapes/From_box_values#margin-box) 作为引用框。
    - `border-box`
      - : 使用 [border box](/zh-CN/docs/Web/CSS/CSS_shapes/From_box_values#border-box) 作为引用框。
    - `padding-box`
      - : 使用 [padding box](/zh-CN/docs/Web/CSS/CSS_shapes/From_box_values#padding-box) 作为引用框。
    - `content-box`
      - : 使用 [content box](/zh-CN/docs/Web/CSS/CSS_shapes/From_box_values#content-box) 作为引用框。
    - `fill-box`
      - : 利用对象边界框（object bounding box）作为引用框。
    - `stroke-box`
      - : 使用笔触边界框（stroke bounding box）作为引用框。
    - `view-box`
      - : 使用最近的 SVG 视口（viewport）作为引用框。如果 {{SVGAttr("viewBox")}} 属性被指定来为元素创建 SVG 视口，引用框将会被定位在坐标系的原点，引用框位于由 `viewBox` 属性建立的坐标系的原点，引用框的尺寸用来设置 `viewBox` 属性的宽高值。

- `none`
  - : 不创建剪切路径。

> **备注：** CSS 计算值不为 **`none`** 时，会创建新的[层叠上下文](/zh-CN/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)，就像 CSS {{cssxref("opacity")}} 的值不为 `1` 时那样。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### HTML 与 SVG 之间的对比

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

{{EmbedLiveSample("HTML 与 SVG 之间的对比", "100%", 800, "", "", "example-outcome-frame")}}

### 完整示例

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
clipPathSelect.addEventListener("change", function (evt) {
  document.getElementById("clipped").style.clipPath = evt.target.value;
});
```

#### 结果

{{EmbedLiveSample("完整示例", 230, 250)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Shapes in clipping and masking – and how to use them](https://hacks.mozilla.org/2017/06/css-shapes-clipping-and-masking/)
- [在 HTML 内容中应用 SVG 效果](/zh-CN/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
- SVG 属性：

  - {{SVGAttr("clip-path")}}
  - {{SVGAttr("clip-rule")}}
