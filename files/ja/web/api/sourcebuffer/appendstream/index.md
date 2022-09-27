---
title: SourceBuffer.appendStream()
slug: Web/API/SourceBuffer/appendStream
---

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

{{domxref("SourceBuffer")}} インターフェイスの **`appendStream()`** メソッドは、`ReadableStream` オブジェクトから `SourceBuffer` にメディアセグメントデータを追加します。

## 構文

```
sourceBuffer.appendStream(stream, maxSize);
```

### パラメーター

- stream
  - : `SourceBuffer` に追加するメディアセグメントデータのソースである {{domxref("ReadableStream")}}。
- maxSize
  - : この操作で追加できる最大バイト数を示す unsigned long 値。

### 戻り値

{{jsxref('undefined')}}。

### 例外

なし。

## 例

未定

## 仕様

| 仕様                                                                                                                                                                                                 | 状態                                             | コメント |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------- |
| {{SpecName('Media Source Extensions', '#widl-SourceBuffer-appendStream-void-ReadableStream-stream-unsigned-long-long-maxSize', 'appendStream()')}} | {{Spec2('Media Source Extensions')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.SourceBuffer.appendStream")}}

## 関連情報

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
