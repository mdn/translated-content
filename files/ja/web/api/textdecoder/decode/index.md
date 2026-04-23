---
title: "TextDecoder: decode() メソッド"
slug: Web/API/TextDecoder/decode
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("Encoding API")}}

**`TextDecoder.decode()`** メソッドは、引数として渡されたバッファーからデコードしたテキストを含む文字列を返します。

デコードするメソッドは、現在の {{domxref("TextDecoder")}} オブジェクトで定義されます。
これには、データの予想されるエンコードや、デコードエラーの処理方法などが含まれます。

## 構文

```js-nolint
decode()
decode(buffer)
decode(buffer, options)
```

### 引数

- `buffer` {{Optional_Inline}}
  - : デコードするエンコードされたテキストが入っている、[`ArrayBuffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)、{{jsxref("TypedArray")}}、{{jsxref("DataView")}} の何れかのオブジェクトです。
- `options` {{Optional_Inline}}
  - : 以下のプロパティを持つオブジェクトです。
    - `stream`
      - : 論理値のフラグで、以後 `decode()` を呼び出す際に、追加データが続くかどうかを示します。
        データを塊で処理する場合は `true` に設定し、最後の塊、またはデータが塊でない場合は `false` に設定します。
        既定値は `false` です。

### 例外

- {{jsxref("TypeError")}}
  - : {{DOMxRef("TextDecoder.fatal")}} プロパティが `true` の場合、デコードエラーがあると発生します。

### 返値

文字列です。

## 例

この例では、ユーロ記号 € をエンコードし、デコードしています。

### HTML

```html
<p>Encoded value: <span id="encoded-value"></span></p>
<p>Decoded value: <span id="decoded-value"></span></p>
```

### JavaScript

```js
const encoder = new TextEncoder();
const array = encoder.encode("€"); // Uint8Array(3) [226, 130, 172]
document.getElementById("encoded-value").textContent = array;

const decoder = new TextDecoder();
const str = decoder.decode(array); // String "€"
document.getElementById("decoded-value").textContent = str;
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{DOMxRef("TextDecoder")}} インターフェイス。
