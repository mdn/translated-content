---
title: column-span
slug: Web/CSS/column-span
tags:
  - CSS
  - CSS 段組みレイアウト
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.column-span
translation_of: Web/CSS/column-span
---
{{CSSRef}}

**`column-span`** は [CSS](/ja/docs/Web/CSS) のプロパティで、値に `all` を設定した場合、段組みレイアウトで要素をすべての段にまたがらせることができます。

{{EmbedInteractiveExample("pages/css/column-span.html")}}

```css
/* キーワード値 */
column-span: none;
column-span: all;

/* グローバル値 */
column-span: inherit;
column-span: initial;
column-span: revert;
column-span: unset;
```

複数の段にまたがる要素は**段抜き要素** (spanning element) と呼びます。

## 構文

`column-span` プロパティは以下に挙げたキーワード値のうちの一つで指定します。

### 値

- `none`
  - : この要素は複数の段にまたがりません。
- `all`
  - : この要素がすべての段にまたがります。この要素よりも前に現れた通常フローのコンテンツは、自動的にすべての段で均等になります。この要素は新しいブロック整形コンテキストを生成します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 段抜きの見出しの設定

この例では、見出しが記事のすべての段にまたがって作成されます。

#### HTML

```html
<article>
  <h2>Header spanning all of the columns</h2>
  <p>
     The h2 should span all the columns. The rest
     of the text should be distributed among the columns.
  </p>
  <p>This is a bunch of text split into three columns using the CSS `columns` property. The text is equally distributed over the columns.</p>
  <p>This is a bunch of text split into three columns using the CSS `columns` property. The text is equally distributed over the columns.</p>
  <p>This is a bunch of text split into three columns using the CSS `columns` property. The text is equally distributed over the columns.</p>
  <p>This is a bunch of text split into three columns using the CSS `columns` property. The text is equally distributed over the columns.</p>
</article>
```

#### CSS

```css
article {
  columns: 3;
}

h2 {
  column-span: all;
}
```

#### 結果

{{EmbedLiveSample('Making_a_heading_span_columns', 'auto', 260)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [インライン要素](/ja/docs/Web/HTML/Inline_elements)
- {{domxref("HTMLSpanElement")}}
