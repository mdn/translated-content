---
title: text-emphasis-color
slug: Web/CSS/Reference/Properties/text-emphasis-color
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
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
text-emphasis-color: rgb(90 200 160 / 0.8);
```

```html-nolint interactive-example
<section id="default-example">
  <p>
    いつでも、<span class="transition-all" id="example-element">正しいことより幸せ</span>である方がはるかに良い。
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
text-emphasis-color: currentColor;

/* <color> */
text-emphasis-color: #555555;
text-emphasis-color: blue;
text-emphasis-color: rgb(90 200 160 / 80%);
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
  - : 記号の色を定義します。色が存在しない場合、既定で `currentColor` になります。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 色と固有の文字で強調

#### CSS

```css
em {
  text-emphasis-color: green;
  text-emphasis-style: "*";
}
```

#### HTML

```html
<p>例はこちら:</p>

<em>ここには圏点があります！</em>
```

#### 結果

{{EmbedLiveSample("色と固有の文字で強調", 450, 100)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("&lt;color&gt;")}} データ型
- 他の強調記号に関するプロパティ: {{cssxref('text-emphasis-style')}}, {{cssxref('text-emphasis')}}, {{cssxref("text-emphasis-position")}}.
- 色に関する他のプロパティ: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}
