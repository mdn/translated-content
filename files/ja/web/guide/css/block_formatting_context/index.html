---
title: ブロック整形コンテキスト
slug: Web/Guide/CSS/Block_formatting_context
tags:
  - CSS
  - Guide
  - Reference
  - Web
  - ウェブ
  - ガイド
translation_of: Web/Guide/CSS/Block_formatting_context
---
<div>{{ CSSRef }}</div>

<p><ruby><strong>ブロック整形コンテキスト</strong><rp> (</rp><rt>block formatting context</rt><rp>) </rp></ruby>は、ウェブページにおける CSS の視覚的なレンダリングの一部です。ブロックボックスのレイアウトが行われ、浮動が他の要素と相互作用する領域です。</p>

<p>ブロック整形コンテキストは、以下のうちの少なくとも一つから生成されます。</p>

<ul>
 <li>文書のルート要素 (<code>&lt;html&gt;</code>)</li>
 <li>浮動要素 ({{ cssxref("float") }} が <code>none</code> 以外である要素)</li>
 <li>絶対位置指定の要素 ({{ cssxref("position") }} が <code>absolute</code> または <code>fixed</code> である要素)</li>
 <li>インラインブロック ({{ cssxref("display") }}<code>: inline-block</code> である要素)</li>
 <li>表のセル ({{ cssxref("display") }}<code>: table-cell</code> を持つ要素。これは HTML の表のセルの既定値です)</li>
 <li>表のキャプション ({{ cssxref("display") }}<code>: table-caption</code> を持つ要素。HTMLの、表のキャプションの既定値です)</li>
 <li>{{ cssxref("display") }}<code>: table</code>, <code>table-row</code>, <code>table-row-group</code>, <code>table-header-group</code>, <code>table-footer-group</code> (つまりそれぞれ HTML の表、表の行、表の本体、表のヘッダー、表のフッターの既定値), <code>inline-table</code> のついた要素によって暗黙的に生成された無名の表のセル。</li>
 <li>{{ cssxref("overflow") }} の値が <code>visible</code> 以外であるブロック要素</li>
 <li>{{ cssxref("display") }}<code>: <a href="https://drafts.csswg.org/css-display/#valdef-display-flow-root">flow-root</a></code></li>
 <li>{{ cssxref("contain") }}<code>: layout</code>, <code>content</code>, <code>paint</code> の付いた要素</li>
 <li>フレックスアイテム ({{ cssxref("display") }}<code>: flex</code> または <code>inline-flex</code> である要素の直接の子要素)</li>
 <li>グリッドアイテム ({{ cssxref("display") }}<code>: grid</code> または <code>inline-grid</code> である要素の直接の子要素)</li>
 <li>段組みコンテナー ({{ cssxref("column-count") }} または {{ cssxref("column-width") }} が <code>auto</code> ではない要素、 <code>column-count: 1</code> の要素も含む)</li>
 <li>{{ cssxref("column-span") }}<code>: all</code> は、 <code>column-span: all</code> の要素が段組みコンテナーに含まれていなくても、常に新たな整形コンテキストを生成します (<a href="https://github.com/w3c/csswg-drafts/commit/a8634b96900279916bd6c505fda88dda71d8ec51">仕様変更</a>, <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=709362">Chrome bug</a>)。</li>
</ul>

<p>ブロック整形コンテキストは、それを生成する要素の内側にあるすべてのものを含みます。</p>

<p>ブロック整形コンテキストは、浮動要素の配置設定 ({{ cssxref("float") }} を参照) と解除 ({{ cssxref("clear") }}を参照) にとって重要です。浮動要素の配置設定と解除の規則は、同一のブロック整形コンテキスト内にあるものにだけ適用されます。浮動要素は他のブロック整形コンテキストの内容のレイアウトには影響せず、 clear は同じブロック整形コンテキスト内の以前の浮動要素のみを解除します。<a href="/ja/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing">マージンの相殺</a>も、同じブロック整形コンテキストに所属するブロック同士でしか発生しません。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Make_float_content_and_alongside_content_the_same_height" name="Make_float_content_and_alongside_content_the_same_height">浮動コンテンツとその横のコンテンツの高さを同じにする</h3>

<div id="example1">
<p>いくつかの例を見て、新しいブロック整形コンテキスト (<abbr title="Block Formatting Context">BFC</abbr>) を生成することによる効果を確認してみましょう。</p>

<p>以下の例では、 <code>&lt;div&gt;</code> に <code>border</code> が適用されている中に浮動要素があります。その <code>&lt;div&gt;</code> の内容は、浮動要素の横にあります。浮動要素の内容がその横のコンテンツよりも高いので、 <code>&lt;div&gt;</code> の境界は浮動要素を突き抜けてしまいます。<a href="/ja/docs/Web/CSS/CSS_Flow_Layout/In_Flow_and_Out_of_Flow">フロー内とフローの外の要素のガイド</a>で説明している通り、浮動要素はフローから出るので、 <code>&lt;div&gt;</code> の <code>background</code> および <code>border</code> はコンテンツのみを含みますが、浮動要素は含みません。</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;div class="box"&gt;
    &lt;div class="float"&gt;I am a floated box!&lt;/div&gt;
    &lt;p&gt;I am content inside the container.&lt;/p&gt;
&lt;/div&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">.box {
    background-color: rgb(224, 206, 247);
    border: 5px solid rebeccapurple;
}
.float {
    float: left;
    width: 200px;
    height: 150px;
    background-color: white;
    border:1px solid black;
    padding: 10px;
}     </pre>

