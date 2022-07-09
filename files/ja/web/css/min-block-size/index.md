---
title: min-block-size
slug: Web/CSS/min-block-size
tags:
  - CSS
  - CSS 論理的プロパティ
  - CSS プロパティ
  - Experimental
  - リファレンス
  - min-block-size
  - recipe:css-property
browser-compat: css.properties.min-block-size
translation_of: Web/CSS/min-block-size
---
{{CSSRef}}

**`min-block-size`** は [CSS](/ja/docs/Web/CSS) のプロパティで、書字方向に応じて要素ブロックの水平または垂直方向の最小の寸法を定義します。これは {{cssxref("min-width")}} または {{cssxref("min-height")}} のどちらかのプロパティと、 {{cssxref("writing-mode")}} の値に応じて対応します。

書字方向が垂直方向であった場合、 `min-block-size` の値は要素の最小幅に対応します。そうでなければ、要素の最小の高さに対応します。関連プロパティの {{cssxref("min-inline-size")}} が要素のもう一方の寸法を定義します。

{{EmbedInteractiveExample("pages/css/min-block-size.html")}}

## 構文

```css
/* <length> 値 */
min-block-size: 100px;
min-block-size: 5em;

/* <percentage> 値 */
min-block-size: 10%;

/* キーワード値 */
min-block-size: max-content;
min-block-size: min-content;
min-block-size: fit-content(20em);

/* グローバル値 */
min-block-size: inherit;
min-block-size: initial;
min-block-size: revert;
min-block-size: unset;
```

### 値

`min-block-size` プロパティは {{cssxref("min-width")}} および {{cssxref("min-height")}} の各プロパティと同じ値を取ります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Setting_minimum_block_size_for_vertical_text">縦書きでブロック方向の最小寸法を設定</h3>

#### HTML

```html
<p class="exampleText">Example text</p>
```

#### CSS

```css
.exampleText {
  writing-mode: vertical-rl;
  background-color: yellow;
  min-block-size: 200px;
}
```

#### 結果

{{EmbedLiveSample("Setting_minimum_block_size_for_vertical_text")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 対応付けされる物理的プロパティ: {{cssxref("min-width")}} および {{cssxref("min-height")}}
- {{cssxref("writing-mode")}}
