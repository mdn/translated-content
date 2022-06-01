---
title: counter()
slug: Web/CSS/counter
tags:
  - CSS
  - CSS カウンター
  - CSS 関数
  - 関数
  - リファレンス
translation_of: Web/CSS/counter()
original_slug: Web/CSS/counter()
browser-compat: css.types.counter
---
{{CSSRef}}

**`counter()`** は [CSS](/ja/docs/Web/CSS) の関数で、指定された名前付きカウンターの現在値があれば、その文字列を返します。[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)において用いるのが多いものの、理論的には [`<string>`](/ja/docs/Web/CSS/string) に対応するすべての箇所で用いることができます。

```css
/* 単純な使用法 */
counter(countername);

/* カウンターの表示の変更 */
counter(countername, upper-roman)
```

[カウンター](/ja/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters)自身には視覚的効果が何もありません。 `counter()` 関数 (および {{cssxref("counters()")}} 関数) は開発者が定義した文字列 (または画像) を返すことでカウンターは利用価値が生まれます。

> **Note:** `counter()` 関数は CSS プロパティとも併用できますが、 {{CSSxRef("content")}} 以外のプロパティにおける対応は実験的であり、型または単位の引数への対応は限られています。
>
> [ブラウザーの互換性の表](#ブラウザーの互換性)を注意深く確認してから本番環境に用いてください。

## 構文

### 値

- {{cssxref("&lt;custom-ident&gt;")}}
  - : カウンターを識別する名前であり、{{cssxref("counter-reset")}} および {{cssxref("counter-increment")}} に用いた名前と、大文字小文字まで同一でなければなりません。名前をダッシュ 2 つで始めることはできず、また `none`, `unset`, `initial`, `inherit` という名前は禁止です。
- `<counter-style>`
  - : {{cssxref("&lt;list-style-type&gt;")}} 名、 {{cssxref("&lt;@counter-style&gt;")}} 名、 {{cssxref("symbols()")}} 関数の何れかです。カウンタースタイル名には `numeric`, `alphabetic`, `symbolic` などの単純な定義済みスタイル、より複雑なアジアやエチオピアのカウンタースタイル、その他の[定義済みカウンタースタイル](/ja/docs/Web/CSS/CSS_Counter_Styles)があります。省略された場合は、既定で `decimal` になります。

### 形式文法

{{CSSSyntax}}

## 例

### 既定値と upper-roman との比較

#### HTML

```html
<ol>
  <li></li>
  <li></li>
  <li></li>
</ol>
```

#### CSS

```css
ol {
  counter-reset: listCounter;
}
li {
  counter-increment: listCounter;
}
li::after {
  content: "[" counter(listCounter) "] == ["
               counter(listCounter, upper-roman) "]";
}
```

#### 結果

{{EmbedLiveSample("default_value_compared_to_upper_Roman", "100%", 150)}}

### decimal-leading-zero と lower-alpha との比較

#### HTML

```html
<ol>
  <li></li>
  <li></li>
  <li></li>
</ol>
```

#### CSS

```css
ol {
  counter-reset: count;
}
li {
  counter-increment: count;
}
li::after {
  content: "[" counter(count, decimal-leading-zero) "] == ["
               counter(count, lower-alpha) "]";
}
```

#### 結果

{{EmbedLiveSample("decimal-leading-zero_compared_to_lower-alpha", "100%", 150)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS カウンターの使用](/ja/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters)
- {{cssxref("counter-reset")}}
- {{cssxref("counter-set")}}
- {{cssxref("counter-increment")}}
- {{cssxref("@counter-style")}}
- CSS の [`counters()`](/ja/docs/Web/CSS/counters()) 関数
