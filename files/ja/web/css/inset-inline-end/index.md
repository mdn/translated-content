---
title: inset-inline-end
slug: Web/CSS/inset-inline-end
l10n:
  sourceCommit: 73091fbe590d96857d743eaeec5aee4a8101994f
---

{{CSSRef}}

**`inset-inline-end`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素における行末からの論理的な内部位置を定義し、要素の書字方向やテキストの向きに従って物理的なオフセットに対応付けられます。 {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, {{cssxref("left")}} のいずれかのプロパティに、 {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}} で定義された値に従って対応します。

{{EmbedInteractiveExample("pages/css/inset-inline-end.html")}}

## 構文

```css
/* <length> 値 */
inset-inline-end: 3px;
inset-inline-end: 2.4em;

/* 包含ブロックの幅または高さに対する <percentage> 値 */
inset-inline-end: 10%;

/* キーワード値 */
inset-inline-end: auto;

/* グローバル値 */
inset-inline-end: inherit;
inset-inline-end: initial;
inset-inline-end: revert;
inset-inline-end: revert-layer;
inset-inline-end: unset;
```

{{cssxref("inset-inline-start")}} と `inset-inline-end` の一括指定は {{cssxref("inset-inline")}} です。

### 値

`inset-inline-end` プロパティは {{cssxref("left")}} プロパティと同じ値を取ります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### インライン方向の末尾のオフセットの設定

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
  writing-mode: vertical-rl;
  position: relative;
  inset-inline-end: 20px;
  background-color: #c8c800;
}
```

#### 結果

{{EmbedLiveSample("インライン方向の末尾のオフセットの設定", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 内部位置を定義する他のプロパティ: {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}
- 対応する物理的プロパティ: {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, {{cssxref("left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
