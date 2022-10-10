---
title: 'VideoTrackList: change イベント'
slug: Web/API/VideoTrackList/change_event
---

{{APIRef}}

`change` イベントは、動画トラックがアクティブまたは非アクティブになったとき（トラックの [`selected`](/ja/docs/Web/API/VideoTrack/selected) プロパティを変更したときなど）に発生します。

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
        <code
          ><a href="/ja/docs/Web/API/VideoTrackList/onchange">onchange</a></code
        >
      </td>
    </tr>
  </tbody>
</table>

## 例

`AddEventListener()` を使用する場合

```js
const videoElement = document.querySelector('video');
videoElement.videoTracks.addEventListener('change', (event) => {
    console.log(`'${event.type}' イベント発生`);
});

// `selected` の値を変更すると `change` イベントを引き起こします
const toggleTrackButton = document.querySelector('.toggle-track');
toggleTrackButton.addEventListener('click', () => {
  const track = videoElement.videoTracks[0];
  track.selected = !track.selected;
});
```

`onchange` イベントハンドラプロパティを使用する場合

```js
const videoElement = document.querySelector('video');
videoElement.videoTracks.onchange = (event) => {
    console.log(`'${event.type}' イベント発生`);
};

// `selected` の値を変更すると `change` イベントを引き起こします
const toggleTrackButton = document.querySelector('.toggle-track');
toggleTrackButton.addEventListener('click', () => {
  const track = videoElement.videoTracks[0];
  track.selected = !track.selected;
});
```

## 仕様

| 仕様                                                                                         | 状態                             |
| -------------------------------------------------------------------------------------------- | -------------------------------- |
| {{SpecName('HTML WHATWG', 'media.html#event-media-change', 'change')}} | {{Spec2('HTML WHATWG')}} |

## ブラウザーの互換性

{{Compat("api.VideoTrackList.change_event")}}

## 関連情報

- Related events: [`addtrack`](/ja/docs/Web/API/VideoTrackList/addtrack_event), [`removetrack`](/ja/docs/Web/API/VideoTrackList/removetrack_event)
- [`AudioTrackList`](/ja/docs/Web/API/AudioTrackList) 対象でのこのイベント: [`change`](/ja/docs/Web/API/AudioTrackList/change_event)
- [Media Streams API](/ja/docs/Web/API/Media_Streams_API)
- [WebRTC API](/ja/docs/Web/API/WebRTC_API)
