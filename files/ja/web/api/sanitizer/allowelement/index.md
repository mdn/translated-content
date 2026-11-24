---
title: "Sanitizer: allowElement() メソッド"
short-title: allowElement()
slug: Web/API/Sanitizer/allowElement
l10n:
  sourceCommit: ba886c384e385689ce8feffacf4f7ce1d8c5e736
---

{{APIRef("HTML Sanitizer API")}}

**`allowElement()`** メソッドは {{domxref("Sanitizer")}} インターフェイスのメソッドで、無害化処理で指定された要素が出力に含まれるよう設定します。

また、[許可構成](/ja/docs/Web/API/HTML_Sanitizer_API#許可設定)を使っている `Sanitizer` インスタンスで、要素ごとに属性を許可または除去する配列を指定するためにも使用できます。

## 構文

```js-nolint
allowElement(element)
```

### 引数

- `element`
  - : 許可する要素の名前を示す文字列、または次のプロパティを持つオブジェクトです。
    - `name`
      - : 要素の名前を含む文字列です。
    - `namespace` {{optional_inline}}
      - : 要素の名前空間を含む文字列です。
        デフォルトの名前空間は `"http://www.w3.org/1999/xhtml"` です。
    - `attributes` {{optional_inline}}
      - : HTML の無害化時に、この（許可された）要素で許可する属性を示す配列です。

        属性は、それぞれ名前（文字列）または次のプロパティを持つオブジェクトで指定できます。
        - `name`
          - : 属性の名前を含む文字列です。
        - `namespace` {{optional_inline}}
          - : 属性の名前空間を含む文字列です。デフォルトは `null` です。

    - `removeAttributes` {{optional_inline}}
      - : HTML の無害化時に、この（許可された）要素から除去する属性を示す配列です。

        属性は、それぞれ名前（文字列）または次のプロパティを持つオブジェクトで指定できます。
        - `name`
          - : 属性の名前を含む文字列です。
        - `namespace` {{optional_inline}}
          - : 属性の名前空間を含む文字列です。デフォルトは `null` です。

### 返値

要素を許可するよう構成が変更された場合は `true`、構成が変更されなかった場合は `false` です（通常は要素がすでに許可されているためですが、変更できなかった場合もあります）。

内部構成が次のいずれかの場合、`false` が返されることがあります。

- [`elements`](/ja/docs/Web/API/SanitizerConfig#elements) 配列が定義されていて、要素がすでに含まれている場合（再度追加する必要はありません）。
- [`removeElements`](/ja/docs/Web/API/SanitizerConfig#removeelements) 配列が定義されていて、指定された要素が含まれていない場合（すでにフィルター対象外です）。
- [`removeElements`](/ja/docs/Web/API/SanitizerConfig#removeelements) 配列が定義されていて、要素ごとの属性を伴う要素を許可しようとした場合。
  [有効な構成](/ja/docs/Web/API/SanitizerConfig#有効な設定)では `removeElements` 配列と `elements` 配列の両方を指定できず、要素ごとの属性は `elements` 配列に追加されます。そのため、この操作はサポートされていません。
  呼び出しによって構成は変更されず、コンソールに警告が表示されます。

## 解説

`allowElement()` メソッドは、無害化処理で指定された要素が出力に含まれるよう設定します。

このメソッドは、[許可構成](/ja/docs/Web/API/HTML_Sanitizer_API#許可設定)または[除去構成](/ja/docs/Web/API/HTML_Sanitizer_API#除去設定)で使用できます。
許可構成で使用すると、指定した要素が `elements` 配列に追加されます。
除去構成で使用すると、指定した要素が `removeElements` 配列に含まれている場合は、その配列から除去されます。
要素が [`replaceWithChildrenElements`](/ja/docs/Web/API/SanitizerConfig#replacewithchildrenelements) 配列に含まれている場合は、そこからも除去されます。

例えば、次のコードは {{htmlelement("span")}} 要素を許可する許可構成の `Sanitizer` を作成し、続けて `allowElement()` を呼び出して {{htmlelement("b")}} 要素も許可します。

```js
const sanitizer = new Sanitizer({ elements: ["span"] });
sanitizer.allowElement("b");
```

許可構成の `Sanitizer` を使用する場合、このメソッドでその種類の要素に対して許可または除去する属性も指定できます。
例えば、次のコードでは最初に `elements` 配列を指定して許可構成を作成しています（空のオブジェクト、または構成オブジェクトを指定せずに `Sanitizer` を作成した場合も「許可構成」になります）。
続けて `allowElement()` を呼び出し、`div` 要素を許可し、`<div>` 要素の `class` 属性を許可し、`lang` 属性を除去しています。

```js
const sanitizer = new Sanitizer({ elements: ["span"] });
sanitizer.allowElement({
  name: "div",
  attributes: ["class"],
  removeAttributes: ["lang"],
});
```

上記のように要素ごとの属性追加配列と属性除去配列の両方が必要な場合は、このメソッドを 1 回呼び出して両方を指定する必要があります。
2 回に分けて呼び出すと、2 回目の呼び出しによって 1 回目に追加された要素定義が置き換えられます。

[除去構成](/ja/docs/Web/API/HTML_Sanitizer_API#除去設定)の `Sanitizer` を使用して要素ごとの属性許可配列または属性除去配列を追加する同様のコードを実行すると、コンソールに警告が表示され、`false` が返されます。
これは、要素ごとの属性を指定するために必要な `elements` 配列が内部に存在しないためです。構成は変更されません。

```js example-bad
// 除去構成の Sanitizer を定義
// 構成で removeElements を指定
const sanitizer = new Sanitizer({ removeElements: [] });
// false を返し、コンソールに警告を表示
sanitizer.allowElement({
  name: "div",
  attributes: ["class"],
  removeAttributes: ["lang"],
});
```

## 例

### 要素を許可する方法

この例では、`allowElement()` を使用して、要素の許可リストである [`elements` 構成](/ja/docs/Web/API/SanitizerConfig#elements)に要素を追加する方法を示します。

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 400px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.textContent = text;
}
```

#### JavaScript

このコードではまず、新しい `Sanitizer` オブジェクトを作成し、最初に {{htmlelement("div")}} 要素と {{htmlelement("script")}} 要素を許可します。
次に `allowElement()` を呼び出して、文字列引数で指定した {{htmlelement("p")}} 要素を追加し、さらにオブジェクトで指定した {{htmlelement("span")}} 要素を追加します。
最後に構成を取得してログに出力します。

```js hidden
if ("Sanitizer" in window) {
```

```js
// SanitizerConfig を使って無害化器を作成
const sanitizer = new Sanitizer({
  elements: ["div", "script"],
});

// 文字列を指定して <p> を許可
sanitizer.allowElement("p");

// オブジェクトを指定して <span> を許可
sanitizer.allowElement({ name: "span" });

let sanitizerConfig = sanitizer.get();
log(JSON.stringify(sanitizerConfig, null, 2));
```

```js hidden
} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
}
```

#### 結果

最終的な構成が下にログ出力されます。
元からあった要素（`<div>` と `<script>`）と、`allowElement()` で追加した 2 つの要素（`<p>` と `<span>`）が含まれます。

{{EmbedLiveSample("How to allow elements","100","480px")}}

### すでに許可または除去されている要素を許可する

この例では、すでに許可されている要素や、構成で「除去対象」とされている要素を `allowElement()` で追加した場合の動作を示します。

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 400px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.textContent = text;
}
```

#### JavaScript

このコードではまず、新しい `Sanitizer` オブジェクトを作成し、最初に {{htmlelement("div")}} 要素を許可して（`id` 以外の属性を除去して）、さらに {{htmlelement("span")}} 要素をすべての子要素に置き換えます。

次に `allowElement()` を呼び出し、まず `style` 属性を除去する {{htmlelement("div")}} 要素を追加します。
`<div>` 要素はすでに許可されているため、[`elements` 構成](/ja/docs/Web/API/SanitizerConfig#elements)から既存の定義が除去され、新しい要素定義が追加されます。

続けて {{htmlelement("span")}} 要素を許可リストに追加します。これにより、[`replaceWithChildrenElements` 構成リスト](/ja/docs/Web/API/SanitizerConfig#replacewithchildrenelements)からこの要素が除去されます。

```js hidden
if ("Sanitizer" in window) {
```

```js
// SanitizerConfig を使って無害化器を作成
const sanitizer = new Sanitizer({
  elements: [{ name: "div", attributes: [{ name: "id" }] }],
  replaceWithChildrenElements: ["span"],
});

// <div> 要素を許可
// id 属性を許可し、style 属性を除去
sanitizer.allowElement({
  name: "div",
  removeAttributes: ["style"],
});

// <span> 要素を許可
sanitizer.allowElement("span");

let sanitizerConfig = sanitizer.get();
log(JSON.stringify(sanitizerConfig, null, 2));
```

```js hidden
} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
}
```

#### 結果

最終的な構成がログ出力され、以下に表示されます。
ログから、元の `<div>` 要素のフィルターが除去され、新しい定義が `elements` リストに追加されたことがわかります。
`<span>` 要素を `elements` リストに追加したことで、`replaceWithChildrenElements` リストからこの要素が除去されています。

{{EmbedLiveSample("Allowing elements that are already allowed or removed","100","480px")}}

## 仕様書

{{Specifications}}
