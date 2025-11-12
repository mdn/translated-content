---
title: text-emphasis-color
slug: Web/CSS/Reference/Properties/text-emphasis-color
original_slug: Web/CSS/text-emphasis-color
l10n:
  sourceCommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

**`text-emphasis-color`** は [CSS](/ja/docs/Web/CSS) のプロパティで、圏点の色を設定します。この値は一括指定の {{cssxref("text-emphasis")}} を使用して設定することもできます。

{{InteractiveExample("CSS デモ: text-emphasis-color")}}

```css interactive-example-choice
text-emphasis-color: currentColor;
```

```css interactive-example-choice
text-emphasis-color: red;
```

```css interactive-example-choice
text-emphasis-color: rgba(90, 200, 160, 0.8);
```

```html interactive-example
<section id="default-example">
  <p>
    I'd far rather be
    <span class="transition-all" id="example-element">happy than right</span>
    any day.
  </p>
</section>
```

```css interactive-example
p {
  font: 1.5em sans-serif;
}

#example-element {
  text-emphasis: filled;
}
```

## 構文

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
text-emphasis-color: revert-layer;
text-emphasis-color: unset;
```

### 値

- `<color>`
  - : 記号の色を定義します。 color が存在しない場合、既定で `currentcolor` になります。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 色と固有の文字で強調

#### CSS

```css live-sample___emphasis_with_a_color_and_custom_character
em {
  text-emphasis-color: green;
  text-emphasis-style: "*";
}
```

#### HTML

```html live-sample___emphasis_with_a_color_and_custom_character
<p>例:</p>

<em>これには圏点があります！</em>
```

#### 結果

{{EmbedLiveSample("Emphasis_with_a_color_and_custom_character", 450, 100)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("&lt;color&gt;")}} データ型
- 他の強調記号に関するプロパティ: {{cssxref('text-emphasis-style')}}, {{cssxref('text-emphasis')}}, {{cssxref("text-emphasis-position")}}.
- 色に関する他のプロパティ: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}
- [CSS を使用した HTML 要素への色の適用](/ja/docs/Web/CSS/Guides/Colors/Applying_color)
