---
title: "BaseAudioContext: createPanner() メソッド"
short-title: createPanner()
slug: Web/API/BaseAudioContext/createPanner
l10n:
  sourceCommit: 10b342385644e822d123694ad3bc8c2ca9abb2dc
---

{{ APIRef("Web Audio API") }}

`createPanner()` は {{ domxref("BaseAudioContext") }} インターフェイスのメソッドで、新しい {{domxref("PannerNode") }} を作成するために使用されます。これは、入力される音声ストリームを三次元空間で空間化するのに使われます。

パナーノードは AudioContext の {{domxref("AudioListener") }} （{{domxref("BaseAudioContext/listener", "AudioContext.listener") }} 属性によって定義）に関連して空間化され、音声を聞く人の位置と向きを表現します。

> [!NOTE]
> {{domxref("PannerNode.PannerNode", "PannerNode()")}} コンストラクターは {{domxref("PannerNode")}} を作成するための推奨される方法です。 [AudioNode の作成](/ja/docs/Web/API/AudioNode#audionode_の生成)を参照してください。

## 構文

```js-nolint
createPanner()
```

### 引数

なし。

### 返値

{{domxref("PannerNode")}} です。

## 例

次の例では、 `createPanner()` メソッドと {{domxref("AudioListener")}} と {{domxref("PannerNode")}} を使って音声の空間化を制御する例を見ることができます。一般に、音声リスナーとパンナー（音源）が最初に占める三次元空間の位置を定義し、アプリケーションが使用されるたびに、これらの一方または両方の位置を更新します。たとえば、ゲームの世界でキャラクターを動かしていて、キャラクターがステレオなどの音楽プレーヤーに近づいたり遠ざかったりすると、音声の配信がリアルに変化するようにしたい場合があります。この例では `moveRight()`, `moveLeft()` などの関数でこれを制御し、 `PositionPanner()` 関数でパンナーの位置に新しい値を設定しているのが分かると思います。

完全な実装を見るには、私たちの [panner-node の例](https://mdn.github.io/webaudio-examples/panner-node/)（[ソースコードを表示](https://github.com/mdn/webaudio-examples/tree/main/panner-node)）をチェックしてください。このデモでは、 2.5 次元の「金属の部屋」に移動し、ラジカセでトラックを再生し、ラジカセの周りを歩いて音の変化を見ることができます。このデモでは、ラジカセの周りを歩いて、音がどのように変化するかを見ることができます。

なお、機能検出の使用方法に注意してください。ブラウザーが位置の設定などを行うために、新しいプロパティ値（例えば {{domxref("AudioListener.forwardX") }}）に対応している場合はそれを利用し、古いメソッドには対応しているが新しいプロパティには対応していない場合には、古いメソッド（例えば {{domxref("AudioListener.setOrientation()")}}）を利用しています。

```js
// set up listener and panner position information
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const xPos = Math.floor(WIDTH / 2);
const yPos = Math.floor(HEIGHT / 2);
const zPos = 295;

// define other variables

const audioCtx = new AudioContext();

const panner = audioCtx.createPanner();
panner.panningModel = "HRTF";
panner.distanceModel = "inverse";
panner.refDistance = 1;
panner.maxDistance = 10000;
panner.rolloffFactor = 1;
panner.coneInnerAngle = 360;
panner.coneOuterAngle = 0;
panner.coneOuterGain = 0;

if (panner.orientationX) {
  panner.orientationX.setValueAtTime(1, audioCtx.currentTime);
  panner.orientationY.setValueAtTime(0, audioCtx.currentTime);
  panner.orientationZ.setValueAtTime(0, audioCtx.currentTime);
} else {
  panner.setOrientation(1, 0, 0);
}

const listener = audioCtx.listener;

if (listener.forwardX) {
  listener.forwardX.setValueAtTime(0, audioCtx.currentTime);
  listener.forwardY.setValueAtTime(0, audioCtx.currentTime);
  listener.forwardZ.setValueAtTime(-1, audioCtx.currentTime);
  listener.upX.setValueAtTime(0, audioCtx.currentTime);
  listener.upY.setValueAtTime(1, audioCtx.currentTime);
  listener.upZ.setValueAtTime(0, audioCtx.currentTime);
} else {
  listener.setOrientation(0, 0, -1, 0, 1, 0);
}

let source;

const play = document.querySelector(".play");
const stop = document.querySelector(".stop");

const boomBox = document.querySelector(".boom-box");

const listenerData = document.querySelector(".listener-data");
const pannerData = document.querySelector(".panner-data");

leftBound = -xPos + 50;
rightBound = xPos - 50;

xIterator = WIDTH / 150;

// listener will always be in the same place for this demo

if (listener.positionX) {
  listener.positionX.setValueAtTime(xPos, audioCtx.currentTime);
  listener.positionY.setValueAtTime(yPos, audioCtx.currentTime);
  listener.positionZ.setValueAtTime(300, audioCtx.currentTime);
} else {
  listener.setPosition(xPos, yPos, 300);
}

listenerData.textContent = `Listener data: X ${xPos} Y ${yPos} Z 300`;

// panner will move as the boombox graphic moves around on the screen
function positionPanner() {
  if (panner.positionX) {
    panner.positionX.setValueAtTime(xPos, audioCtx.currentTime);
    panner.positionY.setValueAtTime(yPos, audioCtx.currentTime);
    panner.positionZ.setValueAtTime(zPos, audioCtx.currentTime);
  } else {
    panner.setPosition(xPos, yPos, zPos);
  }
  pannerData.textContent = `Panner data: X ${xPos} Y ${yPos} Z ${zPos}`;
}
```

> [!NOTE]
> リスナーやパンナーの位置値をどのように設定すれば、画面上のビジュアルに適したサウンドになるかという点では、少し面倒な計算が必要となりますが、すこしやれば慣れる類のものです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
