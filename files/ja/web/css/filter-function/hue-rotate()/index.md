---
title: hue-rotate()
slug: Web/CSS/filter-function/hue-rotate()
tags:
  - CSS
  - CSS Function
  - Filter Effects
  - Function
  - Reference
translation_of: Web/CSS/filter-function/hue-rotate()
---
<div>{{cssref}}</div>

<p><strong><code>hue-rotate()</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> の関数で、要素およびその中身のコンテンツの色相環を回転します。結果は {{cssxref("&lt;filter-function&gt;")}} です。</p>

<div>{{EmbedInteractiveExample("pages/css/function-hue-rotate.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">hue-rotate(<var>angle</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>angle</var></code></dt>
 <dd>入力サンプルの色相の相対的な変化量を、 {{cssxref("&lt;angle&gt;")}} で指定します。 <code>0deg</code> は入力を変更しないままにします。正の回転角は色相の値を増加させるのに対し、負の回転角は色相の値を減少させます。補間時の欠損値は <code>0</code> です。最小値又は最大値はなく、 <code>hue-rotate(Ndeg)</code> は <code>N</code> を 360 で割った余りと等価です。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: css notranslate">hue-rotate(-90deg)  /* 270度の回転と同じ */
hue-rotate(0deg)    /* 効果なし */
hue-rotate(90deg)   /* 90度の回転 */
hue-rotate(.5turn)  /* 180度の回転 */
hue-rotate(405deg)  /* 45度の回転と同じ */
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Filters 1.0', '#funcdef-filter-hue-rotate', 'hue-rotate()')}}</td>
   <td>{{Spec2('Filters 1.0')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{cssxref("&lt;filter-function&gt;")}}</li>
 <li>{{cssxref("filter-function/blur", "blur()")}}</li>
 <li>{{cssxref("filter-function/brightness", "brightness()")}}</li>
 <li>{{cssxref("filter-function/contrast", "contrast()")}}</li>
 <li>{{cssxref("filter-function/drop-shadow", "drop-shadow()")}}</li>
 <li>{{cssxref("filter-function/grayscale", "grayscale()")}}</li>
 <li>{{cssxref("filter-function/invert", "invert()")}}</li>
 <li>{{cssxref("filter-function/opacity", "opacity()")}}</li>
 <li>{{cssxref("filter-function/saturate", "saturate()")}}</li>
 <li>{{cssxref("filter-function/sepia", "sepia()")}}</li>
</ul>
