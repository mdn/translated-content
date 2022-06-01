---
title: MediaStream.getTrackById()
slug: Web/API/MediaStream/getTrackById
tags:
  - Media
  - MediaStream
  - メディアストリーム API
  - メソッド
  - リファレンス
  - WebRTC
  - getTrackById
browser-compat: api.MediaStream.getTrackById
translation_of: Web/API/MediaStream/getTrackById
---
{{APIRef("Media Capture and Streams")}}

**`MediaStream.getTrackById()`** メソッドは、指定された ID 文字列を持つトラックを表現する {{domxref("MediaStreamTrack")}} オブジェクトを返します。指定した ID を持つトラックが存在しない場合は、 `null` を返します。

## 構文

```js
var track = MediaStream.getTrackById(id);
```

### 引数

- `id`
  - : 取得したいトラックを識別する {{domxref("DOMString")}} です。

### 返値

引数で指定した `id` の文字列と同じ {{domxref("MediaStreamTrack.id")}} を持つトラックが見つかった場合は、その {{domxref("MediaStreamTrack")}} オブジェクトを返します。それ以外の場合は、 `null` を返します。

## 例

この例では、動画に含まれるコメンタリートラックを有効にしています。メインのオーディオトラックの音量を 50% にしてから、コメンタリートラックを有効にしています。

```js
stream.getTrackById("primary-audio-track").applyConstraints({ volume: 0.5 });
stream.getTrackById("commentary-track").enabled = true;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("MediaStream")}}
- {{domxref("MediaStreamTrack.id")}}
