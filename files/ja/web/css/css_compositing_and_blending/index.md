---
title: CSS 合成と混合
slug: Web/CSS/CSS_compositing_and_blending
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{CSSRef}}

**CSS 合成と混合** (compositing and blending) モジュールは、要素の背景レイヤーをどのように互いに合成するか、どのように要素をコンテナーと合成するか、要素が新しい[重ね合わせコンテキスト](/ja/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)を生成する必要があるかどうかを定義します。

この CSS モジュールのプロパティを使用して、要素の背景画像と色を単一の背景画像に合成するために使用するブレンドモードを定義することができます。モジュールが提供するブレンドモードは 16 種類あります。また、要素の境界線、背景、およびテキスト、絵文字、画像を含むコンテンツを、コンテナーの背景とどのように合成するかを定義することもできます。

### 合成と混合の実際

この例では、それぞれのボックスには境界線と 2 つの縞模様の背景画像、そして単色の背景があります。すべてのボックスに共通する背景には、円のパターンが含まれています。 2 つ目の行にある 3 つのボックスは、コンテナーの背景と合成するように設定されています。

{{EmbedGHLiveSample("css-examples/modules/compositing.html", '100%', 460)}}

ブレンドの結果、背景、境界線、コンテンツがすべて影響を受けることに注目してください。このサンプルのコードを確認するには、[GitHub 上のソース](https://github.com/mdn/css-examples/blob/main/modules/compositing.html)をご覧ください。

## リファレンス

### プロパティ

- {{cssxref("background-blend-mode")}}
- {{cssxref("isolation")}}
- {{cssxref("mix-blend-mode")}}

## 関連する概念

- {{cssxref("blend-mode")}} データ型
- {{cssxref("backdrop-filter")}} プロパティ
- {{cssxref("filter")}} プロパティ
- {{cssxref("mask-composite")}} プロパティ
- {{cssxref("background-color")}} プロパティ
- {{cssxref("background-image")}} プロパティ
- {{glossary("stacking context","重ね合わせコンテキスト")}}用語
- {{ SVGElement("feBlend")}} SVG フィルタープリミティブ
- {{ SVGElement("feComposite")}} SVG フィルタープリミティブ

## 仕様書

{{Specifications}}

## 関連情報

- [CSS フィルター効果](/ja/docs/Web/CSS/CSS_filter_effects)モジュールのプロパティでは、画像、背景、境界線に対してぼかしや色の強弱の変更などのフィルター効果を適用することができます。
- [Compositing And Blending In CSS](https://www.sarasoueidan.com/blog/compositing-and-blending-in-css/) (2015)
- [Editing Images in CSS: Blend Modes](https://webdesign.tutsplus.com/editing-images-in-css-blend-modes--cms-26058t) (2022)
- [web.dev: blend modes](https://web.dev/learn/css/blend-modes) (2021)
