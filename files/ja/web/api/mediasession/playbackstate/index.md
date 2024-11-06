---
title: MediaSession.playbackState
slug: Web/API/MediaSession/playbackState
l10n:
  sourceCommit: 2ba2c0efbdf0c34b1da02203e4e84b571c883629
---

{{APIRef("Media Session API")}}

**`playbackState`** は {{domxref("MediaSession")}} インターフェイスのプロパティで、現在のメディアセッションが再生中か一時停止中かを示します。

## 値

文字列で、メディアセッションの現在の再生状態を示します。
値は以下のいずれかです。

- `none`
  - : 閲覧コンテキストが現在の再生状態を把握していない、または再生状態がこの時点で利用できない。
- `paused`
  - : ブラウザーのメディアセッションは現在、一時停止中である。再生は再開することができる。
- `playing`
  - : ブラウザーのメディアセッションは、現在メディアを再生中で、一時停止することができる。

## 例

次の例では、再生と一時停止のための 2 つの関数を設定し、関連するアクションハンドラーのコールバックとして使用しています。各関数は `playbackState` プロパティを利用して、音声が再生されているか一時停止されているかを示します。

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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
