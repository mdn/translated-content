---
title: "MediaStream: getTrackById() メソッド"
short-title: getTrackById()
slug: Web/API/MediaStream/getTrackById
l10n:
  sourceCommit: ac67e6f05d337e52e39f02a978b8c00bc43d583b
---

{{APIRef("Media Capture and Streams")}}

**`getTrackById()`** は {{domxref("MediaStream")}} インターフェイスのメソッドで、指定された ID 文字列を持つトラックを表現する {{domxref("MediaStreamTrack")}} オブジェクトを返します。指定した ID を持つトラックが存在しない場合は、 `null` を返します。

## 構文

```js-nolint
getTrackById(id)
```

### 引数

- `id`
  - : 取得したいトラックを識別する文字列です。

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
