---
title: フレックスボックスの典型的な使用例
slug: Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox
tags:
  - CSS
  - Flexible Box
  - Guide
  - common uses
  - flexbox
  - patterns
translation_of: Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox
---
<p>{{CSSRef}}</p>

<p class="summary">このガイドでは、フレックスボックスの一般的な使用例を紹介します。 — 他のレイアウト方法よりも適した使い方です。</p>

<h2 id="Why_choose_flexbox" name="Why_choose_flexbox">なぜフレックスボックスを選ぶのか？</h2>

<p>ブラウザーが完全対応しているならば、アイテムの集まりをある方向へ並べる用途にはフレックスボックスが適しています。アイテムを並べる際には、コンテナの内部でのアイテムの寸法や、アイテム同士の余白を調節したくなると思います。フレックスボックスはそのような用途のために設計されています。フレックスボックスと CSS グリッドレイアウトとの違いについては <a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Relationship_of_Flexbox_to_Other_Layout_Methods">フレックスボックスと他のレイアウト方法の関係</a> をご覧ください。そこでは、フレックスボックスが CSS レイアウトの全体像にどのように適合しているのかを説明しています。</p>

<p>現状では、グリッドレイアウトのほうが適しているけれどもそれを使えない、という場面でもフレックスボックスはよく使われます。また、アイテムを整列する手段としても使われます。これは、Box Alignment がブロック要素のレイアウト方法として実装されれば解決するでしょう。このガイドでは、現状での典型的なフレックスボックスの使用例を紹介します。</p>

<h2 id="Navigation" name="Navigation">ナビゲーション</h2>

<p>ナビゲーションのよくあるパターンとして、水平な棒状にリストを表示するというものがあります。このパターンは見た目とは裏腹に、フレックスボックスの登場以前は実現が難しいものでした。フレックスボックスならばとても簡単であり、うってつけの出番だと言えます。</p>

<p>アイテムを水平に表示する際に、空白が必要になる場合があります。その空白をどうするか。2 つの選択肢があります。アイテムの外側に置く場合は、アイテム同士の間やアイテムの周囲に空白を配置することになります。アイテムの内側に入れる場合は、アイテムが空白を受け入れてサイズが広がるようにする方法が必要です。</p>

<h3 id="Space_distributed_outside_the_items" name="Space_distributed_outside_the_items">空白を外側に配置</h3>

<p>アイテム間や周囲に空白を置くには、フレックスボックスの整列系のプロパティと {{cssxref("justify-content")}} プロパティを使います。このプロパティの詳細については <a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container">フレックスコンテナにおけるアイテムの位置合わせ</a> をご覧ください。そこでは、主軸 (横軸) でのアイテムの整列について説明しています。</p>

<p>下記のライブサンプルでは、アイテムをそれぞれ本来のサイズで表示しています。また、<code>justify-content: space-between</code> によって、同じ幅の空白をアイテム同士の間に配置しています。値に <code>space-around</code> や、ブラウザーが対応している場合は <code>space-evenly</code> を指定することで、空白の配置方法を変えることができます。<code>flex-start</code> で空白をアイテム群の後ろに配置し、<code>flex-end</code> で空白をアイテム群の前に配置し、<code>center</code> でアイテム群をナビゲーションの中央に配置することもできます。</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/use-cases/navigation.html", '100%', 550)}}</p>

<h3 id="Space_distributed_within_the_items" name="Space_distributed_within_the_items">空白を内側に配置</h3>

<p>ナビゲーションでの別のパターンは、空白をアイテム同士の間ではなく、アイテム自身の内部に配置することです。この場合は、<a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax">Flex アイテムを主軸に沿わせる時の制御割合</a> に書かれているように、{{cssxref("flex")}} プロパティを使うことで、アイテムを互いの比率を保ったまま伸縮できます。</p>

<p>ナビゲーションのアイテムの幅を同じにしたいなら、<code>flex: auto</code> を指定します。これは <code>flex: 1 1 auto</code> の短縮版です。すべてのアイテムは自動の flex-basis をもとに伸縮します。つまり、他よりも中身が多いアイテムは、占める領域も他より多くなります。</p>

<p>下記のライブサンプルの <code>flex: auto</code> を <code>flex: 1</code> に変えてみてください。これは <code>flex: 1 1 0</code> の短縮版で、すべてのアイテムの幅が同じになります。なぜなら、flex-basis が 0 となって領域が均等に配分されるからです。</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/use-cases/navigation-flex.html", '100%', 550)}}</p>

<h2 id="Split_navigation" name="Split_navigation">ナビゲーションの分割</h2>

<p>主軸 (横軸) でアイテムを整列するもうひとつの方法は、自動マージンを使うことです。これにより、一方のアイテム群を左揃えにして別のアイテム群を右揃えにする、というナビゲーションバーのデザインパターンが可能になります。</p>

