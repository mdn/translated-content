---
title: column-count
slug: Web/CSS/column-count
tags:
  - CSS
  - CSS 段組みレイアウト
  - CSS プロパティ
  - レイアウト
  - リファレンス
  - column-count
  - columns
  - recipe:css-property
browser-compat: css.properties.column-count
translation_of: Web/CSS/column-count
---
{{CSSRef}}

**`column-count`** は [CSS](/ja/docs/Web/CSS) のプロパティで、指定された段数で要素の内容物を分割します。

{{EmbedInteractiveExample("pages/css/column-count.html")}}

## 構文

```css
/* キーワード値 */
column-count: auto;

/* <integer> 値 */
column-count: 3;

/* グローバル値 */
column-count: inherit;
column-count: initial;
column-count: revert;
column-count: unset;
```

### 値

- `auto`
  - : 段数は {{cssxref("column-width")}} など、他の CSS プロパティによって決定されます。
- {{cssxref("&lt;integer&gt;")}}
  - : 正の{{cssxref("&lt;integer&gt;", "整数")}}のみで、要素の中で流れる理想的な列の数を記述します。 {{cssxref("column-width")}} が `auto` 以外の値で一緒に設定された場合は、最大の列数を示します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 段落を 3 つの段に分割

#### HTML

```html
<p class="content-box">
  これは、 3 つの段に分割されたテキストの束です。
  CSS の `column-count` プロパティを使用しています。
  テキストはそれぞれの段に均等に配置されています。
</p>
```

#### CSS

```css
.content-box {
  column-count: 3;
}
```

#### 結果

{{EmbedLiveSample('Splitting_a_paragraph_across_three_columns', 'auto', 120)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [段組みレイアウト](/ja/docs/Learn/CSS/CSS_layout/Multiple-column_Layout) (レイアウトの学習)
- [段組みの基本概念](/ja/docs/Web/CSS/CSS_Columns/Basic_Concepts_of_Multicol)
