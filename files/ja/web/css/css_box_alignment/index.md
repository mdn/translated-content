---
title: CSS ボックス配置
slug: Web/CSS/CSS_Box_Alignment
tags:
  - CSS
  - CSS ボックス配置
  - alignment
  - box alignment
  - グリッドレイアウト
  - フレックスボックス
  - 段組みレイアウト
translation_of: Web/CSS/CSS_Box_Alignment
---
<div>{{CSSRef}}</div>

<p class="summary"><ruby>CSS ボックス配置<rp> (</rp><rt>CSS Box Alignment</rt><rp>) </rp></ruby>モジュールは、ブロックレイアウト、表レイアウト、フレックスレイアウト、グリッドレイアウトなどの様々な CSS ボックスレイアウトにおける、ボックスの配置に関する機能を定義します。このモジュールは CSS 全体において一貫性のある配置方法を作成することを目指しています。この文書はこの仕様書にある全般的な概念を解説します。</p>

<div class="note">
<p><strong>メモ</strong>: ボックス配置がどのように適用されるかは、各レイアウト方法のドキュメントに詳しく記載されています。</p>
</div>

<h2 id="古い配置方法">古い配置方法</h2>

<p>CSS は伝統的に、配置機能がとても制約されていました。 {{cssxref("text-align")}} を使用してテキストの配置を指定したり、 {{cssxref("margin")}} に auto を使用してブロックを中央揃えしたり、 {{cssxref("vertical-align")}} を使用して表やインラインブロックをレイアウトしたりしていました。テキストの配置は<a href="https://www.w3.org/TR/css-inline-3/">インラインレイアウト</a>および <a href="https://www.w3.org/TR/css-text-3/">CSS テキスト</a>モジュールによってカバーされるようになり、ボックス配置の最初で、完全な水平方向と垂直方向の配置の機能を持ちました。</p>

<p>先に<a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout">フレックスボックス</a>を学んでいるのであれば、これらのプロパティはフレックスボックスの使用の一部と思うかもしれませんし、一部のプロパティは実際に、フレックスボックスのレベル1に並べられています。しかし仕様書では、現在フレックスボックスにある以上の追加の機能が追加される可能性があるため、ボックス配置仕様書を参照するよう注記しています。</p>

<h2 id="Basic_examples" name="Basic_examples">基本的な例</h2>

<p>次の例は、ボックス配置のプロパティの一部が<a href="/ja/docs/Web/CSS/CSS_Grid_Layout">グリッド</a>と<a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout">フレックスボックス</a>にどのように適用されるかを示しています。</p>

<h3 id="CSS_grid_layout_alignment_example" name="CSS_grid_layout_alignment_example">CSS グリッドレイアウトの配置の例</h3>

<p>グリッドレイアウトを使用したこの例では、固定幅のグリッドトラックをインライン (主) 軸上にレイアウトした後に、グリッドコンテナ内に余分な空白が残っています。この空白は {{cssxref("justify-content")}} を使って分配されます。ブロック (交差) 軸上では、グリッド領域内のアイテムの配置は {{cssxref("align-items")}} で制御されます。最初のアイテムは {{cssxref("align-self")}} を <code>center</code> に設定して、グループに設定された <code>align-items</code> 値を上書きしています。</p>

<p>{{EmbedGHLiveSample("css-examples/box-alignment/overview/grid-align-items.html", '100%', 500)}}</p>

<h3 id="Flexbox_Alignment_Example" name="Flexbox_Alignment_Example">フレックスボックスの配置の例</h3>

<p>この例では、3 つのフレックスアイテムが <code>justify-content</code> を使用して主軸上に配置され、 <code>align-items</code> を使用して交差軸上に配置されています。 最初のアイテムは<code>align-self</code> を <code>center</code> に設定して、グループに設定された <code>align-items</code> を上書きしています。</p>

<p>{{EmbedGHLiveSample("css-examples/box-alignment/overview/flex-align-items.html", '100%', 500)}}</p>

<h2 id="Key_concepts_and_terminology" name="Key_concepts_and_terminology">主要概念と用語</h2>

<p>この仕様書では、個別のレイアウト方法の実装以外でこれらの整列プロパティを簡単に説明できるように、整列に関する用語を詳しく説明しています。すべてのレイアウト方法に共通する、いくつかの重要な概念もあります。</p>

<h3 id="Relationship_to_writing_modes" name="Relationship_to_writing_modes">書字方向との関連</h3>

<p>配置は書字方向と結びついており、アイテムを配置するとき、物理的な寸法である上下左右に配置するかどうかを考慮しません。代わりに、作業している特定の距離の開始と終了によって配置を記述します。これにより、これにより、文書がどのような書字方向であっても、配置が同じように動作することを保証します。</p>

