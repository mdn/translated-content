---
title: CSS シェイプ
short-title: シェイプ
slug: Web/CSS/Guides/Shapes
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**CSS シェイプ**は、 CSS で使用する幾何学的な図形を記述します。また、図形を使用して要素の浮動領域の形状を制御するために使用できる CSS プロパティも定義しています。この領域は、除外に適用したり、要素のコンテンツ領域を指定したりすることができます。

仕様書では、シェイプを定義する様々な方法を定義しています。コンテンツの内部や外部の折り返しが、要素ボックスの矩形に沿うのではなく、シェイプで行われるようになります。

シェイプは、CSS の値として使用できる形状を定義します。このモジュールは、楕円、多角形、および任意の形状を作成するための関数を提供しています。他の CSS モジュール、例えば [CSS モーションパス](/ja/docs/Web/CSS/Guides/Motion_path)や [CSS マスク](/ja/docs/Web/CSS/Guides/Masking)でも、この仕様書で定義されているシェイプを使用することができます。

## CSS シェイプの実例

以下の例では、左に浮動状態の画像を表示し、 `shape-outside` プロパティを `circle(50%)` の値で適用しています。これは円形を作成し、浮動状態の要素で折り返すコンテンツが図形に回り込むようになります。これにより、テキストの行ボックスが折り返す長さが変わります。 "Play" をクリックすると、このコードを MDN Playground で編集することができます。

```html-nolint live-sample___circle hidden
<div class="box">
  <img
    alt="熱気球"
    src="https://mdn.github.io/shared-assets/images/examples/round-balloon.png" />
  <p>
    1782 年 11 月のある夜、伝えられるところによれば、フランスの小さな町アノネーで 2 人の兄弟が冬の暖炉のそばに座り、炉から立ち上る灰色の煙の渦が広い煙突をくねくねと登っていくのを見ていた。 2 人の名前はステファンおよびジョセフ・モンゴルフィエ、職業は紙漉き職人で、思慮深く、あらゆる科学的知識や新しい発見に深い関心を持っていた。それが記念すべき夜であったことを証明するように、その夜以前にも、何億人もの人々が、その事実から特別なインスピレーションを得ることなく、焚き火の煙が立ち昇るのを眺めていた。
  </p>
</div>
```

```css live-sample___circle hidden
body {
  font: 1.2em / 1.5 sans-serif;
}
img {
  float: left;
  shape-outside: circle(50%);
}
```

{{EmbedLiveSample("circle", "", "300px")}}

## リファレンス

### プロパティ

- {{cssxref("shape-image-threshold")}}
- {{cssxref("shape-margin")}}
- {{cssxref("shape-outside")}}

CSS シェイプモジュールでは、`shape-inside` および `shape-padding` プロパティも同時に導入されています。現在、これらの機能を対応しているブラウザーはありません。

### データ型

- {{cssxref("basic-shape")}}

### 関数

- {{cssxref("basic-shape/circle","circle()")}}
- {{cssxref("basic-shape/ellipse","ellipse()")}}
- {{cssxref("basic-shape/inset","inset()")}}
- {{cssxref("basic-shape/path","path()")}}
- {{cssxref("basic-shape/polygon","polygon()")}}
- {{cssxref("basic-shape/rect","rect()")}}
- {{cssxref("basic-shape/shape","shape()")}}
- {{cssxref("basic-shape/xywh","xywh()")}}

### 用語

- [参照ボックス](/ja/docs/Web/CSS/Guides/Shapes/Using_shape-outside#参照ボックス)

## ガイド

- [シェイプの概要](/ja/docs/Web/CSS/Guides/Shapes/Overview)
  - : `shape-margin` および `clip-path` プロパティで基本的な図形を定義し、基本的なシェイプを開発者ツールでデバッグします。

- [ボックス値からのシェイプの作成](/ja/docs/Web/CSS/Guides/Shapes/From_box_values)
  - : `border-radius` の曲率と CSS ボックスモデルの値を使用して図形を作成します。

- [`shape-outside` による基本シェイプ](/ja/docs/Web/CSS/Guides/Shapes/Using_shape-outside)
  - : CSS シェイプ、参照ボックス、 `shape-outside` プロパティを使って矩形、円、楕円、多角形を作成します。

- [画像からのシェイプの作成](/ja/docs/Web/CSS/Guides/Shapes/From_images)
  - : シェイプを半透過の画像ファイルや CSS グラデーションから作成します。

## 関連概念

[CSS モーションパス](/ja/docs/Web/CSS/Guides/Motion_path)モジュール

- {{cssxref("offset")}}
- {{cssxref("offset-anchor")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-path")}}
- {{cssxref("offset-position")}}
- {{cssxref("offset-rotate")}}
- {{cssxref("ray")}} 関数

[CSS マスク](/ja/docs/Web/CSS/Guides/Masking)モジュール

- {{cssxref("clip")}}
- {{cssxref("clip-path")}}
- {{SVGAttr("clip-rule")}}
- {{cssxref("mask")}}
- {{cssxref("mask-origin")}}
- {{cssxref("mask-position")}}

[CSS 背景と境界](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders)モジュール

- {{cssxref("border-radius")}} 一括指定

[CSS ボックスモデル](/ja/docs/Web/CSS/Guides/Box_model)モジュール

- {{cssxref("box-edge")}} データ型

## 仕様書

{{Specifications}}

## 関連情報

- [シェイプジェネレーター](/ja/docs/Web/CSS/Guides/Shapes/Shape_generator)
- [CSS Shapes resources](https://codepen.io/KristopherVanSant/post/css-shapes-resources)
- [CSS Shapes 101](https://alistapart.com/article/css-shapes-101/) - alistapart.com (2014)
- [Creating non-rectangular layouts with CSS Shapes](https://www.sarasoueidan.com/blog/css-shapes/) - sarasoueidan.com (2013)
- [How to use CSS Shapes in your web design](https://webdesign.tutsplus.com/how-to-use-css-shapes-in-your-web-design--cms-27498t) - tutsplus.com (2016)
- [Edit CSS shapes with the shape path editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) - mozilla.org (2018) ([Video](https://www.youtube.com/watch?v=u9bDe3Bw0sA))
