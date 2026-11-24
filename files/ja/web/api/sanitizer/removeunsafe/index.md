---
title: "Sanitizer: removeUnsafe() メソッド"
short-title: removeUnsafe()
slug: Web/API/Sanitizer/removeUnsafe
l10n:
  sourceCommit: cb84bb5393fe4ce7bf078210692e132e607766b3
---

{{APIRef("HTML Sanitizer API")}}

**`removeUnsafe()`** メソッドは、{{domxref("Sanitizer")}} インターフェイスのメソッドで、ブラウザーが XSS に対して安全でないと見なすすべての要素と属性を除去するよう無害化オブジェクトを設定します。

このメソッドを呼び出すと、任意の `Sanitizer` を XSS に対して安全にできます。

## 構文

```js-nolint
removeUnsafe()
```

### 引数

なし

### 返値

操作によって XSS に対して安全でないと見なされる要素、属性、イベントハンドラーコンテンツ属性のいずれかが除去された場合は `true` を返し、要素も属性も除去されなかった場合は `false` を返します。

## 解説

**`removeUnsafe()`** メソッドは、ブラウザーが XSS に対して安全でないと見なすすべての要素と属性を除去するよう無害化オブジェクトを設定します。
これには、{{htmlelement("base")}}、{{htmlelement("embed")}}、{{htmlelement("frame")}}、{{htmlelement("iframe")}}、{{htmlelement("object")}}、{{htmlelement("script")}}、{{SVGElement("use")}} 要素や、`onafterprint`、`onbeforeinput` などのイベントハンドラーコンテンツ属性が含まれます。

{{domxref("Element.setHTML()")}} や {{domxref("ShadowRoot.setHTML()")}} などの「安全な」HTML セッターで無害化オブジェクトを使用している場合、無害化オブジェクトを安全にするためにこのメソッドを呼び出す必要はありません。
これらのセッターで使用すると、渡された `Sanitizer` インスタンスを変更せずに、同じ要素と属性が入力から除去されます。

## 例

### 基本的な使い方

次のコードは、`removeUnsafe()` の使用方法を示します。

```js
// 無害化オブジェクトを作成
const sanitizer = new Sanitizer(/* Some configuration */);

// 構成を XSS に対して安全にする
sanitizer.removeUnsafe();
```

### 無害化オブジェクトの構成を安全にする

この例では、`removeUnsafe()` を呼び出して無害化オブジェクトの構成を XSS に対して安全にする方法を示します。

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
  logElement.textContent += text;
}
```

#### JavaScript

このコードはまず、安全な {{htmlelement("p")}} 要素、XSS に対して安全でない {{htmlelement("script")}} 要素と {{htmlelement("iframe")}} 要素、および XSS に対して安全でない `onwebkitanimationend` イベントハンドラー属性を許可する新しい `Sanitizer` オブジェクトを作成します。

次に、無害化オブジェクトで `removeUnsafe()` を呼び出し、その構成をログに出力します。

```js hidden
if ("Sanitizer" in window) {
```

```js
// 許可する無害化オブジェクトを作成
const sanitizer = new Sanitizer({
  elements: ["p", "script"],
  attributes: ["onwebkitanimationend"],
  replaceWithChildrenElements: ["iframe"],
});

// 無害化オブジェクトを安全にする
sanitizer.removeUnsafe();

// 無害化オブジェクトの構成をログ出力
const sanitizerConfig = sanitizer.get();
log(JSON.stringify(sanitizerConfig, null, 2));
```

```js hidden
} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
}
```

#### 結果

結果として得られた構成を以下に示します。
XSS に対して安全でない要素と属性が「許可」リストから対応する「除去」リストに移されていることに注目してください。
この場合、許可された要素には {{htmlelement("p")}} が残っているため、無害化オブジェクトの使用時に入力から取り込まれるのは `<p>` 要素だけです。

{{EmbedLiveSample("Making a sanitizer configuration safe","100","480px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
