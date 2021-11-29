---
title: repeat()
slug: Web/CSS/repeat()
tags:
  - CSS
  - CSS Function
  - CSS Grid
  - Function
  - Layout
  - Reference
  - Web
translation_of: Web/CSS/repeat()
---
<div>{{cssref}}</div>

<p><span class="seoSummary"><code><strong>repeat()</strong></code> は <a href="/ja/docs/Web/CSS">CSS</a> の関数で、トラックリスト内での繰り返し部分を表し、列や行の繰り返しをよりコンパクトに書くことができます。</span></p>

<p>この関数は CSS グリッドのプロパティである {{cssxref("grid-template-columns")}} と {{cssxref("grid-template-rows")}} の中で使うことができます。</p>

<pre class="brush: css no-line-numbers notranslate">/* &lt;track-repeat&gt; 値 */
repeat(4, 1fr)
repeat(4, [col-start] 250px [col-end])
repeat(4, [col-start] 60% [col-end])
repeat(4, [col-start] 1fr [col-end])
repeat(4, [col-start] min-content [col-end])
repeat(4, [col-start] max-content [col-end])
repeat(4, [col-start] auto [col-end])
repeat(4, [col-start] minmax(100px, 1fr) [col-end])
repeat(4, [col-start] fit-content(200px) [col-end])
repeat(4, 10px [col-start] 30% [col-middle] auto [col-end])
repeat(4, [col-start] min-content [col-middle] max-content [col-end])

/* &lt;auto-repeat&gt; 値 */
repeat(auto-fill, 250px)
repeat(auto-fit, 250px)
repeat(auto-fill, [col-start] 250px [col-end])
repeat(auto-fit, [col-start] 250px [col-end])
repeat(auto-fill, [col-start] minmax(100px, 1fr) [col-end])
repeat(auto-fill, 10px [col-start] 30% [col-middle] 400px [col-end])

/* &lt;fixed-repeat&gt; 値 */
repeat(4, 250px)
repeat(4, [col-start] 250px [col-end])
repeat(4, [col-start] 60% [col-end])
repeat(4, [col-start] minmax(100px, 1fr) [col-end])
repeat(4, [col-start] fit-content(200px) [col-end])
repeat(4, 10px [col-start] 30% [col-middle] 400px [col-end])
</pre>

