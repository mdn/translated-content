---
title: margin-top
slug: Web/CSS/margin-top
tags:
  - CSS
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.margin-top
translation_of: Web/CSS/margin-top
---
{{CSSRef}}

**`margin-top`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の上側の[マージン領域](/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#マージン領域)を設定します。正の数を指定すると、隣との間が遠くなるように配置され、負の数を指定すると、近くなるように配置します。

{{EmbedInteractiveExample("pages/css/margin-top.html")}}

このプロパティは、[置換要素](/ja/docs/Web/CSS/Replaced_element)ではないインライン要素、例えば {{HTMLElement("span")}} や {{HTMLElement("code")}} には効果がありません。

## 構文

```css
/* <length> 値 */
margin-top: 10px;  /* 絶対的な寸法 */
margin-top: 1em;   /* 文字の寸法からの相対 */
margin-top: 5%;    /* 直近のブロックコンテナーの幅からの相対 */

/* キーワード値 */
margin-top: auto;

/* グローバル値 */
margin-top: inherit;
margin-top: initial;
margin-top: revert;
margin-top: unset;
```

`margin-top` プロパティは `auto` キーワード、または `<length>` や `<percentage>` で指定されます。正の数、ゼロ、負の数が指定できます。

### 値

- {{cssxref("&lt;length&gt;")}}
  - : マージンの寸法を固定値で表したものです。
- {{cssxref("&lt;percentage&gt;")}}
  - : マージンの寸法を包含ブロックの*幅*に対するパーセント値で表したものです。
- `auto`
  - : ブラウザーが適切な値を選択して使用します。 {{cssxref("margin")}} を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 正と負の上マージンの設定

```css
.content { margin-top:   5%; }
.sidebox { margin-top: 10px; }
.logo    { margin-top: -5px; }
#footer  { margin-top:  1em; }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}} と {{cssxref("margin")}} 一括指定
- 対応付けられる論理的プロパティ: {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}}, {{cssxref("margin-inline-end")}} および一括指定の {{cssxref("margin-block")}} と {{cssxref("margin-inline")}}
