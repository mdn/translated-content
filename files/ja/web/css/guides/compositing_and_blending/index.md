---
title: CSS 合成と混合
slug: Web/CSS/Guides/Compositing_and_blending
original_slug: Web/CSS/CSS_compositing_and_blending
l10n:
  sourceCommit: 9b9086cf753e2d5721fe1229ff6f767ccf512f97
---

**CSS 合成と混合** (compositing and blending) モジュールは、要素の背景レイヤーをどのように互いに合成するか、どのように要素をコンテナーと合成するか、要素が新しい[重ね合わせコンテキスト](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)を生成する必要があるかどうかを定義します。

この CSS モジュールのプロパティを使用して、要素の背景画像と色を単一の背景画像に合成するために使用する混合モードを定義することができます。モジュールが提供する混合モードは 16 種類あります。また、要素の境界線、背景、およびテキスト、絵文字、画像を含むコンテンツを、コンテナーの背景とどのように合成するかを定義することもできます。

### 合成と混合の実際

この例では、それぞれのボックスには境界線と 2 つの縞模様の背景画像、そして単色の背景があります。すべてのボックスに共通する背景には、円のパターンが含まれています。 2 つ目の行にある 3 つのボックスは、コンテナーの背景と合成するように設定されています。

```html hidden live-sample___compositing
<section>
  <div><span>通常、混合なし</span></div>
  <div><span>色を乗算</span></div>
  <div><span>背景色に基づいて乗算</span></div>
  <div>通常、混合なし</div>
  <div>色を乗算</div>
  <div>背景色に基づいて乗算</div>
</section>
```

```css hidden live-sample___compositing
/* 2 つのオフセット縞模様の背景画像と背景色を持つ div を作成します。 */
div {
  width: 200px;
  height: 200px;
  background-image:
    repeating-linear-gradient(45deg, red 0 15px, pink 15px 30px),
    repeating-linear-gradient(-45deg, blue 0 15px, lightblue 15px 30px);
  background-size: 150px 150px;
  background-repeat: no-repeat;
  background-position:
    top left,
    bottom right;
  background-color: palegoldenrod;
  text-align: center;
  padding-top: 150px;
  font-family: sans-serif;
  box-sizing: border-box;
  border: 5px solid black;
}
div:nth-of-type(3n + 1) {
  background-blend-mode: normal;
}
div:nth-of-type(3n + 2) {
  background-blend-mode: multiply;
}
div:nth-of-type(3n + 3) {
  background-blend-mode: overlay;
}
div:nth-of-type(n + 4) {
  mix-blend-mode: difference;
}
/* 要素全体に応じて、透明の丸い穴のあるピンクの背景を配置し、
  例を 2 行 3 列に並べる */
section {
  padding: 0.75em;
  background: radial-gradient(
    circle,
    transparent 0 20px,
    rgb(255 200 200) 20px
  );
  background-size: 60px 60px;
  background-position: center;
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1em;
}
/* テキストの一部を読みやすくする */
span {
  background-color: #ffffff99;
}
```

{{EmbedLiveSample("compositing", "", "450px")}}

混合の結果、背景、境界線、コンテンツがすべて影響を受けることに注目してください。
上記の例で "Play" をクリックすると、MDN Playground でアニメーションのコードを表示または編集できます。

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

- [CSS フィルター効果](/ja/docs/Web/CSS/Guides/Filter_effects)モジュールのプロパティでは、画像、背景、境界線に対してぼかしや色の強弱の変更などのフィルター効果を適用することができます。
- [Compositing And Blending In CSS](https://www.sarasoueidan.com/blog/compositing-and-blending-in-css/) (2015)
- [Editing Images in CSS: Blend Modes](https://webdesign.tutsplus.com/editing-images-in-css-blend-modes--cms-26058t) (2022)
- [web.dev: blend modes](https://web.dev/learn/css/blend-modes) (2021)
