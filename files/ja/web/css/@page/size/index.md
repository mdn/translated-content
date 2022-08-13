---
title: size
slug: Web/CSS/@page/size
tags:
  - '@page'
  - At-rule descriptor
  - CSS
  - CSS Descriptor
  - Experimental
  - NeedsBrowserCompatibility
  - Reference
  - Web
translation_of: Web/CSS/@page/size
---
<div>{{CSSRef}}{{SeeCompatTable}}</div>

<p><a href="/ja/docs/Web/CSS">CSS</a> の <strong><code>size</code></strong> <a href="/ja/docs/Web/CSS/At-rule">アット規則</a>記述子は、 {{cssxref("@page")}} アット規則で使用し、ページを表現するために使用するボックスの寸法と向きを定義します。多くの場合、この寸法は印刷ページの適用可能な対象の寸法に対応します。</p>

<p>寸法は「拡縮可能な」キーワード (この場合、ページの有効な大きさ全体を使用します) 又は絶対的な長さのどちらかで定義します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush:css notranslate">/* 拡縮可能な寸法のキーワード値 */
size: auto;
size: portrait;
size: landscape;

/* &lt;length&gt; 値 */
/* 1 値: 高さ = 幅 */
size: 6in;

/* 2 値: 幅の後に高さ*/
size: 4in 6in;

/* 絶対寸法のキーワード値 */
size: A4;
size: B5;
size: JIS-B4;
size: letter;

/* 寸法と方向の混合 */
size: A4 portrait;
</pre>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>auto</code></dt>
 <dd>ユーザーエージェントがページの寸法を決定します。多くの場合、対象となる用紙の寸法と向きが使用されます。</dd>
 <dt><code>landscape</code></dt>
 <dd>ページのコンテンツは横向きモード (ボックスの長辺が水平) で表示されます。</dd>
 <dt><code>portrait</code></dt>
 <dd>ページのコンテンツは縦向きモード (ボックスの長辺が垂直) で表示されます。これが既定の向きです。</dd>
 <dt><code>&lt;length&gt;</code></dt>
 <dd>何らかの長さの値 ({{cssxref("&lt;length&gt;")}} を参照)。最初の値はページボックスの幅に対応し、二番目の値は高さに対応します。一つしか値が提供されない場合は、幅と高さの両方に使用されます。</dd>
 <dt><code>&lt;page-size&gt;</code></dt>
 <dd>
 <dl>
  <dt>A5</dt>
  <dd>これは標準の ISO の寸法 148mm x 210mm に一致します。</dd>
  <dt>A4</dt>
  <dd>これは標準の ISO の寸法 210mm x 297mm に一致します。 (個人の印刷では最もよく使われる寸法です。)</dd>
  <dt>A3</dt>
  <dd>これは標準の ISO の寸法 297mm x 420mm に一致します。</dd>
  <dt>B5</dt>
  <dd>これは標準の ISO の寸法 176mm x 250mm に一致します。</dd>
  <dt>B4</dt>
  <dd>これは標準の ISO の寸法 250mm x 353mm に一致します。</dd>
  <dt>JIS-B5</dt>
  <dd>これは JIS 標準の寸法 182mm x 257mm に対応します。</dd>
  <dt>JIS-B4</dt>
  <dd>これは JIS 標準の寸法 257mm x 364mm に対応します。</dd>
  <dt>letter</dt>
  <dd>このキーワードは北米のレター用紙の寸法、すなわち 8.5in x 11in と同等です。</dd>
  <dt>legal</dt>
  <dd>このキーワードは北米のリーガル用紙の寸法、すなわち 8.5in x 14in と同等です。</dd>
  <dt>ledger</dt>
  <dd>このキーワードは北米の ledger 用紙の寸法、すなわち 11in x 17in と同等です。</dd>
 </dl>
 </dd>
</dl>

<h2 id="Formal_definition" name="Formal_definition">公式定義</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax" name="Formal_syntax">形式文法</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="寸法と向きの指定">寸法と向きの指定</h3>

<pre class="brush: css notranslate">@page {
  size: 4in 6in landscape;
}
</pre>

<h3 id="media_規則内部の入れ子">@media 規則内部の入れ子</h3>

<pre class="brush: css notranslate">@media print {
  @page {
    size: 50mm 150mm;
  }
}
</pre>

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
   <td>{{SpecName('CSS3 Paged Media', '#page-size-prop', 'size')}}</td>
   <td>{{Spec2('CSS3 Paged Media')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.at-rules.page.size")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{cssxref("@page/bleed", "bleed")}}</li>
 <li>{{cssxref("@page/marks", "marks")}}</li>
</ul>
