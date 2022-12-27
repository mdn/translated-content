---
title: 'HTMLMediaElement: seeking イベント'
slug: Web/API/HTMLMediaElement/seeking_event
---

{{APIRef("HTMLMediaElement")}}

`seeking` イベントは、シーク操作が開始されると発生します。つまり、論理属性の `seeking` を `true` に変更し、メディアが新しい位置をシークしている状態になります。

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
      <td>{{DOMxRef("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">対象</th>
      <td>要素</td>
    </tr>
    <tr>
      <th scope="row">既定のアクション</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>{{domxref("GlobalEventHandlers.onseeking")}}</td>
    </tr>
  </tbody>
</table>

## 例

これらの例では、`HTMLMediaElement` の `seeking` イベントのイベントリスナーを追加し、そのイベントハンドラがイベントの発生に反応したときにメッセージを投稿します。

`addEventListener()` を使用する場合

```js
const video = document.querySelector('video');

video.addEventListener('seeking', (event) => {
  console.log('動画は新しい位置をシーク中です。');
});
```

`onseeking` イベントハンドラープロパティを使用する場合

```js
const video = document.querySelector('video');

video.onseeking = (event) => {
  console.log('動画は新しい位置をシーク中です。');
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連イベント

- HTMLMediaElement {{domxref("HTMLMediaElement.playing_event", 'playing')}} イベント
- HTMLMediaElement {{domxref("HTMLMediaElement.waiting_event", 'waiting')}} イベント
- HTMLMediaElement {{domxref("HTMLMediaElement.seeking_event", 'seeking')}} イベント
- HTMLMediaElement {{domxref("HTMLMediaElement.seeked_event", 'seeked')}} イベント
- HTMLMediaElement {{domxref("HTMLMediaElement.ended_event", 'ended')}} イベント
- HTMLMediaElement {{domxref("HTMLMediaElement.loadedmetadata_event", 'loadedmetadata')}} イベント
- HTMLMediaElement {{domxref("HTMLMediaElement.loadeddata_event", 'loadeddata')}} イベント
- HTMLMediaElement {{domxref("HTMLMediaElement.canplay_event", 'canplay')}} イベント
- HTMLMediaElement {{domxref("HTMLMediaElement.canplaythrough_event", 'canplaythrough')}} イベント
- HTMLMediaElement {{domxref("HTMLMediaElement.durationchange_event", 'durationchange')}} イベント
- HTMLMediaElement {{domxref("HTMLMediaElement.timeupdate_event", 'timeupdate')}} イベント
- HTMLMediaElement {{domxref("HTMLMediaElement.play_event", 'play')}} イベント
- HTMLMediaElement {{domxref("HTMLMediaElement.pause_event", 'pause')}} イベント
- HTMLMediaElement {{domxref("HTMLMediaElement.ratechange_event", 'ratechange')}} イベント
- HTMLMediaElement {{domxref("HTMLMediaElement.volumechange_event", 'volumechange')}} イベント
- HTMLMediaElement {{domxref("HTMLMediaElement.suspend_event", 'suspend')}} イベント
- HTMLMediaElement {{domxref("HTMLMediaElement.emptied_event", 'emptied')}} イベント
- HTMLMediaElement {{domxref("HTMLMediaElement.stalled_event", 'stalled')}} イベント

## 関連情報

- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLVideoElement")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
