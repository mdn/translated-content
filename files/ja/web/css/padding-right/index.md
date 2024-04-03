---
title: padding-right
slug: Web/CSS/padding-right
l10n:
  sourceCommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{CSSRef}}

**`padding-right`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の[パディング領域](/ja/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#パディング領域)における右側の幅を設定します。

{{EmbedInteractiveExample("pages/css/padding-right.html")}}

要素のパディング領域とは、コンテンツと境界との間の空間のことです。

> **メモ:** {{cssxref("padding")}} プロパティは、単一の宣言で要素の四方のパディングをすべて設定することができます。

## 構文

```css
/* <length> の値 */
padding-right: 0.5em;
padding-right: 0;
padding-right: 2cm;

/* <percentage> の値 */
padding-right: 10%;

/* グローバル値 */
padding-right: inherit;
padding-right: initial;
padding-right: revert;
padding-right: revert-layer;
padding-right: unset;
```

`padding-right` プロパティは、以下のリストから選択した値で指定されます。マージンとは異なり、パディングには負の数は使用できません。

### 値

- {{cssxref("&lt;length&gt;")}}
  - : パディングの寸法を固定値で表したものです。負の数であってはいけません。
- {{cssxref("&lt;percentage&gt;")}}
  - : パディングの寸法を[包含ブロック](/ja/docs/Web/CSS/Containing_block)のインラインサイズ（{{cssxref("writing-mode")}} で横書き言語と定義されている場合は _width_）に対するパーセント値で示したものです。負の数であってはいけません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 右パディングをピクセル数とパーセント値で設定

```css
.content {
  padding-right: 5%;
}
.sidebox {
  padding-right: 10px;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 基本ボックスモデル入門](/ja/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- {{cssxref("padding-top")}}, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}} および {{cssxref("padding")}} 一括指定
- 対応付けられる論理的プロパティ: {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}}, {{cssxref("padding-inline-end")}} および一括指定の {{cssxref("padding-block")}} と {{cssxref("padding-inline")}}
