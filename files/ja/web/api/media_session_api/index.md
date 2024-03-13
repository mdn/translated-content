---
title: メディアセッション API
slug: Web/API/Media_Session_API
l10n:
  sourceCommit: 2ba2c0efbdf0c34b1da02203e4e84b571c883629
---

{{DefaultAPISidebar("Media Session API")}}

メディアセッション API は、メディア通知をカスタマイズする方法を提供します。これは、ウェブアプリケーションが再生しているメディアについて、ユーザーエージェントが表示するためのメタデータを提供することで実現します。

また、ブラウザーがプラットフォームメディアキー（キーボード、ヘッドセット、リモコンにあるハードウェアキー、通知領域やモバイル端末のロック画面にあるソフトウェアキーなど）にアクセスするために使用できるアクションハンドラーも提供します。そのため、ウェブページを見ていないときでも、機器を介してウェブで指定されたメディアをシームレスに制御することができます。

その狙いは、ユーザーが、メディアを起動した固有のページを開かなくても、再生されているものを知り、制御することができるようにすることです。メディアセッション API に対応するために、ブラウザーはまず OS レベルのメディア制御 (Firefox の [MediaControl](https://bugzil.la/1648100) など) にアクセスし制御するためのメカニズムを必要とします。

## メディアセッションの概念と用途

{{domxref("MediaMetadata")}} インターフェイスにより、ウェブサイトは再生中のメディアに対して豊富なメタデータをプラットフォーム UI に提供することができます。このメタデータには、タイトル、アーティスト（クリエイター）名、アルバム（コレクション）、アートワークが含まれます。プラットフォームは、このメタデータをメディアセンター、通知、端末のロック画面などに表示することができます。

{{domxref("MediaSession")}} インターフェイスにより、ユーザーはユーザーエージェントを定義したインターフェイス要素を通して、メディアの再生を制御することができます。これらの要素を操作すると、ウェブページのアクションハンドラーが起動し、メディアを再生することができます。複数のページが同時にこの API を使用する可能性があるため、ユーザーエージェントは正しいページのアクションハンドラーを呼び出す責任があります。ユーザーエージェントは、ページで定義した動作が利用できない場合、既定の動作を提供します。

## メディアセッション API へのアクセス

メディアセッション API の主要なインターフェイスは {{domxref("MediaSession")}} インターフェイスです。自分自身で `MediaSession` インスタンスを作成するのではなく、 {{domxref("navigator.mediaSession")}} プロパティを使用して API にアクセスします。例えば、メディアセッションの現在の状態を `playing` に設定するには、次のようにします。

```js
navigator.mediaSession.playbackState = "playing";
```

## インターフェイス

- {{domxref("MediaMetadata")}}
  - : ウェブページがプラットフォーム UI に表示するためのリッチメディアメタデータを提供することを可能にします。
- {{domxref("MediaSession")}}
  - : ウェブページがメディア再生の標準的なやりとりに独自の動作を提供できるようにします。

## 辞書

- {{domxref("MediaImage")}}
  - : `MediaImage` オブジェクトは、メディアに関連する画像を記述する情報を格納します。これはCDやDVDのカバー、映画のポスター、ポスターフレームなどかもしれません。

## 例

### 音楽プレーヤーのアクションハンドラーを設定

次の例は、メディアセッション API の機能検出を示しています。そして、セッションのメタデータオブジェクトをインスタンス化し、ユーザー制御操作のアクションハンドラーを追加しています。

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

ユーザーエージェントによっては、モバイル端末でのメディア要素の自動再生を無効にしており、メディアを開始するにはユーザーの操作が必要な場合があります。以下の例では、ページ上の再生ボタンに `pointerup` イベントを追加し、メディアセッションのコードを起動させるために使用しています。

```js
playButton.addEventListener("pointerup", (event) => {
  const audio = document.querySelector("audio");

  // User interacted with the page. Let's play audio!
  audio
    .play()
    .then(() => {
      /* Set up media session controls, as shown above. */
    })
    .catch((error) => {
      console.error(error);
    });
});
```

### アクションハンドラーを用いたスライドプレゼンテーションの制御

アクションハンドラー `"previousslide"` と `"nextslide"` は、例えば、ユーザーがプレゼンテーションを {{domxref("Picture-in-Picture API", "Picture-in-Picture", "", "nocode")}} ウィンドウに入れ、ブラウザーの提供するスライド移動用のコントロールを押して、スライドプレゼンテーションを前に進めたり後ろに戻したりすることを扱うのに使用できます。

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

動作例は [Presenting Slides / Media Session Sample](https://googlechrome.github.io/samples/media-session/slides.html) を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
