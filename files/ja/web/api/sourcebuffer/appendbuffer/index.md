---
title: SourceBuffer.appendBuffer()
slug: Web/API/SourceBuffer/appendBuffer
---

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

{{domxref("SourceBuffer")}} インターフェイスの **`appendBuffer()`** メソッドは、{{jsxref("ArrayBuffer")}} オブジェクトまたは `ArrayBufferView` オブジェクトからのメディアセグメントデータを `SourceBuffer` に追加します。

## 構文

```
sourceBuffer.appendBuffer(source);
```

### パラメーター

- `source`
  - : `SourceBuffer` に追加するメディアセグメントデータを含む {{domxref("BufferSource")}}（つまり、{{domxref("ArrayBufferView")}} または {{jsxref("ArrayBuffer")}}）。

### 戻り値

{{jsxref('undefined')}}。

### 例外

なし。

## 例

未定

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.SourceBuffer.appendBuffer")}}

## 関連情報

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
