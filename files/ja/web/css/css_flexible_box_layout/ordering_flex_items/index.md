---
title: フレックスアイテムの順序
slug: Web/CSS/CSS_flexible_box_layout/Ordering_flex_items
l10n:
  sourceCommit: 8a7e911652fcb4a61cc95f458d53f39ad08c0946
---

{{CSSRef}}

フレックスボックスやグリッドなどのレイアウト方式には、コンテンツの順序を制御することができます。この記事では、フレックスボックスを使っている場合にコンテンツの視覚的な順序を変更する方法について見ていきます。また、アイテムの順序の変更が、アクセシビリティにどう影響するかについても考察します。

## アイテムを逆順に表示する

{{cssxref("flex-direction")}} プロパティは以下の 4 つの値のうち一つを取ることができます。

- `row`
- `column`
- `row-reverse`
- `column-reverse`

最初の 2 つの値は、文書のソースの順番と同じ順番で項目を保持し、先頭行から順に表示します。

![アイテムが左から始まり一行に表示されています。](basics1.png)

![アイテムが上から始まり一列に表示されています。](align10.png)

下 2 つの値は先頭と末尾を入れ替えて、アイテムを逆順に表示します。

![アイテムが右から始まり逆順に表示されています。](align9.png)

![アイテムが下から始まり一列に逆順に表示されています。](align11.png)

先頭は書字方向に応じて変わるということを思い出してください。先ほどの例のうち行についてのものは、`row` と `row-reverse` が英語のような左書きの言語においてどのように作用するかを示しています。アラビア語のような右書きの言語を使用している場合には、`row` では右から始まり `row-reverse` では左から始まります。

![アラビア文字の場合に row が右から始まり、 row-reverse では左から始まることを示すフレックスコンテナー](order-rtl.png)

これは、アイテムを逆順で表示する簡単な方法のように思えるかもしれません。しかし、アイテムは視覚的にのみ逆順で表示されることに留意すべきです。フレックスレイアウトの並び替え機能は、視覚的なレンダリングのみに影響します。タブ順序と読み上げ順序はソースコードの順序に従います。つまり、視覚的な表示のみが変更され、ソース順序は同じままなので、 CSS 非対応の UA （Siri や Alexa を考えてください）や支援技術のユーザーには使い勝手が異なるものになります。ナビゲーションバーの順序を変更しても、タブ順は文書内のソース順のまま変わりません。これは、視覚的な順序ではなく、認知的に混乱を招く可能性があります。

逆順の値を設定しているときや、そのほかの方法でアイテムの順序を変更している場合、ソース内の論理的な順序を変更すべきかどうかを考慮する必要があります。

フレックスボックスレイアウトの仕様書では、ソースの課題を修正する方法として並べ替えを使用しないよう警告しています。

> 「文書のアクセシビリティを損なうため、 order や {{cssxref("flex-flow")}}/`flex-direction` の \*-reverse 値をソース順序の修正の代用として利用してはいけません。」

次の例ではでリンクからリンクへとタブキーを押していくと、フォーカススタイルが強調表示されます。これで、 `flex-direction` を使用してフレックスアイテムの順序を変更しても、タブ順序は変更されず、ソースコードの順序に従うことで続けることが分かります。

```html live-sample___flex-direction
<div class="box">
  <div><a href="#">One</a></div>
  <div><a href="#">Two</a></div>
  <div><a href="#">Three</a></div>
</div>
```

```css live-sample___flex-direction
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
}

.box > * a:focus {
  background-color: yellow;
  color: black;
}

.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-direction: row-reverse;
}
```

{{EmbedLiveSample("flex-direction")}}

`flex-direction` の変更がタブ順を変更しないのと同様に、描画の順序についても変更されることはありません。あくまでアイテムの表示上の順序が逆転するだけです。

## order プロパティ

フレックスアイテムが表示される順序を逆転することができましたが、それに加えて {{cssxref("order")}} プロパティを使用することでアイテム個別に表示される順序を変更することができます。

