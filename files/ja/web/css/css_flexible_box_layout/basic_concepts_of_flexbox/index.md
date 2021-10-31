---
title: フレックスボックスの基本概念
slug: Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox
tags:
  - CSS
  - Flex
  - Guide
  - axes
  - concepts
  - container
  - flexbox
translation_of: Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox
---
<div>{{CSSRef}}</div>

<p class="summary">通常フレックスボックスと呼ばれている Flexible Box Module は一次元のレイアウトモデルとして、またインターフェイス中のアイテム間でスペースの分配をする機能と強力な位置合わせをする機能を提供するものとして設計されました。この記事ではフレックスボックスの主な特徴の概要を示します。詳細については、このガイドのほかのページで説明します。</p>

<p>フレックスボックスが一次元であることは、フレックスボックスが一つの次元、つまり行か列のいずれかの方向にしかレイアウトしないことを述べています。これは <a href="/ja/docs/Web/CSS/CSS_Grid_Layout">CSS グリッドレイアウト</a>が行と列の二次元を同時に制御するモデルであることと対照的です。</p>

<h2 id="The_two_axes_of_flexbox" name="The_two_axes_of_flexbox">フレックスボックス 2 つの軸</h2>

<p>フレックスボックスを使うときは 2 つの軸、つまり主軸 (main axis) と交差軸 (cross axis) の観点から考える必要があります。主軸は {{cssxref("flex-direction")}} プロパティによって定義され、交差軸は主軸に垂直に交わる軸です。フレックスボックスを使った操作ではつねにこの軸について参照することになるので、最初にその動きを理解しましょう。</p>

<h3 id="The_main_axis" name="The_main_axis">主軸</h3>

<p>主軸は <code>flex-direction</code> によって定義され、4 種類の値をとることができます。</p>

<ul>
 <li><code>row</code></li>
 <li><code>row-reverse</code></li>
 <li><code>column</code></li>
 <li><code>column-reverse</code></li>
</ul>

<p><code>row</code> または <code>row-reverse</code> を選択した場合、主軸は<strong>インライン要素の並ぶ方向</strong>に伸びる軸となります。</p>

<p><img alt="flex-direction が row に設定された場合の主軸は、インライン方向の行に沿った軸となる。" src="https://mdn.mozillademos.org/files/15614/Basics1.png" style="display: block; height: 152px; margin: 0px auto; width: 522px;"></p>

<p><code>column</code> または <code>column-reverse</code> を選んだ場合は、ページの上から下に向かって<strong>ブロック要素の並ぶ方向</strong>に伸びる軸となります。</p>

<p><img alt="flex-direction が column に設定された場合の主軸は、ブロック方向に沿った軸となる。" src="https://mdn.mozillademos.org/files/15615/Basics2.png" style="display: block; height: 227px; margin: 0px auto; width: 709px;"></p>

<h3 id="The_cross_axis" name="The_cross_axis">交差軸</h3>

<p>交差軸は主軸に垂直に交わる軸です。したがって、<code>flex-direction</code> (主軸) が <code>row</code> または <code>row-reverse</code> なら、交差軸は列に沿ったものになります。</p>

<p><img alt="flex-direction が row に設定されている場合の交差軸は、ブロック方向に沿った軸となる。" src="https://mdn.mozillademos.org/files/15616/Basics3.png" style="display: block; height: 125px; margin: 0px auto; width: 666px;"></p>

<p>主軸が <code>column</code> または <code>column-reverse</code> であれば、交差軸は行の方向になります。</p>

<p><img alt="flex-direction が column に設定されている場合の交差軸は、インライン方向に沿った軸となる。" src="https://mdn.mozillademos.org/files/15617/Basics4.png" style="display: block; height: 244px; margin: 0px auto; width: 523px;"></p>

<p>フレックスアイテムの整列と位置合わせを検討する際には、どの軸が重要なのかを理解することが重要です。フレックスボックスには、コンテンツを一方の軸または他方の軸に沿って揃えたり、位置合わせしたりするプロパティが用意されています。</p>

<h2 id="Start_and_end_lines" name="Start_and_end_lines">行の先頭と末尾</h2>

<p>理解が必要なもう一つの重要事項は、フレックスボックスは文書の書字方向を仮定しないという点です。 CSS は過去には、左から右への横書きの書字方向に過度に偏っていました。最近のレイアウト方法は多様な書字方向に対応しており、したがってテキスト行が左上から始まり右に進み、新しい行が下に続くということを仮定しません。</p>

<p>フレックスボックスと書字方向の仕様の関係については、後に別の記事でくわしく触れますが、ここではフレックスアイテムを流し込む方向について、上下左右という言葉を使わない理由について説明します。</p>

