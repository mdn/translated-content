---
title: content
slug: Web/CSS/content
tags:
  - CSS
  - CSS カウンター
  - CSS プロパティ
  - 生成コンテンツ
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.content
translation_of: Web/CSS/content
---
{{CSSRef}}

**`content`** は [CSS](/ja/docs/Web/CSS) のプロパティで、ある要素を生成された値で置き換えます。 `content` プロパティを使用して挿入されたオブジェクトは、**無名の[置換要素](/ja/docs/Web/CSS/Replaced_element)** になります。

```css
/* 他の値と組み合わせることができないキーワード */
content: normal;
content: none;

/* <image> 値 */
content: url("http://www.example.com/test.png");
content: linear-gradient(#e66465, #9198e5);
content: image-set("image1x.png" 1x, "image2x.png" 2x);

/* 生成コンテンツの代替テキスト、レベル 3 の仕様書で追加 */
content: url("http://www.example.com/test.png") / "This is the alt text";

/* <string> 値 */
content: "prefix";

/* <counter> 値、任意で <list-style-type> */
content: counter(chapter_counter);
content: counter(chapter_counter, upper-roman);
content: counters(section_counter, ".");
content: counters(section_counter, ".", decimal-leading-zero);

/* HTML 属性値にリンクした attr() 値 */
content: attr(value string);

/* 言語や位置に依存したキーワード */
content: open-quote;
content: close-quote;
content: no-open-quote;
content: no-close-quote;

/* normal と none を除き、複数の値が同時に使用可 */
content: open-quote counter(chapter_counter);

/* グローバル値 */
content: inherit;
content: initial;
content: revert;
content: unset;
```

## 構文

### 値

- `none`
  - : 擬似要素に適用された場合は、その擬似要素は生成されません。要素に適用された場合は、この値は効果がありません。
- `normal`
  - : `::before` および `::after` 擬似要素では `none` として計算されます。
- {{cssxref("&lt;string&gt;")}}
  - : 要素の「代替テキスト」を指定します。この値は任意の数のテキスト文字です。ラテン文字以外は Unicode エスケープシーケンスを使用してエンコードする必要があります。例えば、 `\000A9` は著作権記号を表します。
- {{cssxref("&lt;image&gt;")}}
  - : {{cssxref("&lt;image&gt;")}} です。 {{cssxref("url()")}} または {{cssxref("&lt;gradient&gt;")}} データ型、または {{cssxref("element()", "element()")}} 関数で定義されるウェブページの一部です。
- {{cssxref("counter()")}}

  - : [CSS カウンター](/ja/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters)の値で、通常は {{cssxref("&lt;counter-reset&gt;")}} および {{cssxref("&lt;counter-increment&gt;")}} プロパティで定義され、計算によって生み出される数値です。 {{cssxref("counter()")}} または {{cssxref("counters()")}} 関数を使用して表示することができます。

    {{cssxref("counter()")}} 関数には、 'counter(_名前_)' または 'counter(_名前_, スタイル)' の二つの形式があります。生成されるテキストは、その擬似要素のスコープにおけるその名前の最も内側のカウンターです。{{cssxref("&lt;list-style-type&gt;")}} で指定されたスタイルで整形されます (`decimal` が既定値です)。

    {{cssxref("counters()")}} 関数も、 'counters(_名前_, _文字列_)' または 'counters(_名前_, _文字列_, _スタイル_)' の二つの形式があります。生成されるテキストは、その擬似要素のスコープにおけるその名前のすべてのカウンターの値であり、外側から内側に向けて、指定された文字列で区切られます。カウンターは指定されたスタイルで表示されます(`decimal` が既定値です)。
 
- `attr(x)`
  - : 要素の属性の値 `x` を文字列として返します。属性 `x` が存在しない場合は、空文字列が返されます。属性名の大文字と小文字が区別されるかどうかは、文書の言語に依存します。
- `open-quote` | `close-quote`
  - : これらの値は {{cssxref("quotes")}} プロパティの対応する文字列に置き換えられます。
- `no-open-quote` | `no-close-quote`
  - : 内容はありませんが、引用符の入れ子の階層を増加 (または減少) させます。

## アクセシビリティの考慮

CSS で生成されるコンテンツは、 [DOM](/ja/docs/Web/API/Document_Object_Model/Introduction) には含まれません。そのため、これは[アクセシビリティツリー](/ja/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis)では表現されず、支援技術とブラウザーの組み合わせによってはアナウンスされないことがあります。そのコンテンツがページの目的を理解する上で重要な情報を含んでいるのであれば、メイン文書に含めたほうが適切です。

