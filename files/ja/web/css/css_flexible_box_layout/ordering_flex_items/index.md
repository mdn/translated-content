---
title: フレックスアイテムの並べ替え
slug: Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items
tags:
  - Accessibility
  - CSS
  - Flex
  - Guide
  - direction
  - flexbox
  - order
  - reverse
translation_of: Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items
---
<p>{{CSSRef}}</p>

<p>フレックスボックスやグリッドといった新しいレイアウト方法には、コンテンツの順序を制御する機能があります。この記事では、フレックスボックスを使っている場合にコンテンツの見た目上の順序を変更する方法についてみていきます。またアクセシビリティの観点における、アイテム順の変更による影響についても考察します。</p>

<h2 id="Reverse_the_display_of_the_items" name="Reverse_the_display_of_the_items">アイテムを逆順に表示する</h2>

<p>{{cssxref("flex-direction")}} プロパティは以下の４つの値から一つを設定できます。</p>

<ul>
 <li><code>row</code></li>
 <li><code>column</code></li>
 <li><code>row-reverse</code></li>
 <li><code>column-reverse</code></li>
</ul>

<p>上２つの値は、アイテムの順序を文書のソースに現れる順と同じ順序で、始点から連続して表示します。</p>

<p><img alt="左から始まり一行に表示されるアイテム" src="https://mdn.mozillademos.org/files/15649/Basics1.png" style="display: flex; height: 152px; margin: 0px auto; width: 522px;"></p>

<p><img alt="上から始まり一列に表示されるアイテム" src="https://mdn.mozillademos.org/files/15650/align10.png" style="display: flex; height: 273px; margin: 0px auto; width: 709px;"></p>

<p>下２つの値は始点と終点を入れ替えて、アイテムを逆順に表示します。</p>

<p><img alt="右側から逆順に表示されるアイテム" src="https://mdn.mozillademos.org/files/15651/align9.png" style="display: flex; height: 152px; margin: 0px auto; width: 631px;"></p>

<p><img alt="下側から逆順に一列に表示されるアイテム" src="https://mdn.mozillademos.org/files/15652/align11.png" style="display: flex; height: 273px; margin: 0px auto; width: 709px;"></p>

<p>始点は書字方向に応じて変わるということを思い出してください。先ほどの例のうち行についてのものは、<code>row</code> と <code>row-reverse</code> が英語のような左から右の言語においてどのように作用するかを示しています。アラビア語のような右から左の言語を使用している場合には、<code>row</code> では右から始まり <code>row-reverse</code> では左から始まります。</p>

<p><img alt="アラビア文字の場合に row が右から始まり、 row-reverse では左から始まることを示すフレックスコンテナー" src="https://mdn.mozillademos.org/files/15647/order-rtl.png" style="display: flex; height: 302px; margin: 0px auto; width: 528px;"></p>

<p>これは、アイテムが<em>表示上</em>でのみ逆順になるという点に注意が必要ではあるものの、アイテムを逆順に表示するための素晴らしい方法にみえます。この点については仕様の中で以下の様に触れられています。</p>

<blockquote>
<p>“Note: The reordering capabilities of flex layout intentionally affect only the visual rendering, leaving speech order and navigation based on the source order. This allows authors to manipulate the visual presentation while leaving the source order intact for non-CSS UAs and for linear models such as speech and sequential navigation.” - <a href="https://www.w3.org/TR/css-flexbox-1/#flow-order">Ordering and Orientation</a></p>

<p>(注：フレックスレイアウトの順序変更の機能は、意図的に表示のレンダリングにのみ影響するようになっており、読み上げの順序やナビゲーションがソースコード順に従うという挙動には影響しません。これにより作成者は、CSS 非対応の UA や読み上げや逐次ナビゲーションといった線形のモデルをソースの順序に保ったまま、視覚表現についての操作をすることができるようになります。 <a href="https://www.w3.org/TR/css-flexbox-1/#flow-order">Ordering and Orientation</a> より引用)</p>
</blockquote>

<p>仮にアイテムがリンクなどのようなタブで移動できる要素であったとすると、その移動順は表示されている順序ではなく、文書のソースに現れる順となります。</p>

