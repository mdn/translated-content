---
title: "MediaSource: removeSourceBuffer() メソッド"
short-title: removeSourceBuffer()
slug: Web/API/MediaSource/removeSourceBuffer
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Media Source Extensions")}}

**`removeSourceBuffer()`** は {{domxref("MediaSource")}} インターフェイスのメソッドで、指定された {{domxref("SourceBuffer")}} をこの `MediaSource` オブジェクトに関連付けられた {{domxref("SourceBufferList")}} リストから削除します。

## 構文

```js-nolint
removeSourceBuffer(sourceBuffer)
```

### 引数

- `sourceBuffer`
  - : 削除する {{domxref("SourceBuffer")}} オブジェクト。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `NotFoundError` {{domxref("DOMException")}}
  - : 指定された sourceBuffer が {{domxref("MediaSource.sourceBuffers")}} に存在しない場合に発生します。

## 例

```js
for (let i = 0; i < 10; i++) {
  const sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
}

mediaSource.removeSourceBuffer(mediaSource.sourceBuffers[0]);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}
