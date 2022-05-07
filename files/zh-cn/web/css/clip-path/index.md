---
title: clip-path
slug: Web/CSS/clip-path
tags:
  - CSS
  - CSS Masking
  - CSS 属性
  - CSS 遮罩
  - Web
  - clip-path
  - 实验性
  - 引用
translation_of: Web/CSS/clip-path
---
<div>{{CSSRef}}</div>

<p><code><strong>clip-path</strong></code> <a href="/zh-CN/docs/Web/CSS">CSS</a> 属性使用裁剪方式创建元素的可显示区域。区域内的部分显示，区域外的隐藏。</p>

<div>{{EmbedInteractiveExample("pages/css/clip-path.html")}}</div>

<p class="hidden">这个交互式示例的源代码存储在 GitHub 存储库中。如果你想为这个互动例子项目做贡献，请克隆 https://github.com/mdn/interactive-examples 并发送请求给我们。</p>

<h2 id="语法">语法</h2>

<pre class="brush:css no-line-numbers notranslate">/* Keyword values */
clip-path: none;

/* &lt;clip-source&gt; values */
clip-path: url(resources.svg#c1);

/* &lt;geometry-box&gt; values */
clip-path: margin-box;
clip-path: border-box;
clip-path: padding-box;
clip-path: content-box;
clip-path: fill-box;
clip-path: stroke-box;
clip-path: view-box;

/* &lt;basic-shape&gt; values */
clip-path: inset(100px 50px);
clip-path: circle(50px at 0 100px);
clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
clip-path: path('M0.5,1 C0.5,1,0,0.7,0,0.3 A0.25,0.25,1,1,1,0.5,0.3 A0.25,0.25,1,1,1,1,0.3 C1,0.7,0.5,1,0.5,1 Z');

/* Box and shape values combined */
clip-path: padding-box circle(50px at 0 100px);

/* Global values */
clip-path: inherit;
clip-path: initial;
clip-path: unset;
</pre>

<p>clip-path属性指定为下面列出的值的一个或多个值的组合.</p>

<h3 id="取值">取值</h3>

<dl>
 <dt><code>&lt;clip-source&gt;</code></dt>
 <dd>用 {{cssxref("&lt;url&gt;")}} 表示剪切元素的路径</dd>
 <dt>{{cssxref("&lt;basic-shape&gt;")}}</dt>
 <dd>一种形状，其大小和位置由&lt;几何盒&gt;值定义。如果没有指定几何框，则边框将用作参考框</dd>
 <dt><code>&lt;geometry-box&gt;</code></dt>
 <dd>如果同 <code>&lt;basic-shape&gt;</code> 一起声明，它将为基本形状提供相应的参考框盒。通过自定义，它将利用确定的盒子边缘包括任何形状边角（比如说，被 {{cssxref("border-radius")}} 定义的剪切路径）。几何框盒可以有以下的值中的一个：</dd>
 <dd>
 <dl>
  <dt><code>margin-box</code></dt>
  <dd>使用 <a href="CSS_Box_Model/Introduction_to_the_CSS_box_model">margin box</a> 作为引用框。</dd>
  <dt><code>border-box</code></dt>
  <dd>使用 <a href="CSS_Box_Model/Introduction_to_the_CSS_box_model">border box</a> 作为引用框。</dd>
  <dt><code>padding-box</code></dt>
  <dd>使用 <a href="CSS_Box_Model/Introduction_to_the_CSS_box_model">padding box</a> 作为引用框。</dd>
  <dt><code>content-box</code></dt>
  <dd>使用 <a href="CSS_Box_Model/Introduction_to_the_CSS_box_model">content box</a> 作为引用框。</dd>
  <dt><code>fill-box</code></dt>
  <dd>利用对象边界框作为引用框。</dd>
  <dt><code>stroke-box</code></dt>
  <dd>使用笔触边界框（stroke bounding box）作为引用框</dd>
  <dt><code>view-box</code></dt>
  <dd>使用最近的 SVG 视口（viewport）作为引用框。如果{{SVGAttr("viewBox")}} 属性被指定来为元素创建 SVG 视口，引用框将会被定位在坐标系的原点，引用框位于由 <code>viewBox</code> 属性建立的坐标系的原点，引用框的尺寸用来设置 <code>viewBox</code> 属性的宽高值。</dd>
 </dl>
 </dd>
 <dt><code>none</code></dt>
 <dd>不创建的剪切路径。</dd>
</dl>

<div class="blockIndicator note">
<p><strong>Note</strong>: A computed value other than <strong><code>none</code></strong> results in the creation of a new <a href="/zh-CN/docs/CSS/Understanding_z-index/The_stacking_context">stacking context</a> the same way that CSS {{cssxref("opacity")}} does for values other than <code>1</code>.</p>
</div>

<h3 id="正式语法">正式语法</h3>

{{csssyntax}}

<h2 id="例子">例子</h2>

<h3 id="HTML_与_SVG_之间的对比">HTML 与 SVG 之间的对比</h3>

<div class="hidden" id="clip-path">
<pre class="brush: html notranslate">&lt;svg class="defs"&gt;
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

<pre class="brush: css notranslate">html,body {
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

<h3 id="完整示例">完整示例</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;img id="clipped" src="https://mdn.mozillademos.org/files/12668/MDN.svg"
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

<pre class="brush: css notranslate">#clipped {
  margin-bottom: 20px;
  clip-path: url(#cross);
}
</pre>

<div class="hidden">
<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js notranslate">var clipPathSelect = document.getElementById("clipPath");
clipPathSelect.addEventListener("change", function (evt) {
  document.getElementById("clipped").style.clipPath = evt.target.value;
});
</pre>
</div>

<h4 id="结果">结果</h4>

<p>{{EmbedLiveSample("Complete_example", 230, 250)}}</p>

<h2 id="规范">规范</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("CSS Masks", "#the-clip-path", 'clip-path')}}</td>
   <td>{{Spec2('CSS Masks')}}</td>
   <td>Extends its application to HTML elements</td>
  </tr>
  <tr>
   <td>{{SpecName('SVG1.1', 'masking.html#ClipPathProperty', 'clip-path')}}</td>
   <td>{{Spec2('SVG1.1')}}</td>
   <td>Initial definition (applies to SVG elements only)</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<p>{{Compat("css.properties.clip-path")}}</p>

<h2 id="参见">参见</h2>

<ul>
 <li><a href="https://hacks.mozilla.org/2017/06/css-shapes-clipping-and-masking/">Shapes in clipping and masking – and how to use them</a></li>
 <li>CSS properties: {{cssxref("mask")}}, {{cssxref("filter")}}</li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Applying_SVG_effects_to_HTML_content">Applying SVG effects to HTML content</a></li>
 <li>SVG attributes: {{SVGAttr("clip-path")}}, {{SVGAttr("clip-rule")}}</li>
</ul>
