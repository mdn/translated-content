---
title: bleed
slug: orphaned/Web/CSS/@page/bleed
tags:
  - '@page'
  - CSS
  - CSS ページ化メディア
  - CSS 記述子
  - Experimental
  - Reference
  - bleed
  - ウェブ
translation_of: Web/CSS/@page/bleed
original_slug: Web/CSS/@page/bleed
---
<div>{{CSSRef}}{{SeeCompatTable}}</div>

<p><a href="/ja/docs/Web/CSS">CSS</a> の <strong><code>bleed</code></strong> <a href="/ja/docs/Web/CSS/At-rule">@-規則</a>記述子は、 {{cssxref("@page")}} @-規則で使用し、ページボックスの外にあるページの裁ち落とし領域の大きさを指定します。このプロパティは、 {{cssxref("@page/marks", "marks")}} プロパティを使用して裁ち落とし記号を有効にしている場合のみ効果があります。</p>

<p>{{cssinfo}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush:css">/* キーワード値 */
bleed: auto;

/* &lt;length&gt; 値 */
bleed: 8pt;
bleed: 1cm;
</pre>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>auto</code></dt>
 <dd>{{cssxref("@page/marks", "marks")}} が <code>crop</code> の場合、 <code>6pt</code> に計算します。それ以外の場合はゼロに計算します。</dd>
 <dt><code>{{cssxref("&lt;length&gt;")}}</code></dt>
 <dd>ページボックスの外に裁ち落とし領域を、各方向に、どれだけ広げるかを指定します。値は負の数にすることができますが、実装に依存する制限があるかもしれません。</dd>
</dl>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

<h2 id="Example" name="Example">例</h2>

<pre class="brush: css">@page {
  bleed: 1cm;
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
   <td>{{SpecName("CSS3 Paged Media", "#bleed", "bleed")}}</td>
   <td>{{Spec2("CSS3 Paged Media")}}</td>
   <td>初回定義。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("css.at-rules.page.bleed")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{Cssxref("@page/marks", "marks")}}</li>
 <li>{{Cssxref("@page/size", "size")}}</li>
</ul>
