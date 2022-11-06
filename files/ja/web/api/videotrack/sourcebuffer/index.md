---
title: VideoTrack.sourceBuffer
slug: Web/API/VideoTrack/sourceBuffer
---

{{APIRef("HTML DOM")}}

読み取り専用の **{{domxref("VideoTrack")}}** の **`sourceBuffer`** プロパティは、トラックを作成した {{domxref("SourceBuffer")}} を返します。 トラックが {{domxref("SourceBuffer")}} によって作成されなかった場合、または {{domxref("SourceBuffer")}} がその親メディアソースの {{domxref("MediaSource.sourceBuffers")}} 属性から取り除かれた場合は null を返します。

## 構文

```
var sourceBuffer = VideoTrack.sourceBuffer;
```

### 値

{{domxref("SourceBuffer")}} または null。

## 仕様

| 仕様                                                                                                                                 | 状態                                             | コメント |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ | -------- |
| {{SpecName('Media Source Extensions', '#dom-videotrack-sourcebuffer', 'VideoTrack: sourceBuffer')}} | {{Spec2('Media Source Extensions')}} |          |

## ブラウザーの互換性

{{Compat("api.VideoTrack.sourceBuffer")}}
