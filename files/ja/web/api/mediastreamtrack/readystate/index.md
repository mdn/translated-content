---
title: "MediaStreamTrack: readyState プロパティ"
short-title: readyState
slug: Web/API/MediaStreamTrack/readyState
l10n:
  sourceCommit: ac67e6f05d337e52e39f02a978b8c00bc43d583b
---

{{APIRef("Media Capture and Streams")}}

**`readyState`** は {{domxref("MediaStreamTrack")}} インターフェイスの読み取り専用のプロパティであり、トラックの状態を表す列挙値を返します。

## 値

以下の値の何れかを取ります。

- `"live"` は、入力が接続され、リアルタイムなデータがベストエフォートで提供されている状態を示します。この状態では、データの出力は、 {{domxref("MediaStreamTrack.enabled")}} プロパティを用いて、オン/オフを切り替えることができます。
- `"ended"` は、入力がこれ以上データを提供せず、新しいデータも提供しないことを示します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [メディアキャプチャとストリーム API](/ja/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/ja/docs/Web/API/WebRTC_API)
- {{domxref("MediaStreamTrack.ended_event", "ended")}} イベント
