---
title: SourceBuffer.appendBufferAsync()
slug: Web/API/SourceBuffer/appendBufferAsync
l10n:
  sourceCommit: 16e398809d62247dbadc89ff4024a0ffa4781f0e
---

{{APIRef("Media Source Extensions")}}{{Non-standard_Header}}{{SeeCompatTable}}

**`appendBufferAsync()`** は {{domxref("SourceBuffer")}} インターフェイスのメソッドで、{{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}}、{{jsxref("DataView")}} のいずれかのオブジェクトから `SourceBuffer` にメディアセグメントデータを非同期的に追加するプロセスを開始します。 バッファーが追加されると履行される {{jsxref("Promise")}} を返します。

## 構文

```js-nolint
appendBufferAsync(source)
```

### 引数

- `source`
  - : {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}}、{{jsxref("DataView")}} のいずれかのオブジェクトで、 `SourceBuffer` に追加するメディアセグメントデータが入ったもの。

### 返値

バッファーが `SourceBuffer` に正常に追加されたときに履行される {{jsxref("Promise")}}、または要求を開始できなかった場合は `null`。

## 例

この単純化された非同期関数の例 `fillSourceBuffer()` は、入力引数 `buffer` として{{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}}、{{jsxref("DataView")}} のいずれかのオブジェクトと、そのバッファーからソースメディアを追加する `SourceBuffer` を受け取ります。

```js
async function fillSourceBuffer(buffer, msBuffer) {
  try {
    while (true) {
      await msBuffer.appendBufferAsync(buffer);
    }
  } catch (e) {
    handleException(e);
  }
}
```

## 仕様書

この機能は、どの仕様にも属しません。標準化の予定もありません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [メディアソース拡張 API](/ja/docs/Web/API/Media_Source_Extensions_API)
- {{domxref("SourceBuffer.appendBuffer()")}}
- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
