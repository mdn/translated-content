---
title: Subgrid
slug: Web/CSS/CSS_Grid_Layout/Subgrid
tags:
  - CSS
  - CSS Display
  - CSS Grid
  - Guide
  - subgrid
translation_of: Web/CSS/CSS_Grid_Layout/Subgrid
---
<p>{{CSSRef}}</p>

<p>CSS Grid Layout の Level 2 は、{{cssxref("grid-template-columns")}} および {{cssxref("grid-template-rows")}} に <code>subgrid</code> 値を含みます。このガイドでは、サブグリッドでできること、いくつかの使用例、この機能で解決されるデザインパターンを詳述します。</p>

<div class="blockIndicator warning">
<p><strong>重要</strong>: この機能は Firefox 71 で使用可能になりますが、今のところ、これがサブグリッドを実装する唯一のブラウザーです。</p>
</div>

<h2 id="Introduction_to_subgrid" name="Introduction_to_subgrid">サブグリッドの導入</h2>

<p>グリッドコンテナーに <code>display: grid</code> を追加する場合、その直下の子だけがグリッドアイテムになり、作成したグリッド上に置くことができます。これらグリッドアイテムの子要素は通常フローで表示されます。</p>

<p>グリッドアイテムをグリッドコンテナーにすることにより、グリッドを「入れ子」にできます。しかし、これらのグリッドは互いの親グリッドに依存し、親グリッドのサイズ変更に追従しません。これでは、入れ子のグリッドアイテムをメイングリッドで整列させることが難しくなります。</p>

<p><code>grid-template-columns</code> および <code>grid-template-rows</code> の両方またはどちらかに <code>subgrid</code> 値を設定すると、新しいトラックリストを作成するのではなく、入れ子のグリッドが親要素上で定義されたトラックを利用します。</p>

<p>例えば、<code>grid-template-columns: subgrid</code> を使用し、入れ子のグリッドが親のトラック 3 列にまたがる場合、入れ子のグリッドは、親グリッドのサイズと同じトラック 3 列分になります。その列の間隔は継承されますが、異なる {{cssxref("gap")}} 値で上書きすることもできます。ライン名は親からサブグリッドへ渡されますが、サブグリッドが独自のライン名を定義することもできます。</p>

<h2 id="Subgrid_for_columns" name="Subgrid_for_columns">列のサブグリッド</h2>

<p>以下の例では、幅 <code>1fr</code> の 9 列のトラックで高さが最低 100px の 4 行のグリッドレイアウトを定義しています。</p>

<p>このグリッドの 2 から 7 番の列ライン、2 から 4 番の行ラインに <code>.item</code> を置き、これをグリッドアイテムからグリッドコンテナーにします。これをサブグリッドである列トラックに与え、通常の行を定義します。アイテムの幅が 5 列のトラックにまたがるので、サブグリッドも 5 列のトラックを持ちます。次に、このグリッド上に <code>.subitem</code> を置きます。</p>

<p>この例の行はサブグリッドではないため、通常の入れ子のグリッドとして振る舞います。親グリッド領域は、この入れ子のグリッドが十分入る大きさに拡張されます。</p>

<p>{{EmbedGHLiveSample("css-examples/grid/subgrid/columns.html", '100%', 1200)}}</p>

<p>サブグリッド内のライン番号は再び 1 番から始まるので注意してください。サブグリッド内の列ライン 1 番は、サブグリッドの最初のラインです。サブグリッド化された要素は親グリッドのライン番号を継承しません。これは、メイングリッド上の異なる位置に置かれるコンポーネントを安全に配置できることを意味し、このコンポーネント上のライン番号が常に同じであることが分かります。</p>

<h2 id="Subgrid_for_rows" name="Subgrid_for_rows">行のサブグリッド</h2>

<p>次の例は、上記と同じ設定で、<code>grid-template-rows</code> の値に <code>subgrid</code> を使用し、明示的に列トラックを定義しています。このため、列トラックが通常の入れ子のグリッドとして振る舞い、行が子スパンの 2 トラックに紐づけられます。</p>

<p>{{EmbedGHLiveSample("css-examples/grid/subgrid/rows.html", '100%', 1200)}}</p>

<h2 id="A_subgrid_in_both_dimensions" name="A_subgrid_in_both_dimensions">列と行のサブグリッド</h2>

<p>もちろん、以下の例のように、行と列の両方をサブグリッドとして定義できます。これは、サブグリッドが親グリッドの行と列両方のトラックの数に紐づけられることを意味します。</p>

<p>{{EmbedGHLiveSample("css-examples/grid/subgrid/both.html", '100%', 1200)}}</p>

<h3 id="No_implicit_grid_in_a_subgridded_dimension" name="No_implicit_grid_in_a_subgridded_dimension">サブグリッド化された範囲に暗黙のグリッドはありません</h3>

<p>アイテムを自動配置する必要があり、そのアイテムが何個になるか分からないときは、サブグリッドの作成時に、それらのアイテムを保持する追加の行が作成されないように注意してください。</p>

<p>次の例を見てください。これは上記の例と同様に、同じ親グリッドと子グリッドを使用していますが、サブグリッド内の 10 個のグリッドセルに 12 個のアイテムを自動配置しようとしています。このサブグリッドには行と列どちらにも追加の 2 個のアイテムを置く場所がないため、仕様で定義されている通りに、これらはグリッドの最後のトラック内に置かれることになります。</p>

