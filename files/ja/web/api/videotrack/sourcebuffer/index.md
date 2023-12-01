---
title: "VideoTrack: sourceBuffer プロパティ"
short-title: sourceBuffer
slug: Web/API/VideoTrack/sourceBuffer
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("HTML DOM")}}

**{{domxref("VideoTrack")}}** の **`sourceBuffer`** プロパティは読み取り専用で、トラックを作成した {{domxref("SourceBuffer")}} を返します。 トラックが {{domxref("SourceBuffer")}} によって作成されなかった場合、または {{domxref("SourceBuffer")}} がその親メディアソースの {{domxref("MediaSource.sourceBuffers")}} 属性から取り除かれた場合は null を返します。

### 値

{{domxref("SourceBuffer")}} または null です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
