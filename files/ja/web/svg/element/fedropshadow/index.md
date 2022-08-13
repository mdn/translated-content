---
title: <feDropShadow>
slug: Web/SVG/Element/feDropShadow
tags:
  - Element
  - Filters
  - Reference
  - SVG
translation_of: Web/SVG/Element/feDropShadow
---
<div>{{SVGRef}}</div>

<p>SVG の <strong><code>&lt;feDropShadow&gt;</code></strong> フィルタープリミティブは、入力画像のドロップシャドウを生成します。これは {{SVGElement('filter')}} 要素の中でのみ使用できます。</p>

<p class="note">ドロップシャドウの色や不透明度は、 {{SVGAttr('flood-color')}} や {{SVGAttr('flood-opacity')}} の各プレゼンテーション属性を使用することで変更できます。</p>

<div id="Example">
<div class="hidden">
<pre class="brush: css notranslate">html,body,svg { height:100% }</pre>
</div>

<pre class="brush: html; highlight[4] notranslate">&lt;svg viewBox="0 0 30 10" xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;defs&gt;
    &lt;filter id="shadow"&gt;
      &lt;feDropShadow dx="0.2" dy="0.4" stdDeviation="0.2"/&gt;
    &lt;/filter&gt;
    &lt;filter id="shadow2"&gt;
      &lt;feDropShadow dx="0" dy="0" stdDeviation="0.5"
          flood-color="cyan"/&gt;
    &lt;/filter&gt;
    &lt;filter id="shadow3"&gt;
      &lt;feDropShadow dx="-0.8" dy="-0.8" stdDeviation="0"
          flood-color="pink" flood-opacity="0.5"/&gt;
    &lt;/filter&gt;
  &lt;/defs&gt;

  &lt;circle cx="5" cy="50%" r="4"
      style="fill:pink; filter:url(#shadow);"/&gt;

  &lt;circle cx="15" cy="50%" r="4"
      style="fill:pink; filter:url(#shadow2);"/&gt;

  &lt;circle cx="25" cy="50%" r="4"
      style="fill:pink; filter:url(#shadow3);"/&gt;
&lt;/svg&gt;</pre>

<p>{{EmbedLiveSample('Example', 150, '100%')}}</p>
</div>

<h2 id="Attributes" name="Attributes">属性</h2>

<dl>
 <dt id="attr-cx">{{SVGAttr("dx")}}</dt>
 <dd>この属性は、ドロップシャドウの X 方向のオフセットを定義します。<br>
 <small><em>値の型</em>: <a href="/ja/docs/Web/SVG/Content_type#Number"><strong>&lt;number&gt;</strong></a>; <em>既定値</em>: <code>2</code>; <em>Animatable</em>: <strong>yes</strong></small></dd>
 <dt id="attr-cx">{{SVGAttr("dy")}}</dt>
 <dd>この属性は、ドロップシャドウの Y 方向のオフセットを定義します。<br>
 <small><em>値の型</em>: <a href="/ja/docs/Web/SVG/Content_type#Number"><strong>&lt;number&gt;</strong></a>; <em>既定値</em>: <code>2</code>; <em>Animatable</em>: <strong>yes</strong></small></dd>
 <dt id="attr-cx">{{SVGAttr("stdDeviation")}}</dt>
 <dd>この属性は、ドロップシャドウのぼかし操作の標準偏差を定義します。<br>
 <small><em>値の型</em>: <a href="/ja/docs/Web/SVG/Content_type#Number"><strong>&lt;number&gt;</strong></a>; <em>既定値</em>: <code>2</code>; <em>Animatable</em>: <strong>yes</strong></small></dd>
</dl>

<h3 id="Global_attributes" name="Global_attributes">グローバル属性</h3>

<dl>
 <dt><a href="/ja/docs/Web/SVG/Attribute/Core">コア属性</a></dt>
 <dd><small>特に: {{SVGAttr('id')}}</small></dd>
 <dt><a href="/ja/docs/Web/SVG/Attribute/Styling">スタイル属性</a></dt>
 <dd><small>{{SVGAttr('class')}}, {{SVGAttr('style')}}</small></dd>
 <dt><a href="/ja/docs/Web/SVG/Attribute#Filters_Attributes">フィルタープリミティブ属性</a></dt>
 <dd><small>{{SVGAttr('height')}}, {{SVGAttr('in')}}, {{SVGAttr('result')}}, {{SVGAttr('x')}}, {{SVGAttr('y')}}, {{SVGAttr('width')}}</small></dd>
 <dt><a href="/ja/docs/Web/SVG/Attribute/Presentation">プレゼンテーション属性</a></dt>
 <dd><small>特に: {{SVGAttr('flood-color')}}, {{SVGAttr('flood-opacity')}}</small></dd>
</dl>

<h2 id="Usage_notes" name="Usage_notes">使用上の注意</h2>

<p>{{svginfo}}</p>

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
   <td>{{SpecName("Filters 1.0", "#feDropShadowElement", "&lt;feDropShadow&gt;")}}</td>
   <td>{{Spec2("Filters 1.0")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("svg.elements.feDropShadow")}}</p>
