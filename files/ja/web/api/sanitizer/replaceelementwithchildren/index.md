---
title: "Sanitizer: replaceElementWithChildren() メソッド"
short-title: replaceElementWithChildren()
slug: Web/API/Sanitizer/replaceElementWithChildren
l10n:
  sourceCommit: 3da04ec7191b2d04750d76aad2a59d6579fe43ba
---

{{APIRef("HTML Sanitizer API")}}

**`replaceElementWithChildren()`** メソッドは、{{domxref("Sanitizer")}} インターフェイスのメソッドで、無害化オブジェクトの使用時に要素をその子 HTML 要素に置き換えるよう設定します。
これは主に、テキストからスタイルを除去するために使用されます。

## 構文

```js-nolint
replaceElementWithChildren(element)
```

### 引数

- `element`
  - : 置き換える要素名を示す文字列、または次のプロパティを持つオブジェクトです。
    - `name`
      - : 要素名を含む文字列です。
    - `namespace` {{optional_inline}}
      - : 要素の名前空間を含む文字列です。
        デフォルトの名前空間は `"http://www.w3.org/1999/xhtml"` です。

### 返値

論理値です。操作によって `Sanitizer` の構成が更新され、要素がその子要素に置き換えられた場合は `true` を返し、それ以外の場合は `false` を返します。

無害化オブジェクトが指定した要素をすでに置き換えるよう構成されている場合や、解決された要素が[許可されていない](#置換要素として許可されない要素)場合、このメソッドは `false` を返します。

## 解説

**`replaceElementWithChildren()`** メソッドは、無害化オブジェクトの使用時に、子要素やテキストノードに置き換える要素を指定します。
これは主に、テキストからスタイルを除去するために使用されます。

### 置換要素として許可されない要素

次の要素は置換要素として許可されません。

- HTML 名前空間 (`http://www.w3.org/1999/xhtml`) の {{htmlelement("html")}}。
- SVG 名前空間 (`http://www.w3.org/2000/svg`) の {{svgelement("svg")}}。
- MathML 名前空間 (`http://www.w3.org/1998/Math/MathML`) の {{mathmlelement("math")}}。

次のメソッド呼び出しはすべて、これらの要素について `Sanitizer` を更新できないため、`false` を返します。

```js
const sanitizer = new Sanitizer();

sanitizer.replaceElementWithChildren("html");
sanitizer.replaceElementWithChildren({ name: "html" });
sanitizer.replaceElementWithChildren({
  name: "html",
  namespace: "http://www.w3.org/1999/xhtml",
});
sanitizer.replaceElementWithChildren({
  name: "svg",
  namespace: "http://www.w3.org/2000/svg",
});
sanitizer.replaceElementWithChildren({
  name: "math",
  namespace: "http://www.w3.org/1998/Math/MathML",
});
```

## 例

### 基本的な使い方

この例では、入力の `<em>` 要素をその子要素の内容に置き換える `Sanitizer` を構成する、メソッドの基本的な使い方を示します。

```js
// 無害化オブジェクトを作成（ここではデフォルト）
const sanitizer = new Sanitizer();

// <em> 要素をその innerHTML に置き換え
sanitizer.replaceElementWithChildren("em");
```

### テキストからスタイルを除去する方法

この例では、`replaceElementWithChildren()` を使用してテキストからスタイルを除去する方法を示します。

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 480px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.textContent += text;
}
```

#### JavaScript

このコードはまず、{{htmlelement("p")}}、{{htmlelement("em")}}、{{htmlelement("strong")}} 要素を最初に許可する新しい `Sanitizer` オブジェクトを作成します。
次に、`replaceElementWithChildren()` を無害化オブジェクトで呼び出し、`<strong>` 要素を置き換えるよう指定します。

コードは `<strong>` 要素を含む文字列を定義し、無害化オブジェクトとともに {{domxref("Element.setHTML()")}} を使用して文字列を挿入します。
元の文字列、要素から無害化された HTML、無害化オブジェクトをログに出力します。

```js hidden
if ("Sanitizer" in window) {
```

```js
// SanitizerConfig を使用して無害化オブジェクトを作成
const sanitizer = new Sanitizer({
  elements: ["p", "em", "strong"],
});

// <strong> 要素を置き換え
sanitizer.replaceElementWithChildren("strong");

const unsanitizedString = `<p>This is a with <strong>important</strong> text <em>highlighted</em>.</p>`;
log(`unsanitizedHTMLString:\n ${unsanitizedString}`);

// <div> 要素を作成
const divElement = document.createElement("div");

divElement.setHTML(unsanitizedString, { sanitizer });
log(`\n\nsanitizedHTML:\n ${divElement.innerHTML}`);

// 無害化オブジェクトの構成をログ出力
const sanitizerConfig = sanitizer.get();
log(`\n\nsanitizerConfig:\n ${JSON.stringify(sanitizerConfig, null, 2)}`);
```

```js hidden
} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
}
```

#### 結果

以下に、元の無害化されていない HTML 文字列、要素から無害化された文字列、無害化オブジェクトをログに出力します。
テキストから `<strong>` のスタイルは除去されますが、`<em>` 要素は除去されないことに注意してください。
また、`<strong>` 要素はもともと構成の `elements` リストに含まれていましたが、`replaceWithChildrenElements` リストに追加された際に除去されていることにも注意してください。

{{EmbedLiveSample("How to strip styles from text","100","520px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
