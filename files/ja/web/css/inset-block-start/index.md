---
title: inset-block-start
slug: Web/CSS/inset-block-start
tags:
  - CSS
  - CSS 論理的プロパティ
  - CSS プロパティ
  - 実験的
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.inset-block-start
translation_of: Web/CSS/inset-block-start
---
{{CSSRef}}

**`inset-block-start`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素における先頭からの論理的なオフセットを定義し、要素の書字方向やテキストの向きに従って物理的な内部位置に対応付けられます。 {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, {{cssxref("left")}} のいずれかのプロパティに、 {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}} で定義された値に従って対応します。

```css
/* <length> 値 */
inset-block-start: 3px;
inset-block-start: 2.4em;

/* 包含ブロックの幅または高さに対する <percentage> 値 */
inset-block-start: 10%;

/* キーワード値 */
inset-block-start: auto;

/* グローバル値 */
inset-block-start: inherit;
inset-block-start: initial;
inset-block-start: revert;
inset-block-start: unset;
```

## 構文

### 値

`inset-block-start` プロパティは {{cssxref("left")}} プロパティと同じ値を取ります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Setting_block_start_offset">ブロック方向の先頭のオフセットの設定</h3>

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
  inset-block-start: 20px;
  background-color: #c8c800;
}
```

{{EmbedLiveSample("Setting_block_start_offset", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 内部位置を定義する他のプロパティ: {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, {{cssxref("inset-inline-end")}}
- 対応する物理的プロパティ: {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, {{cssxref("left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
