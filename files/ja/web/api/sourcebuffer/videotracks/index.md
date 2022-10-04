---
title: SourceBuffer.videoTracks
slug: Web/API/SourceBuffer/videoTracks
---

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

{{domxref("SourceBuffer")}} インターフェイスの **`videoTracks`** 読み取り専用プロパティは、現在 `SourceBuffer` 内に含まれている動画トラックのリストを返します。

## 構文

```
var myVideoTracks = sourceBuffer.videoTracks;
```

### 値

{{domxref("VideoTrackList")}} オブジェクト。

## 例

未定

## 仕様

| 仕様                                                                                                                     | 状態                                             | コメント |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ | -------- |
| {{SpecName('Media Source Extensions', '#idl-def-sourcebuffer-videotracks', 'videoTracks')}} | {{Spec2('Media Source Extensions')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.SourceBuffer.videoTracks")}}

## 関連情報

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
