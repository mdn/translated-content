---
title: ::column
slug: Web/CSS/Reference/Selectors/::column
original_slug: Web/CSS/::column
l10n:
  sourceCommit: af550427ce6ddc8b22dae1f6c8a109ed4a5fbd91
---

{{SeeCompatTable}}

**`::column`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)で、 [CSS 段組みレイアウト](/ja/docs/Web/CSS/Guides/Multicol_layout)によってコンテナーのコンテンツを複数の段で表示するように設定した場合に生成される、個々の段を表します。 `::column` 擬似要素を使用すると、レイアウトに影響を与えないスタイルを、これらの生成された断片に適用することができます。

## 構文

```css-nolint
::column {
  /* ... */
}
```

## 解説

CSS の段組みレイアウトを使用してコンテナーのコンテンツを複数の段にレイアウトした場合（例えば、 {{cssxref("column-count")}} プロパティを使用した場合）、それぞれの段を含む `::column` 擬似要素が生成されます。

`::column` 擬似要素は、スクロールコンテナー内の要素に適用されるスクロールスナッププロパティ（{{cssxref("scroll-margin")}}, {{cssxref("scroll-snap-align")}}, and {{cssxref("scroll-snap-stop")}} など）のみを受け付けます。

`::column` 擬似要素は、 {{cssxref("::scroll-marker")}} 擬似要素を持つことができます。 {{cssxref("::before")}} や {{cssxref("::after")}} などのその他の擬似要素は、 `::column` では生成されません。 `::column::scroll-marker` を適用すると、元の[スクロールコンテナー](/ja/docs/Glossary/Scroll_container)のすべての段にマーカーが作成され、 `::scroll-marker` 擬似要素は、 `::column` 擬似要素そのものではなく、 `::column` 擬似要素の元の要素から継承されます。

