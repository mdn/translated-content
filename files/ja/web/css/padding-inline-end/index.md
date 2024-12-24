---
title: padding-inline-end
slug: Web/CSS/padding-inline-end
l10n:
  sourceCommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{CSSRef}}

**`padding-inline-end`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素のインライン方向の論理的な末尾側のパディングを定義し、それが要素の書字方向やテキストの方向に応じて物理的なパディングに対応づけられます。

{{EmbedInteractiveExample("pages/css/padding-inline-end.html")}}

## 構文

```css
/* <length> 値 */
padding-inline-end: 10px; /* 絶対的な長さ */
padding-inline-end: 1em; /* テキストの大きさに対する相対値 */

/* <percentage> 値 */
padding-inline-end: 5%; /* ブロックコンテナーの幅に対する割合のパディング */

/* グローバル値 */
padding-inline-end: inherit;
padding-inline-end: initial;
padding-inline-end: revert;
padding-inline-end: revert-layer;
padding-inline-end: unset;
```

### 値

- {{cssxref("&lt;length&gt;")}}
  - : パディングの寸法を固定値で指定します。負の値は指定できません。
- {{cssxref("&lt;percentage&gt;")}}
  - : パディングの寸法を[包含ブロック](/ja/docs/Web/CSS/Containing_block)の[インラインサイズ](/ja/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)（{{cssxref("writing-mode")}} で横書き言語と定義されている場合は _width_）に対するパーセント値で示したものです。負の数であってはいけません。

## 解説

`padding-inline-end` プロパティは、{{cssxref("padding-top")}} プロパティと同じ値を取ると仕様で定義されています。しかし、このプロパティが対応づけられる物理的なプロパティは、 {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}} に設定された値に依存します。したがって、{{cssxref("padding-bottom")}}, {{cssxref("padding-right")}}, {{cssxref("padding-left")}} の何れかに対応づけられる可能性があります。

関連プロパティとして、要素の他のマージンを定義する {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}} があります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 縦書きテキストにおけるインライン方向の末尾のパディングの設定

#### HTML

```html live-sample___setting_inline_end_padding_for_vertical_text
<div>
  <p class="exampleText">テキストの例</p>
</div>
```

#### CSS

```css live-sample___setting_inline_end_padding_for_vertical_text
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-lr;
  padding-inline-end: 20px;
  background-color: #c8c800;
}
```

#### 結果

{{EmbedLiveSample("Setting_inline_end_padding_for_vertical_text", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 論理的プロパティと値](/ja/docs/Web/CSS/CSS_logical_properties_and_values)
- 対応づけ先の物理的プロパティ: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
