---
title: フレックスコンテナー内のアイテムの配置
slug: Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container
tags:
  - Align
  - CSS
  - Flex
  - Guide
  - align-content
  - align-items
  - align-self
  - alignment
  - flexbox
  - justify
  - justify-content
  - フレックスボックス
  - 配置
translation_of: Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container
---
<p>{{CSSRef}}</p>

<p class="summary">フレックスボックスがウェブ開発者の関心を急速に集めた理由の一つに、ウェブコンテンツで適切な位置合わせができる初めての機能であってことが挙げられます。正しい縦の位置合わせが可能になったことで、ついにボックスの中央寄せを簡単にできるようになりました。このガイドでは、フレックスボックスにおいて位置合わせや行端揃えのプロパティがどのように働くかを詳しくみていきます。</p>

<p>ボックスを中央寄せするには、 <code>align-items</code> プロパティを使って交差軸 (今回の場合は縦軸) 上の位置合わせをし、 <code>justify-content</code> プロパティで主軸 (今回の場合は横軸) 上の位置合わせをします。</p>

<p><img alt="中央寄せされたボックスをもつコンテナ要素" src="https://mdn.mozillademos.org/files/15627/align1.png" style="display: block; height: 357px; margin: 0px auto; width: 616px;"></p>

<p>以下の例のコードをみてください。コンテナーや子要素のサイズを変更しても、子要素は常に中央寄せされます。</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/alignment/intro.html", '100%', 700)}}</p>

<h2 id="Properties_that_control_alignment" name="Properties_that_control_alignment">配置を制御するプロパティ</h2>

<p>本ガイドで扱うプロパティは以下のとおりです。</p>

<ul>
 <li>{{cssxref("justify-content")}} — 全アイテムの主軸上の配置を制御する。</li>
 <li>{{cssxref("align-items")}} — 全アイテムの交差軸上の配置を制御する。</li>
 <li>{{cssxref("align-self")}} — 個別のフレックスアイテムごとに交差軸上の配置を制御する</li>
 <li>{{cssxref("align-content")}} — 仕様では「<ruby>フレックス行のパッキング<rp> (</rp><rt>packing flex lines</rt><rp>) </rp></ruby>」と説明されている。交差軸上でのフレックス行間の余白を制御する。</li>
</ul>

<p>また、 auto マージンがフレックスボックスでの位置合わせにどのように使えるかについても触れます。</p>

<div class="note">
<p><strong>メモ</strong>: フレックスボックスにおける各種の配置プロパティは、そのプロパティ定義専用の仕様である <a href="https://www.w3.org/TR/css-align-3/">CSS Box Alignment Level 3</a> にも記載されています。この仕様が最終的には Flexbox Level 1 仕様で定義しているプロパティの定義を置き換えることが想定されています。</p>
</div>

<h2 id="The_Cross_Axis" name="The_Cross_Axis">交差軸</h2>

<p><code>align-items</code> プロパティと <code>align-self</code> プロパティは、交差軸 (cross axis: <code>flex-direction</code> が <code>row</code> のときは列に沿った、または <code>flex-direction</code> が <code>column</code> のときは行に沿った軸) 上でのフレックスアイテムの配置を制御します。</p>

<p>もっとも単純なフレックスの例で、交差軸上の位置合わせを試してみましょう。<code>display: flex</code> をコンテナに設定すると、子要素はすべてフレックスアイテムになり、一行に配置されます。このフレックスアイテムはすべて、最も高さのあるアイテムと同じ高さになるように伸張しますので、最も高さのあるアイテムが交差軸上のアイテムの高さを定義することになります。フレックスコンテナーに高さが設定されている場合は、アイテム内のコンテンツの大きさにかかわらず、コンテナの高さまでアイテムが伸張します。</p>

<p><img alt="３つのアイテム中１つのアイテムにはほかのアイテムより高くなる要因となる追加のテキストが設定されている。" src="https://mdn.mozillademos.org/files/15628/align2.png" style="display: block; height: 131px; margin: 0px auto; width: 509px;"></p>

<p><img alt="３つのアイテムとも 200 ピクセルの高さをもつ" src="https://mdn.mozillademos.org/files/15629/align3.png" style="display: block; height: 207px; margin: 0px auto; width: 637px;"></p>

