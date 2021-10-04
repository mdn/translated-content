---
title: word-break
slug: Web/CSS/word-break
tags:
  - CSS
  - CSS テキスト
  - CSS プロパティ
  - Reference
  - 日本語処理
translation_of: Web/CSS/word-break
---
<div>{{CSSRef}}</div>

<p><strong><code>word-break</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> のプロパティで、改行しなければテキストがコンテンツボックスからあふれる場合に、ブラウザーが改行を挿入するかどうかを指定します。</p>

<div>{{EmbedInteractiveExample("pages/css/word-break.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush:css no-line-numbers">/* キーワード値 */
word-break: normal;
word-break: break-all;
word-break: keep-all;
word-break: break-word; /* 非推奨 */

/* グローバル値 */
word-break: inherit;
word-break: initial;
word-break: unset;
</pre>

<p><code>word-break</code> プロパティは、下記のリストの中から 1 つを選んで指定します。</p>

<h3 class="brush:css" id="Values" name="Values">値</h3>

<dl>
 <dt><code>normal</code></dt>
 <dd>既定の改行規則を使用します。</dd>
 <dt><code>break-all</code></dt>
 <dd>CJK (中国語、台湾語、日本語、韓国語) 以外のテキストにおいて、単語中などでの文字の改行に関する禁則処理を解除し、どの文字の間でも改行するようにします。
 <div class="hidden">翻訳メモ:<br>
 英語版: 「Chinese/Japanese/Korean」 (3つ)<br>
 日本語: 「中国語、台湾語、日本語、韓国語」 (4つ)<br>
 という翻訳が以前から続いているので、それに従うことにしました。</div>
 </dd>
 <dt><code>keep-all</code></dt>
 <dd>CJK テキストの改行を許可しません。 CJK 以外のテキストについては <code>normal</code> と同じ挙動となります。</dd>
 <dt><code>break-word</code> {{Deprecated_Inline}}</dt>
 <dd>{{cssxref("overflow-wrap")}} プロパティの値とは関係なく、 <code>word-break: normal</code> や <code>overflow-wrap: anywhere</code> と同じ効果になります。</dd>
</dl>

<div class="note">
<p><strong>メモ:</strong> <code>word-break: break-word</code> および <code>overflow-wrap: break-word</code> ({{cssxref("overflow-wrap")}} を参照) とは対照的に、 <code>word-break: break-all</code> はテキストがコンテナーからちょうどあふれたところで (単語全体を次の行に送れば途中で改行を防ぐことができる場合であっても) 位置で改行を生成します。</p>
</div>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;1. &lt;code&gt;word-break: normal&lt;/code&gt;&lt;/p&gt;
&lt;p class="normal narrow"&gt;This is a long and
 Honorificabilitudinitatibus califragilisticexpialidocious Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
 グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉&lt;/p&gt;

&lt;p&gt;2. &lt;code&gt;word-break: break-all&lt;/code&gt;&lt;/p&gt;
&lt;p class="breakAll narrow"&gt;This is a long and
 Honorificabilitudinitatibus califragilisticexpialidocious Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
 グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉&lt;/p&gt;

&lt;p&gt;3. &lt;code&gt;word-break: keep-all&lt;/code&gt;&lt;/p&gt;
&lt;p class="keepAll narrow"&gt;This is a long and
 Honorificabilitudinitatibus califragilisticexpialidocious Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
 グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉&lt;/p&gt;

&lt;p&gt;4. &lt;code&gt;word-break: break-word&lt;/code&gt;&lt;/p&gt;
&lt;p class="breakWord narrow"&gt;This is a long and
  Honorificabilitudinitatibus califragilisticexpialidocious Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
 グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉&lt;/p&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">.narrow {
  padding: 10px;
  border: 1px solid;
  width: 500px;
  margin: 0 auto;
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 1px;
}

.normal {
  word-break: normal;
}

.breakAll {
  word-break: break-all;
}

.keepAll {
  word-break: keep-all;
}

.breakWord {
  word-break: break-word;
}
</pre>

<p>{{EmbedLiveSample('Examples', '100%', 600)}}</p>

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
   <td>{{SpecName('CSS3 Text', '#word-break-property', 'word-break')}}</td>
   <td>{{Spec2('CSS3 Text')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<div>{{cssinfo}}</div>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.word-break")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{cssxref("overflow-wrap")}}</li>
</ul>
