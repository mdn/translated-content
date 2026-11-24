---
title: "Sanitizer: removeElement() メソッド"
short-title: removeElement()
slug: Web/API/Sanitizer/removeElement
l10n:
  sourceCommit: ba886c384e385689ce8feffacf4f7ce1d8c5e736
---

{{APIRef("HTML Sanitizer API")}}

**`removeElement()`** メソッドは、{{domxref("Sanitizer")}} インターフェイスのメソッドで、無害化オブジェクトの使用時に指定した要素を出力から除去するよう設定します。

このメソッドは、[許可設定](/ja/docs/Web/API/HTML_Sanitizer_API#許可設定)または[除去設定](/ja/docs/Web/API/HTML_Sanitizer_API#除去設定)のいずれかで使用できます。
除去設定で使用した場合、指定した要素が `removeElements` 配列に追加されます。
許可設定で使用した場合、その要素が（存在すれば）`elements` 配列から除去されます。

## 構文

```js-nolint
removeElement(element)
```

### 引数

- `element`
  - : 禁止する要素名を示す文字列、または次のプロパティを持つオブジェクトです。
    - `name`
      - : 要素名を含む文字列です。
    - `namespace` {{optional_inline}}
      - : 要素の名前空間を含む文字列です。
        デフォルトの名前空間は `"http://www.w3.org/1999/xhtml"` です。

### 返値

操作によって要素を禁止するよう構成が変更された場合は `true` を返し、要素がすでに禁止されていた場合は `false` を返します。

内部構成が次のいずれかの場合、`false` が返されることがあります。

- [`elements`](/ja/docs/Web/API/SanitizerConfig#elements) 配列を定義しており、その要素がすでに含まれていない（除去する必要がない）
- 代わりに [`removeElements`](/ja/docs/Web/API/SanitizerConfig#removeelements) 配列を定義しており、指定した要素がすでに含まれている（そのため、すでに除去される）

## 例

### 要素を禁止する方法

この例では、`removeElement()` を使用して要素を「禁止」するよう指定する方法を示します。

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 420px;
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

このコードはまず、{{htmlelement("div")}} 要素と {{htmlelement("script")}} 要素を最初に許可し、{{htmlelement("span")}} 要素をその子要素に置き換える新しい `Sanitizer` オブジェクトを作成します。

次に、`removeElement()` を呼び出して、{{htmlelement("p")}}、`<script>`、`<span>` 要素を構成の [`removeElements`](/ja/docs/Web/API/SanitizerConfig#removeelements) リストに追加します。
`<script>` と `<span>` を追加すると、元のリストから要素が除去されることに注意してください。

```js hidden
if ("Sanitizer" in window) {
```

```js
// SanitizerConfig を使用して無害化オブジェクトを作成
const sanitizer = new Sanitizer({
  elements: ["div", "script"],
  replaceWithChildrenElements: ["span"],
});

// <p> 要素を禁止
sanitizer.removeElement("p");

// <script> 要素を禁止
sanitizer.removeElement("script");
// <span> 要素を禁止
sanitizer.removeElement("span");

// 無害化オブジェクトの構成をログ出力
let sanitizerConfig = sanitizer.get();
log(JSON.stringify(sanitizerConfig, null, 2));
```

```js hidden
} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
}
```

> [!NOTE]
> この構成はデモンストレーション専用です。
> 無害化の構成には、許可する要素（[`elements`](/ja/docs/Web/API/SanitizerConfig#elements)）だけ、または、禁止する要素（[`removeElements`](/ja/docs/Web/API/SanitizerConfig#removeelements)）だけを含めるべきであり、両方を含めてはいけません。
> この場合、`<div>` 要素だけが許可され、その他の要素はすべて入力から除去されるため、除去された要素は効果がありません。

#### 結果

最終的な構成を以下にログ出力します。

{{EmbedLiveSample("How to disallow elements","100","480px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
