---
title: scaleX()
slug: Web/CSS/transform-function/scaleX()
translation_of: Web/CSS/transform-function/scaleX()
---
<div>{{CSSRef}}</div>

<div><a href="/ja/docs/Web/CSS">CSS</a>の<strong><code>scaleX()</code></strong> 関数は、要素をX軸に沿って（水平に）拡縮する変形を定義します。</div>

<div>結果は <a href="/ja/docs/Web/CSS/transform-function" title="CSS の &lt;transform-function> データ型は、要素の外見の変形を表します。変形関数は二次元または三次元空間で要素を回転、拡大縮小、歪曲、移動させることができます。これは transform プロパティの中で使用されます。"><code>&lt;transform-function&gt;</code></a> データ型になります。</div>

<div></div>

<div></div>

<p><img src="https://mdn.mozillademos.org/files/12117/scaleX.png" style="height: 315px; width: 372px;"></p>

<p>係数が 1 である場合を除いて、各要素点の横座標を一定の係数で修正し、この場合、関数は恒等変換です。拡大縮小は等方性ではなく、要素の角度は保存されません。 <code>scaleX(-1)</code> は<a href="http://en.wikipedia.org/wiki/Axial_symmetry" rel="noopener">軸の線対称</a>を定義し、垂直軸は原点を通過します (<a href="/ja/docs/Web/CSS/transform-origin" title="CSS の transform-origin プロパティは、要素の変形 (transform) における原点を設定します。"><code>transform-origin</code></a> プロパティで指定)。</p>

<div class="note">
<p><strong>メモ:</strong> <code>scaleX(sx)</code>は<code><font face="x-locale-heading-primary, zillaslab, Palatino, Palatino Linotype, x-locale-heading-secondary, serif"><span style="background-color: #fff3d4;"> </span></font></code><code><a href="/ja/docs/Web/CSS/transform-function/scale">scale</a>(sx, 1)</code>または<code><a href="/ja/docs/Web/CSS/transform-function/scale3d">scale3d</a>(sx, 1, 1)</code>と等価です。</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox notranslate">scaleX(<em>s</em>)
</pre>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>s</code></dt>
 <dd>Is a {{cssxref("&lt;number&gt;")}} representing the scaling factor to apply on the abscissa of each point of the element.</dd>
</dl>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Cartesian coordinates on ℝ<sup>2</sup></th>
   <th scope="col">Homogeneous coordinates on ℝℙ<sup>2</sup></th>
   <th scope="col">Cartesian coordinates on ℝ<sup>3</sup></th>
   <th scope="col">Homogeneous coordinates on ℝℙ<sup>3</sup></th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td colspan="1" rowspan="2"><math> <mfenced> <mtable> <mtr><mtd>s</mtd><mtd>0</mtd></mtr> <mtr><mtd>0</mtd><mtd>1</mtd></mtr> </mtable> </mfenced> </math></td>
   <td><math> <mfenced><mtable><mtr>s<mtd>0</mtd><mtd>0</mtd></mtr><mtr>0<mtd>1</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable> </mfenced> </math></td>
   <td colspan="1" rowspan="2"><math> <mfenced><mtable><mtr>s<mtd>0</mtd><mtd>0</mtd></mtr><mtr>0<mtd>1</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable> </mfenced> </math></td>
   <td colspan="1" rowspan="2"><math> <mfenced><mtable><mtr>s<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtr><mtr>0<mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable> </mfenced> </math></td>
  </tr>
  <tr>
   <td><code>[s 0 0 1 0 0]</code></td>
  </tr>
 </tbody>
</table>

<h2 id="Examples">Examples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;div&gt;Normal&lt;/div&gt;
&lt;div class="scaled"&gt;Scaled&lt;/div&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css notranslate">div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.scaled {
  transform: scaleX(0.6);
  background-color: pink;
}
</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample("Examples","200","200")}}</p>

<h2 id="Specifications">Specifications</h2>

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
   <td>{{SpecName("CSS3 Transforms", "#funcdef-transform-scalex", "scaleX()")}}</td>
   <td>{{Spec2("CSS3 Transforms")}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>



<p>{{Compat("css.types.transform-function")}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><code><a href="/ja/docs/Web/CSS/transform-function/scaleY">scaleY()</a></code></li>
 <li><code><a href="/ja/docs/Web/CSS/transform-function/scaleZ">scaleZ()</a></code></li>
 <li>{{cssxref("transform")}}</li>
 <li>{{cssxref("&lt;transform-function&gt;")}}</li>
 <li>{{cssxref("transform-origin")}}</li>
</ul>
