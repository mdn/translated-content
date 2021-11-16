---
title: overflow-inline
slug: Web/CSS/overflow-inline
tags:
  - CSS
  - CSS ボックスモデル
  - CSS Property
  - Reference
  - 'recipe:css-property'
translation_of: Web/CSS/overflow-inline
---
<div>{{CSSRef}}</div>

<p><strong><code>overflow-inline</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> のプロパティで、内容がボックスのインライン方向の先頭および末尾方向の端をはみ出した時に、どのように表示するかを設定します。これは表示なし、スクロールバー付き、内容をはみ出させるの何れかになります。</p>

<div class="note">
<p><code>overflow-inline</code> プロパティは、文書の書字方向に応じて、 {{Cssxref("overflow-y")}} または {{Cssxref("overflow-x")}} に対応します。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush:css no-line-numbers notranslate">/* キーワード値 */
overflow-inline: visible;
overflow-inline: hidden;
overflow-inline: scroll;
overflow-inline: auto;

/* グローバル値 */
overflow-inline: inherit;
overflow-inline: initial;
overflow-inline: unset;
</pre>

<p><code>overflow-inline</code> プロパティは、以下の値の一覧のうち一つのキーワードで指定します。</p>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>visible</code></dt>
 <dd>内容は切り取られず、パディングボックスのインライン方向の先頭と末尾の辺よりも外側に表示される可能性があります。</dd>
 <dt><code>hidden</code></dt>
 <dd>インライン方向にパディングボックスに合わせる必要がある場合は、内容を切り取ります。スクロールバーは表示されません。</dd>
 <dt><code>scroll</code></dt>
 <dd>インライン方向にパディングボックスに合わせる必要がある場合は、内容を切り取ります。ブラウザーは内容が実際に切り取られるかどうかにかかわらず、スクロールバーを表示します。 (これは内容が変化したときにスクロールバーが表示されたり非表示になったりすることを防ぎます。) プリンターははみ出す内容を印刷するかもしれません。</dd>
 <dt><code>auto</code></dt>
 <dd>ユーザーエージェントに依存します。内容がパディングボックス内に収まる場合は <code>visible</code> と同じように表示されますが、新しいブロック整形コンテキストを生成します。内容があふれる場合、デスクトップブラウザーはスクロールバーを表示します。</dd>
</dl>

<h2 id="Formal_definition" name="Formal_definition">公式定義</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax" name="Formal_syntax">形式文法</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Setting_inline_overflow_behavior" name="Setting_inline_overflow_behavior">インライン方向のはみ出し動作の設定</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;ul&gt;
  &lt;li&gt;&lt;code&gt;overflow-inline:hidden&lt;/code&gt; — ボックスの外側のテキストを隠す
    &lt;div id="div1"&gt;
      ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ
    &lt;/div&gt;
  &lt;/li&gt;

  &lt;li&gt;&lt;code&gt;overflow-inline:scroll&lt;/code&gt; — 常にスクロールバーを表示
    &lt;div id="div2"&gt;
      ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ
    &lt;/div&gt;
  &lt;/li&gt;

  &lt;li&gt;&lt;code&gt;overflow-inline:visible&lt;/code&gt; — 必要に応じてテキストをボックスの外に表示
    &lt;div id="div3"&gt;
      ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ
    &lt;/div&gt;
  &lt;/li&gt;

  &lt;li&gt;&lt;code&gt;overflow-inline:auto&lt;/code&gt; — 多くのブラウザーでは &lt;code&gt;scroll&lt;/code&gt; と同じ
    &lt;div id="div4"&gt;
      ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ
    &lt;/div&gt;
  &lt;/li&gt;
&lt;/ul&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css notranslate">#div1, #div2, #div3, #div4 {
  border: 1px solid black;
  width:  250px;
  margin-bottom: 12px;
}

#div1 { overflow-inline: hidden;}
#div2 { overflow-inline: scroll;}
#div3 { overflow-inline: visible;}
#div4 { overflow-inline: auto;}
</pre>

<h4 id="Result" name="Result">結果</h4>

<figure>
<p>{{EmbedLiveSample("Setting_inline_overflow_behavior", "100%", "270")}}</p>
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
   <td>{{SpecName('CSS3 Overflow', '#propdef-overflow-inline', 'overflow-inline')}}</td>
   <td>{{Spec2('CSS3 Overflow')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.overflow-inline")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>関連する CSS プロパティ: {{cssxref("text-overflow")}}, {{cssxref("white-space")}}, {{Cssxref("overflow")}}, {{Cssxref("overflow-block")}}, {{Cssxref("overflow-x")}}, {{Cssxref("overflow-y")}}, {{Cssxref("clip")}}, {{Cssxref("display")}}</li>
 <li><a href="/ja/docs/Web/CSS/CSS_Logical_Properties">CSS 論理プロパティ</a></li>
 <li><a href="/ja/docs/Web/CSS/CSS_Writing_Modes">書字方向</a></li>
</ul>
