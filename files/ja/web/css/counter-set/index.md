---
title: counter-set
slug: Web/CSS/counter-set
tags:
  - CSS
  - CSS カウンター
  - CSS リスト
  - CSS プロパティ
  - recipe:css-property
browser-compat: css.properties.counter-set
translation_of: Web/CSS/counter-set
---
{{CSSRef}}

**`counter-set`** は [CSS](/ja/docs/Web/CSS) のプロパティで、[CSS カウンター](/ja/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters)を指定された値に設定します。これは既存のカウンターの値を操作し、その要素に指定された名前のカウンターがまだ存在しない場合は新しいカウンターを生成します。

> **Note:** カウンターの値は {{cssxref("counter-increment")}} プロパティを使用して増減させることができます。

## 構文

```css
/* "my-counter" を 0 に設定 */
counter-set: my-counter;

/* "my-counter" を -1 に設定 */
counter-set: my-counter -1;

/* "counter1" を 1 に、 "counter2" を 4 に設定 */
counter-set: counter1 1 counter2 4;

/* より詳細度が低いルールで設定されたカウンターをすべて消去 */
counter-set: none;

/* グローバル値 */
counter-set: inherit;
counter-set: initial;
counter-set: revert;
counter-set: unset;
```

`counter-set` プロパティは、以下のうちの何れかで指定します。

- カウンターの名前を指定する `<custom-ident>` と、それに続く任意の `<integer>`。カウンターはいくつでも指定することができ、それぞれの名前や名前と数値の組は空白で区切ります。
- キーワード値 `none`。

### 値

- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : 設定するカウンターの名前です。
- {{cssxref("&lt;integer&gt;")}}
  - : この要素が現れるたびにカウンターに設定する値です。指定されなかった場合の既定値は `0` です。現在、この要素に指定された名前のカウンターが存在しない場合、この要素は指定された名前の新しいカウンターを、開始値 0 で指定します（ただし、その後で直ちに異なる値に設定されたり増加したりする可能性があります）。
- `none`
  - : カウンターの設定は行われません。これはより詳細度の低い規則によって定義された `counter-set` を上書きするために使用することができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 名前付きカウンターの設定

```css
h1 {
  counter-set: chapter section 1 page;
  /* chapter および page のカウンターを 0 に、
     section カウンターを 1 に設定 */
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS カウンターの使用](/ja/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters)
- {{cssxref("counter-increment")}}
- {{cssxref("counter-reset")}}
- {{cssxref("@counter-style")}}
- {{cssxref("counter()")}} および {{cssxref("counters()")}} 関数
- {{cssxref("content")}} プロパティ
