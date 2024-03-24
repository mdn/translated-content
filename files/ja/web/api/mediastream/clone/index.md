---
title: "MediaStream: clone() メソッド"
short-title: clone()
slug: Web/API/MediaStream/clone
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Media Capture and Streams")}}

**`clone()`** は {{domxref("MediaStream")}} インターフェイスのメソッドで、この `MediaStream` の複製を作成します。この新しい `MediaStream` オブジェクトは、新しい固有の {{domxref("MediaStream.id", "id")}} を持ち、 MediaStream に含まれる {{domxref("MediaStreamTrack")}} もそれぞれ `clone()` を呼び出して得られたものになります。

## 構文

```js-nolint
clone()
```

### 引数

なし。

### 返値

新しい {{domxref("MediaStream")}} インスタンスを返します。このインスタンスは新しい固有の ID を持ち、 `MediaStream` に含まれるすべての {{domxref("MediaStreamTrack")}} を含みます。この {{domxref("MediaStreamTrack")}} はそれぞれ `clone()` によって呼び出されたものになります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
