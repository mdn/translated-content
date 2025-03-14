---
title: "AudioContext: createMediaStreamSource() メソッド"
short-title: createMediaStreamSource()
slug: Web/API/AudioContext/createMediaStreamSource
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

`createMediaStreamSource()` は {{ domxref("AudioContext") }} インターフェイスのメソッドで、指定のメディアストリームから（言い換えると {{ domxref("navigator.getUserMedia") }} インスタンスから） {{ domxref("MediaStreamAudioSourceNode") }} オブジェクトを生成します。ここからの音声は再生や編集ができます。

メディアストリームの音声ソースノードの詳細は{{ domxref("MediaStreamAudioSourceNode") }}のページを参照してください。

## 構文

```js-nolint
createMediaStreamSource(stream)
```

### 引数

- `stream`
  - : 操作のために音声グラフに加えたい {{domxref("MediaStream")}} オブジェクト。

### 返値

指定したソースストリームから取得したメディアを持つ音声ノードを表す新しい {{domxref("MediaStreamAudioSourceNode")}} オブジェクトです。

## 例

この例では、メディア（音声＋映像）ストリームを {{ domxref("navigator.getUserMedia") }} から獲得し、それを {{ htmlelement("video") }} 要素に渡し、映像は再生しますが音声は再生しないようにします。音声は {{ domxref("MediaStreamAudioSourceNode") }} に渡します。次に、音声をローパスフィルター {{ domxref("BiquadFilterNode") }} （低音を強めるように働きます）に渡し、そして {{domxref("AudioDestinationNode") }} に渡します。

{{ htmlelement("video") }} 要素の下のスライダーはローパスフィルターの増幅量を操作します—スライダーで値を大きくすると、より低音が強くなります。

> **メモ:** [この例の実行](https://mdn.github.io/stream-source-buffer/)と[ソースの閲覧](https://github.com/mdn/stream-source-buffer)もできます。

```js
const pre = document.querySelector("pre");
const video = document.querySelector("video");
const myScript = document.querySelector("script");
const range = document.querySelector("input");

// getUserMediaのブロック - ストリームを得る
// MediaStreamAudioSourceNodeに渡す
// 映像はvideo要素に出力する

if (navigator.mediaDevices) {
  console.log("getUserMedia supported.");
  navigator.mediaDevices
    .getUserMedia({ audio: true, video: true })
    .then((stream) => {
      video.srcObject = stream;
      video.onloadedmetadata = (e) => {
        video.play();
        video.muted = true;
      };

      // MediaStreamAudioSourceNode を生成し、
      // それに HTMLMediaElement を渡す
      const audioCtx = new AudioContext();
      const source = audioCtx.createMediaStreamSource(stream);

      // 二次フィルターを生成する
      const biquadFilter = audioCtx.createBiquadFilter();
      biquadFilter.type = "lowshelf";
      biquadFilter.frequency.value = 1000;
      biquadFilter.gain.value = range.value;

      // AudioBufferSourceNode を gainNode に、
      // そして gainNode を destination に接続する
      // これでマウスを動かすことで音楽のボリュームを調整することができる
      source.connect(biquadFilter);
      biquadFilter.connect(audioCtx.destination);

      // マウスが動いたとき新しい座標を得る
      // そして増幅量を更新する

      range.oninput = () => {
        biquadFilter.gain.value = range.value;
      };
    })
    .catch((err) => {
      console.log(`The following gUM error occurred: ${err}`);
    });
} else {
  console.log("getUserMedia not supported on your browser!");
}

// pre 要素にスクリプトを書き出す

pre.innerHTML = myScript.innerHTML;
```

> **メモ:** `createMediaStreamSource()` を呼び出した結果、メディアストリームからの音声再生は {{domxref("AudioContext")}} の処理グラフに再ルーティングされます。そのため、ストリームの再生/一時停止は、メディア要素 API とプレーヤーコントロールを通して行うことができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
