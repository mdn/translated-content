---
title: saturate()
slug: Web/CSS/filter-function/saturate()
tags:
  - CSS
  - CSS 関数
  - Reference
  - フィルター効果
translation_of: Web/CSS/filter-function/saturate()
---
<div>{{cssref}}</div>

<p><strong><code>saturate()</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> の関数で、入力画像の彩度を上げたり下げたりします。結果は {{cssxref("&lt;filter-function&gt;")}} です。</p>

<div>{{EmbedInteractiveExample("pages/css/function-saturate.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">saturate(<var>amount</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>amount</var></code></dt>
 <dd>変換の量で、 {{cssxref("&lt;number&gt;")}} 又は {{cssxref("&lt;percentage&gt;")}} で指定します。 <code>100%</code> 未満の値では彩度を下げ、 <code>100%</code> を超える値では彩度を上げます。 <code>0%</code> の値では画像が完全に彩度がなくなり、 <code>100%</code> の値では入力が変更されないままになります。補間時の欠損値は <code>1</code> です。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: css notranslate">saturate(0)     /* 彩度なし */
saturate(.4)    /* 彩度40% */
saturate(100%)  /* 効果なし */
saturate(200%)  /* 2倍の彩度 */</pre>

<h2 id="仕様書">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Filters 1.0', '#funcdef-filter-saturate', 'saturate()')}}</td>
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
 <li>{{cssxref("filter-function/hue-rotate", "hue-rotate()")}}​​​​​​​​​​​​​​</li>
 <li>{{cssxref("filter-function/invert", "invert()")}}</li>
 <li>{{cssxref("filter-function/opacity", "opacity()")}}</li>
 <li>{{cssxref("filter-function/sepia", "sepia()")}}</li>
</ul>
