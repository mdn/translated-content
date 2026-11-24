---
title: "Sanitizer: allowAttribute() メソッド"
short-title: allowAttribute()
slug: Web/API/Sanitizer/allowAttribute
l10n:
  sourceCommit: ba886c384e385689ce8feffacf4f7ce1d8c5e736
---

{{APIRef("HTML Sanitizer API")}}

**`allowAttribute()`** メソッドは、{{domxref("Sanitizer")}} インターフェイスのメソッドで、無害化オブジェクトの使用時に、すべての要素で属性を許可するよう設定します。

このメソッドは、[許可設定](/ja/docs/Web/API/HTML_Sanitizer_API#許可設定)または[除去設定](/ja/docs/Web/API/HTML_Sanitizer_API#除去設定)のいずれかで使用できます。
許可設定で使用した場合、指定した属性が `attributes` 配列に追加されます。
削除設定で使用した場合、（存在すれば）その属性が `removeAttributes` 配列から削除されます。

特定の要素でのみ属性を許可または禁止するには、{{domxref('Sanitizer.allowElement()')}} を使用してください。

## 構文

```js-nolint
allowAttribute(attribute)
```

### 引数

- `attribute`
  - : すべての要素で許可する属性名を示す文字列、または次のプロパティを持つオブジェクトです。
    - `name`
      - : 属性名を含む文字列です。
    - `namespace` {{optional_inline}}
      - : 属性の名前空間を含む文字列です。デフォルトは `null` です。

### 返値

操作によって属性を許可するよう構成が変更された場合は `true` を返し、構成ですでにその属性が許可されていた場合は `false` を返します。

内部構成が次のいずれかの場合、`false` が返されることがあります。

- [`attributes`](/ja/docs/Web/API/SanitizerConfig#attributes) 配列が定義されており、その属性がすでに含まれている（再度追加する必要がない）
- 代わりに [`removeAttributes`](/ja/docs/Web/API/SanitizerConfig#removeattributes) 配列が定義されており、指定した属性が含まれていない（そのため、すでに許可されている）
- [`dataAttributes`](/ja/docs/Web/API/SanitizerConfig#dataattributes) が `true` に設定されている状態で、`data-*` 属性が渡された

## 例

### 要素で特定の属性を許可する方法

この例では、`allowAttribute()` を使用して、要素で属性を許可する方法を示します。

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

このコードでは、最初に属性を何も許可しない新しい `Sanitizer` オブジェクトを作成します。
次に、`title` 属性と `mathcolor` 属性を指定して `allowAttribute()` を呼び出します。

```js hidden
if ("Sanitizer" in window) {
```

```js
// 許可設定の無害化オブジェクトを作成
const sanitizer = new Sanitizer({
  attributes: [],
});

// "title" 属性を許可
sanitizer.allowAttribute("title");
// "mathcolor" 属性を許可
sanitizer.allowAttribute("mathcolor");

// 無害化オブジェクトの設定を記録
let sanitizerConfig = sanitizer.get();
log(JSON.stringify(sanitizerConfig, null, 2));
```

```js hidden
} else {
  log("このブラウザーでは HTML 無害化 API に対応していません。");
}
```

#### 結果

最終的な構成を以下に記録します。
両方の属性が [`attributes`](/ja/docs/Web/API/SanitizerConfig#attributes_2) リストに追加されていることに注目してください（無害化オブジェクトの使用時、ほかの属性は要素で許可されません）。

{{EmbedLiveSample("How to allow specific attributes on elements","100","480px")}}

## 仕様書

{{Specifications}}
