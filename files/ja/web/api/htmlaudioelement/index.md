---
title: HTMLAudioElement
slug: Web/API/HTMLAudioElement
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{APIRef("HTML DOM")}}

**`HTMLAudioElement`** インターフェイスは {{HTMLElement("audio")}} 要素のプロパティと、操作するメソッドへのアクセスを提供します。

この要素は {{domxref("HTMLMediaElement")}} インターフェイスから派生しており、プロパティとメソッドを継承しています。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("HTMLAudioElement.Audio", "Audio()")}}
  - : 新しい `HTMLAudioElement` オブジェクトを作成し、返します。オプションとして、ファイルの URL が指定された場合は、音声ファイルを読み込む処理を開始します。

## インスタンスプロパティ

_固有のプロパティはありません。親である {{domxref("HTMLMediaElement")}} および {{domxref("HTMLElement")}} からプロパティを継承しています。_

## インスタンスメソッド

_{{domxref("HTMLMediaElement")}} および {{domxref("HTMLElement")}} からメソッドを継承しています。_

## 例

### 基本的な使用

{{domxref("HTMLAudioElement.Audio", "Audio()")}} を使用すると、`HTMLAudioElement` を完全に JavaScript で生成することができます。

```js
const audioElement = new Audio("car_horn.wav");
```

それからこの要素に対して `play()` を呼び出すことができます。

```js
audioElement.play();
```

> [!NOTE]
> よくあるのが、ページを読み込んだらすぐに audio 要素を再生しようとすることです。現代のブラウザーは、既定の自動再生ポリシーによって、このようなことが起こらないようにブロックしています。良い習慣と回避方法については、[Firefox](https://hacks.mozilla.org/2019/02/firefox-66-to-block-automatically-playing-audible-video-and-audio/) および [Chrome](https://developer.chrome.com/blog/autoplay/) のものを参照してください。

audio 要素のプロパティとしてよく用いられるものには、{{domxref("HTMLMediaElement.src", "src")}}, {{domxref("HTMLMediaElement.currentTime", "currentTime")}}, {{domxref("HTMLMediaElement.duration", "duration")}}, {{domxref("HTMLMediaElement.paused", "paused")}}, {{domxref("HTMLMediaElement.muted", "muted")}}, {{domxref("HTMLMediaElement.volume", "volume")}} などがあります。このスニペットは、音声ファイルの再生時間を変数にコピーします。

```js
const audioElement = new Audio("car_horn.wav");
audioElement.addEventListener("loadeddata", () => {
  let duration = audioElement.duration;
  // これで変数 duration に音声クリップの再生時間（2 つ目）が格納される
});
```

## イベント

_親である {{domxref("HTMLMediaElement")}} およびその祖先である {{domxref("HTMLElement")}} からイベントを継承しています。_ イベントを待ち受けするには、[`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) を使用するか、このインターフェイスの `onイベント名` プロパティにイベントリスナーを代入してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブメディア技術](/ja/docs/Web/Media)
- [HTML での音声と動画の使用](/ja/docs/Web/Media/Guides/Audio_and_video_delivery)
- このインターフェイスを実装した HTML 要素: {{HTMLElement("audio")}}
