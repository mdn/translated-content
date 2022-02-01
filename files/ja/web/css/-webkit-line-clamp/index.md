---
title: '-webkit-line-clamp'
slug: Web/CSS/-webkit-line-clamp
tags:
  - '-webkit-line-clamp'
  - CSS
  - CSS プロパティ
  - 標準外
  - recipe:css-property
browser-compat: css.properties.-webkit-line-clamp
translation_of: Web/CSS/-webkit-line-clamp
---
{{CSSRef}}

**`-webkit-line-clamp`** は CSS のプロパティで、{{Glossary("block container", "ブロックコンテナー")}}の内容を指定した行数に制限することができます。

{{cssxref("display")}} プロパティに `-webkit-box` もしくは `-webkit-inline-box` が設定されており、かつ {{cssxref("box-orient")}} プロパティに `vertical` が設定されている組み合わせのときのみ使用できます。

ほとんどの場合、 {{cssxref("overflow")}} に `hidden` を設定できます。そうしなければ内容は切り取られませんが、省略記号は指定した行数の後に表示されます。

アンカー要素に適用すると、切り捨てがテキストの途中で行われる場合があるかもしれませんが、必ずしも末尾で切り捨てが行われるとは限りません。

> **Note:** このプロパティは元々 WebKit ブラウザーで実装されていたものですが、いくつかの問題があります。レガシーサポートのために標準化されました。 [CSS Overflow Module Level 3](https://www.w3.org/TR/css-overflow-3/#propdef--webkit-line-clamp) の仕様では、このプロパティを置き換えて問題を回避することを目的として {{cssxref("line-clamp")}} プロパティが定義されています。

## 構文

```css
/* キーワード値 */
-webkit-line-clamp: none;

/* <integer> 値 */
-webkit-line-clamp: 3;
-webkit-line-clamp: 10;

/* グローバル値 */
-webkit-line-clamp: inherit;
-webkit-line-clamp: initial;
-webkit-line-clamp: unset;
```

- `none`
  - : コンテンツの行数を制限しません。
- {{cssxref("integer")}}
  - : コンテンツを制限する行数を指定します。 0 より大きい値でなければなりません。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 例

### 段落の切り捨て

#### HTML

```html
<p>
  In this example the <code>-webkit-line-clamp</code> property is set to <code>3</code>, which means the text is clamped after three lines.
  An ellipsis will be shown at the point where the text is clamped.
</p>
```

#### CSS

```css
p {
  width: 300px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
```

#### 結果

{{EmbedLiveSample("Truncating_a_paragraph", "100%", "100")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Line Clampin’ (Truncating Multiple Line Text)](https://css-tricks.com/line-clampin/)
- {{cssxref("line-clamp")}}
