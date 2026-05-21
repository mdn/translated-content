---
title: "Document: createElementNS() メソッド"
short-title: createElementNS()
slug: Web/API/Document/createElementNS
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

{{APIRef("DOM")}}

**`createElementNS()`** は {{domxref("Document")}} インターフェイスのメソッドで、指定された名前空間 URI と修飾名を持つ新しい要素を生成します。

これは、HTML に埋め込まれた SVG や MathML など、名前空間が混在する文書において、パーサーが名前空間を確実に推測できない場合に有益です。

生の HTML 要素を作成する場合は、{{DOMxRef("Document.createElement()", "createElement()")}} メソッドのほうがシンプルです。

## 構文

```js-nolint
createElementNS(namespaceURI, qualifiedName)
createElementNS(namespaceURI, qualifiedName, options)
```

### 引数

- `namespaceURI`
  - : 文字列で、要素に結び付ける{{DOMxRef("element.namespaceURI", "名前空間 URI")}} を指定します。重要な名前空間 URI をいくつか挙げておきます。
    - [HTML](/ja/docs/Web/HTML)
      - : `http://www.w3.org/1999/xhtml`
    - [SVG](/ja/docs/Web/SVG)
      - : `http://www.w3.org/2000/svg`
    - [MathML](/ja/docs/Web/MathML)
      - : `http://www.w3.org/1998/Math/MathML`

- `qualifiedName`
  - : 文字列で、生成される要素の型を指定します。
    生成される要素の {{DOMxRef("node.nodeName", "nodeName")}} プロパティは、この値で初期化されます。

    修飾名の形式は `prefix:localName` または `localName` であり、各部分は次のように定義されます。
    - `prefix` {{optional_inline}}
      - : 名前空間の「短い別名」です。
        接頭辞はオプションですが、指定する場合は、`namespaceURI` 引数も同時に指定しなければなりません。
        接頭辞が `xml` または `xmlns` に設定されている場合、`namespaceURI` はそれぞれ `http://www.w3.org/XML/1998/namespace` または `http://www.w3.org/2000/xmlns/` に設定しなければなりません。

        この値は、新しい要素の {{DOMxRef("Element/prefix", "prefix")}} プロパティを初期化するために使用されます。
        デフォルト値は `null` です。

    - `localName`
      - : この要素のローカル名です。
        この値は、新しい要素の {{DOMxRef("Element.localName", "localName")}} プロパティを初期化するために使用されます。

- `options` {{Optional_Inline}}
  - : 以下のオプションのプロパティを持つオブジェクト（なお、`is` と `customElementRegistry` のどちらかのみを設定できます）。
    - `is` {{Optional_Inline}}
      - : {{domxref("CustomElementRegistry/define", "customElements.define()")}} を使用して、以前定義されたカスタム要素のタグ名を指定する文字列です。
        新しい要素には、そのカスタム要素のタグ名を値とする `is` 属性が指定されます。
    - `customElementRegistry` {{Optional_Inline}}
      - : {{domxref("CustomElementRegistry")}} であり、カスタム要素の[スコープ付きカスタム要素レジストリー](/ja/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries)を設定します。

    下位互換性を確保するため、一部のブラウザーでは、オブジェクトの代わりに文字列を渡すことができます。この場合、文字列の値はカスタム要素のタグ名となります。
    この引数の使用方法の情報については、[ネイティブ HTML 要素の拡張](https://web.dev/articles/web-components)<sup>（英語）</sup> をご覧ください。

### 返値

新しい {{DOMxRef("Element")}} です。

### 例外

- `NamespaceError` {{domxref("DOMException")}}
  - : [`namespaceURI`](#namespaceuri) の値が次のいずれかの場合に発生します。
    - 有効な名前空間 URI ではない。
    - `prefix` に値がある場合に、空文字列に設定した。
    - [`prefix`](#prefix) が `xml` または `xmlns` に設定されている場合、それぞれ `http://www.w3.org/XML/1998/namespace` または `http://www.w3.org/2000/xmlns/` ではなかった場合。
- `InvalidCharacterError` {{domxref("DOMException")}}
  - : `prefix` または `localName` のどちらかが無効な場合、この例外が発生します：
    - `prefix` は少なくとも 1 文字でなければならないし、ASCII ホワイトスペース、`NULL`、`/`、または `>`（それぞれ U+0000、U+002F、U+003E）を含んではなりません。
    - `localName` は、長さが 1 文字以上であり、かつ以下の条件を満たす場合、有効な要素名となります。
      - アルファベット文字で始まり、ASCII のホワイトスペース、`NULL`、`/`、`>`（それぞれU+0000、U+002F、U+003E）が含まれていないもの。
      - 先頭が `:` (U+003A)、 `_` (U+005F)、U+0080 以上 U+10FFFF 以下の範囲内の任意の文字で始まり、かつ、残りのコードポイントは、それらの同じ文字に加え、ASCII 英数字、`-` (U+002D)、および `.` (U+002E) のみを含むもの。

    > [!NOTE]
    > 以前のバージョンの仕様書では、より厳しい制限があり、`localName` が有効な [XML 名](https://www.w3.org/TR/xml/#dt-name) であることが要求されていました。

- `NotSupportedError` {{domxref("DOMException")}}
  - : [`is`](#is) および [`customElementRegistry`](#customelementregistry) の両方のオプションが指定された場合、この例外が発生します。

## 例

### 基本的な使用

この文書では、新しい `<div>` 要素を {{Glossary("XHTML")}} 名前空間に作成する方法を示します。

```js
const divElementXHTML = document.createElementNS(
  "http://www.w3.org/1999/xhtml",
  "div",
);

// 次のものと同等です!
const divElementHTML = document.createElement("div");
```

### SVG 要素を作成

この例では、SVG 要素 ({{domxref("SVGSVGElement")}}) を作成し、それを HTML の `<body>` 要素に追加する方法を示しています。

HTML 文書で作業する際には、SVG 名前空間に対して `createElementNS()` を使用する必要があります。
{{DOMxRef("Document.createElement()", "createElement(\"svg\")")}} を呼び出した場合、{{domxref("HTMLUnknownElement")}} が返され、SVG はレンダリングされません。

```js
const svgNS = "http://www.w3.org/2000/svg";

const svg = document.createElementNS(svgNS, "svg");
svg.setAttribute("width", "100");
svg.setAttribute("height", "100");

const circle = document.createElementNS(svgNS, "circle");
circle.setAttribute("cx", "50");
circle.setAttribute("cy", "50");
circle.setAttribute("r", "40");
circle.setAttribute("fill", "steelblue");

svg.appendChild(circle);
document.body.appendChild(svg);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("document.createElement()")}}
- {{DOMxRef("document.createTextNode()")}}
- {{DOMxRef("Element.namespaceURI")}}