これは [CSS カルーセル](/ja/docs/Web/CSS/Guides/Overflow/Carousels)で役立ちます。 `::column` を使用して、それぞれの段の `::scroll-marker` 擬似要素を生成し、[CSS スクロールスナップ](/ja/docs/Web/CSS/Guides/Scroll_snap)を使用してそれらを[スナップターゲット](/ja/docs/Glossary/Scroll_snap#スナップターゲット)として設定することができます。

`::column` に適用できるスタイル設定はとても制限されていますが、将来は拡大される可能性があります。将来対応されるプロパティおよび値は、レイアウトに影響を与えないものに限定されます。

## 例

### 段組みレイアウトのスクロール

このデモでは、コンテンツのそれぞれの「ページ」を所定の位置にスナップする、レスポンシブなコンテナーを作成します。 {{cssxref("columns")}} プロパティと `::column` 擬似要素を使用して、親{{glossary("scroll container", "スクロールコンテナー")}}の全幅にまたがるコンテンツの段を作成します。この列は水平方向にスクロールできます。それぞれの段には 1 つ以上のリスト項目が含まれ、その数はビューポートの幅によって異なります。

#### HTML

HTML は、[順序なしリスト](/ja/docs/Web/HTML/Reference/Elements/ul)で構成されており、それぞれの[リストアイテム](/ja/docs/Web/HTML/Reference/Elements/li)にはサンプルコンテンツが含まれています。

```html-nolint
<ul>
...
  <li>
    <h2>アイテム 1</h2>
  </li>
...
</ul>
```

```html hidden live-sample___column-layout-example live-sample___carousel-example
<ul>
  <li>
    <h2>アイテム 1</h2>
  </li>
  <li>
    <h2>アイテム 2</h2>
  </li>
  <li>
    <h2>アイテム 3</h2>
  </li>
  <li>
    <h2>アイテム 4</h2>
  </li>
  <li>
    <h2>アイテム 5</h2>
  </li>
  <li>
    <h2>アイテム 6</h2>
  </li>
  <li>
    <h2>アイテム 7</h2>
  </li>
  <li>
    <h2>アイテム 8</h2>
  </li>
  <li>
    <h2>アイテム 9</h2>
  </li>
  <li>
    <h2>アイテム 10</h2>
  </li>
  <li>
    <h2>アイテム 11</h2>
  </li>
  <li>
    <h2>アイテム 12</h2>
  </li>
  <li>
    <h2>アイテム 13</h2>
  </li>
  <li>
    <h2>アイテム 14</h2>
  </li>
  <li>
    <h2>アイテム 15</h2>
  </li>
</ul>
```

#### CSS

リストは、 {{cssxref("height")}} が固定されており、ビューポートの全幅に広がるように {{cssxref("width")}} が `100vw` に指定されています。次に、コンテンツが水平方向にスクロールするように {{cssxref("overflow-x")}} 値に `scroll` を設定し、 [CSS スクロールスナップ](/ja/docs/Web/CSS/Guides/Scroll_snap)を使用してそれぞれのアイテム、すなわち「ページ」へスナップするようにします。 {{cssxref("scroll-snap-type")}} に `x mandatory` を使用して、リストを[スクロールスナップコンテナー](/ja/docs/Glossary/Scroll_snap#スクロールスナップコンテナー)にします。最後に、 {{cssxref("columns")}} の値を `1` に設定して、リストのコンテンツを単一の列として表示するように強制します。また、 {{cssxref("text-align")}} の値に `center` を適用して、コンテンツをリストの中央に配置します。

```css hidden live-sample___column-layout-example live-sample___carousel-example
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
```

```css live-sample___column-layout-example live-sample___carousel-example
ul {
  width: 100vw;
  height: 300px;
  padding: 10px;

  overflow-x: scroll;
  scroll-snap-type: x mandatory;

  columns: 1;
  text-align: center;
}
```

次に、リストアイテムのスタイルを設定します。

- {{cssxref("display")}} の値を `inline-block` に設定して、リストアイテムが横に並んだ状態で、リストが水平方向にスクロールするようにします。
- {{cssxref("width")}} と {{cssxref("height")}} に固定値を設定します。
- `text-align` の値を `left` を設定して、親コンテナーに設定されている `text-align: center` を上書きし、アイテムのコンテンツを左揃えにします。
- 偶数のリストアイテムには、 {{cssxref(":nth-child()")}} によって異なる背景色を指定し、スクロール効果がわかりやすくします。

```css live-sample___column-layout-example live-sample___carousel-example
li {
  list-style-type: none;

  display: inline-block;
  height: 100%;
  width: 200px;
  text-align: left;

  background-color: #eee;
  outline: 1px solid #ddd;
  padding: 0 20px;
  margin: 0 10px;
}

li:nth-child(even) {
  background-color: cyan;
}
```

{{cssxref("scroll-snap-align")}} プロパティを、 `columns` プロパティによって生成されるコンテンツの段を表す `::column` 擬似要素に設定します。これにより、スクロールすると、段はスクロールコンテナーの中央にスナップされます。

```css live-sample___column-layout-example live-sample___carousel-example
ul::column {
  scroll-snap-align: center;
}
```

#### 結果

{{EmbedLiveSample("column-layout-example", "100%", "400px")}}

### スクロールマーカー付き段ベースのカルーセル

前の例を拡張して、様々な段へ直接移動できるようにスクロールマーカーを作成します。 {{cssxref("scroll-marker-group")}} をコンテナーに、 {{cssxref("::scroll-marker")}} をそれぞれの `::column` 擬似要素に適用します。 HTML は変更しません。

#### CSS

scroll-marker-group プロパティを使用してスクロールマーカーグループを作成し、そのグループをすべてのコンテンツの後に配置します。

```css live-sample___carousel-example
ul {
  scroll-marker-group: after;
}
```

次に、 {{cssxref("::scroll-marker-group")}} 擬似要素にスタイルを適用して、各スクロールマーカーを `0.4em` の間隔を入れて行の中央にレイアウトします。

```css live-sample___carousel-example
::scroll-marker-group {
  display: flex;
  gap: 0.4em;
  place-content: center;
}
```

最後に、 {{cssxref("::scroll-marker")}} 擬似要素を使用して、黒い境界線のある丸い透明なマーカーを各リストアイテムに作成し、 {{cssxref(":target-current")}} 擬似クラスを使用して、現在スクロールされている要素のマーカーを他の要素とは異なるスタイルに設定します。

```css live-sample___carousel-example
ul::column::scroll-marker {
  content: "";
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 10px;
}

ul::column::scroll-marker:target-current {
  background-color: black;
}
```

#### 結果

{{EmbedLiveSample("carousel-example", "100%", "400px")}}

スクロールマーカーを押して、各ページに直接移動してみてください。現在のマーカーが強調表示されていることに注意してください。これにより、ページ内の現在の位置を確認することができます。また、スクロールマーカーグループまでタブキーを押してから、カーソルキーを使用して各ページを順番に表示してみてください。

他のカルーセルの例は、 [CSS カルーセルの作成](/ja/docs/Web/CSS/Guides/Overflow/Carousels)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("columns")}}
- {{cssxref("::scroll-marker")}}
- {{cssxref("::scroll-marker-group")}}
- {{cssxref(":target-current")}}
- [CSS カルーセルの作成](/ja/docs/Web/CSS/Guides/Overflow/Carousels)
- [CSS 段組みレイアウト](/ja/docs/Web/CSS/Guides/Multicol_layout)モジュール
- [CSS オーバーフロー](/ja/docs/Web/CSS/Guides/Overflow)モジュール
- [CSS Carousel Gallery](https://chrome.dev/carousel/) (chrome.dev, 2025)
