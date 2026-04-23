---
title: グリッドを使用したよくあるレイアウトの実現
short-title: よくあるグリッドレイアウト
slug: Web/CSS/Guides/Grid_layout/Common_grid_layouts
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

[一連の CSS グリッドレイアウトガイド](/ja/docs/Web/CSS/Guides/Grid_layout#ガイド)の締めくくりとして、グリッドレイアウトを使ったデザインのテクニックをいくつか紹介します。ここでは、 {{cssxref("grid-template-areas")}} を使った例と、 12 列の可変グリッドシステム、そして自動配置を使ったアイテムリストを見ていきます。これらの例からわかるように、多くの場合、グリッドレイアウトで望む結果を得るためには複数の方法があります。自分が解決しようとしている問題や、実現しようとしているデザインに合わせて、最も参考になる方法を選んでください。

## `grid-template-areas` を使用した、1 ～ 3 列の流動的なレスポンシブレイアウト

多くのウェブサイトはこの種のレイアウトのバリエーションで、コンテンツ、サイドバー、ヘッダー、フッターを備えています。レスポンシブデザインでは、1 列で表示し、特定のブレイクポイントでサイドバーを追加し、広い画面では 3 列のレイアウトを持ってくるという方法が考えられます。

![2 つのブレークポイントでグリッドを再定義して作成した 3 つの異なるレイアウト。](11-responsive-areas.png)

このレイアウトは、[グリッドテンプレート領域](/ja/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)のガイドで学んだ「名前付きテンプレート領域」を使って作成する予定です。

このマークアップは、ヘッダー、フッター、メインコンテンツ、ナビゲーション、サイドバー、そして広告を掲載するためのブロックの要素を内部に持つコンテナーです。

```css hidden
* {
  box-sizing: border-box;
}
.wrapper {
  max-width: 1024px;
  margin: 0 auto;
  font:
    1.2em "Helvetica",
    "Arial",
    sans-serif;
}

.wrapper > * {
  border: 2px solid #f08c00;
  background-color: #ffec99;
  border-radius: 5px;
  padding: 10px;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
```

```html
<div class="wrapper">
  <header class="main-head">ヘッダー</header>
  <nav class="main-nav">
    <ul>
      <li><a href="">ナビ 1</a></li>
      <li><a href="">ナビ 2</a></li>
      <li><a href="">ナビ 3</a></li>
    </ul>
  </nav>
  <article class="content">
    <h1>メイン記事領域</h1>
    <p>
      このレイアウトでは、幅が 500
      ピクセル以下の画面では、領域をソース順に表示します。グリッドとグリッド上のアイテムの配置を再定義することで、2
      列レイアウト、3 列レイアウトへと変化していきます。
    </p>
  </article>
  <aside class="side">サイドバー</aside>
  <div class="ad">広告</div>
  <footer class="main-footer">フッター</footer>
</div>
```

レイアウトを作成するために {{cssxref("grid-template-areas")}} を使用しているため、[メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries/Using)のほかに、領域に名前を付ける必要があります。ここでは {{cssxref("grid-area")}} プロパティを使って領域に名前を付けます。

```css
.main-head {
  grid-area: header;
}
.content {
  grid-area: content;
}
.main-nav {
  grid-area: nav;
}
.side {
  grid-area: sidebar;
}
.ad {
  grid-area: ad;
}
.main-footer {
  grid-area: footer;
}
```

これでレイアウトは作成されませんが、アイテムに名前がついたので、それを使ってレイアウトを作成することができます。 メディアクエリーを使用せずに、これからモバイル幅用のレイアウトを設定します。ここでは、[グリッドレイアウトとアクセシビリティ](/ja/docs/Web/CSS/Guides/Grid_layout/Accessibility)のガイドに記載されているように、ソースと表示の間に断絶が生じないように、すべてをソース順にしています。列や行のトラックは明示的に定義していません。このレイアウトでは、単一の列が指定され、暗黙のグリッド内のそれぞれのアイテムに必要な行が作成されます。

```css
.wrapper {
  display: grid;
  gap: 20px;
  grid-template-areas:
    "header"
    "nav"
    "content"
    "sidebar"
    "ad"
    "footer";
}
```

モバイルレイアウトを設定すると、どの画面サイズでも 1 列になりますが、 {{cssxref("@media")}} を追加して、2 列表示できるだけの画面領域がある場合のレイアウトを再定義することができます。

```css
@media (width >= 500px) {
  .wrapper {
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
      "header  header"
      "nav     nav"
      "sidebar content"
      "ad      footer";
  }
  nav ul {
    display: flex;
    justify-content: space-between;
  }
}
```

{{cssxref("grid-template-areas")}} の値で、レイアウトが形になってきていることがわかります。 `header` は `nav` と同様に 2 列のトラックにまたがっています。3 つ目の行のトラックには、 `sidebar` を `content` の横に並べて配置します。 `ad` のコンテンツは、サイドバーの下に現れるように 4 つ目の行の予定に配置します。 `footer` は、その隣、コンテンツの下に配置します。ナビゲーションには [CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/Guides/Flexible_box_layout)を使用して、行内のナビゲーションアイテムの空間を均等にしています。

これで、 3 列のレイアウトを表示できるより広い画面用の最後のブレークポイントを追加できます。

```css
@media (width >= 700px) {
  .wrapper {
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-areas:
      "header header  header"
      "nav    content sidebar"
      "nav    content ad"
      "footer footer  footer";
  }
  nav ul {
    flex-direction: column;
  }
}
```

この 3 列レイアウトには、2 つの `1fr` 単位のサイド列と、トラックサイズが `4fr` の中央列があります。これは、コンテナー内で利用できる空間が 6 つの部分に分割され、3 つのトラックに比例して割り当てられていることを意味します。つまり、サイド列に 1 つずつ、中央に 4 つが割り当てられています。

このレイアウトでは、`nav` を `content` の横に並んだ左列に表示しています。右列には `sidebar` があり、その下に広告 (`ad`) があります。これで、`footer` はレイアウトの下部全体に広がっています。ここでも、ナビゲーションの表示にはフレックスボックスを使用していますが、今回は行ではなく列として表示しています。

{{ EmbedLiveSample('A_responsive_layout_with_1_to_3_fluid_columns_using_grid-template-areas', '800', '570') }}

この基本的な例では、異なるブレークポイント間でグリッドレイアウトを再配置する方法を示します。具体的には、異なる列のレイアウトに応じて、`ad` ブロックの位置を適宜変更しています。この名前付き領域メソッドは、特にプロトタイピングの段階でとても役立ちます。グリッド上の要素の位置を変更する場合、数値よりも名前を使用したほうが簡単であると感じるかもしれません。

## 柔軟な 12 列のレイアウト

CSS フレームワークやグリッドシステムでは、通常 12 列または 16 列の柔軟なグリッドが使用されます。 CSS グリッドレイアウトを使用すると、この種のシステムを簡単に作成することができます。例えば、12 列の柔軟なグリッドを作成し、それぞれの列に 12 個の `1fr` 単位の列トラックを設定し、それぞれの列の開始行に `col-start` という名前を付けます。これは、 `col-start` という名前の 12 本のグリッド線が存在することを意味します。

```css hidden
.wrapper {
  max-width: 1024px;
  margin: 0 auto;
  font:
    1.2em "Helvetica",
    "Arial",
    sans-serif;
}
.wrapper > * {
  border: 2px solid #f08c00;
  background-color: #ffec99;
  border-radius: 5px;
  padding: 10px;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  gap: 20px;
}
```

このグリッドシステムがどのように機能するかを示すために、ラッパーの中に 4 つの子要素を入れています。

```html-nolint
<div class="wrapper">
  <div class="item1">列 1 の線を先頭として、 3 列のトラックにまたがります。</div>
  <div class="item2">
    列 6 の線を先頭として、 4 列、2 行のトラックにまたがります。
  </div>
  <div class="item3">列 2、行 2 の線を先頭として、 3 列のトラックにまたがります。
  </div>
  <div class="item4">
    列 3 の線を先頭として、グリッドの末尾までまたがります (-1)。
  </div>
</div>
```

これらをグリッド上に配置するには、名前付きの線や `span` キーワードを使います。

```css
.item1 {
  grid-column: col-start / span 3;
}
.item2 {
  grid-column: col-start 6 / span 4;
  grid-row: 1 / 3;
}
.item3 {
  grid-column: col-start 2 / span 2;
  grid-row: 2;
}
.item4 {
  grid-column: col-start 3 / -1;
  grid-row: 3;
}
```

{{ EmbedLiveSample('A_flexible_12-column_layout', '800', '400') }}

[名前付きグリッド線を使用したガイド](/ja/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines)で説明されているように、アイテムを配置するために名前付きの線を使用しています。同じ名前の線が 12 本あるので、名前、そして線番号を使います。必要に応じて、線番号自体を使用し、名前付き線の使用を避けることもできます。

末尾の線番号を設定する代わりに、`span` キーワードを使用して、この要素がまたがるトラックの数を定義します。複数列のレイアウトシステムを使用する場合、ブロックを、それらがまたがるグリッドのトラックの数として考え、さまざまなブレークポイントに合わせて調整する人にとっては、この方法の方が直感的に理解しやすいかもしれません。ブロックがトラックにどのように配置されるかを確認するには、ブラウザーの開発者ツールにあるグリッドインスペクターを使用してください。アイテムがどのように配置されているかがはっきりとわかるでしょう。

![Firefox 開発者ツールで、グリッドに配置されたアイテムを、グリッドトラックを強調して表示しています。](11-grid-inspector-12col.png)

行を作成するためにマークアップを追加する必要はありません。CSS フレームワークのグリッドシステムでは、CSS グリッドレイアウトに対応していないブラウザーで要素が上の行に飛び出さないように、この手法がよく使用されていました。しかし、この点は今では問題ではありません。すべての現行のブラウザーは、以前から CSS グリッドレイアウトに対応しています。CSS グリッドを使用すると、アイテムを空のままにしておいても、そのアイテムが上の行に飛び出す心配なく、アイテムを行に配置することができます。この厳格な列と行の配置により、レイアウトに空欄を簡単に残すこともできます。また、アイテムをグリッドにインデントするために特別なクラスも不要です。必要なのは、アイテムの先頭の線と末尾の線を指定することだけです。

## 12 列のシステムを使用してレイアウトを作る

このレイアウト方法が実際にどのように機能するかを確認するために、 {{cssxref("grid-template-areas")}} で作成したのと同じレイアウトを、今度は 12 列のグリッドシステムを使って作成してみましょう。ここでは、グリッドテンプレート領域の例で使用したのと同じマークアップで始めます。

```css hidden
* {
  box-sizing: border-box;
}
.wrapper {
  max-width: 1024px;
  margin: 0 auto;
  font:
    1.2em "Helvetica",
    "Arial",
    sans-serif;
}

.wrapper > * {
  border: 2px solid #f08c00;
  background-color: #ffec99;
  border-radius: 5px;
  padding: 10px;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
```

```html-nolint
<div class="wrapper">
  <header class="main-head">ヘッダー</header>
  <nav class="main-nav">
    <ul>
      <li><a href="">ナビ 1</a></li>
      <li><a href="">ナビ 2</a></li>
      <li><a href="">ナビ 3</a></li>
    </ul>
  </nav>
  <article class="content">
    <h1>メイン記事領域</h1>
    <p>
      このレイアウトでは、幅が 500 ピクセル以下の画面では、領域をソース順に表示します。グリッドとグリッド上のアイテムの配置を再定義することで、2 列レイアウト、3 列レイアウトへと変化していきます。
    </p>
  </article>
  <aside class="side">サイドバー</aside>
  <div class="ad">広告</div>
  <footer class="main-footer">フッター</footer>
</div>
```

12 列のレイアウトの例で設定したグリッドを設定します。

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  gap: 20px;
}
```

今回もレスポンシブレイアウトを作成しますが、今回は名前付き行を使用します。すべてのブレークポイントは 12 列のグリッドを使用します。ただし、アイテムがまたがるトラックの数は、画面のサイズに応じて変化します。

{{glossary("mobile first", "モバイルファースト")}}で始めます。最も狭い画面では、アイテムはソースの順序のまま、すべてグリッド全体にまたがるように表示したいとします。

```css
.wrapper > * {
  grid-column: col-start / span 12;
}
```

次のブレイクポイントでは、2 列のレイアウトにしたいと思います。ヘッダーとナビゲーションはグリッド全体を使っているので、それらの位置を指定する必要はありません。サイドバーは、col-start という名前の最初の列の線から始まり、3 本に渡っています。ヘッダーとナビゲーションが最初の 2 つの行トラックにあるので、サイドバーは 3 行目以降になります。

`ad` パネルは、サイドバーの下にあるので、グリッドの行の 4 行目から始まります。そして、コンテンツとフッターは col-start 4 から始まり、9 トラックに渡ってグリッドの最後まで続きます。

```css
@media (width >= 500px) {
  .side {
    grid-column: col-start / span 3;
    grid-row: 3;
  }
  .ad {
    grid-column: col-start / span 3;
    grid-row: 4;
  }
  .content,
  .main-footer {
    grid-column: col-start 4 / span 9;
  }
  nav ul {
    display: flex;
    justify-content: space-between;
  }
}
```

最後に、最大のブレークポイントよりも大きい画面については、このレイアウトの 3 列バージョンを定義します。ヘッダーは引き続きグリッド全体に広がっていますが、ナビゲーションが下に移動して最初のサイドバーとなり、その隣にコンテンツとサイドバーが配置されています。また、フッターもレイアウト全体に広がっています。

```css
@media (width >= 700px) {
  .main-nav {
    grid-column: col-start / span 2;
    grid-row: 2 / 4;
  }
  .content {
    grid-column: col-start 3 / span 8;
    grid-row: 2 / 4;
  }
  .side {
    grid-column: col-start 11 / span 2;
    grid-row: 2;
  }
  .ad {
    grid-column: col-start 11 / span 2;
    grid-row: 3;
  }
  .main-footer {
    grid-column: col-start / span 12;
  }
  nav ul {
    flex-direction: column;
  }
}
```

{{ EmbedLiveSample('Building_a_layout_using_the_12-column_system', '800', '570') }}

繰り返しになりますが、ブラウザーの開発者ツールでグリッドインスペクターをチェックして、レイアウトがどのように形になったかを確認してください。

![グリッドインスペクターでグリッドトラックをハイライトしたレイアウトを表示します。](11-grid-inspector-12col-layout.png)

このレイアウトを作成する際に注意すべき点は、各ブレークポイントでグリッド上のすべての要素の位置を明示的に指定する必要がなかったことです。以前のブレークポイントで設定した配置を継承したからです。これは「モバイルファースト」で作業するメリットです。また、グリッドの自動配置も活用しました。要素を論理的な順序で配置しておくことで、グリッドへのアイテムの配置作業が大幅に軽減されます。

## 自動配置される製品リスト

このガイドの最後の例では、自動配置に完全に依存したレイアウトを作成します。

多くのレイアウトは、本質的には一連の「カード」で構成されています。製品リスト、画像ギャラリーなどといった具合です。グリッドを使用すると、[メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries)を追加することなく、レスポンシブな方法でこれらのリストを作成することができます。この例では、CSS グリッドとフレックスボックスのレイアウトを組み合わせて、基本的な製品リストのレイアウトを作成しています。

アイテムリストのマークアップは、順不同のアイテムリストです。各項目には、見出し、さまざまな高さのテキスト、コールトゥアクションのリンクが含まれています。

```html
<ul class="listing">
  <li>
    <h2>アイテム 1</h2>
    <div class="body">
      <p>このアイテムのコンテンツがここに来ます。</p>
    </div>
    <div class="cta">
      <a href="">コールトゥアクション</a>
    </div>
  </li>
  <li>
    <h2>アイテム 2</h2>
    <div class="body">
      <p>このアイテムのコンテンツがここに来ます。</p>
    </div>
    <div class="cta">
      <a href="">コールトゥアクション</a>
    </div>
  </li>
  <li class="wide">
    <h2>アイテム 3</h2>
    <div class="body">
      <p>このアイテムのコンテンツがここに来ます。</p>
      <p>こちらは他のアイテムよりも文字数が多いです。</p>
      <p>はるかにたくさん</p>
      <p>何か違うことができるのでは？</p>
    </div>
    <div class="cta">
      <a href="">コールトゥアクション</a>
    </div>
  </li>
  <li>
    <h2>アイテム 4</h2>
    <div class="body">
      <p>このアイテムのコンテンツがここに来ます。</p>
    </div>
    <div class="cta">
      <a href="">コールトゥアクション</a>
    </div>
  </li>
  <li>
    <h2>アイテム 5</h2>
    <div class="body">
      <p>このアイテムのコンテンツがここに来ます。</p>
    </div>
    <div class="cta">
      <a href="">コールトゥアクション</a>
    </div>
  </li>
