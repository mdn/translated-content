---
title: HTMLMediaElement.seekable
slug: Web/API/HTMLMediaElement/seekable
l10n:
  sourceCommit: 277e5969c63b97cfb55ab4a0e612e8040810f49b
---

{{APIRef("HTML DOM")}}

**`seekable`** は {{domxref("HTMLMediaElement")}} オブジェクトの読み取り専用プロパティで、新しい静的な[正規化された `TimeRanges` オブジェクト](/ja/docs/Web/API/TimeRanges#normalized_timeranges_objects)を返します。これは `seekable` プロパティがアクセスされた時点でユーザーエージェントがシーク可能なメディアリソースがあれば、その範囲を表します。

## 値

新しい静的な[正規化された `TimeRanges` オブジェクト](/ja/docs/Web/API/TimeRanges#normalized_timeranges_objects)を返します。これは `seekable` プロパティがアクセスされた時点でユーザーエージェントがシーク可能なメディアリソースがあれば、その範囲を表します。

## 例

```js
const video = document.querySelector("video");
const timeRangesObject = video.seekable;
const timeRanges = [];
// オブジェクトを走査し、配列へ出力
for (let count = 0; count < timeRangesObject.length; count++) {
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
