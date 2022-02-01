---
title: 属性セレクター
slug: Web/CSS/Attribute_selectors
tags:
  - 属性セレクター
  - CSS
  - リファレンス
  - セレクター
browser-compat: css.selectors.attribute
translation_of: Web/CSS/Attribute_selectors
---
{{CSSRef}}

CSS の**属性セレクター** (attribute selector) は、指定された属性が存在するかどうか、またはその値に基づいて要素を選択します。

```css
/* title 属性を持つ <a> 要素 */
a[title] {
  color: purple;
}

/* href が "https://example.org" と一致する <a> 要素 */
a[href="https://example.org"] {
  color: green;
}

/* href に "example" を含む <a> 要素 */
a[href*="example"] {
  font-size: 2em;
}

/* href が "org" で終わる <a> 要素 */
a[href$=".org"] {
  font-style: italic;
}

/* <a> 要素の class 属性に "logo" という語が含まれているもの */
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
  - : _attr_ という名前の属性の値が正確に _value_ と一致する要素を表します。空白区切りの語のリストの形で、複数の _value_ を含めることができます。
- `[attr|=value]`
  - : _attr_ という名前の属性の値が正確に _value_ と一致するか、 _value_ で始まり直後にハイフン (`-` (U+002D)) が続く要素を表します。言語のサブコードの一致によく使われます。
- `[attr^=value]`
  - : _attr_ という名前の属性の値が _value_ で始まる要素を表します。
- `[attr$=value]`
  - : _attr_ という名前の属性の値が _value_ で終わる要素を表します。
- `[attr*=value]`
  - : _attr_ という名前の属性の値が、文字列中に _value_ を1つ以上含む要素を表します。
- `[attr operator value i]`
  - : 閉じ角括弧の前に `i` (または `I`) を追加すると、 (ASCII の範囲内の文字の場合) 値は大文字と小文字を区別せずに比較されます。
- `[attr operator value s]` {{Experimental_Inline}}
  - : 閉じ角括弧の前に `s` (または `S`) を追加すると、 (ASCII の範囲内の文字の場合) 値は大文字と小文字を区別して比較されます。

## 例

### リンク

#### CSS

```css
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

/* "https" で始まり ".org" で終わるリンク */
a[href^="https"][href$=".org"] {
  color: green;
}
```

#### HTML

```html
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

```css
/* `lang` 属性があるすべての div を太字にする。 */
div[lang] {
  font-weight: bold;
}

/* すべｔの div のうち `lang` 属性のない者をイタリックにする。 */
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
   simplified (zh-CN) or traditional (zh-TW). */
div[lang|="zh"] {
  color: red;
}

/* 'data-lang' が中国語繁体字の div はすべて紫。 */
/* 注: ハイフン区切りの属性は二重引用符なしで使用できる */
div[data-lang="zh-TW"] {
  color: purple;
}
```

#### HTML

```html
<div lang="en-us en-gb en-au en-nz">Hello World!</div>
<div lang="pt">Olá Mundo!</div>
<div lang="zh-CN">世界您好！</div>
<div lang="zh-TW">世界您好！</div>
<div data-lang="zh-TW">世界您好！</div>
```

#### 結果

{{EmbedLiveSample("Languages")}}

### HTML 順序付きリスト

HTML 仕様書では、 {{htmlattrxref("type", "input")}} 属性は主に {{HTMLElement("input")}} 要素で使用されるため、大文字小文字の区別なく一致することを要求しており、順序付きリスト ({{HTMLElement("ol")}}) 要素の {{htmlattrxref("type", "ol")}} 属性に使おうとすると、 [case-sensitive](#case-sensitive) 修飾子がなければ正しく動作しません。

#### CSS

```css
/* HTML が type 属性を扱う方法の癖の都合上、リストの種別には、大文字小文字を区別する指定が必要です。 */
ol[type="a"] {
  list-style-type: lower-alpha;
  background: red;
}

ol[type="a" s] {
  list-style-type: lower-alpha;
  background: lime;
}

ol[type="A" s] {
  list-style-type: upper-alpha;
  background: lime;
}
```

#### HTML

```html
<ol type="A">
  <li>Example list</li>
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
