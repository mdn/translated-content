---
title: VideoTrackList.onaddtrack
slug: conflicting/Web/API/VideoTrackList/addtrack_event
tags:
  - API
  - Adding Tracks
  - Adding Video Tracks
  - Event Handler
  - HTML DOM
  - Media
  - Property
  - Reference
  - Video
  - VideoTrackList
  - addTrack
  - onaddtrack
  - track
translation_of: Web/API/VideoTrackList/onaddtrack
original_slug: Web/API/VideoTrackList/onaddtrack
---
{{APIRef("HTML DOM")}}

**{{domxref("VideoTrackList")}}** の **`onaddtrack`** プロパティは、{{event("addtrack")}} イベントが発生したときに呼び出されるイベントハンドラで、`VideoTrackList` が表す動画トラックを持つメディア要素に新しい動画トラックが追加されたことを示します。

イベントは {{domxref("TrackEvent")}} オブジェクトの形式でイベントハンドラに渡され、その {{domxref("TrackEvent.track", "track")}} プロパティは新しく追加されたトラックを識別します。

> **Note:** **注**: {{domxref("EventTarget.addEventListener", "addEventListener()")}} を使用して、`addtrack` イベント用のハンドラを追加することもできます。

## 構文

```
VideoTrackList.onaddtrack = eventHandler;
```

### 値

`onaddtrack` は、 {{domxref("TrackEvent.track", "track")}} プロパティでどの動画トラックがメディアに追加されたかを示す {{domxref("TrackEvent")}} オブジェクトを入力として受け取る関数を設定します。

## 使用上の注意

{{event("addtrack")}} イベントは、動画トラックを `VideoTrackList` オブジェクトで表すメディア要素に新しいトラックが追加されるたびに呼び出されます。 これは、メディアが最初に要素に添付されたときにトラックが要素に追加されたときに発生します。 メディアリソース内の動画トラックごとに 1 つの `addtrack` イベントが発生します。

## 例

このスニペットは、新しく追加されたトラックを表す {{domxref("VideoTrack")}} オブジェクトを渡して、`addToTrackList()` 関数を呼び出す {{event("addtrack")}} イベントのハンドラを確立します。 このシナリオでは、その関数の役割は、選択可能な動画トラックのリストに新しいトラックを追加することです。

```js
document.querySelector("video").videoTracks.onaddtrack = function(event) {
  addToTrackList(event.track);
};
```

## 仕様

| 仕様                                                                                                                     | 状態                             | コメント |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', '#handler-tracklist-onaddtrack', 'VideoTrackList: onaddtrack')}} | {{Spec2('HTML WHATWG')}} |          |

## ブラウザーの互換性

{{Compat("api.VideoTrackList.onaddtrack")}}