<p>アイテムが同じ高さになるのは、交差軸での配置を制御する <code>align-items</code> プロパティの初期値が <code>stretch</code> となっているためです。</p>

<p>アイテムの配置をコントロールするために、以下の値を使うことができます。</p>

<ul>
 <li><code>align-items: flex-start</code></li>
 <li><code>align-items: flex-end</code></li>
 <li><code>align-items: center</code></li>
 <li><code>align-items: stretch</code></li>
 <li><code>align-items: baseline</code></li>
</ul>

<p>以下の例では、<code>align-items</code> の値は <code>stretch</code> に設定されています。他の値についても試し、flex コンテナの中でそれぞれのアイテムが互いにどのように配置されるかを確認してください。</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/alignment/align-items.html", '100%', 520)}}</p>

<h3 id="Aligning_one_item_with_align-self" name="Aligning_one_item_with_align-self"><code>align-self</code> で個別のアイテムを位置合わせ</h3>

<p><code>align-items</code> プロパティはすべてのアイテムの <code>align-self</code> プロパティをまとめて設定します。つまり、<code>align-self</code> プロパティでは１つずつ個別のアイテムを対象として指定できます。<code>align-self</code> プロパティには、<code>align-items</code> プロパティに使えるすべての値と、それに加えてフレックスコンテナーで定義した値にリセットするための <code>auto</code> を使うことができます。</p>

<p>次の例では、フレックスコンテナーには <code>align-items: flex-start</code> を設定していて、これはアイテムを交差軸上の始点に揃えます。<code>first-child</code> セレクタを使って最初のアイテムを対象として、 <code>align-self: stretch</code> を設定しており、また別のアイテムを <code>selected</code> クラスで選択して <code>align-self: center</code> を設定してます。 <code>align-items</code> の値を変更したり、個別のアイテムの <code>align-self</code> の値を変更して、どのように動作するかを試してみてください。</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/alignment/align-self.html", '100%', 650)}}</p>

<h3 id="Changing_the_main_axis" name="Changing_the_main_axis">主軸の変更</h3>

<p>ここまでは、 <code>flex-direction</code> が <code>row</code> で、上から下へ書かれる言語の場合の動作を見てきました。これはつまり、主軸は横方向に行に沿ったものであり、一方で交差軸での配置はアイテムを上下に移動させるものとなります。</p>

<p><img alt="３つのアイテムがあり、一つ目は flex-start、二つ目は center、三つ目は flex-end に配置されている。" src="https://mdn.mozillademos.org/files/15630/align4.png" style="display: block; height: 204px; margin: 0px auto; width: 671px;"></p>

<p><code>flex-direction</code> を <code>column</code> に変更した場合、<code>align-items</code> と <code>align-self</code> はアイテムの左右方向での位置合わせを行うようになります。</p>

<p><img alt="３つのアイテムがあり、一つ目は flex-start、二つ目は center、三つ目は flex-end に配置されている。水平方向の軸上で位置合わせされている。" src="https://mdn.mozillademos.org/files/15631/align5.png" style="display: block; height: 239px; margin: 0px auto; width: 687px;"></p>

<p>次の例では <code>flex-direction: column</code> を設定し、それ以外は先の例と全く同じフレックスコンテナーを使ってこの動作を示しています。</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/alignment/align-self-column.html", '100%', 730)}}</p>

<h2 id="Aligning_content_on_the_cross_axis_—_the_align-content_property" name="Aligning_content_on_the_cross_axis_—_the_align-content_property">交差軸上の位置合わせ — align-content プロパティ</h2>

<p>ここまで、フレックスコンテナーによって定義される領域の中で、アイテム全体またはアイテム個別の位置合わせをしてきました。折り返しのある複数行のフレックスコンテナーがある場合、<code>align-content</code> プロパティを使えば行間でのスペース分配を制御できます。仕様では、これは「<a href="https://drafts.csswg.org/css-flexbox/#align-content-property">フレックス行のパッキング (packing flex lines)</a>」として説明されています。</p>