{{cssxref("order")}} プロパティは、アイテムを*数字で順序づけたグループ*でレイアウトするよう設計されています。つまりアイテムはグループ内での順序を表す整数に割り当てられ、その数字が小さい順に表示されるということです。同じ数字が複数のアイテムに割り当てられているときは、ソース上に現れる順に表示されます。

例として、5 つのアイテムに対して以下のように `order` を割り当てます。

- ソース上で 1 番目のアイテム: `order: 2`
- ソース上で 2 番目のアイテム: `order: 3`
- ソース上で 3 番目のアイテム: `order: 1`
- ソース上で 4 番目のアイテム: `order: 3`
- ソース上で 5 番目のアイテム: `order: 1`

このときアイテムは以下の順序でページ上に表示されます。

- ソース上で 3 番目のアイテム: `order: 1`
- ソース上で 5 番目のアイテム: `order: 1`
- ソース上で 1 番目のアイテム: `order: 2`
- ソース上で 2 番目のアイテム: `order: 3`
- ソース上で 4 番目のアイテム: `order: 3`

![ソース上の順序を示す番号を表示している順序変更されたアイテム](order-property.png)

以下の例で値を変更して、表示順がどのように変わるか試してみてください。また `flex-direction` を `row-reverse` に変えたときに何が起こるか、つまり先頭が変わるために反対側から並べられることを確かめましょう。

```html live-sample___order
<div class="box">
  <div><a href="#">1</a></div>
  <div><a href="#">2</a></div>
  <div><a href="#">3</a></div>
  <div><a href="#">4</a></div>
  <div><a href="#">5</a></div>
</div>
```

```css live-sample___order
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
}

.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-direction: row;
}
.box :nth-child(1) {
  order: 2;
}
.box :nth-child(2) {
  order: 3;
}
.box :nth-child(3) {
  order: 1;
}
.box :nth-child(4) {
  order: 3;
}
.box :nth-child(5) {
  order: 1;
}
```

{{EmbedLiveSample("order")}}

フレックスアイテムの既定の `order` は `0` です。したがって `0` より大きい `order` をもつアイテムは、明示的に `order` を指定されていないアイテムの後ろに表示されます。

`order` には負の値を指定することもでき、ほかのアイテムはそのままの順序を保ちながら一つのアイテムだけを先頭に表示したい場合になどに有用です。先頭に表示したいアイテムの順序を `-1` を設定することで、 `0` より小さい `order` のこのアイテムが常に先頭に表示されるようになります。

以下の例では フレックスボックスを使ってレイアウトをしています。HTML の中で指定されている `active` クラスを別のアイテムに付け替えることで、レイアウトの先頭に幅すべてを使って表示されるアイテムを変更することができ、残りのアイテムは次の行に表示されるようになります。

```html live-sample___negative-order
<div class="box">
  <div><a href="#">1</a></div>
  <div><a href="#">2</a></div>
  <div class="active"><a href="#">3</a></div>
  <div><a href="#">4</a></div>
  <div><a href="#">5</a></div>
</div>
```

```css live-sample___negative-order
* {
  box-sizing: border-box;
}

.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
}

.box {
  width: 500px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.active {
  order: -1;
  flex: 1 0 100%;
}
```

{{EmbedLiveSample("negative-order")}}

アイテムは仕様書の中で _order-modified document order_ として述べられているものに従って表示されます。アイテムが表示される前に、`order` プロパティの値が考慮されます。

`order` はアイテムの描画順も変更します。 `order` の値が低いアイテムが最初に描画され、 `order` の値が高いアイテムがその後に描画されます。

## order プロパティとアクセシビリティ

`order` プロパティを使用するとのアクセシビリティの影響は、 `flex-direction` で方向を変更することと同じ影響があります。 `order` を使用すると、アイテムが描画される順番と、視覚的に表示される順番が変更されます。アイテムの順次ナビゲーション順は変更されません。そのため、ユーザーがページ上のコンテンツをキーボードでタブキーで移動している場合、コンテンツ内をとても混乱した方法でジャンプしてしまう可能性があります。

