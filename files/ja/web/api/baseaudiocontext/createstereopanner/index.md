---
title: "BaseAudioContext: createStereoPanner() メソッド"
short-title: createStereoPanner()
slug: Web/API/BaseAudioContext/createStereoPanner
l10n:
  sourceCommit: 10b342385644e822d123694ad3bc8c2ca9abb2dc
---

{{ APIRef("Web Audio API") }}

`createStereoPanner()` は {{ domxref("BaseAudioContext") }} インターフェイスのメソッドで、音源にステレオパンニングを適用する{{ domxref("StereoPannerNode") }}を生成します。
入力された音声ストリームは、[低コストのパンニングアルゴリズム](https://webaudio.github.io/web-audio-api/#stereopanner-algorithm)で位置が決められます。

> [!NOTE]
> {{domxref("StereoPannerNode.StereoPannerNode", "StereoPannerNode()")}} コンストラクターは {{domxref("StereoPannerNode")}} を作成するための推奨される方法です。 [AudioNode の作成](/ja/docs/Web/API/AudioNode#audionode_の生成)を参照してください。

## 構文

```js-nolint
createStereoPanner()
```

### 引数

なし。

### 返値

{{domxref("StereoPannerNode")}} を返します。

## 例

[StereoPannerNode の例](https://mdn.github.io/webaudio-examples/stereo-panner-node/)（[ソースコードを参照](https://github.com/mdn/webaudio-examples/tree/main/stereo-panner-node)）の HTML では、単純な {{htmlelement("audio")}} 要素と、パン値を増減するスライダー {{HTMLElement("input")}} を用意しています。 JavaScript では、{{domxref("MediaElementAudioSourceNode")}} と {{domxref("StereoPannerNode")}} を作成し、`connect()` メソッドを用いて両者をつなげます。そして、`oninput` イベントハンドラーを使って {{domxref("StereoPannerNode.pan")}} 引数の値を変更し、スライダーが動いたときにパン値の表示を更新しています。

音楽再生中にスライダーを左右に動かすと、出力の左右のスピーカーにそれぞれ音楽がパンされます。

```js
const audioCtx = new AudioContext();
const myAudio = document.querySelector("audio");

const panControl = document.querySelector(".panning-control");
const panValue = document.querySelector(".panning-value");

// MediaElementAudioSourceNode を生成し、
// そこに HTMLMediaElementを 入れる
const source = audioCtx.createMediaElementSource(myAudio);

// ステレオパンナーを生成する
const panNode = audioCtx.createStereoPanner();

// イベントハンドラー関数で、スライダーが動いたとき
// 左右のパンの値を左右する

panControl.oninput = () => {
  panNode.pan.setValueAtTime(panControl.value, audioCtx.currentTime);
  panValue.innerHTML = panControl.value;
};

// MediaElementAudioSourceNode を panNode に、 panNode を
// 出力先に接続し、音楽を再生してコントロールでパンを調整
// できるようにします。
source.connect(panNode);
panNode.connect(audioCtx.destination);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
