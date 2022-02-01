---
title: overflow-x
slug: Web/CSS/overflow-x
tags:
  - CSS
  - CSS Box Model
  - CSS Property
  - CSS プロパティ
  - CSS ボックスモデル
  - Reference
  - overflow
  - 'recipe:css-property'
translation_of: Web/CSS/overflow-x
---
<div>{{CSSRef}}</div>

<p><strong><code>overflow-x</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> のプロパティで、ブロックレベル要素の内容が左右の境界からあふれた場合、どのように表示するのかを設定します。表示しないか、スクロールバーを表示するか、あふれさせるかを設定できます。</p>

<div>{{EmbedInteractiveExample("pages/css/overflow-x.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush:css no-line-numbers notranslate">/* キーワード値 */
overflow-x: visible;
overflow-x: hidden;
overflow-x: clip;
overflow-x: scroll;
overflow-x: auto;

/* グローバル値 */
overflow-x: inherit;
overflow-x: initial;
overflow-x: unset;
</pre>

<p><code>overflow-x</code> プロパティは、以下の値の一覧のうち一つのキーワードで指定します。</p>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>visible</code></dt>
 <dd>内容は切り取られず、パディングボックスの左右の辺よりも外側に表示される可能性があります。 {{cssxref("overflow-y")}} が <code>hidden</code>, <code>scroll</code>, <code>auto</code> のいずれかであり、このプロパティが <code>visible</code> である場合は、暗黙に <code>auto</code> に計算します。</dd>
 <dt><code>hidden</code></dt>
 <dd>水平方向にパディングボックスに合わせる必要がある場合は、内容を切り取ります。スクロールバーは表示されません。</dd>
 <dt><code>clip</code> {{experimental_inline}}</dt>
 <dd><code>hidden</code> のように、内容が要素のパディングボックスで切り取られます。 <code>clip</code> と <code>hidden</code> の違いは、 <code>clip</code> キーワードはプログラムによるスクロールも含め、すべてのスクロールを禁止することです。ボックスはスクロールコンテナーにならず、新しい整形コンテキストを開始しません。新しい整形コンテキストを始めるのであれば、 {{cssxref("display", "display: flow-root", "#flow-root")}} を使用して実現することができます。</dd>
 <dt><code>scroll</code></dt>
 <dd>水平方向にパディングボックスに合わせる必要がある場合は、内容を切り取ります。ブラウザーは内容が実際に切り取られるかどうかにかかわらず、スクロールバーを表示します。 (これは内容が変化したときにスクロールバーが表示されたり非表示になったりすることを防ぎます。) プリンターははみ出す内容を印刷するかもしれません。</dd>
 <dt><code>auto</code></dt>
 <dd>ユーザーエージェントに依存します。内容がパディングボックス内に収まる場合は <code>visible</code> と同じように表示されますが、新しいブロック整形文脈を生成します。内容があふれる場合、デスクトップブラウザーはスクロールバーを表示します。</dd>
</dl>

<h2 id="Formal_syntax" name="Formal_syntax">形式文法</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;ul&gt;
  &lt;li&gt;&lt;code&gt;overflow-x:hidden&lt;/code&gt; — ボックスの外側のテキストを隠す
    &lt;div id="div1"&gt;
      ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ
    &lt;/div&gt;
  &lt;/li&gt;

  &lt;li&gt;&lt;code&gt;overflow-x:scroll&lt;/code&gt; — 常にスクロールバーを表示
    &lt;div id="div2"&gt;
      ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ
    &lt;/div&gt;
  &lt;/li&gt;

  &lt;li&gt;&lt;code&gt;overflow-x:visible&lt;/code&gt; — 必要に応じてテキストをボックスの外に表示
    &lt;div id="div3"&gt;
      ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ
    &lt;/div&gt;
  &lt;/li&gt;

  &lt;li&gt;&lt;code&gt;overflow-x:auto&lt;/code&gt; — 多くのブラウザーでは &lt;code&gt;scroll&lt;/code&gt; と同じ
    &lt;div id="div4"&gt;
      ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ
    &lt;/div&gt;
  &lt;/li&gt;
&lt;/ul&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css notranslate">#div1, #div2, #div3, #div4 {
  border: 1px solid black;
  width:  250px;
  margin-bottom: 12px;
}

#div1 { overflow-x: hidden;}
#div2 { overflow-x: scroll;}
#div3 { overflow-x: visible;}
#div4 { overflow-x: auto;}
</pre>

<h3 id="Result" name="Result">結果</h3>

<figure>
<p>{{EmbedLiveSample("Examples", "100%", "270")}}</p>
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
   <td>{{SpecName('CSS3 Overflow', '#propdef-overflow-x', 'overflow-x')}}</td>
   <td>{{Spec2('CSS3 Overflow')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.overflow-x")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>関連する CSS プロパティ: {{cssxref("text-overflow")}}, {{cssxref("white-space")}}, {{Cssxref("overflow")}}, {{Cssxref("overflow-y")}}, {{Cssxref("clip")}}, {{Cssxref("display")}}</li>
</ul>
