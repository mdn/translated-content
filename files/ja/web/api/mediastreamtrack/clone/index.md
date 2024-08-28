---
title: "MediaStreamTrack: clone() メソッド"
short-title: clone()
slug: Web/API/MediaStreamTrack/clone
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Media Capture and Streams")}}

**`clone()`** は {{domxref("MediaStreamTrack")}} インターフェイスのメソッドで、`MediaStreamTrack` の複製を作成します。この新しい `MediaStreamTrack` オブジェクトは、固有の {{domxref("MediaStreamTrack.id", "id")}} 以外は同じです。

## 構文

```js-nolint
clone()
```

### 引数

なし。

### 返値

新しい {{domxref("MediaStreamTrack")}} インスタンスで、`clone()` が呼び出されたのと同じですが、新しい固有の {{domxref("MediaStreamTrack.id", "id")}} を持つものです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