<p>もし <code>flex-direction</code> が <code>row</code> で言語が英語の場合、主軸の先頭は左で末尾は右になります。</p>

<p><img alt="英語の場合、先頭は左" src="https://mdn.mozillademos.org/files/15618/Basics5.png" style="display: block; height: 152px; margin: 0px auto; width: 631px;"></p>

<p>一方で言語がもしアラビア語であった場合、主軸の先頭は右で末尾が左になります。</p>

<p><img alt="右から左に書く言語では、先頭は右" src="https://mdn.mozillademos.org/files/15619/Basics6.png" style="display: block; height: 152px; margin: 0px auto; width: 634px;"></p>

<p>いずれの場合でも、両言語ともに書字方向が横書きであるため、交差軸の先頭側は上で末尾側が下になります。</p>

<p>こうしてみると、左と右ではなく先頭と末尾で考えることが自然なものに思えます。この考え方は CSS グリッドレイアウトのような、同じパターンに従っているレイアウトメソッドを扱う際にも役立つでしょう。</p>

<h2 id="The_flex_container" name="The_flex_container">フレックスコンテナー</h2>

<p>フレックスボックスを使ってレイアウトされる文書の領域は、<strong>フレックスコンテナー</strong>と呼ばれています。フレックスコンテナーを作るには、その領域のコンテナーに対して {{cssxref("display")}} プロパティの値を <code>flex</code> もしくは <code>inline-flex</code> に設定します。またこれにより、このコンテナー直下の子要素が <strong>フレックスアイテム</strong>となります。ほかの CSS プロパティと同様に、いくつかの初期値が定義されているため、フレックスコンテナーを作成するとそのコンテナーに含まれるフレックスアイテムは以下のように振る舞います。</p>

<ul>
 <li>フレックスアイテムは行に沿って並んで表示されます (<code>flex-direction</code> プロパティの既定値は <code>row</code>)。</li>
 <li>フレックスアイテムは主軸の先頭側を先頭に並びます。</li>
 <li>フレックスアイテムは、主軸方向に伸張されませんが、収縮する場合があります。</li>
 <li>フレックスアイテムは、交差軸の大きさを埋めるように伸張されます。</li>
 <li>{{cssxref("flex-basis")}} プロパティは <code>auto</code> に設定されます。</li>
 <li>{{cssxref("flex-wrap")}} プロパティは <code>nowrap</code> に設定されます。</li>
</ul>

<p>その結果、アイテムはすべて一行に並び、コンテンツの寸法が主軸方向の寸法になります。アイテムがコンテナーに収まらない場合は、折り返されずにあふれます。一部のアイテムの高さが他のアイテムより大きい場合には、すべてのアイテムが交差軸方向にその全高を埋めるように伸張されます。</p>

<p>この見え方についての、例を以下に挙げます。アイテムを変更したり新たに追加してフレックスボックスの初期値の挙動を確認してください。</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/basics/the-flex-container.html", '100%', 480)}}</p>

<h3 id="Changing_flex-direction" name="Changing_flex-direction">flex-direction の変更</h3>

<p>フレックスコンテナーに {{cssxref("flex-direction")}} プロパティを設定すると、フレックスアイテムが表示される方向を変更することができます。 <code>flex-direction: row-reverse</code> と設定することで、アイテムは行に沿って並ぶ点は変わりませんが、先頭と末尾が入れ替わります。</p>

<p><code>flex-direction</code> を <code>column</code> に変更すると、主軸の方向が変わり、フレックスアイテムは列に沿って並んで表示されるようになります。 <code>column-reverse</code> では、さらに先頭と末尾が入れ替わります。</p>

<p>次の例では、<code>flex-direction</code> が <code>row-reverse</code> に設定されています。他の値である <code>row</code>, <code>column</code>, <code>cokumn-reverse</code> で何が起こるか確かめてみてください。</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-direction.html", '100%', 350)}}</p>

<h2 id="Multi-line_flex_containers_with_flex-wrap" name="Multi-line_flex_containers_with_flex-wrap">flex-wrap による複数行のフレックスコンテナー</h2>

<p>フレックスボックスは一次元モデルですが、フレックスアイテムを複数行に折り返して表示させることも可能です。その際には、それぞれの行を新しいフレックスコンテナーとして捉える必要があります。スペースの分配はその行の中でのみ発生し、隣の行については参照されません。</p>

