---
title: SourceBuffer.audioTracks
slug: Web/API/SourceBuffer/audioTracks
---

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

{{domxref("SourceBuffer")}} インターフェイスの **`audioTracks`** 読み取り専用プロパティは、`SourceBuffer` 内に現在含まれている音声トラックのリストを返します。

## 構文

```
var myAudioTracks = sourceBuffer.audioTracks;
```

### 値

{{domxref("AudioTrackList")}} オブジェクト。

## 例

未定

## 仕様

| 仕様                                                                                                                     | 状態                                             | コメント |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ | -------- |
| {{SpecName('Media Source Extensions', '#idl-def-sourcebuffer-audiotracks', 'audioTracks')}} | {{Spec2('Media Source Extensions')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.SourceBuffer.audioTracks")}}

## 関連情報

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
