---
title: scale
slug: Web/SVG/Attribute/scale
tags:
  - Filters
  - SVG
  - SVG Attribute
translation_of: Web/SVG/Attribute/scale
---
<div>{{SVGRef}}</div>

<p><strong><code>scale</code></strong>属性は、{{SVGElement("feDisplacementMap")}}フィルタプリミティブにおいて用いられる距離の尺度因子を定義します。その量は、{{SVGElement("filter")}}要素の{{SVGAttr("primitiveUnits")}}属性で規定される座標系で表されます。</p>

<p>1つの要素のみがこの属性を用います: {{SVGElement("feDisplacementMap")}}</p>

<div id="topExample">
<div class="hidden">
<pre class="brush: css">html, body, svg {
  height: 100%;
}</pre>
</div>

<pre class="brush: html; highlight[4,8]">&lt;svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;filter id="displacementFilter" x="-20%" y="-20%" width="140%" height="140%"&gt;
    &lt;feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" result="turbulence"/&gt;
    &lt;feDisplacementMap in2="turbulence" in="SourceGraphic" scale="5"/&gt;
  &lt;/filter&gt;
  &lt;filter id="displacementFilter2" x="-20%" y="-20%" width="140%" height="140%"&gt;
    &lt;feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" result="turbulence"/&gt;
    &lt;feDisplacementMap in2="turbulence" in="SourceGraphic" scale="50"/&gt;
  &lt;/filter&gt;

  &lt;circle cx="100" cy="100" r="80" style="filter: url(#displacementFilter);""/&gt;
  &lt;circle cx="100" cy="100" r="80" style="filter: url(#displacementFilter2); transform: translateX(240px);""/&gt;
&lt;/svg&gt;</pre>

<p>{{EmbedLiveSample("topExample", "480", "200")}}</p>
</div>

<h2 id="Usage_notes" name="Usage_notes">使用方法</h2>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">値</th>
   <td>{{cssxref("number")}}</td>
  </tr>
  <tr>
   <th scope="row">既定値</th>
   <td><em>None</em></td>
  </tr>
  <tr>
   <th scope="row">アニメーション可否</th>
   <td>はい</td>
  </tr>
 </tbody>
</table>

<dl>
 <dt><code>&lt;number&gt;</code></dt>
 <dd>
 <p>この値は距離に関する尺度因子をのみを定義します。</p>

 <p>この属性の値が<code><span class="attr-value">0</span></code>の場合は、元画像に対して影響しません。</p>
 </dd>
</dl>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("Filters 1.0", "#element-attrdef-fedisplacementmap-scale", "scale")}}</td>
   <td>{{Spec2("Filters 1.0")}}</td>
   <td>No change</td>
  </tr>
  <tr>
   <td>{{SpecName("SVG1.1", "filters.html#feDisplacementMapScaleAttribute", "scale")}}</td>
   <td>{{Spec2("SVG1.1")}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>



<p>{{Compat("svg.elements.feDisplacementMap.scale")}}</p>
