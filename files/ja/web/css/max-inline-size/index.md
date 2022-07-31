---
title: max-inline-size
slug: Web/CSS/max-inline-size
tags:
  - CSS
  - CSS Logical Properties
  - CSS 論理的プロパティ
  - CSS プロパティ
  - Element size
  - Experimental
  - リファレンス
  - Text Direction
  - Writing Mode
  - max-inline-size
  - recipe:css-property
browser-compat: css.properties.max-inline-size
translation_of: Web/CSS/max-inline-size
---
{{CSSRef}}

**`max-inline-size`** は [CSS](/ja/docs/Web/CSS) のプロパティで、書字方向に応じて要素ブロックの水平または垂直方向の最大の寸法を定義します。これは {{cssxref("max-width")}} または {{cssxref("max-height")}} のどちらかのプロパティと、 {{cssxref("writing-mode")}} の値に応じて対応します。

書字方向が垂直方向であった場合、 `max-inline-size` の値は要素の最大の高さに対応します。そうでなければ、要素の最大幅に対応します。関連プロパティとして、 {{cssxref("max-block-size")}} が要素のもう一方の寸法を定義します。

{{EmbedInteractiveExample("pages/css/max-inline-size.html")}}

## 構文

```css
/* <length> 値 */
max-inline-size: 300px;
max-inline-size: 25em;

/* <percentage> 値 */
max-inline-size: 75%;

/* キーワード値 */
max-inline-size: auto;
max-inline-size: max-content;
max-inline-size: min-content;
max-inline-size: fit-content(20em);

/* グローバル値 */
max-inline-size: inherit;
max-inline-size: initial;
max-inline-size: revert;
max-inline-size: unset;
```

### 値

`max-inline-size` プロパティは {{cssxref("max-width")}} および {{cssxref("max-height")}} の各プロパティと同じ値を取ります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Setting_maximum_inline_size_in_pixels">インライン方向の最大寸法をピクセル単位で設定</h3>

#### HTML

```html
<p class="exampleText">Example text</p>
```

#### CSS

```css
.exampleText {
  writing-mode: vertical-rl;
  background-color: yellow;
  block-size: 100%;
  max-inline-size: 200px;
}
```

#### 結果

{{EmbedLiveSample("Setting_maximum_inline_size_in_pixels")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 対応付けされる物理的プロパティ: {{cssxref("max-width")}} および {{cssxref("max-height")}}
- {{cssxref("writing-mode")}}