<h2 id="Syntax" name="Syntax">構文</h2>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt>{{cssxref("&lt;length&gt;")}}</dt>
 <dd>正の整数で表される長さ。</dd>
 <dt>{{cssxref("&lt;percentage&gt;")}}</dt>
 <dd>負の数ではないパーセント値で、列グリッドトラック内のグリッドコンテナーのインライン寸法と、行グリッドトラック内のグリッドコンテナーのブロック寸法との相対的値を表します。。グリッドコンテナーの寸法がトラックの寸法に依存する場合、 <code>&lt;percentage&gt;</code> は <code>auto</code> として扱う必要があります。ユーザーエージェントは、トラックの本質的な寸法の寄与をグリッドコンテナーの寸法に調整し、トラックの最終的な寸法を、パーセント値を尊重する結果となる最小の量だけ増加させることができます。</dd>
 <dt>{{cssxref("&lt;flex&gt;")}}</dt>
 <dd>トラックのフレックス要素を明示している <code>fr</code> 単位の負ではない寸法。それぞれのフレックスサイズのトラックは、それらのフレックス要素に比例して残りのスペースを配分する。</dd>
 <dt><code>max-content</code></dt>
 <dd>グリッドトラックにあるグリッドアイテムの最も大きい max-content を表す。</dd>
 <dt><code>min-content</code></dt>
 <dd>グリッドトラックにあるグリッドアイテムの最も大きい min-content を表す。</dd>
 <dt><code>auto</code></dt>
 <dd>最大値としては、 <code>max-content</code> と同じです。最小値としては、グリッドトラックを占めるグリッドアイテムの最大最小サイズ ({{cssxref("min-width")}}/{{cssxref("min-height")}} で指定されたもの) を表します。</dd>
 <dt><code>auto-fill</code></dt>
 <dd>グリッドコンテナーが関連する軸に、定義されたまたは最大の幅を持っている場合、繰り返しの数は、グリッドコンテナーをオーバーフローさせない最大の正の数になる。各トラックは定義されているならば、最大トラック幅を調整する関数 (<code>grid-template-rows</code> または <code>grid-template-columns</code> を定義するために使用されるそれぞれ独立した値) として扱われる。それ以外の場合は、最小トラック幅を調整する関数として扱い、グリッドギャップを考慮に入れる。何回繰り返してもオーバーフローしてしまう場合は、繰り返しを 1 とする。そうでなければ、グリッドコンテナーが関連する軸に、定義された最小の寸法をもっている場合、繰り返しの数は最小の要件を満たす可能性がある最小の正の整数になる。その他の場合は、指定されたトラックリストは <code>1</code> 回のみ繰り返す。</dd>
 <dt><code>auto-fit</code></dt>
 <dd>
 <p><code>auto-fill</code> と同様に動作しますが、グリッドアイテムを配置した後、空の繰り返しトラックが折りたたまれる点が異なります。空のトラックとは、フロー内のグリッドアイテムが配置されていない、またはそれをまたいで配置されているものがないトラックのことです。 (これは、すべてのトラックが空の場合、すべてのトラックが折りたたまれる結果になる可能性があります。)</p>

 <p>折り畳まれたトラックは、 <code>0px</code>　の固定トラックサイジング機能を1つ持っているものとして扱われ、その左右の溝も折り畳まれます。</p>

 <p>自動反復トラックの数を見つけるために、ユーザーエージェントは、ゼロによる除算を避けるために、トラックの寸法をユーザーエージェントが指定した値 (例えば <code>1px</code>) に切り下げます。</p>
 </dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Specifying_grid_columns_using_repeat" name="Specifying_grid_columns_using_repeat">repeat() を使用したグリッド列の指</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;div id="container"&gt;
  &lt;div&gt;
    This item is 50 pixels wide.
  &lt;/div&gt;
  &lt;div&gt;
    Item with flexible width.
  &lt;/div&gt;
  &lt;div&gt;
    This item is 50 pixels wide.
  &lt;/div&gt;
  &lt;div&gt;
    Item with flexible width.
  &lt;/div&gt;
  &lt;div&gt;
    Inflexible item of 100 pixels width.
  &lt;/div&gt;
&lt;/div&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css; highlight[3] notranslate">#container {
  display: grid;
  grid-template-columns: repeat(2, 50px 1fr) 100px;
  grid-gap: 5px;
  box-sizing: border-box;
  height: 200px;
  width: 100%;
  background-color: #8cffa0;
  padding: 10px;
}

#container &gt; div {
  background-color: #8ca0ff;
  padding: 5px;
}
</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{EmbedLiveSample("Specifying_grid_columns_using_repeat", "100%", 200)}}</p>

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
   <td>{{SpecName("CSS Grid", "#funcdef-repeat", "repeat()")}}</td>
   <td>{{Spec2("CSS Grid")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.grid-template-columns.repeat")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>関連する CSS プロパティ: {{cssxref("grid-template")}}, {{cssxref("grid-template-rows")}}, {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-areas")}}, {{cssxref("grid-auto-columns")}}, {{cssxref("grid-auto-rows")}}, {{cssxref("grid-auto-flow")}}</li>
 <li>グリッドレイアウトガイド: <em><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid">CSS グリッドでの線ベースの配置</a></em></li>
 <li>グリッドレイアウトガイド: <em><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas#Grid_definition_shorthands">グリッドテンプレート領域 - グリッド定義の一括指定</a></em></li>
</ul>
