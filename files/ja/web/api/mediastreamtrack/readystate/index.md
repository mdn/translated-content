---
title: MediaStreamTrack.readyState
slug: Web/API/MediaStreamTrack/readyState
---

{{APIRef("Media Capture and Streams")}}

**`MediaStreamTrack.readyState`** は読み取り専用のプロパティであり、トラックの状態を表す列挙値を返します。

## 値

以下の値の何れかを取ります。

- `"live"` は、入力が接続され、リアルタイムなデータがベストエフォートで提供されている状態を示します。この状態では、データの出力は、 {{domxref("MediaStreamTrack.enabled")}} プロパティを用いて、オン/オフを切り替えることができます。
- `"ended"` は、入力がこれ以上データを提供せず、新しいデータも提供しないことを示します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Media Stream API](/ja/docs/Web/API/Media_Streams_API)
- [WebRTC](/ja/docs/Web/API/WebRTC_API)
- {{domxref("MediaStreamTrack.ended_event", "ended")}} イベント
