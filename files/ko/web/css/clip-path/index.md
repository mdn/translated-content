---
title: clip-path
slug: Web/CSS/clip-path
tags:
  - CSS
  - CSS Masking
  - CSS Property
  - Experimental
  - Reference
  - Web
translation_of: Web/CSS/clip-path
---
<div>{{CSSRef}}</div>

<p><code><strong>clip-path</strong></code> <a href="/ko/docs/Web/CSS">CSS</a> 속성은 요소의 클리핑 범위를 지정합니다. 클리핑 범위 안의 부분은 보여지고, 바깥은 숨겨집니다.</p>

<div>{{EmbedInteractiveExample("pages/css/clip-path.html")}}</div>



<h2 id="구문">구문</h2>

<pre class="brush:css no-line-numbers">/* 키워드 값 */
clip-path: none;

/* &lt;clip-source&gt; 값 */
clip-path: url(resources.svg#c1);

/* &lt;geometry-box&gt; 값 */
clip-path: margin-box;
clip-path: border-box;
clip-path: padding-box;
clip-path: content-box;
clip-path: fill-box;
clip-path: stroke-box;
clip-path: view-box;

/* &lt;basic-shape&gt; 값 */
clip-path: inset(100px 50px);
clip-path: circle(50px at 0 100px);
clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
clip-path: path('M0.5,1 C0.5,1,0,0.7,0,0.3 A0.25,0.25,1,1,1,0.5,0.3 A0.25,0.25,1,1,1,1,0.3 C1,0.7,0.5,1,0.5,1 Z');

/* 박스와 도형 값 조합 */
clip-path: padding-box circle(50px at 0 100px);

/* 전역 값 */
clip-path: inherit;
clip-path: initial;
clip-path: unset;
</pre>

<p><code>clip-path</code> 속성은 아래의 값을 하나 이상 조합해 지정할 수 있습니다.</p>

<h3 id="값">값</h3>

<dl>
 <dt><code>&lt;clip-source&gt;</code></dt>
 <dd><a href="/ko/docs/Web/SVG">SVG</a> {{SVGElement("clipPath")}} 요소를 가리키는 {{cssxref("&lt;url&gt;")}}.</dd>
 <dt>{{cssxref("&lt;basic-shape&gt;")}}</dt>
 <dd><code>&lt;geometry-box&gt;</code> 값으로 크기와 위치가 정해지는 도형. <code>&lt;geometry-box&gt;</code>를 지정하지 않는다면 <code>border-box</code>를 참조 박스로 사용합니다.</dd>
 <dt><code>&lt;geometry-box&gt;</code></dt>
 <dd><code>&lt;basic-shape&gt;</code>와 함께 지정하면, <code>&lt;basic-shape&gt;</code>의 참조 박스를 정의합니다. 단독으로 지정한 경우, 값으로 주어진 상자와 그 상자의 모서리 형태({{cssxref("border-radius")}} 등)를 클리핑 패스로 적용합니다. 가능한 값은 다음과 같습니다.</dd>
 <dd>
 <dl>
  <dt><code>margin-box</code></dt>
  <dd><a href="/en-US/docs/Web/CSS/CSS_Shapes/From_box_values#margin-box">바깥 여백 상자</a>를 참조로 사용합니다.</dd>
  <dt><code>border-box</code></dt>
  <dd><a href="/en-US/docs/Web/CSS/CSS_Shapes/From_box_values#border-box">테두리 상자</a>를 참조로 사용합니다.</dd>
  <dt><code>padding-box</code></dt>
  <dd><a href="/en-US/docs/Web/CSS/CSS_Shapes/From_box_values#padding-box">안쪽 여백 상자</a>를 참조로 사용합니다.</dd>
  <dt><code>content-box</code></dt>
  <dd><a href="/en-US/docs/Web/CSS/CSS_Shapes/From_box_values#content-box">콘텐츠 상자</a>를 참조로 사용합니다.</dd>
  <dt><code>fill-box</code></dt>
  <dd>객체의 바운딩 상자를 참조로 사용합니다.</dd>
  <dt><code>stroke-box</code></dt>
  <dd>테두리 바운딩 상자를 참조로 사용합니다.</dd>
  <dt><code>view-box</code></dt>
  <dd>가장 가까운 SVG 뷰포트를 참조 상자로 사용합니다. SVG 뷰포트를 생성한 요소가 {{SVGAttr("viewBox")}} 속성을 가진 경우, 참조 상자의 위치는 <code>viewBox</code> 속성이 정의하는 좌표계의 원점에 위치하고, 크기는 <code>viewBox</code> 속성의 너비와 높이 값과 동일합니다.</dd>
 </dl>
 </dd>
 <dt><code>none</code></dt>
 <dd>클리핑 패스를 생성하지 않습니다.</dd>
</dl>

<div class="note">
<p><strong>참고</strong>: {{cssxref("opacity")}}가 1이 아닌 값일 때와 마찬가지로, <strong><code>none</code></strong> 외의 계산값은 새로운 <a href="/ko/docs/CSS/Understanding_z-index/The_stacking_context">쌓임 맥락</a>을 생성합니다.</p>
</div>

<h3 id="형식_구문">형식 구문</h3>

{{csssyntax}}

<h2 id="예제">예제</h2>

<h3 id="HTML과_SVG의_차이점">HTML과 SVG의 차이점</h3>

<div class="hidden" id="clip-path">
<pre class="brush: html">&lt;svg class="defs"&gt;
  &lt;defs&gt;
    &lt;clipPath id="myPath" clipPathUnits="objectBoundingBox"&gt;
      &lt;path d="M0.5,1 C0.5,1,0,0.7,0,0.3 A0.25,0.25,1,1,1,0.5,0.3 A0.25,0.25,1,1,1,1,0.3 C1,0.7,0.5,1,0.5,1 Z" /&gt;
    &lt;/clipPath&gt;
  &lt;/defs&gt;
&lt;/svg&gt;

&lt;div class="grid"&gt;
  &lt;div class="col"&gt;
    &lt;div class="note"&gt;clip-path: none&lt;/div&gt;
    &lt;div class="row"&gt;
      &lt;div class="cell"&gt; &lt;span&gt;HTML&lt;/span&gt;
        &lt;div class="container"&gt;
          &lt;p class="none"&gt;
            I LOVE&lt;br&gt;&lt;em&gt;clipping&lt;/em&gt;
          &lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="cell"&gt; &lt;span&gt;SVG&lt;/span&gt;
        &lt;div class="container viewbox"&gt;
          &lt;svg viewBox="0 0 192 192"&gt;
            &lt;g class="none"&gt;
              &lt;rect x="24" y="24" width="144" height="144" /&gt;
              &lt;text x="96" y="91"&gt;I LOVE&lt;/text&gt;
              &lt;text x="96" y="109" class="em"&gt;clipping&lt;/text&gt;
            &lt;/g&gt;
          &lt;/svg&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="note"&gt;clip-path: url(#myPath)&lt;br&gt;&lt;br&gt;
      Assuming the following clipPath definition:
      &lt;pre&gt;
&amp;lt;svg&amp;gt;
  &amp;lt;clipPath id="myPath" clipPathUnits="objectBoundingBox"&amp;gt;
    &amp;lt;path d="M0.5,1
      C 0.5,1,0,0.7,0,0.3
      A 0.25,0.25,1,1,1,0.5,0.3
      A 0.25,0.25,1,1,1,1,0.3
      C 1,0.7,0.5,1,0.5,1 Z" /&amp;gt;
  &amp;lt;/clipPath&amp;gt;
&amp;lt;/svg&amp;gt;&lt;/pre&gt;
    &lt;/div&gt;
    &lt;div class="row"&gt;
      &lt;div class="cell"&gt; &lt;span&gt;HTML&lt;/span&gt;
        &lt;div class="container"&gt;
          &lt;p class="svg"&gt;
            I LOVE&lt;br&gt;&lt;em&gt;clipping&lt;/em&gt;
          &lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="cell"&gt; &lt;span&gt;SVG&lt;/span&gt;
        &lt;div class="container viewbox"&gt;
          &lt;svg viewBox="0 0 192 192"&gt;
            &lt;g class="svg"&gt;
              &lt;rect x="24" y="24" width="144" height="144" /&gt;
              &lt;text x="96" y="91"&gt;I LOVE&lt;/text&gt;
              &lt;text x="96" y="109" class="em"&gt;clipping&lt;/text&gt;
            &lt;/g&gt;
          &lt;/svg&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="note"&gt;clip-path: path('M15,45 A30,30,0,0,1,75,45 A30,30,0,0,1,135,45 Q135,90,75,130 Q15,90,15,45 Z')
    &lt;/div&gt;
    &lt;div class="row"&gt;
      &lt;div class="cell"&gt; &lt;span&gt;HTML&lt;/span&gt;
        &lt;div class="container"&gt;
          &lt;p class="svg2"&gt;
            I LOVE&lt;br&gt;&lt;em&gt;clipping&lt;/em&gt;
          &lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="cell"&gt; &lt;span&gt;SVG&lt;/span&gt;
        &lt;div class="container viewbox"&gt;
          &lt;svg viewBox="0 0 192 192"&gt;
            &lt;g class="svg2"&gt;
              &lt;rect x="24" y="24" width="144" height="144" /&gt;
              &lt;text x="96" y="91"&gt;I LOVE&lt;/text&gt;
              &lt;text x="96" y="109" class="em"&gt;clipping&lt;/text&gt;
            &lt;/g&gt;
          &lt;/svg&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;



    &lt;div class="note"&gt;clip-path: circle(25%)&lt;/div&gt;
    &lt;div class="row"&gt;
      &lt;div class="cell"&gt; &lt;span&gt;HTML&lt;/span&gt;
        &lt;div class="container"&gt;
          &lt;p class="shape1"&gt;
            I LOVE&lt;br&gt;&lt;em&gt;clipping&lt;/em&gt;
          &lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="cell"&gt; &lt;span&gt;SVG&lt;/span&gt;
        &lt;div class="container viewbox"&gt;
          &lt;svg viewBox="0 0 192 192"&gt;
            &lt;g class="shape1"&gt;
              &lt;rect x="24" y="24" width="144" height="144" /&gt;
              &lt;text x="96" y="91"&gt;I LOVE&lt;/text&gt;
              &lt;text x="96" y="109" class="em"&gt;clipping&lt;/text&gt;
            &lt;/g&gt;
          &lt;/svg&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="note"&gt;clip-path: circle(25% at 25% 25%)&lt;/div&gt;
    &lt;div class="row"&gt;
      &lt;div class="cell"&gt; &lt;span&gt;HTML&lt;/span&gt;
        &lt;div class="container"&gt;
          &lt;p class="shape2"&gt;
            I LOVE&lt;br&gt;&lt;em&gt;clipping&lt;/em&gt;
          &lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="cell"&gt; &lt;span&gt;SVG&lt;/span&gt;
        &lt;div class="container viewbox"&gt;
          &lt;svg viewBox="0 0 192 192"&gt;
            &lt;g class="shape2"&gt;
              &lt;rect x="24" y="24" width="144" height="144" /&gt;
              &lt;text x="96" y="91"&gt;I LOVE&lt;/text&gt;
              &lt;text x="96" y="109" class="em"&gt;clipping&lt;/text&gt;
            &lt;/g&gt;
          &lt;/svg&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="note"&gt;clip-path: fill-box circle(25% at 25% 25%)&lt;/div&gt;
    &lt;div class="row"&gt;
      &lt;div class="cell"&gt; &lt;span&gt;HTML&lt;/span&gt;
        &lt;div class="container"&gt;
          &lt;p class="shape3"&gt;
            I LOVE&lt;br&gt;&lt;em&gt;clipping&lt;/em&gt;
          &lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="cell"&gt; &lt;span&gt;SVG&lt;/span&gt;
        &lt;div class="container viewbox"&gt;
          &lt;svg viewBox="0 0 192 192"&gt;
            &lt;g class="shape3"&gt;
              &lt;rect x="24" y="24" width="144" height="144" /&gt;
              &lt;text x="96" y="91"&gt;I LOVE&lt;/text&gt;
              &lt;text x="96" y="109" class="em"&gt;clipping&lt;/text&gt;
            &lt;/g&gt;
          &lt;/svg&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="note"&gt;clip-path: stroke-box circle(25% at 25% 25%)&lt;/div&gt;
    &lt;div class="row"&gt;
      &lt;div class="cell"&gt; &lt;span&gt;HTML&lt;/span&gt;
        &lt;div class="container"&gt;
          &lt;p class="shape4"&gt;
            I LOVE&lt;br&gt;&lt;em&gt;clipping&lt;/em&gt;
          &lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="cell"&gt; &lt;span&gt;SVG&lt;/span&gt;
        &lt;div class="container viewbox"&gt;
          &lt;svg viewBox="0 0 192 192"&gt;
            &lt;g class="shape4"&gt;
              &lt;rect x="24" y="24" width="144" height="144" /&gt;
              &lt;text x="96" y="91"&gt;I LOVE&lt;/text&gt;
              &lt;text x="96" y="109" class="em"&gt;clipping&lt;/text&gt;
            &lt;/g&gt;
          &lt;/svg&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="note"&gt;clip-path: view-box circle(25% at 25% 25%)&lt;/div&gt;
    &lt;div class="row"&gt;
      &lt;div class="cell"&gt; &lt;span&gt;HTML&lt;/span&gt;
        &lt;div class="container"&gt;
          &lt;p class="shape5"&gt;
            I LOVE&lt;br&gt;&lt;em&gt;clipping&lt;/em&gt;
          &lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="cell"&gt; &lt;span&gt;SVG&lt;/span&gt;
        &lt;div class="container viewbox"&gt;
          &lt;svg viewBox="0 0 192 192"&gt;
            &lt;g class="shape5"&gt;
              &lt;rect x="24" y="24" width="144" height="144" /&gt;
              &lt;text x="96" y="91"&gt;I LOVE&lt;/text&gt;
              &lt;text x="96" y="109" class="em"&gt;clipping&lt;/text&gt;
            &lt;/g&gt;
          &lt;/svg&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="note"&gt;clip-path: margin-box circle(25% at 25% 25%)&lt;/div&gt;
    &lt;div class="row"&gt;
      &lt;div class="cell"&gt; &lt;span&gt;HTML&lt;/span&gt;
        &lt;div class="container"&gt;
          &lt;p class="shape6"&gt;
            I LOVE&lt;br&gt;&lt;em&gt;clipping&lt;/em&gt;
          &lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="cell"&gt; &lt;span&gt;SVG&lt;/span&gt;
        &lt;div class="container viewbox"&gt;
          &lt;svg viewBox="0 0 192 192"&gt;
            &lt;g class="shape6"&gt;
              &lt;rect x="24" y="24" width="144" height="144" /&gt;
              &lt;text x="96" y="91"&gt;I LOVE&lt;/text&gt;
              &lt;text x="96" y="109" class="em"&gt;clipping&lt;/text&gt;
            &lt;/g&gt;
          &lt;/svg&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="note"&gt;clip-path: border-box circle(25% at 25% 25%)&lt;/div&gt;
    &lt;div class="row"&gt;
      &lt;div class="cell"&gt; &lt;span&gt;HTML&lt;/span&gt;
        &lt;div class="container"&gt;
          &lt;p class="shape7"&gt;
            I LOVE&lt;br&gt;&lt;em&gt;clipping&lt;/em&gt;
          &lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="cell"&gt; &lt;span&gt;SVG&lt;/span&gt;
        &lt;div class="container viewbox"&gt;
          &lt;svg viewBox="0 0 192 192"&gt;
            &lt;g class="shape7"&gt;
              &lt;rect x="24" y="24" width="144" height="144" /&gt;
              &lt;text x="96" y="91"&gt;I LOVE&lt;/text&gt;
              &lt;text x="96" y="109" class="em"&gt;clipping&lt;/text&gt;
            &lt;/g&gt;
          &lt;/svg&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="note"&gt;clip-path: padding-box circle(25% at 25% 25%)&lt;/div&gt;
    &lt;div class="row"&gt;
      &lt;div class="cell"&gt; &lt;span&gt;HTML&lt;/span&gt;
        &lt;div class="container"&gt;
          &lt;p class="shape8"&gt;
            I LOVE&lt;br&gt;&lt;em&gt;clipping&lt;/em&gt;
          &lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="cell"&gt; &lt;span&gt;SVG&lt;/span&gt;
        &lt;div class="container viewbox"&gt;
          &lt;svg viewBox="0 0 192 192"&gt;
            &lt;g class="shape8"&gt;
              &lt;rect x="24" y="24" width="144" height="144" /&gt;
              &lt;text x="96" y="91"&gt;I LOVE&lt;/text&gt;
              &lt;text x="96" y="109" class="em"&gt;clipping&lt;/text&gt;
            &lt;/g&gt;
          &lt;/svg&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="note"&gt;clip-path: content-box circle(25% at 25% 25%)&lt;/div&gt;
    &lt;div class="row"&gt;
      &lt;div class="cell"&gt; &lt;span&gt;HTML&lt;/span&gt;
        &lt;div class="container"&gt;
          &lt;p class="shape9"&gt;
            I LOVE&lt;br&gt;&lt;em&gt;clipping&lt;/em&gt;
          &lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="cell"&gt; &lt;span&gt;SVG&lt;/span&gt;
        &lt;div class="container viewbox"&gt;
          &lt;svg viewBox="0 0 192 192"&gt;
            &lt;g class="shape9"&gt;
              &lt;rect x="24" y="24" width="144" height="144" /&gt;
              &lt;text x="96" y="91"&gt;I LOVE&lt;/text&gt;
              &lt;text x="96" y="109" class="em"&gt;clipping&lt;/text&gt;
            &lt;/g&gt;
          &lt;/svg&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>

<pre class="brush: css">html,body {
  height: 100%;
  box-sizing: border-box;
  background: #EEE;
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
  margin: .5em;
  padding: .5em;
  background-color: #FFF;
  overflow: hidden;
  text-align: center;
  flex: 1;
}

.note {
  background: #fff3d4;
  padding: 1em;
  margin: .5em .5em 0;
  font: .8em sans-serif;
  text-align: left;
  white-space: nowrap;
}

.note + .row .cell {
  margin-top: 0;
}

.container {
  display: inline-block;
  border: 1px dotted grey;
  position:relative;
}

.container:before {
  content: 'margin';
  position: absolute;
  top: 2px;
  left: 2px;
  font: italic .6em sans-serif;
}

.viewbox {
  box-shadow: 1rem 1rem 0 #EFEFEF inset, -1rem -1rem 0 #EFEFEF inset;
}

.container.viewbox:after {
  content: 'viewbox';
  position: absolute;
  left: 1.1rem;
  top: 1.1rem;
  font: italic .6em sans-serif;
}

.cell span {
  display: block;
  margin-bottom: .5em;
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

.none { clip-path: none; }
.svg  { clip-path: url(#myPath); }
.svg2 { clip-path: path('M15,45 A30,30,0,0,1,75,45 A30,30,0,0,1,135,45 Q135,90,75,130 Q15,90,15,45 Z');}
.shape1 { clip-path: circle(25%); }
.shape2 { clip-path: circle(25% at 25% 25%); }
.shape3 { clip-path: fill-box    circle(25% at 25% 25%); }
.shape4 { clip-path: stroke-box  circle(25% at 25% 25%); }
.shape5 { clip-path: view-box    circle(25% at 25% 25%); }
.shape6 { clip-path: margin-box  circle(25% at 25% 25%); }
.shape7 { clip-path: border-box  circle(25% at 25% 25%); }
.shape8 { clip-path: padding-box circle(25% at 25% 25%); }
.shape9 { clip-path: content-box circle(25% at 25% 25%); }

.defs {
  width: 0;
  height: 0;
  margin: 0;
}

pre { margin-bottom: 0; }

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
}</pre>
</div>

<p>{{EmbedLiveSample("clip-path", "100%", 800, "", "", "example-outcome-frame")}}</p>

<h3 id="완전한_예제">완전한 예제</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;img id="clipped" src="https://mdn.mozillademos.org/files/12668/MDN.svg"
    alt="MDN logo"&gt;
&lt;svg height="0" width="0"&gt;
  &lt;defs&gt;
    &lt;clipPath id="cross"&gt;
      &lt;rect y="110" x="137" width="90" height="90"/&gt;
      &lt;rect x="0" y="110" width="90" height="90"/&gt;
      &lt;rect x="137" y="0" width="90" height="90"/&gt;
      &lt;rect x="0" y="0" width="90" height="90"/&gt;
    &lt;/clipPath&gt;
  &lt;/defs&gt;
&lt;/svg&gt;

&lt;select id="clipPath"&gt;
  &lt;option value="none"&gt;none&lt;/option&gt;
  &lt;option value="circle(100px at 110px 100px)"&gt;circle&lt;/option&gt;
  &lt;option value="url(#cross)" selected&gt;cross&lt;/option&gt;
  &lt;option value="inset(20px round 20px)"&gt;inset&lt;/option&gt;
  &lt;option value="path('M 0 200 L 0,110 A 110,90 0,0,1 240,100 L 200 340 z')"&gt;path&lt;/option&gt;
&lt;/select&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">#clipped {
  margin-bottom: 20px;
  clip-path: url(#cross);
}
</pre>

<div class="hidden">
<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js">var clipPathSelect = document.getElementById("clipPath");
clipPathSelect.addEventListener("change", function (evt) {
  document.getElementById("clipped").style.clipPath = evt.target.value;
});
</pre>
</div>

<h4 id="결과">결과</h4>

<p>{{EmbedLiveSample("완전한_예제", 230, 250)}}</p>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<p>{{cssinfo}}</p>

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("css.properties.clip-path")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li><a href="https://hacks.mozilla.org/2017/06/css-shapes-clipping-and-masking/">Shapes in clipping and masking – and how to use them</a></li>
 <li>CSS 속성: {{cssxref("mask")}}, {{cssxref("filter")}}</li>
 <li><a href="/ko/docs/Web/SVG/Applying_SVG_effects_to_HTML_content">HTML 콘텐츠에 SVG 효과 적용하기</a></li>
 <li>SVG 속성: {{SVGAttr("clip-path")}}, {{SVGAttr("clip-rule")}}</li>
</ul>
