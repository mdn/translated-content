---
title: transition
slug: Web/CSS/transition
tags:
  - CSS
  - CSS プロパティ
  - CSS トランジション
  - リファレンス
  - recipe:css-shorthand-property
browser-compat: css.properties.transition
translation_of: Web/CSS/transition
---
{{CSSRef}}

**`transition`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 {{cssxref("transition-property")}}、 {{cssxref("transition-duration")}}、 {{cssxref("transition-timing-function")}}、 {{cssxref("transition-delay")}} の[一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)です。

{{EmbedInteractiveExample("pages/css/transition.html")}}

トランジション (transition) は、要素の 2 つの状態間の変化を定義するためのものです。それぞれの状態は {{cssxref(":hover")}} や {{cssxref(":active")}} のような[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で定義されたり、 JavaScript を使用して動的に設定されたりします。

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`transition-delay`](/ja/docs/Web/CSS/transition-delay)
- [`transition-duration`](/ja/docs/Web/CSS/transition-duration)
- [`transition-property`](/ja/docs/Web/CSS/transition-property)
- [`transition-timing-function`](/ja/docs/Web/CSS/transition-timing-function)

## 構文

```css
/* 1 つのプロパティへの適用 */
/* プロパティ名 | 所要時間 */
transition: margin-right 4s;

/* プロパティ名 | 所要時間 | 待ち時間 */
transition: margin-right 4s 1s;

/* プロパティ名 | 所要時間 | イージング関数 */
transition: margin-right 4s ease-in-out;

/* プロパティ名 | 所要時間 | イージング関数 | 待ち時間 */
transition: margin-right 4s ease-in-out 1s;

/* 2 つのプロパティへの適用 */
transition: margin-right 4s, color 1s;

/* 変化するすべてのプロパティへの適用 */
transition: all 0.5s ease-out;

/* グローバル値 */
transition: inherit;
transition: initial;
transition: revert;
transition: unset;
```

`transition` プロパティは、 1 つまたは複数の単体プロパティによるトランジションを、カンマで区切って指定します。

それぞれの単体プロパティのトランジションでは、単体のプロパティ (または特別な値である `all` および `none`) に適用されるトランジションを記述します。記述は以下の通りです。

- トランジションを適用するプロパティを表す 0 ～ 1 個の値。以下のうちの一つです。

  - `none` キーワード
  - `all` キーワード
  - CSS プロパティの名前である {{cssxref("&lt;custom-ident&gt;")}}

- 使用するイージング関数を表す 0 または 1 個の {{cssxref("&lt;easing-function&gt;")}} の値
- 0 ～ 2 個の {{cssxref("&lt;time&gt;")}} の値。 1 番目の値は {{cssxref("transition-duration")}} に割り当てられる所要時間として解釈され、 2 番目の値は {{cssxref("transition-delay")}} に割り当てられる待ち時間として解釈されます。

プロパティ値の一覧が同じ長さではない場合については、[プロパティ値のリストの長さが異なる場合](/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions#when_property_value_lists_are_of_different_lengths)を参照してください。つまり、実際にアニメーション化されているプロパティの数を超える余分なトランジションの記述は無視されます。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 単純な例

この例では、ユーザーが要素の上にカーソルを置いたときに、 1 秒間の遅延をつけて 4 秒間でフォントサイズの遷移を行います。

#### HTML

```html
<a class="target">この上にポインターを移動してください</a>
```

#### CSS

```css
.target {
  font-size: 14px;
  transition: font-size 4s 1s;
}

.target:hover {
  font-size: 36px;
}
```

#### 結果

{{EmbedLiveSample('Simple_example', 600, 100)}}

[CSS トランジションの使用](/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) の記事に、 CSS トランジションの例がいくつかあります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS トランジションの使用](/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
- {{ domxref("TransitionEvent") }}
