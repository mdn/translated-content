---
title: CSS 座標変換
slug: Web/CSS/CSS_transforms
l10n:
  sourceCommit: 7e649ddc14198ca9e55ac2ccfabc36a23bd16bb4
---

{{CSSRef}}

**CSS 座標変換** (CSS transforms) は、 CSS でスタイル付けされた要素をどのように二次元または三次元空間に座標変換するかを定義します。

## CSS 座標変換の動作

下の枠内のスライダーを使うと、 3D 空間での立方体の平行移動、回転、変倍、歪めの CSS 座標変換のプロパティを変更できます。立方体を 3D 空間内で移動させながら、 3D 位置 `(0, 0, 0)` にある `z:0px` とラベル付けされた要素との相互作用に注目してください。

{{EmbedGHLiveSample("css-examples/modules/transforms.html", '100%', 900)}}

また、 `perspective` スライダーを使って、立方体のコンテナーの [`perspective`](/ja/docs/Web/CSS/perspective) プロパティを変更することができます。

[`perspective-origin`](/ja/docs/Web/CSS/perspective-origin) スライダーは、ビューの消点を決定するために、閲覧者が3D空間のどこを見ているかを決定します。この消点は小さな赤い点で示されます。これらのスライダーを変更することで、立方体自体を動かすことなく、頭を上下左右に動かして立方体のさまざまな部分を見ることができると想像してください。

`backface-visibility` チェックボックスは、立方体の裏面を `visible` （表示）に設定するか、`hidden` （非表示）に設定するかを決定します。

上の例の立方体は 6 つの `<div>` 要素で構成されており、すべて CSS でスタイル設定されて立方体の面を構成しています。立方体は 2D や 3D のキャンバスコンテキストを使用して描画されていないので、**他の DOM 要素を検査するのと同じように**、ブラウザーの開発者ツールで立方体の面を検査することができます。ブラウザー開発者ツールの要素ピッカーを使用して、立方体の位置と回転を変換しながら、立方体のさまざまな面を調べてみてください。

> [!NOTE]
> 3D 回転を含む座標変換を適用する場合、順序はが座標変換結果に影響します。上の例では、座標変換は平行移動、変倍、回転、歪めを行います。回転は X → Y → Z の順に適用されます。

[この例のソースを GitHub で確認](https://github.com/mdn/css-examples/blob/main/modules/transforms.html)できます。

## リファレンス

### プロパティ

- {{cssxref("backface-visibility")}}
- {{cssxref("perspective")}}
- {{cssxref("perspective-origin")}}
- {{cssxref("rotate")}}
- {{cssxref("scale")}}
- {{cssxref("transform")}}
- {{cssxref("transform-box")}}
- {{cssxref("transform-origin")}}
- {{cssxref("transform-style")}}
- {{cssxref("translate")}}

### 関数

- {{cssxref("transform-function/matrix", "matrix()")}}
- {{cssxref("transform-function/matrix3d", "matrix3d()")}}
- {{cssxref("transform-function/perspective", "perspective()")}}
- {{cssxref("transform-function/rotate", "rotate()")}}
- {{cssxref("transform-function/rotate3d", "rotate3d()")}}
- {{cssxref("transform-function/rotateX", "rotateX()")}}
- {{cssxref("transform-function/rotateY", "rotateY()")}}
- {{cssxref("transform-function/rotateZ", "rotateZ()")}}
- {{cssxref("transform-function/scale", "scale()")}}
- {{cssxref("transform-function/scale3d", "scale3d()")}}
- {{cssxref("transform-function/scaleX", "scaleX()")}}
- {{cssxref("transform-function/scaleY", "scaleY()")}}
- {{cssxref("transform-function/scaleZ", "scaleZ()")}}
- {{cssxref("transform-function/skew", "skew()")}}
- {{cssxref("transform-function/skewX", "skewX()")}}
- {{cssxref("transform-function/skewY", "skewY()")}}
- {{cssxref("transform-function/translate", "translate()")}}
- {{cssxref("transform-function/translate3d", "translate()")}}
- {{cssxref("transform-function/translateX", "translateX()")}}
- {{cssxref("transform-function/translateY", "translateY()")}}
- {{cssxref("transform-function/translateZ", "translateZ()")}}

### データ型

- {{cssxref("&lt;transform-function&gt;")}}

## ガイド

- [CSS 座標変換の利用](/ja/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
  - : CSS でスタイル付けされた要素をどのように座標変換するかについての手順を追ったチュートリアルです。
- [座標系](/ja/docs/Web/CSS/CSSOM_view/Coordinate_systems)
  - : CSS オブジェクトモデルでピクセル位置を定義する方法を説明します。
- [パフォーマンスの基礎: CSS 座標変換の使用](/ja/docs/Web/Performance/Fundamentals#css_変換を使用する)
  - : ウェブパフォーマンスの基礎について、 CSS 座標変換がどのようにパフォーマンスを向上させることができるかを含め、概説します。
- [ウェブの行列演算](/ja/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
  - : オブジェクトの座標変換を行列で表す方法を説明しています。

## 関連する概念

- CSS プロパティ:
  - [`animation`](/ja/docs/Web/CSS/animation)
  - [`background-position`](/ja/docs/Web/CSS/background-position)
  - [`clip`](/ja/docs/Web/CSS/clip)
  - [`clip-path`](/ja/docs/Web/CSS/clip-path)
  - [`contain`](/ja/docs/Web/CSS/contain)
  - [`content-visibility`](/ja/docs/Web/CSS/content-visibility)
  - [`isolation`](/ja/docs/Web/CSS/isolation)
  - [`mask`](/ja/docs/Web/CSS/mask)
  - [`mask-border-source`](/ja/docs/Web/CSS/mask-border-source)
  - [`mask-image`](/ja/docs/Web/CSS/mask-image)
  - [`mix-blend-mode`](/ja/docs/Web/CSS/mix-blend-mode)
  - [`opacity`](/ja/docs/Web/CSS/opacity)
  - [`overflow`](/ja/docs/Web/CSS/overflow)
  - [`transition`](/ja/docs/Web/CSS/transition)
  - [`visibility`](/ja/docs/Web/CSS/visibility)
- データ型:
  - [`<angle>`](/ja/docs/Web/CSS/angle)
  - [`<length-percentage>`](/ja/docs/Web/CSS/length-percentage)
  - [`<length>`](/ja/docs/Web/CSS/length)
  - [`<number>`](/ja/docs/Web/CSS/number)
  - [`<percentage>`](/ja/docs/Web/CSS/percentage)
  - [`<position>`](/ja/docs/Web/CSS/position_value)
- 用語集の用語:
  - [補間](/ja/docs/Glossary/Interpolation)
  - [重ね合わせコンテキスト](/ja/docs/Glossary/Stacking_context)
- [SVG](/ja/docs/Web/SVG) の概念:
  - [`<animate>`](/ja/docs/Web/SVG/Element/animate) 要素
  - [`<animateTransform>`](/ja/docs/Web/SVG/Element/animateTransform) 要素
  - [`<set>`](/ja/docs/Web/SVG/Element/set) 要素
  - [`transform`](/ja/docs/Web/SVG/Attribute/transform) 要素

## 仕様書

{{Specifications}}

## 関連情報

- [基本的な SVG 座標変換](/ja/docs/Web/SVG/Tutorial/Basic_Transformations)のチュートリアル
- [CSS アニメーション](/ja/docs/Web/CSS/CSS_animations)モジュール
- [CSS トランジション](/ja/docs/Web/CSS/CSS_transitions)モジュール
