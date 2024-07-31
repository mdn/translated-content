---
title: <box-edge>
slug: Web/CSS/box-edge
l10n:
  sourceCommit: 3a1ad1fcf1a399211b333eed524fe9df13bdb62b
---

{{CSSRef}}

**`<box-edge>`** 値型は[ボックス端](/ja/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)のキーワード、例えば [`content-box`](#content-box) や [`border-box`](#border-box) を表します。 box-edge キーワードは、要素のボックスモデルのさまざまな側面や、要素が画面にどのように位置指定され描画されるかを定義するために使用します。

box-edge キーワードは `<visual-box>`, `<layout-box>`, `<paint-box>`, `<coord-box>`, `<geometry-box>` データ型の成分ですが、これらに限定されません。これらの型は {{cssxref("transform-box")}} や {{cssxref("background-clip")}} などのプロパティで適用されます。

## 構文

```plain
<visual-box> = content-box | padding-box | border-box /* 3 つの <box> 値 */
<layout-box> = <box> | margin-box /* <shape-box> 値 */
<paint-box> = <box> | fill-box | stroke-box
<coord-box> = <box> | fill-box | stroke-box | view-box
<geometry-box> = <shape-box> | fill-box | stroke-box | view-box
```

### 値

`<box-edge>` は `<visual-box>`, `<layout-box>`, `<paint-box>`, `<coord-box>`, `<geometry-box>` のいずれかの型になることができます。

- `<visual-box>`

  - : ウェブページ上で、要素のためにユーザーから見えるように生成された矩形のボックスを指します。要素のコンテンツ、パディング、境界線を記載します。 `<box>` とも呼ばれ、この値はマージン領域を除きます。この値型は {{cssxref("background-clip")}}と{{cssxref("overflow-clip-margin")}} プロパティで使用されます。

- `<layout-box>`

  - : コンテンツ、パディング、境界線、マージンなど、要素が占める空間を指します。この値型はレイアウトや位置指定のために使用します。 `<shape-box>` とも呼ばれ、 {{cssxref("shape-outside")}} プロパティで使用します。

- `<paint-box>`

  - : コンテンツを視覚的に描画するために使用する、レイアウトボックス内の領域を指します。これには要素の背景や枠線が描画される領域も含みます。要素の描画可能領域にはマージンは含まれないので、この値には `margin-box` は含まれません。

- `<coord-box>`

  - : 親コンテナー内の要素の位置指定やサイズ指定に用いる座標ボックスを指します。ボックスの端でコンテンツがどのように流れるかを制御するために使用します。マージン領域は除きます。この値型は {{cssxref("offset-path")}} プロパティで用いられます。

- `<geometry-box>`
  - : [基本シェイプ](/ja/docs/Web/CSS/basic-shape)の参照ボックスを定義します。また、単独で指定した場合は、指定したボックスの辺をクリッピングパスとします（{{cssxref("border-radius")}} のような角の形状を含む）。この値型は {{cssxref("clip-path")}}, {{cssxref("mask-clip")}}, {{cssxref("mask-origin")}} プロパティと SVG の {{SVGAttr("clip-path")}} 属性に使用します。

### キーワード

`<box-edge>` キーワードは次のように定義されています。

- `content-box`

  - : ボックスのコンテンツ領域の外縁を指します。コンテンツボックスは最も内側のボックスです。内容領域はテキストや画像、他の HTML 要素などの実際のコンテンツを格納します。 SVG ではこの値は `fill-box` として扱われます。

- `padding-box`

  - : ボックスのパディングの外縁を指します。周りにパディングがない場合は `content-box` と同じ値になります。 SVG では `padding-box` は `fill-box` として扱われます。パディング領域はコンテンツボックスの外縁から始まり、コンテンツ領域を取り囲みます。

- `border-box`

  - : ボックスの境界線の外縁を指します。周りに枠線がない場合は `padding-box` と同じ値になります。 SVG では `border-box` は `stroke-box` として扱われます。境界線はパディング領域を取り囲み、パディングボックスの外縁から始まります。

- `margin-box`

  - : ボックスのマージンの外縁を指します。周りに余白がない場合は `border-box` と同じ値になります。 SVG では `margin-box` は `stroke-box` として扱われます。

- `fill-box`

  - : SVG におけるオブジェクトの外接ボックスを指します。CSS では `fill-box` は `content-box` として扱われます。これは `coord-box` の値で定義された縁にコンテンツを回り込ませるために使用します。

- `stroke-box`

  - : SVG におけるストロークの外接ボックスを参照します。 CSS では `stroke-box` は `border-box` として扱われます。ストロークを適用した際の要素の図形を定義するために使用します。

- `view-box`

  - : 最も近い SVG ビューポート要素の 元ボックスを参照します。元ボックスは、その要素の {{svgattr("viewBox")}} 属性によって確立された初期 SVG ユーザー座標系の幅と高さを持つ長方形です。元ボックスは、その左上隅がその[座標系](/ja/docs/Web/CSS/CSSOM_view/Coordinate_systems)の原点に固定されるように配置されます。 CSS では `view-box` は `border-box` として扱われます。
    > [!NOTE]
    > SVG ビューポートが原点に固定されていない場合、元ボックスは SVG ビューポートに対応しません。

## 仕様書

{{Specifications}}

## 関連情報

- [CSS ボックスモデル](/ja/docs/Web/CSS/CSS_box_model)モジュール