<p>逆順の値を設定しているときやそのほかの方法でアイテムの順序を変更している場合、本当にソース上で論理的な順序を変更しなくてよいか考慮する必要があります。仕様の中でも先ほどの注に続けて、ソースの問題を修正するために順序設定を利用するべきではないという記載があります。</p>

<blockquote>
<p>“Authors <em>must not</em> use order or the *-reverse values of flex-flow/flex-direction as a substitute for correct source ordering, as that can ruin the accessibility of the document.”</p>

<p>(文書のアクセシビリティを損なうため、order や flex-flow/flex-direction の <em>-reverse</em> 値をソース順序の修正の代用として利用してはいけません。)</p>
</blockquote>

<div class="note">
<p><strong>注</strong>: 数年間にわたって Firefox には、ブラウザーの挙動と異なりソース上の順序ではなく表示上の順序に従うというバグがありました。このバグは現在は修正されています。最新のユーザーエージェントは仕様に従っているものとして、常にソース上の順序を文書の論理的な順序として扱うべきです。</p>
</div>

<p>以下の例ではリンクからリンクにタブ移動した際に、どれがハイライトされているかわかりやすいように focus スタイルを加えています。<code>flex-direction</code> を使って表示順を変更した場合でも、タブ順序はソース上の順序に従って移動することがわかります。</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/order/order.html", '100%', 500)}}</p>

<p><code>flex-direction</code> の変更がナビゲーションの順序を変更しないのと同様に、描画の順序についても変更されることはありません。あくまでアイテムの表示上の順序が逆転するだけです。</p>

<h2 id="The_order_property" name="The_order_property">order プロパティ</h2>

<p>フレックスアイテムが表示される順序を逆転することができましたが、それに加えて {{cssxref("order")}} プロパティを使用することでアイテム個別に表示される順序を変更することができます。</p>

<p><code>order</code> プロパティはアイテムのレイアウトを<em>数字で順序づけたグループ</em>にレイアウトするよう設計されています。つまりアイテムはグループ内での順序を表す整数に割り当てられ、その数字が小さい順に表示されるということです。同じ数字が複数のアイテムに割り当てられているときは、ソース上に現れる順に表示されます。</p>

<p>例として、５つのアイテムに対して以下のように <code>order</code> を割り当てます。</p>

<ul>
 <li>ソース上で１番目のアイテム: <code>order: 2</code></li>
 <li>ソース上で２番目のアイテム: <code>order: 3</code></li>
 <li>ソース上で３番目のアイテム: <code>order: 1</code></li>
 <li>ソース上で４番目のアイテム: <code>order: 3</code></li>
 <li>ソース上で５番目のアイテム: <code>order: 1</code></li>
</ul>

<p>このときアイテムは以下の順序でページ上に表示されます。</p>

<ul>
 <li>ソース上で３番目のアイテム: <code>order: 1</code></li>
 <li>ソース上で５番目のアイテム: <code>order: 1</code></li>
 <li>ソース上で１番目のアイテム: <code>order: 2</code></li>
 <li>ソース上で２番目のアイテム: <code>order: 3</code></li>
 <li>ソース上で４番目のアイテム: <code>order: 3</code></li>
</ul>

<p><img alt="ソース上の順序を示す番号を表示している順序変更されたアイテム" src="https://mdn.mozillademos.org/files/15653/order-property.png" style="display: flex; height: 100px; margin: 0px auto; width: 634px;"></p>

<p>以下の例で値を変更して、表示順がどのように変わるか試してみてください。また <code>flex-direction</code> を <code>row-reverse</code> に変えたときに何が起こるか、つまり始点が変わるために反対側から並べられることを確かめましょう。</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/order/flex-direction.html", '100%', 440)}}</p>

<p>フレックスアイテムのデフォルトの <code>order</code> は <code>0</code> です。したがって 0 より大きい <code>order</code> をもつアイテムは、明示的に <code>order</code> を指定されていないアイテムの後ろに表示されます。</p>

<p><code>order</code> には負の値を指定することもでき、ほかのアイテムはそのままの順序を保ちながら一つのアイテムだけを先頭に表示したい場合になどに有用です。先頭に表示したいアイテムに <code>order: -1</code> を設定することで、0 より小さい <code>order</code> のこのアイテムが常に先頭に表示されるようになります。</p>

