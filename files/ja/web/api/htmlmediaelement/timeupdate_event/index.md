---
title: 'HTMLMediaElement: timeupdate イベント'
slug: Web/API/HTMLMediaElement/timeupdate_event
---

{{APIRef("HTMLMediaElement")}}

`timeupdate` イベントは、`currentTime` 属性で示される時刻が更新されたときに発生します。

イベントの頻度はシステムの負荷に依存しますが、およそ 4Hz と 66Hz との間で発生します（イベントハンドラーが実行するのに 250 ms 以上かかることはないと仮定します）。ユーザーエージェントはシステム負荷とその都度イベントを処理する平均コストに基づいて、イベントの頻度を変えることが推奨されているため、ユーザーエージェントがビデオのデコード中に快適に処理できるよりも頻繁に UI 更新が行われることはありません。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">キャンセル可能</th>
      <td>不可</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{DOMxRef("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">対象</th>
      <td>Element</td>
    </tr>
    <tr>
      <th scope="row">既定のアクション</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>{{domxref("GlobalEventHandlers.ontimeupdate")}}</td>
    </tr>
  </tbody>
</table>

## 例

これらの例は、 HTMLMediaElement の `timeupdate` イベントのイベントリスナーを追加し、イベントが発生してイベントハンドラーが動作するときにメッセージを投稿します。なお、イベントの頻度はシステムの稼働状況に依存します。

`addEventListener()` を使用する場合

```js
const video = document.querySelector('video');

video.addEventListener('timeupdate', (event) => {
  console.log('The currentTime attribute has been updated. Again.');
});
```

`ontimeupdate` イベントハンドラープロパティを使用する場合

```js
const video = document.querySelector('video');

video.ontimeupdate = (event) => {
  console.log('The currentTime attribute has been updated. Again.');
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
