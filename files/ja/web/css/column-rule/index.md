---
title: column-rule
slug: Web/CSS/column-rule
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

**`column-rule`** は[一括指定](/ja/docs/Web/CSS/Shorthand_properties)を行う [CSS](/ja/docs/Web/CSS) のプロパティで、段組みレイアウトで段間に引かれる線（段間罫）の太さ、スタイル、色を設定します。

{{EmbedInteractiveExample("pages/css/column-rule.html")}}

## 構成要素のプロパティ

このプロパティは、以下の CSS プロパティの一括指定です。

- {{Cssxref("column-rule-color")}}
- {{Cssxref("column-rule-style")}}
- {{Cssxref("column-rule-width")}}

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
column-rule: revert-layer;
column-rule: unset;
```

### 値

`column-rule` プロパティは、以下に挙げる値のうち 1 ～ 3 個を任意の順序で指定します。

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
p.foo {
  column-rule: dotted;
}

/* "medium solid blue" と同じ */
p.bar {
  column-rule: solid blue;
}

/* "8px solid currentcolor" と同じ */
p.baz {
  column-rule: solid 8px;
}

p.abc {
  column-rule: thick inset blue;
}
```

### 例 2

#### HTML

```html-nolint
<p class="content-box">
  これは 3 つ段に分割されたテキストの束です。 <code>column-rule</code> プロパティは、段と段の間に引かれる線のスタイル、太さ、色を変更するために使用されます。すばらしいと思いませんか？
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

- [学習: 段組みレイアウト](/ja/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- {{CSSXref("column-rule-style")}}
- {{CSSXref("column-rule-width")}}
- {{CSSXref("column-rule-color")}}
