---
title: CSS モーションパス
short-title: モーションパス
slug: Web/CSS/Guides/Motion_path
l10n:
  sourceCommit: d35e3fd4bc6b80049899b45d74ed71dc996adfc7
---

**CSS モーションパス** (CSS motion path) モジュールは、任意のグラフィックオブジェクトを独自の経路に沿って動作させるためのものです。

[CSS 座標変換](/ja/docs/Web/CSS/Guides/Transforms)モジュールは、ページ上の他の要素のレイアウトを崩すことなく、ボックスの配置位置を基準として、ボックスの位置を再配置したり、回転させたり、変倍したり、歪ませたりする機能を提供します。これらの座標変換にはアニメーションやトランジションを適用できますが、その方法は比較的基本的なものに限定されます。

CSSのモーションパスモジュールの機能には、オフセット変換が含まれています。これは、要素上の特定の点を、オフセットパスに沿って指定された距離だけずらして配置する変換であり、必要に応じて、変換後の要素をパスの方向に合わせて回転させることもできます。このモジュールにより、次のような強力な変換ができます。例えば、

- 座標変換を標準の直交座標系の {{cssxref("transform")}} 座標に制限するのではなく、極座標系をを用いて位置指定を行う。
- 定義されたパスに沿って要素をアニメーションさせる。

CSS モーションパスでは、[CSS 図形関数](/ja/docs/Web/CSS/Reference/Values/Functions#図形関数)を活用することで、複雑な 2D トランジションを定義することができます。

例えば、 {{cssxref("offset-path")}} によって、任意の形状の特定の経路を定義することができます。そして、 {{cssxref("offset-distance")}} により経路に沿って動かすことができ、 {{cssxref("offset-rotate")}} プロパティを用いて任意の位置での向きを選択することができます。

## モーションパスの実例

```html hidden
<div id="heart">
  <div id="motion-demo"></div>
</div>
```

```css hidden
#motion-demo {
  offset-path: path(
    "M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
  );
  animation: move 3000ms infinite linear;
  width: 10px;
  height: 10px;
  background: red;
}

#heart {
  width: 200px;
  height: 200px;
  background-color: lightpink;
  clip-path: path(
    "M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
  );
}

@keyframes move {
  100% {
    offset-distance: 100%;
  }
}
```

{{EmbedLiveSample('Motion paths in action', '100%', 220)}}

この例では、[CSS マスク](/ja/docs/Web/CSS/Guides/Masking)と[CSS シェイプ](/ja/docs/Web/CSS/Guides/Shapes)を使用して、薄いピンクの背景を持つコンテナーをハートの形に切り抜いています。{{cssxref("basic-shape/path","path()")}} 関数を、{{cssxref("clip-path")}} プロパティの値として使用しています。その子要素は、親要素の縁に沿うように作成された `10px` × `10px` の赤いボックスです。これを実現するために、パスとして同じ {{cssxref("basic-shape")}} を使用し、ボックスの {{cssxref("offset-path")}} プロパティを同じ `path()` 関数の値に設定しています。また、[CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)を使用し、3 秒かけて {{cssxref("offset-distance")}} を `0%` から `100%` へと変化させています。

## リファレンス

### プロパティ

- {{cssxref("offset")}} 一括指定
- {{cssxref("offset-anchor")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-path")}}
- {{cssxref("offset-position")}}
- {{cssxref("offset-rotate")}}

### 関数

- {{cssxref("ray")}}

## ガイド

- [CSS アニメーションの使用](/ja/docs/Web/CSS/Guides/Animations/Using)
  - : CSS を使用してアニメーションを作成する方法についての順を追いながら説明するチュートリアルです。

## 関連概念

[CSS 座標変換](/ja/docs/Web/CSS/Guides/Transforms)モジュール

- {{cssxref("transform")}}
- {{cssxref("transform-origin")}}
- {{cssxref("translate")}}

[CSS マスク](/ja/docs/Web/CSS/Guides/Masking)モジュール

- {{cssxref("clip-path")}}
- {{cssxref("clip-rule")}}

[CSS シェイプ](/ja/docs/Web/CSS/Guides/Shapes)モジュール

- {{cssxref("basic-shape")}}
- {{cssxref("basic-shape/circle","circle()")}}
- {{cssxref("basic-shape/ellipse","ellipse()")}}
- {{cssxref("basic-shape/inset","inset()")}}
- {{cssxref("basic-shape/path","path()")}}
- {{cssxref("basic-shape/polygon","polygon()")}}
- {{cssxref("basic-shape/rect","rect()")}}
- {{cssxref("basic-shape/shape","shape()")}}
- {{cssxref("basic-shape/xywh","xywh()")}}

[CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)モジュール

- {{cssxref("animation")}} shorthand
- {{cssxref("@keyframes")}}

[CSS ボックスモル](/ja/docs/Web/CSS/Guides/Box_model)モジュール

- [`<coord-box>`](/ja/docs/Web/CSS/Reference/Properties/offset-path#coord-box)

## 仕様書

{{Specifications}}

## 関連情報

- {{cssxref("&lt;position&gt;")}}
- {{cssxref("easing-function")}}
- {{cssxref("gradient/radial-gradient")}} 関数
- {{cssxref("@media/prefers-reduced-motion")}} メディアクエリー
- CSS の {{cssxref("will-change")}} プロパティ
