---
title: CSS 座標変換の使用
slug: Web/CSS/CSS_Transforms/Using_CSS_transforms
tags:
  - 3D
  - Advanced
  - CSS
  - CSS 座標変換
  - グラフィック
  - ガイド
  - 回転
  - 拡大縮小
  - Scaling
  - perspective
  - rotation
translation_of: Web/CSS/CSS_Transforms/Using_CSS_transforms
---
{{CSSRef}}

**CSS 座標変換** (transform) は、座標空間を編集することで、通常のフロー処理を混乱させずに影響下にあるコンテンツの形状や位置を変えることができます。このガイドは座標変換の使用についての解説を行ないます。

CSS 座標変換は、アフィン線形変換を HTML 要素に対して適用する一連の CSS プロパティによって実現されます。座標変換には、二次元と三次元空間の両方について回転 (rotation)、傾斜 (skewing)、拡大縮小 (scaling)、平行移動 (translation) があります。

> **Warning:** [ボックスモデル](/ja/docs/Web/CSS/CSS_Box_Model)によって配置された要素に対してのみ `transform` を実行することができます。言うまでもなく、 `display: block` である要素がボックスモデルで配置されます。

## CSS 座標変換のプロパティ

CSS 座標変換の定義に使われる重要なプロパティが 2 つあります。 {{cssxref("transform")}} と {{cssxref("transform-origin")}} です。

- {{cssxref("transform-origin")}}
  - : 原点位置を指定します。既定では、これは要素の中央ですが、移動することができます。特定の点を引数として必要とする回転、拡大縮小や傾斜などの座標変換で使用されます。
- {{cssxref("transform")}}
  - : 要素に適用する座標変換を指定します。座標変換の空白区切りのリストで、合成操作の要求された順番で適用されます。座標変換の合成は右から左の順に適用されます。

## 例

これが座標変換前の MDN ロゴの画像です。

![MDN ロゴ](logo.png)

<h3 id="Rotating">回転</h3>

ここでは MDN ロゴを、左下の角から 90 度回転させます。

```html
<img style="transform: rotate(90deg);
            transform-origin: bottom left;"
     src="logo.png">
```

{{EmbedLiveSample('Rotating', 'auto', 240) }}

<h3 id="Skewing_and_translating">傾斜と平行移動</h3>

この例は div 要素を 10 度傾斜させ、 X 軸に沿って 150 ピクセル平行移動します。

```html
<img style="transform: skewx(10deg) translatex(150px);
            transform-origin: bottom left;"
     src="logo.png">
```

{{EmbedLiveSample('Skewing_and_translating') }}

## 3D 特有の CSS プロパティ

立体空間で CSS 座標変換 を行うには、もう少し複雑になります。視点を与えて 3D 空間の環境設定を行うことから始める必要があり、それから 2D の要素がその空間でとる挙動を設定しなければなりません。

<h3 id="Perspective">視点</h3>

設定する最初の要素は視点 (perspective) です。視点は 3D の印象を与えるものです。見る人から遠ざかるほど、ものが小さくなります。

{{page("/ja/docs/Web/CSS/perspective", "Setting perspective", 0, 0, 3)}}

二つ目の設定要素は見る人の位置で、 {{cssxref("perspective-origin")}} プロパティを使います。既定では視点は見る人の中央に合わせられますが、いつも妥当であるとは限りません。

{{page("/ja/docs/Web/CSS/perspective-origin", "Changing the perspective origin", 0, 0, 3)}}

ここまで行えば、 3D 空間に要素を配置することができます。

## 関連情報

- [端末の向きと 3D 座標変換の併用](/ja/docs/Web/Events/Using_device_orientation_with_3D_transforms)
- [Intro to CSS 3D transforms](http://desandro.github.com/3dtransforms/) (David DeSandro によるブログ記事)
- [CSS Transform Playground](https://css-transform.moro.es/) (CSS 座標変換機能を視覚化するオンラインツール)
