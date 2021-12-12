---
title: フレックスボックス
slug: Learn/CSS/CSS_layout/Flexbox
tags:
  - Article
  - Beginner
  - CSS
  - CSS layouts
  - CodingScripting
  - Flexible Boxes
  - Guide
  - Layout
  - Layouts
  - Learn
  - flexbox
translation_of: Learn/CSS/CSS_layout/Flexbox
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/CSS/CSS_layout/Normal_Flow", "Learn/CSS/CSS_layout/Grids", "Learn/CSS/CSS_layout")}}</div>

<p class="summary"><span class="seoSummary"><a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout">フレックスボックス</a>（Flexbox）は、項目を行または列にレイアウトするための1次元のレイアウト方法です。 項目は追加のスペースを埋めるためにたわみ、小さいスペースに収まるように縮小します。 この記事では、すべての基本事項について説明します。</span></p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">前提知識:</th>
   <td>HTML の基本（<a href="/ja/docs/Learn/HTML/Introduction_to_HTML">HTML 入門</a>を学ぶ）、および CSS の機能の考え方（<a href="/ja/docs/Learn/CSS/Introduction_to_CSS">CSS 入門</a>を学ぶ）。</td>
  </tr>
  <tr>
   <th scope="row">学習目標:</th>
   <td>フレックスボックス・レイアウトシステムを使用してウェブのレイアウトを作成する方法を習得する。</td>
  </tr>
 </tbody>
</table>

<h2 id="Why_Flexbox" name="Why_Flexbox">なぜフレックスボックスなのか？</h2>

<p>長い間、CSS レイアウトを作成するために利用可能な唯一の信頼できるクロスブラウザー互換ツールは<a href="/ja/docs/Learn/CSS/CSS_layout/Floats">フロート</a>と<a href="/ja/docs/Learn/CSS/CSS_layout/Positioning">位置指定</a>のようなものでした。 これらは問題なく機能しますが、いくつかの点ではかなり限定的でイライラするものです。</p>

<p>次のような単純なレイアウト要件は、このようなツールを使用しても、便利で柔軟な方法で実現するのが困難または不可能です。</p>

<ul>
 <li>コンテンツのブロックをその親内で垂直方向に中央揃えにします。</li>
 <li>コンテナのすべての子が、使用可能な幅や高さに関係なく、使用可能な幅や高さについて等しい量を占めるようにします。</li>
 <li>複数列レイアウトのすべての列に、異なる量のコンテンツが含まれていても、同じ高さを採用するようにします。</li>
</ul>

<p>以降のセクションで見るように、フレックスボックスは多くのレイアウト作業をずっと簡単にします。 さあ始めましょう！</p>

<h2 id="Introducing_a_simple_example" name="Introducing_a_simple_example">簡単な例の紹介</h2>

<p>この記事では、フレックスボックスがどのように機能するのかを理解するのに役立つ一連の演習を進めていくようにします。 まず始めに、github リポジトリから最初のスターターファイル <a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/flexbox/flexbox0.html">flexbox0.html</a> のローカルコピーを作成し、最新のブラウザー（Firefox や Chrome など）にロードして、コードエディタでコードを確認してください。 ここでも<a href="http://mdn.github.io/learning-area/css/css-layout/flexbox/flexbox0.html">ライブを見る</a>ことができます。</p>

<p>内部に最上位の見出しを持つ {{htmlelement("header")}} 要素と、3つの {{htmlelement("article")}} を含む {{htmlelement("section")}} 要素があります。 これらを使用して、かなり標準的な3列のレイアウトを作成します。</p>

<p><img alt="" src="flexbox-example1.png" style="border-style: solid; border-width: 1px; display: block; height: 324px; margin: 0px auto; width: 800px;"></p>

<h2 id="Specifying_what_elements_to_lay_out_as_flexible_boxes" name="Specifying_what_elements_to_lay_out_as_flexible_boxes">柔軟な箱としてレイアウトする要素を指定</h2>

<p>まず最初に、どの要素を柔軟な箱（flexible box）としてレイアウトするかを選択する必要があります。 これを行うために、あなたが影響を与えたい要素の親要素に {{cssxref("display")}} の特別な値を設定します。 この場合、{{htmlelement("article")}} 要素をレイアウトしたいので、これを {{htmlelement("section")}} に設定します（これがフレックスコンテナになります）。</p>

