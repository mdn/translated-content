---
title: 欄レイアウト
slug: Web/CSS/Layout_cookbook/Column_layouts
tags:
  - CSS
  - Layout
  - Multi-col
  - columns
  - cookbook
  - flexbox
  - grid
translation_of: Web/CSS/Layout_cookbook/Column_layouts
---
<div>{{CSSRef}}</div>

<p class="summary"><span class="seoSummary">多くの場合、いくつかの欄を含むレイアウトを作成する必要があります。 CSS にはこれを行うためのいくつかの方法があります。 グリッド、フレックスボックス、段組みのレイアウトのどれを使用するかは、達成しようとしている内容によって異なります。 このレシピでは、これらのオプションについて説明します。</span></p>

<p><img alt="コンテナ内に2つの欄を持つ3種類のレイアウトスタイル。" src="https://mdn.mozillademos.org/files/16183/cookbook-multiple-columns.png" style="height: 406px; width: 1541px;"></p>

<h2 id="Requirements" name="Requirements">必要条件</h2>

<p>欄（columns）で達成したいと思うかもしれないデザインパターンがいくつかあります。</p>

<ul>
 <li>新聞のような欄（段）に分割されたコンテンツの連続したスレッド。</li>
 <li>すべての高さが等しい、欄（列）として配置された一並びの項目。</li>
 <li>行と列で並べられた複数行の列。</li>
</ul>

<h2 id="The_recipes" name="The_recipes">レシピ</h2>

<p>要件を満たすためには、さまざまなレイアウト方法を選択する必要があります。</p>

<h3 id="A_continuous_thread_of_content_—_multi-column_layout" name="A_continuous_thread_of_content_—_multi-column_layout">コンテンツの連続したスレッド — 段組みレイアウト</h3>

<p>段組みレイアウト（multi-column layout、multicol）を使用して段を作成した場合、テキストは各段を順番に埋める連続したストリームのままです。 段はすべて同じサイズである必要があり、個々の段または個々の段のコンテンツをターゲットにすることはできません。</p>

<p>{{cssxref("column-gap")}} プロパティを使用して段間のギャップを制御したり、{{cssxref("column-rule")}} を使用して段間に線を追加したりできます。</p>

<p>{{EmbedGHLiveSample("css-examples/css-cookbook/columns-multicol.html", '100%', 720)}}</p>

<div class="note">
<p><a href="https://github.com/mdn/css-examples/blob/master/css-cookbook/columns-multicol--download.html">この例をダウンロードする</a></p>
</div>

<p>次の場合に段組みを使用してください。</p>

<ul>
 <li>テキストを新聞のような段に表示したい。</li>
 <li>段に分割したい小さい項目のセットを持っている。</li>
 <li>個々の欄ボックスを装飾のターゲットにする必要がない。</li>
</ul>

<h3 id="A_single_row_of_items_with_equal_heights_—_flexbox" name="A_single_row_of_items_with_equal_heights_—_flexbox">同じ高さの単一行の項目 — フレックスボックス</h3>

<p>フレックスボックス（flexbox）は、{{cssxref("flex-direction")}} を <code>row</code> に設定することでコンテンツを列に分割するために使用できますが、フレックスボックスはフレックスコンテナ内の要素をターゲットにし、それぞれの直接の子を新しい列に配置します。 これは段組みで見たものとは異なる振る舞いです。</p>

<p>フレックス項目間に規則を追加する方法は現在ありません。 また、{{cssxref("column-gap")}} および {{cssxref("row-gap")}} プロパティに対するブラウザーのサポートは制限されています。 したがって、項目間にギャップを作成するには、マージンを使用します。</p>

<p>{{EmbedGHLiveSample("css-examples/css-cookbook/columns-flexbox.html", '100%', 720)}}</p>

<div class="note">
<p><a href="https://github.com/mdn/css-examples/blob/master/css-cookbook/columns-flexbox--download.html">この例をダウンロードする</a></p>
</div>

<p>フレックスボックスを使用して、コンテナの {{cssxref("flex-wrap")}} プロパティを <code>wrap</code> に設定することで、フレックス項目が新しい行に折り返されるレイアウトを作成することもできます。 これらの新しいフレックスラインは、そのラインに沿ってのみスペースを配分します — 以下の例に示すように、新しいラインの項目は上のラインの項目と整列しません。 これがフレックスボックスが一次元として記述されている理由です。 これは、行または列としてレイアウトを制御するために設計されていますが、同時に両方ではありません。</p>

<p>{{EmbedGHLiveSample("css-examples/css-cookbook/columns-flexbox-wrapping.html", '100%', 720)}}</p>

<div class="note">
<p><a href="https://github.com/mdn/css-examples/blob/master/css-cookbook/columns-flexbox-wrapping--download.html">この例をダウンロードする</a></p>
</div>

<p>次の場合にフレックスボックスを使用してください。</p>

<ul>
 <li>単一行または単一列の項目。</li>
 <li>項目をレイアウトした後に交差軸（cross axis）上で整列をしたいとき。</li>
 <li>ラップされた項目がそれらのラインに沿ってだけスペースを共有し、他のラインの項目と並ばないことに満足しているとき。</li>
</ul>

<h3 id="Lining_items_up_in_rows_and_columns_—_grid_layout" name="Lining_items_up_in_rows_and_columns_—_grid_layout">項目を行と列に並べる — グリッドレイアウト</h3>

<p>欲しいものが項目が行と列に並ぶレイアウトであるならば、CSS グリッドレイアウトを選ぶべきです。 グリッドレイアウトは、フレックスボックスがフレックスコンテナの直接の子に作用するのと同様の方法で、グリッドコンテナの直接の子に作用しますが、CSS グリッドでは、項目を行と列に並べることができます — これは2次元として記述されています。</p>

<p>{{EmbedGHLiveSample("css-examples/css-cookbook/columns-grid.html", '100%', 720)}}</p>

<div class="note">
<p><a href="https://github.com/mdn/css-examples/blob/master/css-cookbook/columns-grid--download.html">この例をダウンロードする</a></p>
</div>

<p>次の場合にグリッドを使用してください。</p>

<ul>
 <li>複数行または複数列の項目用。</li>
 <li>ブロック軸とインライン軸の項目を揃えることができるようにする場合。</li>
 <li>項目を行と列に整列させたい場合。</li>
</ul>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<p>さまざまなレイアウト方法が異なるブラウザーサポートを持っています。 使用されているプロパティの基本的なサポートの詳細については、以下の表を参照してください。</p>



<h4 id="column-width" name="column-width">column-width</h4>

<p>{{Compat("css.properties.column-width")}}</p>

<h4 id="column-rule" name="column-rule">column-rule</h4>

<p>{{Compat("css.properties.column-rule")}}</p>

<h4 id="flex" name="flex">flex</h4>

<p>{{Compat("css.properties.flex")}}</p>

<h4 id="flex-wrap" name="flex-wrap">flex-wrap</h4>

<p>{{Compat("css.properties.flex-wrap")}}</p>

<h4 id="grid-template-columns" name="grid-template-columns">grid-template-columns</h4>

<p>{{Compat("css.properties.grid-template-columns")}}</p>

<h2 id="Resources_on_MDN" name="Resources_on_MDN">MDN にある資料</h2>

<ul>
 <li><a href="/ja/docs/Web/CSS/CSS_Columns">段組みレイアウトのガイド</a></li>
 <li><a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout">フレックスボックスのガイド</a></li>
 <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout">CSS グリッドレイアウトのガイド</a></li>
</ul>
