---
title: 'VideoTrackList: addtrack イベント'
slug: Web/API/VideoTrackList/addtrack_event
tags:
  - API
  - Reference
  - addTrack
  - events
translation_of: Web/API/VideoTrackList/addtrack_event
---
{{APIRef}}

`addtrack` イベントは、トラックが {{domxref("VideoTrackList")}} に追加されたときに発生します。

| バブリング                 | なし                                                       |
| -------------------------- | ---------------------------------------------------------- |
| キャンセル                 | 不可                                                       |
| インターフェイス           | {{domxref("TrackEvent")}}                           |
| イベントハンドラプロパティ | [`onaddtrack`](/ja/docs/Web/API/VideoTrackList/onaddtrack) |

## 例

`AddEventListener()` を使用する場合

```js
const videoElement = document.querySelector('video');

videoElement.videoTracks.addEventListener('addtrack', (event) => {
  console.log(`Video track: ${event.track.label} added`);
});
```

`onaddtrack` イベントハンドラプロパティを使用する場合

```js
const videoElement = document.querySelector('video');

videoElement.videoTracks.onaddtrack = (event) => {
  console.log(`Video track: ${event.track.label} added`);
};
```

## 仕様

| 仕様                                                                                                 | 状態                             |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- |
| {{SpecName('HTML WHATWG', 'media.html#event-media-addtrack', 'addtrack')}} | {{Spec2('HTML WHATWG')}} |

## ブラウザーの互換性

{{Compat("api.VideoTrackList.addtrack_event")}}

## 関連情報

- 関連イベント: [`removetrack`](/ja/docs/Web/API/VideoTrackList/removetrack_event), [`change`](/ja/docs/Web/API/VideoTrackList/change_event)
- [`AudioTrackList`](/ja/docs/Web/API/AudioTrackList) 対象でのこのイベント: [`addtrack`](/ja/docs/Web/API/AudioTrackList/addtrack_event)
- [`MediaStream`](/ja/docs/Web/API/MediaStream) 対象でのこのイベント: [`addtrack`](/ja/docs/Web/API/MediaStream/addtrack_event)
- [Media Streams API](/ja/docs/Web/API/Media_Streams_API)
- [WebRTC API](/ja/docs/Web/API/WebRTC_API)
