---
title: inset-inline
slug: Web/CSS/inset-inline
l10n:
  sourceCommit: 73091fbe590d96857d743eaeec5aee4a8101994f
---

{{CSSRef}}

**`inset-inline`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素におけるインライン方向の先頭および末尾からの論理的な内部位置を定義し、要素の書字方向やテキストの向きに従って物理的な内部位置に対応付けられます。 {{cssxref("top")}} と {{cssxref("bottom")}}、または {{cssxref("right")}} と {{cssxref("left")}} のいずれかのプロパティに、 {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}} で定義された値に従って対応します。

{{EmbedInteractiveExample("pages/css/inset-inline.html")}}

## 構成要素のプロパティ

このプロパティは、以下の CSS プロパティの一括指定です。

- {{cssxref("inset-inline-end")}}
- {{cssxref("inset-inline-start")}}

## 構文

```css
/* <length> 値 */
inset-inline: 3px 10px;
inset-inline: 2.4em 3em;
inset-inline: 10px; /* 値が先頭と末尾の両方に適用される */

/* 包含ブロックの幅または高さに対する <percentage> 値 */
inset-inline: 10% 5%;

/* キーワード値 */
inset-inline: auto;

/* グローバル値 */
inset-inline: inherit;
inset-inline: initial;
inset-inline: revert;
inset-inline: revert-layer;
inset-inline: unset;
```

### 値

`inset-inline` プロパティは {{cssxref("left")}} プロパティと同じ値を取ります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### インライン方向の先頭と末尾のオフセットの設定

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
  inset-inline: 20px 50px;
  background-color: #c8c800;
}
```

#### 結果

{{EmbedLiveSample("インライン方向の先頭と末尾のオフセットの設定", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 対応する物理的プロパティ: {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, {{cssxref("left")}}
- 対応する物理的な一括指定: {{cssxref("inset")}}
- 対応するブロック方向の一括指定: {{cssxref("inset-block")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
