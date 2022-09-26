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

| 仕様                                                                                                                                             | 状態                                             | コメント |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ | -------- |
| {{SpecName('Media Source Extensions', '#idl-def-sourcebuffer-appendbuffer(buffersource)', 'appendBuffer()')}} | {{Spec2('Media Source Extensions')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.SourceBuffer.appendBuffer")}}

## 関連情報

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
