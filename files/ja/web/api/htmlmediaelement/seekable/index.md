---
title: HTMLMediaElement.seekable
slug: Web/API/HTMLMediaElement/seekable
---

{{APIRef("HTML DOM")}}

**`seekable`** は {{domxref("HTMLMediaElement")}} オブジェクトの読み取り専用プロパティで、新しい静的な[正規化された `TimeRanges` オブジェクト](/ja/docs/Web/API/TimeRanges#normalized_timeranges_objects)を返します。これは `seekable` プロパティがアクセスされた時点でユーザーエージェントがシーク可能なメディアリソースがあれば、その範囲を表します。

## 値

新しい静的な[正規化された `TimeRanges` オブジェクト](/ja/docs/Web/API/TimeRanges#normalized_timeranges_objects)を返します。これは `seekable` プロパティがアクセスされた時点でユーザーエージェントがシーク可能なメディアリソースがあれば、その範囲を表します。

## 例

```html
var video = document.querySelector("video");
var timeRangesObject = video.seekable;
var timeRanges = [];
// オブジェクトを走査し、配列に出力する
for (let count = 0; count < timeRangesObject.length; count ++) {
    timeRanges.push([timeRangesObject.start(count), timeRangesObject.end(count)]);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 定義している {{domxref("HTMLMediaElement")}} インターフェイス
- [メディアソース拡張 API](/ja/docs/Web/API/Media_Source_Extensions_API)
- [メディアのバッファリング、シーク、時間の範囲](/ja/docs/Web/Guide/Audio_and_video_delivery/buffering_seeking_time_ranges)
