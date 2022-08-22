---
title: marker-mid
slug: Web/SVG/Attribute/marker-mid
tags:
  - SVG
  - SVG Attribute
  - SVG 属性
translation_of: Web/SVG/Attribute/marker-mid
---
<div>{{SVGRef}}</div>

<p><strong><code>marker-mid</code></strong> 属性は、指定された<a href="/ja/docs/Web/SVG/Element#Shape_elements">シェイプ</a>の中間の頂点すべてに描かれる矢印やマーカーを定義します。</p>

<p>マーカーは、<a href="/ja/docs/Web/SVG/Attribute/d#Path_commands">パスデータ</a>の最初と最後以外のすべての頂点に描画されます。</p>

<p class="note"><strong>メモ:</strong> プレゼンテーション属性なので、 <code>marker-mid</code> は CSS プロパティとして使用することができます。</p>

<p>プレゼンテーション属性として任意の要素に適用できますが、 {{SVGElement("circle")}}, {{SVGElement("ellipse")}}, {{SVGElement("line")}}, {{SVGElement("path")}}, {{SVGElement("polygon")}}, {{SVGElement("polyline")}}, {{SVGElement("rect")}} の7つの要素でのみ効果があります。</p>

<div id="topExample">
<div class="hidden">
<pre class="brush: css">html, body, svg {
  height: 100%;
}</pre>
</div>

<pre class="brush: html; hightlight[8]">&lt;svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;defs&gt;
    &lt;marker id="circle" markerWidth="8" markerHeight="8" refX="4" refY="4"&gt;
        &lt;circle cx="4" cy="4" r="4" stroke="none" fill="#f00"/&gt;
    &lt;/marker&gt;
  &lt;/defs&gt;
  &lt;polyline fill="none" stroke="black"
      points="20,100 40,60 70,80 100,20" marker-mid="url(#circle)"/&gt;
&lt;/svg&gt;
</pre>

<p>{{EmbedLiveSample("topExample", "200", "200")}}</p>
</div>

<h2 id="Usage_notes" name="Usage_notes">使用上のメモ</h2>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">既定値</th>
   <td><code>none</code> | <code>&lt;marker-ref&gt;</code></td>
  </tr>
  <tr>
   <th scope="row">値</th>
   <td><code>none</code></td>
  </tr>
  <tr>
   <th scope="row">アニメーション</th>
   <td>可</td>
  </tr>
 </tbody>
</table>

<dl>
 <dt><code>none</code></dt>
 <dd>指定された頂点にマーカー記号を描画してはならないことを示します。</dd>
 <dt><code>&lt;marker-ref&gt;</code></dt>
 <dd>この値は {{SVGElement("marker")}} 要素への参照で、指定された頂点に描画されるものです。参照が有効でない場合は、マーカーは描画されません。</dd>
</dl>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("SVG2", "painting.html#MarkerEndProperty", "marker-mid")}}</td>
   <td>{{Spec2("SVG2")}}</td>
   <td>重要な変更なし</td>
  </tr>
  <tr>
   <td>{{SpecName("SVG1.1", "painting.html#MarkerEndProperty", "marker-mid")}}</td>
   <td>{{Spec2("SVG1.1")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("svg.attributes.presentation.marker-mid")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{SVGElement("marker")}}</li>
 <li>{{SVGAttr("marker-start")}}</li>
 <li>{{SVGAttr("marker-end")}}</li>
</ul>