<pre class="brush: css notranslate">section {
  display: flex;
}</pre>

<p>この結果は次のようになります。</p>

<p><img alt="" src="flexbox-example2.png" style="border-style: solid; border-width: 1px; display: block; height: 348px; margin: 0px auto; width: 800px;"></p>

<p>それで、このたった一つの宣言が必要なものすべてを与えてくれます — 信じられないでしょ？ 同じ幅の列を持つ複数列のレイアウトがあり、列の高さはすべて同じです。 これは、フレックス項目（フレックスコンテナの子）に与えられるデフォルト値が、このような一般的な問題を解決するために設定されているためです。 それらについての詳細は後で。</p>

<div class="note">
<p><strong>注</strong>: インライン項目を柔軟な箱としてレイアウトしたい場合は、<code>inline-flex</code> を {{cssxref("display")}} の値として設定することもできます。</p>
</div>

<h2 id="An_aside_on_the_flex_model" name="An_aside_on_the_flex_model">フレックスモデルのさておき</h2>

<p>要素が柔軟な箱として配置されるとき、それらは次のように2つの軸に沿って配置されます。</p>

<p><img alt="flex_terms.png" class="default internal" src="flex_terms.png"></p>

<ul>
 <li>主軸（<strong>main axis</strong>）は、フレックス項目が配置されている方向に走る軸です（例えば、ページを横切る行、またはページ下の列として）。 この軸の始点と終点は、主始点（<strong>main start</strong>）と主終点（<strong>main end</strong>）と呼ばれます。</li>
 <li>交差軸（<strong>cross axis</strong>）は、フレックス項目が配置されている方向に対して垂直に走る軸です。 この軸の始点と終点は、交差始点（<strong>cross start</strong>）と交差終点（<strong>cross end</strong>）と呼ばれます。</li>
 <li><code>display: flex</code> が設定されている親要素（この例では {{htmlelement("section")}}）は、フレックスコンテナ（<strong>flex container</strong>）と呼ばれます。</li>
 <li>フレックスコンテナ内の柔軟な箱としてレイアウトされている項目は、フレックス項目（<strong>flex item</strong>）と呼ばれます（この例では {{htmlelement("article")}} 要素）。</li>
</ul>

<p>次のセクションを進むときには、この用語集のことを覚えておいてください。 使用されている用語のいずれかについて混乱した場合は、いつでもここを参照することができます。</p>

<h2 id="Columns_or_rows" name="Columns_or_rows">列それとも行？</h2>

<p>フレックスボックスは {{cssxref("flex-direction")}} というプロパティを提供します。 これは主軸が走る方向（フレックスボックスの子がどの方向にレイアウトされるか）を指定します — デフォルトではこれは <code>row</code> に設定されていて、ブラウザーのデフォルト言語が動作する方向（英語のブラウザーの場合は左から右に）にそれらが横一列にレイアウトされます。</p>

<p>次の宣言を {{htmlelement("section")}}）の規則に追加してみてください。</p>

<pre class="brush: css notranslate">flex-direction: column;</pre>

<p>これにより、CSS を追加する前と同じように、項目が縦一列のレイアウトに戻されます。 先に進む前に、この宣言を例から削除してください。</p>

<div class="note">
<p><strong>注</strong>: <code>row-reverse</code> と <code>column-reverse</code> の値を使用して、フレックス項目を逆方向にレイアウトすることもできます。 これらの値も試してみてください！</p>
</div>

<h2 id="Columns_or_rows" name="Columns_or_rows">ラッピング</h2>

<p>レイアウトの幅や高さが決まっているときに発生する問題の1つは、最終的にはフレックスボックスの子がコンテナをオーバーフローさせてレイアウトが壊れることです。 <a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/flexbox/flexbox-wrap0.html">flexbox-wrap0.html</a> の例を見て、それを<a href="http://mdn.github.io/learning-area/css/css-layout/flexbox/flexbox-wrap0.html">ライブで見て</a>みてください（この例に沿って進めたい場合は、このファイルのローカルコピーを取ってください）。</p>

<p><img alt="" src="flexbox-example3.png" style="display: block; height: 646px; margin: 0px auto; width: 800px;"></p>

