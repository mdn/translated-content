---
title: inset-block
slug: Web/CSS/inset-block
tags:
  - CSS
  - CSS 論理的プロパティ
  - CSS プロパティ
  - 実験的
  - リファレンス
  - recipe:css-shorthand-property
browser-compat: css.properties.inset-block
translation_of: Web/CSS/inset-block
---
{{CSSRef}}

**`inset-block`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素におけるブロック方向の先頭および末尾からの論理的な内部位置を定義し、要素の書字方向やテキストの向きに従って物理的な内部位置に対応付けられます。 {{cssxref("top")}} と {{cssxref("bottom")}}、または {{cssxref("right")}} と {{cssxref("left")}} のいずれかのプロパティに、 {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}} で定義された値に従って対応します。

```css
/* <length> 値 */
inset-block: 3px 10px;
inset-block: 2.4em 3em;
inset-block: 10px; /* 値が先頭と末尾の両方に適用される */

/* 包含ブロックの幅または高さに対する <percentage> 値 */
inset-block: 10% 5%;

/* キーワード値 */
inset-block: auto;

/* グローバル値 */
inset-block: inherit;
inset-block: initial;
inset-block: revert;
inset-block: unset;
```

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- {{cssxref("inset-block-end")}}
- {{cssxref("inset-block-start")}}

## 構文

### 値

`inset-block` プロパティは {{cssxref("left")}} プロパティと同じ値を取ります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Setting_block_start_and_end_offsets">ブロック方向の先頭と末尾のオフセットの設定</h3>

#### HTML

```html
<div>
  <p class="exampleText">テキストの例</p>
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
  position: relative;
  inset-block: 20px 50px;
  background-color: #c8c800;
}
```

#### 結果

{{EmbedLiveSample("Setting_block_start_and_end_offsets", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 対応する物理的プロパティ: {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, {{cssxref("left")}}
- 対応する物理的な一括指定: {{cssxref("inset")}}
- 対応するインライン方向の一括指定: {{cssxref("inset-inline")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
