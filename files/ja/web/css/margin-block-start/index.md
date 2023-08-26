---
title: margin-block-start
slug: Web/CSS/margin-block-start
---

{{CSSRef}}

**`margin-block-start`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素のインライン方向の論理的な先頭側のマージンを定義し、それが要素の書字方向やテキストの方向に応じて物理的なマージンに対応づけられます。

{{EmbedInteractiveExample("pages/css/margin-block-start.html")}}

## 構文

```css
/* <length> 値 */
margin-block-start: 10px; /* 絶対的な長さ */
margin-block-start: 1em; /* テキストの大きさに対する相対値 */
margin-block-start: 5%; /* 直近のブロックコンテナーの大きさに対する相対値 */

/* キーワード値 */
margin-block-start: auto;

/* グローバル値 */
margin-block-start: inherit;
margin-block-start: initial;
margin-block-start: revert;
margin-block-start: unset;
```

これは {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}} の何れかのプロパティに対応し、どれに対応するかは {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}} で定義された値によって決まります。

関連プロパティとして、要素の他のマージンを定義する {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}}, {{cssxref("margin-inline-end")}} があります。

### 値

`margin-block-start` プロパティは {{cssxref("margin-left")}} プロパティと同じ値を取ります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Setting_block_start_margin">ブロック方向の先頭のマージンの設定</h3>

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
  margin-block-start: 20px;
  background-color: #c8c800;
}
```

#### 結果

{{EmbedLiveSample("Setting_block_start_margin", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 対応づけ先の物理的プロパティ: {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