<p>下記の例では、<a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container#Using_auto_margins_for_main_axis_alignment">主軸上での位置合わせに auto マージンを使う</a> に書かれている自動マージンの技法を使っています。アイテムは <code>flex-start</code> によって主軸上に揃えられます。これはフレックスボックスの既定の挙動です。そして、左マージンに auto を指定することで、そのアイテムだけは右に揃えられます。分割される地点を変えるには、CSSクラス "push-right" を別のアイテムに移してください。</p>

<p>下記の例では、フレックスアイテムにマージンを指定して、アイテム間の空白を作っています。また、フレックスコンテナにネガティブマージンを指定して、コンテナの幅いっぱいにアイテムを表示するようにしています。Box Alignment の仕様にある <code>gap</code> プロパティがフレックスボックスに実装されるまでは、このようにマージンを使う必要があります。</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/use-cases/split-navigation.html", '100%', 550)}}</p>

<h2 id="Center_item" name="Center_item">アイテムの中央揃え</h2>

<p>フレックスボックスの登場以前、開発者たちは「Webデザインで最も難しいのは垂直方向の中央揃えだ」と冗談を言っていました。今では、下記のライブサンプルのとおり、フレックスボックスの整列系のプロパティで簡単にできます。</p>

<p>下記のコード内の <code>center</code> の代わりに、先頭に揃える <code>flex-start</code> や末尾に揃える <code>flex-end</code> を指定して、整列の挙動を試してみてください。</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/use-cases/center.html", '100%', 700)}}</p>

<p>将来、Box Alignment の各プロパティがブロック要素のレイアウト方法として完全に実装されれば、単一のアイテムの中央揃えのためにフレックスコンテナを作る必要はなくなります。しかし現状では、1 つのものを別のものの中で正確に中央に配置したければ、フレックスボックスを使うことになります。上記の例のように、コンテナをフレックスコンテナとして扱ってフレックスコンテナに <code>align-items</code> を指定するか、フレックスアイテム自身に <code>align-self</code> を指定してください。</p>

<h2 id="Card_layout_pushing_footer_down" name="Card_layout_pushing_footer_down">フッターが下端に張り付くカード</h2>

<p>フレックスボックスや CSS グリッドを使ってコンテナ内のカード状の部品を並べて配置する場合、それらの制御はコンテナの直下の要素であるカード自身にしか及びません。どういうことかと言うと、各カードの中身の量が異なる場合、カードはグリッドエリアやフレックスコンテナの高さに引き伸ばされます。そして、カードの内部では通常のブロックレイアウトが用いられます。つまり、中身の量が少ないカードでは、カードのフッターはカードの下端に張り付くのではなく、フッターが下端から浮き上がってしまいます。</p>

<p><img alt="Two card components showing that the internals of the component do not stretch with the wrapper." src="https://mdn.mozillademos.org/files/15669/flex-cards.png" style="height: 626px; width: 964px;"></p>

<p>フレックスボックスはこれを解決できます。カード自身もフレックスコンテナにして、{{cssxref("flex-direction")}}<code>: column</code> を指定します。そしてカードの本文エリアに <code>flex: 1</code> を指定します。これは <code>flex: 1 1 0</code> の短縮版です。アイテムは <code>0</code> の flex-basis をもとに伸縮します。引き伸ばせるフレックスアイテムが本文エリアだけの場合、本文エリアはフレックスコンテナ内の空白をすべて取り込み、フッターを下端に張り付かせます。ライブサンプルから <code>flex</code> プロパティを削除すると、フッターが本文の真下に移動するのを確認できます。</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/use-cases/cards.html", '100%', 800)}}</p>

<h2 id="Media_objects" name="Media_objects">メディアオブジェクト</h2>

<p>メディアオブジェクトはWebデザインの一般的なパターンです。このパターンは画像などを左側に持ち、文章をもう右側に持ちます。理想的には、メディアオブジェクトを反転させて画像を左から右へ移すことができるようにすべきでしょう。</p>

<p>このようなパターンはどこでも見かけます。コメント欄や、画像とその説明を表示する場合などです。フレックスボックスならば、メディアオブジェクトの画像エリアには画像の寸法そのままの領域を確保させて、余った領域はすべて文章エリアに使わせるという柔軟な指定ができます。</p>

<p>下記のライブサンプルはメディアオブジェクトの例です。整列系のプロパティを使ってアイテムを交差軸 (縦軸) の <code>flex-start</code> に揃えて、<code>.content</code> を指定したフレックスアイテムに <code>flex: 1</code> を指定しています。先述のカード内の縦方向の配置と同じく、<code>flex: 1</code> はその要素を引き伸ばせることを意味します。</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/use-cases/media.html", '100%', 600)}}</p>