<p>以下の例では フレックスボックスを使ってレイアウトをしています。HTML の中で指定されている <code>active</code> クラスを別のアイテムに付け替えることで、レイアウトの先頭に幅すべてを使って表示されるアイテムを変更することができ、残りのアイテムは次の行に表示されるようになります。</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/order/negative-order.html", '100%', 520)}}</p>

<p>アイテムは仕様の中で <em>order-modified document order</em> として述べられているものに従って表示されます。アイテムが表示される前に、<code>order</code> プロパティの値が考慮されます。</p>

<p><code>order</code> はアイテムの描画順についても変更します。<code>order</code> の値が小さいものから先に描画され、大きくなる順に描画されていきます。</p>

<h2 id="The_order_property_and_accessibility" name="The_order_property_and_accessibility">order プロパティとアクセシビリティ</h2>

<p><code>order</code> プロパティの使用は、<code>flex-direction</code> による方向の変更と同様のアクセシビリティに対する影響があります。<code>order</code> は描画の順序および表示上の順序を変更しますが、逐次的なナビゲーションの順序は変更しません。そのため、もしユーザーがアイテム間の移動をタブによって行った場合、レイアウト中を混乱するような動作で飛び回っているように見えるでしょう。</p>

<p>この記事中の例でタブ移動を試すことで、<code>order</code> がポインティングデバイスを使わないユーザーにおかしな経験をさせてしまう可能性があることがわかるでしょう。表示上の順序と論理的な順序の分断とそれによって起こりうるアクセシビリティの問題についてさらに理解するためには、以下のページを参照してください。</p>

<ul>
 <li><a href="https://tink.uk/flexbox-the-keyboard-navigation-disconnect/">Flexbox and the keyboard navigation disconnect</a></li>
 <li><a href="http://adrianroselli.com/2015/10/html-source-order-vs-css-display-order.html">HTML Source Order vs CSS Display Order</a></li>
 <li><a href="https://alastairc.ac/2017/06/the-responsive-order-conflict">The Responsive Order Conflict for Keyboard Focus</a></li>
</ul>

<h2 id="Use_cases_for_order" name="Use_cases_for_order">order の利用場面</h2>

<p>フレックスアイテムの論理的な順序、そして読むときの順序が表示上の順序と分かれていることが役に立つ場合があります。気をつけて使えば <code>order</code> プロパティは、いくつかのよくあるパターンを簡単に実装するために役に立ちます。</p>

<p>例えばニュース記事を表示するカードのデザインがあったとします。ニュースの見出しはハイライトされる重要なもので、またユーザーが読みたいものを探すためにタブでほかの見出しからジャンプする対象となる要素でもあります。カードには日付もあり、作りたいデザインは以下のようなものであるとします。</p>

<p><img alt="日付が先頭にあり、見出しと本文がそれに続いているデザインコンポーネント" src="https://mdn.mozillademos.org/files/15648/order-card.png" style="height: 400px; width: 618px;"></p>

<p>表示上では日付が見出しの上に現れています。しかしスクリーンリーダーによって読み上げられるときには、タイトルが先に読まれて日付はその後が望ましいと思っているとします。こういったことを <code>order</code> プロパティで実現することができます。</p>

<p>カードをフレックスコンテナーとして、<code>flex-direction</code> を <code>column</code> に設定します。そして、日付に <code>order: -1</code> を設定します。これによって見出しの上に日付を引き上げることができます。</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/order/usecase-order.html", '100%', 730)}}</p>

<p>この例のような細かな調整は <code>order</code> プロパティを使うのにふさわしい状況です。読むためやタブ移動のための論理的な順序を保ち、アクセシビリティと構造化された形を維持してください。そして <code>order</code> プロパティは純粋に視覚的なデザインの調整のために使ってください。その際にはユーザーがキーボードでタブ移動をする対象となるアイテムの順序変更をしていないか留意してください。特に比較的新しいレイアウトを使うときには、マウスやタッチスクリーンではなく、キーボードのみによるサイト操作の確認を確実にテストに含めた方がよいでしょう。そのテストで、開発時の選択がコンテンツの移動を難しくしてしまっているかどうか、すぐにわかるようになるでしょう。</p>