<p>ここで実際に子がコンテナから抜け出しているのを見ます。 これを修正できる1つの方法は、{{htmlelement("section")}}）の規則に次の宣言を追加することです。</p>

<pre class="brush: css notranslate">flex-wrap: wrap;</pre>

<p>また、{{htmlelement("article")}} の規則に次の宣言を追加します。</p>

<pre class="brush: css notranslate">flex: 200px;</pre>

<p>試してみてください。 これが含まれていると次のようにレイアウトがはるかに良く見えることがわかります。</p>

<p><img alt="" src="flexbox-example4.png" style="display: block; height: 646px; margin: 0px auto; width: 800px;">現在、複数の行があります — 多くのフレックスボックスの子が各行に納められているので、オーバーフローは次のラインに移動します。 <code>article</code> に設定した <code>flex: 200px</code> の宣言は、それぞれが少なくとも 200px 幅になることを意味します。 このプロパティについては後で詳しく説明します。 また、最後の行の最後の数個の子がそれぞれ幅広になっているので、依然として行全体がいっぱいになっていることに気付くかもしれません。</p>

<p>しかし、ここでできることは他にもあります。 まず最初に、{{cssxref("flex-direction")}} プロパティの値を <code>row-reverse</code> に変更してみてください。 これで、まだ複数行のレイアウトがあることがわかりますが、ブラウザーウィンドウの反対側の隅から開始して逆方向に流れます。</p>

<h2 id="flex-flow_shorthand" name="flex-flow_shorthand">flex-flow 一括指定</h2>

<p>この時点で、{{cssxref("flex-flow")}} という {{cssxref("flex-direction")}} と {{cssxref("flex-wrap")}} の一括指定が存在することに注目する価値があります。 例えば、次のように置き換えることができます。</p>

<pre class="brush: css notranslate">flex-direction: row;
flex-wrap: wrap;</pre>

<p>を</p>

<pre class="brush: css notranslate">flex-flow: row wrap;</pre>

<h2 id="Flexible_sizing_of_flex_items" name="Flexible_sizing_of_flex_items">フレックス項目の柔軟なサイズ変更</h2>

<p>それでは、最初の例に戻って、フレックス項目の占めるスペースの割合を制御する方法を見てみましょう。 ローカルコピーの <a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/flexbox/flexbox0.html">flexbox0.html</a> を起動するか、新しい出発点として <a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/flexbox/flexbox1.html">flexbox1.html</a> のコピーを入手してください（<a href="http://mdn.github.io/learning-area/css/css-layout/flexbox/flexbox1.html">ライブで見る</a>）。</p>

<p>まず、CSS の一番下に次の規則を追加します。</p>

<pre class="brush: css notranslate">article {
  flex: 1;
}</pre>

<p>これは、各フレックス項目が主軸に沿って使用可能なスペースのうちどれだけを占めるかを決定する、無単位の割合値です。 この場合、各 {{htmlelement("article")}} 要素に 1 の値を与えています。 つまり、パディングやマージンなどを設定した後の残りの予備スペースのうちから、すべてが同じ量を占めます。 これは割合であり、各フレックス項目に 400000 の値を指定してもまったく同じ効果があることを意味します。</p>

<p>それでは、前の規則の下に次の規則を追加します。</p>

<pre class="brush: css notranslate">article:nth-of-type(3) {
  flex: 2;
}</pre>

<p>リフレッシュすると、3番目の {{htmlelement("article")}} が他の2つの幅の2倍の幅を占めます。 合計で 4 割合単位が使用可能です。 最初の2つのフレックス項目はそれぞれ 1 単位ずつ持つため、それぞれ使用可能なスペースの 1/4 を占めます。 3つ目は 2 単位を持っているので、それは使用可能なスペースの 2/4（または 1/2）を占めます。</p>

<p><code>flex</code> の値内に最小サイズ値を指定することもできます。 既存の <code>article</code> の規則を次のように更新してみてください。</p>

<pre class="brush: css notranslate">article {
  flex: 1 200px;
}

article:nth-of-type(3) {
  flex: 2 200px;
}</pre>

<p>これは基本的に「各フレックス項目には最初に 200px の使用可能なスペースが与えられます。 その後、残りの使用可能なスペースは割合単位に従って共有されます。」と述べています。 リフレッシュしてみると、スペースの共有方法に違いが見られます。</p>

