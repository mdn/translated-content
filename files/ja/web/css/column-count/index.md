---
title: column-count
slug: Web/CSS/column-count
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

**`column-count`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素のコンテンツを指定された段数の段組みに分割します。

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
column-count: revert-layer;
column-count: unset;
```

### 値

- `auto`
  - : 段組みの段数は {{cssxref("column-width")}} など、他の CSS プロパティによって決定されます。
- {{cssxref("&lt;integer&gt;")}}
  - : 正の{{cssxref("&lt;integer&gt;", "整数")}}のみで、要素の中で流れる理想的な段の数を記述します。 {{cssxref("column-width")}} が `auto` 以外の値で一緒に設定された場合は、最大の段数を示します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 段落を 3 つの段に分割

#### HTML

```html-nolint live-sample___splitting_a_paragraph_across_three_columns
<p class="content-box">
  これは、 CSS の <code>column-count</code> プロパティを使用して 3 つの段に分割されたテキストの束です。テキストはそれぞれの段に均等に配置されています。
</p>
```

#### CSS

```css live-sample___splitting_a_paragraph_across_three_columns
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

- {{CSSXref("column-width")}}, {{CSSXref("columns")}} 一括指定
- {{CSSXref("column-rule-color")}}, {{CSSXref("column-rule-style")}}, {{CSSXref("column-rule-width")}}, {{CSSXref("column-rule")}} 一括指定

- [学習: 段組みレイアウト](/ja/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)（レイアウトの学習）
- [段組みの基本概念](/ja/docs/Web/CSS/CSS_multicol_layout/Basic_concepts)
