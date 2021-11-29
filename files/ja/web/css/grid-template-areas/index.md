---
title: grid-template-areas
slug: Web/CSS/grid-template-areas
tags:
  - CSS
  - CSS Grid
  - CSS Property
  - Reference
translation_of: Web/CSS/grid-template-areas
---
<p><strong><code>grid-template-areas</code></strong> CSS プロパティは、名前付きの {{glossary("grid areas", "グリッド領域")}} を指定します。</p>

<div>{{EmbedInteractiveExample("pages/css/grid-template-areas.html")}}</div>

<p class="hidden">この対話型サンプルのソースファイルは GitHub リポジトリに格納されています。対話型サンプルプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<p>これらの領域は特定のグリッドアイテムに関連付けられていませんが、グリッド配置プロパティである {{cssxref("grid-row-start")}}, {{cssxref("grid-row-end")}}, {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}} およびそれらの短縮プロパティ {{cssxref("grid-row")}}, {{cssxref("grid-column")}}, {{cssxref("grid-area")}} から参照できます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush: css no-line-numbers">/* キーワード値 */
grid-template-areas: none;

/* &lt;string&gt; 値 */
grid-template-areas: "a b";
grid-template-areas: "a b b"
                     "a c d";

/* グローバル値 */
grid-template-areas: inherit;
grid-template-areas: initial;
grid-template-areas: unset;
</pre>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>none</code></dt>
 <dd>グリッドコンテナーは名前付きのグリッド領域を定義しません。</dd>
 <dt><code>{{cssxref("&lt;string&gt;")}}+</code></dt>
 <dd>リストのすべての文字列ごとに行が生成され、文字列内の各セルごとに列が生成されます。行内および列間の複数の名前付きセルトークンは、対応するグリッドセルにまたがる単一の名前付きグリッド領域を生成します。これらのセルが四角形を形成しない限り、宣言は無効です。</dd>

<h3 id="Formal_syntax" name="Formal_syntax">正式な構文</h3>

{{csssyntax}}

<h2 id="Example" name="Example">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;section id="page"&gt;
  &lt;header&gt;Header&lt;/header&gt;
  &lt;nav&gt;Navigation&lt;/nav&gt;
  &lt;main&gt;Main area&lt;/main&gt;
  &lt;footer&gt;Footer&lt;/footer&gt;
&lt;/section&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush:css; highlight[5-7]">#page {
  display: grid;
  width: 100%;
  height: 250px;
  grid-template-areas: "head head"
                       "nav  main"
                       "nav  foot";
  grid-template-rows: 50px 1fr 30px;
  grid-template-columns: 150px 1fr;
}

#page &gt; header {
  grid-area: head;
  background-color: #8ca0ff;
}

#page &gt; nav {
  grid-area: nav;
  background-color: #ffa08c;
}

#page &gt; main {
  grid-area: main;
  background-color: #ffff64;
}

#page &gt; footer {
  grid-area: foot;
  background-color: #8cffa0;
}
</pre>

<h3 id="Result" name="Result">描画結果</h3>

<p><em>{{EmbedLiveSample("Example", "100%", "250px")}}</em></p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("CSS3 Grid", "#propdef-grid-template-areas", "grid-template-areas")}}</td>
   <td>{{Spec2("CSS3 Grid")}}</td>
   <td>初期定義。</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの実装状況</h2>

<p>{{Compat("css.properties.grid-template-areas")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>関連する CSS プロパティ: {{cssxref("grid-template-rows")}}, {{cssxref("grid-template-columns")}}, {{cssxref("grid-template")}}</li>
 <li>グリッドレイアウトガイド: <em><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas">Grid template areas</a></em></li>
 <li>動画チュートリアル: <em><a href="http://gridbyexample.com/video/grid-template-areas/">Grid Template Areas</a></em></li>
</ul>

<section id="Quick_links">
<ol>
 <li><a href="/ja/docs/Web/CSS"><strong>CSS</strong></a></li>
 <li><a href="/ja/docs/Web/CSS/Reference"><strong>CSS リファレンス</strong></a></li>
 <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout">CSS グリッドレイアウト</a></li>
 <li data-default-state="open"><a href="#"><strong>ガイド</strong></a>
  <ol>
   <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout">グリッドレイアウトの基本概念</a></li>
   <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout">他のレイアウト方法との関連</a></li>
   <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid">行ベースの配置</a></li>
   <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas">グリッドテンプレート領域</a></li>
   <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines">名前付きグリッド行を使用したレイアウト</a></li>
   <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout">グリッドレイアウトの自動配置</a></li>
   <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout">グリッドレイアウトのボックス配置</a></li>
   <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes">グリッド、論理値、書字方向</a></li>
   <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility">CSS グリッドレイアウトとアクセシビリティ</a></li>
   <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement">CSS グリッドレイアウトと進歩的な拡張</a></li>
   <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout">グリッドを使ったよくあるレイアウトの実現</a></li>
  </ol>
 </li>
 <li data-default-state="open"><a href="#"><strong>プロパティ</strong></a>
  <ol>
   <li><a href="/ja/docs/Web/CSS/grid">grid</a></li>
   <li><a href="/ja/docs/Web/CSS/grid-area">grid-area</a></li>
   <li><a href="/ja/docs/Web/CSS/grid-auto-columns">grid-auto-columns</a></li>
   <li><a href="/ja/docs/Web/CSS/grid-auto-flow">grid-auto-flow</a></li>
   <li><a href="/ja/docs/Web/CSS/grid-auto-rows">grid-auto-rows</a></li>
   <li><a href="/ja/docs/Web/CSS/grid-column">grid-column</a></li>
   <li><a href="/ja/docs/Web/CSS/grid-column-end">grid-column-end</a></li>
   <li><a href="/ja/docs/Web/CSS/grid-column-gap">grid-column-gap</a></li>
   <li><a href="/ja/docs/Web/CSS/grid-column-start">grid-column-start</a></li>
   <li><a href="/ja/docs/Web/CSS/grid-gap">grid-gap</a></li>
   <li><a href="/ja/docs/Web/CSS/grid-row">grid-row</a></li>
   <li><a href="/ja/docs/Web/CSS/grid-row-end">grid-row-end</a></li>
   <li><a href="/ja/docs/Web/CSS/grid-row-gap">grid-row-gap</a></li>
   <li><a href="/ja/docs/Web/CSS/grid-row-start">grid-row-start</a></li>
   <li><a href="/ja/docs/Web/CSS/grid-template">grid-template</a></li>
   <li><a href="/ja/docs/Web/CSS/grid-template-areas">grid-template-areas</a></li>
   <li><a href="/ja/docs/Web/CSS/grid-template-columns">grid-template-columns</a></li>
   <li><a href="/ja/docs/Web/CSS/grid-template-rows">grid-template-rows</a></li>
  </ol>
 </li>
 <li data-default-state="open"><a href="#"><strong>用語集</strong></a>
  <ol>
   <li><a href="/ja/docs/Glossary/Grid_lines">グリッド線</a></li>
   <li><a href="/ja/docs/Glossary/Grid_tracks">グリッドトラック</a></li>
   <li><a href="/ja/docs/Glossary/Grid_cell">グリッドセル</a></li>
   <li><a href="/ja/docs/Glossary/Grid_areas">グリッド領域</a></li>
   <li><a href="/ja/docs/Glossary/Gutters">溝</a></li>
   <li><a href="/ja/docs/Glossary/Grid_rows">グリッド行</a></li>
   <li><a href="/ja/docs/Glossary/Grid_column">グリッド列</a></li>
  </ol>
 </li>
</ol>
</section></dl>
