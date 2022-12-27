---
title: VideoTrack.id
slug: Web/API/VideoTrack/id
---

{{APIRef("HTML DOM")}}

**`id`** プロパティは、**{{domxref("VideoTrack")}}** によって表されるトラックを一意に識別する文字列を含みます。 この ID を {{domxref("VideoTrackList.getTrackById()")}} メソッドと共に使用して、メディア要素に関連付けられたメディア内の特定のトラックを見つけることができます。

トラック ID は、特定のトラックをロードする URL のフラグメントとしても使用できます（メディアがメディアフラグメントをサポートしている場合）。

## 構文

```
var trackID = VideoTrack.id;
```

### 値

トラックを識別する {{domxref("DOMString")}}。メディア要素の {{domxref("HTMLMediaElement.videoTracks", "videoTracks")}} プロパティで指定されたものなどの {{domxref("VideoTrackList")}} で {{domxref("VideoTrackList.getTrackById", "getTrackById()")}} を呼び出すときに使用するのに適しています。

## 仕様

| 仕様                                                                                     | 状態                             | コメント |
| ---------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', '#dom-videotrack-id', 'VideoTrack: id')}} | {{Spec2('HTML WHATWG')}} |          |

## ブラウザーの互換性

{{Compat("api.VideoTrack.id")}}