<p><img alt="" src="flexbox-example1.png" style="border-style: solid; border-width: 1px; display: block; height: 324px; margin: 0px auto; width: 800px;"></p>

<p>フレックスボックスの真の価値は、その柔軟性/応答性に見ることができます — ブラウザーウィンドウのサイズを変更したり、別の {{htmlelement("article")}} 要素を追加したりしても、レイアウトは問題なく機能します。</p>

<h2 id="flex_shorthand_versus_longhand" name="flex_shorthand_versus_longhand">flex: 一括指定対個別指定</h2>

<p>{{cssxref("flex")}} は、最大3つの異なる値を指定できる{{cssxref("Shorthand_properties","一括指定プロパティ")}}です。</p>

<ul>
 <li>上記で説明した無単位の割合値。 これは {{cssxref("flex-grow")}} 個別指定プロパティを使用して個別に指定できます。</li>
 <li>{{cssxref("flex-shrink")}} というフレックス項目がコンテナをオーバーフローしているときに有効になる、2番目の無単位の割合値。 これは、各フレックス項目のサイズからオーバーフローする量を取り除き、それらがコンテナからオーバーフローするのを防ぐために指定します。 これはかなり高度なフレックスボックスの機能で、この記事ではこれ以上説明しません。</li>
 <li>上記で説明した最小サイズ値。 これは、{{cssxref("flex-basis")}} の個別指定値を使用して個別に指定できます。</li>
</ul>

<p>本当に必要な場合以外は、個別指定の flex プロパティを使用しないことをお勧めします（例えば、以前に設定したものを上書きする場合など）。 それらは多くの余分なコードが書かれることにつながり、多少混乱するかもしれません。</p>

<h2 id="Horizontal_and_vertical_alignment" name="Horizontal_and_vertical_alignment">水平方向と垂直方向の配置</h2>

<p>フレックスボックスの機能を使用して、主軸または交差軸に沿ってフレックス項目を整列させることもできます。 新しい例である <a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/flexbox/flex-align0.html">flex-align0.html</a> を見て（<a href="http://mdn.github.io/learning-area/css/css-layout/flexbox/flex-align0.html">ライブも見る</a>）、これを調べてみましょう。 これは、きちんとした柔軟なボタン/ツールバーに変わります。 現時点では、いくつかのボタンが左上隅に詰まった水平のメニューバーが表示されます。</p>

<p><img alt="" src="flexbox-example5.png" style="display: block; height: 77px; margin: 0px auto; width: 600px;"></p>

<p>まず、この例のローカルコピーを取ります。</p>

<p>それでは、例の CSS の最後に次のものを追加してください。</p>

<pre class="brush: css notranslate">div {
  display: flex;
  align-items: center;
  justify-content: space-around;
}</pre>

<p>ページをリフレッシュすると、ボタンが横方向と縦方向に中央揃えになっていることがわかります。 これを2つの新しいプロパティを介して行いました。</p>

<p>{{cssxref("align-items")}} は、フレックス項目が交差軸上のどこに配置されるかを制御します。</p>

<ul>
 <li>デフォルトでは、この値は <code>stretch</code> です。 これは、すべてのフレックス項目を交差軸の方向に親を埋めるように引き伸ばします。 親が交差軸方向に固定幅を持っていない場合、すべてのフレックス項目は最長のフレックス項目と同じ長さになります。 これが最初の例がデフォルトで同じ高さの列を得た方法です。</li>
 <li>上記のコードで使用した <code>center</code> の値により、項目は固有の寸法を維持しますが、交差軸の中心に配置されます。 これが、この例のボタンが縦方向に中央揃えされている理由です。</li>
 <li><code>flex-start</code> や <code>flex-end</code> のような値を持つこともできます。 これは、すべての項目をそれぞれ交差軸の始点や終点に揃えます。 詳細については {{cssxref("align-items")}} を参照してください。</li>
</ul>

<p>{{cssxref("align-self")}} プロパティを適用することで、個々のフレックス項目の {{cssxref("align-items")}} のふるまいを上書きできます。 例えば、CSS に次のコードを追加してみてください。</p>

<pre class="brush: css notranslate">button:first-child {
  align-self: flex-end;
}</pre>

<p>これがどのような影響を与えるのかを見て、終了したらもう一度削除します。</p>

