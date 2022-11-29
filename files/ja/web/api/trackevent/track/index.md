---
title: TrackEvent.track
slug: Web/API/TrackEvent/track
---

{{APIRef("HTML DOM")}}

{{domxref("TrackEvent")}} インターフェイスの読み取り専用の **`track`** プロパティは、イベントが適用されるメディアトラックオブジェクトを指定します。 これは {{domxref("AudioTrack")}}、{{domxref("VideoTrack")}}、または {{domxref("TextTrack")}} のオブジェクトになります。

## 構文

```
track = TrackEvent.track;
```

### 値

トラックで表されるメディアの種類に応じて、{{domxref("AudioTrack")}}、{{domxref("VideoTrack")}}、または {{domxref("TextTrack")}} のいずれかの種類のオブジェクトです。 これは、イベントが適用されるトラックを識別します。

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.TrackEvent.track")}}
