---
title: VideoTrackList.onremovetrack
slug: conflicting/Web/API/VideoTrackList/removetrack_event
tags:
  - API
  - Event Handler
  - HTML DOM
  - Media
  - Property
  - Reference
  - Removing Tracks
  - Removing Video Tracks
  - Video
  - VideoTrackList
  - onremovetrack
  - remove
  - removeTrack
  - track
translation_of: Web/API/VideoTrackList/onremovetrack
original_slug: Web/API/VideoTrackList/onremovetrack
---
{{APIRef("HTML DOM")}}

**{{domxref("VideoTrackList")}}** の **`onremovetrack`** イベントハンドラは、{{event("removetrack")}} イベントが発生したときに呼び出され、動画トラックがメディア要素から、つまり `VideoTrackList` からも取り除かれたことを示します。

イベントは {{domxref("TrackEvent")}} オブジェクトの形式でイベントハンドラに渡されます。 その {{domxref("TrackEvent.track", "track")}} プロパティは、メディア要素の `VideoTrackList` から取り除かれたトラックを識別します。

> **Note:** **注**: {{domxref("EventTarget.addEventListener", "addEventListener()")}} を使用して、`removetrack` イベント用のハンドラを追加することもできます。

## 構文

```
VideoTrackList.onremovetrack = eventHandler;
```

### 値

`onremovetrack` は、{{domxref("TrackEvent.track", "track")}} プロパティでどの動画トラックがメディア要素から取り除かれたかを示す {{domxref("TrackEvent")}} オブジェクトを入力として受け取る関数を設定します。

## 例

この単純な例では、トラックがメディア要素から取り除かれるたびに、メディア要素内の現在の動画トラック数を取得するだけです。

```js
document.querySelector("my-video").videoTracks.onremovetrack = function(event) {
  myTrackCount = document.querySelector("my-video").videoTracks.length;
};
```

メディア要素に残っている現在の動画トラック数は、`VideoTrackList` の {{domxref("VideoTrackList.length", "length")}} プロパティから取得します。

## 仕様

| 仕様                                                                                                                             | 状態                             | コメント |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', '#handler-tracklist-onremovetrack', 'VideoTrackList: onremovetrack')}} | {{Spec2('HTML WHATWG')}} |          |

## ブラウザーの互換性

{{Compat("api.VideoTrackList.onremovetrack")}}
