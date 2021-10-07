---
title: text-decoration-line
slug: Web/CSS/text-decoration-line
tags:
  - CSS
  - CSS テキスト装飾
  - CSS プロパティ
  - Reference
translation_of: Web/CSS/text-decoration-line
---
<div>{{CSSRef}}</div>

<p><a href="/ja/docs/Web/CSS">CSS</a> の <strong><code>text-decoration-line</code></strong> プロパティは、下線や上線など、要素内の文字列に使われる装飾の種類を設定します。</p>

<div>{{EmbedInteractiveExample("pages/css/text-decoration-line.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<p>複数の line-decoration に関するプロパティを一度に設定するときは、代わりに一括指定の {{cssxref("text-decoration")}} プロパティを使用したほうが便利かもしれません。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush:css no-line-numbers">/* 単一のキーワード */
text-decoration-line: none;
text-decoration-line: underline;
text-decoration-line: overline;
text-decoration-line: line-through;
text-decoration-line: blink;

/* 複数のキーワード */
text-decoration-line: underline overline;               /* 2つの装飾線 */
text-decoration-line: overline underline line-through;  /* 複数の装飾線 */

/* グローバル値 */
text-decoration-line: inherit;
text-decoration-line: initial;
text-decoration-line: unset;
</pre>

<p><code>text-decoration-line</code> プロパティは <code>none</code> または以下のリストにある<strong>1つ以上の</strong>空白で区切られた値を指定します。</p>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>none</code></dt>
 <dd>テキストの装飾を行いません。</dd>
 <dt><code>underline</code></dt>
 <dd>テキストの各行に下線を引きます。</dd>
 <dt><code>overline</code></dt>
 <dd>テキストの各行の上線を引きます。</dd>
 <dt><code>line-through</code></dt>
 <dd>テキストの各行の中央を貫く線を引きます。</dd>
 <dt><code>blink</code> {{deprecated_inline}}</dt>
 <dd>テキストが点滅します (表示と非表示を交互に繰り返します)。準拠するユーザーエージェントはテキストを点滅させないかもしれません。この値は<strong>非推奨</strong>であり、 <a href="/ja/docs/Web/CSS/animation">CSS アニメーション</a>に取って代わりました。</dd>
</dl>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: html">&lt;p class="wavy"&gt;Here's some text with wavy red underline!&lt;/p&gt;
&lt;p class="both"&gt;This text has lines both above and below it.&lt;/p&gt;</pre>

<pre class="brush: css">.wavy {
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: red;
}

.both {
  text-decoration-line: underline overline;
}</pre>

<p>{{ EmbedLiveSample('Examples', '', '', '') }}</p>

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
   <td>{{SpecName('CSS3 Text Decoration', '#text-decoration-line', 'text-decoration-line')}}</td>
   <td>{{Spec2('CSS3 Text Decoration')}}</td>
   <td>初回定義。 {{cssxref("text-decoration")}} プロパティが複数の関連するプロパティを定義する一括指定になりました。</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("css.properties.text-decoration-line")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>複数の行内装飾プロパティを一度に設定するときは、代わりに一括指定の {{cssxref("text-decoration")}} プロパティを使った方が便利かもしれません。</li>
</ul>
