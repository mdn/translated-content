---
title: AudioTrackList.onremovetrack
slug: conflicting/Web/API/AudioTrackList/removetrack_event
tags:
  - API
  - Audio
  - AudioTrackList
  - Event Handler
  - HTML DOM
  - Media
  - Property
  - Reference
  - Removing Audio Tracks
  - Removing Tracks
  - onremovetrack
  - remove
  - removeTrack
  - track
translation_of: Web/API/AudioTrackList/onremovetrack
original_slug: Web/API/AudioTrackList/onremovetrack
---
{{APIRef("HTML DOM")}}

**{{domxref("AudioTrackList")}}** の **`onremovetrack`** イベントハンドラは、{{event("removetrack")}} イベントが発生したときに呼び出され、音声トラックがメディア要素から、したがって `AudioTrackList` からも取り除かれたことを示します。

イベントは {{domxref("TrackEvent")}} オブジェクトの形式でイベントハンドラに渡されます。 その {{domxref("TrackEvent.track", "track")}} プロパティは、メディア要素の `AudioTrackList` から取り除かれたトラックを識別します。

> **Note:** **注**: {{domxref("EventTarget.addEventListener", "addEventListener()")}} を使用して、`removetrack` イベント用のハンドラを追加することもできます。

## 構文

```
AudioTrackList.onremovetrack = eventHandler;
```

### 値

`onremovetrack` は、{{domxref("TrackEvent.track", "track")}} プロパティでどの音声トラックがメディア要素から取り除かれたかを示す {{domxref("TrackEvent")}} オブジェクトを入力として受け取る関数を設定します。

## 例

この単純な例は、トラックがメディア要素から取り除かれるたびに、メディア要素内の現在の音声トラック数を取得するだけです。

```js
document.querySelector("my-video").audioTracks.onremovetrack = function(event) {
  myTrackCount = document.querySelector("my-video").audioTracks.length;
};
```

メディア要素に残っている現在の音声トラック数は、`AudioTrackList` の {{domxref("AudioTrackList.length", "length")}} プロパティから取得します。

## 仕様

| 仕様                                                                                                                                                         | 状態                             | コメント |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', '#handler-tracklist-onremovetrack', 'AudioTrackList.onremovetrack')}}                             | {{Spec2('HTML WHATWG')}} |          |
| {{SpecName('HTML5 W3C', 'embedded-content-0.html#dom-audiotracklist-onremovetrack', 'AudioTrackList.onremovetrack')}} | {{Spec2('HTML5 W3C')}}     |          |

## ブラウザーの互換性

{{Compat("api.AudioTrackList.onremovetrack")}}
