---
title: "Sanitizer: removeAttribute() メソッド"
short-title: removeAttribute()
slug: Web/API/Sanitizer/removeAttribute
l10n:
  sourceCommit: db443a6062d0e858a62af2f9a3a7558335ffd2dd
---

{{APIRef("HTML Sanitizer API")}}

**`removeAttribute()`** メソッドは、{{domxref("Sanitizer")}} インターフェイスのメソッドで、無害化オブジェクトの使用時に、すべての要素から属性を除去するよう設定します。

このメソッドは、[許可設定](/ja/docs/Web/API/HTML_Sanitizer_API#許可設定)または[除去設定](/ja/docs/Web/API/HTML_Sanitizer_API#除去設定)のいずれかで使用できます。
除去設定で使用した場合、指定した属性が `removeAttributes` 配列に追加されます。
許可設定で使用した場合、その属性が（存在すれば）`attributes` 配列から除去されます。

特定の要素でのみ属性を許可または禁止するには、{{domxref('Sanitizer.allowElement()')}} を使用してください。

## 構文

```js-nolint
removeAttribute(attribute)
```

### 引数

- `attribute`
  - : 要素で全体的に禁止する属性名を示す文字列、または次のプロパティを持つオブジェクトです。
    - `name`
      - : 属性名を含む文字列です。
    - `namespace` {{optional_inline}}
      - : 属性の名前空間を含む文字列です。デフォルトは `null` です。

### 返値

操作によって属性を禁止するよう構成が変更された場合は `true` を返し、属性がすでに禁止されていた場合は `false` を返します。

内部構成が次のいずれかの場合、`false` が返されることがあります。

- 指定した属性をすでに含む [`removeAttributes`](/ja/docs/Web/API/SanitizerConfig#removeattributes) 配列を定義している（そのため、すでに除去される）
- 代わりに、その属性をすでに含まない [`attributes`](/ja/docs/Web/API/SanitizerConfig#attributes) 配列を定義している（そのため、すでに禁止されている）

## 例

### 特定の属性を禁止する方法

この例では、`removeAttribute()` を使用して、要素から属性を除去するよう指定する方法を示します。

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 300px;
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

このコードはまず、属性も要素も指定しない新しい `Sanitizer` オブジェクトを作成します。
次に、`title` 属性と `mathcolor` 属性を指定して `removeAttribute()` を呼び出します。

```js hidden
if ("Sanitizer" in window) {
```

```js
// 許可する無害化オブジェクトを作成
const sanitizer = new Sanitizer({
  removeAttributes: [],
});

// title 属性を除去
sanitizer.removeAttribute("title");
// mathcolor 属性を除去
sanitizer.removeAttribute("mathcolor");

// 無害化オブジェクトの構成をログ出力
let sanitizerConfig = sanitizer.get();
log(JSON.stringify(sanitizerConfig, null, 2));
```

```js hidden
} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
}
```

#### 結果

最終的な構成を以下にログ出力します。
両方の属性が [`removeAttributes`](/ja/docs/Web/API/SanitizerConfig#removeattributes_2) リストに追加されていることに注目してください（これらの属性は、無害化オブジェクトの使用時に要素に存在すれば除去されます）。

{{EmbedLiveSample("How to disallow specific attributes","100","360px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