<p>下記のような、メディアオブジェクトの実用でよくある場面を、上記のライブサンプルで試してみたくなりませんか？</p>

<p>画像が大きくなりすぎるのを防ぐには、{{cssxref("max-width")}} を画像に指定します。画像エリアのフレックスボックスの指定は初期値のままなので、縮むことはできますが伸びることはできません。また、初期値では <code>flex-basis</code> は auto なので、画像の {{cssxref("width")}} や max-width が <code>flex-basis</code> となります。</p>

<pre class="brush: css">.image img {
  max-width: 100px;
}
</pre>

<p>両方のエリアの比率を維持したまま伸縮させることもできます。両者に <code>flex: 1</code> を指定すると、0 の {{cssxref("flex-basis")}} をもとに伸縮することになります。つまり両者の幅は同じになります。両者の比率を中身の量で決めるために <code>flex: auto</code> を指定することもできます。その場合は、中身のサイズに応じて、または画像の width ようにフレックスアイテムに直接適用されるサイズに応じて伸縮します。</p>

<pre class="brush: css">.media .content {
  flex: 1;
  padding: 10px;
}

.image {
  flex: 1;
}</pre>

<p>両者に別々の {{cssxref("flex-grow")}} の比率を指定することもできます。例えば画像エリアには <code>flex: 1</code>、文章エリアには <code>flex: 3</code> というように。これは、両者に <code>0</code> の <code>flex-basis</code> が適用されますが、指定された <code>flex-grow</code> に従って別々の比率で領域が確保されることを意味します。このように使用される flex プロパティについては、<a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax">Flex アイテムを主軸に沿わせる時の制御割合</a> で詳しく説明されています。</p>

<pre class="brush: css">.media .content {
  flex: 3;
  padding: 10px;
}

.image {
  flex: 1;
}</pre>

<h3 id="Flipping_the_media_object" name="Flipping_the_media_object">メディアオブジェクトを反転させる</h3>

<p>画像が右で文章が左になるようにメディアオブジェクトの表示を切り替えるには、<code>flex-direction</code> プロパティに <code>row-reverse</code> を指定します。下記のライブサンプルでは、<code>.flipped</code> のクラスを <code>.media</code> の隣に追加することで実現しています。HTML からそのクラスを削除すれば、どのように表示が変わるのかが分かるでしょう。</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/use-cases/media-flipped.html", '100%', 650)}}</p>

<h2 id="Form_controls" name="Form_controls">フォームコントロール</h2>

<p>フレックスボックスはフォームコントロールのスタイル指定に関しては特に便利です。フォームにはマークアップと小さな要素がたくさんあり、それらを整列させたいと考えるはずです。よくあるパターンは {{htmlelement("input")}} 要素と {{htmlelement("button")}} の組み合わせでしょう。検索フォームや、単に訪問者にメールアドレスを入力してもらう用途などで使われます。</p>

<p>フレックスボックスならばこのようなレイアウトを簡単に実現できます。下記の例では、枠線と <code>display: flex</code> を指定したラッパーの中に <code>&lt;button&gt;</code> と <code>&lt;input&gt;</code> フィールドを入れています。<code>&lt;input&gt;</code> フィールドを引き伸ばすために flex プロパティを使っています。ただし、ボタンは引き伸ばされません。つまり、確保できる領域の変化に応じて伸縮する入力欄を備えたフォーム部品を実現できます。</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/use-cases/input-button.html", '100%', 550)}}</p>

<p>ボタンを右側に置いたのと同じように、ラベルやアイコンを左側に置くことも簡単にできます。今回はラベルを置きました。背景色以外は、何もレイアウトを変更していません。伸縮する入力欄は少し狭くなるものの、2 つのアイテムが取った残りの領域をすべて使うことになります。</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/use-cases/label-input-button.html", '100%', 550)}}</p>

<p>このようなパターンのおかげで、デザインに合わせたフォーム要素のライブラリを簡単に作れます。要素の追加にも簡単に対応できます。伸縮するアイテムとしないアイテムを組み合わせる用途では、フレックスボックスの柔軟性の恩恵を存分に受けることができるのです。</p>

<h2 id="Conclusion" name="Conclusion">終わりに</h2>

<p>上に挙げたパターンを見て回るうちに、フレックスボックスの最適な利用場面を考え始めたことと思います。いろいろな選択肢があることでしょう。伸縮するアイテムとしないアイテムを組み合わせたり、フレックスアイテムの中身のサイズをフレックスアイテム自身に反映させたり、比率に沿ってフレックスボックスの領域を分け合ったり。すべてはあなた次第です。</p>

<p>コンテンツの最適な表現方法を思い描いてみてください。そしてその実現にあたって、フレックスボックスや他のレイアウト方法をどのように利用できるのかを調べてみてください。</p>
