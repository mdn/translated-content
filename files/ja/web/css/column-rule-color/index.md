---
title: column-rule-color
slug: Web/CSS/column-rule-color
l10n:
  sourceCommit: 5f13cbe7517ce96deeb521d4c8e6923266a22913
---

{{CSSRef}}

**`column-rule-color`** は [CSS](/ja/docs/Web/CSS) のプロパティで、段組みレイアウトで段間に引かれる線（段間罫）の色を設定します。

{{InteractiveExample("CSS Demo: column-rule-color")}}

```css interactive-example-choice
column-rule-color: red;
```

```css interactive-example-choice
column-rule-color: rgb(48, 125, 222);
```

```css interactive-example-choice
column-rule-color: hsla(120, 80%, 40%, 0.6);
```

```css interactive-example-choice
column-rule-color: currentcolor;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    London. Michaelmas term lately over, and the Lord Chancellor sitting in
    Lincoln's Inn Hall. Implacable November weather. As much mud in the streets
    as if the waters had but newly retired from the face of the earth, and it
    would not be wonderful to meet a Megalosaurus, forty feet long or so,
    waddling like an elephantine lizard up Holborn Hill.
  </p>
</section>
```

```css interactive-example
#example-element {
  columns: 3;
  column-rule: solid;
  text-align: left;
}
```

## 構文

```css
/* <color> 値 */
column-rule-color: red;
column-rule-color: rgb(192 56 78);
column-rule-color: transparent;
column-rule-color: hsl(0 100% 50% / 60%);

/* グローバル値 */
column-rule-color: inherit;
column-rule-color: initial;
column-rule-color: revert;
column-rule-color: revert-layer;
column-rule-color: unset;
```

`column-rule-color` プロパティは、単一の `<color>` 値で指定します。

### 値

- {{cssxref("&lt;color&gt;")}}
  - : 段を分割する段間罫の色です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 青い段間罫を設定

#### HTML

```html live-sample___setting_a_blue_column_rule
<p>
  This is a bunch of text split into three columns. The `column-rule-color`
  property is used to change the color of the line that is drawn between
  columns. Don't you think that's wonderful?
</p>
```

#### CSS

```css live-sample___setting_a_blue_column_rule
p {
  column-count: 3;
  column-rule-style: solid;
  column-rule-color: blue;
}
```

#### 結果

{{EmbedLiveSample("Setting_a_blue_column_rule")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("&lt;color&gt;")}} データ型
- 色に関する他のプロパティ: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}
