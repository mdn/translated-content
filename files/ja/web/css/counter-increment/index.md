---
title: counter-increment
slug: Web/CSS/counter-increment
tags:
  - CSS
  - CSS カウンター
  - CSS リスト
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.counter-increment
translation_of: Web/CSS/counter-increment
---
{{CSSRef}}

**`counter-increment`** は [CSS](/ja/docs/Web/CSS) のプロパティで、指定された値によって [CSS カウンター](/ja/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters)の値を増加または減少させるためのプロパティです。

{{EmbedInteractiveExample("pages/css/counter-increment.html")}}

> **Note:** カウンターの値は CSS の {{cssxref("counter-reset")}} プロパティを使用して任意の値にリセットすることができます。

## 構文

```css
/* "my-counter" を 1 増加 */
counter-increment: my-counter;

/* "my-counter" を 1 減少 */
counter-increment: my-counter -1;

/* "counter1" を 1 増加、 "counter2" を 4 減少 */
counter-increment: counter1 counter2 -4;

/* 増加または減少させない。より詳細度が低い規則を上書きするために使用 */
counter-increment: none;

/* グローバル値 */
counter-increment: inherit;
counter-increment: initial;
counter-increment: revert;
counter-increment: unset;
```

`counter-increment` プロパティは、以下の何れかで指定します。

- カウンターの名前を指定する `<custom-ident>` と、その後に任意で `<integer>`。カウンターはいくつでも指定することができ、それぞれの名前や名前と数値の組は空白で区切ります。
- キーワード値 `none`。

### 値

- {{cssxref("&lt;custom-ident&gt;")}}
  - : 増加の対象となる、カウンターの名前です。
- {{cssxref("&lt;integer&gt;")}}
  - : カウンタに加える値です。指定されない場合は既定値の `1` になります。
- `none`
  - : カウンターは増加しません。これは既定値として使用されたり、より詳細度の高いルールで増加を取り消したりするために使用されたりします。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 名前付きカウンターの増加

```css
h1 {
  counter-increment: chapter section 2 page;
  /* chapter と page カウンターの値を 1、
    section カウンターの値を 2 増加させます。 */
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS カウンターの使用](/ja/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters)
- {{cssxref("counter-reset")}}
- {{cssxref("counter-set")}}
- {{cssxref("@counter-style")}}
- {{cssxref("counter()")}} および {{cssxref("counters()")}} 関数
