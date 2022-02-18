---
title: inline-size
slug: Web/CSS/inline-size
tags:
  - CSS
  - CSS 論理的プロパティ
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.inline-size
translation_of: Web/CSS/inline-size
---
{{CSSRef}}

**`inline-size`** は [CSS](/ja/docs/Web/CSS) のプロパティで、書字方向に応じた要素ブロックの水平または垂直方向の寸法を定義します。これは {{cssxref("width")}} または {{cssxref("height")}} プロパティに相当し、 {{cssxref("writing-mode")}} の値によって変わります。

書字方向が垂直方向であった場合、 `inline-size` の値は要素の高さに対応し、水平方向であった場合は要素の幅に対応します。関連プロパティの {{cssxref("block-size")}} が要素のもう一方の寸法を定義します。

{{EmbedInteractiveExample("pages/css/inline-size.html")}}

## 構文

```css
/* <length> 値 */
inline-size: 300px;
inline-size: 25em;

/* <percentage> 値 */
inline-size: 75%;

/* キーワード値 */
inline-size: max-content;
inline-size: min-content;
inline-size: fit-content(20em);
inline-size: auto;

/* グローバル値 */
inline-size: inherit;
inline-size: initial;
inline-size: revert;
inline-size: unset;
```

### 値

`inline-size` プロパティは、{{cssxref("width")}} や {{cssxref("height")}} プロパティと同じ値を取ります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Setting_inline_size_in_pixels">インライン方向の寸法をピクセル単位で設定</h3>

#### HTML

```html
<p class="exampleText">Example text</p>
```

#### CSS

```css
.exampleText {
  writing-mode: vertical-rl;
  background-color: yellow;
  inline-size: 110px;
}
```

#### 結果

{{EmbedLiveSample("Setting_inline_size_in_pixels")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 対応付けされる物理的プロパティ: {{cssxref("width")}} および {{cssxref("height")}}
- {{cssxref("writing-mode")}}
