---
title: transform
slug: Web/CSS/transform
tags:
  - CSS
  - CSS プロパティ
  - Reference
  - 座標変換
  - recipe:css-property
browser-compat: css.properties.transform
translation_of: Web/CSS/transform
---
{{CSSRef}}

**`transform`** は [CSS](/ja/docs/Web/CSS) のプロパティで、与えられた要素を回転、拡大縮小、傾斜、移動することできます。これは、 CSS の[視覚整形モデル](/ja/docs/Web/CSS/Visual_formatting_model)の座標空間を変更します。

{{EmbedInteractiveExample("pages/css/transform.html")}}

このプロパティに `none` 以外の値が設定されていると、[重ね合わせコンテキスト](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)が作成されます。この場合、その要素はその中に含まれる `position: fixed;` または `position: absolute;` であるすべての要素の[包含ブロック](/ja/docs/Web/CSS/Containing_block)として扱われます。

> **Warning:** 座標変換可能な要素のみが `transform` の対象になります。つまり、レイアウトが CSS ボックスモデルによって管理される、[置換要素でないインラインボックス](/ja/docs/Web/CSS/Visual_formatting_model#inline-level_elements_and_inline_boxes)、[表の列ボックス](/ja/docs/Web/HTML/Element/col)、[表の列グループボックス](/ja/docs/Web/HTML/Element/colgroup)を除くすべての要素です。

## 構文

```css
/* キーワード値 */
transform: none;

/* 関数値 */
transform: matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0);
transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
transform: perspective(17px);
transform: rotate(0.5turn);
transform: rotate3d(1, 2.0, 3.0, 10deg);
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
transform: perspective(500px) translate(10px, 0, 20px) rotateY(3deg);

/* グローバル値 */
transform: inherit;
transform: initial;
transform: revert;
transform: unset;
```

`transform` プロパティには、キーワード値 `none` か 1 つ以上の `<transform-function>` の値のいずれかが指定されます。

複数の関数値に {{cssxref("transform-function/perspective()", "perspective()")}} が含まれる場合は、先頭に置く必要があります。

### 値

- {{cssxref("&lt;transform-function&gt;")}}
  - : 適用される 1 つ以上の [CSS 座標変換関数](/ja/docs/Web/CSS/transform-function)です。座標変換関数は、左から右へ順に重ねられ、つまり右から左の順に座標変換の合成の効果が適用されます。
- `none`
  - : 座標変換を何も適用しないことを指定します。

## アクセシビリティの考慮

拡大や縮小のアニメーションは、特定の種類の偏頭痛を引き起こす原因になりやすいので、アクセシビリティの問題になることがあります。ウェブサイトにこのようなアニメーションを含める必要がある場合は、できればサイト全体で、ユーザーがアニメーションを止める制御ができるようしてください。

また、 {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}} メディア特性を使用することを検討してください。これを使用して[メディアクエリー](/ja/docs/Web/CSS/Media_queries)を書けば、ユーザーがシステムの設定でアニメーションを減らすよう指定した場合にアニメーションを止めることができます。

詳しくは以下の文書を参照してください。

- [MDN WCAG の理解、ガイドライン 2.3 の解説](/ja/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.3_%E2%80%94_Seizures_and_Physical_Reactions_Do_not_design_content_in_a_way_that_is_known_to_cause_seizures_or_physical_reactions)
- [Understanding Success Criterion 2.3.3 | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions)

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Translating_and_rotating_an_element">要素の移動と回転</h3>

#### HTML

```html
<div>Transformed element</div>
```

#### CSS

```css
div {
  border: solid red;
  transform: translate(30px, 20px) rotate(20deg);
  width: 140px;
  height: 60px;
}
```

#### 結果

{{EmbedLiveSample("Translating_and_rotating_an_element", "400", "160")}}

### その他の例

その他の例は、[CSS 座標変換の使用](/ja/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)および {{cssxref("&lt;transform-function&gt;")}} をご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 座標変換の使用](/ja/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)
- {{cssxref("&lt;transform-function&gt;")}} データ型にすべての座標変換関数の説明があります
- CSS 座標変換機能を視覚化するオンラインツール: [CSS Transform Playground](https://css-transform.moro.es/)
