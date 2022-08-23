---
title: AudioTrackList.onaddtrack
slug: conflicting/Web/API/AudioTrackList/addtrack_event
tags:
  - API
  - Adding Audio Tracks
  - Adding Tracks
  - Audio
  - AudioTrackList
  - Event Handler
  - HTML DOM
  - Media
  - Property
  - Reference
  - addTrack
  - onaddtrack
  - track
translation_of: Web/API/AudioTrackList/onaddtrack
original_slug: Web/API/AudioTrackList/onaddtrack
---
{{APIRef("HTML DOM")}}

**{{domxref("AudioTrackList")}}** の **`onaddtrack`** プロパティは、{{event("addtrack")}} イベントが発生したときに呼び出されるイベントハンドラで、`AudioTrackList` が表す音声トラックを持つメディア要素に新しい音声トラックが追加されたことを示します。

イベントは {{domxref("TrackEvent")}} オブジェクトの形でイベントハンドラに渡され、その {{domxref("TrackEvent.track", "track")}} プロパティは新しく追加されたトラックを識別します。

> **Note:** **注**: {{domxref("EventTarget.addEventListener", "addEventListener()")}} を使用して、`addtrack` イベント用のハンドラを追加することもできます。

## 構文

```
AudioTrackList.onaddtrack = eventHandler;
```

### 値

`onaddtrack` は、 {{domxref("TrackEvent.track", "track")}} プロパティでどの音声トラックがメディアに追加されたかを示す {{domxref("TrackEvent")}} オブジェクトを入力として受け取る関数を設定します。

## 使用上の注意

{{event("addtrack")}} イベントは、音声トラックを `AudioTrackList` オブジェクトで表すメディア要素に新しいトラックが追加されるたびに呼び出されます。 これは、メディアが最初に要素に添付されたときにトラックが要素に追加されたときに発生します。 メディアリソース内の音声トラックごとに 1 つの `addtrack` イベントが発生します。

## 例

このスニペットは、新しく追加されたトラックを表す {{domxref("AudioTrack")}} オブジェクトを渡して、`addToTrackList()` 関数を呼び出す {{event("addtrack")}} イベントのハンドラを確立します。 このシナリオでは、その関数の役割は、選択可能な音声トラックのリストに新しいトラックを追加することです。

```js
document.querySelector("video").audioTracks.onaddtrack = function(event) {
  addToTrackList(event.track);
};
```

## 仕様

| 仕様                                                                                                                                                 | 状態                             | コメント |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', '#handler-tracklist-onaddtrack', 'AudioTrackList.onaddtrack')}}                             | {{Spec2('HTML WHATWG')}} |          |
| {{SpecName('HTML5 W3C', 'embedded-content-0.html#dom-audiotracklist-onaddtrack', 'AudioTrackList.onaddtrack')}} | {{Spec2('HTML5 W3C')}}     |          |

## ブラウザーの互換性

{{Compat("api.AudioTrackList.onaddtrack")}}
