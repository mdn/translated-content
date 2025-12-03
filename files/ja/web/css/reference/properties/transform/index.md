---
title: transform
slug: Web/CSS/Reference/Properties/transform
original_slug: Web/CSS/transform
l10n:
  sourceCommit: 8dd227b90abeed60434970aff3da9776d1f24d67
---

**`transform`** は [CSS](/ja/docs/Web/CSS) のプロパティで、与えられた要素を回転、拡大縮小、傾斜、移動することできます。
これは、 CSS の[視覚整形モデル](/ja/docs/Web/CSS/Guides/Display/Visual_formatting_model)の座標空間を変更します。

{{InteractiveExample("CSS デモ: transform")}}

```css interactive-example-choice
transform: matrix(1, 2, 3, 4, 5, 6);
```

```css interactive-example-choice
transform: translate(120px, 50%);
```

```css interactive-example-choice
transform: scale(2, 0.5);
```

```css interactive-example-choice
transform: rotate(0.5turn);
```

```css interactive-example-choice
transform: skew(30deg, 20deg);
```

```css interactive-example-choice
transform: scale(0.5) translate(-100%, -100%);
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/firefox-logo.svg"
    width="200" />
</section>
```

このプロパティに `none` とは異なる値が設定されていると、[重ね合わせコンテキスト](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)が作成されます。
この場合、その要素はその中に含まれる `position: fixed;` または `position: absolute;` であるすべての要素の[包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block)として扱われます。

> [!WARNING]
> 座標変換可能な要素のみが `transform` の対象になります。つまり、レイアウトが CSS ボックスモデルによって管理される、[置換要素でないインラインボックス](/ja/docs/Glossary/Inline-level_content)、[表の列ボックス](/ja/docs/Web/HTML/Reference/Elements/col)、[表の列グループボックス](/ja/docs/Web/HTML/Reference/Elements/colgroup)を除くすべての要素です。

## 構文

```css
/* キーワード値 */
transform: none;

/* 関数値 */
transform: matrix(1, 2, 3, 4, 5, 6);
transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
transform: perspective(17px);
transform: rotate(0.5turn);
transform: rotate3d(1, 2, 3, 10deg);
transform: rotateX(10deg);
transform: rotateY(10deg);
transform: rotateZ(10deg);
transform: translate(12px, 50%);
transform: translate3d(12px, 50%, 3em);
transform: translateX(2em);
transform: translateY(3in);
transform: translateZ(2px);
transform: scale(2, 0.5);
transform: scale3d(2.5, 1.2, 0.3);
transform: scaleX(2);
transform: scaleY(0.5);
transform: scaleZ(0.3);
transform: skew(30deg, 20deg);
transform: skewX(30deg);
transform: skewY(1.07rad);

/* 複数の関数値 */
transform: translateX(10px) rotate(10deg) translateY(5px);
transform: perspective(500px) translate3d(10px, 0, 20px) rotateY(30deg);

/* グローバル値 */
transform: inherit;
transform: initial;
transform: revert;
transform: revert-layer;
transform: unset;
```

`transform` プロパティには、キーワード値 `none` か 1 つ以上の `<transform-function>` の値のいずれかが指定されます。

### 値

- {{cssxref("&lt;transform-function&gt;")}}
  - : 適用される 1 つ以上の [CSS 座標変換関数](/ja/docs/Web/CSS/Reference/Values/transform-function)です。
    座標変換関数は、左から右へ順に重ねられ、つまり[右から左の順に座標変換の合成の効果が適用されます](#座標変換の順序)。
- `none`
  - : 座標変換を何も適用しないことを指定します。

## アクセシビリティ

拡大や縮小のアニメーションは、特定の種類の偏頭痛を引き起こす原因になりやすいので、アクセシビリティの問題になることがあります。ウェブサイトにこのようなアニメーションを含める必要がある場合は、できればサイト全体で、ユーザーがアニメーションを止める制御ができるようしてください。

また、 {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}} メディア特性を使用することを検討してください。これを使用して[メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries)を書けば、ユーザーがシステムの設定でアニメーションを減らすよう指定した場合にアニメーションを止めることができます。

詳しくは以下の文書を参照してください。

- [MDN WCAG の理解、ガイドライン 2.3 の解説](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#ガイドライン_2.3_—_発作と身体的反応_発作や身体的反応を引き起こすことが知られている方法でコンテンツをデザインしないでください)
- [Understanding Success Criterion 2.3.3 | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions)

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 要素の移動と回転

#### HTML

```html-nolint live-sample___translating_and_rotating_an_element
<div>座標変換された要素</div>
```

#### CSS

```css live-sample___translating_and_rotating_an_element
div {
  border: solid red;
  transform: translate(30px, 20px) rotate(20deg);
  width: 140px;
  height: 60px;
}
```

#### 結果

{{EmbedLiveSample("Translating_and_rotating_an_element", "400", "160")}}

### 座標変換の順序

座標変換関数の順番は重要です。この例では、 2 つのボックスが同じ値で回転および平行移動されています。座標変換関数の順序だけが異なっています。

#### HTML

```html live-sample___transform_order
<div class="original"></div>
<div class="one">1</div>
<div class="two">2</div>
```

#### CSS

```css hidden live-sample___transform_order
div {
  height: 200px;
  width: 200px;
  position: absolute;
  left: 200px;
  top: 50px;
  font-size: 4rem;
  line-height: 200px;
  text-align: center;
}
.original {
  border: 1px dashed;
}
.original:before,
.original:after {
  content: "";
  position: absolute;
  top: 100px;
  width: 500px;
  left: -150px;
  height: 1px;
  border-top: 2px dotted;
}
.original:after {
  transform: rotate(135deg);
}
.one {
  background-color: #ccc;
}
.two {
  background-color: #d6bb72;
}
```

```css live-sample___transform_order
.one {
  transform: translateX(200px) rotate(135deg);
}
.two {
  transform: rotate(135deg) translateX(200px);
}
```

#### 結果

{{EmbedLiveSample("Transform_order", "400", "460")}}

要素が平行移動される前に回転された場合、平行移動の方向は回転された軸になります。この軸は点線で示されています。

### その他の例

その他の例は、[CSS 座標変換の使用](/ja/docs/Web/CSS/Guides/Transforms/Using)および {{cssxref("&lt;transform-function&gt;")}} をご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 座標変換の使用](/ja/docs/Web/CSS/Guides/Transforms/Using)
- {{cssxref("&lt;transform-function&gt;")}} データ型にすべての座標変換関数の説明があります
- 独立した CSS プロパティ: {{cssxref('translate')}}, {{cssxref('rotate')}}, {{cssxref('scale')}} （`skew` プロパティはありません）
- CSS 座標変換機能を視覚化するオンラインツール: [CSS Transform Playground](https://css-transform.moro.es/)（英語）
