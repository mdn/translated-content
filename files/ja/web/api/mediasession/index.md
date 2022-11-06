---
title: MediaSession
slug: Web/API/MediaSession
---

{{SeeCompatTable}}{{APIRef("Media Session API")}}

[Media Session API](/ja/docs/Web/API/Media_Session_API) の **`MediaSession`** インターフェースは、ウェブページで標準のメディア再生操作に対する専用の動作を提供します。

## プロパティ

- {{domxref("MediaSession.metadata")}}
  - : プラットフォームのユーザーインターフェイスに表示するためのリッチメタデータを含む {{domxref("MediaMetadata")}} のインスタンスを返します。
- {{domxref("MediaSession.playbackState")}}
  - : 現在のメディアセッションが再生中であるかどうかを示します。有効な値は `"none"`, `"paused"`, `"playing"`です。

## メソッド

- {{domxref("MediaSession.setActionHandler()")}}
  - : 再生や一時停止などのメディアセッションの操作のためのイベントハンドラーを設定します。完全な一覧はメソッドのページをご覧ください。

## 例

以下の例では、新しいメディアセッションを作成し、それにアクションハンドラーを割り当てます。

```js
if ('mediaSession' in navigator){
  navigator.mediaSession.metadata = new MediaMetadata({
    title: "Podcast Episode Title",
    artist: "Podcast Host",
    album: "Podcast Name",
    artwork: [{src: "podcast.jpg"}]
  });
  navigator.mediaSession.setActionHandler('play', function() {});
  navigator.mediaSession.setActionHandler('pause', function() {});
  navigator.mediaSession.setActionHandler('seekbackward', function() {});
  navigator.mediaSession.setActionHandler('seekforward', function() {});
  navigator.mediaSession.setActionHandler('previoustrack', function() {});
  navigator.mediaSession.setActionHandler('nexttrack', function() {});
}
```

以下の例では、一時停止と再生のためのイベントハンドラーを設定します。

```js
var audio = document.querySelector("#player");
audio.src = "song.mp3";

navigator.mediaSession.setActionHandler('play', play);
navigator.mediaSession.setActionHandler('pause', pause);

function play() {
   audio.play();
   navigator.mediaSession.playbackState = "playing";
}

function pause() {
   audio.pause();
   navigator.mediaSession.playbackState = "paused";
}
```

## 仕様書

| 仕様書                                                                                               | 状態                                 | 備考     |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Media Session','#the-mediasession-interface','MediaSession')}} | {{Spec2('Media Session')}} | 初回定義 |

## ブラウザーの対応

{{Compat("api.MediaSession")}}
