---
title: MediaSource.removeSourceBuffer()
slug: Web/API/MediaSource/removeSourceBuffer
---

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

{{domxref("MediaSource")}} インターフェイスの **`removeSourceBuffer()`** メソッドは、この `MediaSource` オブジェクトに関連付けられた {{domxref("SourceBuffers")}} リストから指定された {{domxref("SourceBuffer")}} を削除します。

## 構文

```
mediaSource.removeSourceBuffer(sourceBuffer);
```

### パラメーター

- sourceBuffer
  - : 削除する {{domxref("SourceBuffer")}} オブジェクト。

### 戻り値

{{jsxref('undefined')}}

### 例外

| 例外            | 説明                                                                                 |
| --------------- | ------------------------------------------------------------------------------------ |
| `NotFoundError` | 指定された sourceBuffer は {{domxref("MediaSource.sourceBuffers")}} に存在しません。 |

## 例

```js
for (i = 0; i < 10; i++) {
  var sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
}

mediaSource.removeSourceBuffer(mediaSource.sourceBuffers[0]);
```

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.MediaSource.removeSourceBuffer")}}

## 関連情報

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}
