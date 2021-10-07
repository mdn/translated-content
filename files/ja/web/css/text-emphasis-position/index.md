---
title: text-emphasis-position
slug: Web/CSS/text-emphasis-position
tags:
  - CSS
  - CSS テキスト装飾
  - CSS プロパティ
  - Reference
translation_of: Web/CSS/text-emphasis-position
---
<div>{{CSSRef}}</div>

<p><a href="/ja/docs/Web/CSS" title="CSS">CSS</a> の <strong><code>text-emphasis-position</code></strong> プロパティは、圏点が描かれる位置を設定します。ルビテキストと同様、圏点のために十分な空間がない場合は、行の高さが広げられます。</p>

<pre class="brush:css no-line-numbers">/* 初期値 */
text-emphasis-position: over right;

/* キーワード値 */
text-emphasis-position: over left;
text-emphasis-position: under right;
text-emphasis-position: under left;

text-emphasis-position: left over;
text-emphasis-position: right under;
text-emphasis-position: left under;

/* グローバル値 */
text-emphasis-position: inherit;
text-emphasis-position: initial;
text-emphasis-position: unset;
</pre>

<p>{{cssinfo}}</p>

<h2 id="Preferred_position" name="Preferred_position">望ましい位置</h2>

<p>圏点の望ましい位置は言語に依存します。例えば日本語では、望ましい位置は <span class="css">over right</span> です。一方中国語では、望ましい位置は <span class="css">under right</span> となります。下記の情報の表は、日本語、モンゴル語、中国語における望ましい圏点の位置を要約するものです。</p>

<table>
 <caption>望ましい圏点とルビの位置</caption>
 <thead>
  <tr>
   <th rowspan="2" scope="col">言語</th>
   <th colspan="2" scope="col">望ましい位置</th>
   <th colspan="2" rowspan="2" scope="col">説明</th>
  </tr>
  <tr>
   <th>横書き</th>
   <th>縦書き</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>日本語</td>
   <td rowspan="2">over</td>
   <td rowspan="2">right</td>
   <td rowspan="2"><img alt="日本語の横書きテキストでは、圏点は強調される各文字の上に表示されます。" src="https://drafts.csswg.org/css-text-decor-3/images/text-emphasis-ja.png" style="height: 28px; width: 225px;" title="日本語のテキストの上に適用された圏点 (分かりやすいよう青で表示)"></td>
   <td rowspan="3"><img alt="日本語の縦書きテキストでは、圏点が強調される各文字の右に表示されます。" src="https://drafts.csswg.org/css-text-decor-3/images/text-emphasis-v.gif" style="height: 89px; width: 34px;" title="日本語のテキストの右に適用された圏点"></td>
  </tr>
  <tr>
   <td>モンゴル語</td>
  </tr>
  <tr>
   <td>中国語</td>
   <td>under</td>
   <td>right</td>
   <td><img alt="中国語簡体字の横書きテキストでは、圏点は強調される各文字の下に表示されます。" src="https://drafts.csswg.org/css-text-decor-3/images/text-emphasis-zh.gif" style="height: 28px; width: 133px;" title="中国語のテキストの下に適用された圏点 (分かりやすいよう青で表示)"></td>
  </tr>
 </tbody>
</table>

<div class="note">
<p><strong>メモ</strong>: {{cssxref("text-emphasis")}} 一括指定プロパティを使用して、 <code>text-emphasis-position</code> を設定することはできず、また初期化されることもありません。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code><dfn>over</dfn></code></dt>
 <dd>横書きモードでテキストの上に圏点を描きます。</dd>
 <dt><code><dfn>under</dfn></code></dt>
 <dd>横書きモードでテキストの下に圏点を描きます。</dd>
 <dt><code><dfn>right</dfn></code></dt>
 <dd>縦書きモードでテキストの右に圏点を描きます。</dd>
 <dt><code><dfn>left</dfn></code></dt>
 <dd>縦書きモードでテキストの左に圏点を描きます。</dd>
</dl>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<p>編集者によっては、ルビと競合する場合に圏点を隠すことを好みます。 HTML では、これは次のスタイル規則で実現できます。</p>

<pre class="brush: css">ruby {
  text-emphasis: none;
}
</pre>

<p>編集者によっては、圏点と競合する場合にルビを隠すことを好みます。 HTML では、これは次のパターンで実現できます。</p>

<pre class="brush: css">em {
  text-emphasis: dot; /* &lt;em&gt; 要素に text-emphasis を設定 */
}

em rt {
  display: none; /* &lt;em&gt; 要素内のルビを隠す */
}</pre>

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
   <td>{{SpecName('CSS3 Text Decoration', '#text-emphasis-position-property', 'text-emphasis')}}</td>
   <td>{{Spec2('CSS3 Text Decoration')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("css.properties.text-emphasis-position")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>個別指定プロパティ {{cssxref("text-emphasis-style")}}, {{cssxref("text-emphasis-color")}} および対応する一括指定プロパティ {{cssxref("text-emphasis")}}</li>
</ul>
