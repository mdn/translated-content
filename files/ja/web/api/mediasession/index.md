---
title: MediaSession
slug: Web/API/MediaSession
l10n:
  sourceCommit: 2ba2c0efbdf0c34b1da02203e4e84b571c883629
---

{{APIRef("Media Session API")}}

**`MediaSession`** は[メディアセッション API](/ja/docs/Web/API/Media_Session_API) のインターフェイスで、ウェブページで標準のメディア再生操作に対する専用の動作を提供します。 これにより、ウェブページは標準的なメディア再生の対話操作に対して独自の動作を提供し、ユーザーエージェントが端末や OS に送信して標準的なユーザーインターフェイス要素で表示することができるメタデータを報告することができます。

例えば、スマートフォンのロック画面には、メディア再生や情報表示のための制御を行う標準パネルがあります。端末上のブラウザーは `MediaSession` を使用して、その標準/グローバルユーザーインターフェイスからブラウザーの再生を制御できるようにすることができます。

## プロパティ

- {{domxref("MediaSession.metadata", "metadata")}}
  - : プラットフォームのユーザーインターフェイスに表示するためのリッチメタデータを含む {{domxref("MediaMetadata")}} のインスタンスを返します。
- {{domxref("MediaSession.playbackState", "playbackState")}}
  - : 現在のメディアセッションが再生中であるかどうかを示します。有効な値は `none`, `paused`, `playing`です。

## メソッド

- {{domxref("MediaSession.setActionHandler", "setActionHandler()")}}
  - : 再生や一時停止などのメディアセッションの操作のためのイベントハンドラーを設定します。
- {{domxref("MediaSession.setPositionState", "setPositionState()")}}
  - : 現在表示しているメディアの再生位置と再生速度を設定します。

## 例

### 音楽プレーヤーのアクションハンドラーを設定

以下の例では、新しいメディアセッションを作成し、それにアクションハンドラーを割り当てます。

```js
if ("mediaSession" in navigator) {
  navigator.mediaSession.metadata = new MediaMetadata({
    title: "Unforgettable",
    artist: "Nat King Cole",
    album: "The Ultimate Collection (Remastered)",
    artwork: [
      {
        src: "https://dummyimage.com/96x96",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/128x128",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/192x192",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/256x256",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/384x384",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/512x512",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  });

  navigator.mediaSession.setActionHandler("play", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("pause", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("stop", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("seekbackward", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("seekforward", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("seekto", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("previoustrack", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("nexttrack", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("skipad", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("togglecamera", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("togglemicrophone", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("hangup", () => {
    /* Code excerpted. */
  });
}
```

次の例では、再生と一時停止のための 2 つの関数を設定し、関連するアクションハンドラーのコールバックとして使用しています。

```js
const actionHandlers = [
  // play
  [
    "play",
    async () => {
      // play our audio
      await audioEl.play();
      // set playback state
      navigator.mediaSession.playbackState = "playing";
      // update our status element
      updateStatus(allMeta[index], "Action: play  |  Track is playing…");
    },
  ],
  [
    "pause",
    () => {
      // pause out audio
      audioEl.pause();
      // set playback state
      navigator.mediaSession.playbackState = "paused";
      // update our status element
      updateStatus(allMeta[index], "Action: pause  |  Track has been paused…");
    },
  ],
];

for (const [action, handler] of actionHandlers) {
  try {
    navigator.mediaSession.setActionHandler(action, handler);
  } catch (error) {
    console.log(`The media session action "${action}" is not supported yet.`);
  }
}
```

### アクションハンドラーを使用して、スライドプレゼンテーションを制御

アクションハンドラー `"previousslide"` と `"nextslide"` を使用すると、例えば、ユーザーがプレゼンテーションを {{domxref("Picture-in-Picture API", "Picture-in-Picture", "", "nocode")}} ウィンドウに入れ、ブラウザーの提供するスライド移動用のコントロールを押すことで、スライドプレゼンテーションを前に進めたり後ろに戻したりすることを扱うことができます。

```js
try {
  navigator.mediaSession.setActionHandler("previousslide", () => {
    log('> User clicked "Previous Slide" icon.');
    if (slideNumber > 1) slideNumber--;
    updateSlide();
  });
} catch (error) {
  log('Warning! The "previousslide" media session action is not supported.');
}

try {
  navigator.mediaSession.setActionHandler("nextslide", () => {
    log('> User clicked "Next Slide" icon.');
    slideNumber++;
    updateSlide();
  });
} catch (error) {
  log('Warning! The "nextslide" media session action is not supported.');
}
```

動作する例としては、[Presenting Slides / Media Session Sample](https://googlechrome.github.io/samples/media-session/slides.html)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