<h3 id="Two_dimensions_of_alignment" name="Two_dimensions_of_alignment">二次元の配置</h3>

<p>ボックス配置プロパティを使用すると、コンテンツは二本の軸 — インライン (主) 軸、およびブロック (交差) 軸 — のうちの一本の上に配置されます。インライン軸は書字方向が使用され、文の語がこの軸に沿って流れます。 — 例えば英語では、インライン軸は水平です。ブロック軸は、段落要素などのブロックの方向の軸で、インライン軸と交差する向きにレイアウトされます。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15952/two-axes.png"></p>

<p>インライン軸上でアイテムを整列するときは、 <code>justify-</code> で始まるプロパティを使用します。</p>

<ul>
 <li>{{cssxref("justify-items")}}</li>
 <li>{{cssxref("justify-self")}}</li>
 <li>{{cssxref("justify-content")}}</li>
</ul>

<p>ブロック軸上でアイテムを整列するときは、 <code>align-</code> で始まるプロパティを使用します。</p>

<ul>
 <li>{{cssxref("align-items")}}</li>
 <li>{{cssxref("align-self")}}</li>
 <li>{{cssxref("align-content")}}</li>
</ul>

<p>フレックスボックスはさらに複雑であり、 {{cssxref("flex-direction")}} が <code>row</code> に設定されている場合に上記のものが当てはまります。フレックスボックスが <code>column</code> に設定されている場合、プロパティは逆になります。したがって、フレックスボックスを使用するときは、インライン軸とブロック軸よりも、主軸と交差軸について考えるほうが簡単です。 <code>justify-</code> プロパティは常に主軸上で、 <code>align-</code> プロパティは交差軸上で配置するために使用されます。</p>

<h3 id="The_alignment_subject" name="The_alignment_subject">配置対象物</h3>

<p><ruby><strong>配置対象物</strong><rp> (</rp><rt>alignment subject</rt><rp>) </rp></ruby>とは、配置が行われるもののことです。 <code>justify-self</code> または <code>align-self</code> の場合、あるいは <code>justify-items</code> または <code>align-items</code> によってこれらの値をグループとして設定する場合に、このプロパティが使用されている要素のマージンボックスになります。 <code>justify-content</code> および <code>align-content</code> プロパティはレイアウト方法ごとに異なります。</p>

<h3 id="The_alignment_container" name="The_alignment_container">配置コンテナー</h3>

<p><ruby><strong>配置コンテナー</strong><rp> (</rp><rt>alignment container</rt><rp>) </rp></ruby>は、内側で対象物を整列させるボックスです。これはふつう、配置対象物を内包するブロックになります。配置コンテナーには一つまたは多数の配置対象物を含めることができます。</p>

<p>下の画像は、内側に2つの整列対象がある配置コンテナーの例です。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15953/align-container-subjects.png" style="height: 170px; width: 248px;"></p>

<h3 id="Fallback_alignment" name="Fallback_alignment">代替配置</h3>

<p>実現できない配置を設定した場合、<strong>代替配置</strong>が有効になり、利用可能な空間を扱います。この代替配置はレイアウト方法ごとに個別に定義されており、それぞれのページで詳しく説明されています。</p>

<h2 id="Types_of_alignment" name="Types_of_alignment">配置の種類</h2>

<p>この仕様書が詳述している配置には、3つの異なる種類があります。これらはキーワード値を使用します。</p>

<ul>
 <li><ruby><strong>位置指定配置</strong><rp> (</rp><rt>Positional alignment</rt><rp>)</rp></ruby>: 配置対象物の位置を、配置コンテナーからの相対で指定します。</li>
 <li><ruby><strong>ベースライン配置</strong><rp> (</rp><rt>Baseline alignment</rt><rp>)</rp></ruby>: これらのキーワードは、配置コンテナー内にある複数の配置対象物のベースラインの関係で配置を定義します。</li>
 <li><ruby><strong>分配配置</strong><rp> (</rp><rt>Distributed alignment</rt><rp>)</rp></ruby>: これらのキーワードは、配置対象物間の空白の分配で配置を定義します。</li>
</ul>

<h3 id="Positional_alignment_keyword_values" name="Positional_alignment_keyword_values">位置指定配置のキーワード値</h3>

<p>以下の値は位置指定配置のために定義されており、 <code>justify-content</code> および <code>align-content</code> による内容の配置、そして <code>justify-self</code> および <code>align-self</code> による自己配置の値として使用することができます。</p>

