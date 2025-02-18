---
title: columns
slug: Web/CSS/columns
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

**`columns`** は [CSS](/ja/docs/Web/CSS) 一括指定プロパティで、要素の内容物を描画する際に使用する段数や段の幅を設定します。

{{EmbedInteractiveExample("pages/css/columns.html")}}

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`column-count`](/ja/docs/Web/CSS/column-count)
- [`column-width`](/ja/docs/Web/CSS/column-width)

## 構文

```css
/* 段の幅 */
columns: 18em;

/* 段数 */
columns: auto;
columns: 2;

/* 段の幅と段数の両方 */
columns: 2 auto;
columns: auto 12em;
columns: auto auto;

/* グローバル値 */
columns: inherit;
columns: initial;
columns: revert;
columns: revert-layer;
columns: unset;
```

`columns` プロパティは以下に挙げる値を 1 つまたは 2 つで、順不同で指定します。

### 値

- `<'column-width'>`
  - : 理想的な段の幅であり、 {{cssxref("&lt;length&gt;")}} または `auto` キーワードで定義されます。実際の段の幅は、実際の空間に合わせて広くなったり狭くなったりします。 {{cssxref("column-width")}} を参照してください。
- `<'column-count'>`
  - : 要素の内容物が流れる理想的な段の数であり、 {{cssxref("&lt;integer&gt;")}} または `auto` キーワードで定義します。この値と段の幅の両方が `auto` でない場合は、最大の段数を示します。 {{cssxref("column-count")}} を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 3 つの等しい段の設定

#### HTML

```html-nolint live-sample___setting_three_equal_columns
<p class="content-box">
  これは、 CSS の `columns` プロパティを使用して 3 つの列に分割されたテキストの束です。テキストは各カラムに均等に配置されている。
</p>
```

#### CSS

```css live-sample___setting_three_equal_columns
.content-box {
  columns: 3 auto;
}
```

#### 結果

{{EmbedLiveSample('Setting_three_equal_columns', 'auto', 120)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("widows")}}
- {{cssxref("orphans")}}
- [ページ化メディア](/ja/docs/Web/CSS/CSS_paged_media)
- [学習: 段組みレイアウト](/ja/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
