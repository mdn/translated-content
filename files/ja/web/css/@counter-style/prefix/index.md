---
title: prefix
slug: Web/CSS/@counter-style/prefix
tags:
  - '@counter-style'
  - CSS
  - CSS カウンタースタイル
  - CSS 記述子
  - リファレンス
translation_of: Web/CSS/@counter-style/prefix
---
<div>{{CSSRef}}</div>

<p>{{cssxref('@counter-style')}} 規則の <code><strong>prefix</strong></code> 記述子は、マーカーに先立って表示される内容を指定します。指定されていない場合、既定値は <code>""</code> (空文字列) になります。</p>

<p>{{cssinfo}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush: css">/* &lt;symbol&gt; 値 */
prefix: "»";
prefix: "Page ";
prefix: url(bullet.png);
</pre>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>&lt;symbol&gt;</code></dt>
 <dd>マーカーに先立って表示される <code>&lt;symbol&gt;</code> を指定します。 {{cssxref("&lt;string&gt;")}}, {{cssxref("&lt;image&gt;")}}, {{cssxref("&lt;custom-ident&gt;")}} の何れかです。</dd>
</dl>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

<h2 id="Example" name="Example">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;ul class="index"&gt;
  &lt;li&gt;The Boy Who Lived&lt;/li&gt;
  &lt;li&gt;The Vanishing Glass&lt;/li&gt;
  &lt;li&gt;The Letters from No One&lt;/li&gt;
  &lt;li&gt;The Keeper of the Keys&lt;/li&gt;
  &lt;li&gt;Diagon Alley&lt;/li&gt;
&lt;/ul&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">@counter-style chapters {
  system: numeric;
  symbols: "0" "1" "2" "3" "4" "5" "6" "7" "8" "9";
  prefix: 'Chapter ';
}

.index {
  list-style: chapters;
  padding-left: 15ch;
}</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{ EmbedLiveSample('Example') }}</p>

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
   <td>{{SpecName('CSS3 Counter Styles', '#descdef-counter-style-prefix', 'prefix')}}</td>
   <td>{{Spec2('CSS3 Counter Styles')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("css.at-rules.counter-style.prefix")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}</li>
 <li>{{cssxref("symbols", "symbols()")}}、 匿名のカウンタースタイルを作成するために使用される関数形式の記述方法です。</li>
</ul>
