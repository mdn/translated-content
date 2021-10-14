---
title: user-select
slug: Web/CSS/user-select
tags:
  - CSS
  - CSS Property
  - Property
  - Reference
  - Selection
  - 'recipe:css-property'
  - user-select
translation_of: Web/CSS/user-select
---
<div>{{CSSRef}}</div>

<p><strong><code>user-select</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> のプロパティで、ユーザーが文章を範囲選択できるかどうかを制御します。これは、テキストボックスを除いて、{{Glossary("Chrome", "クローム")}}として読み込まれたコンテンツには何の影響も与えません。</p>

<pre class="brush:css notranslate">/* キーワード値 */
user-select: none;
user-select: auto;
user-select: text;
user-select: contain;
user-select: all;

/* グローバル値 */
user-select: inherit;
user-select: initial;
user-select: unset;

/* Mozilla 特有の値 */
-moz-user-select: none;
-moz-user-select: text;
-moz-user-select: all;

/* WebKit 特有の値 */
-webkit-user-select: none;
-webkit-user-select: text;
-webkit-user-select: all; /* Safari では動作しません。 "none" または
                             "text" を使ってください。さもないと、
                             &lt;html&gt; コンテナーで入力可能になってしまいます。 */

/* Microsoft 特有の値 */
-ms-user-select: none;
-ms-user-select: text;
-ms-user-select: element;
</pre>

<div class="blockIndicator note">
<p><strong>注</strong>: <code>user-select</code> は継承されるプロパティではありませんが、多くの場合、初期値の <code>auto</code> は継承されているように見えます。 WebKit/Chromium ベースのブラウザーは、仕様書に書かれている動作に従わず、このプロパティを継承するように実装して<em>おり</em>、いくつかの問題を発生させています。現在までに、 Chromium は<a class="external external-icon" href="https://chromium.googlesource.com/chromium/src/+/b01af0b296ecb855aac95c4ed335d188e6eac2de" rel="noopener">この問題を修正し</a>、最終的な動作が仕様書に合うようにすることを選択しています。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<dl>
 <dt><code>none</code></dt>
 <dd>対象要素とその子孫要素の文章は範囲選択できません。 {{domxref("Selection")}} オブジェクトはこれらの要素も含むことができることに注意してください。</dd>
 <dt><code>auto</code></dt>
 <dd>
 <p><code>auto</code> の使用値は下記のように決められます。</p>

 <ul>
  <li><code>::before</code> と <code>::after</code> の擬似要素では、使用値は <code>none</code> になります。</li>
  <li>編集可能な要素の場合、使用値は <code>contain</code> になります。</li>
  <li>上記以外で、親要素の <code>user-select</code> の使用値が <code>all</code> の場合、対象要素の使用値も <code>all</code> になります。</li>
  <li>上記以外で、親要素の <code>user-select</code> の使用値が <code>none</code> の場合、対象要素の使用値も <code>none</code> になります。</li>
  <li>上記以外の場合、使用値は <code>text</code> になります。</li>
 </ul>
 </dd>
 <dt><code>text</code></dt>
 <dd>ユーザーはテキストを範囲選択できます。</dd>
 <dt><code>all</code></dt>
 <dd>この要素の内容は不可分的に選択されます。選択範囲が要素の一部を含んだ場合、選択範囲はすべての子孫要素を含む要素全体が含まれなければなりません。子孫要素でダブルクリックや右クリックを行うと、この値が付けられている最も上位の先祖要素が範囲選択されます。</dd>
 <dt><code>contain</code></dt>
 <dd>要素の内部から選択を始めることができます。しかし、選択範囲は要素の境界内のみに限定されます。</dd>
 <dd><code>element</code>{{non-standard_inline}} (IE 特有のエイリアス)</dd>
 <dd><code>contain</code> と同じです。 Internet Explorer だけが対応しています。</dd>
</dl>

<div class="note">
<p><strong>注:</strong> CSS UI 4 では、 <a href="https://github.com/w3c/csswg-drafts/commit/3f1d9db96fad8d9fc787d3ed66e2d5ad8cfadd05"><code>user-select: element</code> が <code>contain</code> に名称が変わります。</a></p>
</div>

<h2 id="公式定義">公式定義</h2>

<p>{{CSSInfo}}</p>

<h2 id="Formal_syntax" name="Formal_syntax">形式文法</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;p&gt;このテキストを選択できるはずです。&lt;/p&gt;
&lt;p class="unselectable"&gt;ちょっと、このテキストの選択はできませんよ！&lt;/p&gt;
&lt;p class="all"&gt;一度クリックすると、このテキスト全体を選択します。&lt;/p&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css notranslate">.unselectable {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.all {
  -moz-user-select: all;
  -webkit-user-select: all;
  -ms-user-select: all;
  user-select: all;
}
</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample("Examples")}}</p>

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
   <td>{{SpecName('CSS4 UI', '#propdef-user-select', 'user-select')}}</td>
   <td>{{Spec2('CSS4 UI')}}</td>
   <td>初回定義。 <code>-webkit-user-select</code> は <code>user-select</code> の非推奨のエイリアスであることも定義した。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("css.properties.user-select")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{Cssxref("::selection")}} 擬似要素</li>
 <li>JavaScript の {{domxref("Selection")}} オブジェクト</li>
</ul>
