---
title: CSS マスク
slug: Web/CSS/Guides/Masking
original_slug: Web/CSS/CSS_masking
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

**CSS マスク**モジュールは、視覚的要素の一部または全体を非表示にするために使用される 2 つの異なるグラフィック操作、マスクとクリップを定義します。

**クリップ**では、閉じたベクトルのパス、シェイプ、多角形を**クリップパス**として定義します。クリップパス領域内のものはすべて表示されたままですが、領域外のものはすべて非表示、つまり「クリップアウト」されます。 {{cssxref("clip-path")}} プロパティは、クリップパスとして使用する {{cssxref("&lt;basic-shape&gt;")}} を指定するか、SVG {{SVGElement("clipPath")}} 要素を参照します。

CSS **マスク**プロパティは、要素またはその境界線にマスクを適用するために使用されます。その後、グラフィックオブジェクトが背景または境界線に描画され、マスクの不透明度または輝度に応じて、要素またはその境界線の一部が完全にまたは部分的にマスクされます。

マスクとして使用される画像は、 {{cssxref("mask-image")}} または {{cssxref("mask-border-source")}} プロパティで指定します。指定したマスクは、{{cssxref("image")}}、{{cssxref("gradient")}}、または SVG の {{SVGElement("mask")}} 要素にすることができます。マスクは、[背景画像や境界画像](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders)と同様に、サイズや位置を指定することができます。

CSS でのクリップとマスクは、SVG と同じ方法で動作します。まず、要素はフィルター効果、マスク、クリップ、不透明度なしでスタイル設定されます。次に、[フィルター効果](/ja/docs/Web/CSS/Guides/Filter_effects)、クリップ、マスク、不透明度の順で、要素にすべての効果が適用されます。

マスクはより詳細な制御とオプションを提供しますが、必要なものが基本的な形状だけである場合は、クリップの方がより優れたパフォーマンスを発揮します。

## リファレンス

### プロパティ

- {{cssxref("clip")}} {{deprecated_inline}}
- {{cssxref("clip-path")}}
- {{cssxref("clip-rule")}}
- {{cssxref("mask")}} 一括指定
- {{cssxref("mask-clip")}}
- {{cssxref("mask-composite")}}
- {{cssxref("mask-image")}}
- {{cssxref("mask-mode")}}
- {{cssxref("mask-origin")}}
- {{cssxref("mask-position")}}
- {{cssxref("mask-repeat")}}
- {{cssxref("mask-size")}}
- {{cssxref("mask-type")}}
- {{cssxref("mask-border")}} 一括指定
- {{cssxref("mask-border-mode")}}
- {{cssxref("mask-border-outset")}}
- {{cssxref("mask-border-repeat")}}
- {{cssxref("mask-border-slice")}}
- {{cssxref("mask-border-source")}}
- {{cssxref("mask-border-width")}}

### データ型

- [`<geometry-box>`](/ja/docs/Web/CSS/Reference/Properties/clip-path#geometry-box)

### 関数

- {{cssxref("basic-shape/rect","rect()")}} 関数

### インターフェイス

- {{domxref("SVGClipPathElement")}}
- {{domxref("SVGMaskElement")}}
  - {{domxref("SVGMaskElement.maskContentUnits")}}

## ガイド

- [CSS クリップ入門](/ja/docs/Web/CSS/Guides/Masking/Clipping)
  - : CSS でのクリップの入門記事で、`clip-path` プロパティと例を含みます。

- [CSS マスク入門](/ja/docs/Web/CSS/Guides/Masking/Introduction)
  - : CSS でのマスクの概要、さまざまなマスク画像の種類、およびマスクにおける輝度とアルファ透過率の効果について説明します。

- [複数のマスクの宣言](/ja/docs/Web/CSS/Guides/Masking/Multiple_masks)
  - : マスクレイヤーの概要と、複数のマスク画像を宣言する方法について説明します。

## 関連概念

- [`<coord-box>`](/ja/docs/Web/CSS/Reference/Values/box-edge#values)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("&lt;position&gt;")}}
- {{cssxref("&lt;url&gt;")}}

- [CSS 背景と境界](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders)モジュール
  - {{cssxref("background")}} 一括指定
  - {{cssxref("background-origin")}}
  - {{cssxref("background-position")}}
  - {{cssxref("background-repeat")}}
  - {{cssxref("background-size")}}
  - {{cssxref("border-image")}} 一括指定
  - {{cssxref("border-image-repeat")}}
  - {{cssxref("border-image-slice")}}
  - {{cssxref("border-image-source")}}
  - {{cssxref("border-image-width")}}
  - [`<repeat-style>`](/ja/docs/Web/CSS/Reference/Properties/background-repeat#values) データ型

- [CSS shapes](/ja/docs/Web/CSS/Guides/Shapes)モジュール
  - {{cssxref("&lt;basic-shape&gt;")}} データ型
  - {{cssxref("basic-shape/polygon","polygon()")}} 関数
  - [`<shape-box>`](/ja/docs/Web/CSS/Reference/Properties/shape-outside#shape-box) データ型

## 仕様書

{{Specifications}}

## 関連情報

- {{cssxref("background-clip")}}
- [CSS filter effects](/ja/docs/Web/CSS/Guides/Filter_effects)モジュール
- [SVG チュートリアル: クリップとマスク](/ja/docs/Web/SVG/Tutorials/SVG_from_scratch/Clipping_and_masking)
- {{domxref("CanvasRenderingContext2D.clip()")}}
- {{domxref("WebGLRenderingContext.colorMask()")}}
- [PWA アイコンのマスク](/ja/docs/Web/Progressive_web_apps/How_to/Define_app_icons#support_masking)
