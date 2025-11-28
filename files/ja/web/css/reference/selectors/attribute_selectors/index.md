---
title: 属性セレクター
slug: Web/CSS/Reference/Selectors/Attribute_selectors
original_slug: Web/CSS/Attribute_selectors
l10n:
  sourceCommit: 333c924622d7ff78253a662f3d9d4e60263a93d9
---

CSS の**属性セレクター** (attribute selector) は、指定された属性が明示的に設定された要素に基づいて要素を照合します。オプションで、属性値または部分文字列の値が一致するように定義します。

```css
/* <a> 要素で title 属性を持つもの */
a[title] {
  color: purple;
}

/* <a> 要素で href が "https://example.org" と一致するもの */
a[href="https://example.org"] {
  color: green;
}

/* <a> 要素で href に "example" を含むもの */
a[href*="example"] {
  font-size: 2em;
}

/* <a> 要素で href が ".org" で終わるもの、大文字小文字を区別しない */
a[href$=".org" i] {
  font-style: italic;
}

/* <a> 要素で class 属性に "logo" という語が含まれているもの */
a[class~="logo"] {
  padding: 2px;
}
```

## 構文

- `[attr]`
  - : _attr_ という名前の属性を持つ要素を表します。
- `[attr=value]`
  - : _attr_ という名前の属性の値が正確に _value_ である要素を表します。
- `[attr~=value]`
  - : _attr_ という名前の属性の値が空白区切りの語のリストであり、その内の 1 つが正確に _value_ と一致する要素を表します。
- `[attr|=value]`
  - : _attr_ という名前の属性の値が正確に _value_ と一致するか、 _value_ で始まり直後にハイフン (`-` (U+002D)) が続く要素を表します。言語のサブコードの一致によく使われます。
- `[attr^=value]`
  - : _attr_ という名前の属性の値が _value_ で始まる要素を表します。
- `[attr$=value]`
  - : _attr_ という名前の属性の値が _value_ で終わる要素を表します。
- `[attr*=value]`
  - : _attr_ という名前の属性の値が、文字列中に _value_ を1つ以上含む要素を表します。
- `[attr operator value i]`
  - : 閉じ角括弧の前に `i` (または `I`) を追加すると、 ({{Glossary("ASCII")}} の範囲内の文字の場合) 値は大文字と小文字を区別せずに比較されます。
- `[attr operator value s]` {{Experimental_Inline}}
  - : 閉じ角括弧の前に `s` (または `S`) を追加すると、 ({{Glossary("ASCII")}} の範囲内の文字の場合) 値は大文字と小文字を区別して比較されます。

### 値

- `<attr>`
  - : {{cssxref("ident")}}、つまり属性の引用符なしの名前です。これは、有効な言語固有の属性（SVG、HTML、XML など）、[`data-*` 属性](/ja/docs/Web/HTML/Reference/Global_attributes/data-*)、または作成者が作成した属性のいずれかです。
- `<value>`
  - : 属性値を表す {{cssxref("ident")}} または {{cssxref("string")}} です。値に空白文字や特殊文字が含まれている場合は、引用符で囲む必要があります。
- `s` or `i`
  - : 大文字と小文字を区別するか区別しないかのフラグ。 閉じられた括弧 (`]`) の前に含まると、マークアップ言語に関係なく、値の大文字と小文字を区別したり、区別しなかったりするようになります。

## 解説

