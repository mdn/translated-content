---
title: min-inline-size
slug: Web/CSS/min-inline-size
tags:
  - CSS
  - CSS 論理的プロパティ
  - CSS プロパティ
  - Experimental
  - リファレンス
  - min-inline-size
  - recipe:css-property
browser-compat: css.properties.min-inline-size
translation_of: Web/CSS/min-inline-size
---
{{CSSRef}}

**`min-inline-size`** は [CSS](/ja/docs/Web/CSS) のプロパティで、書字方向に応じて要素ブロックの水平または垂直方向の最小の寸法を定義します。これは {{cssxref("min-width")}} または {{cssxref("min-height")}} のどちらかのプロパティと、 {{cssxref("writing-mode")}} の値に応じて対応します。

{{EmbedInteractiveExample("pages/css/min-inline-size.html")}}

## 構文

```css
/* <length> 値 */
min-inline-size: 100px;
min-inline-size: 5em;

/* <percentage> 値 */
min-inline-size: 10%;

/* キーワード値 */
min-inline-size: max-content;
min-inline-size: min-content;
min-inline-size: fit-content(20em);

/* グローバル値 */
min-inline-size: inherit;
min-inline-size: initial;
min-inline-size: revert;
min-inline-size: unset;
```

書字方向が垂直方向であった場合、 `min-inline-size` の値は要素の最小の高さに対応します。そうでなければ、要素の最小幅に対応します。関連プロパティの {{cssxref("min-block-size")}} が要素のもう一方の寸法を定義します。

### 値

`min-inline-size` プロパティは {{cssxref("min-width")}} および {{cssxref("min-height")}} の各プロパティと同じ値を取ります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Setting_minimum_inline_size_for_vertical_text">縦書きでインライン方向の最小寸法を設定</h3>

#### HTML

```html
<p class="exampleText">Example text</p>
```

#### CSS

```css
.exampleText {
  writing-mode: vertical-rl;
  background-color: yellow;
  block-size: 5%;
  min-inline-size: 200px;
}
```

#### 結果

{{EmbedLiveSample("Setting_minimum_inline_size_for_vertical_text")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 対応付けされる物理的プロパティ: {{cssxref("min-width")}} および {{cssxref("min-height")}}
- {{cssxref("writing-mode")}}
