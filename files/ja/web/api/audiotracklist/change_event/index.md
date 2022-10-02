---
title: 'AudioTrackList: change イベント'
slug: Web/API/AudioTrackList/change_event
---

{{APIRef}}

`change` イベントは、音声トラックが有効または無効になったとき（トラックの [`enabled`](/ja/docs/Web/API/AudioTrack/enabled) プロパティを変更したときなど）に発生します。

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
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラプロパティ</th>
      <td>
        {{domxref("AudioTrackList/onchange", "onchange")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

`addEventListener()` を使用する場合

```js
const videoElement = document.querySelector('video');
videoElement.audioTracks.addEventListener('change', (event) => {
    console.log(`'${event.type}' イベント発生`);
});

// `enabled` の値を変更すると `change` イベントを引き起こします
const toggleTrackButton = document.querySelector('.toggle-track');
toggleTrackButton.addEventListener('click', () => {
  const track = videoElement.audioTracks[0];
  track.enabled = !track.enabled;
});
```

`onchange` イベントハンドラプロパティを使用する場合

```js
const videoElement = document.querySelector('video');
videoElement.audioTracks.onchange = (event) => {
    console.log(`'${event.type}' イベント発生`);
};

// `enabled` の値を変更すると `change` イベントを引き起こします
const toggleTrackButton = document.querySelector('.toggle-track');
toggleTrackButton.addEventListener('click', () => {
  const track = videoElement.audioTracks[0];
  track.enabled = !track.enabled;
});
```

## 仕様書

| 仕様書                                                                                       | 状態                             |
| -------------------------------------------------------------------------------------------- | -------------------------------- |
| {{SpecName('HTML WHATWG', 'media.html#event-media-change', 'change')}} | {{Spec2('HTML WHATWG')}} |

## ブラウザーの互換性

{{Compat("api.AudioTrackList.change_event")}}

## 関連情報

- 関連イベント: [`addtrack`](/ja/docs/Web/API/AudioTrackList/addtrack_event), [`removetrack`](/ja/docs/Web/API/AudioTrackList/removetrack_event)
- [`VideoTrackList`](/ja/docs/Web/API/VideoTrackList) 対象でのこのイベント: [`change`](/ja/docs/Web/API/VideoTrackList/change_event)
- [Media Streams API](/ja/docs/Web/API/Media_Streams_API)
- [WebRTC API](/ja/docs/Web/API/WebRTC_API)
