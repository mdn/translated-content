---
title: column-rule
slug: Web/CSS/column-rule
tags:
  - CSS
  - CSS 段組みレイアウト
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.column-rule
translation_of: Web/CSS/column-rule
---
{{CSSRef}}

**`column-rule`** は[一括指定](/ja/docs/Web/CSS/Shorthand_properties)を行う [CSS](/ja/docs/Web/CSS) のプロパティで、段組みレイアウトで段間に引かれる線（段間罫）の太さ、スタイル、色を設定します。

{{EmbedInteractiveExample("pages/css/column-rule.html")}}

これは[一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)であり、一回の便利な宣言で個別の `column-rule-*` プロパティ ({{Cssxref("column-rule-width")}}, {{Cssxref("column-rule-style")}}, {{Cssxref("column-rule-color")}}) を設定できます。

> **Note:** 他の一括指定プロパティと同様に、指定されなかった個別の値は初期値が設定されます (以前に個別指定プロパティを使用して設定された値を上書きする可能性があります)。

## 構文

```css
column-rule: dotted;
column-rule: solid 8px;
column-rule: solid blue;
column-rule: thick inset blue;

/* グローバル値 */
column-rule: inherit;
column-rule: initial;
column-rule: revert;
column-rule: unset;
```

`column-rule` プロパティは、以下に挙げる値のうち 1 ～ 3 個を任意の順序で指定します。

<h3 id="Values">値</h3>

- `<'column-rule-width'>`
  - : {{cssxref("&lt;length&gt;")}} または 3 つのキーワード、 `thin`、`medium`、`thick` のうちの 1 つです。詳しくは {{cssxref("border-width")}} を参照してください。
- `<'column-rule-style'>`
  - : 有効な値と詳細は {{cssxref("border-style")}} を参照してください。
- `<'column-rule-color'>`
  - : {{cssxref("&lt;color&gt;")}} 値です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 例 1

```css
/* "medium dotted currentcolor" と同じ */
p.foo { column-rule: dotted; }

/* "medium solid blue" と同じ */
p.bar { column-rule: solid blue; }

/* "8px solid currentcolor" と同じ */
p.baz { column-rule: solid 8px; }

p.abc { column-rule: thick inset blue; }
```

### 例 2

#### HTML

```html
<p class="content-box">
  This is a bunch of text split into three columns.
  Take note of how the `column-rule` property is used
  to adjust the style, width, and color of the rule
  that appears between the columns.
</p>
```

#### CSS

```css
.content-box {
  padding: 0.3em;
  background: #ff7;
  column-count: 3;
  column-rule: inset 2px #33f;
}
```

#### 結果

{{EmbedLiveSample('Example_2')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [段組みレイアウト](/ja/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- {{CSSXref("column-rule-style")}}
- {{CSSXref("column-rule-width")}}
- {{CSSXref("column-rule-color")}}
