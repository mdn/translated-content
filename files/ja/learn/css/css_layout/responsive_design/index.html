---
title: レスポンシブデザイン
slug: Learn/CSS/CSS_layout/Responsive_Design
tags:
  - Images
  - Media Queries
  - RWD
  - Responsive web design
  - flexbox
  - fluid grids
  - grid
  - multicol
  - typography
translation_of: Learn/CSS/CSS_layout/Responsive_Design
---
<div>{{learnsidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Multiple-column_Layout", "Learn/CSS/CSS_layout/Media_queries", "Learn/CSS/CSS_layout")}}</div>

<p>Web デザインの初期には、特定の画面サイズを対象とするページが作成されていました。 ユーザーの画面がデザイナーの予想よりも大きかったり小さかったりした場合、結果は望ましくないスクロールバーから、過度に長い行長、そして中途半端なスペースにまで及びました。 より多様な画面サイズが利用可能になると、<em>レスポンシブ Web デザイン</em>（responsive web design、RWD）の概念が登場しました。 これは、さまざまな画面幅、解像度などに合わせて Web ページがレイアウトと外観を変更できるようにする一連の実践です。 これは、マルチデバイス Web のデザイン方法を変えたアイデアであり、この記事は、それをマスターするために知っておくべき主なテクニックを理解するのに役立ちます。</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">前提知識:</th>
   <td>HTML の基本（<a href="/ja/docs/Learn/HTML/Introduction_to_HTML">HTML 入門</a>を学ぶ）、および CSS の機能の考え方（<a href="/ja/docs/Learn/CSS/First_steps">CSS の第一歩</a>と <a href="/ja/docs/Learn/CSS/Building_blocks">CSS の構成要素</a>を学ぶ）</td>
  </tr>
  <tr>
   <th scope="row">学習目標:</th>
   <td>レスポンシブデザインの基本概念と歴史を理解する。</td>
  </tr>
 </tbody>
</table>

<h2 id="Historic_website_layouts" name="Historic_website_layouts">歴史的な Web サイトのレイアウト</h2>

<p>歴史のある時点で、Web サイトを設計するときに次の2つの選択肢がありました。</p>

<ul>
 <li>ブラウザーのウィンドウに合わせて伸縮する<em>リキッド（液状）のサイト</em></li>
 <li>または、ピクセル単位の固定サイズによる<em>固定幅のサイト</em>を作成できます。</li>
</ul>

<p>これらの2つのアプローチは、サイトを設計する人の画面上では最も見栄えの良い Web サイトをもたらす傾向がありました！ リキッドのサイトは、小さな画面では押しつぶされたデザインになり（下図参照）、大きな画面では読みにくいほど長い行長になります。</p>

<figure><img alt="モバイルサイズのビューポートに押しつぶされた2列のレイアウト。" src="https://mdn.mozillademos.org/files/16834/mdn-rwd-liquid.png" style="display: block; height: 406px; width: 300px;">
<figcaption></figcaption>
</figure>

<div class="blockIndicator note">
<p><strong>注</strong>: このシンプルなリキッドレイアウトを見てください: <a href="https://mdn.github.io/css-examples/learn/rwd/liquid-width.html">例</a>、<a href="https://github.com/mdn/css-examples/blob/master/learn/rwd/liquid-width.html">ソースコード</a>。 例を表示しているときに、ブラウザーのウィンドウを内側または外側にドラッグして、さまざまなサイズでどのように見えるかを確認します。</p>
</div>

<p>固定幅のサイトでは、画面の幅がサイトの幅よりも小さいと水平スクロールバーが発生するリスクがあり（下図参照）、大きな画面ではデザインの端に多くの空白ができます。</p>

<figure><img alt="モバイルのビューポートに水平スクロールバーを備えたレイアウト。" src="https://mdn.mozillademos.org/files/16835/mdn-rwd-fixed.png" style="display: block; height: 411px; width: 300px;">
<figcaption></figcaption>
</figure>

<div class="blockIndicator note">
<p><strong>注</strong>: この単純な固定幅レイアウトを見てください: <a href="https://mdn.github.io/css-examples/learn/rwd/fixed-width.html">例</a>、<a href="https://github.com/mdn/css-examples/blob/master/learn/rwd/fixed-width.html">ソースコード</a>。 繰り返しますが、ブラウザーのウィンドウのサイズを変更したときの結果を確認してください。</p>
</div>

<div class="blockIndicator note">
<p><strong>注</strong>: 上記のスクリーンショットは、Firefox 開発ツールの<a href="/ja/docs/Tools/Responsive_Design_Mode">レスポンシブデザインモード</a>を使用して撮影したものです。</p>
</div>

<p>モバイル Web が最初の多機能携帯電話で現実のものになり始めたため、モバイルを採用したい企業は通常、異なる URL（多くの場合 <code>m.example.com</code> や <code>example.mobi</code> など）を使用して、サイトの特別なモバイルバージョンを作成しました。 これは、サイトの2つの異なるバージョンを開発し、最新の状態に保つ必要があることを意味しました。</p>

<p>さらに、これらのモバイルサイトは、しばしば非常に切り詰められたエクスペリエンスを提供しました。 モバイルデバイスがより強力になり、完全な Web サイトを表示できるようになったため、サイトのモバイルバージョンに閉じ込められ、フル機能のデスクトップバージョンのサイトにあることがわかっている情報にアクセスできないモバイルユーザーにとって、これはいらだたしいことでした。</p>

<h2 id="Flexible_layout_before_responsive_design" name="Flexible_layout_before_responsive_design">レスポンシブデザインより前のフレキシブルレイアウト</h2>

<p>Web サイトを構築する際のリキッドまたは固定幅の方法の欠点を解決するために、多くのアプローチが開発されました。 2004年に Cameron Adams は、<a href="http://www.themaninblue.com/writing/perspective/2004/09/21/">解像度依存レイアウト</a>（英語）という題名の投稿を書き、さまざまな画面解像度に適応できるデザインを作成する方法を説明しました。 このアプローチでは、画面解像度を検出して正しい CSS をロードするために JavaScript が必要でした。</p>

<p>Zoe Mickley Gillenwater は、フレキシブル（柔軟な）サイトを作成するさまざまな方法の説明と形式化をし、画面を埋めるか、サイズを完全に固定するかの間で妥協点を見つけるために<a href="http://zomigi.com/blog/voices-that-matter-slides-available/">尽力しました</a>。</p>

<h2 id="Responsive_design" name="Responsive_design">レスポンシブデザイン</h2>

<p>レスポンシブデザインという用語は、<a href="https://alistapart.com/article/responsive-web-design/">2010年に Ethan Marcotte によって初めて作られ</a>、3つのテクニックを組み合わせて使用​​することを説明しています。</p>

<ol>
 <li>1つ目は、Gillenwater が既に検討したフルード（流動的な）グリッドのアイデアであり、Marcotte の記事 <a href="https://alistapart.com/article/fluidgrids/">Fluid Grids</a>（2009年に A List Apart で公開）で読むことができます。</li>
 <li>2番目のテクニックは、<a href="http://unstoppablerobotninja.com/entry/fluid-images">フルード画像</a>のアイデアです。 <code>max-width</code> プロパティを <code>100%</code> に設定する非常に簡単なテクニックを使用すると、画像が含まれる列が画像の本来のサイズより狭くなった場合、画像は小さく縮小されますが、大きくなることはありません。 これにより、画像はオーバーフローするのではなく、柔軟なサイズの列に収まるように縮小できますが、列が画像よりも広くなった場合には大きくならず、ピクセル化もされません。</li>
 <li>3番目の重要なコンポーネントは<a href="/ja/docs/Web/CSS/Media_Queries">メディアクエリー</a>です。 メディアクエリーにより、CSS のみを使用して、Cameron Adams が JavaScript を使用して以前に検討したタイプのレイアウトの切り替えができるようになります。 すべての画面サイズに対して1つのレイアウトを使用するのではなく、レイアウトを変更できます。 サイドバーは小さな画面に合わせて位置を変更したり、別のナビゲーションを表示したりできます。</li>
</ol>

<p><strong>レスポンシブ Web デザインは独立した技術ではない</strong>ことを理解することが重要です。 レスポンシブ Web デザインは、コンテンツの表示に使用されているデバイスに<em>対応</em>できるレイアウトを作成するために使用される、Web デザインへのアプローチまたはベストプラクティスのセットを説明する用語です。 Marcotte の最初の検討では、これは柔軟なグリッド（フロートを使用）とメディアクエリーを意味していましたが、その記事が書かれてからほぼ10年で、レスポンシブに動作することがデフォルトになりました。 最新の CSS レイアウトの方法は本質的にレスポンシブであり、レスポンシブサイトの設計を容易にするために Web プラットフォームに新しいものが組み込まれています。</p>

<p>この記事の残りの部分では、レスポンシブサイトを作成するときに使用できるさまざまな Web プラットフォーム機能について説明します。</p>

<h2 id="Media_Queries" name="Media_Queries">メディアクエリー</h2>

<p>レスポンシブデザインは、メディアクエリー（media query）によってのみ出現できました。 Media Queries Level 3 仕様は2009年に勧告候補になりました。 つまり、ブラウザーでの実装の準備が整ったとみなされました。 メディアクエリーを使用すると、一連のテスト（例えば、ユーザーの画面が特定の幅または特定の解像度より大きいかどうか）を実行し、CSS を選択的に適用して、ユーザーのニーズに合わせて適切にページをスタイルできます。</p>

<p>例えば、次のメディアクエリーは、現在の Web ページが画面メディア（したがって印刷ドキュメントではない）として表示され、ビューポートの幅が少なくとも 800 ピクセルであるかどうかをテストします。 <code>.container</code> セレクターの CSS は、これら2つのことが当てはまる場合にのみ適用されます。</p>

<pre class="brush: css notranslate"><code>@media screen and (min-width: 800px) {
  .container {
    margin: 1em 2em;
  }
} </code>
</pre>

<p>スタイルシート内に複数のメディアクエリーを追加して、レイアウト全体またはその一部をさまざまな画面サイズに最適に調整できます。 メディアクエリーが導入され、レイアウトが変更されるポイントは、<em>ブレークポイント</em>（breakpoints）と呼ばれます。</p>

<p>メディアクエリーを使用する場合の一般的なアプローチは、狭い画面のデバイス（携帯電話など）用に単純な単一列レイアウトを作成し、次に、より大きな画面かチェックして複数列レイアウトを処理するのに十分な画面幅があることがわかったら、複数列レイアウトを実装することです。 これは多くの場合、<strong>モバイルファースト</strong>デザインと呼ばれます。</p>

<p>詳細については、<a href="/ja/docs/Web/CSS/Media_Queries">メディアクエリー</a>の MDN ドキュメントをご覧ください。</p>

<h2 id="Flexible_grids" name="Flexible_grids">柔軟なグリッド</h2>

<p>レスポンシブサイトは、ブレークポイント間でレイアウトを変更するだけでなく、柔軟なグリッド上に構築されます。 柔軟なグリッドは、存在する可能性のあるすべてのデバイスサイズを対象にする必要がなく、ピクセルパーフェクトレイアウトを構築する必要がないことを意味します。 膨大な数の異なるサイズのデバイスが存在し、少なくともデスクトップでは常にブラウザーのウィンドウが最大化されているわけではないという事実を考えると、ピクセルパーフェクトレイアウトのアプローチは不可能です。</p>

<p>柔軟なグリッドを使用することで、ブレークポイントを追加し、コンテンツの見た目が悪くなり始めた時点でデザインを変更するだけで済みます。 例えば、画面サイズが大きくなると行長が読みにくい長さになり、ボックスが狭くなるにつれて各行に2つの単語が押しつぶされるようになります。</p>

<p>レスポンシブデザインの初期には、レイアウトを実行するための唯一の選択肢は<a href="/ja/docs/Learn/CSS/CSS_layout/Floats">フロート</a>を使用することでした。 柔軟なフロートレイアウトは、各要素に幅をパーセントで指定し、レイアウト全体で合計が 100% を超えないようにすることで実現します。 フルードグリッドに関する元の作品で、Marcotte はピクセルを使用して設計されたレイアウトを取得し、それをパーセントに変換するための公式を詳しく説明しました。</p>

<pre class="notranslate"><code>対象 / コンテキスト = 結果</code>
</pre>

<p>例えば、対象の列のサイズが 60 ピクセルで、コンテキスト（またはコンテナ）が 960 ピクセルの場合、60 を 960 で割って、小数点を右に2桁移動した後、CSS で使用できる値を得られます。</p>

<pre class="brush: css notranslate"><code>.col {
  width: 6.25%; /* 60 / 960 = 0.0625 */
} </code>
</pre>

<p>このアプローチは、今日の Web の多くの場所で見られます。 これについては、<a href="/ja/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods">過去のレイアウト方法</a>の記事のレイアウトセクションで説明しています。 仕事でこのアプローチを使用している Web サイトに出くわす可能性が高いため、フロートベースの柔軟なグリッドを使用して最新のサイトを構築しなくても、理解する価値があります。</p>

<p>次の例は、メディアクエリーと柔軟なグリッドを使用した簡単なレスポンシブデザインを示しています。 狭い画面では、レイアウトは次のように上下に積み重ねられたボックスを表示します。</p>

<figure><img alt="ボックスが上下に積み上げられたレイアウトのモバイルビュー。" src="https://mdn.mozillademos.org/files/16836/mdn-rwd-mobile.png" style="display: block; height: 407px; width: 300px;">
<figcaption></figcaption>
</figure>

<p>より広い画面では、次のように2つの列に移動します。</p>

<figure><img alt="2列のレイアウトのデスクトップビュー。" src="https://mdn.mozillademos.org/files/16837/mdn-rwd-desktop.png" style="display: block; height: 217px; width: 600px;">
<figcaption></figcaption>
</figure>

<div class="blockIndicator note">
<p><strong>注</strong>: この例の<a href="https://mdn.github.io/css-examples/learn/rwd/float-based-rwd.html">ライブ例</a>と<a href="https://github.com/mdn/css-examples/blob/master/learn/rwd/float-based-rwd.html">ソースコード</a>は GitHub にあります。</p>
</div>

<h2 id="Modern_layout_technologies" name="Modern_layout_technologies">最新のレイアウト技術</h2>

<p><a href="/ja/docs/Learn/CSS/CSS_layout/Multiple-column_Layout">段組みレイアウト</a>、<a href="/ja/docs/Learn/CSS/CSS_layout/Flexbox">フレックスボックス</a>、<a href="/ja/docs/Learn/CSS/CSS_layout/Grids">グリッド</a>などの最新のレイアウト方法は、デフォルトでレスポンシブです。 それらはすべて、あなたが柔軟なグリッドを作成しようとしていると仮定し、それを行う簡単な方法を提供します。</p>

<h3 id="Multicol" name="Multicol">段組み</h3>

<p>これらのレイアウトメソッドの中で最も古いものは段組み（multicol）です。 <code>column-count</code> の指定で、コンテンツを分割する列の数を指定します。 ブラウザーはこれらのサイズを計算し、サイズは画面サイズに応じて変化します。</p>

<pre class="brush: css notranslate"><code>.container {
  column-count: 3;
} </code>
</pre>

<p>代わりに <code>column-width</code> の指定で、<em>最小</em>幅を指定します。 ブラウザーは、その幅の列をコンテナに収まるだけ作成し、すべての列の間で残りのスペースを分配します。 したがって、列の数は、どのくらいのスペースがあるかに応じて変化します。</p>

<pre class="brush: css notranslate"><code>.container {
  column-width: 10em;
} </code>
</pre>

<h3 id="Flexbox" name="Flexbox">フレックスボックス</h3>

<p>フレックスボックス（Flexbox）では、フレックス項目は初期の振る舞いとして、コンテナ内のスペースに従って、項目間のスペースを縮小および分散します。 <code>flex-grow</code> と <code>flex-shrink</code> の値を変更することにより、項目の周囲に多少のスペースがあった場合の振る舞いを指定できます。</p>

<p>次の例では、CSS レイアウトのフレックスボックスのトピックの<a href="/ja/docs/Learn/CSS/CSS_layout/Flexbox#Flexible_sizing_of_flex_items">フレックス項目の柔軟なサイズ変更</a>で説明されているように、<code>flex: 1</code> の一括指定を使用して、それぞれのフレックス項目はフレックスコンテナ内に同じ量のスペースを取ります。</p>

<pre class="brush: css notranslate"><code>.container {
  display: flex;
}

.item {
  flex: 1;
} </code>
</pre>

<div class="blockIndicator note">
<p><strong>注</strong>: 例として、今度はフレックスボックスを使用して、上記のシンプルなレスポンシブレイアウトを再構築しました。 列のサイズを計算するために奇妙なパーセント値を使用する必要がなくなったことがわかります: <a href="https://mdn.github.io/css-examples/learn/rwd/flex-based-rwd.html">例</a>、<a href="https://github.com/mdn/css-examples/blob/master/learn/rwd/flex-based-rwd.html">ソースコード</a>。</p>
</div>

<h3 id="CSS_grid" name="CSS_grid">CSS グリッド</h3>

<p>CSS グリッドレイアウトでは、<code>fr</code> 単位を使用して、グリッドトラック全体に利用可能なスペースを分散できます。 次の例では、サイズが <code>1fr</code> の3つのトラックを持つグリッドコンテナを作成します。 これにより、3つの列トラックが作成され、それぞれがコンテナ内の使用可能なスペースの一部を取得します。 グリッドを作成するこのアプローチの詳細については、CSS レイアウトのグリッドのトピックの<a href="/ja/docs/Learn/CSS/CSS_layout/Grids#Flexible_grids_with_the_fr_unit"> fr 単位での柔軟なグリッド</a>を参照してください。</p>

<pre class="brush: css notranslate"><code>.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
} </code>
</pre>

<div class="blockIndicator note">
<p><strong>注</strong>: <code>.wrapper</code> に列を定義できるため、グリッドレイアウトのバージョンはさらに単純です: <a href="https://mdn.github.io/css-examples/learn/rwd/grid-based-rwd.html">例</a>、<a href="https://github.com/mdn/css-examples/blob/master/learn/rwd/grid-based-rwd.html">ソースコード</a>。</p>
</div>

<h2 id="Responsive_images" name="Responsive_images">レスポンシブ画像</h2>

<p>レスポンシブ画像に対する最も簡単なアプローチは、レスポンシブデザインに関する Marcotte の初期の記事で説明されているとおりです。 基本的に、必要な最大サイズの画像を取得し、縮小します。 これは現在でも使用されているアプローチであり、ほとんどのスタイルシートでは次の CSS がどこかにあります。</p>

<pre class="brush: css notranslate"><code>img {
  max-width: 100%;
} </code>
</pre>

<p>このアプローチには明らかな欠点があります。 画像は本来のサイズよりもはるかに小さく表示される可能性があり、これは帯域幅の浪費です — モバイルユーザーは、ブラウザーのウィンドウに実際に表示されるサイズの数倍の画像をダウンロードすることになる場合があります。 さらに、モバイルとデスクトップで同じ画像アスペクト比を使用したくない場合があります。 例えば、モバイル用に正方形の画像を用意して、デスクトップのランドスケープ画像と同じシーンを表示するとよいかもしれません。 または、モバイルでの画像のサイズが小さいことを認めながら、小さな画面サイズでもより簡単に理解できるまったく別の画像を表示したい場合があります。 これらのことは、単に画像を縮小するだけでは達成できません。</p>

<p>{{htmlelement("picture")}} 要素と {{htmlelement("img")}} の <code>srcset</code> 属性と <code>size</code> 属性を使用したレスポンシブ画像は、これらの両方の問題を解決します。 「ヒント」（画像に最適な画面サイズと解像度を記述するメタデータ）とともに複数のサイズを提供でき、ブラウザーは各デバイスに最適な画像を選択し、ユーザーが使用しているデバイスに適した画像サイズをダウンロードできるようにします。</p>

<p>さまざまなサイズで使用される<em>アートディレクション</em>画像は、さまざまな画面サイズに対して、さまざまな切り抜きまたはまったく異なる画像を提供します。</p>

<p>MDN の HTML の学習セクションで、<a href="/ja/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images">レスポンシブ画像の詳細なガイド</a>を見つけることができます。</p>

<h2 id="Responsive_typography" name="Responsive_typography">レスポンシブタイポグラフィ</h2>

<p>以前の研究ではカバーされていなかったレスポンシブデザインの要素は、レスポンシブタイポグラフィ（responsive typography）のアイデアでした。 基本的に、これは、メディアクエリー内のフォントサイズを変更して、画面を占める量を増減させることを表します。</p>

<p>この例では、レベル1の見出しを <code>4rem</code> に設定します。 つまり、基本フォントサイズの4倍になります。 それは本当に大きな見出しです！ このジャンボ見出しは大きな画面サイズでのみ必要です。 したがって、まず小さな見出しを作成し、ユーザーが少なくとも <code>1200px</code> の画面サイズを持っていることがわかった場合は、メディアクエリーを使用して大きな見出しで上書きします。</p>

<pre class="brush: css notranslate"><code>html {
  font-size: 1em;
}

h1 {
  font-size: 2rem;
}

@media (min-width: 1200px) {
  h1 {
    font-size: 4rem;
  }
} </code>
</pre>

<p>上記のレスポンシブグリッドの例を編集して、説明した方法を使用してレスポンシブタイポグラフィも含めました。 レイアウトが2列バージョンになると、見出しのサイズがどのように切り替わるかを確認できます。</p>

<p>モバイルでは、次のように見出しが小さくなります。</p>

<figure><img alt="見出しサイズが小さいスタックレイアウト。" src="https://mdn.mozillademos.org/files/16838/mdn-rwd-font-mobile.png" style="display: block; height: 407px; width: 300px;">
<figcaption></figcaption>
</figure>

<p>ただし、デスクトップでは、次のようにより大きな見出しサイズで表示されます。</p>

<figure><img alt="見出しが大きい2列レイアウト。" src="https://mdn.mozillademos.org/files/16839/mdn-rwd-font-desktop.png" style="display: block; height: 169px; width: 600px;">
<figcaption></figcaption>
</figure>

<div class="blockIndicator note">
<p><strong>注</strong>: この例を実際に見てください: <a href="https://mdn.github.io/css-examples/learn/rwd/type-rwd.html">例</a>、<a href="https://github.com/mdn/css-examples/blob/master/learn/rwd/type-rwd.html">ソースコード</a>。</p>
</div>

<p>このタイポグラフィへのアプローチが示すように、メディアクエリーをページのレイアウトの変更のみに制限する必要はありません。 これらを使用して任意の要素を微調整し、代わりとなる画面サイズでより使いやすく魅力的にすることができます。</p>

<h3 id="Using_viewport_units_for_responsive_typography" name="Using_viewport_units_for_responsive_typography">レスポンシブタイポグラフィにビューポート単位を使用</h3>

<p>興味深いアプローチは、ビューポート単位 <code>vw</code> を使用してレスポンシブタイポグラフィを有効にすることです。 <code>1vw</code> はビューポートの幅の 1% に等しいため、<code>vw</code> を使用してフォントサイズを設定すると、常にビューポートのサイズに関連付けられます。</p>

<pre class="brush: css notranslate">h1 {
  font-size: 6vw;
}</pre>

<p>上記の問題は、<code>vw</code> 単位を使用するとユーザーがテキストをズームする機能を失うことです。 そのテキストは常にビューポートのサイズに関連しているためです。 <strong>したがって、ビューポート単位を単独で使用してテキストを設定しないでください</strong>。</p>

<p>解決策があり、<code><a href="/ja/docs/Web/CSS/calc">calc()</a></code> を使用する必要があります。 <code>em</code> や <code>rem</code> などの固定サイズを使用した値に <code>vw</code> 単位を足しても、テキストはズーム可能です。 次のように基本的に、<code>vw</code> 単位はズームした値に足します。</p>

<pre class="brush: css notranslate">h1 {
  font-size: calc(1.5rem + 3vw);
}</pre>

<p>これは、見出しのフォントサイズを指定する必要があるのは一度だけで、モバイル用にメディアクエリーで再定義せずともよいことを意味します。ビューポートのサイズを大きくするにつれて、フォントは徐々に大きくなります。</p>

<div class="blockIndicator note">
<p>実際のこの例を見てください: <a href="https://mdn.github.io/css-examples/learn/rwd/type-vw.html">例</a>、<a href="https://github.com/mdn/css-examples/blob/master/learn/rwd/type-vw.html">ソースコード</a>。</p>
</div>

<h2 id="The_viewport_meta_tag" name="The_viewport_meta_tag">ビューポートメタタグ</h2>

<p>レスポンシブなページの HTML ソースを見ると、通常、ドキュメントの <code>&lt;head&gt;</code> に次の {{htmlelement("meta")}} タグがあります。</p>

<pre class="brush: html notranslate"><code>&lt;meta name="viewport" content="width=device-width,initial-scale=1"&gt;</code>
</pre>

<p>このメタタグは、モバイルブラウザーに、ビューポートの幅をデバイスの幅に設定し、ドキュメントを意図したサイズの 100% にスケーリングするよう指示します。 これにより、ドキュメントはモバイル向けに最適化されたサイズで表示されます。</p>

<p>なぜこれが必要でしょうか？ モバイルブラウザーは、ビューポートの幅について嘘をつく傾向があるためです。</p>

<p>このメタタグが存在するのは、最初の iPhone が出て、人々が小さな電話画面で Web サイトを表示し始めたとき、ほとんどのサイトがモバイル向けに最適化されていなかったためです。 したがって、モバイルブラウザーはビューポートの幅を 960 ピクセルに設定し、その幅でページをレンダリングし、デスクトップレイアウトの縮小版として結果を表示します。 他のモバイルブラウザー（Google Android など）も同じことを行いました。 ユーザーは Web サイトをズームインして画面内を移動し、興味のある部分を見ることができましたが、見た目は悪かったです。 レスポンシブデザインのないサイトに出くわす不幸がある場合、今日でもこれを見ることができます。</p>

<p>問題は、モバイルブラウザーでは、ブレークポイントとメディアクエリーを使用したレスポンシブデザインが意図したとおりに機能しないことです。 ビューポートの幅が <code>480px</code> 以下で作動する狭い画面レイアウトがあり、ビューポートが <code>960px</code> に設定されている場合、モバイルで狭い画面のレイアウトが表示されることはありません。 <code>width=device-width</code> を設定すると、Apple のデフォルトの <code>width=960px</code> がデバイスの実際の幅で上書きされるため、メディアクエリーは意図したとおりに機能します。</p>

<p><strong>したがって、ドキュメントの先頭に上記の HTML 行を<em>常に</em>含める必要があります</strong>。</p>

<p>ビューポートメタタグで使用できる設定は次のように他にもありますが、一般的には上記の行を使用します。</p>

<ul>
 <li><code>initial-scale</code>: ページの初期ズームを設定します。 これには 1 を設定します。</li>
 <li><code>height</code>: ビューポートに特定の高さを設定します。</li>
 <li><code>minimum-scale</code>: 最小ズームレベルを設定します。</li>
 <li><code>maximum-scale</code>: 最大ズームレベルを設定します。</li>
 <li><code>user-scalable</code>: <code>no</code> に設定すると、ズームを禁止します。</li>
</ul>

<p><code>minimum-scale</code>、<code>maximum-scale</code>、特に <code>user-scalable</code> を <code>no</code> に設定することは避けてください。 ユーザーには必要なだけズームを許可する必要があります。 これを禁止すると、アクセシビリティの問題が発生します。</p>

<div class="blockIndicator note">
<p><strong>注</strong>: <code><a href="/ja/docs/Web/CSS/@viewport">@viewport</a></code> というビューポートメタタグを置き換えるように設計された CSS の @ 規則がありますが、ブラウザーのサポートが不十分です。 両方が使用されたときは、メタタグが @viewport を上書きします。</p>
</div>

<h2 id="Summary" name="Summary">まとめ</h2>

<p>レスポンシブデザインとは、表示される環境に対応するサイトまたはアプリのデザインを指します。 これには多くの CSS および HTML の機能とテクニックが含まれており、現在では基本的に Web サイトをデフォルトで構築する方法になっています。 サイトを携帯電話でアクセスするところを考えてください — デスクトップバージョンを縮小したサイトや、物事を見つけるために横にスクロールする必要があるサイトに出くわすことは、おそらくかなり珍しいことです。 これは、Web がレスポンシブデザインのこのアプローチに移行したためです。</p>

<p>また、これらのレッスンで学んだレイアウト方法の助けを借りて、レスポンシブデザインを実現することがはるかに容易になりました。 今日の Web 開発が初めてでも、レスポンシブデザインの初期よりも多くのツールを意のままに使用できます。 したがって、参照している資料の年齢を確認する価値があります。 歴史的な記事はまだ有用ですが、CSS と HTML の現代的な用法により、訪問者がどのデバイスを使用してサイトを表示しても、エレガントで便利なデザインをはるかに簡単に作成できます。</p>

<p>{{PreviousMenuNext("Learn/CSS/CSS_layout/Multiple-column_Layout", "Learn/CSS/CSS_layout/Media_queries", "Learn/CSS/CSS_layout")}}</p>

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
