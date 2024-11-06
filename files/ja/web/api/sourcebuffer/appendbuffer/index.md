---
title: SourceBuffer.appendBuffer()
slug: Web/API/SourceBuffer/appendBuffer
l10n:
  sourceCommit: 16e398809d62247dbadc89ff4024a0ffa4781f0e
---

{{APIRef("Media Source Extensions")}}

**`appendBuffer()`** は {{domxref("SourceBuffer")}} インターフェイスのメソッドで、{{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}}、{{jsxref("DataView")}} のいずれかのオブジェクトからのメディアセグメントデータを `SourceBuffer` に追加します。

## 構文

```js-nolint
appendBuffer(source)
```

### 引数

- `source`
  - : {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}}、{{jsxref("DataView")}} のいずれかのオブジェクトで、 `SourceBuffer` に追加するメディアセグメントデータが入ったもの。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

なし。

## 例

TBD.

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
