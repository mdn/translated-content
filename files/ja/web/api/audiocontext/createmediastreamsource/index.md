---
title: AudioContext.createMediaStreamSource()
slug: Web/API/AudioContext/createMediaStreamSource
---

{{ APIRef("Web Audio API") }}

インターフェースの`createMediaStreamSource()`メソッドは、指定のメディアストリームから(言い換えると{{ domxref("navigator.getUserMedia") }}インスタンスから){{ domxref("MediaStreamAudioSourceNode") }}オブジェクトを生成します。ここからの音声は再生や編集ができます。

メディアストリームオーディオソースノードの詳細は{{ domxref("MediaStreamAudioSourceNode") }}のページを参照してください。

## 構文

```js
var audioCtx = new AudioContext();
var source = audioCtx.createMediaStreamSource(stream);
```

### 引数

- stream
  - : 操作のためにオーディオグラフに加えたい{{domxref("MediaStream")}}オブジェクト。

### 戻り値

{{domxref("MediaStreamAudioSourceNode")}}

## 例

この例では、メディア(音声+映像)ストリームを{{ domxref("navigator.getUserMedia") }}から獲得し、それを{{ htmlelement("video") }}要素に渡し、映像は再生しますが音声は再生しないようにします。音声は{{ domxref("MediaStreamAudioSourceNode") }}に渡します。次に、音声をローパスフィルタ{{ domxref("BiquadFilterNode") }}(低音を強めるように働きます)に渡し、そして{{domxref("AudioDestinationNode") }}に渡します。

{{ htmlelement("video") }}要素の下のスライダーはローパスフィルタの増幅量を操作します—スライダーで値を大きくすると、より低音が強くなります!

> **メモ:** [この例の実行](http://mdn.github.io/stream-source-buffer/)と[ソースの閲覧](https://github.com/mdn/stream-source-buffer)もできます。

```js
// プレフィックスが必要な場合を考慮して、getUserMediaはブラウザのバージョンごとに分ける

navigator.getUserMedia =
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.msGetUserMedia;

// 他の変数を定義する

var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var myAudio = document.querySelector("audio");
var pre = document.querySelector("pre");
var video = document.querySelector("video");
var myScript = document.querySelector("script");
var range = document.querySelector("input");

// マウスポインタのY座標と、画面の高さを格納する変数を定義する
var CurY;
var HEIGHT = window.innerHeight;

// getUserMediaのブロック - ストリームを得る
// MediaStreamAudioSourceNodeに渡す
// 映像はvideo要素に出力する

if (navigator.getUserMedia) {
  console.log("getUserMedia supported.");
  navigator.getUserMedia(
    // 制約: このアプリで音声と映像を有効にする
    {
      audio: true,
      video: true,
    },

    // 成功時のコールバック
    function (stream) {
      video.src = (window.URL && window.URL.createObjectURL(stream)) || stream;
      video.onloadedmetadata = function (e) {
        video.play();
        video.muted = "true";
      };

      // MediaStreamAudioSourceNodeを生成し、それにHTMLMediaElementを渡す
      var source = audioCtx.createMediaStreamSource(stream);

      // 二次フィルターを生成する
      var biquadFilter = audioCtx.createBiquadFilter();
      biquadFilter.type = "lowshelf";
      biquadFilter.frequency.value = 1000;
      biquadFilter.gain.value = range.value;

      // AudioBufferSourceNodeをgainNodeに、そしてgainNodeをdestinationに接続する
      // これでマウスを動かすことで音楽のボリュームを調整することができる
      source.connect(biquadFilter);
      biquadFilter.connect(audioCtx.destination);

      // マウスが動いたとき新しい座標を得る
      // そして増幅量を更新する

      range.oninput = function () {
        biquadFilter.gain.value = range.value;
      };
    },

    // エラー時のフィードバック
    function (err) {
      console.log("The following gUM error occured: " + err);
    },
  );
} else {
  console.log("getUserMedia not supported on your browser!");
}

// pre要素にスクリプトを書き出す

pre.innerHTML = myScript.innerHTML;
```

> **メモ:** `createMediaStreamSource()`の呼び出しによるメディアストリームの音声は、再び`AudioContext`の処理グラフに入ります。よって、ストリームの再生/停止は、まだメディア API とプレイヤーの操作で行えます。

## 仕様

{{Specifications}}

## ブラウザ互換性

{{Compat("api.AudioContext.createMediaStreamSource")}}

## 参考

- [Using the Web Audio API](/ja/docs/Web_Audio_API/Using_Web_Audio_API)
