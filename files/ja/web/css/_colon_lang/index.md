---
title: ':lang()'
slug: Web/CSS/:lang
tags:
  - CSS
  - レイアウト
  - 擬似クラス
  - リファレンス
  - セレクター
  - ウェブ
browser-compat: css.selectors.lang
translation_of: Web/CSS/:lang
---
{{CSSRef}}

**`:lang()`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、指定された言語に基づいて要素に一致します。

```css
/* <p> のうち English (en) のものをすべて選択 */
p:lang(en) {
  quotes: '\201C' '\201D' '\2018' '\2019';
}
```

> **Note:** HTML では、言語は {{htmlattrxref("lang")}} 属性と {{HTMLElement("meta")}} 要素、それに、可能であればプロトコルから得られる情報 (HTTP ヘッダーなど) の組み合わせで決められます。他の文書型では、文書の言語を決定する他の方法があるかもしれません。

## 構文

### 形式文法

{{csssyntax}}

### 引数

- `<language-code>`
  - : {{cssxref("&lt;string&gt;")}} で、ターゲットにしたい言語を表します。受付可能な値は [HTML](/ja/docs/Web/HTML) 仕様書で定義されています。

## 例

この例では、 `:lang()` 擬似クラスを使用して引用要素 ({{htmlElement("q")}}) の親を選択するために [子結合子](/ja/docs/Web/CSS/Child_combinator) を使用しています。なお、この例はこの目的のための唯一の方法でも、文書型における最適な方法を示しているわけでもありません。また、 {{glossary("Unicode")}} の値は特殊な引用符を指定するために使用していることに注意してください。

### HTML

```html
<div lang="en"><q>This English quote has a <q>nested</q> quote inside.</q></div>
<div lang="fr"><q>This French quote has a <q>nested</q> quote inside.</q></div>
<div lang="ja"><q>この日本語の引用には内部に<q>入れ子</q>の引用があります。</q></div>
```

### CSS

```css
:lang(en) > q { quotes: '\201C' '\201D' '\2018' '\2019'; }
:lang(fr) > q { quotes: '« ' ' »'; }
:lang(ja) > q { quotes: '「' '」' '『' '』'; }
```

### 結果

{{EmbedLiveSample('Examples', 350)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 言語に関する擬似クラス: {{cssxref(":lang")}}, {{cssxref(":dir")}}
- HTML の {{htmlattrxref("lang")}} 属性
- HTML の {{htmlattrxref("translate")}} 属性
- {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}
