---
title: margin-inline-end
slug: Web/CSS/margin-inline-end
---

{{CSSRef}}

**`margin-inline-end`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素のインライン方向の論理的な末尾側のマージンを定義し、それが要素の書字方向やテキストの方向に応じて物理的なマージンに対応づけられます。これは {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}} の何れかのプロパティに対応し、どれに対応するかは {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}} で定義された値によって決まります。

{{EmbedInteractiveExample("pages/css/margin-inline-end.html")}}

## 構文

```css
/* <length> 値 */
margin-inline-end: 10px; /* 絶対的な長さ */
margin-inline-end: 1em; /* テキストの大きさに対する相対値 */
margin-inline-end: 5%; /* 直近のブロックコンテナーの大きさに対する相対値 */

/* キーワード値 */
margin-inline-end: auto;

/* グローバル値 */
margin-inline-end: inherit;
margin-inline-end: initial;
margin-inline-end: revert;
margin-inline-end: unset;
```

関連プロパティとして、要素の他のマージンを定義する {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}} があります。

### 値

`margin-inline-end` プロパティは {{cssxref("margin-left")}} プロパティと同じ値を取ります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Setting_inline_end_margin">インライン方向の末尾側のマージンの設定</h3>

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
  margin-inline-end: 20px;
  background-color: #c8c800;
}
```

#### 結果

{{EmbedLiveSample("Setting_inline_end_margin", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("margin-inline-start")}}
- 対応づけ先の物理的なプロパティ: {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