- [Accessibility support for CSS generated content – Tink](https://tink.uk/accessibility-support-for-css-generated-content/)
- [WCAG の解説、ガイドライン 1.3 – MDN](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_%e2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Understanding Success Criterion 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 見出しと引用符

この例では引用部分の周りに引用符を挿入し、見出しの前に "Chapter" の語を追加します。

#### HTML

```html
<h1>5</h1>
<p>According to Sir Tim Berners-Lee,
  <q cite="http://www.w3.org/People/Berners-Lee/FAQ.html#Internet">I was
    lucky enough to invent the Web at the time when the Internet
    already existed - and had for a decade and a half.</q>
  We must understand that there is nothing fundamentally wrong
  with building on the contributions of others.
</p>

<h1>6</h1>
<p>According to the Mozilla Manifesto,
  <q cite="http://www.mozilla.org/en-US/about/manifesto/">Individuals
    must have the ability to shape the Internet and
    their own experiences on the Internet.</q>
  Therefore, we can infer that contributing to the open web
  can protect our own individual experiences on it.
</p>
```

#### CSS

```css
q {
  color: blue;
}

q::before {
  content: open-quote;
}

q::after {
  content: close-quote;
}

h1::before  {
  content: "Chapter ";  /* 最後の空白は、追加コンテンツと
                           残りのコンテンツの間を区切る
                           ものです */
}
```

#### 結果

{{EmbedLiveSample('Headings_and_quotes', '100%', 200)}}

### テキストと組み合わせる画像

この例はリンクの前に画像を挿入します。画像が見つからなければ、代わりにテキストを挿入します。

#### HTML

```html
<a href="https://www.mozilla.org/en-US/">Mozilla Home Page</a>
```

#### CSS

```css
a::before {
  content: url("https://mozorg.cdn.mozilla.net/media/img/favicon.ico") / " MOZILLA: ";
  font: x-small Arial, sans-serif;
  color: gray;
}
```

#### 結果

{{EmbedLiveSample('Image_combined_with_text', '100%', 60)}}

### クラスのターゲッティング

この例はリストの特定の項目の後に追加のテキストを挿入します。

#### HTML

```html
<h2>Paperback Best Sellers</h2>
<ol>
  <li>Political Thriller</li>
  <li class="new-entry">Halloween Stories</li>
  <li>My Biography</li>
  <li class="new-entry">Vampire Romance</li>
</ol>
```

#### CSS

```css
.new-entry::after {
  content: " New!";  /* 先頭の空白は、追加コンテンツと
                        残りのコンテンツの間を区切る
                        ものです */
  color: red;
}
```

#### 結果

{{EmbedLiveSample('Targeting_classes', '100%', 160)}}

### 画像および要素の属性

この例はそれぞれのリンクの前に画像を挿入し、後に `id` 属性を追加します。

#### HTML

```html
<ul>
  <li><a id="moz" href="https://www.mozilla.org/">
    Mozilla Home Page</a></li>
  <li><a id="mdn" href="https://developer.mozilla.org/">
    Mozilla Developer Network</a></li>
</ul>
```

#### CSS

```css
a {
  text-decoration: none;
  border-bottom: 3px dotted navy;
}

a::after {
  content: " (" attr(id) ")";
}

#moz::before {
  content: url("https://mozorg.cdn.mozilla.net/media/img/favicon.ico");
}

#mdn::before {
  content: url("mdn-favicon16.png");
}

li {
  margin: 1em;
}
```

#### 結果

{{EmbedLiveSample('Images_and_element_attributes', '100%', 160)}}

### 要素の置き換え

この例は、要素の内容を画像で置き換えます。要素の内容を {{cssxref("url()")}} または {{cssxref("&lt;image&gt;")}} の値のどちらかで置き換えることができます。 `::before` または `::after` で追加された内容は、要素の中身が置き換えられるときは生成されません。

#### HTML

```html
<div id="replaced">Mozilla</div>
```

#### CSS

```css
#replaced {
  content: url("mdn.svg");
}

#replaced::after { /* 要素の置換に対応している場合は表示されない */
  content: " (" attr(id) ")";
}
```

#### 結果

{{EmbedLiveSample('Element_replacement', '100%', 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [置換要素](/ja/docs/Web/CSS/Replaced_element)
- {{Cssxref("::after")}}
- {{Cssxref("::before")}}
- {{Cssxref("::marker")}}
- {{Cssxref("quotes")}}
- {{cssxref("url()", "url()")}} 関数
