---
title: inset-inline-start
slug: Web/CSS/inset-inline-start
l10n:
  sourceCommit: 73091fbe590d96857d743eaeec5aee4a8101994f
---

{{CSSRef}}

**`inset-inline-start`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素における行頭からの論理的な内部位置を定義し、要素の書字方向やテキストの向きに従って物理的なオフセットに対応付けられます。 {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, {{cssxref("left")}} のいずれかのプロパティに、 {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}} で定義された値に従って対応します。

{{EmbedInteractiveExample("pages/css/inset-inline-start.html")}}

## 構文

```css
/* <length> 値 */
inset-inline-start: 3px;
inset-inline-start: 2.4em;

/* 包含ブロックの幅または高さに対する <percentage> 値 */
inset-inline-start: 10%;

/* キーワード値 */
inset-inline-start: auto;

/* グローバル値 */
inset-inline-start: inherit;
inset-inline-start: initial;
inset-inline-start: revert;
inset-inline-start: revert-layer;
inset-inline-start: unset;
```

`inset-inline-start` と {{cssxref("inset-inline-end")}} の一括指定は {{cssxref("inset-inline")}} です。

### 値

`inset-inline-start` プロパティは {{cssxref("left")}} プロパティと同じ値を取ります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### インライン方向の先頭のオフセットの設定

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
  inset-inline-start: 20px;
  background-color: #c8c800;
}
```

#### 結果

{{EmbedLiveSample("インライン方向の先頭のオフセットの設定", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 内部位置を定義する他のプロパティ: {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-end")}}
- 対応する物理的プロパティ: {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, {{cssxref("left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
