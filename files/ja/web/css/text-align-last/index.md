---
title: text-align-last
slug: Web/CSS/text-align-last
tags:
  - CSS
  - CSS Property
  - CSS テキスト
  - Experimental
  - Reference
translation_of: Web/CSS/text-align-last
---
<div>{{CSSRef}}</div>

<p>CSS の <strong><code>text-align-last</code></strong> プロパティは、ブロックの最後の行、あるいは強制的な改行の直前の行をどのように配置するかを設定します。</p>

<div>{{EmbedInteractiveExample("pages/css/text-align-last.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush:css no-line-numbers">/* キーワード値 */
text-align-last: auto;
text-align-last: start;
text-align-last: end;
text-align-last: left;
text-align-last: right;
text-align-last: center;
text-align-last: justify;

/* グローバル値 */
text-align-last: inherit;
text-align-last: initial;
text-align-last: unset;
</pre>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>auto</code></dt>
 <dd>{{cssxref("text-align")}} の値と同じ方向に配置されます。ただし {{cssxref("text-align")}} が <code>justify</code> である場合は、<code>text-align-last</code> に <code>start</code> を設定した場合と同じ効果になります。</dd>
 <dt><code>start</code></dt>
 <dd>文章の記述方向が左から右であれば <code>left</code>、右から左であれば <code>right</code> と同じです。</dd>
 <dt><code>end</code></dt>
 <dd>文章の記述方向が左から右であれば <code>right</code>、右から左であれば <code>left</code> と同じです。</dd>
 <dt><code>left</code></dt>
 <dd>インライン要素は行ボックスの左端に配置されます。</dd>
 <dt><code>right</code></dt>
 <dd>インライン要素は行ボックスの右端に配置されます。</dd>
 <dt><code>center</code></dt>
 <dd>インラインコンテンツは行ボックスの中央に配置されます。</dd>
 <dt><code>justify</code></dt>
 <dd>テキストは行末揃えになります。テキストは段落の左端から右端までに配置されるでしょう。</dd>
</dl>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

<h2 id="Example" name="Example">例</h2>

<div class="hidden">
<pre class="brush: html">&lt;p&gt;Integer elementum massa at nulla placerat varius. Suspendisse in libero risus, in interdum massa. Vestibulum ac leo vitae metus faucibus gravida ac in neque. Nullam est eros, suscipit sed dictum quis, accumsan a ligula.&lt;/p&gt;
</pre>
</div>

<pre class="brush: css">p {
  font-size: 1.4em;
  text-align: justify;
  text-align-last: center;
}</pre>

<p>{{EmbedLiveSample('Example','560')}}</p>

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
   <td>{{SpecName('CSS3 Text', '#text-align-last-property', 'text-align-last')}}</td>
   <td>{{Spec2('CSS3 Text')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<div>{{cssinfo}}</div>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.text-align-last")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{cssxref("text-align")}}</li>
</ul>
