---
title: text-rendering
slug: Web/CSS/text-rendering
tags:
  - CSS
  - SVG
translation_of: Web/CSS/text-rendering
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary">CSS の <strong><code>text-rendering</code></strong> プロパティは、テキストを描画するときの最適化方法に関する情報をレンダリングエンジンに提供します。</span></p>

<p>ブラウザーは速さ、読みやすさ、位置の正確さをトレードオフにします。</p>

<pre class="brush:css no-line-numbers">/* キーワード値 */
text-rendering: auto;
text-rendering: optimizeSpeed;
text-rendering: optimizeLegibility;
text-rendering: geometricPrecision;

/* グローバル値 */
text-rendering: inherit;
text-rendering: initial;
text-rendering: unset;
</pre>

<div class="note">
<p><strong>メモ:</strong> <code>text-rendering</code> プロパティは SVG のプロパティであり、 CSS 標準では定義されていません。しかしながら、 Windows, MacOS, Linux の Gecko や WebKit のブラウザーは、このプロパティを HTML 及び XML コンテンツに適用することができます。</p>
</div>

<p>とても目に見えやすい効果は <code>optimizeLegibility</code> で、一部のフォント (例えば、 Microsoft <em>Calibri</em>, <em>Candara</em>, <em>Constantia</em>, <em>Corbel</em>, または <em>DejaVu</em> フォントファミリ) において 20px より小さい文字に合字 (ff, fi, fl, など) を適用します。</p>

<p>{{cssinfo}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>auto</code></dt>
 <dd>ブラウザーはテキストを描画する際に、速さ、読みやすさ、位置の正確さの最適化について経験的な推測を行います。この値のブラウザーによる解釈の違いについては、ブラウザーの対応をご覧ください。</dd>
 <dt><code>optimizeSpeed</code></dt>
 <dd>ブラウザーは文字を描画する際に、読みやすさや位置の正確さよりも、速さを強調します。カーニングや合字を無効にします。</dd>
 <dt><code>optimizeLegibility</code></dt>
 <dd>ブラウザーは速さや位置の正確さよりも、読みやすさを強調します。カーニングを有効にし、合字は任意です。</dd>
 <dt><code>geometricPrecision</code></dt>
 <dd>
 <p>ブラウザーは速さや読みやすさよりも、位置の正確さを強調します。フォントの一部の側面 — カーニングなど — は、倍率に比例しません。そのため、この値はこれらのフォントを使ったテキストを美しくすることができます。</p>

 <p>SVG では、テキストが拡大または縮小されるとき、ブラウザーはテキストの最終的な寸法 (特定のフォントの大きさと適用される倍率によって決まる) を計算し、プラットフォームのフォントシステムに計算値のフォントを要求します。しかし、大きさ9で倍率140%のフォントを要求すると、フォントの大きさの結果は12.6となり、フォントシステムに存在するものではなくなるので、ブラウザーはフォントの大きさを12に丸めます。結果的に、テキストは段階的な倍率になります。</p>

 <p>しかし、 <code>geometricPrecision</code> は — レンダリングエンジンが完全に対応していれば — なめらかにテキストを拡縮できます。倍率が大きい場合、文字列の描画があまり美しくならないかもしれませんが、寸法は Windows や Linux が対応しているフォントの大きさに切り上げられたり切り捨てられたりせず、期待通りになります。</p>

 <p class="note"><strong>メモ</strong>: WebKit は指定された値を厳密に適用しますが、 Gecko は値を <code>optimizeLegibility</code> と同様に扱います。</p>
 </dd>
</dl>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Automatic_application_of_optimizeLegibility" name="Automatic_application_of_optimizeLegibility">optimizeLegibility の自動的な適用</h3>

<p><code>font-size</code> が <code>20px</code> 未満の場合にブラウザーが自動的に <code>optimizeLegibility</code> を使用する方法を紹介します。</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;p class="small"&gt;LYoWAT - ff fi fl ffl&lt;/p&gt;
&lt;p class="big"&gt;LYoWAT - ff fi fl ffl&lt;/p&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">.small { font: 19.9px "Times New Roman", "Georgia", "Palatino", serif; }
.big   { font: 20px "Times New Roman", "Georgia", "Palatino", serif; }</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{ EmbedLiveSample('Automatic_application_of_optimizeLegibility') }}</p>

<h3 id="optimizeSpeed_vs_optimizeLegibility" name="optimizeSpeed_vs_optimizeLegibility">optimizeSpeed と optimizeLegibility</h3>

<p>この例は、 <code>optimizeSpeed</code> と <code>optimizeLegibility</code> の (このブラウザーでの) 表示方法の違いを紹介します (ブラウザーによって違います)。</p>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;p class="speed"&gt;LYoWAT - ff fi fl ffl&lt;/p&gt;
&lt;p class="legibility"&gt;LYoWAT - ff fi fl ffl&lt;/p&gt;</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css">p { font: 1.5em "Times New Roman", "Georgia", "Palatino", serif }

.speed       { text-rendering: optimizeSpeed; }
.legibility  { text-rendering: optimizeLegibility; }</pre>

<h4 id="Result_2" name="Result_2">結果</h4>

<p>{{ EmbedLiveSample('optimizeSpeed_vs_optimizeLegibility') }}</p>

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
   <td>{{SpecName('SVG2', 'painting.html#TextRenderingProperty', 'text-rendering')}}</td>
   <td>{{Spec2('SVG2')}}</td>
   <td>変更なし</td>
  </tr>
  <tr>
   <td>{{SpecName('SVG1.1', 'painting.html#TextRenderingProperty', 'text-rendering')}}</td>
   <td>{{Spec2('SVG1.1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("css.properties.text-rendering")}}</p>
