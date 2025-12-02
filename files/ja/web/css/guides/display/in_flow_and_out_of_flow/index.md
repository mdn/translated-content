---
title: フロー内とフローの外
slug: Web/CSS/Guides/Display/In_flow_and_out_of_flow
original_slug: Web/CSS/CSS_display/In_flow_and_out_of_flow
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

[前のガイド](/ja/docs/Web/CSS/Guides/Display/Block_and_inline_layout)では、通常フロー内でのブロック及びインラインレイアウトを説明しました。フロー内のすべての要素は、この方法を使用して配置されます。

## フロー内の要素の例

以下の例では、見出し、段落、リスト、そして `strong` 要素を含む最後の段落があります。見出しと段落はブロックレベルで、 `strong` 要素はインラインです。リストはフレックスボックスを使用してアイテムを 1 行に配置していますが、ブロックレイアウトとインラインレイアウトの両方に対応しています。 - コンテナーは外側で `display` が `block` になっています。

```html live-sample___in-flow
<div class="box">
  <h1>見出し</h1>
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney.
  </p>

  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </ul>
  <p>
    Their names were <strong>Stephen and Joseph Montgolfier</strong>, they were
    papermakers by trade, and were noted as possessing thoughtful minds and a
    deep interest in all scientific knowledge and new discovery.
  </p>
</div>
```

```css live-sample___in-flow
body {
  font: 1.2em sans-serif;
}
.box > * {
  border: 1px solid green;
}

ul {
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin: 0;
}
```

{{EmbedLiveSample("in-flow", "", "300px")}}

すべての要素がフローの中にあるといえます。ページ上にはソース内にある順序で出現しています。

## 項目のフローの外への持ち出し

以下のものを除いて、すべての要素がフロー内にあります。

- 浮動アイテム
- `position: absolute` のアイテム (同様に機能する `position: fixed` を含む)
- ルート要素 (`html`)

フローの外のアイテムは、新しい[ブロック整形コンテキスト](/ja/docs/Web/CSS/Guides/Display/Block_formatting_context) (BFC) を作成するので、その中のものはページの残りから独立して、小さなレイアウトのように見えます。したがってルート要素はフローの外で、文書内のすべてのコンテナーとして、文書のブロック整形コンテキストを確立します。

### 浮動アイテム

この例では 1 つの `div` と、それから 2 つの段落があります。段落には背景色を塗っており、 `div` を左側に浮動させました。 `div` はフローの外になりました。

浮動アイテムとして、最初は通常のフローであるようにレイアウトされますが、そのあとでフローから取り出され、左側のできるだけ遠くに移動されました。

```html live-sample___float
<div class="box">
  <div class="float">これは浮動ボックスです。</div>
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery.
  </p>
  <p>
    Before that night—a memorable night, as it was to prove—hundreds of millions
    of people had watched the rising smoke-wreaths of their fires without
    drawing any special inspiration from the fact.
  </p>
</div>
```

```css live-sample___float
body {
  font: 1.2em sans-serif;
}
p {
  background-color: #ccc;
}

.float {
  float: left;
  font-weight: bold;
  width: 200px;
  border: 2px dotted black;
  padding: 10px;
}
```

{{EmbedLiveSample("float", "", "260px")}}

次の段落の背景色が下層に表示されているのが見えます。その段落の行ボックスだけが短縮され、浮動アイテムの周りでコンテンツを折り返す効果があります。段落のボックスは、通常のフローの規則に従って表示されます。このため、行ボックスから距離を置くために浮動アイテムの周りに間隔を作るには、アイテムにマージンを追加する必要があります。このために以下のフロー内のコンテンツに追加することができるものはありません。

### 絶対位置指定

アイテムに `position: absolute` または `position: fixed` を与えると、アイテムをフローから外し、アイテムが占めるはずだった空間も除去されます。次の例では、3 つの段落要素を用い、2 番目の要素は `position` を `absolute` にし、オフセット値を `top: 30px` および `right: 30px` としています。アイテムは文書フローから除去されています。

```html live-sample___abspos
<div class="box">
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney.
  </p>
  <p class="abspos">
    Their names were Stephen and Joseph Montgolfier, they were papermakers by
    trade, and were noted as possessing thoughtful minds and a deep interest in
    all scientific knowledge and new discovery.
  </p>
  <p>
    Before that night—a memorable night, as it was to prove—hundreds of millions
    of people had watched the rising smoke-wreaths of their fires without
    drawing any special inspiration from the fact.
  </p>
</div>
```

```css live-sample___abspos
body {
  font: 1.2em sans-serif;
}
.box {
  width: 70%;
}
p {
  border: 2px solid green;
}

.abspos {
  position: absolute;
  background-color: green;
  color: #fff;
  top: 30px;
  right: 30px;
  width: 400px;
}
```

{{EmbedLiveSample("abspos", "", "240px")}}

`position: fixed` を使用しても、アイテムをフローから除去しますが、オフセットは包含ブロックではなくビューポートからのものになります。

位置指定してアイテムをフローの外に持ち出す場合、コンテンツが重複する可能性を管理する必要があります。フローの外ということは、基本的にページ内の他の要素が、その要素が存在することを知ることがなく、従って影響を与えないことを意味します。

### 相対位置指定とフロー

アイテムに `position: relative` によって相対位置を与えた場合、フロー内には残りますが、周囲を押し広げるためにオフセット値を使用することができます。しかし、以下の例のように、通常フローで配置するはずだった空間は予約されます。

```html live-sample___relative
<div class="box">
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney.
  </p>
  <p class="relative">
    Their names were Stephen and Joseph Montgolfier, they were papermakers by
    trade, and were noted as possessing thoughtful minds and a deep interest in
    all scientific knowledge and new discovery.
  </p>
  <p>
    Before that night—a memorable night, as it was to prove—hundreds of millions
    of people had watched the rising smoke-wreaths of their fires without
    drawing any special inspiration from the fact.
  </p>
</div>
```

```css live-sample___relative
body {
  font: 1.2em sans-serif;
}
.box {
  width: 70%;
}
p {
  border: 2px solid green;
}

.relative {
  position: relative;
  background-color: green;
  color: #fff;
  bottom: 50px;
  left: 50px;
  width: 400px;
}
```

{{EmbedLiveSample("relative", "", "360px")}}

アイテムを除去するために何かをしたり、アイテムを通常フローで配置される場所からずらしたりした場合は、重ならないようにコンテンツやコンテンツの周囲を管理する必要が出てくる可能性があります。浮動をクリアしたり、要素に `position: absolute` を設定して他のコンテンツの上に来ないようにします。このため、フロー内の要素を除去する方法は、このような影響を理解したうえで使用する必要があります。

## まとめ

このガイドでは、特定の種類の位置指定を実現するために、要素をフローの外に持ち出す方法を紹介しました。次のガイドでは、[ブロック整形コンテキスト](/ja/docs/Web/CSS/Guides/Display/Block_formatting_context)を作成する上での関連する問題を[整形コンテキストの紹介](/ja/docs/Web/CSS/Guides/Display/Formatting_contexts)の中で見てみます。

## 関連情報

- [学習: 位置指定](/ja/docs/Learn_web_development/Core/CSS_layout/Positioning)
