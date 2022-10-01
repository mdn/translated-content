---
title: Blob()
slug: Web/API/Blob/Blob
---

{{APIRef("File API")}}

**`Blob()`** コンストラクターは、新たな {{domxref("Blob")}} オブジェクトを返します。その blob の中身は、引数 `array` で与えられた値を連結したものから構成されています。

## 構文

```
var newBlob = new Blob(array, options);
```

### 引数

- `array`
  - : {{jsxref("Array")}} で、その中身が {{jsxref("ArrayBuffer")}}, {{domxref("ArrayBufferView")}}, {{domxref("Blob")}}, {{domxref("USVString")}} のオブジェクト、またはそのようなオブジェクトの何れかが混合したもので、それが {{domxref("Blob")}} の中に入れられます。 `USVString` オブジェクトは UTF-8 で符号化されたものです。
- `options` {{optional_inline}}

  - : 任意で、以下のプロパティを指定する {{domxref("BlobPropertyBag")}} オブジェクトです。

    - `type` {{optional_inline}}
      - : blob に格納されるデータの {{Glossary("MIME type", "MIME タイプ")}} です。既定値は空文字列 (`""`) です。
    - `endings` {{optional_inline}} {{non-standard_inline}}
      - : データがテキストの場合、コンテンツ内の改行文字 (`\n`) の解釈方法を示します。既定値は `transparent` であり、改行文字を変換することなく blob に格納します。改行文字をホストシステムの慣行に合わせるには、`endings` を指定してください。

### 返値

指定されたデータを含む {{domxref("Blob")}} オブジェクトです。

## 例

```js
var aFileParts = ['<a id="a"><b id="b">hey!</b></a>']; // 単一の DOMString からなる配列
var oMyBlob = new Blob(aFileParts, {type : 'text/html'}); // blob
```

## 仕様

| 仕様書                                                                   | 状態                         | 備考     |
| ------------------------------------------------------------------------ | ---------------------------- | -------- |
| {{SpecName('File API', '#constructorBlob', 'Blob()')}} | {{Spec2('File API')}} | 初回定義 |

## ブラウザの互換性

{{Compat("api.Blob.Blob")}}

## あわせて参照

- このコンストラクターによって置き換えられた非推奨の {{domxref("BlobBuilder")}} インターフェイス
