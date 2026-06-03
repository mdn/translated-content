---
title: "HTMLMediaElement: play() メソッド"
short-title: play()
slug: Web/API/HTMLMediaElement/play
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLMediaElement")}} の **`play()`** メソッドは、メディアの再生を開始しようとします。
再生が正常に開始されると解決するプロミス ({{jsxref("Promise")}}) を返します。

権限の問題など、何らかの理由で再生を開始しなかった場合、そのプロミスは拒否されます。

## 構文

```js-nolint
play()
```

### 引数

なし。

### 返値

再生が開始されたときに解決される、または何らかの理由で再生を開始できない場合は拒否されるプロミス ({{jsxref("Promise")}}) です。

> [!NOTE]
> 古いブラウザーは `play()` から値を返さない可能性があります。

### 例外

プロミスの**拒否ハンドラー**は、 {{domxref("DOMException")}} オブジェクトと唯一の引数として渡された例外名で呼び出されます（従来の例外が投げられるのとは対照的です）。想定されるエラーは以下の通りです。

- `NotAllowedError` {{domxref("DOMException")}}
  - : ユーザーエージェント（ブラウザー）またはオペレーティングシステムが、現在のコンテキストまたは状況においてメディアの再生を許可しない場合に提供されます。
    ブラウザーは、例えば[許可ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy) のため、ユーザーが明示的に "play" ボタンをクリックしてメディア再生を始めるように要求することがあります。
- `NotSupportedError` {{domxref("DOMException")}}
  - : メディアソース（例えば {{domxref("MediaStream")}}, {{domxref("MediaSource")}}, {{domxref("Blob")}}, または {{domxref("File")}} として指定可能）が、対応しているメディア形式を表していない場合に提供されます。

ブラウザーの実装の詳細、メディアプレーヤーの実装などによっては、他の例外が報告されることがあります。

## 使用上のメモ

「自動再生 (autoplay)」という用語は通常、読み込まれるとすぐにメディアの再生を開始するページを指すと考えられていますが、ウェブブラウザーの自動再生ポリシーは、`play()` の呼び出しを含むスクリプト起動によるメディアの再生にも適用されます。

{{Glossary("user agent","ユーザーエージェント")}}が自動またはスクリプト起動によるメディアの再生を許可しないように設定されている場合、`play()` を呼び出すと返されたプロミスが直ちに `NotAllowedError` で拒否されます。 ウェブサイトはこの状況に対処する準備をしておくべきです。 例えば、サイトには再生が自動的に開始されたことを前提としたユーザーインターフェイスを表示するのではなく、返されたプロミスが解決されたか拒否されたかに基づいて UI を更新する必要があります。 詳しくは、以下の[例](#例)を参照してください。

> [!NOTE]
> `play()` メソッドを使用すると、ユーザーはメディアの再生を許可するように要求され、返されたプロミスが解決されるまでに遅延が生じる可能性があります。 コードが即座の応答を期待していないことを確認してください。

自動再生および自動再生のブロックの詳細については、[メディアおよびウェブオーディオ API の自動再生ガイド](/ja/docs/Web/Media/Guides/Autoplay)を参照してください。

## 例

この例では、再生が開始されたことを確認する方法と、ブロックされた自動再生を適切に処理する方法を示します。

```js
let videoElem = document.getElementById("video");
let playButton = document.getElementById("playbutton");

playButton.addEventListener("click", handlePlayButton, false);
playVideo();

async function playVideo() {
  try {
    await videoElem.play();
    playButton.classList.add("playing");
  } catch (err) {
    playButton.classList.remove("playing");
  }
}

function handlePlayButton() {
  if (videoElem.paused) {
    playVideo();
  } else {
    videoElem.pause();
    playButton.classList.remove("playing");
  }
}
```

この例では、動画の再生は非同期 ([`async`](/ja/docs/Web/JavaScript/Reference/Statements/async_function)) 関数によってオンとオフをトグル切り替えします。動画を再生しようとし、成功した場合は `playButton` 要素のクラス名を `"playing"`（再生中）に設定します。 再生が開始されない場合、`playButton` 要素のクラスはクリアされ、既定の外観に戻ります。 これは、`play()` によって返されたプロミス ({{jsxref("Promise")}}) の解決または拒否を監視することによって、再生ボタンが実際の再生状態と一致することを保証します。

この例が実行されると、再生のオンとオフを切り替えるために使用する {{HTMLElement("video")}} 要素への参照を {{HTMLElement("button")}} と同様に収集することから始めます。 次に、再生トグルボタンの {{domxref("Element/click_event", "click")}} イベントのイベントハンドラーを設定し、`playVideo()` を呼び出して自動的に再生を開始しようとします。

[この例を Glitch でリアルタイムで試したり、リミックスしたりする](https://media-play-promise.glitch.me/)ことができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブメディア技術](/ja/docs/Web/Media)
- 学習: [動画と音声のコンテンツ](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [メディアおよびウェブオーディオ API の自動再生ガイド](/ja/docs/Web/Media/Guides/Autoplay)
- [ウェブオーディオ API の利用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
