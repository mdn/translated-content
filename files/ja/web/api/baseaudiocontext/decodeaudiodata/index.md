---
title: BaseAudioContext.decodeAudioData()
slug: Web/API/BaseAudioContext/decodeAudioData
---

{{ APIRef("Web Audio API") }}

`decodeAudioData()` は {{ domxref("BaseAudioContext") }} のメソッドで、 {{jsxref("ArrayBuffer")}} に書き込まれた音声ファイルデータを非同期にデコードするために使用されます。この場合、 `ArrayBuffer` は {{domxref("XMLHttpRequest")}} と {{domxref("FileReader")}} から読み込まれます。デコードされた {{domxref("AudioBuffer")}} は {{domxref("AudioContext")}} のサンプリングレートにリサンプリングされ、コールバックやプロミスに渡されます。

この方法は、オーディオトラックからウェブオーディオ API 用のオーディオソースを作成する際に推奨される方法です。この方法は、音声ファイルの断片的なデータではなく、完全なファイルデータに対してのみ動作します。

## 構文

```js
// 古いコールバックの構文:
decodeAudioData(arrayBuffer, successCallback);
decodeAudioData(arrayBuffer, successCallback, errorCallback);

// 新しいプロミスベースの構文:
decodeAudioData(arrayBuffer);
```

### 引数

- _arrayBuffer_
  - : デコードする音声データが入った ArrayBuffer です。通常は{{domxref("XMLHttpRequest")}}, {{domxref("fetch()")}}, {{domxref("FileReader")}} から取得します。
- _successCallback_
  - : デコードが完了すると呼び出されるコールバック関数です。このコールバックの引数は 1 つで、 {{domxref("AudioBuffer")}} であり _decodedData_ （デコードされた PCM 音声データ）を表します。通常は、デコードされたデータを {{domxref("AudioBufferSourceNode")}} に入れて、そこから再生したり、好きなように操作したりすることができます。
- _errorCallback_ {{optional_inline}}
  - : 任意のエラーコールバックで、音声データのデコードでエラーが発生すると呼び出されます。

### 返値

なし、または _decodedData_ で履行される {{jsxref("Promise") }} オブジェクトです。

## 例

ここでは最初に古いコールバックベースのシステムを、次に新しいプロミスベースの構文を取り上げます。

### 古いコールバックベースの構文

この例では、 `getData()` 関数は XHR を使用して音声トラックを読み込み、リクエストの `responseType` を `arraybuffer` に設定して、レスポンスとして配列バッファーを返すようにして、それを `audioData` 変数に格納しています。それからこのバッファーを `decodeAudioData()` 関数に渡します。成功したコールバックは、デコードに成功した PCM データを受け取り、 {{domxref("BaseAudioContext/createBufferSource", "AudioContext.createBufferSource()")}} で作成した {{ domxref("AudioBufferSourceNode") }} に入れ、ソースを {{domxref("BaseAudioContext/destination", "AudioContext.destination")}} に接続してループするように設定します。

ボタンは単に `getData()` を実行して、それぞれトラックの読み込みと再生、停止を行うだけです。ソースの `stop()` メソッドが呼ばれると、ソースは消滅します。

> **メモ:** [例をライブで実行](https://mdn.github.io/webaudio-examples/decode-audio-data/) （または[ソースを閲覧](https://github.com/mdn/webaudio-examples/tree/master/decode-audio-data)することができます。）

```js
// 変数の定義

var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var source;

var pre = document.querySelector("pre");
var myScript = document.querySelector("script");
var play = document.querySelector(".play");
var stop = document.querySelector(".stop");

// 音声トラックの読み込みには XHR を使い、
// decodeAudioData でデコードし、バッファーに格納する
// そして、そのバッファーを source に設定する

function getData() {
  source = audioCtx.createBufferSource();
  var request = new XMLHttpRequest();

  request.open("GET", "viper.ogg", true);

  request.responseType = "arraybuffer";

  request.onload = function () {
    var audioData = request.response;

    audioCtx.decodeAudioData(
      audioData,
      function (buffer) {
        source.buffer = buffer;

        source.connect(audioCtx.destination);
        source.loop = true;
      },

      function (e) {
        console.log("Error with decoding audio data" + e.err);
      },
    );
  };

  request.send();
}

// 音声の停止と再生を行うボタン

play.onclick = function () {
  getData();
  source.start(0);
  play.setAttribute("disabled", "disabled");
};

stop.onclick = function () {
  source.stop(0);
  play.removeAttribute("disabled");
};

// pre要素にスクリプトを設定する

pre.innerHTML = myScript.innerHTML;
```

### 新しいプロミスベースの構文

```js
ctx.decodeAudioData(audioData).then(function (decodedData) {
  // デコードしたデータをここで使う
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
