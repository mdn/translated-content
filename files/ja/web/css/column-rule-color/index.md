---
title: column-rule-color
slug: Web/CSS/column-rule-color
---

{{CSSRef}}

**`column-rule-color`** は [CSS](/ja/docs/Web/CSS) のプロパティで、段組みレイアウトで段間に引かれる線（段間罫）の色を設定します。

{{EmbedInteractiveExample("pages/css/column-rule-color.html")}}

## 構文

```css
/* <color> 値 */
column-rule-color: red;
column-rule-color: rgb(192, 56, 78);
column-rule-color: transparent;
column-rule-color: hsla(0, 100%, 50%, 0.6);

/* グローバル値 */
column-rule-color: inherit;
column-rule-color: initial;
column-rule-color: revert;
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

```html
<p>
  This is a bunch of text split into three columns. The `column-rule-color`
  property is used to change the color of the line that is drawn between
  columns. Don't you think that's wonderful?
</p>
```

#### CSS

```css
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
- [CSS を使った HTML の要素への色の適用](/ja/docs/Web/HTML/Applying_color)