属性名と値の 大文字小文字の区別は文書言語に依存します。 HTML では、属性名は大文字と小文字を区別せず、仕様で定義された{{glossary("enumerated", "列挙")}}値も区別しません。[大文字小文字を区別しない HTML 属性値](https://html.spec.whatwg.org/multipage/semantics-other.html#case-sensitivity-of-selectors)は HTML 仕様書に掲載されています。これらの属性では、値が不正なのか、設定する要素の属性が不正なのかに関わらず、セレクターの属性値は大文字と小文字を区別しません。

[`class`](/ja/docs/Web/HTML/Reference/Global_attributes/class)、[`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id)、[`data-*`](/ja/docs/Web/HTML/Reference/Global_attributes/data-*) 属性のように、属性値が大文字小文字を区別する場合、属性セレクターによる値の照合時は大文字小文字を区別します。[`role`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles) や [`aria-*`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes) 属性のように、 HTML 仕様書の外で定義する属性も、大文字小文字を区別します。通常、大文字小文字を区別する属性セレクターは、大文字小文字を区別しない修飾子 (`i`) を含めることで区別しないようにすることができます。

## 例

### リンク

#### CSS

```css live-sample___links
a {
  color: blue;
}

/* "#" で始まる内部リンク */
a[href^="#"] {
  background-color: gold;
}

/* URL のどこかに "example" が含まれるリンク */
a[href*="example"] {
  background-color: silver;
}

/* URL のどこかに "insensitive" が含まれるリンクで、
   大文字小文字は区別しない */
a[href*="insensitive" i] {
  color: cyan;
}

/* URL のどこかに "cAsE" があるリンクに一致
大文字小文字の区別つき */
a[href*="cAsE" s] {
  color: pink;
}

/* ".org" で終わるリンク */
a[href$=".org"] {
  color: red;
}

/* "https://" で始まり ".org" で終わるリンク */
a[href^="https://"][href$=".org"] {
  color: green;
}
```

#### HTML

```html live-sample___links
<ul>
  <li><a href="#internal">Internal link</a></li>
  <li><a href="http://example.com">Example link</a></li>
  <li><a href="#InSensitive">Insensitive internal link</a></li>
  <li><a href="http://example.org">Example org link</a></li>
  <li><a href="https://example.org">Example https org link</a></li>
</ul>
```

#### 結果

{{EmbedLiveSample("Links")}}

### 言語

#### CSS

```css live-sample___languages
/* `lang` 属性があるすべての div を太字にする。 */
div[lang] {
  font-weight: bold;
}

/* すべての div のうち `lang` 属性のないものをイタリックにする。 */
div:not([lang]) {
  font-style: italic;
}

/* アメリカ英語の div はすべて青。 */
div[lang~="en-us"] {
  color: blue;
}

/* ポルトガル語の div はすべて緑。 */
div[lang="pt"] {
  color: green;
}

/* 中国語の div はすべて赤。
   簡体字 (zh-Hans-CN) または繁体字 (zh-Hant-TW) */
div[lang|="zh"] {
  color: red;
}

/* 'data-lang' が中国語繁体字の div はすべて紫。 */
/* メモ: ハイフン区切りの属性は二重引用符なしで使用できる */
div[data-lang="zh-Hant-TW"] {
  color: purple;
}
```

#### HTML

```html live-sample___languages
<div lang="en-us en-gb en-au en-nz">Hello World!</div>
<div lang="pt">Olá Mundo!</div>
<div lang="zh-Hans-CN">世界您好！</div>
<div lang="zh-Hant-TW">世界您好！</div>
<div data-lang="zh-Hant-TW">世界您好！</div>
```

#### 結果

{{EmbedLiveSample("Languages")}}

### HTML 順序付きリスト

HTML 仕様書では、 [`type`](/ja/docs/Web/HTML/Reference/Elements/input#type) 属性は主に {{HTMLElement("input")}} 要素で使用されるため、大文字小文字の区別なく照合することを要求しています。
ユーザーエージェントが修飾子に対応していない場合、セレクターは一致しないので注意してください。

#### CSS

```css live-sample___html_ordered_lists
/* 文書の言語によっては大文字小文字を区別する */
ol[type="a"]:first-child {
  list-style-type: lower-alpha;
  background: red;
}

ol[type="i" s] {
  list-style-type: lower-alpha;
  background: lime;
}

ol[type="I" s] {
  list-style-type: upper-alpha;
  background: grey;
}

ol[type="a" i] {
  list-style-type: upper-alpha;
  background: green;
}
```

#### HTML

```html live-sample___html_ordered_lists
<ol type="A">
  <li>
    Red background for case-insensitive matching (default for the type selector)
  </li>
</ol>
<ol type="i">
  <li>Lime background if `s` modifier is supported (case-sensitive match)</li>
</ol>
<ol type="I">
  <li>Grey background if `s` modifier is supported (case-sensitive match)</li>
</ol>
<ol type="A">
  <li>
    Green background if `i` modifier is supported (case-insensitive match)
  </li>
</ol>
```

#### 結果

{{EmbedLiveSample("HTML_ordered_lists")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("attr")}}
- 単一要素の選択: {{DOMxRef("Document.querySelector()")}}, {{DOMxRef("DocumentFragment.querySelector()")}}, {{DOMxRef("Element.querySelector()")}}
- 一致するすべての要素の選択: {{DOMxRef("Document.querySelectorAll()")}}, {{DOMxRef("DocumentFragment.querySelectorAll()")}}, {{DOMxRef("Element.querySelectorAll()")}}
- [Case-insensitive attribute selector values](https://html.spec.whatwg.org/multipage/semantics-other.html#case-sensitivity-of-selectors) on WHATWG
