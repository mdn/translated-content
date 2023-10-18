---
title: "@scroll-timeline"
slug: Web/CSS/scroll-timeline
---

{{CSSRef}}

**`@scroll-timeline`** は CSS の[アットルール](/ja/docs/Web/CSS/At-rule)で、分や秒ではなく、スクロールコンテナー内のスクロールの進行状況によって時間値を決定する [`AnimationTimeline`](/ja/docs/Web/API/AnimationTimeline) を定義するものです。アニメーションタイムラインは [CSS アニメーション](/ja/docs/Web/CSS/CSS_Animations) と `animation-timeline` プロパティによってと関連付けられます。

## 構文

```css
@scroll-timeline moveTimeline {
  source: auto;
  orientation: vertical;
  scroll-offsets: 0px, 500px;
}
```

### 値

- {{cssxref("custom-ident")}}

  - : スクロールタイムラインを識別する名前です。この名前はスクロールタイムラインを [`animation-timeline`](/ja/docs/Web/CSS/animation-timeline) プロパティで指定する際に使用されます。

- `source`

  - : スクロール可能な要素で、そのスクロール位置がタイムラインの進捗を駆動します。以下のいずれかになります。

    - `auto`

      - : 現在のグローバル [Window オブジェクト](/ja/docs/Web/API/Window) に関連付けられた `Document` です。

    - `selector("id-selector")`

      - : 要素の id で識別されるスクロールコンテナーです。

    - `none`
      - : スクロールコンテナーが指定されていません。

- `orientation`

  - : スクロールタイムラインの向きです。

    - `auto`

      - : 既定の `vertical` となります。

    - `block`

      - : 書字方向に応じて、ブロック軸に沿ったスクロール位置を使用します。

    - `inline`

      - : 書字方向に応じて、インライン軸に沿ったスクロール位置を使用します。

    - `horizontal`

      - : 書字方向に関係なく、水平スクロール位置を使用します。

    - `vertical`
      - : 書字方向に関係なく、垂直スクロール位置を使用します。

- `scroll-offsets`

  - : スクロールタイムラインのスクロールオフセットを指定します。

    - `none`
      - : スクロールオフセットを指定しません。
    - `<length-percentage>`
      - : カンマで区切った [`<length-percentage>`](/ja/docs/Web/CSS/length-percentage) 値のリストです。
    - `<element-offset>`
      - : スクロールオフセットを定める要素の位置です。offset.

## 解説

スクロールタイムラインを使用するには、 `@scroll-timeline` ルールを作成します。これは {{cssxref("animation-timeline")}} プロパティによって、アニメーションのタイムラインをそのタイムライン宣言と照合するために使われます。

それぞれの `@scroll-timeline` ルールには、スクロールタイムラインのソース、方向、スクロールオフセットを決定するためのプロパティが含まれています。

### スクロールオフセット

`scroll-offset` プロパティは、スクロールの中でアニメーションが発生する場所を決定します。これは、 3 つの方法のうちの 1 つで設定することができます。

1. CSS のキーワード `none` を使用します。これは `scroll-offset` が指定されないことを意味します。

2. [`<length-percentage>`](/ja/docs/Web/CSS/length-percentage) の値のカンマ区切りのリストで決定します。それぞれの値は {{cssxref('animation-duration')}} に対して対応付けされます。例えば、 `animation-duration` が `2s` で、スクロールオフセットが `0px, 30px, 100px` に設定されている場合、 1s ではスクロールオフセットは 30px となります。通常、スムーズなスクロールアニメーションのためには、ここで `0px, 100px` のような 2 つの値を使用します。

3. スクロールオフセットを決定する 3 つ目の方法は、要素のオフセットを使用することです。これは、ページ内の要素を指定し、その位置によってスクロールタイムラインを決定し、その要素のどの端を使用するかを決定することを意味します。要素の指定は `selector()` 関数で行い、関数は要素の id を受け取ります。エッジはキーワード `start` または `end` によって決定されます。オプションで `0–1` の間の閾値を指定することができます。これは、 `source` に表示される要素のうち、どの程度の割合で表示されるかを表します。

```css
@scroll-timeline element-move {
  source: auto;
  orientation: vertical;
  scroll-offsets:
    selector(#myElement) start 0,
    selector(#myElement) end 0;
}
```

## 形式文法

{{csssyntax}}

## 例

### 単純な例

この例では、コンテナーが垂直方向にスクロールされると回転する正方形を表示します。スクロールできるように、高さが固定された要素 (`#container`) を作成します。これが `source` 要素です。

このコンテナーの中に、別の要素 (`#square`) を作成します。この要素は正方形のように見えるように適切なスタイルが設定されています。この要素には、 {{cssxref('@keyframes')}} ルールと `animation-name` プロパティを使用して、回転アニメーションを適用しています。

`@scroll-timeline` を `squareTimeline` という名前で作成し、`source` をコンテナー、`orientation` を `vertical` 、`scroll-offset` を `0px` から `300px` （コンテナーの高さ）までに設定しています。そして、`scroll-timeline` プロパティを使用して、これを正方形に適用します。

#### HTML

```html
<div id="container">
  <div id="square"></div>
</div>
```

#### CSS

```css
#container {
  height: 300px;
}

#square {
  background-color: deeppink;
  width: 100px;
  height: 100px;
  margin-top: 100px;
  animation-name: rotateAnimation;
  animation-duration: 3s;
  animation-direction: alternate;
  animation-timeline: squareTimeline;
}

@scroll-timeline squareTimeline {
  source: selector("#container");
  orientation: "vertical";
  scroll-offsets: 0px, 300px;
}

@keyframes rotateAnimation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

#### 結果

{{EmbedLiveSample("Simple_example")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS アニメーション](/ja/docs/Web/CSS/CSS_Animations)
- [Practical use cases for scroll-linked animations in CSS with scroll timelines](https://css-tricks.com/practical-use-cases-for-scroll-linked-animations-in-css-with-scroll-timelines/)
