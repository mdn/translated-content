---
title: scroll-margin
slug: Web/CSS/scroll-margin
---

{{CSSRef}}

**`scroll-margin`** は[一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)で、要素のスクロールマージンを一度にすべて、ちょうど `margin` プロパティが個別指定の `margin-*` に値を割り当てるように、値を割り当てます。

{{EmbedInteractiveExample("pages/css/scroll-margin.html")}}

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`scroll-margin-bottom`](/ja/docs/Web/CSS/scroll-margin-bottom)
- [`scroll-margin-left`](/ja/docs/Web/CSS/scroll-margin-left)
- [`scroll-margin-right`](/ja/docs/Web/CSS/scroll-margin-right)
- [`scroll-margin-top`](/ja/docs/Web/CSS/scroll-margin-top)

## 構文

```css
/* <length> 値 */
scroll-margin: 10px;
scroll-margin: 1em 0.5em 1em 1em;

/* グローバル値 */
scroll-margin: inherit;
scroll-margin: initial;
scroll-margin: revert;
scroll-margin: unset;
```

### 値

- {{cssxref("&lt;length&gt;")}}
  - : スクロールコンテナーの辺からの張り出し部分です。

## 解説

`scroll-margin` の効果は、例のコンテンツの 2 つの「ページ」の間の一部の位置にスクロールすることで見ることができます。`scroll-margin` に指定された値は、主にスナップポートの外側にあるページのうち、どれだけの部分を表示したままにするかを決定します。

`scroll-margin` の値はこのボックスをスナップポートに割り当てるために使用されるスクロールスナップ領域の定義の張り出し部分を表します。スクロールスナップ領域は、変換された境界ボックスを取り、その矩形の境界ボックス (スクロールコンテナーの座標空間内で軸方向に配置) を割り当てて、指定された張り出し部分を追加することによって決定されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Simple_demonstration">簡単なデモ</h3>

この例では、上記のインタラクティブ例と非常によく似たものを実装していますが、ここではその実装方法を説明します。

ここでの目的は、水平方向にスクロールする 4 つのブロックを作成することです。2 つ目と 3 つ目のブロックは、それぞれのブロックの左端に近いところでスナップします。

#### HTML

ブロックを表す HTML はとても簡単です。

```html
<div class="scroller">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>
```

#### CSS

外側のコンテナーのスタイルは以下のようになっています。

```css
.scroller {
  text-align: left;
  width: 250px;
  height: 250px;
  overflow-x: scroll;
  display: flex;
  box-sizing: border-box;
  border: 1px solid #000;
  scroll-snap-type: x mandatory;
}
```

スクロールスナップに関連する主な部品は、`overflow-x: scroll` で、コンテンツがスクロールしても隠れないようにしています。また、`scroll-snap-type: x mandatory` で、スクロールのスナップは水平軸に沿って行わなければならず、スクロールは常にスナップ点で静止するようになっています。

子要素のスタイルは次のようになっています。

```css
.scroller > div {
  flex: 0 0 250px;
  width: 250px;
  background-color: #663399;
  color: #fff;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
}

.scroller > div:nth-child(2n) {
  background-color: #fff;
  color: #663399;
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

> **メモ:** ここでは `scroll-margin` をすべての辺に一度に設定していますが、実際に関係するのは先頭側だけです。例えば `scroll-margin-inline-start: 1rem` や `scroll-margin: 0 0 0 1rem` などのように、一辺のみにスクロールマージンを設定しても同様に機能します。

#### 結果

自分でやってみましょう。

{{EmbedLiveSample('Simple_demonstration', '100%', 300)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS スクロールスナップ](/ja/docs/Web/CSS/CSS_Scroll_Snap)
- [Well-Controlled Scrolling with CSS Scroll Snap](https://web.dev/css-scroll-snap/)
