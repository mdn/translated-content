---
title: margin-inline-start
slug: Web/CSS/margin-inline-start
l10n:
  sourceCommit: 5e7d1f9ae2cce0cb3f7693dfb8dc6e8d375b2231
---

{{CSSRef}}

**`margin-inline-start`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素のインライン方向の論理的な先頭側のマージンを定義し、それが要素の書字方向やテキストの方向に応じて物理的なマージンに対応づけられます。これは {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}} の何れかのプロパティに対応し、どれに対応するかは {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}} で定義された値によって決まります。

{{EmbedInteractiveExample("pages/css/margin-inline-start.html")}}

## 構文

```css
/* <length> 値 */
margin-inline-start: 10px; /* 絶対的な長さ */
margin-inline-start: 1em; /* テキストの大きさに対する相対値 */
margin-inline-start: 5%; /* 直近のブロックコンテナーの大きさに対する相対値 */

/* キーワード値 */
margin-inline-start: auto;

/* グローバル値 */
margin-inline-start: inherit;
margin-inline-start: initial;
margin-inline-start: revert;
margin-inline-start: revert-layer;
margin-inline-start: unset;
```

関連プロパティとして、要素の他のマージンを定義する {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-end")}} があります。

### 値

`margin-inline-start` プロパティは {{cssxref("margin-left")}} プロパティと同じ値を取ります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### インライン方向の先頭側のマージンの設定

#### HTML

```html
<div>
  <p class="exampleText">Example text</p>
</div>
```

#### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-lr;
  margin-inline-start: 20px;
  background-color: #c8c800;
}
```

#### 結果

{{EmbedLiveSample("インライン方向の先頭側のマージンの設定", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 論理的プロパティと値](/ja/docs/Web/CSS/CSS_logical_properties_and_values)
- {{cssxref("margin-inline-end")}}
- 対応づけ先の物理的なプロパティ: {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