<p><code>align-content</code> が有効に動作するためには、アイテムを表示するのに必要な高さよりもフレックスコンテナーの方が高い必要があります。このプロパティはすべてのアイテムを１つのセットとして扱い、あまりのスペースの扱いと、セットに含まれるアイテムの配置について指示します。</p>

<p><code>align-content</code> プロパティには以下の値を設定できます。</p>

<ul>
 <li><code>align-content: flex-start</code></li>
 <li><code>align-content: flex-end</code></li>
 <li><code>align-content: center</code></li>
 <li><code>align-content: space-between</code></li>
 <li><code>align-content: space-around</code></li>
 <li><code>align-content: stretch</code></li>
 <li><code>align-content: space-evenly</code> (フレックスボックス仕様には含まれていない)</li>
</ul>

<p>以下の例では、フレックスコンテナーは 400 ピクセルの高さで、アイテムを表示するのに必要な高さよりも高くなっています。 <code>align-content</code> の値は <code>space-between</code> で、この場合は残る分配可能スペース (available space) はフレックス行の<em>間に</em>分配され、フレックス行自体はコンテナの交差軸上の始点と終点に密着して配置されます。</p>

<p><code>align-content</code> プロパティがどのように働くか、ほかの値を設定して確認してください。</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/alignment/align-content.html", '100%', 850)}}</p>

<p>列に沿った軸の時にこのプロパティの効果がどのように変わるか、<code>flex-direction</code> を <code>column</code> に変更した場合について確認してください。変更前と同様に、すべてのアイテムを表示した上で、十分に余っているスペースが交差軸上に必要です。</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/alignment/align-content-column.html", '100%', 860)}}</p>

<div class="note">
<p><strong>注</strong>: <code>space-evenly</code> はフレックスボックス仕様書では定義されておらず、あとからボックス配置仕様書に追加されたものです。この値に対するブラウザーの互換性は、フレックスボックス仕様書に定義されている他の値より遅れています。</p>
</div>

<p>上述の値についての詳細とブラウザー対応状況については <a href="/ja/docs/Web/CSS/justify-content">MDN の <code>justify-content</code> のページ</a>を参照してください。</p>

<h2 id="Aligning_content_on_the_main_axis" name="Aligning_content_on_the_main_axis">主軸上での位置合わせ</h2>

<p>ここまで交差軸上での位置合わせがどのように動くかを見てきましたが、ここでは主軸上での位置合わせについて見ていきます。使えるプロパティは <code>justify-content</code> の一つだけです。アイテムは主軸上ではグループとしてのみ扱われるため、プロパティも一種類となります。 <code>justify-content</code> では、アイテムを表示するのに必要な分よりも大きいスペースがある場合の分配可能スペースの扱いを制御できます。</p>

<p>コンテナに <code>display: flex</code> を設定した最初の例では、アイテムはコンテナの始点に一行に整列して表示されます。これは <code>justify-content</code> の初期値が <code>flex-start</code> であるためです。すべての分配可能スペースはアイテムの後ろに置かれます。</p>

<p><img alt="３つの 100 ピクセル幅のアイテムが 500 ピクセル幅のコンテナ内にある。分配可能スペースはアイテムの後ろに置かれる。" src="https://mdn.mozillademos.org/files/15632/align6.png" style="display: block; height: 198px; margin: 0px auto; width: 528px;"></p>

<p><code>justify-content</code> プロパティは <code>align-content</code> と同じ値を受け付けます。</p>

<ul>
 <li><code>justify-content: flex-start</code></li>
 <li><code>justify-content: flex-end</code></li>
 <li><code>justify-content: center</code></li>
 <li><code>justify-content: space-between</code></li>
 <li><code>justify-content: space-around</code></li>
 <li><code>justify-content: stretch</code></li>
 <li><code>justify-content: space-evenly</code> (フレックスボックス仕様書には含まれていない)</li>
</ul>

<p>次の例では、 <code>justify-content</code> の値は <code>space-between</code> となっています。アイテムを表示した後に余った分配可能スペースは、アイテムの間に分配されます。左右の端のアイテムはそれぞれ始点と終点に揃えて並びます。</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/alignment/justify-content.html", '100%', 480)}}</p>