<p>折り返しを発生させるには {{cssxref("flex-wrap")}} プロパティに値として <code>wrap</code> を設定します。するとアイテムが一行で表示するには大きすぎる場合には、新たな行に折り返しされます。以下の例では、全アイテムを合わせた幅がフレックスコンテナーよりも大きくなるような幅をアイテムに設定しています。 <code>flex-wrap</code> を <code>wrap</code> に設定すると、アイテムが折り返します。初期値である <code>nowrap</code> に設定すると、フレックスボックスの初期値はアイテムの収縮を許可するので、アイテムはコンテナーに合うように収縮されます。 <code>nowrap</code> はアイテムを収縮不可能な場合や、コンテナーに合う大きさまで小さくできない場合には、あふれ出ます。</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-wrap.html", '100%', 400)}}</p>

<p>フレックスアイテムの折り返しについての詳細は、<a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items">フレックスアイテムの折り返しのマスター</a>を参照してください。</p>

<h2 id="The_flex-flow_shorthand" name="The_flex-flow_shorthand">flex-flow 一括指定プロパティ</h2>

<p><code>flex-direction</code> と <code>flex-wrap</code> の 2 つのプロパティは、{{cssxref("flex-flow")}} 一括指定プロパティにより 2 つ同時に指定することができます。最初に指定される値が <code>flex-direction</code> で、2 つ目の値が <code>flex-wrap</code> です。</p>

<p>以下の例で、1 つ目の値を <code>flex-direction</code> に使える値 (<code>row</code>, <code>row-reverse</code>, <code>column</code>, <code>column-reverse</code> のいずれか) に変更してみてください。また、2 つ目の値を <code>wrap</code> か <code>nowrap</code> に変更してみてください。</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-flow.html", '100%', 400)}}</p>

<h2 id="Properties_applied_to_flex_items" name="Properties_applied_to_flex_items">フレックスアイテムに適用されるプロパティ</h2>

<p>フレックスアイテムに対してさらなる制御をするために、アイテムを直接操作対象にすることができます。以下の 3 つのプロパティを使用します。</p>

<ul>
 <li>{{cssxref("flex-grow")}}</li>
 <li>{{cssxref("flex-shrink")}}</li>
 <li>{{cssxref("flex-basis")}}</li>
</ul>

<p>本ページでは、これらのプロパティについて簡単に触れます。<a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax">主軸におけるフレックスアイテムの比率の制御</a>のガイドで、より完全な情報を得られます。</p>

<p>上述のプロパティについて理解する前に、<strong>分配可能スペース</strong> (available space) の概念について考える必要があります。上述のプロパティを変更するということは、アイテム間での分配可能スペースの分配のしかたを変えるということです。この分配可能スペースについての考え方は、アイテムの位置合わせについて考える時に重要になります。</p>

<p>たとえば、500 ピクセル幅のコンテナーの中に 100 ピクセル幅のアイテムが 3 つあるとき、アイテムの配置に必要な幅は 300 ピクセルです。このとき 200 ピクセルの分配可能スペースが残っています。初期値を変更しなかった場合フレックスボックスは、スペースを最後のアイテムの後ろに配置します。</p>

<p><img alt="このフレックスコンテナーは、アイテムを配置した後に分配可能スペースがある。" src="https://mdn.mozillademos.org/files/15620/Basics7.png" style="display: block; height: 198px; margin: 0px auto; width: 528px;"></p>

<p>そうではなく、アイテムを拡大してスペースを埋めたいときには、余っているスペースをアイテムに分配する方法が必要となります。それがアイテム自体に設定する <code>flex</code> プロパティが提供する機能です。</p>

<h3 id="The_flex-basis_property" name="The_flex-basis_property">flex-basis プロパティ</h3>

<p><code>flex-basis</code> は、そのアイテムの寸法を、使用しないスペースは分配可能スペースとして残すように定義します。このプロパティの初期値は auto で、この設定ではブラウザーはアイテムにサイズが設定されているかを確認します。上述の例では、すべてのアイテムが100ピクセルの幅に設定されているため、これが <code>flex-basis</code> として使われます。</p>

<p>アイテムにサイズが設定されていない場合は、その内容のサイズが <code>flex-basis</code> として使われます。<code>display: flex</code> を親要素に設定するだけで、すべてのフレックスアイテムがそのアイテムの内容を表示するのに必要なスペースのみを使用して行の中に整列していたのは、この挙動のためです。</p>

<h3 id="The_flex-grow_property" name="The_flex-grow_property">flex-grow プロパティ</h3>

<p><code>flex-grow</code> プロパティを正の整数に設定すると、フレックスアイテムは主軸に沿って <code>flex-basis</code> 以上に伸張することができます。これによって、アイテムが主軸に沿った分配可能スペースをすべて使うまで伸張するか、ほかのアイテムにも <code>flex-grow</code> が設定されていたときには一定の割合を使うように伸張するようになります。</p>

