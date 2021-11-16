---
title: overflow-block
slug: Web/CSS/overflow-block
tags:
  - CSS
  - CSS ボックスモデル
  - CSS Property
  - Reference
  - 'recipe:css-property'
translation_of: Web/CSS/overflow-block
---
<p>{{CSSRef}}</p>

<p><strong><code>overflow-block</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> プロパティで、内容がブロックの先頭およびブロックの末尾の端をあふれた時にどのように表示するかを設定します。これは表示なし、スクロールバー付き、内容をはみ出させる、のいずれかになります。</p>

<div class="note">
<p><code>overflow-block</code> プロパティは、文書の書字方向に応じて、 {{Cssxref("overflow-y")}} または {{Cssxref("overflow-x")}} に対応します。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush:css no-line-numbers notranslate">/* キーワード値 */
overflow-block: visible;
overflow-block: hidden;
overflow-block: scroll;
overflow-block: auto;

/* グローバル値 */
overflow-block: inherit;
overflow-block: initial;
overflow-block: unset;
</pre>

<p><code>overflow-block</code> プロパティは、以下の値の一覧のうち一つのキーワードで指定します。</p>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>visible</code></dt>
 <dd>内容は切り取られず、パディングボックスのブロックの先頭とブロックの末尾の辺よりも外側に表示される可能性があります。</dd>
 <dt><code>hidden</code></dt>
 <dd>ブロック方向にパディングボックスに合わせる必要がある場合は、内容を切り取ります。スクロールバーは表示されません。</dd>
 <dt><code>scroll</code></dt>
 <dd>ブロック方向にパディングボックスに合わせる必要がある場合は、内容を切り取ります。ブラウザーは内容が実際に切り取られるかどうかにかかわらず、スクロールバーを表示します。 (これは内容が変化したときにスクロールバーが表示されたり非表示になったりすることを防ぎます。) プリンターははみ出す内容を印刷するかもしれません。</dd>
 <dt><code>auto</code></dt>
 <dd>ユーザーエージェントに依存します。内容がパディングボックス内に収まる場合は <code>visible</code> と同じように表示されますが、新しいブロック整形コンテキストを生成します。内容があふれる場合、デスクトップブラウザーはスクロールバーを表示します。</dd>
</dl>

<h2 id="Formal_definition" name="Formal_definition">公式定義</h2>

<p>{{CSSInfo}}</p>

<h2 id="Formal_syntax" name="Formal_syntax">形式文法</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;ul&gt;
  &lt;li&gt;&lt;code&gt;overflow-block:hidden&lt;/code&gt; — ボックスの外側のテキストを隠す
  &lt;div id="div1"&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    &lt;/div&gt;
  &lt;/li&gt;

  &lt;li&gt;&lt;code&gt;overflow-block:scroll&lt;/code&gt; — 常にスクロールバーを表示
  &lt;div id="div2"&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    &lt;/div&gt;
  &lt;/li&gt;

  &lt;li&gt;&lt;code&gt;overflow-block:visible&lt;/code&gt; — 必要に応じてテキストをボックスの外に表示
  &lt;div id="div3"&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    &lt;/div&gt;
  &lt;/li&gt;

  &lt;li&gt;&lt;code&gt;overflow-block:auto&lt;/code&gt; — 多くのブラウザーでは &lt;code&gt;scroll&lt;/code&gt; と同じ
  &lt;div id="div4"&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    &lt;/div&gt;
  &lt;/li&gt;
&lt;/ul&gt;

</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css notranslate">#div1,
#div2,
#div3,
#div4 {
  border: 1px solid black;
  width:  250px;
  height: 100px;
}

#div1 { overflow-block: hidden; margin-bottom: 120px;}
#div2 { overflow-block: scroll; margin-bottom: 120px;}
#div3 { overflow-block: visible; margin-bottom: 120px;}
#div4 { overflow-block: auto; margin-bottom: 120px;}
</pre>

<h3 id="Result" name="Result">結果</h3>

<figure>
<p>{{EmbedLiveSample("Examples", "100%", "780")}}</p>
</figure>

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
   <td>{{ SpecName('CSS3 Overflow', '#propdef-overflow-block', 'overflow-block') }}</td>
   <td>{{ Spec2('CSS3 Overflow') }}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<div>{{cssinfo}}</div>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.overflow-block")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>関連する CSS プロパティ: {{cssxref("text-overflow")}}, {{cssxref("white-space")}}, {{Cssxref("overflow")}}, {{Cssxref("overflow-inline")}}, {{Cssxref("overflow-x")}}, {{Cssxref("overflow-y")}}, {{Cssxref("clip")}}, {{Cssxref("display")}}</li>
 <li><a href="/ja/docs/Web/CSS/CSS_Logical_Properties">CSS 論理プロパティ</a></li>
 <li><a href="/ja/docs/Web/CSS/CSS_Writing_Modes">書字方向</a></li>
</ul>