この記事中の例でタブ移動を試すと、 `order` がマウスのようなポインティングデバイスを使わないユーザーにおかしな体験をさせてしまう可能性があることがわかるでしょう。表示上の順序と論理的な順序の分断とそれによって起こりうるアクセシビリティの問題についてさらに理解するためには、以下のページを参照してください。

- [Flexbox and the keyboard navigation disconnect](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/) (tink.uk, 2016)
- [HTML Source Order vs CSS Display Order](https://adrianroselli.com/2015/10/html-source-order-vs-css-display-order.html) (adrianroselli.com, 2015)
- [The Responsive Order Conflict for Keyboard Focus](https://alastairc.uk/2017/06/the-responsive-order-conflict/) (alastairc.uk, 2017)

## `order` の用途

一部の用途では、論理的なフレックスアイテムの順序（したがって読み取り順）と視覚的な順序が異なることが有益な場合があります。気をつけて使えば `order` プロパティは、いくつかのよくあるパターンを簡単に実装するために役に立ちます。

例えばニュース記事を表示するカードのデザインがあったとします。ニュースの見出しはハイライトされる重要なもので、またユーザーが読みたいものを探すためにタブでほかの見出しからジャンプする対象となる要素でもあります。カードには日付もあり、作りたいデザインは以下のようなものであるとします。

![日付が先頭にあり、見出しと本文がそれに続いているデザインコンポーネント](order-card.png)

表示上では日付が見出しの上に現れています。しかしスクリーンリーダーによって読み上げられるときには、タイトルが先に読まれて日付はその後が望ましいと思っているとします。こういったことを `order` プロパティで実現することができます。

カードをフレックスコンテナーとして、 `flex-direction` を `column` に設定します。そして、日付は `order` を `-1` に設定することで、見出しの上に配置します。

```html live-sample___usecase-order
<div class="wrapper">
  <div class="card">
    <h3>ニュースアイテムのタイトル</h3>
    <div class="date">2017 年 11 月 1 日</div>
    <p>ニュースアイテムのコンテンツです。とても価値のあるニュースです。</p>
  </div>
  <div class="card">
    <h3>もう一つのタイトル</h3>
    <div class="date">2017 年 11 月 6 日</div>
    <p>ニュースアイテムのコンテンツです。とても価値のあるニュースです。</p>
  </div>
</div>
```

```css live-sample___usecase-order
body {
  font-family: sans-serif;
}

.wrapper {
  display: flex;
  flex: 1 1 200px;
  gap: 1em;
}

.card {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 1em;
  display: flex;
  flex-direction: column;
}

.date {
  order: -1;
  text-align: right;
}
```

{{EmbedLiveSample("usecase-order", "", "220px")}}

この例のような細かな調整は `order` プロパティを使うのにふさわしい状況です。文書内の読み上げ順やタブ順と同じ論理順を維持し、最もアクセシビリティが高く構造化された方法で維持しましょう。そして `order` プロパティは純粋に視覚的なデザインの調整のために使いましょう。その際にはユーザーがキーボードでタブ移動をする対象となるアイテムの順序変更をしていないか留意してください。特に比較的新しいレイアウトを使うときには、マウスやタッチ画面ではなく、キーボードのみによるサイト操作の確認を確実にテストに含めた方がよいでしょう。そのテストで、開発時の選択がコンテンツの移動を難しくしてしまっているかどうか、すぐにわかるようになるでしょう。

## 関連情報

- [フレックスボックスの概要](/ja/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [フレックスボックスと他のレイアウト方法の関係](/ja/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)
- [フレックスコンテナー内のアイテムの配置](/ja/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [主軸方向のフレックスアイテムの比率の制御](/ja/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [フレックスアイテムの折り返しをマスターする](/ja/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
- [フレックスボックスの典型的な用途](/ja/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)
- [CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/CSS_flexible_box_layout)モジュール