<p>{{cssxref("justify-content")}} は、フレックス項目が主軸上のどこに配置されるかを制御します。</p>

<ul>
 <li>デフォルト値は <code>flex-start</code> です。 これにより、すべての項目が主軸の始点に配置されます。</li>
 <li>それらを終点に配置させるために <code>flex-end</code> を使うことができます。</li>
 <li><code>center</code> は <code>justify-content</code> のための値でもあり、フレックス項目を主軸の中心に配置します。</li>
 <li>上記で使用した値、<code>space-around</code> は便利です。 両端に少しのスペースを残して、すべての項目を主軸に沿って均等に配置します。</li>
 <li>もう1つの値、<code>space-between</code> があります。 これは、両端にスペースを残さないという点を除けば、<code>space-around</code> に非常に似ています。</li>
</ul>

<p>続ける前に、これらの値を使用してそれらがどのように機能するかを確認することをお勧めします。</p>

<h2 id="Ordering_flex_items" name="Ordering_flex_items">フレックス項目の順序付け</h2>

<p>フレックスボックスには、ソース順に影響を与えずにフレックス項目のレイアウトの順序を変更する機能もあります。 これも従来のレイアウト方法では不可能なことです。</p>

<p>このコードは簡単です。 ボタンバーのサンプルコードに次の CSS を追加してみてください。</p>

<pre class="brush: css notranslate">button:first-child {
  order: 1;
}</pre>

<p>リフレッシュすると、[Smile] ボタンが主軸の終点に移動したことがわかります。 これがどのように機能するかについてもう少し詳しく説明しましょう。</p>

<ul>
 <li>デフォルトでは、すべてのフレックス項目の {{cssxref("order")}} の値は 0 です。</li>
 <li>大きな <code>order</code> の値が設定されているフレックス項目は、小さな <code>order</code> の値を持つ項目よりも表示順序の後半に表示されます。</li>
 <li>同じ <code>order</code> の値を持つフレックス項目は、ソース順で表示されます。 そのため、2、1、1、0 の <code>order</code> の値がそれぞれ設定された4つの項目がある場合、それらの表示順序は 4、2、3、1 となります。</li>
 <li>3番目の項目は2番目の後に表示されます。 これは、同じ <code>order</code> の値を持ち、ソース順でそれより後にあるためです。</li>
</ul>

<p>負の <code>order</code> の値を設定して、0 が設定されている項目よりも早く項目を表示することができます。 例えば、次の規則を使用して、[Blush] ボタンを主軸の始点に表示させることができます。</p>

<pre class="brush: css notranslate">button:last-child {
  order: -1;
}</pre>

<h2 id="Nested_flex_boxes" name="Nested_flex_boxes">ネストしたフレックスボックス</h2>

<p>フレックスボックスを使ってかなり複雑なレイアウトを作成することは可能です。 フレックス項目をフレックスコンテナとしても設定して、その子も柔軟な箱のようにレイアウトできるようにしてもまったく問題ありません。 <a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/flexbox/complex-flexbox.html">complex-flexbox.html</a> を見てください（<a href="http://mdn.github.io/learning-area/css/css-layout/flexbox/complex-flexbox.html">ライブも見る</a>）。</p>

<p><img alt="" src="flexbox-example7.png" style="border-style: solid; border-width: 1px; display: block; margin: 0px auto;"></p>

<p>このための HTML はかなり単純です。 3つの {{htmlelement("article")}} を含む {{htmlelement("section")}} 要素があります。 3番目の {{htmlelement("article")}} には3つの {{htmlelement("div")}} が含まれています。</p>

<pre class="notranslate">section - article
          article
          article - div - button
                    div   button
                    div   button
                          button
                          button</pre>

<p>レイアウトに使用したコードを見てみましょう。</p>

<p>まず、{{htmlelement("section")}} の子を柔軟な箱として配置するように設定します。</p>

<pre class="brush: css notranslate">section {
  display: flex;
}</pre>

<p>次に、{{htmlelement("article")}} 自体にいくつかの <code>flex</code> の値を設定します。 ここで2番目の規則に特に注意してください — 3番目の {{htmlelement("article")}} は、その子もフレックス項目のようにレイアウトするように設定していますが、今回はそれらを <code>column</code> のようにレイアウトしています。</p>

