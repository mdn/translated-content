---
title: 'AudioTrackList: addtrack イベント'
slug: Web/API/AudioTrackList/addtrack_event
---

{{APIRef}}

`addtrack` イベントは、トラックが {{domxref("AudioTrackList")}} に追加されたときに発生します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">キャンセル</th>
      <td>不可</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("TrackEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラプロパティ</th>
      <td>
        <code
          ><a href="/ja/docs/Web/API/AudioTrackList/onaddtrack"
            >onaddtrack</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

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
