---
title: padding-top
slug: Web/CSS/padding-top
---

{{CSSRef}}

**`padding-top`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の[パディング領域](/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#パディング領域)における上側の高さを設定します。

{{EmbedInteractiveExample("pages/css/padding-top.html")}}

要素のパディング領域とは、コンテンツと境界との間の空間のことです。

![CSS の padding-top プロパティの要素ボックスへの影響](padding-top.svg)

> **メモ:** {{cssxref("padding")}} プロパティは、単一の宣言で要素の四方のパディングをすべて設定することができます。

## 構文

```css
/* <length> 値 */
padding-top: 0.5em;
padding-top: 0;
padding-top: 2cm;

/* <percentage> 値 */
padding-top: 10%;

/* グローバル値 */
padding-top: inherit;
padding-top: initial;
padding-top: revert;
padding-top: unset;
```

`padding-top` プロパティは、以下のリストから選択した値で指定されます。マージンとは異なり、パディングには負の数は使用できません。

### 値

- {{cssxref("&lt;length&gt;")}}
  - : パディングの寸法を固定値で表したものです。負の数であってはいけません。
- {{cssxref("&lt;percentage&gt;")}}
  - : パディングの寸法を包含ブロックの*幅*に対するパーセント値で表したものです。負の数であってはいけません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 上パディングをピクセル数とパーセント値で設定

```css
.content {
  padding-top: 5%;
}
.sidebox {
  padding-top: 10px;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 基本ボックスモデル入門](/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
- {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}} および {{cssxref("padding")}} 一括指定
- 対応付けられる論理的プロパティ: {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}}, {{cssxref("padding-inline-end")}} および一括指定の {{cssxref("padding-block")}} と {{cssxref("padding-inline")}}