<p>{{EmbedLiveSample("example1", 200, 200)}}</p>
</div>

<div id="With_overflow">
<h3 id="Using_overflow_auto" name="Using_overflow_auto"><code>overflow: auto;</code> の使用</h3>

<p>新しいブロック整形コンテキスト (<abbr title="Block Formatting Context">BFC</abbr>) を生成すると、浮動要素を含むようになります。以前からよくある方法は、 <code>overflow: auto</code> を設定するか、初期値である <code>overflow: visible</code> 以外の値を設定するものです。</p>

<h4 id="CSS_2">CSS</h4>

<div class="hidden">
<pre class="brush: html">&lt;div class="box"&gt;
    &lt;div class="float"&gt;I am a floated box!&lt;/div&gt;
    &lt;p&gt;I am content inside the container.&lt;/p&gt;
&lt;/div&gt;</pre>
</div>

<pre class="brush: css">.box {
    background-color: rgb(224, 206, 247);
    border: 5px solid rebeccapurple;
    overflow: auto;
}
.float {
    float: left;
    width: 200px;
    height: 150px;
    background-color: white;
    border:1px solid black;
    padding: 10px;
}     </pre>

<p>{{EmbedLiveSample("With_overflow", 200, 200)}}</p>
</div>

<p><code>overflow: auto</code> を設定することで浮動要素を含む新しい <abbr title="Block Formatting Context">BFC</abbr> を生成しました。 <code>&lt;div&gt;</code> はレイアウトの中のミニレイアウトになりました。すべての子要素はその中に含まれます。</p>

<p><code>overflow</code> を使用して新しい <abbr title="Block Formatting Context">BFC</abbr> を生成することの問題は、 <code>overflow</code> プロパティがブラウザーにあふれた内容をどのように扱いたいかを伝えるためのものであることです。このプロパティを純粋に使用して <abbr title="Block Formatting Context">BFC</abbr> を作成すると、不要なスクロールバーやクリップされた影が表示される場合があります。また、この目的で <code>overflow</code> を使用した理由が明らかではない可能性があるため、将来の開発者にとっては読みにくくなる可能性があります。 <code>overflow</code> を使用する場合、コードに説明するためのコメントをすることをお勧めします。</p>

<h3 id="Using_display_flow-root" name="Using_display_flow-root"><code>display: flow-root</code> の使用</h3>

<div id="flowroot">
<p>A newer value of <code>display</code> lets us create a new <abbr title="Block Formatting Context">BFC</abbr> without any other potentially problematic side-effects. Using <code>display: flow-root</code> on the containing block creates a new <abbr title="Block Formatting Context">BFC</abbr> .</p>

<h4 id="CSS_3">CSS</h4>

<div class="hidden">
<pre class="brush: html">&lt;div class="box"&gt;
    &lt;div class="float"&gt;I am a floated box!&lt;/div&gt;
    &lt;p&gt;I am content inside the container.&lt;/p&gt;
&lt;/div&gt;</pre>
</div>

<pre class="brush: css">.box {
    background-color: rgb(224, 206, 247);
    border: 5px solid rebeccapurple;
    display: flow-root
}
.float {
    float: left;
    width: 200px;
    height: 150px;
    background-color: white;
    border:1px solid black;
    padding: 10px;
}     </pre>

<p>{{EmbedLiveSample("flowroot", 200, 200)}}</p>
</div>

<p>With <code>display: flow-root;</code> on the <code>&lt;div&gt;</code>, everything inside that container participates in the block formatting context of that container, and floats will not poke out of the bottom of the element.</p>

<p>The value name of <code>flow-root</code> makes sense when you understand you are creating something that acts like the <code>root</code> element (<code>&lt;html&gt;</code> element in browser) in terms of how it creates a new context for the flow layout inside it.</p>

<div class="blockIndicator note">
<p><strong>Note:</strong> <code>display: flow-root;</code> <a href="https://caniuse.com/#search=flow-root">is not supported</a> by Safari.</p>
</div>

<h3 id="margin_collapsing" name="margin_collapsing">マージンの相殺</h3>

<p>Creating a new BFC to avoid the <a href="/ja/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing">margin collapsing</a> between two neighbor div:</p>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;div class="blue"&gt;&lt;/div&gt;
&lt;div class="red-outer"&gt;
  &lt;div class="red-inner"&gt;red inner&lt;/div&gt;
&lt;/div&gt;
</pre>

<h4 id="CSS_4">CSS</h4>

<pre class="brush: css">.blue, .red-inner {
  height: 50px;
  margin: 10px 0;
}

.blue {
  background: blue;
}

.red-outer {
  overflow: hidden;
  background: red;
}
</pre>

<p>{{EmbedLiveSample("Margin_collapsing", 120, 120)}}</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<ul>
 <li><a class="external" href="http://www.w3.org/TR/CSS21/visuren.html#block-formatting">CSS 2.1</a></li>
 <li><a class="external" href="https://drafts.csswg.org/css-display/#block-formatting-context">CSS Display Level 3</a></li>
</ul>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{ cssxref("float") }}, {{ cssxref("clear") }}</li>
 <li>{{css_key_concepts}}</li>
</ul>
