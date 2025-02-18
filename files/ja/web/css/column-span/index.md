---
title: column-span
slug: Web/CSS/column-span
l10n:
  sourceCommit: c77cfcd17e85db6c1b93160c70668f2ff6c2809c
---

{{CSSRef}}

**`column-span`** は [CSS](/ja/docs/Web/CSS) のプロパティで、値に `all` を設定した場合、段組みレイアウトで要素をすべての段にまたがらせることができます。

{{EmbedInteractiveExample("pages/css/column-span.html")}}

複数の段にまたがる要素は**段抜き要素** (spanning element) と呼びます。

## 構文

```css
/* キーワード値 */
column-span: none;
column-span: all;

/* グローバル値 */
column-span: inherit;
column-span: initial;
column-span: revert;
column-span: revert-layer;
column-span: unset;
```

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

```html-nolint live-sample___making_a_heading_span_columns
<article>
  <h2>すべての段にまたがる見出し</h2>
  <p>
    h2 はすべての段にまたがるようにします。残りのテキストはそれぞれの段に分散させます。
  </p>
  <p>
    これは、 CSS の `columns` プロパティを使用して 3 つの段に分割されたテキストの束です。テキストはそれぞれの段に均等に配置されています。
  </p>
  <p>
    これは、 CSS の `columns` プロパティを使用して 3 つの段に分割されたテキストの束です。テキストはそれぞれの段に均等に配置されています。
  </p>
  <p>
    これは、 CSS の `columns` プロパティを使用して 3 つの段に分割されたテキストの束です。テキストはそれぞれの段に均等に配置されています。
  </p>
  <p>
    これは、 CSS の `columns` プロパティを使用して 3 つの段に分割されたテキストの束です。テキストはそれぞれの段に均等に配置されています。
  </p>
</article>
```

#### CSS

```css live-sample___making_a_heading_span_columns
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

- [段抜きと段の均衡](/ja/docs/Web/CSS/CSS_multicol_layout/Spanning_balancing_columns)
- [インラインレベル要素](/ja/docs/Glossary/Inline-level_content)
- {{domxref("HTMLSpanElement")}}
