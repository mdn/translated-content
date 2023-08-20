---
title: padding-block-start
slug: Web/CSS/padding-block-start
---

{{CSSRef}}

**`padding-block-start`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素のブロック方向の論理的な先頭側のパディングを定義し、それが要素の書字方向やテキストの方向に応じて物理的なパディングに対応づけられます。

{{EmbedInteractiveExample("pages/css/padding-block-start.html")}}

## 構文

```css
/* <length> 値 */
padding-block-start: 10px; /* 絶対的な長さ */
padding-block-start: 1em; /* テキストの大きさに対する相対値 */

/* <percentage> 値 */
padding-block-start: 5%; /* ブロックコンテナーの幅に対する割合のパディング */

/* グローバル値 */
padding-block-start: inherit;
padding-block-start: initial;
padding-block-start: revert;
padding-block-start: unset;
```

### 値

- {{cssxref("&lt;length&gt;")}}
  - : パディングの寸法を固定値で指定します。負の値は指定できません。
- {{cssxref("&lt;percentage&gt;")}}
  - : パディングの寸法をパーセント値で表したもので、含まれるブロックの _inline-size_ に対する相対値です。負の値は指定できません。

## 解説

`padding-block-start` プロパティは、{{cssxref("padding-top")}} プロパティと同じ値を取ると仕様で定義されています。しかし、このプロパティが対応づけられる物理的なプロパティは、 {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}} に設定された値に依存します。したがって、{{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-left")}} の何れかに対応づけられる可能性があります。

関連プロパティとして、要素の他のマージンを定義する {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}}, {{cssxref("padding-inline-end")}} があります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Setting_block_start_padding_for_vertical_text">縦書きテキストにおけるブロック方向の先頭のパディングの設定</h3>

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
  padding-block-start: 20px;
  background-color: #c8c800;
}
```

#### 結果

{{EmbedLiveSample("Setting_block_start_padding_for_vertical_text", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 対応づけ先の物理的なプロパティ: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