<pre class="brush: css notranslate">article {
  flex: 1 200px;
}

article:nth-of-type(3) {
  flex: 3 200px;
  display: flex;
  flex-flow: column;
}
</pre>

<p>次に、最初の {{htmlelement("div")}} を選択します。 最初に <code>flex: 1 100px;</code> を使用して効果的にそれの最小の高さを 100px にしてから、その子（{{htmlelement("button")}} 要素）もフレックス項目のように配置されるように設定します。 ここでそれらをラッピングする行にレイアウトし、先ほど見た個々のボタンの例で行ったように、それらを使用可能なスペースの中央に配置します。</p>

<pre class="brush: css notranslate">article:nth-of-type(3) div:first-child {
  flex: 1 100px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}</pre>

<p>最後に、ボタンのサイズを設定しましたが、もっとおもしろいことに、<code>1 auto</code> の <code>flex</code> の値を設定しています。 これは非常に興味深い効果があり、ブラウザーウィンドウの幅を変更してみるとわかります。 ボタンは可能な限り多くのスペースを占有し、できるだけ同じラインに配置できますが、同じラインに収まりきらなくなった場合は、ドロップダウンして新しいラインを作成します。</p>

<pre class="brush: css notranslate">button {
  flex: 1 auto;
  margin: 5px;
  font-size: 18px;
  line-height: 1.5;
}</pre>

<h2 id="Cross_browser_compatibility" name="Cross_browser_compatibility">クロスブラウザー互換性</h2>

<p>フレックスボックスのサポートは、Firefox、Chrome、Opera、Microsoft Edge、IE 11、Android / iOS の新しいバージョンなど、ほとんどの新しいブラウザーで利用できます。 ただし、フレックスボックスをサポートしていない古いブラウザーもまだあります（または、しますが、本当に古い、時代遅れのバージョンをサポートします）。</p>

<p>あなたがただ学んで実験している間、これはあまり重要ではありません。 ただし、実際のウェブサイトでフレックスボックスを使用することを検討している場合は、テストを行い、できるだけ多くのブラウザーでユーザーエクスペリエンスが許容範囲内であることを確認する必要があります。</p>

<p>フレックスボックスはいくつかの CSS 機能よりも少しトリッキーです。 例えば、ブラウザーに CSS ドロップシャドウがない場合でも、そのサイトは引き続き使用可能です。 ただし、フレックスボックス機能をサポートしていないと、レイアウトが完全に壊れて使用できなくなる可能性があります。</p>

<p><a href="/ja/docs/Learn/Tools_and_testing/Cross_browser_testing">クロスブラウザーテスト</a>のモジュールでは、クロスブラウザーのサポートの問題を解決するための戦略について説明します。</p>

<h2 id="スキルをテストしましょう!">スキルをテストしましょう!</h2>

<p>この記事では多くをカバーしましたが、最も大事な情報を覚えていますか？次に移動する前に、この情報を保持しているか検証するテストがあります — <a href="/ja/docs/Learn/CSS/CSS_layout/Flexbox_skills">Test your skills: Flexbox</a> を見てください。</p>

<h2 id="Summary" name="Summary">まとめ</h2>

<p>これで、フレックスボックスの基本についてのツアーは終了です。 私たちはあなたが楽しみを持って、学習と共に前進するにつれてそれと一緒に良い遊びがあることを願っています。 次に、CSS レイアウトのもう1つの重要な側面、CSS グリッドについて見ていきます。</p>

<div>{{PreviousMenuNext("Learn/CSS/CSS_layout/Normal_Flow", "Learn/CSS/CSS_layout/Grids", "Learn/CSS/CSS_layout")}}</div>

<div>
<h2 id="In_this_module" name="In_this_module">このモジュール内の文書</h2>

<ul>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Introduction">CSS レイアウト入門</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Normal_Flow">通常フロー</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Flexbox">フレックスボックス</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Grids">グリッド</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Floats">フロート</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Positioning">位置指定</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Multiple-column_Layout">段組みレイアウト</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Responsive_Design">レスポンシブデザイン</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Media_queries">メディアクエリーの初心者向けガイド</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods">過去のレイアウト方法</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers">古いブラウザーのサポート</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension">基礎的なレイアウトの理解</a></li>
</ul>
</div>
