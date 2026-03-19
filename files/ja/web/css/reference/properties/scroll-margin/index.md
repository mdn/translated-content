---
title: scroll-margin
slug: Web/CSS/Reference/Properties/scroll-margin
l10n:
  sourceCommit: a14f56b06eabf3b182ae4bc0e02634a8ccc01f20
---

**`scroll-margin`** は[一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)で、ちょうど {{cssxref("margin")}} プロパティが要素のマージンを値を割り当てるように、要素のすべてのスクロールマージンを一度に値を割り当てます。

{{InteractiveExample("CSS デモ: scroll-margin")}}

```css interactive-example-choice
scroll-margin: 0;
```

```css interactive-example-choice
scroll-margin: 20px;
```

```css interactive-example-choice
scroll-margin: 2em;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="scroller">
    <div>1</div>
    <div id="example-element">2</div>
    <div>3</div>
  </div>
  <div class="info">スクロール »</div>
</section>
```

```css interactive-example
.default-example .info {
  inline-size: 100%;
  padding: 0.5em 0;
  font-size: 90%;
  writing-mode: vertical-rl;
}

.scroller {
  text-align: left;
  height: 250px;
  width: 270px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid black;
  scroll-snap-type: y mandatory;
}

.scroller > div {
  flex: 0 0 250px;
  background-color: rebeccapurple;
  color: white;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
}

.scroller > div:nth-child(even) {
  background-color: white;
  color: rebeccapurple;
}
```

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- {{cssxref("scroll-margin-bottom")}}
- {{cssxref("scroll-margin-left")}}
- {{cssxref("scroll-margin-right")}}
- {{cssxref("scroll-margin-top")}}

## 構文

```css
/* <length> 値 */
scroll-margin: 10px;
scroll-margin: 1em 0.5em 1em 1em;

/* グローバル値 */
scroll-margin: inherit;
scroll-margin: initial;
scroll-margin: revert;
scroll-margin: revert-layer;
scroll-margin: unset;
```

### 値

- {{cssxref("&lt;length&gt;")}}
  - : スクロールコンテナーの辺からの張り出し部分です。

## 解説

`scroll-margin` の効果は、例のコンテンツの 2 つの「ページ」の間の一部の位置にスクロールすることで見ることができます。`scroll-margin` に指定された値は、主に[スナップポート](/ja/docs/Glossary/Scroll_snap#スナップポート)の外側にあるページのうち、どれだけの部分を表示したままにするかを決定します。

`scroll-margin` の値はこのボックスをスナップポートに割り当てるために使用されるスクロールスナップ領域の定義の張り出し部分を表します。スクロールスナップ領域は、変換された境界ボックスを取り、その矩形の境界ボックス (スクロールコンテナーの座標空間内で軸方向に配置) を割り当てて、指定された張り出し部分を追加することによって決定されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的なデモ

この例では、上記のインタラクティブサンプルととてもよく似たものを実装していますが、ここではその実装方法を説明します。

ここでの目的は、水平方向にスクロールする 4 つのブロックを作成することです。 2 つ目と 3 つ目のブロックは、それぞれのブロックの左端に近いところでスナップします。

#### HTML

HTML には、4 つの子要素を持つスクローラーがあります。

```html
<div class="scroller">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>
```

#### CSS

CSS を一通り見てみましょう。外側のコンテナーは次のようにスタイル設定されています。

```css
.scroller {
  text-align: left;
  width: 250px;
  height: 250px;
  overflow-x: scroll;
  display: flex;
  box-sizing: border-box;
  border: 1px solid black;
  scroll-snap-type: x mandatory;
}
```

スクロールスナップに関連する主な部品は、`overflow-x: scroll` で、コンテンツがスクロールしても隠れないようにしています。また、`scroll-snap-type: x mandatory` で、スクロールのスナップは水平軸に沿って行わなければならず、スクロールは常にスナップ点で静止するようになっています。

子要素のスタイルは次のようになっています。

```css
.scroller > div {
  flex: 0 0 250px;
  width: 250px;
  background-color: rebeccapurple;
  color: white;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
}

.scroller > div:nth-child(2n) {
  background-color: white;
  color: rebeccapurple;
}
```

ここで最も重要なのは `scroll-snap-align: start` で、これは左側の端 (ここでは x 軸に沿った「先頭」) をスナップ点として指定するものです。

最後に、スクロールのマージン値を指定しますが、これは 2 番目と 3 番目の子要素に対して異なる値を指定します。

```css
.scroller > div:nth-child(2) {
  scroll-margin: 1rem;
}

.scroller > div:nth-child(3) {
  scroll-margin: 2rem;
}
```

つまり、真ん中の子要素を過ぎてスクロールした場合、2 番目の `<div>` の左端から `1rem`、3 番目の `<div>` の左端から `2rem` のところでスナップすることになります。

> [!NOTE]
> ここでは `scroll-margin` をすべての辺に一度に設定していますが、実際に関係するのは先頭側だけです。例えば `scroll-margin-inline-start: 1rem` や `scroll-margin: 0 0 0 1rem` などのように、一辺のみにスクロールマージンを設定しても同様に機能します。

#### 結果

自分でやってみましょう。

{{EmbedLiveSample('Basic_demonstration', '100%', 300)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS スクロールスナップ](/ja/docs/Web/CSS/Guides/Scroll_snap)モジュール
- [Well-controlled scrolling with CSS scroll snap](https://web.dev/articles/css-scroll-snap) - web.dev (2018)
