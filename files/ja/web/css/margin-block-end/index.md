---
title: margin-block-end
slug: Web/CSS/margin-block-end
l10n:
  sourceCommit: 5e7d1f9ae2cce0cb3f7693dfb8dc6e8d375b2231
---

{{CSSRef}}

**`margin-block-end`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素のインライン方向の論理的な先頭側のマージンを定義し、それが要素の書字方向やテキストの方向に応じて物理的なマージンに対応づけられます。

{{EmbedInteractiveExample("pages/css/margin-block-end.html")}}

## 構文

```css
/* <length> 値 */
margin-block-end: 10px; /* 絶対的な長さ */
margin-block-end: 1em; /* テキストの大きさに対する相対値 */
margin-block-end: 5%; /* 直近のブロックコンテナーの大きさに対する相対値 */

/* キーワード値 */
margin-block-end: auto;

/* グローバル値 */
margin-block-end: inherit;
margin-block-end: initial;
margin-block-end: revert;
margin-block-end: revert-layer;
margin-block-end: unset;
```

これは {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}} の何れかのプロパティに対応し、どれに対応するかは {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}} で定義された値によって決まります。

関連プロパティとして、要素の他のマージンを定義する {{cssxref("margin-block-start")}}, {{cssxref("margin-inline-start")}}, {{cssxref("margin-inline-end")}} があります。

### 値

`margin-block-end` プロパティは {{cssxref("margin-left")}} プロパティと同じ値を取ります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### ブロック方向の末尾のマージンを設定

#### HTML

```html live-sample___setting_block_end_margin
<div>
  <p class="exampleText">テキストの例</p>
</div>
```

#### CSS

```css live-sample___setting_block_end_margin
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-rl;
  margin-block-end: 20px;
  background-color: #c8c800;
}
```

#### 結果

{{EmbedLiveSample("Setting_block_end_margin", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 論理的プロパティと値](/ja/docs/Web/CSS/CSS_logical_properties_and_values)
- 対応づけ先の物理的なプロパティ: {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