<p><code>flex-direction</code> が <code>column</code> に設定されて主軸がブロック方向となっているとき、<code>justify-content</code> はフレックスコンテナー内の分配可能なスペースがあれば、アイテム間にその方向にそってスペースを分配します。</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/alignment/justify-content-column.html", '100%', 880)}}</p>

<h3 id="Alignment_and_Writing_Modes" name="Alignment_and_Writing_Modes">配置と書字方向</h3>

<p>上述の配置方法において、<code>flex-start</code> と <code>flex-end</code> はいずれも writing mode に対応したものとなります。<code>justify-content</code> の値が <code>flex-start</code> で、書字方向が英語のように左から右であれば、アイテムはコンテナーの左端から並べられます。</p>

<p><img alt="３つのアイテムは左側に並んでいる" src="https://mdn.mozillademos.org/files/15638/Basics5.png" style="display: block; height: 152px; margin: 0px auto; width: 631px;"></p>

<p>一方で writing mode がアラビア語のように右から左であれば、アイテムはコンテナの右端から並べられます。</p>

<p><img alt="３つのアイテムは右側から並んでいる" src="https://mdn.mozillademos.org/files/15639/Basics6.png" style="display: block; height: 152px; margin: 0px auto; width: 634px;"></p>

<p>以下の例ではフレックスアイテムを右から左に並べるために <code>direction</code> プロパティを <code>rtl</code> を設定しています。この設定を削除したり <code>justify-content</code> の値を変更するなどして、行が右から始まる場合のフレックスボックスの動作を確認してください。</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/alignment/justify-content-writing-mode.html", '100%', 440)}}</p>

<h2 id="Alignment_and_flex-direction" name="Alignment_and_flex-direction">配置と flex-direction</h2>

<p><code>flex-direction</code> プロパティを変更した場合にも、始点は変わります。例えば<code>row</code> の代わりに <code>row-reverse</code> を設定した場合などがこれにあたります。</p>

<p>次の例では、<code>flex-direction: row-reverse</code> と <code>justify-content: flex-end</code> を設定してアイテムをレイアウトしています。左から右の言語では、すべてのアイテムは左側に並びます。<code>flex-direction: row-reverse</code> の値を <code>flex-direction: row</code> に変更してみてください。アイテムが右側に移動することがわかります。</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/alignment/justify-content-reverse.html", '100%', 440)}}</p>

<p>こうした動作はすこし紛らわしいかもしれませんが、覚えておくべき原則として、何かを変更しない限りは、文書の言語において単語が配置される方向にインライン軸・行方向の軸に沿ってフレックスアイテムが配置されます。<code>flex-start</code> は文の中でテキストが始まる側を示すことになります。</p>

<p><img alt="左から始まり右で終わることを示す図" src="https://mdn.mozillademos.org/files/15634/align8.png" style="display: block; height: 152px; margin: 0px auto; width: 631px;"></p>

<p><code>flex-direction: column</code> を使うことで、アイテムの配置方向を文書の言語におけるブロック方向に変更することもできます。この場合は <code>flex-start</code> は段落が始まる先頭を示すことになります。</p>

<p><img alt="上から始まり下で終わることを示す図" src="https://mdn.mozillademos.org/files/15636/align10.png" style="display: block; height: 273px; margin: 0px auto; width: 709px;"></p>

<p>flex-direction を逆方向に設定した場合、軸の終点側から文書の言語において単語が書かれる方向と逆方向にレイアウトされます。<code>flex-start</code> はその軸の終点側、つまりインライン方向では行を折り返す側、ブロック方向では最後の文が終わる側を示すことになります。</p>

<p><img alt="右から始まり左で終わることを示す図" src="https://mdn.mozillademos.org/files/15635/align9.png" style="display: block; height: 152px; margin: 0px auto; width: 631px;"></p>

<p><img alt="下から始まり上で終わることを示す図" src="https://mdn.mozillademos.org/files/15637/align11.png" style="display: block; height: 273px; margin: 0px auto; width: 709px;"></p>

<h2 id="主軸上での位置合わせに_auto_マージンを使う">主軸上での位置合わせに auto マージンを使う</h2>

