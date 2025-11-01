---
title: column-rule-width
slug: Web/CSS/Reference/Properties/column-rule-width
original_slug: Web/CSS/column-rule-width
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

**`column-rule-width`** は [CSS](/ja/docs/Web/CSS) のプロパティで、段組みレイアウトで段間に引かれる線（段間罫）の太さを設定します。

{{InteractiveExample("CSS デモ: column-rule-width")}}

```css interactive-example-choice
column-rule-width: thin;
```

```css interactive-example-choice
column-rule-width: medium;
```

```css interactive-example-choice
column-rule-width: thick;
```

```css interactive-example-choice
column-rule-width: 12px;
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
  columns: 3;
  column-rule: solid;
  text-align: left;
}
```

## 構文

```css
/* キーワード値 */
column-rule-width: thin;
column-rule-width: medium;
column-rule-width: thick;

/* <length> 値 */
column-rule-width: 1px;
column-rule-width: 2.5em;

/* グローバル値 */
column-rule-width: inherit;
column-rule-width: initial;
column-rule-width: revert;
column-rule-width: revert-layer;
column-rule-width: unset;
```

`column-rule-width` プロパティは単一の `<'border-width'>` の値で指定します。

### 値

- `<'border-width'>`
  - : {{ cssxref("border-width") }} で定められたキーワードで段間罫の太さを指定します。 {{cssxref("&lt;length&gt;")}} または `thin`、`medium`、`thick` のキーワードのいずれかです。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 太い段間罫を設定

#### HTML

```html-nolint live-sample___setting_a_thick_column_rule
<p>
  これは 3 段に分割されたテキストの束です。 `column-rule-width`プロパティは、段と段の間に引かれる線の太さを変更するために使用されます。すばらしいと思いませんか？
</p>
```

#### CSS

```css live-sample___setting_a_thick_column_rule
p {
  column-count: 3;
  column-rule-style: solid;
  column-rule-width: thick;
}
```

#### 結果

{{EmbedLiveSample("Setting_a_thick_column_rule")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [学習: 段組みレイアウト](/ja/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- {{CSSXref("column-rule-style")}}
- {{CSSXref("column-rule-color")}}
- {{CSSXref("column-rule")}}
