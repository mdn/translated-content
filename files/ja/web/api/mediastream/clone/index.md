---
title: MediaStream.clone()
slug: Web/API/MediaStream/clone
tags:
  - API
  - メディアキャプチャとストリーム API
  - メディアストリーム API
  - MediaStream
  - メソッド
  - リファレンス
  - clone
browser-compat: api.MediaStream.clone
translation_of: Web/API/MediaStream/clone
---
{{APIRef("Media Capture and Streams")}}

**`clone()`** は {{domxref("MediaStream")}} インターフェイスのメソッドで、この `MediaStream` の複製を作成します。この新しい `MediaStream` オブジェクトは、新しい固有の {{domxref("MediaStream.id", "id")}} を持ち、 MediaStream に含まれる {{domxref("MediaStreamTrack")}} もそれぞれ `clone()` を呼び出して得られたものになります。

## 構文

```js
var stream = MediaStream.clone();
```

### 引数

なし。

### 返値

新しい {{domxref("MediaStream")}} インスタンスを返します。このインスタンスは新しい固有の ID を持ち、 `MediaStream` に含まれるすべての {{domxref("MediaStreamTrack")}} を含みます。この {{domxref("MediaStreamTrack")}} はそれぞれ `clone()` によって呼び出されたものになります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
