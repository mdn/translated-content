---
title: invert()
slug: Web/CSS/filter-function/invert()
tags:
  - CSS
  - CSS Function
  - Filter Effects
  - Function
  - Reference
translation_of: Web/CSS/filter-function/invert()
---
<div>{{cssref}}</div>

<p><strong><code>invert()</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> の関数で、入力画像の色サンプルを反転します。結果は {{cssxref("&lt;filter-function&gt;")}} です。</p>

<div>{{EmbedInteractiveExample("pages/css/function-invert.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">invert(<var>amount</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>amount</var></code></dt>
 <dd>変換の度合いで、 {{cssxref("&lt;number&gt;")}} または {{cssxref("&lt;percentage&gt;")}} で指定します。 <code>100%</code> の値では完全に反転され、 <code>0%</code> の値では入力が変更されないままになります。 <code>0%</code> と <code>100%</code> の間の値は、効果の割合です。補間時の欠損値は <code>0</code> です。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: css notranslate">invert(0)     /* 効果なし */
invert(.6)    /* 60% 反転 */
invert(100%)  /* 完全に反転 */</pre>

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
   <td>{{SpecName('Filters 1.0', '#funcdef-filter-invert', 'invert()')}}</td>
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
 <li>{{cssxref("filter-function/hue-rotate", "hue-rotate()")}}</li>
 <li>{{cssxref("filter-function/opacity", "opacity()")}}</li>
 <li>{{cssxref("filter-function/saturate", "saturate()")}}</li>
 <li>{{cssxref("filter-function/sepia", "sepia()")}}</li>
</ul>
