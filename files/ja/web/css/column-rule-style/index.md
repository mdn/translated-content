---
title: column-rule-style
slug: Web/CSS/column-rule-style
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

**`column-rule-style`** は [CSS](/ja/docs/Web/CSS) のプロパティで、段組みレイアウトで段の間に引かれる線（段間罫）のスタイルを設定します。

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
column-rule-style: revert-layer;
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

```html-nolint live-sample___setting_a_dashed_column_rule
<p>
  これは 3 つ段に分割されたテキストの束です。 <code>column-rule-style</code> プロパティは、段と段の間に引かれる線のスタイルを変更するために使用されます。すばらしいと思いませんか？
</p>
```

#### CSS

```css live-sample___setting_a_dashed_column_rule
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

- [学習: 段組みレイアウト](/ja/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)（レイアウトの学習）
- {{CSSXref("column-rule")}}
- {{CSSXref("column-rule-width")}}
- {{CSSXref("column-rule-color")}}
