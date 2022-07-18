---
title: BaseAudioContext.createStereoPanner()
slug: Web/API/BaseAudioContext/createStereoPanner
tags:
  - API
  - AudioContext
  - BaseAudioContext
  - メディア
  - メソッド
  - リファレンス
  - ウェブ音声 API
  - createStereoPanner
browser-compat: api.BaseAudioContext.createStereoPanner
translation_of: Web/API/BaseAudioContext/createStereoPanner
original_slug: Web/API/AudioContext/createStereoPanner
---
{{ APIRef("Web Audio API") }}

`createStereoPanner()` は {{ domxref("BaseAudioContext") }} インターフェイスのメソッドで、音源にステレオパンニングを適用する{{ domxref("StereoPannerNode") }}を生成します。
入力された音声ストリームは、[低コストのパンニングアルゴリズム](https://webaudio.github.io/web-audio-api/#stereopanner-algorithm)で位置が決められます。

> **Note:** {{domxref("StereoPannerNode.StereoPannerNode", "StereoPannerNode()")}} コンストラクターは {{domxref("StereoPannerNode")}} を作成するための推奨される方法です。 [AudioNode の作成](/ja/docs/Web/API/AudioNode#creating_an_audionode)を参照してください。

## 構文

```js
createStereoPanner()
```

### 引数

なし。

### 返値

{{domxref("StereoPannerNode")}} を返します。

## 例

[StereoPannerNode の例](https://mdn.github.io/webaudio-examples/stereo-panner-node/)（[ソースコードを参照](https://github.com/mdn/webaudio-examples/tree/master/stereo-panner-node)）の HTML では、単純な {{htmlelement("audio")}} 要素と、パン値を増減するスライダー {{HTMLElement("input")}} を用意しています。 JavaScript では、{{domxref("MediaElementAudioSourceNode")}} と {{domxref("StereoPannerNode")}} を作成し、`connect()` メソッドを用いて両者をつなげます。そして、`oninput` イベントハンドラーを使って {{domxref("StereoPannerNode.pan")}} パラメータの値を変更し、スライダーが動いたときにパン値の表示を更新しています。

音楽再生中にスライダーを左右に動かすと、出力の左右のスピーカーにそれぞれ音楽がパンされます。

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var myAudio = document.querySelector('audio');

var panControl = document.querySelector('.panning-control');
var panValue = document.querySelector('.panning-value');

pre.innerHTML = myScript.innerHTML;

// MediaElementAudioSourceNode を生成し、
// そこに HTMLMediaElementを 入れる
var source = audioCtx.createMediaElementSource(myAudio);

// ステレオパンナーを生成する
var panNode = audioCtx.createStereoPanner();

// イベントハンドラー関数で、スライダーが動いたとき
// 左右のパンの値を左右する

panControl.oninput = function() {
  panNode.pan.setValueAtTime(panControl.value, audioCtx.currentTime);
  panValue.innerHTML = panControl.value;
}

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

- [ウェブ音声 API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
