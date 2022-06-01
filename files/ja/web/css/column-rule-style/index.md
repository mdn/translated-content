---
title: column-rule-style
slug: Web/CSS/column-rule-style
tags:
  - CSS
  - CSS 段組みレイアウト
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.column-rule-style
translation_of: Web/CSS/column-rule-style
---
{{ CSSRef}}

**`column-rule-style`** は [CSS](/ja/docs/Web/CSS) のプロパティで、段組みレイアウトで段の間に引かれる線 (段間罫) のスタイルを設定します。

{{EmbedInteractiveExample("pages/css/column-rule-style.html")}}

## 構文

```css
/* <'border-style'> の値 */
column-rule-style: none;
column-rule-style: hidden;
column-rule-style: dotted;
column-rule-style: dashed;
column-rule-style: solid;
column-rule-style: double;
column-rule-style: groove;
column-rule-style: ridge;
column-rule-style: inset;
column-rule-style: outset;

/* グローバル値 */
column-rule-style: inherit;
column-rule-style: initial;
column-rule-style: revert;
column-rule-style: unset;
```

`column-rule-style` プロパティは、単一の `<'border-style'>` 値で指定します。

### 値

- `<'border-style'>`
  - : {{ cssxref("border-style") }} で定義されているキーワードで、段間罫のスタイルを指定します。スタイルは collasped の境界線モデルで解釈されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 破線の段間罫を設定

#### HTML

```html
<p>This is a bunch of text split into three columns.
   The `column-rule-style` property is used to change
   the style of the line that is drawn between columns.
   Don't you think that's wonderful?</p>
```

#### CSS

```css
p {
  column-count: 3;
  column-rule-style: dashed;
}
```

#### 結果

{{ EmbedLiveSample('Setting_a_dashed_column_rule') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [段組みレイアウト](/ja/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- {{CSSXref("column-rule")}}
- {{CSSXref("column-rule-width")}}
- {{CSSXref("column-rule-color")}}
