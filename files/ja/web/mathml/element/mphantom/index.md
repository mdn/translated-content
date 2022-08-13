---
title: <mphantom>
slug: Web/MathML/Element/mphantom
translation_of: Web/MathML/Element/mphantom
---
<div>{{MathMLRef}}</div>

<p class="summary">MathML の <code>&lt;mphantom&gt;</code> 要素は、表示上は不可視だが一定の広がり（高さ、幅、ベースライン位置）を維持した要素です。</p>

<h2 id="属性">属性</h2>

<dl>
 <dt id="attr-class-id-style">class, id, style</dt>
 <dd>Provided for use with <a href="/ja/docs/CSS">stylesheets</a>.</dd>
 <dt id="attr-mathbackground">mathbackground</dt>
 <dd>背景色。<code>#rgb</code>, <code>#rrggbb</code> および <a href="/ja/docs/CSS/color_value#Color_Keywords">HTML color names</a> を用いることができる。</dd>
</dl>

<h2 id="例">例</h2>

<p>Sample rendering: <img alt="x+  z" src="/files/3199/mphantom.png" style="margin-left: 10px; vertical-align: middle;"></p>

<p>Rendering in your browser: <math> <mrow> <mi> x </mi> <mo> + </mo> <mphantom> <mi> y </mi> <mo> + </mo> </mphantom> <mi> z </mi> </mrow> </math></p>

<pre class="brush: html">&lt;math&gt;

&lt;mrow&gt;
  &lt;mi&gt; x &lt;/mi&gt;
  &lt;mo&gt; + &lt;/mo&gt;
  &lt;mphantom&gt;
    &lt;mi&gt; y &lt;/mi&gt;
    &lt;mo&gt; + &lt;/mo&gt;
  &lt;/mphantom&gt;
  &lt;mi&gt; z &lt;/mi&gt;
&lt;/mrow&gt;

&lt;/math&gt;
</pre>

<h2 id="仕様">仕様</h2>

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
   <td>{{ SpecName('MathML3', 'chapter3.html#presm.mphantom', 'mphantom') }}</td>
   <td>{{ Spec2('MathML3') }}</td>
   <td>Current specification</td>
  </tr>
  <tr>
   <td>{{ SpecName('MathML2', 'chapter3.html#presm.mphantom', 'mphantom') }}</td>
   <td>{{ Spec2('MathML2') }}</td>
   <td>Initial specification</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザーごとの互換性">ブラウザーごとの互換性</h2>



<p>{{Compat("mathml.elements.mphantom")}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{ MathMLElement("mspace") }}</li>
 <li>{{ MathMLElement("mpadded") }}</li>
</ul>