<ul>
 <li><code>center</code></li>
 <li><code>start</code></li>
 <li><code>end</code></li>
 <li><code>self-start</code></li>
 <li><code>self-end</code></li>
 <li><code>flex-start</code> フレックスボックスのみ</li>
 <li><code>flex-end</code> フレックスボックスのみ</li>
 <li><code>left</code></li>
 <li><code>right</code></li>
</ul>

<p>画面の物理的な属性に関連する <code>left</code> と <code>right</code> の物理値を除いて、他のすべての値は論理値であり、内容の書字方向に関連します。</p>

<p>たとえば、 CSS グリッドレイアウトで作業しているとき、英語で作業していて <code>justify-content</code> に <code>start</code> を設定すると、アイテムはインライン方向の先頭、すなわち英語の文は左端から始まるので左に移動します。右書きの言語であるアラビア語では、同じ <code>start</code> の値は、アラビア語の文がページの右側から始まるので、右に移動します。</p>

<p>どちらの例も <code>justify-content: start</code> ですが、開始位置は書字方向によって異なります。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15956/writing-mode-start.png" style="height: 101px; width: 478px;"></p>

<h3 id="Baseline_alignment" name="Baseline_alignment">ベースライン配置</h3>

<p>ベースライン配置キーワードは、配置対象物のグループ間でボックスのベースラインを整列するために使用されます。これらは <code>justify-content</code> および <code>align-content</code> による内容の配置、そして <code>justify-self</code> および <code>align-self</code> による自己配置の値として使用することができます。</p>

<ul>
 <li><code>baseline</code></li>
 <li><code>first baseline</code></li>
 <li><code>last baseline</code></li>
</ul>

<p><code>justify-content</code> または <code>align-content</code> のためのベースライン配置の値を指定するベースラインのコンテンツ配置は、アイテムを行単位で整列するレイアウト方法で機能します。ボックスの内側にパディングを追加することによって、配置対象物のベースラインを相互に揃えます。</p>

<p>ベースラインの自己配置では、ベースラインで配列するために、ボックスの外側にマージンを追加することによってボックスをずらします。自己配置は <code>justify-self</code> または <code>align-self</code> を使用する場合、あるいは <code>justify-items</code> または <code>align-items</code> を使用してこれらの値をグループとして設定する場合に行われます。</p>

<h3 id="Distributed_alignment" name="Distributed_alignment">分配配置</h3>

<p><strong>分配配置キーワード</strong> は <code>align-content</code> および <code>justify-content</code> で使用するプロパティです。これらのキーワードは、配置対象物を描画したあと、残りの空間をどう扱うか定義します。値は以下のとおりです。</p>

<ul>
 <li><code>stretch</code></li>
 <li><code>space-between</code></li>
 <li><code>space-around</code></li>
 <li><code>space-evenly</code></li>
</ul>

<p>たとえばフレックスレイアウトでは、初期値の場合アイテムを <code>flex-start</code> で整列します。英語のように水平方向で上から下への書字方向で動作する場合、 <code>flex-direction</code> が <code>row</code> のときにはアイテムは左端から始まり、アイテムを描画した余白はすべてアイテムの後に配置されます。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15954/justify-content-start.png" style="height: 100px; width: 559px;"></p>

<p>フレックスコンテナーに <code>justify-content: space-between</code> を設定すると、余白はアイテム間に分配されます。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15955/justify-content-space-between.png" style="height: 100px; width: 559px;"></p>

<p>これらのキーワードを有効にするには、アイテムを配置する領域に余白が必要です。余白が存在しないと、分配されることはありません。</p>

<h2 id="Overflow_alignment" name="Overflow_alignment">配置があふれた場合</h2>

<p><code>safe</code> および <code>unsafe</code> キーワードは、配置コンテナーより配置対象物のほうが大きい場合の振る舞いを指定します。 <code>safe</code> キーワードを指定すると、指定された配置によりあふれが発生する場合、アイテムの一部が境界の外側に出て配置コンテナーがスクロールできないという「データ損失」を防ぐために、 <code>start</code> で配置します。</p>

<p><code>unsafe</code> を指定した場合、データ損失が発生する可能性があっても配置が尊重されます。</p>

<h2 id="Gaps_between_boxes" name="Gaps_between_boxes">ボックス間のギャップ</h2>

<p>ボックス配置仕様書には、 <code>gap</code>, <code>row-gap</code>, <code>column-gap</code> も含まれています。これらのプロパティは、アイテムが配置されているあらゆるレイアウト方法で、行または列内のアイテム間で一貫したギャップを設定します。</p>

<p><code>gap</code> プロパティは <code>row-gap</code> と <code>column-gap</code> の一括指定で、両プロパティを一度に設定することができます。</p>

