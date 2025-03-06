---
title: column-rule-width
slug: Web/CSS/column-rule-width
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

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
column-rule-width: revert-layer;
column-rule-width: unset;
```

`column-rule-width` プロパティは単一の `<'border-width'>` の値で指定します。

### 値

- `<'border-width'>`
  - : {{ cssxref("border-width") }} で定められたキーワードで段間罫の太さを指定します。 {{cssxref("&lt;length&gt;")}} または `thin`、`medium`、`thick` のキーワードのいずれかです。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 太い段間罫を設定

#### HTML

```html-nolint live-sample___setting_a_thick_column_rule
<p>
  これは 3 つ段に分割されたテキストの束です。 <code>column-rule-style</code> プロパティは、段と段の間に引かれる線の太さを変更するために使用されます。すばらしいと思いませんか？
</p>
```

#### CSS

```css live-sample___setting_a_thick_column_rule
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

- [学習: 段組みレイアウト](/ja/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- {{CSSXref("column-rule-style")}}
- {{CSSXref("column-rule-color")}}
- {{CSSXref("column-rule")}}
