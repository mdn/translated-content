---
title: 名前空間区切り文字
slug: Web/CSS/Reference/Selectors/Namespace_separator
original_slug: Web/CSS/Namespace_separator
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

**名前空間区切り文字** (`|`) は、セレクターと名前空間を区切り、要素型セレクターの{{glossary("namespace", "名前空間")}}を識別したり、存在しないこと識別したりします。

```css
/* myNameSpace という名前空間内のリンク */
myNameSpace|a {
  font-weight: bold;
}
/* 任意の名前空間の段落（名前空間なしも含む） */
*|p {
  color: darkblue;
}
/* 名前空間のないレベル 2 の見出し */
|h2 {
  margin-bottom: 0;
}
```

[要素型セレクター](/ja/docs/Web/CSS/Reference/Selectors/Type_selectors)および[全称セレクター](/ja/docs/Web/CSS/Reference/Selectors/Universal_selectors)では、オプションで名前空間要素を使用することができます。 {{CSSXref("@namespace")}} によって名前空間が事前に宣言されている場合、これらのセレクターは、名前空間区切り文字 (`|`) で区切った名前空間の名前をセレクターの前に付加することで、名前空間指定を行うことができます。これは、インライン SVG や MathML を含む HTML、あるいは複数の語彙が混在する XML など、複数の名前空間を含む文書を扱う場合に便利です。

- `ns|h1` - `ns` 名前空間内の `<h1>` 要素に一致
- `*|h1` - すべての `<h1>` 要素に一致
- `|h1` - 名前空間が宣言または暗黙的に指定されていないすべての `<h1>` 要素に一致

## 構文

```css
namespace|element { style properties }
```

## 例

既定では、 HTML または SVG のすべての要素は、 `http://www.w3.org/1999/xhtml` および `http://www.w3.org/2000/svg` 名前空間が暗黙的に指定されているため、名前空間を持っています。 {{domxref("document.createElementNS")}} メソッドを呼び出すとき、名前空間の引数に空文字列を指定すると、名前空間のない要素を作成することができます。

### 名前付きの名前空間の例

この例では、すべての要素は名前空間内にあります。

#### HTML

HTML および SVG では、名前空間は明示的に宣言されていません。

```html
<p>この段落には<a href="#">リンクがあります</a>。</p>

<svg width="400" viewBox="0 0 400 20">
  <a href="#">
    <text x="0" y="15">SVG で作成されたリンク</text>
  </a>
</svg>
```

#### CSS

CSS は 2 つの名前空間を宣言し、リンク全体 (`a`)、名前空間のないリンク (`|a`)、名前空間のあるリンクまたは名前空間のないリンク (`*|a`)、そして 2 つの異なる名前付き名前空間（`svgNamespace|a` および `htmlNameSpace|a`）にスタイルを割り当てます。

```css
@namespace svgNamespace url("http://www.w3.org/2000/svg");
@namespace htmlNameSpace url("http://www.w3.org/1999/xhtml");
/* 既定の名前空間に存在するすべての `<a>`、この場合はすべての `<a>` */
a {
  font-size: 1.4rem;
}
/* 名前空間なし */
|a {
  text-decoration: wavy overline lime;
  font-weight: bold;
}
/* すべての名前空間（名前空間を含まないものも含む） */
*|a {
  color: red;
  fill: red;
  font-style: italic;
}
/* svgNamespace 名前空間のみ、これは <svg> コンテンツです */
svgNamespace|a {
  color: green;
  fill: green;
}
/* HTML 文書である htmlNameSpace 名前空間 */
htmlNameSpace|a {
  text-decoration-line: line-through;
}
```

#### 結果

{{EmbedLiveSample("Named_namespace_example", "100%", 100)}}

セレクター `|a` は、名前空間に含まれていないリンクであり、どのリンクとも一致しません。 HTML では、 `http://www.w3.org/1999/xhtml` が暗黙的に指定されており、明示的に宣言されていなくても、すべての HTML が名前空間に含まれます。 SVG では、明示的に設定されていなくても、 `http://www.w3.org/2000/svg` 名前空間も暗黙的に指定されます。これは、すべてのコンテンツが少なくとも 1 つの名前空間内にあることを意味しています。

### 既定の名前空間および名前空間なし

この例では、 JavaScript を使用して、名前空間のない要素を作成し、それを文書に追加しています。 `@namespace` を使用して、名前なしの名前空間を既定の名前空間として定義しています。

> [!NOTE]
> 既定の、または名前が指定されていない名前空間が定義されている場合、全称セレクターおよび要素型セレクターはその名前空間内の要素にのみ適用されます。

#### HTML

HTML および SVG では、名前空間は明示的に宣言されていません。

```html
<p>暗黙的に HTML 名前空間に所属する<a href="#">リンク</a></p>

<svg width="400" viewBox="0 0 400 20">
  <a href="#">
    <text x="0" y="15">SVG 名前空間で作成されたリンク</text>
  </a>
</svg>
```

#### JavaScript

JavaScript では、 {{DOMXRef("document.createElementNS")}} を使用して、名前空間のないアンカーリンクを作成し、そのリンクを追加します。

```js
// 「名前なし」のアンカーを作成
const a = document.createElementNS("", "a");
a.href = "#";
a.appendChild(document.createTextNode("名前空間なしで作られたリンク"));

document.body.appendChild(a);
```

#### CSS

{{cssxref("@namespace")}} を使用して名前空間を宣言します。名前空間の名前を省略すると、 `@namespace` 宣言によって既定の名前空間が作成されます。

```css
/* 名前を省略すると、SVG を既定の名前空間として設定 */
@namespace url("http://www.w3.org/2000/svg");

/* `<a>` を既定の名前空間（SVG に設定）で */
a {
  font-size: 1.4rem;
}

/* `<svg>` および `<p>` を既定の名前空間（SVG に設定）で */
svg,
p {
  border: 5px solid gold;
}

/* あらゆる名前空間の外のリンク */
|a {
  text-decoration: wavy underline purple;
  font-weight: bold;
}

/* いずれかの名前空間か名前空間なしのリンク */
*|a {
  font-style: italic;
  color: magenta;
  fill: magenta;
}
```

#### 結果

{{EmbedLiveSample("Default_namespace_and_no_namespace", "100%", 100)}}

名前空間区切り文字のないセレクター `a` は、 SVG が既定の名前空間として設定されているため、 SVG の　`<a>` 要素のみに一致します。

名前空間のないセレクター `|a` は、 JavaScript で定義されて追加された `<a>` と一致しました。これは、そのノードが既定の名前空間を持たない唯一のノードであるためです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`@namespace`](/ja/docs/Web/CSS/Reference/At-rules/@namespace)
- [`Document.createElementNS()`](/ja/docs/Web/API/Document/createElementNS) メソッド
- [`Element.namespaceURI`](/ja/docs/Web/API/Element/namespaceURI) プロパティ
- [CSS 要素型セレクター](/ja/docs/Web/CSS/Reference/Selectors/Type_selectors)
- [CSS 全称セレクター](/ja/docs/Web/CSS/Reference/Selectors/Universal_selectors)
- [CSS セレクターモジュール](/ja/docs/Web/CSS/Guides/Selectors)