</ul>
```

```css hidden
* {
  box-sizing: border-box;
}
img {
  max-width: 100%;
  display: block;
}
body {
  font:
    1.2em "Helvetica",
    "Arial",
    sans-serif;
}
a:link,
a:visited {
  text-decoration: none;
  color: #f08c00;
}

h2 {
  background-color: #f08c00;
  color: white;
  text-align: center;
  margin: 0;
  padding: 20px;
}
```

柔軟な列数のグリッドを作成します。列の幅は 200 ピクセル以上とし、利用可能な残りの空間を均等に分割して、常に同じ幅の列の予定表を取得するようにします。これは、予定表のサイズ指定に {{cssxref("minmax()")}} 関数を {{cssxref("repeat")}} 記法で使用することで実現できます。

```css
.listing {
  list-style: none;
  margin: 2em;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```

この CSS を追加すると、アイテムはグリッドとしてレイアウトされます。ウィンドウを小さくしたり広くしたりすると、メディアクエリーがブレークポイントを追加したり、グリッドを再定義したりすることなく、列のトラックの数も変化します。

その後、フレックスボックスを使ってボックスの内部を整理します。リストアイテムを `display: flex` に設定し、 {{cssxref("flex-direction")}} を `column` に設定します。そして、`.cta` に auto マージンを使用して、このバーをボックスの下まで押し込みます。

```css
.listing li {
  border: 1px solid #ffe066;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}
.listing .cta {
  margin-block-start: auto;
  border-block-start: 1px solid #ffe066;
  padding: 10px;
  text-align: center;
}
.listing .body {
  padding: 10px;
}
```

これが、CSS グリッドレイアウトではなくフレックスボックスを使用する主な理由のひとつです。コンテンツを単一のサイズで配置または分散する場合は、フレックスボックスが適しています。

{{ EmbedLiveSample('A_product_listing_with_auto-placement', '800', '900') }}

## dense キーワードで隙間を防ぐ

これで、ほぼ完成しました。しかし、他のカードよりもはるかに多くのコンテンツを含むカードがある場合があります。そのようなカードは 2 つのトラックにまたがって表示すると、高さがそれほど高くなりません。大きいアイテムに `wide` クラスを追加し、指定した {{cssxref("grid-column-end")}} の値を `span 2` に設定するルールを追加します。このアイテムに遭遇すると、2 つのトラックに割り当てられます。これは、一部のブレークポイントで、2 トラックのアイテムを配置するのに十分な空間がないため、グリッドにギャップが生じるということです。

![2 トラックのアイテムをレイアウトする空間がないため、隙間のあるレイアウトになっています。](11-grid-auto-flow-sparse.png)

グリッドコンテナーに {{cssxref("grid-auto-flow", "grid-auto-flow: dense")}} を設定することで、グリッドにこれらのギャップを埋め戻すことができます。この操作を行う場合は、アイテムが論理的なソースの順序から外れてしまう可能性があるため、注意してください。この操作は、アイテムに設定された順序がない場合にのみ実行してください。さらに、ソースの順序に従ってタブの順序が設定され、再配置した表示順序とは異なるため、[アクセシビリティと再配置に関する問題](/ja/docs/Web/CSS/Guides/Grid_layout/Accessibility#視覚的な、しかし論理的ではない並べ替え)が発生する可能性があることに注意してください。

```html hidden
<ul class="listing">
  <li>
    <h2>アイテム 1</h2>
    <div class="body"><p>このアイテムのコンテンツがここに来ます。</p></div>
    <div class="cta"><a href="">コールトゥアクション</a></div>
  </li>
  <li>
    <h2>アイテム 2</h2>
    <div class="body"><p>このアイテムのコンテンツがここに来ます。</p></div>
    <div class="cta"><a href="">コールトゥアクション</a></div>
  </li>
  <li class="wide">
    <h2>アイテム 3</h2>
    <div class="body">
      <p>このアイテムのコンテンツがここに来ます。</p>
      <p>こちらは他のアイテムよりも文字数が多いです。</p>
      <p>はるかにたくさん</p>
      <p>何か違うことができるのでは？</p>
    </div>
    <div class="cta"><a href="">コールトゥアクション</a></div>
  </li>
  <li>
    <h2>アイテム 4</h2>
    <div class="body"><p>このアイテムのコンテンツがここに来ます。</p></div>
    <div class="cta"><a href="">コールトゥアクション</a></div>
  </li>
  <li>
    <h2>アイテム 5</h2>
    <div class="body"><p>このアイテムのコンテンツがここに来ます。</p></div>
    <div class="cta"><a href="">コールトゥアクション</a></div>
  </li>
</ul>
```

```css hidden
* {
  box-sizing: border-box;
}
img {
  max-width: 100%;
  display: block;
}
body {
  font:
    1.2em "Helvetica",
    "Arial",
    sans-serif;
}
a:link,
a:visited {
  text-decoration: none;
  color: #f08c00;
}

h2 {
  background-color: #f08c00;
  color: white;
  text-align: center;
  margin: 0;
  padding: 20px;
}

.listing li {
  border: 1px solid #ffe066;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}
.listing .cta {
  margin-block-start: auto;
  border-block-start: 1px solid #ffe066;
  padding: 10px;
  text-align: center;
}
.listing .body {
  padding: 10px;
}
```

```css
.listing {
  list-style: none;
  margin: 2em;
  display: grid;
  gap: 20px;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
.listing .wide {
  grid-column-end: span 2;
}
```

{{ EmbedLiveSample('Preventing_gaps_with_the_dense_keyword', '800', '900') }}

特定のアイテムにいくつかのルールを適用して自動配置を使用することはとても便利で、CMS 出力など、制御できないコンテンツに役立ちます。CMS 出力では、アイテムが繰り返し出現しますが、[構造擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes#ツリー構造擬似クラス)を使用して、それらを対象とすることができます。

## さらなる探求

CSS グリッドレイアウトは、非常に多くの可能性を提供します。グリッドレイアウトの使用方法を学ぶ最良の方法は、ここで取り上げた例と同様の例を構築し続けることです。お好みのレスポンシブサイトからレイアウトを選び、グリッドを使用して構築できるかどうか試してみてください。雑誌やその他のウェブ以外のソースから着想を得ることもできます。

- [CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout)
- [CSS レイアウト: グリッド](/ja/docs/Learn_web_development/Core/CSS_layout/Grids)
- [A complete guide to CSS grid](https://css-tricks.com/snippets/css/complete-guide-grid/) on CSS-Tricks (2023)
- [Grid by example](https://gridbyexample.com/)
- [CSS grid website layout examples](https://www.quackit.com/css/grid/examples/css_grid_website_layout_examples.cfm) on quackit.com
