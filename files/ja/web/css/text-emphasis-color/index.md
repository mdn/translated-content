---
title: text-emphasis-color
slug: Web/CSS/text-emphasis-color
tags:
  - CSS
  - CSS プロパティ
  - CSS スタイル
  - CSS テキスト装飾
  - HTML 色
  - Reference
  - HTML のスタイル付け
  - テキストの強調
  - recipe:css-property
  - text-decoration-color
browser-compat: css.properties.text-emphasis-color
translation_of: Web/CSS/text-emphasis-color
---
{{CSSRef}}

**`text-emphasis-color`** は [CSS](/ja/docs/Web/CSS) のプロパティで、圏点の色を設定します。この値は一括指定の {{cssxref("text-emphasis")}} を使用して設定することもできます。

```css
/* 初期値 */
text-emphasis-color: currentcolor;

/* <color> */
text-emphasis-color: #555;
text-emphasis-color: blue;
text-emphasis-color: rgba(90, 200, 160, 0.8);
text-emphasis-color: transparent;

/* グローバル値 */
text-emphasis-color: inherit;
text-emphasis-color: initial;
text-emphasis-color: revert;
text-emphasis-color: unset;
```

## 構文

### 値

- `<color>`
  - : 記号の色を定義します。 color が存在しない場合、既定で `currentcolor` になります。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## Examples

<h3 id="Emphasis_with_a_color_and_custom_character">色と固有の文字で強調</h3>

#### CSS

```css
em {
  -webkit-text-emphasis-color: green;
  text-emphasis-color: green;
  -webkit-text-emphasis-style: "*";
  text-emphasis-style: "*";
}
```

#### HTML

```html
<p>例:</p>

<em>これには圏点があります！</em>
```

#### Result

{{EmbedLiveSample("Emphasis_with_a_color_and_custom_character", 450, 100)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("&lt;color&gt;")}} データ型
- 他の強調記号に関するプロパティ: {{cssxref('text-emphasis-style')}}, {{cssxref('text-emphasis')}}, {{cssxref("text-emphasis-position")}}.
- 色に関する他のプロパティ: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}
- [CSS を使用した HTML 要素への色の適用](/ja/docs/Web/HTML/Applying_color)
