---
title: 文書ピクチャインピクチャ API の使用
slug: Web/API/Document_Picture-in-Picture_API/Using
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

{{DefaultAPISidebar("Document Picture-in-Picture API")}}

このガイドでは、{{domxref("Document Picture-in-Picture API", "文書ピクチャインピクチャ API", "", "nocode")}} の一般的な使用方法について解説します。

> [!NOTE]
> 実際に動作するデモについては、[Document Picture-in-Picture API Example](https://mdn.github.io/dom-examples/document-picture-in-picture/) の例をご覧ください（[ソースコード](https://github.com/mdn/dom-examples/tree/main/document-picture-in-picture)の全文も参照してください）。

## サンプル HTML

以下の HTML は、基本的な動画プレーヤーを設定するものです。

```html
<div id="container">
  <p class="in-pip-message">
    動画プレイヤーは、現在独立したピクチャインピクチャウィンドウで実行されています。
  </p>
  <div id="player">
    <video
      src="assets/bigbuckbunny.mp4"
      id="video"
      controls
      width="320"></video>

    <div id="credits">
      <a href="https://peach.blender.org/download/" target="_blank">
        Video by Blender </a
      >;
      <a href="https://peach.blender.org/about/" target="_blank">
        licensed CC-BY 3.0
      </a>
    </div>

    <div id="control-bar">
      <p class="no-picture-in-picture">
        文書ピクチャインピクチャ API は利用できません
      </p>

      <p></p>
    </div>
  </div>
</div>
```

## 機能検出

文書ピクチャインピクチャ API に対応しているかどうかを確認するには、`window` 上で `documentPictureInPicture` が利用可能かどうかを検査します。

```js
if ("documentPictureInPicture" in window) {
  document.querySelector(".no-picture-in-picture").remove();

  const togglePipButton = document.createElement("button");
  togglePipButton.textContent = "Toggle Picture-in-Picture";
  togglePipButton.addEventListener("click", togglePictureInPicture);

  document.getElementById("control-bar").appendChild(togglePipButton);
}
```

利用可能な場合は、「文書ピクチャインピクチャ API は利用できません」というメッセージを非表示にし、代わりに {{htmlelement("button")}} 要素を追加して、動画プレーヤーを文書ピクチャインピクチャウィンドウで開くようにします。

## ピクチャインピクチャウィンドウを開く

次の JavaScript は、{{domxref("DocumentPictureInPicture.requestWindow", "window.documentPictureInPicture.requestWindow()")}} を呼び出して、空のピクチャインピクチャウィンドウを開きます。返される {{jsxref("Promise")}} は、ピクチャインピクチャ {{domxref("Window")}} オブジェクトで解決されます。{{domxref("Element.append()")}} を使用して動画プレーヤーをそのウィンドウに移動し、移動されたことをユーザーに知らせるメッセージを表示します。

`requestWindow()` の `width` および `height` オプションを使用すると、ピクチャインピクチャウィンドウを希望のサイズに設定できます。オプションの値が大きすぎたり小さすぎたりして、ユーザーにとって使いやすいウィンドウサイズに収まらない場合、ブラウザーはその値を調整することがあります。

```js
async function togglePictureInPicture() {
  // 既に開いているピクチャインピクチャウィンドウがあれば、すぐに戻る
  if (window.documentPictureInPicture.window) {
    return;
  }

  // ピクチャインピクチャウィンドウを開く
  const pipWindow = await window.documentPictureInPicture.requestWindow({
    width: videoPlayer.clientWidth,
    height: videoPlayer.clientHeight,
  });

  // …

  // プレイヤーをピクチャインピクチャウィンドウへ移動する
  pipWindow.document.body.append(videoPlayer);

  // 移動された旨を伝えるメッセージを表示
  inPipMessage.style.display = "block";
}
```

## スタイルシートをピクチャインピクチャーウィンドウにコピー

元のウィンドウからすべての CSS スタイルシートをコピーするには、文書に明示的にリンクされている、または埋め込まれている（{{domxref("Document.styleSheets")}} 経由）すべてのスタイルシートをループ処理し、それらをピクチャインピクチャウィンドウに追加します。なお、これは 1 回限りのコピーであることに注意してください。

```js
// …

// プレイヤーが同じ見た目になるよう、初期文書からスタイルシートをコピー
[...document.styleSheets].forEach((styleSheet) => {
  try {
    const cssRules = [...styleSheet.cssRules]
      .map((rule) => rule.cssText)
      .join("");
    const style = document.createElement("style");

    style.textContent = cssRules;
    pipWindow.document.head.appendChild(style);
  } catch (e) {
    const link = document.createElement("link");

    link.rel = "stylesheet";
    link.type = styleSheet.type;
    link.media = styleSheet.media;
    link.href = styleSheet.href;
    pipWindow.document.head.appendChild(link);
  }
});

// …
```

## ピクチャインピクチャモード時のターゲットスタイル

{{cssxref("@media/display-mode", "display-mode")}} [メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#media_features)の `picture-in-picture` 値を使用すると、文書がピクチャインピクチャモードで表示されているかどうかに基づいて、CSS を適用することができます。基本的な使用方法は以下の通りです。

```css
@media (display-mode: picture-in-picture) {
  body {
    background: red;
  }
}
```

このスニペットは、文書の `<body>` がピクチャインピクチャモードで表示されている場合に限り、その背景を赤色にします。
[こちらのデモ](https://mdn.github.io/dom-examples/document-picture-in-picture/)では、 `display-mode: picture-in-picture` の値と {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} メディア特性とを組み合わせて、アプリがピクチャインピクチャモードで表示されている場合に限り、ユーザーの配色設定に基づいて適用されるライト配色とダーク配色を作成しています。

```css
@media (display-mode: picture-in-picture) and (prefers-color-scheme: light) {
  body {
    background: antiquewhite;
  }
}

@media (display-mode: picture-in-picture) and (prefers-color-scheme: dark) {
  body {
    background: #333333;
  }

  a {
    color: antiquewhite;
  }
}
```

## ピクチャインピクチャウィンドウが閉じられた際の処理

ボタンが 2 回押されるとピクチャインピクチャウィンドウを再び閉じるためのコードは、次のようになります。

```js
inPipMessage.style.display = "none";
playerContainer.append(videoPlayer);
window.documentPictureInPicture.window.close();
```

ここでは、DOM の変更を元に戻します。つまり、メッセージを非表示にし、動画プレーヤーをメインアプリウィンドウのプレーヤーコンテナーに戻します。また、{{domxref("Window.close()")}} メソッドを使用して、プログラムからピクチャインピクチャウィンドウを閉じます。

ただし、ユーザーがウィンドウ上のブラウザー提供の閉じるボタン（UI コントロール）を押してピクチャインピクチャウィンドウを閉じるケースについても考慮する必要があります。これは、[`pagehide`](/ja/docs/Web/API/Window/pagehide_event) イベントを使用してウィンドウが閉じられたことを検知することで処理できます。

```js
pipWindow.addEventListener("pagehide", (event) => {
  inPipMessage.style.display = "none";
  playerContainer.append(videoPlayer);
});
```

> [!NOTE]
> 最初に `DocumentPictureInPicture.requestWindow()` を呼び出してピクチャインピクチャウィンドウを開く際、オプションオブジェクト内で [`disallowReturnToOpener`](/ja/docs/Web/API/DocumentPictureInPicture/requestWindow#disallowreturntoopener) ヒントを `true` に設定することで、ブラウザーが提供する UI の閉じるボタンを非表示にすることができます。

## ウェブサイトがピクチャインピクチャモードになったことを検知する

`DocumentPictureInPicture` インスタンスの {{domxref("DocumentPictureInPicture.enter_event", "enter")}} イベントを監視することで、ピクチャインピクチャウィンドウが開かれたタイミングを把握できます。

このデモでは、`enter` イベントを使用して、ピクチャインピクチャウィンドウにミュート切り替えボタンを追加しています。

```js
documentPictureInPicture.addEventListener("enter", (event) => {
  const pipWindow = event.window;
  console.log("動画プレーヤーが PIP ウィンドウに入りました");

  const pipMuteButton = pipWindow.document.createElement("button");
  pipMuteButton.textContent = "Mute";
  pipMuteButton.addEventListener("click", () => {
    const pipVideo = pipWindow.document.querySelector("#video");
    if (!pipVideo.muted) {
      pipVideo.muted = true;
      pipMuteButton.textContent = "Unmute";
    } else {
      pipVideo.muted = false;
      pipMuteButton.textContent = "Mute";
    }
  });

  pipWindow.document.body.append(pipMuteButton);
});
```

> [!NOTE]
> {{domxref("DocumentPictureInPictureEvent")}} イベントオブジェクトには、ピクチャインピクチャウィンドウにアクセスするための `window` プロパティが含まれています。

## 要素へのアクセスとイベントの処理

ピクチャインピクチャウィンドウ内の要素には、いくつかの方法でアクセスできます。

- 前述の通り、{{domxref("DocumentPictureInPicture.requestWindow()")}} メソッドによって返される {{domxref("Window")}} インスタンス。
- 前述の通り、{{domxref("DocumentPictureInPictureEvent")}} イベントオブジェクトの `window` プロパティ（{{domxref("DocumentPictureInPicture.enter_event", "enter")}} イベント時）を通じて。
- {{domxref("DocumentPictureInPicture.window")}} プロパティを通じて。

```js
const pipWindow = window.documentPictureInPicture.window;
if (pipWindow) {
  // ピクチャインピクチャウィンドウで再生中の動画の音声をミュート
  const pipVideo = pipWindow.document.querySelector("#video");
  pipVideo.muted = true;
}
```

ピクチャインピクチャの `window` インスタンスへの参照を取得したら、通常のブラウザーウィンドウのコンテキストと同様に、DOM の操作（ボタンの作成など）や、ユーザー入力イベント（[`click`](/ja/docs/Web/API/Element/click_event) など）への対応を行うことができます。
