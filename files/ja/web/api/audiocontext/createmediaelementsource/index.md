---
title: "AudioContext: createMediaElementSource() メソッド"
short-title: createMediaElementSource()
slug: Web/API/AudioContext/createMediaElementSource
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

`createMediaElementSource()` は {{ domxref("AudioContext") }} インターフェイスのメソッドで、新しい {{ domxref("MediaElementAudioSourceNode") }} オブジェクトを作成するために使用されます。 HTML 内に存在する{{htmlelement("audio")}} または {{htmlelement("video")}} を指定すると、その音声を再生し、操作することができます。

メディア要素の音声ソースノードについての詳細は、 {{ domxref("MediaElementAudioSourceNode") }} を参照して下さい。

## 構文

```js-nolint
createMediaElementSource(myMediaElement)
```

### 引数

- `myMediaElement`
  - : 音声処理グラフに与えて操作したい {{domxref("HTMLMediaElement")}} オブジェクトです。

### 返値

{{domxref("MediaElementAudioSourceNode")}} です。

## 例

以下の例では、 `createMediaElementSource()` を使用して {{htmlelement("audio") }} から音源を作成します。再生される音源は {{ domxref("GainNode") }} を介し {{ domxref("AudioDestinationNode") }} に渡されます。マウスポインターが動くと `updatePage()` 関数が呼ばれ、マウスポインターの Y 座標の値をウィンドウの高さで割った比率を元に現在のゲインを計算します。また、マウスポインターを上下に動かすことで、再生している音楽の音量を上げ下げできます。

> [!NOTE]
> [ライブで実行する例](https://mdn.github.io/webaudio-examples/media-source-buffer/)と、[ソース](https://github.com/mdn/media-source-buffer)を見ることができます。

```js
const audioCtx = new AudioContext();
const myAudio = document.querySelector("audio");

// MediaElementAudioSourceNodeを作成
// HTMLMediaElementをそこへ接続
const source = audioCtx.createMediaElementSource(myAudio);

// ゲインノードを作成
const gainNode = audioCtx.createGain();

// マウスポインターの Y 座標と
// 画面の高さを保持するための変数を作成
let curY;
const HEIGHT = window.innerHeight;

// マウスが動いたら新しいY座標を取得し、
// ゲインの値を設定する
document.onmousemove = updatePage;

function updatePage(e) {
  curY = e.pageY;
  gainNode.gain.value = curY / HEIGHT;
}

// AudioBufferSourceNode を gainNode へ接続
// gainNode を destination へ接続
// これで音楽の再生と、マウスカーソルで音量を調節できるようになる
source.connect(gainNode);
gainNode.connect(audioCtx.destination);
```

> [!NOTE]
> `createMediaElementSource()`を呼び出した結果、 {{domxref("HTMLMediaElement")}} からの音声再生は AudioContext の処理グラフに再ルーティングされます。そのため、メディアの再生/一時停止は、メディア要素 API とプレーヤコントロールを通して行うことができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
