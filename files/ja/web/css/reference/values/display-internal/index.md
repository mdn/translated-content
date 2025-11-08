---
title: <display-internal>
slug: Web/CSS/Reference/Values/display-internal
original_slug: Web/CSS/display-internal
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

`table` や `ruby` のような一部のレイアウトモデルでは、複雑な内部構造があり、様々なその子要素や子孫要素が担う様々な役割があります。このページではこれらを「内部の」表示値として定義し、特定のレイアウトモードでのみ意味を持ちます。

## 構文

有効な `<display-internal>` の値は次の通りです。

- `table-row-group`
  - : これらの要素は HTML の {{HTMLElement("tbody")}} 要素のように動作します。
- `table-header-group`
  - : これらの要素は HTML の {{HTMLElement("thead")}} 要素のように動作します。
- `table-footer-group`
  - : これらの要素は HTML の {{HTMLElement("tfoot")}} 要素のように動作します。
- `table-row`
  - : これらの要素は HTML の {{HTMLElement("tr")}} 要素のように動作します。
- `table-cell`
  - : これらの要素は HTML の {{HTMLElement("td")}} 要素のように動作します。
- `table-column-group`
  - : これらの要素は HTML の {{HTMLElement("colgroup")}} 要素のように動作します。
- `table-column`
  - : これらの要素は HTML の {{HTMLElement("col")}} 要素のように動作します。
- `table-caption`
  - : これらの要素は HTML の {{HTMLElement("caption")}} 要素のように動作します。
- `ruby-base`
  - : これらの要素は HTML の {{HTMLElement("rb")}} 要素のように動作します。
- `ruby-text`
  - : これらの要素は HTML の {{HTMLElement("rt")}} 要素のように動作します。
- `ruby-base-container`
  - : これらの要素は無名のボックスとして生成されます。
- `ruby-text-container`
  - : これらの要素は HTML の {{HTMLElement("rtc")}} 要素のように動作します。

## 形式文法

{{csssyntax}}

## 例

### CSS テーブルの例

以下の例は、 CSS テーブルレイアウトを使用したフォームのレイアウトを紹介します。

#### HTML

```html
<main>
  <div>
    <label for="name">Name</label>
    <input type="text" id="name" name="name" />
  </div>
  <div>
    <label for="age">Age</label>
    <input type="text" id="age" name="age" />
  </div>
</main>
```

#### CSS

```css
main {
  display: table;
}

div {
  display: table-row;
}

label,
input {
  display: table-cell;
  margin: 5px;
}
```

#### 結果

{{EmbedLiveSample('CSS_tables_example', '100%', 100)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("display")}}
  - {{CSSxRef("&lt;display-outside&gt;")}}
  - {{CSSxRef("&lt;display-inside&gt;")}}
  - {{CSSxRef("&lt;display-listitem&gt;")}}
  - {{CSSxRef("&lt;display-box&gt;")}}
  - {{CSSxRef("&lt;display-legacy&gt;")}}
