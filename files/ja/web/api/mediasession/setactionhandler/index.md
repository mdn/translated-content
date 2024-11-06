---
title: MediaSession.setActionHandler()
slug: Web/API/MediaSession/setActionHandler
l10n:
  sourceCommit: 2ba2c0efbdf0c34b1da02203e4e84b571c883629
---

{{APIRef("Media Session API")}}

**`setActionHandler()`** は {{domxref("MediaSession")}} インターフェイスのメソッドで、メディアセッションのアクションにハンドラーを設定します。
これらのアクションは、ユーザーが端末に内蔵された物理的または画面上のメディアコントロール（再生、停止、シークボタンなど）を操作したときに、ウェブアプリケーションが通知を受け取ることができます。

## 構文

```js-nolint
setActionHandler(type, callback)
```

### 引数

- `type`
  - : 待ち受けするアクションの種類を表す文字列です。これは、次のいずれかになります。
    - `hangup`
      - : 通話を終了します。
    - `nextslide`
      - : スライドデッキを表示しているときに、次のスライドに移動します。
    - `nexttrack`
      - : 再生を次のトラックに進めます。
    - `pause`
      - : メディアの再生を一時停止します。
    - `play`
      - : メディアの再生を始めます（または再開します）。
    - `previousslide`
      - : スライドデッキを表示しているときに、前回表示したスライドに移動します。
    - `previoustrack`
      - : 前のトラックに戻します。
    - `seekbackward`
      - : メディアの中で、現在位置から後方にシークします。
        コールバックに渡す `seekOffset` プロパティは、後方へのシーク時間を指定します。
    - `seekforward`
      - : メディアの中で、現在の位置から前方にシークします。
        コールバックに渡す `seekOffset` プロパティは、前方へのシーク時間を指定します。
    - `seekto`
      - : メディア内の指定した時刻に再生位置を移動します。
        シーク先の時刻は、コールバックに渡される `seekTime` プロパティで指定します。
        複数の `seekto` 操作を連続して行う場合は、コールバックに渡される `fastSeek` プロパティに `true` という値を指定することも可能です。
        これにより、ブラウザーは繰り返される処理を最適化するための手順を踏むことができ、パフォーマンスが向上する可能性が高くなることを知ることができます。
    - `skipad`
      - : 現在再生中の広告や CM をスキップして通過します。
        この操作は、プラットフォームや{{Glossary("user agent", "ユーザーエージェント")}}によって利用できる場合とできない場合があり、また、契約レベルや他にも状況によって無効となる場合があります。
    - `stop`
      - : 再生を完全に停止します。
    - `togglecamera`
      - : ユーザーのアクティブなカメラをオンまたはオフにします。
    - `togglemicrophone`
      - : ユーザーのマイクをミュート/ミュート解除します。
- `callback`
  - : 指定したアクション種別を呼び出したときに呼び出す関数です。コールバックは値を返してはいけません。コールバックは、以下のプロパティを格納した辞書を受け取ります。
    - `action`
      - : アクションの種類を表す文字列です。このプロパティにより、単一のコールバックで複数のアクションの種類を処理することができます。
    - `fastSeek` {{optional_inline}}
      - : [`seekto`](#seekto) アクションは、このプロパティをオプションとして含めることができます。このプロパティは、「高速」シークを実行するかどうかを示す論理値です。
        高速」シークとは、メディアを早送りしたり、反転させたりするときに、急速にスキップするように、シークが実行されることです。
        このプロパティは、メディアをシークするために使用可能な最短の方法を使用することを示すために使用することができます。
        この状況では、`fastSeek` はシークシーケンスの最終アクションに含まれません。
    - `seekOffset` {{optional_inline}}
      - : アクションが [`seekforward`](#seekforward) または [`seekbackward`](#seekbackward) で、このプロパティが存在する場合、再生位置を前方または後方に移動するための秒数を示す浮動小数点の値です。
        このプロパティが存在しない場合、これらのアクションは、前方または後方にスキップするための妥当な既定値（7 秒または 10 秒など）を選ぶ必要があります。
    - `seekTime` {{optional_inline}}
      - : アクションが [`seekto`](#seekto) の場合、このプロパティが存在しなければなりません。このプロパティは、メディア内で再生位置を移動する絶対時刻を示す浮動小数点数で、0はメディアの開始時刻を示します。このプロパティは、他のアクション種別には存在しません。

### 返値

なし ({{jsxref("undefined")}})。

## 解説

以前に確立したアクションハンドラーを削除するには、`setActionHandler()` を再度呼び出して、`callback` に `null` を指定します。

アクションハンドラーは単一の引数として、アクションの種類（同じ関数で複数のアクションを処理することができる）と、アクションを実行するために必要なデータを提供するオブジェクトを入力として受け取ります。

## 例

### 音楽プレイヤーのアクションハンドラーを設定

この例では、新しいメディアセッションを作成し、アクションハンドラー（何かするわけではありません）を割り当てています。

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

この例では、適切なアクションハンドラーを使用し、再生メディアを通してどちらかの方向にシークできるようにしています。

```js
let skipTime = 10; // Time to skip in seconds

navigator.mediaSession.setActionHandler("seekbackward", (evt) => {
  // User clicked "Seek Backward" media notification icon.
  audio.currentTime = Math.max(audio.currentTime - skipTime, 0);
});

navigator.mediaSession.setActionHandler("seekforward", (evt) => {
  // User clicked "Seek Forward" media notification icon.
  audio.currentTime = Math.min(audio.currentTime + skipTime, audio.duration);
});
```

メディアアクションハンドラーを削除する場合は、null を割り当ててください。

```js
navigator.mediaSession.setActionHandler("nexttrack", null);
```

### 1 つのハンドラー関数で複数のアクションに対応

また、必要に応じて、`action` プロパティの値を調べることで、1 つの関数を使用して複数のアクション種類を処理することも可能です。

```js
let skipTime = 7;

navigator.mediaSession.setActionHandler("seekforward", handleSeek);
navigator.mediaSession.setActionHandler("seekbackward", handleSeek);

function handleSeek(details) {
  switch (details.action) {
    case "seekforward":
      audio.currentTime = Math.min(
        audio.currentTime + skipTime,
        audio.duration,
      );
      break;
    case "seekbackward":
      audio.currentTime = Math.max(audio.currentTime - skipTime, 0);
      break;
  }
}
```

ここでは、`handleSeek()`関数が`seekbackward`と`seekforward`の両方のアクションを処理します。

### アクションハンドラーを使用してスライドプレゼンテーションを制御する

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