<p>先ほどの例で、すべてのアイテムの <code>flex-grow</code> に 1 を設定すると、分配可能スペースはアイテム間で均等に分配され、主軸に沿ってコンテナーを埋めるように伸張されます。</p>

<p><code>flex-grow</code> プロパティは割合で余白を配分するために使うことができます。最初のアイテムの <code>flex-grow</code> に 2 を設定し、ほかのアイテムには 1 を設定した場合、最初のアイテムに2/4 (先ほどの例では 200px 中の 100px ) が与えられ、残りの 2 つのアイテムに 1/4 (200px 中の 50px ) ずつが与えられます。</p>

<h3 id="The_flex-shrink_property" name="The_flex-shrink_property">flex-shrink プロパティ</h3>

<p><code>flex-grow</code> プロパティが主軸上のスペースの追加を扱う一方で、<code>flex-shrink</code> はスペースの取りあげ方をコントロールします。 アイテムを配置するのに十分なスペースがコンテナーになく、<code>flex-shrink</code> に正の整数が設定されていれば、アイテムは <code>flex-basis</code> よりも小さくなります。<code>flex-grow</code> と同様に、あるアイテムの収縮するスピードを他のアイテムより早くするために、異なる値を設定することができます。 つまりより大きな値が flex-shrink に設定されているアイテムは、他のより小さな値が設定されている兄弟要素よりも速く収縮します。</p>

<p>実際の収縮幅の計算にはアイテムの最小サイズが考慮されるため、<code>flex-shrink</code> の動作は <code>flex-grow</code> に比べて一貫性がないように見えるかもしれません。そのため、そのアルゴリズムがどのように動くかについての詳細は、<a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax">主軸に沿ったフレックスアイテムの比率の制御</a> の記事に書かれています。</p>

<div class="note">
<p>注意: <code>flex-grow</code> や <code>flex-shrink</code> に指定する値は割合です。一般的には、たとえばあるアイテムを他の <code>flex: 1 1 200px</code> に設定したアイテムより２倍速く拡大させたいときには、<code>flex: 2 1 200px</code> を設定します。しかし、望むならば <code>flex: 10 1 200px</code> と <code>flex: 20 1 200px</code> という書き方もできます。</p>
</div>

<h3 id="Shorthand_values_for_the_flex_properties" name="Shorthand_values_for_the_flex_properties">flex プロパティの一括指定</h3>

<p><code>flex-grow</code>、<code>flex-shrink</code>、<code>flex-basis</code> の各プロパティを個別に使うケースはとても珍しく、そのかわりに {{cssxref("flex")}} 一括指定プロパティでまとめて指定されることが多いでしょう。<code>flex</code> 一括指定プロパティは、<code>flex-grow</code>、<code>flex-shrink</code>、<code>flex-basis</code> の順に３つの値を設定できます。</p>

<p>以下の例では、<code>flex</code> 一括指定プロパティの様々な値を試せるようになっています。 最初の値が <code>flex-grow</code> であり、正の値を指定することでアイテムが伸張できるようになります。２番目の値は <code>flex-shrink</code> です。正の値によりアイテムが収縮できるようになりますが、アイテムの合計サイズが主軸からはみ出す場合のみ起こります。最後の値が <code>flex-basis</code> となり、アイテムが伸張・収縮する際の基準値となります。</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-properties.html", '100%', 510)}}</p>

<p>また、ほとんどのユースケースをカバーできるいくつかの定義済みの一括指定値があります。 チュートリアル中で使用されているのを度々見かけるでしょうし、ほとんどの場合でこれらの値で十分でしょう。 定義済みの値は以下のとおりです。</p>

<ul>
 <li><code>flex: initial</code></li>
 <li><code>flex: auto</code></li>
 <li><code>flex: none</code></li>
 <li><code>flex: &lt;正の数&gt;</code></li>
</ul>

<p><code>flex: initial</code> はフレックスボックスの初期値にリセットします。これは <code>flex: 0 1 auto</code> に設定することと同じです。この場合 <code>flex-grow</code> は 0 となるため、アイテムが <code>flex-basis</code> よりも大きくなることはありません。<code>flex-shrink</code> は 1 なので、必要な場合にはオーバーフローするのではなく収縮します。<code>flex-basis</code> の値は <code>auto</code> です。アイテムに設定されている主軸に沿ったサイズか、またはアイテムの内容のサイズがフレックスアイテムのサイズとして使用されます。</p>

