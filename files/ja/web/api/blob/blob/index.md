---
title: "Blob: Blob() コンストラクター"
short-title: Blob()
slug: Web/API/Blob/Blob
l10n:
  sourceCommit: 94df34126960a2f1bd3032c6e2cf203d67b912d8
---

{{APIRef("File API")}}{{AvailableInWorkers}}

**`Blob()`** コンストラクターは、新たな {{domxref("Blob")}} オブジェクトを返します。その blob の中身は、引数 `blobParts` で与えられた値を連結したものから構成されています。

## 構文

```js-nolint
new Blob(blobParts)
new Blob(blobParts, options)
```

### 引数

- `blobParts` {{optional_inline}}

  - : [反復可能](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)オブジェクト、例えば {{jsxref("Array")}} などです。その中身が {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}}、{{jsxref("DataView")}}、{{domxref("Blob")}}、文字列などのオブジェクト、またはそのようなオブジェクトの何れかが混合したもので、それが {{domxref("Blob")}} の中に入れられます。
    文字列は正規化された Unicode でなければならず、孤立サロゲートは {{jsxref("String.prototype.toWellFormed()")}} と同じアルゴリズムを使用して無害化されます。

- `options` {{optional_inline}}
  - : 以下のいずれかのプロパティを指定することができるオブジェクトです。
    - `type` {{optional_inline}}
      - : blob に格納されるデータの {{Glossary("MIME type", "MIME タイプ")}}です。既定値は空文字列 (`""`) です。
    - `endings` {{optional_inline}}
      - : データがテキストの場合、コンテンツ内の改行文字 (`\n`) の解釈方法を示します。既定値は `transparent` であり、改行文字を変換することなく blob に格納します。改行文字をホストシステムの慣行に合わせるには、 `native` を指定してください。

### 返値

指定されたデータを含む {{domxref("Blob")}} オブジェクトです。

## 例

```js
const blobParts = ['<q id="a"><span id="b">hey!</span></q>']; // 単一の文字列からなる配列
const blob = new Blob(blobParts, { type: "text/html" }); // blob
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