<ul>
 <li>{{cssxref("row-gap")}}</li>
 <li>{{cssxref("column-gap")}}</li>
 <li>{{cssxref("gap")}}</li>
</ul>

<p>以下の例では、グリッドレイアウトで <code>gap</code> の一括指定を使用して、行トラック間に <code>10px</code> のギャップと列トラック間に <code>2em</code> のギャップを設定します。</p>

<p>{{EmbedGHLiveSample("css-examples/box-alignment/overview/grid-gap.html", '100%', 500)}}</p>

<p>この例では、 {{cssxref("gap")}} に加えて {{cssxref("grid-gap")}} プロパティを使用しています。 <code>gap</code> プロパティはもともとグリッドレイアウト仕様書の中で <code>grid-</code> という接頭辞をつけられていました。ブラウザーによってはこれらの接頭辞がついたバージョンにしか対応していません。</p>

<ul>
 <li>{{cssxref("grid-row-gap")}}</li>
 <li>{{cssxref("grid-column-gap")}}</li>
 <li>{{cssxref("grid-gap")}}</li>
</ul>

<p>接頭辞がついたバージョンは接頭辞がないバージョンの別名として保持されています。 <code>grid-gap</code> プロパティの次に <code>gap</code> を同じ値で追加すれば、ベンダー接頭辞と同じように使用できます。</p>

<p>また、スペース配分キーワードを使用した場合やアイテムにマージンを追加したりした場合など、表示される視覚的なギャップが広がることもあります。</p>

<h2 id="Pages_detailing_individual_alignment_properties" name="Pages_detailing_individual_alignment_properties">レイアウト別の配置詳細ページ</h2>

<p>CSS ボックス配置のプロパティは、相互作用する仕様に応じて様々な方法で実装されています。レイアウトの種類ごとの使用方法の詳細は、それぞれのページを参照してください。</p>

<ul>
 <li><a href="/ja/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox">フレックスボックスでのボックス配置</a></li>
 <li><a href="/ja/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_In_Grid_Layout">CSS グリッドレイアウトでのボックス配置</a></li>
 <li><a href="/ja/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Multi-column_Layout">段組みレイアウトでのボックス配置</a></li>
 <li><a href="/ja/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_In_Block_Abspos_Tables">ブロック、絶対配置、表レイアウトのブロック配置</a></li>
</ul>

<h2 id="Reference" name="Reference">リファレンス</h2>

<h3 id="CSS_Properties" name="CSS_Properties">CSS プロパティ</h3>

<div class="index">
<ul>
 <li>{{cssxref("justify-content")}}</li>
 <li>{{cssxref("align-content")}}</li>
 <li>{{cssxref("place-content")}}</li>
 <li>{{cssxref("justify-items")}}</li>
 <li>{{cssxref("align-items")}}</li>
 <li>{{cssxref("place-items")}}</li>
 <li>{{cssxref("justify-self")}}</li>
 <li>{{cssxref("align-self")}}</li>
 <li>{{cssxref("place-self")}}</li>
 <li>{{cssxref("row-gap")}}</li>
 <li>{{cssxref("column-gap")}}</li>
 <li>{{cssxref("gap")}}</li>
</ul>
</div>

<h3 id="Glossary_Entries" name="Glossary_Entries">用語集の項目</h3>

<div class="index">
<ul>
 <li>{{Glossary("Cross axis", "交差軸")}}</li>
 <li>{{Glossary("Main axis", "主軸")}}</li>
 <li>{{Glossary("Alignment container", "配置コンテナー")}}</li>
 <li>{{Glossary("Alignment subject", "配置対象物")}}</li>
 <li>{{Glossary("Fallback alignment", "代替配置")}}</li>
</ul>
</div>

<h2 id="Guides" name="Guides">ガイド</h2>

<ul>
 <li>CSS フレックスボックスガイド: <em><a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">フレックスボックスの基本概念</a></em></li>
 <li>CSS Flexbox guide: <em><a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container">フレックスコンテナー内のアイテムの配置</a></em></li>
 <li>CSS Grid guide: <em><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout">CSS グリッドレイアウトのボックス配置</a></em></li>
</ul>

<h2 id="External_Resources" name="External_Resources">外部リソース</h2>

<ul>
 <li><a href="https://rachelandrew.co.uk/css/cheatsheets/box-alignment">Box alignment cheatsheet</a></li>
 <li><a href="https://www.smashingmagazine.com/2016/11/css-grids-flexbox-box-alignment-new-layout-standard/">CSS Grid, Flexbox and Box alignment</a></li>
 <li><a href="https://blogs.igalia.com/jfernandez/2017/05/03/can-i-use-css-box-alignment/">Thoughts on partial implementations of Box alignment</a></li>
</ul>
