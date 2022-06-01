---
title: column-rule-width
slug: Web/CSS/column-rule-width
tags:
  - CSS
  - CSS 段組みレイアウト
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.column-rule-width
translation_of: Web/CSS/column-rule-width
---
{{ CSSRef}}

**`column-rule-width`** は [CSS](/ja/docs/Web/CSS) のプロパティで、段組みレイアウトで段間に引かれる線（段間罫）の太さを設定します。

{{EmbedInteractiveExample("pages/css/column-rule-width.html")}}

## 構文

```css
/* キーワード値 */
column-rule-width: thin;
column-rule-width: medium;
column-rule-width: thick;

/* <length> 値 */
column-rule-width: 1px;
column-rule-width: 2.5em;

/* グローバル値 */
column-rule-width: inherit;
column-rule-width: initial;
column-rule-width: revert;
column-rule-width: unset;
```

`column-rule-width` プロパティは単一の `<'border-width'>` の値で指定します。

### 値

- `<'border-width'>`
  - : {{ cssxref("border-width") }} で定められたキーワードで段間罫の太さを指定します。 {{cssxref("&lt;length&gt;")}} または `thin`、 `medium`、 `thick` のキーワードのいずれかです。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 太い段間罫を設定

#### HTML

```html
<p>This is a bunch of text split into three columns.
   The `column-rule-width` property is used to change
   the width of the line that is drawn between columns.
   Don't you think that's wonderful?</p>
```

#### CSS

```css
p {
  column-count: 3;
  column-rule-style: solid;
  column-rule-width: thick;
}
```

#### 結果

{{EmbedLiveSample("Setting_a_thick_column_rule")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [段組みレイアウト](/ja/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- {{CSSXref("column-rule-style")}}
- {{CSSXref("column-rule-color")}}
- {{CSSXref("column-rule")}}
