---
title: column-count
slug: Web/CSS/Reference/Properties/column-count
original_slug: Web/CSS/column-count
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

**`column-count`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素のコンテンツを指定された段数の段組みに分割します。

{{InteractiveExample("CSS デモ: column-count")}}

```css interactive-example-choice
column-count: 2;
```

```css interactive-example-choice
column-count: 3;
```

```css interactive-example-choice
column-count: 4;
```

```css interactive-example-choice
column-count: auto;
column-width: 8rem;
```

```html-nolint interactive-example
<section id="default-example">
  <p id="example-element">
    ロンドン。ミカエル学期の終わり、リンカーンズ・イン・ホールに大法官が座っています。容赦のない 11 月の天候。街は、まるで地球から水が引き始めたばかりのように泥だらけで、ホルボーン・ヒルを象のようなトカゲのようによちよち歩く、体長 12 メートルほどのメガロサウルスに出会っても不思議ではないでしょう。
  </p>
</section>
```

```css interactive-example
#example-element {
  width: 100%;
  text-align: left;
}
```

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
  これは、 CSS の <code>column-count</code> プロパティを使用して 3 段に分割されたテキストの束です。テキストはそれぞれの段に均等に配置されています。
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
- [段組みの基本概念](/ja/docs/Web/CSS/Guides/Multicol_layout/Basic_concepts)
