---
title: column-rule-color
slug: Web/CSS/Reference/Properties/column-rule-color
original_slug: Web/CSS/column-rule-color
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

**`column-rule-color`** は [CSS](/ja/docs/Web/CSS) のプロパティで、段組みレイアウトで段間に引かれる線（段間罫）の色を設定します。

{{InteractiveExample("CSS デモ: column-rule-color")}}

```css interactive-example-choice
column-rule-color: red;
```

```css interactive-example-choice
column-rule-color: rgb(48, 125, 222);
```

```css interactive-example-choice
column-rule-color: hsla(120, 80%, 40%, 0.6);
```

```css interactive-example-choice
column-rule-color: currentcolor;
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
/* <color> 値 */
column-rule-color: red;
column-rule-color: rgb(192 56 78);
column-rule-color: transparent;
column-rule-color: hsl(0 100% 50% / 60%);

/* グローバル値 */
column-rule-color: inherit;
column-rule-color: initial;
column-rule-color: revert;
column-rule-color: revert-layer;
column-rule-color: unset;
```

`column-rule-color` プロパティは、単一の `<color>` 値で指定します。

### 値

- {{cssxref("&lt;color&gt;")}}
  - : 段を分割する段間罫の色です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 青い段間罫を設定

#### HTML

```html-nolint live-sample___setting_a_blue_column_rule
<p>
  これは 3 つの段組みに分割されたテキストです。 `column-rule-color` プロパティは、段の間に描画される行の色を変更するために使用されます。素晴らしいと思いませんか？
</p>
```

#### CSS

```css live-sample___setting_a_blue_column_rule
p {
  column-count: 3;
  column-rule-style: solid;
  column-rule-color: blue;
}
```

#### 結果

{{EmbedLiveSample("Setting_a_blue_column_rule")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("&lt;color&gt;")}} データ型
- 色に関する他のプロパティ: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}
