---
title: '-webkit-line-clamp'
slug: Web/CSS/-webkit-line-clamp
tags:
  - '-webkit-line-clamp'
  - CSS
  - CSS Property
  - Non-standard
  - recipe:css-property
browser-compat: css.properties.-webkit-line-clamp
translation_of: Web/CSS/-webkit-line-clamp
---
<div>{{CSSRef}}</div>

<p><strong><code>-webkit-line-clamp</code></strong> は CSS のプロパティで、{{Glossary("block container", "ブロックコンテナー")}}のコンテンツを指定した行数に制限することができます。</p>

<p>{{cssxref("display")}} プロパティに <code>-webkit-box</code> もしくは <code>-webkit-inline-box</code> が設定されており、かつ {{cssxref("box-orient")}} プロパティに <code>vertical</code> が設定されている組み合わせのときのみ使用できます。</p>

<p>ほとんどの場合、 {{cssxref("overflow")}} に <code>hidden</code> を設定できます。そうしなければコンテンツはクリップされませんが、省略記号は指定した行数の後に表示されます。</p>

<p>アンカー要素に適用したとき、切り捨てがテキストの途中で行われる場合があるかもしれませんが、必ずしも末尾で切り捨てが行われるとは限りません。</p>

<div class="notecard note">
<p><strong>メモ</strong>: このプロパティは元々 WebKit ブラウザでは実装されていますが、いくつかの問題があります。レガシーサポートのために標準化されました。 <a href="https://www.w3.org/TR/css-overflow-3/#propdef--webkit-line-clamp">CSS Overflow Module Level 3</a> の仕様では、このプロパティを置き換えて問題を回避することを目的として {{cssxref("line-clamp")}} プロパティが定義されています。</p>
</div>

<h2 id="Syntax">構文</h2>

<pre class="brush:css">/* キーワード値 */
-webkit-line-clamp: none;

/* &lt;integer&gt; 値 */
-webkit-line-clamp: 3;
-webkit-line-clamp: 10;

/* グローバル値 */
-webkit-line-clamp: inherit;
-webkit-line-clamp: initial;
-webkit-line-clamp: unset;
</pre>

<dl>
 <dt><code>none</code></dt>
 <dd>コンテンツの行数を制限しません。</dd>
 <dt>{{cssxref("integer")}}</dt>
 <dd>コンテンツを制限する行数を指定します。 0 より大きい値でなければなりません。</dd>
</dl>

<h2 id="Formal_definition">公式定義</h2>

<p>{{CSSInfo}}</p>

<h2 id="Formal_syntax">形式文法</h2>

{{CSSSyntax}}

<h2 id="Examples">例</h2>

<h3 id="Truncating_a_paragraph">段落の切り捨て</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;p&gt;
  In this example the &lt;code&gt;-webkit-line-clamp&lt;/code&gt; property is set to &lt;code&gt;3&lt;/code&gt;, which means the text is clamped after three lines.
  An ellipsis will be shown at the point where the text is clamped.
&lt;/p&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">p {
  width: 300px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}</pre>

<h4 id="Result">結果</h4>

<p>{{EmbedLiveSample("Truncating_a_paragraph", "100%", "100")}}</p>

<h2 id="Specifications">仕様書</h2>

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
   <td>{{SpecName("CSS3 Overflow", "#propdef--webkit-line-clamp", "-webkit-line-clamp")}}</td>
   <td>{{Spec2("CSS3 Overflow")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
 <li><a href="https://css-tricks.com/line-clampin/">Line Clampin’ (Truncating Multiple Line Text)</a></li>
 <li>{{cssxref("line-clamp")}}</li>
</ul>