<p>主軸上ではアイテムは一つのグループとして扱われるため、<code>justify-items</code> プロパティや <code>justify-self</code> プロパティに相当するものはありません。しかし、フレックスボックスと併せて auto マージンを使ってアイテム毎の位置合わせをすれば、個別のアイテムまたは一部アイテムのグループを他のアイテムから分離して配置することができます。</p>

<p>よくあるパターンは、ナビゲーションバーでいくつかのキーアイテムが右に配置され、メイングループは左に配置されるようなものです。このようなケースは <code>justify-self</code> プロパティの使いどころだと思われるでしょうが、以下の図について考えてみましょう。３つのアイテムが片方にあり、もう一方に２つのアイテムがあります。もし仮に <code>justify-self</code> がアイテム <em>d</em> に対して使えたとすると、意図したものであってもそうでなくても、それに続くアイテム <em>e</em> の配置も変わってしまうでしょう (訳註: プロパティ名で self = 自分自身と言っているのに他のアイテムにも影響を与えてしまう)。</p>

<p><img alt="２つのグループに分かれた５つのアイテム。３つは左側にあり、２つは右側にある。" src="https://mdn.mozillademos.org/files/15633/align7.png" style="display: block; height: 84px; margin: 0px auto; width: 645px;"></p>

<p>4 つめのアイテムに対して <code>justify-content</code> ではなく <code>margin-left</code> に <code>auto</code> を設定すれば、先頭の３つから分離できます。auto マージンはマージンの方向に沿ったスペースをすべて占有しようとしますが、これは左右に auto マージンを設定して要素をブロック内で中央そろえするときと同じです。両側のマージンが取れるだけのスペースをとろうとするために、ブロックが中央に押し出されることになります。</p>

<p>以下の例では、最小限のフレックス設定をして一行に並べたフレックスアイテムと、<code>margin-left: auto</code> を設定した <code>push</code> クラスを定義しています。このクラスを削除したり他のアイテムに追加して、どのような動作をするのか確かめてください。</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/alignment/auto-margins.html", '100%', 470)}}</p>

<h2 id="Future_alignment_features_for_Flexbox" name="Future_alignment_features_for_Flexbox">フレックスボックスの配置機能の将来</h2>

<p>この記事のはじめに、配置プロパティは flexbox Level 1 仕様と、将来的にプロパティや設定値を拡張する可能性のある Box Alignment Level 3 仕様のいずれにも含まれていることを述べました。その一例として、 <code>align-content</code> と <code>justify-content</code> プロパティに <code>space-evenly</code> が導入されていることも紹介しました。</p>

<p>ボックス配置モジュールは、他にも <code>column-gap</code> や <code>row-gap</code> といった、アイテムの間にスペースを作るための方法を含んでいます (<a href="/ja/docs/Web/CSS/CSS_Grid_Layout">CSS Grid Layout</a> にて説明しています)。これらのプロパティがボックス配置に含まれているということは、将来的に <code>column-gap</code> や <code>row-gap</code> がフレックスレイアウトでも使用できるようになることを示しており、 Firefox 63 はフレックスレイアウトに gap のプロパティを初めて実装したブラウザーになるでしょう。</p>

<p>フレックスボックスでの配置について深く学ぼうとする際には、グリッドレイアウトと並べて見ることをおすすめします。いずれの仕様もボックス配置仕様書で詳細化されている配置プロパティを使っています。これらのプロパティがグリッドの場合にどのようにはたらくかについては、 MDN の記事 <a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout">グリッドレイアウトでのボックス配置</a>を参照してください。また、筆者 (訳注: 英語版の作成者 <a href="/profiles/rachelandrew">rachelandrew</a>) は各仕様における位置合わせの動作について <a href="https://rachelandrew.co.uk/css/cheatsheets/box-alignment">Box Alignment Cheatsheet</a> で比較しています。</p>

<h2 id="See_Also" name="See_Also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/CSS/CSS_Box_Alignment">ボックス配置</a></li>
 <li><a href="/ja/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox">フレックスボックスでのボックス配置</a></li>
 <li><a href="/ja/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_In_Grid_Layout">グリッドレイアウトでのボックス配置</a></li>
</ul>
