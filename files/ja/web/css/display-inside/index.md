---
title: <display-inside>
slug: Web/CSS/display-inside
tags:
  - CSS
  - CSS 表示
  - Reference
  - display
  - display-inside
translation_of: Web/CSS/display-inside
---
<div>{{CSSRef}}</div>

<p class="summary">以下のキーワードは、要素の内部の {{CSSxRef("display")}} 種別を指定し、これは要素 (置換要素ではないものとする) の内容物をレイアウトする整形コンテキストの種類を定義します。これらのキーワードは <code>display</code> プロパティの値として使用され、単一のキーワードとしては伝統的な目的に、または Level 3 仕様書では {{CSSxRef("&lt;display-outside&gt;")}} のキーワードと共に使用されます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<p>有効な <code>&lt;display-inside&gt;</code> の値は以下の通りです。</p>

<dl>
 <dt><code>flow</code> {{Experimental_Inline}}</dt>
 <dd>要素は、フローレイアウト (ブロックおよびインラインのレイアウト) を使用して、内容物をレイアウトします。
 <p>外部表示種別が <code>inline</code> または <code>run-in</code> であり、またブロックまたはインラインの整形コンテキストに関係する場合は、インラインボックスを生成します。そうでない場合は、ブロックコンテナーボックスを生成します。</p>

 <p>ほかのプロパティ ({{cssxref("position")}}, {{cssxref("float")}}, {{cssxref("overflow")}} など) の値や、要素自体がブロックまたはインラインの整形コンテキストに関係するかによって、新たな<a href="/ja/docs/Web/Guide/CSS/Block_formatting_context">ブロック整形コンテキスト</a> (BFC) を生成する、または内容物が親の整形コンテキストに吸収されます。</p>
 </dd>
 <dt><code>flow-root</code></dt>
 <dd>要素は、新たな<a href="/ja/docs/Web/Guide/CSS/Block_formatting_context">ブロック整形コンテキスト</a>を確立するブロック要素ボックスを生成し、整形ルートがある場所を定義します。</dd>
 <dt><code>table</code></dt>
 <dd>HTML の {{HTMLElement("table")}} 要素と同じように動作します。これは、ブロックレベルボックスを定義します。</dd>
 <dt><code>flex</code></dt>
 <dd>要素は、ブロック要素のように動作しつつ、そのコンテンツを<a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout">フレックスボックスモデル</a>に従ってレイアウトします。</dd>
 <dt><code>grid</code></dt>
 <dd>要素は、ブロック要素のように動作しつつ、そのコンテンツを<a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout">グリッドモデル</a>に従ってレイアウトします。</dd>
 <dt><code>ruby</code> {{Experimental_Inline}}</dt>
 <dd>要素は、インライン要素のように動作しつつ、そのコンテンツをルビ (ruby) モデルに従ってレイアウトします。HTML の {{HTMLElement("ruby")}} 要素のように動作します。</dd>
</dl>

<div class="note">
<p><strong>メモ</strong>: 二つの値の構文に対応しているブラウザーは、 <code>display: flex</code> や <code>display: grid</code> などの内部表示種別のみが指定されていると、外部表示種別を <code>block</code> に設定します。これで期待通りに動作します。例えば、ある要素を <code>display: grid</code> に指定した場合、そのボックスはブロックレベルボックスのグリッドコンテナーとして生成されることが期待されるでしょう。</p>
</div>

<h2 id="Example" name="Example">例</h2>

<p>この例では、親ボックスは <code>display: flow-root</code> となり、新しいブロック整形コンテキストを確立して浮動アイテムを含みます。</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div class="box"&gt;
  &lt;div class="float"&gt;I am a floated box!&lt;/div&gt;
  &lt;p&gt;I am content inside the container.&lt;/p&gt;
&lt;/div&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">.box {
    background-color: rgb(224, 206, 247);
    border: 5px solid rebeccapurple;
    display: flow-root;
}

.float {
    float: left;
    width: 200px;
    height: 150px;
    background-color: white;
    border:1px solid black;
    padding: 10px;
}</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample("Example", "100%", 180)}}</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<h3 id="Support_of_multiple_keyword_values" name="Support_of_multiple_keyword_values">複数のキーワードの対応</h3>

<p>{{Compat("css.properties.display.multi-keyword_values", 10)}}</p>

<ul>
 <li>Chromium のバグ: <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=804600">https://bugs.chromium.org/p/chromium/issues/detail?id=804600</a></li>
</ul>

<h3 id="Support_of_flow-root" name="Support_of_flow-root">flow-root の対応</h3>

<p>{{Compat("css.properties.display.flow-root", 10)}}</p>

<h3 id="Support_of_table" name="Support_of_table">table の対応</h3>

<p>{{Compat("css.properties.display.table_values", 10)}}</p>

<h3 id="grid_の対応">grid の対応</h3>

<p>{{Compat("css.properties.display.grid", 10)}}</p>

<h3 id="Support_of_flex" name="Support_of_flex">flex の対応</h3>

<p>{{Compat("css.properties.display.flex", 10)}}</p>

<h3 id="Support_of_ruby" name="Support_of_ruby">ruby の対応</h3>

<p>{{Compat("css.properties.display.ruby_values", 10)}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{CSSxRef("display")}}
  <ul>
   <li>{{CSSxRef("&lt;display-outside&gt;")}}</li>
   <li>{{CSSxRef("&lt;display-listitem&gt;")}}</li>
   <li>{{CSSxRef("&lt;display-internal&gt;")}}</li>
   <li>{{CSSxRef("&lt;display-box&gt;")}}</li>
   <li>{{CSSxRef("&lt;display-legacy&gt;")}}</li>
  </ul>
 </li>
 <li><a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">フレックスボックスの基本概念</a></li>
 <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout">グリッドレイアウトの基本概念</a></li>
</ul>