<p>{{EmbedGHLiveSample("css-examples/grid/subgrid/no-implicit.html", '100%', 1200)}}</p>

<p><code>grid-template-rows</code> の値を削除すると、通常の明示的なトラックが作成できるようになります。とはいえ、これらは親のトラックに沿って並ばないため、その数に応じて作成する必要があります。</p>

<p>{{EmbedGHLiveSample("css-examples/grid/subgrid/implicit.html", '100%', 1200)}}</p>

<h2 id="The_gap_properties_and_subgrid" name="The_gap_properties_and_subgrid">gap プロパティとサブグリッド</h2>

<p>親グリッドに {{cssxref("gap")}} または {{cssxref("column-gap")}}, {{cssxref("row-gap")}} が指定されている場合、これらはサブグリッドにも渡され、トラックの間隔が親と同じになります。状況によっては、サブグリッドのトラックの間隔を親と異なるものに設定したい場合があるでしょう。これは、サブグリッドのグリッドコンテナーに <code>gap-*</code> プロパティを使用することにより達成できます。</p>

<p>これは以下の例で確認できます。親グリッドは 20px の行間隔と列間隔を持ち、サブグリッドは <code>row-gap</code> の値に <code>0</code> を設定しています。</p>

<p>{{EmbedGHLiveSample("css-examples/grid/subgrid/gap.html", '100%', 1200)}}</p>

<p>これを Firefox のグリッドインスペクターで調査すると、グリッドのラインが gap の中央に正しく描かれていることが分るでしょう。gap の値を 0 に設定した場合、同様の動作で要素に負のマージンが適用され、gap からアイテムまでのスペースが与えられます。</p>

<p><img alt="The smaller item displays in the gap as row-gap is set to 0 on the subgrid." src="https://mdn.mozillademos.org/files/16628/gap.png" style="height: 928px; width: 1312px;"></p>

<h2 id="Named_grid_lines" name="Named_grid_lines">名付けられたグリッドライン</h2>

<p>CSS のグリッドを利用する時、そのグリッドのラインに名前を付けて、ライン番号ではなく、これらの名前でアイテムを配置できます。親グリッドのライン名がサブグリッドに渡されるので、それらを使用してアイテムを配置できます。以下の例では、親のラインに <code>col-start</code> および <code>col-end</code> という名前を付けました。これらはサブアイテムの配置に使用されます。</p>

<p>{{EmbedGHLiveSample("css-examples/grid/subgrid/line-names.html", '100%', 1200)}}</p>

<p>また、サブグリッドにもライン名を指定できます。<code>subgrid</code> キーワードの後のラインのリストに、角括弧で囲まれたライン名を追加します。サブグリッドに 4 本のラインがある場合、次の構文ですべてのラインに名前を付けられます: <code>grid-template-columns: subgrid [line1] [line2] [line3] [line4]</code></p>

<p>サブグリッドに指定されたラインは親で指定された任意のラインに追加されるため、そのライン名を親とサブグリッドのどちらでも利用できます。デモンストレーションするため、以下の例で、アイテムの一つは親ラインを利用して配置し、もう一つはサブグリッドのラインを利用しています。</p>

<p>{{EmbedGHLiveSample("css-examples/grid/subgrid/adding-line-names.html", '100%', 1200)}}</p>

<h2 id="Using_subgrids" name="Using_subgrids">サブグリッドの利用</h2>

<p>サブグリッド内にうまく収まらないアイテムを心配する必要なく、サブグリッドは入れ子のグリッドにとてもよく似た動作をします。ただ一つ違うところは、サブグリッドのトラックのサイズ変更が親グリッドで設定されることです。どの入れ子のグリッドでもそうであったように、サブグリッド内のコンテンツのサイズがトラックのサイズを変更することがあり、コンテンツがトラックのサイズ変更に影響することを許すメソッドが用いられることが想定されます。このような場合、例えばサイズが自動調整される行トラックは、コンテンツがメイングリッドとサブグリッド内に収まるように大きくなります。</p>

<p>subgrid 値は、通常の入れ子のグリッドとほとんど同じ方法で動作するため、これらを切り替えるのは簡単です。例えば、暗黙的な行のグリッドが必要になったときにすべきことは、<code>grid-template-rows</code> の <code>subgrid</code> 値を削除し、あるいは暗黙的なトラックのサイズ変更を制御するために <code>grid-auto-rows</code> に値を与えることだけです。</p>

<h2 id="Specification" name="Specification">仕様書</h2>

<table>
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("CSS Grid 2")}}</td>
   <td>{{Spec2("CSS Grid 2")}}</td>
   <td><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#Subgrid">サブグリッド</a>の初回定義。</td>
  </tr>
 </tbody>
</table>

<h2 id="See_Also" name="See_Also">関連情報</h2>

<ul>
 <li>Mozilla Developer YouTube チャンネル上の動画、<a href="https://www.youtube.com/watch?v=gmQlK3kRft4">Laying out forms using subgrid</a> と <a href="https://www.youtube.com/watch?v=lLnFtK1LNu4">Don't Wait To Use Subgrid For Better Card Layouts</a> をご覧ください。</li>
 <li>CSSConf.eu でのプレゼンテーション <a href="https://noti.st/rachelandrew/i6gUcF/hello-subgrid">Hello Subgrid!</a></li>
</ul>
