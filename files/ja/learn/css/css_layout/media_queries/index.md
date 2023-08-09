---
title: メディアクエリーの初心者向けガイド
slug: Learn/CSS/CSS_layout/Media_queries
---

{{learnsidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Responsive_Design", "Learn/CSS/CSS_layout/Legacy_Layout_Methods", "Learn/CSS/CSS_layout")}}

**CSS メディアクエリー**（CSS Media Query）を使用すると、例えば、「ビューポートは 480 ピクセルよりも広い」というような、ブラウザーとデバイスの環境が指定した規則に一致する場合にのみ CSS を適用できます。 メディアクエリーは、ビューポートのサイズに応じて異なるレイアウトを作成できるため、レスポンシブ Web デザイン（responsive web design、RWD）の重要な部分ですが、例えば、ユーザーはマウスではなくタッチスクリーンを使用しているというような、サイトが実行されている環境に関する他のものを検出するためにも使用できます。 このレッスンでは、最初にメディアクエリーで使用される構文について学習し、次に単純なデザインでどのようにレスポンシブにするかを示す実際の例で使用してみます。

| 前提知識: | HTML の基本（[HTML 入門](/ja/docs/Learn/HTML/Introduction_to_HTML)を学ぶ）、および CSS の機能の考え方（[CSS の第一歩](/ja/docs/Learn/CSS/First_steps)と [CSS の構成要素](/ja/docs/Learn/CSS/Building_blocks)を学ぶ）。 |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 学習目標: | メディアクエリーの使用方法、およびそれらを使用してレスポンシブデザインを作成するための最も一般的なアプローチを理解する。                                                                                               |

## メディアクエリーの基本

最も単純なメディアクエリーの構文は次のようになります。

```css
@media media-type and (media-feature-rule) {
  /* CSS 規則をここに */
}
```

これは、次のもので構成されます。

- メディア種別（media type）。 このコードがどのようなメディア（例えば、印刷、画面）のためのものであるかをブラウザーに伝えます。
- メディア式。 規則（rule）または、含まれている CSS を適用するために合格する必要があるテストです。
- CSS 規則のセット。 テストに合格し、メディア種別が正しい場合に適用されます。

### メディア種別

指定できるメディアの種類は次のとおりです。

- `all`（すべて）
- `print`（印刷）
- `screen`（画面）
- `speech`（音声合成）

次のメディアクエリーは、ページが印刷される場合にのみ `body` を `12pt` に設定します。 ページがブラウザーにロードされるときは適用されません。

```css
@media print {
  body {
    font-size: 12pt;
  }
}
```

> **メモ:** ここでのメディア種別は、いわゆる {{glossary("MIME type","MIME タイプ")}}とは異なります。

> **メモ:** レベル 3 のメディアクエリー仕様には、他にも多くのメディア種別が定義されています。 これらは非推奨であり、避けるべきです。

> **メモ:** メディア種別はオプションです。 メディアクエリーでメディア種別を指定しない場合、メディアクエリーはデフォルトですべてのメディア種別用になります。

### メディア特性の規則

タイプを指定したら、規則を使用してメディア特性（media feature）を対象にできます。

#### 幅と高さ

レスポンシブデザインを作成するために最も頻繁に検出される特性（そして広範なブラウザーサポートを備えた特性）は、ビューポートの幅で、ビューポートが特定の幅よりも上または下にある（または正確な幅の）場合に、CSS を適用できます。 これには、`min-width`、`max-width`、`width` のメディア特性を使用します。

これらの特性は、さまざまな画面サイズに対応するレイアウトを作成するために使用されます。 例えば、ビューポートが正確に 600 ピクセルの場合に `body` のテキストの色を赤に変更するには、次のメディアクエリーを使用します。

```css
@media screen and (width: 600px) {
  body {
    color: red;
  }
}
```

ブラウザーで[この例を開く](https://mdn.github.io/css-examples/learn/media-queries/width.html)か、[ソースを表示](https://github.com/mdn/css-examples/blob/master/learn/media-queries/width.html)します。

`width`（および `height`）のメディア特性は範囲として使用でき、`min-` または `max-` を前に付けて、指定された値が最小または最大であることを示します。 例えば、ビューポートが 600 ピクセルより狭い場合に色を青にするには、次のように `max-width` を使用します。

```css
@media screen and (max-width: 600px) {
  body {
    color: blue;
  }
}
```

ブラウザーで[この例を開く](https://mdn.github.io/css-examples/learn/media-queries/max-width.html)か、[ソースを表示](https://github.com/mdn/css-examples/blob/master/learn/media-queries/max-width.html)します。

実際には、レスポンシブデザインでは最小値または最大値を使用する方がはるかに便利であるため、`width` または `height` を単独で使用することはほとんどありません。

テストできるメディア特性は他にも多数ありますが、メディアクエリー仕様のレベル 4 および 5 で導入された新しい特性の一部は、ブラウザーサポートが制限されています。 各特性は、ブラウザーサポート情報とともに MDN で文書化されていて、完全なリストは、[メディアクエリーの使用: メディア特性](/ja/docs/Web/CSS/@media#メディア特性)で見つけることができます。

#### オリエンテーション

よくサポートされているメディア特性の 1 つはオリエンテーション（`orientation`）です。 これにより、ポートレートモード（`portrait` mode、肖像画のような縦長）またはランドスケープモード（`landscape` mode、風景画のような横長）をテストできます。 デバイスがランドスケープの場合に本文の色を変更するには、次のメディアクエリーを使用します。

```css
@media (orientation: landscape) {
  body {
    color: rebeccapurple;
  }
}
```

ブラウザーで[この例を開く](https://mdn.github.io/css-examples/learn/media-queries/orientation.html)か、[ソースを表示](https://github.com/mdn/css-examples/blob/master/learn/media-queries/orientation.html)します。

標準のデスクトップビューはランドスケープであり、このオリエンテーションで適切に機能するデザインは、ポートレートモードの携帯電話またはタブレットで表示した場合に機能しない場合があります。 オリエンテーションのテストは、ポートレートモードのデバイス用に最適化されたレイアウトの作成に役立ちます。

#### ポインティングデバイスの使用

レベル 4 仕様の一部として、ホバー（`hover`）メディア特性が導入されました。 この特性は、ユーザーが要素の上にポインターを乗せることができるかどうかをテストできることを意味します。 つまり、本質的に何らかのポインティングデバイスを使用していることを意味します。 タッチスクリーンとキーボードナビゲーションはホバーしません。

```css
@media (hover: hover) {
  body {
    color: rebeccapurple;
  }
}
```

ブラウザーで[この例を開く](https://mdn.github.io/css-examples/learn/media-queries/hover.html)か、[ソースを表示](https://github.com/mdn/css-examples/blob/master/learn/media-queries/hover.html)します。

ユーザーがホバーできないことがわかっている場合、デフォルトでいくつかのインタラクティブ機能を表示できます。 ホバーできるユーザーの場合、リンクの上にポインターを乗せたときにそれらを利用可能にすることを選択できます。

レベル 4 には、ポインター（`pointer`）メディア特性もあります。 これには、`none`（なし）、`fine`（細かい）、`coarse`（粗い）の 3 つの値があります。 `fine` ポインターは、マウスやトラックパッドのようなものです。 これにより、ユーザーは狭い領域を正確に対象にすることができます。 `coarse` ポインターは、タッチスクリーン上の指です。 値 `none` は、ユーザーにポインティングデバイスがないことを意味し、おそらく、キーボードのみ、または音声コマンドでナビゲートしています。

`pointer` を使用すると、ユーザーが画面に対して行っている操作の種類に対応する、より優れたインターフェイスを設計できます。 例えば、ユーザーがタッチスクリーンでデバイスと対話していることがわかっている場合、より大きなヒット領域を作成できます。

## より複雑なメディアクエリー

考えられるさまざまなメディアクエリーのすべてを使用して、それらを組み合わせたり、いずれにも一致する可能性があるクエリーのリストを作成したりすることができます。

### メディアクエリーの "and" 論理

メディア特性を組み合わせるには、上記で `and` を使用してメディア種別とメディア特性を組み合わせるのとほぼ同じ方法で `and` を使用できます。 例えば、`min-width` と `orientation` をテストする場合があります。 ビューポートの幅が少なくとも 600 ピクセルで、デバイスがランドスケープモードの場合にのみ `body` のテキストは青色になります。

```css
@media screen and (min-width: 600px) and (orientation: landscape) {
  body {
    color: blue;
  }
}
```

ブラウザーで[この例を開く](https://mdn.github.io/css-examples/learn/media-queries/and.html)か、[ソースを表示](https://github.com/mdn/css-examples/blob/master/learn/media-queries/and.html)します。

### メディアクエリーの "or" 論理

クエリーのセットがあり、そのいずれかが一致する場合、これらのクエリーをコンマで区切ることができます。 次の例では、ビューポートの幅が少なくとも 600 ピクセルの場合、**または**デバイスがランドスケープの場合、テキストは青になります。 これらのいずれかが当てはまる場合、クエリーは一致します。

```css
@media screen and (min-width: 600px), screen and (orientation: landscape) {
  body {
    color: blue;
  }
}
```

ブラウザーで[この例を開く](https://mdn.github.io/css-examples/learn/media-queries/or.html)か、[ソースを表示](https://github.com/mdn/css-examples/blob/master/learn/media-queries/or.html)します。

### メディアクエリーの "not" 論理

`not` 演算子を使用して、メディアクエリー全体を否定することができます。 これにより、メディアクエリー全体の意味が逆になります。 したがって、次の例では、オリエンテーションがポートレートの場合にのみテキストが青になります。

```css
@media not all and (orientation: landscape) {
  body {
    color: blue;
  }
}
```

ブラウザーで[この例を開く](https://mdn.github.io/css-examples/learn/media-queries/not.html)か、[ソースを表示](https://github.com/mdn/css-examples/blob/master/learn/media-queries/not.html)します。

## ブレークポイントの選択方法

レスポンシブデザインの初期には、多くのデザイナーが非常に具体的な画面サイズを対象にしようとしました。 人気のある携帯電話やタブレットの画面のサイズのリストは、それらのビューポートにきちんと一致するデザインを作成できるように公開されました。

現在、非常に多様なサイズのデバイスが多すぎて、それを実現できません。 つまり、すべてのデザインにおいて特定のサイズを対象にするのではなく、コンテンツが何らかの方法で壊れ始める（starts to break）サイズでデザインを変更することをお勧めします。 おそらく、行の長さが非常に長くなるか、枠で囲まれたサイドバーが押しつぶされて読みにくくなります。 これが、メディアクエリーを使用して、使用可能なスペースに合わせてデザインをより良いものに変更するポイントです。 このアプローチは、使用されているデバイスの正確な寸法は問題ではなく、あらゆる範囲に対応できることを意味します。 メディアクエリーが導入されるポイントは、**ブレークポイント**（breakpoints）と呼ばれます。

Firefox 開発ツールの[レスポンシブデザインモード](/ja/docs/Tools/Responsive_Design_Mode)は、これらのブレークポイントがどこに行くべきかを判断するのに非常に便利です。 メディアクエリーを追加してデザインを微調整しながら、ビューポートを小さくしたり大きくしたりして、コンテンツが改善される場所を簡単に確認できます。

![Firefox 開発ツールのモバイルビューのレイアウトのスクリーンショット。](rwd-mode.png)

## 能動的学習: モバイルファースト レスポンシブデザイン

レスポンシブデザインには、大きく分けて 2 つのアプローチがあります。 デスクトップまたは最も広いビューから始めて、ビューポートが小さくなるにつれて並べ替えるためのブレークポイントを追加するか、最小のビューから始めて、ビューポートが大きくなるにつれてレイアウトを追加することができます。 この 2 番目のアプローチは、**モバイルファースト** レスポンシブデザインと呼ばれ、多くの場合、従うべき最善のアプローチです。

非常に小さなデバイスのビューは、通常フローで見られるように、多くの場合、コンテンツの単純な 1 列です。 これは、小さなデバイスに対して多くのレイアウトを行う必要がほとんどないことを意味します — ソースを適切な順序にすれば、デフォルトで読みやすいレイアウトになります。

以下のチュートリアルでは、非常に単純なレイアウトでこのアプローチを説明します。 実稼働サイトでは、メディアクエリー内で調整する必要があるものが多くありますが、アプローチはまったく同じです。

### チュートリアル: 単純なモバイルファーストのレイアウト

出発点は、レイアウトのさまざまな部分に背景色を追加するために CSS を適用した HTML ドキュメントです。

```css
* {
  box-sizing: border-box;
}

body {
  width: 90%;
  margin: 2em auto;
  font:
    1em/1.3 Arial,
    Helvetica,
    sans-serif;
}

a:link,
a:visited {
  color: #333;
}

nav ul,
aside ul {
  list-style: none;
  padding: 0;
}

nav a:link,
nav a:visited {
  background-color: rgba(207, 232, 220, 0.2);
  border: 2px solid rgb(79, 185, 227);
  text-decoration: none;
  display: block;
  padding: 10px;
  color: #333;
  font-weight: bold;
}

nav a:hover {
  background-color: rgba(207, 232, 220, 0.7);
}

.related {
  background-color: rgba(79, 185, 227, 0.3);
  border: 1px solid rgb(79, 185, 227);
  padding: 10px;
}

.sidebar {
  background-color: rgba(207, 232, 220, 0.5);
  padding: 10px;
}

article {
  margin-bottom: 1em;
}
```

レイアウトの変更は行っていませんが、ドキュメントのソースはコンテンツが読みやすいように並べられています。 これは重要な最初のステップであり、コンテンツがスクリーンリーダーで読み上げられる場合に理解できるようにするものです。

```html
<body>
  <div class="wrapper">
    <header>
      <nav>
        <ul>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="">Meet the team</a></li>
          <li><a href="">Blog</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <article>
        <div class="content">
          <h1>Veggies!</h1>
          <p>...</p>
        </div>
        <aside class="related">
          <p>...</p>
        </aside>
      </article>

      <aside class="sidebar">
        <h2>External vegetable-based links</h2>
        <ul>
          <li>...</li>
        </ul>
      </aside>
    </main>

    <footer><p>&copy;2019</p></footer>
  </div>
</body>
```

この単純なレイアウトはモバイルでもうまく機能します。 開発ツールのレスポンシブデザインモードでレイアウトを眺めると、サイトのモバイルビューそのものと同じように機能することがわかります。

ブラウザーで[ステップ 1 を開く](https://mdn.github.io/css-examples/learn/media-queries/step1.html)か、[ソースを表示](https://github.com/mdn/css-examples/blob/master/learn/media-queries/step1.html)します。

**この例をフォローして実装してみたい場合は、コンピューターに [step1.html](https://github.com/mdn/css-examples/blob/master/learn/media-queries/step1.html) のローカルコピーを作成します。**

このポイントから、行の長さが非常に長くなり、ナビゲーションのためのスペースが水平線で表示されるまで、レスポンシブデザインモードのビューのドラッグを始めます。 これが、最初のメディアクエリーを追加する場所です。 `em` を使用すると、ユーザーがテキストのサイズを大きくした場合、テキストのサイズが小さいユーザーよりも、同様の行長で広いビューポートでブレークポイントが発生します。

**step1.html の CSS の下部に以下のコードを追加します。**

```css
@media screen and (min-width: 40em) {
  article {
    display: grid;
    grid-template-columns: 3fr 1fr;
    column-gap: 20px;
  }

  nav ul {
    display: flex;
  }

  nav li {
    flex: 1;
  }
}
```

この CSS は、記事（`article`）内の 2 列のレイアウトで、記事のコンテンツ（`content`）および余談（`aside`）要素の関連（`related`）情報を提供します。 また、フレックスボックスを使用してナビゲーション（`nav`）を 1 行に配置します。

ブラウザーで[ステップ 2 を開く](https://mdn.github.io/css-examples/learn/media-queries/step2.html)か、[ソースを表示](https://github.com/mdn/css-examples/blob/master/learn/media-queries/step2.html)します。

サイドバー（`sidebar`）が新しい列を形成するのに十分なスペースがあると感じるまで、幅を拡張し続けます。 メディアクエリー内で、主要な（`main`）要素を 2 列のグリッドにします。 次に、2 つのサイドバーが互いに揃うように `article` の {{cssxref("margin-bottom")}} を削除する必要があります。 フッター（`footer`）の上部に {{cssxref("border")}} を追加します。 通常、これらの小さな調整は、各ブレークポイントでデザインをきれいに見せるために行うことです。

**再び、step1.html の CSS の下部に以下のコードを追加します。**

```css
@media screen and (min-width: 70em) {
  main {
    display: grid;
    grid-template-columns: 3fr 1fr;
    column-gap: 20px;
  }

  article {
    margin-bottom: 0;
  }

  footer {
    border-top: 1px solid #ccc;
    margin-top: 2em;
  }
}
```

ブラウザーで[ステップ 3 を開く](https://mdn.github.io/css-examples/learn/media-queries/step3.html)か、[ソースを表示](https://github.com/mdn/css-examples/blob/master/learn/media-queries/step3.html)します。

さまざまな幅で最後の例を見ると、デザインがどのように反応し、利用可能な幅に応じて 1 列、2 列、または 3 列として機能するかを確認できます。 これは、モバイルファースト レスポンシブデザインの非常に単純な例です。

## The viewport meta tag

If you look at the HTML source in the above example, you'll see the following element included in the head of the document:

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

This is the [viewport meta tag](/ja/docs/Mozilla/Mobile/Viewport_meta_tag) — it exists as a way control how mobile browsers render content. This is needed because by default, most mobile browsers lie about their viewport width. Non-responsive sites commonly look really bad when rendered in a narrow viewport, so mobile browsers usually render the site with a viewport width wider than the real device width by default (usually 960 pixels), and then shrink the rendered result so that it fits in the display.

This is all well and good, but it means that responsive sites are not going to work as expected. If the viewport width is reported as 960 pixels, then mobile layouts (for example created using a media query of `@media screen and (max-width: 600px) { ... }`) are not going to render as expected.

To remedy this, including a viewport meta tag like the one above on your page tells the browser "don't render the content with a 960 pixel viewport — render it using the real device width instead, and set a default initial scale level for better consistency." The media queries will then kick in as expected.

There are a number of other options you can put inside the `content` attribute of the viewport meta tag — see [Using the viewport meta tag to control layout on mobile browsers](/ja/docs/Mozilla/Mobile/Viewport_meta_tag) for more details.

## メディアクエリーが本当に必要ですか？

フレックスボックス、グリッド、および段組みのレイアウトはすべて、メディアクエリーを必要とせずに、柔軟でレスポンシブなコンポーネントを作成する方法を提供します。 これらのレイアウト方法が、メディアクエリーを追加せずに目的を達成できるかどうかを常に検討する価値があります。 例えば、少なくとも 200 ピクセル幅のカードのセットが必要な場合があります。 これらの 200 ピクセルの多くは、`main` の `article` に収まります。 これは、メディアクエリーをまったく使用せずに、グリッドレイアウトで実現できます。

これは、次を使用して実現できます。

```html
<ul class="grid">
  <li>
    <h2>Card 1</h2>
    <p>...</p>
  </li>
  <li>
    <h2>Card 2</h2>
    <p>...</p>
  </li>
  <li>
    <h2>Card 3</h2>
    <p>...</p>
  </li>
  <li>
    <h2>Card 4</h2>
    <p>...</p>
  </li>
  <li>
    <h2>Card 5</h2>
    <p>...</p>
  </li>
</ul>
```

```css
.grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

.grid li {
  border: 1px solid #666;
  padding: 10px;
}
```

ブラウザーで[グリッドレイアウトの例を開く](https://mdn.github.io/css-examples/learn/media-queries/grid.html)か、[ソースを表示](https://github.com/mdn/css-examples/blob/master/learn/media-queries/grid.html)します。

ブラウザーで例を開いた状態で、画面を拡大および縮小して、列トラック数の変更を確認します。 このメソッドの良い点は、グリッドがビューポートの幅ではなく、このコンポーネントで使用可能な幅を見ていることです。 メディアクエリーに関するセクションに、それがまったく必要ないかもしれないという提案をまとめるのは奇妙に思えるかもしれません！ しかしながら、実際には、メディアクエリーで強化された最新のレイアウト方法を適切に使用すると、最良の結果が得られることがわかります。

## Test your skills!

You've reached the end of this article, but can you remember the most important information? You can find a test to verify that you've retained this information before you move on — see [Test your skills: Responsive Web Design](/ja/docs/Learn/CSS/CSS_layout/rwd_skills).

## まとめ

このレッスンでは、メディアクエリーについて学び、実際にそれらを使用してモバイルファースト レスポンシブデザインを作成する方法もみいだしました。

作成した開始点を使用して、さらにメディアクエリーをテストできます。 例えば、`pointer` メディア特性を使用して、訪問者が粗いポインターを持つことを検出した場合、ナビゲーションのサイズを変更できます。

また、さまざまなコンポーネントを追加して、メディアクエリーを追加するか、フレックスボックスやグリッドなどのレイアウト方法を使用するのがコンポーネントをレスポンシブにするのに最も適切な方法かどうかを試すこともできます。 多くの場合、正しい方法も間違った方法もありません。 あなたのデザインとコンテンツに最適な方法を試してみてください。

{{PreviousMenuNext("Learn/CSS/CSS_layout/Responsive_Design", "Learn/CSS/CSS_layout/Legacy_Layout_Methods", "Learn/CSS/CSS_layout")}}
