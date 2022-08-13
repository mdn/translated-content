---
title: 'AudioTrackList: addtrack イベント'
slug: Web/API/AudioTrackList/addtrack_event
tags:
  - Audio​Track​List
  - Event
  - addTrack
  - events
translation_of: Web/API/AudioTrackList/addtrack_event
---
{{APIRef}}

`addtrack` イベントは、トラックが {{domxref("AudioTrackList")}} に追加されたときに発生します。

| バブリング                 | なし                                                       |
| -------------------------- | ---------------------------------------------------------- |
| キャンセル                 | 不可                                                       |
| インターフェイス           | {{domxref("TrackEvent")}}                           |
| イベントハンドラプロパティ | [`onaddtrack`](/ja/docs/Web/API/AudioTrackList/onaddtrack) |

## 例

`AddEventListener()` を使用する場合

```js
const videoElement = document.querySelector('video');

videoElement.audioTracks.addEventListener('addtrack', (event) => {
  console.log(`Audio track: ${event.track.label} added`);
});
```

`onaddtrack` イベントハンドラプロパティを使用する場合

```js
const videoElement = document.querySelector('video');

videoElement.audioTracks.onaddtrack = (event) => {
  console.log(`Audio track: ${event.track.label} added`);
};
```

## 仕様

| 仕様                                                                                                 | 状態                             |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- |
| {{SpecName('HTML WHATWG', 'media.html#event-media-addtrack', 'addtrack')}} | {{Spec2('HTML WHATWG')}} |

## ブラウザーの互換性

{{Compat("api.AudioTrackList.addtrack_event")}}

## 関連情報

- 関連イベント: [`removetrack`](/ja/docs/Web/API/AudioTrackList/removetrack_event), [`change`](/ja/docs/Web/API/AudioTrackList/change_event)
- [`VideoTrackList`](/ja/docs/Web/API/VideoTrackList) 対象でのこのイベント: [`addtrack`](/ja/docs/Web/API/VideoTrackList/addtrack_event)
- [`MediaStream`](/ja/docs/Web/API/MediaStream) 対象でのこのイベント: [`addtrack`](/ja/docs/Web/API/MediaStream/addtrack_event)
- [Media Streams API](/ja/docs/Web/API/Media_Streams_API)
- [WebRTC API](/ja/docs/Web/API/WebRTC_API)
