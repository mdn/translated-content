---
title: "BaseAudioContext: decodeAudioData() メソッド"
short-title: decodeAudioData()
slug: Web/API/BaseAudioContext/decodeAudioData
l10n:
  sourceCommit: 9b8fba1439f6069a90a16023e89e0f8bf363a957
---

{{ APIRef("Web Audio API") }}

`decodeAudioData()` は {{ domxref("BaseAudioContext") }} のメソッドで、 {{jsxref("ArrayBuffer")}} に書き込まれた音声ファイルデータを非同期にデコードするために使用されます。この場合、{{jsxref("ArrayBuffer")}} は {{domxref("Window/fetch", "fetch()")}}、{{domxref("XMLHttpRequest")}}、{{domxref("FileReader")}} などから読み込まれます。デコードされた {{domxref("AudioBuffer")}} は {{domxref("AudioContext")}} のサンプリングレートにリサンプリングされ、コールバックやプロミスに渡されます。

この方法は、オーディオトラックからウェブオーディオ API 用のオーディオソースを作成する際に推奨される方法です。この方法は、音声ファイルの断片的なデータではなく、完全なファイルデータに対してのみ動作します。

この関数は、音声データやエラーメッセージを非同期に返す 2 つの方法を実装しています。音声データで履行された {{jsxref("Promise")}} を返し、成功や失敗を処理するコールバック引数も受け入れます。この関数とのインターフェイスの主なメソッドは Promise の返値で、コールバック引数は古い理由から指定されたものです。

## 構文

```js-nolint
// 古いコールバックの構文:
decodeAudioData(arrayBuffer)

// 新しいプロミスベースの構文:
decodeAudioData(arrayBuffer, successCallback)
decodeAudioData(arrayBuffer, successCallback, errorCallback)
```

### 引数

- `arrayBuffer`
  - : デコードする音声データが入った ArrayBuffer です。通常は {{domxref("Window/fetch", "fetch()")}}、{{domxref("XMLHttpRequest")}}、{{domxref("FileReader")}} から取得します。
- `successCallback` {{optional_inline}}
  - : デコードが完了すると呼び出されるコールバック関数です。このコールバックの引数は 1 つで、 {{domxref("AudioBuffer")}} であり _decodedData_ （デコードされた PCM 音声データ）を表します。通常は、デコードされたデータを {{domxref("AudioBufferSourceNode")}} に入れて、そこから再生したり、好きなように操作したりすることができます。
- `errorCallback` {{optional_inline}}
  - : 任意のエラーコールバックで、音声データのデコードでエラーが発生すると呼び出されます。

### 返値

_decodedData_ で履行される {{jsxref("Promise") }} オブジェクトです。XHR 構文を用いる場合は、この返値を無視し、代わりにコールバック関数を使用してください。

## 例

ここでは最初にプロミスベースの構文を、次にコールバックの構文を取り上げます。

### プロミスベースの構文

この例では、 `loadAudio()` は {{domxref("Window/fetch", "fetch()")}} を使用して音声ファイルを取得し、それを {{domxref("AudioBuffer")}} にデコードします。そして、後で再生できるように `audioBuffer` をグローバル変数 `buffer` にキャッシュします。

> **メモ:** [完全な例をライブで実行](https://mdn.github.io/webaudio-examples/decode-audio-data/promise/)したり、[ソースを表示](https://github.com/mdn/webaudio-examples/blob/main/decode-audio-data/promise/)したりすることができます。

```js
let audioCtx;
let buffer;
let source;

async function loadAudio() {
  try {
    // Load an audio file
    const response = await fetch("viper.mp3");
    // Decode it
    buffer = await audioCtx.decodeAudioData(await response.arrayBuffer());
  } catch (err) {
    console.error(`Unable to fetch the audio file. Error: ${err.message}`);
  }
}
```

### コールバックの構文

この例では `loadAudio()` は {{domxref("Window/fetch", "fetch()")}} を用いて音声ファイルを取得し、コールバックベースの `decodeAudioData()` を用いて {{domxref("AudioBuffer")}} にデコードします。コールバックでは、デコードしたバッファーが再生されます。

> **メモ:** [完全な例をライブで実行](https://mdn.github.io/webaudio-examples/decode-audio-data/callback/)したり、[ソースを表示](https://github.com/mdn/webaudio-examples/blob/main/decode-audio-data/callback/)したりすることができます。

```js
let audioCtx;
let source;

function playBuffer(buffer) {
  source = audioCtx.createBufferSource();
  source.buffer = buffer;
  source.connect(audioCtx.destination);
  source.loop = true;
  source.start();
}

async function loadAudio() {
  try {
    // Load an audio file
    const response = await fetch("viper.mp3");
    // Decode it
    audioCtx.decodeAudioData(await response.arrayBuffer(), playBuffer);
  } catch (err) {
    console.error(`Unable to fetch the audio file. Error: ${err.message}`);
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