<p><code>flex: auto</code> では、<code>flex: 1 1 auto</code> に設定することと等しくなります。<code>flex: initial</code> とは、アイテムがコンテナーを埋めるように伸張する点を除いて同じで、必要に応じて収縮もします。</p>

<p><code>flex: none</code> は、全く伸縮性の無い flex アイテムを作成します。これは <code>flex: 0 0 auto </code>と同じです。アイテムは伸張も収縮もせずに、<code>flex-basis: auto</code> のフレックスボックスとして配置されます。</p>

<p>チュートリアル内では、<code>flex: 1</code> や <code>flex: 2</code> のような設定をよく目にするでしょう。これは <code>flex: 1 1 0</code> を使うのと同様、<code>flex-basis</code> が 0 の状態から伸び縮みします。</p>

<p>これらの短縮値について、以下の例でためしてみてください。</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-shorthands.html", '100%', 510)}}</p>

<h2 id="Alignment_justification_and_distribution_of_free_space_between_items" name="Alignment_justification_and_distribution_of_free_space_between_items">アイテム間での位置合わせ、端揃え、スペース分配</h2>

<p>フレックスボックスの重要な特徴は、主軸および交差軸において位置合わせや端揃えをし、フレックスアイテム間でのスペースの分配ができる点にあります。</p>

<h3 id="align-items">align-items</h3>

<p>{{cssxref("align-items")}} プロパティは、交差軸におけるアイテムの位置合わせを行います。</p>

<p>このプロパティの初期値は <code>stretch</code> であり、これによって既定では最も高いフレックスアイテムの高さまで他のアイテムが伸張する挙動になっています。実際には、最も高いフレックスアイテムの高さがコンテナーの高さを決めるため、フレックスコンテナーを埋めるように伸張します。</p>

<p>アイテムをフレックスコンテナーの先頭側に揃えるためには <code>align-items</code> に <code>flex-start</code> を設定し、末尾側に揃えるためには <code>flex-end</code> を、中央揃えにするには <code>center</code> を設定します。 以下の例で試してみましょう。この例では、コンテナー内でアイテムがどのように移動するかわかりやすくするためフレックスコンテナーに高さを設定しています。<code>align-items</code> に以下の値を設定したときにそれぞれ何が起こるか確認してください。</p>

<ul>
 <li><code>stretch</code></li>
 <li><code>flex-start</code></li>
 <li><code>flex-end</code></li>
 <li><code>center</code></li>
</ul>

<p>{{EmbedGHLiveSample("css-examples/flexbox/basics/align-items.html", '100%', 520)}}</p>

<h3 id="justify-content">justify-content</h3>

<p>{{cssxref("justify-content")}} プロパティは、主軸におけるアイテムの配置、つまり <code>flex-direction</code> で設定された方向における位置合わせを行います。初期値は <code>flex-start</code> で、コンテナーの先頭側からアイテムが並べられます。<code>flex-end</code> を設定することで末尾から、<code>center</code> を設定することで中央に並べることもできます。</p>

<p>また、<code>space-between</code> を使用して、アイテムを配置したあとの残りのスペースのすべてをアイテム間で均等に振り分けられ、これによって同じ幅の空白がそれぞれアイテムの間に挿入されます。各アイテムの左右に同じだけのスペースを空けるには、<code>space-around</code> を使用します。<code>space-around</code> では、コンテナーの両端には、アイテム間の半分のサイズのスペースが設けられます。両端にも同じだけのスペースを設けるには、<code>space-evenly</code> を使用します。この場合はコンテナの両端にフルサイズ (アイテム間と同じサイズ) のスペースが設けられます。</p>

<p>例で、以下の <code>justify-content</code> の値を試してみましょう。</p>

<ul>
 <li><code>flex-start</code></li>
 <li><code>flex-end</code></li>
 <li><code>center</code></li>
 <li><code>space-around</code></li>
 <li><code>space-between</code></li>
 <li><code>space-evenly</code></li>
</ul>

<p>{{EmbedGHLiveSample("css-examples/flexbox/basics/justify-content.html", '100%', 380)}}</p>

<p><a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container">フレックスコンテナー内でのアイテムの配置</a>の記事では、これらのプロパティがどのように動作するのか深く理解するために、より詳細に述べています。しかし上述の簡潔な例でもほとんどのユースケースで役に立つでしょう。</p>

<h2 id="Next_steps" name="Next_steps">次のステップ</h2>

<p>この記事で、フレックスボックスの基本的な特徴についての理解ができたと思います。次の記事では<a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Relationship_of_Flexbox_to_Other_Layout_Methods">この仕様が他の CSS レイアウトメソッドとどのような関係にあるか</a>を見ていきます。</p>
