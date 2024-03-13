---
title: "AudioContext: getOutputTimestamp() メソッド"
short-title: getOutputTimestamp()
slug: Web/API/AudioContext/getOutputTimestamp
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

**`getOutputTimestamp()`** は {{domxref("AudioContext")}} インターフェイスのメソッドで、現在の音声コンテキストに関係する 2 つの音声タイムスタンプが格納された新しい `AudioTimestamp` オブジェクトを返します。

2 つの値とは、以下のものです。

- `AudioTimestamp.contextTime`: コンテキストの {{domxref("BaseAudioContext/currentTime", "AudioContext.currentTime")}} で用いられるのと同じ単位と始点の、現在音声出力デバイスで出力されているサンプルフレームの時刻（すなわち、出力音声ストリームの位置）です。
  基本的には、これは音声コンテキストが最初に作られてからの時間です。
- `AudioTimestamp.performanceTime`: {{domxref("performance.now()")}} で用いられるのと同じ単位と始点の、`contextTime` の値に対応するサンプルフレームが音声出力デバイスで出力される時刻の推定値です。これは、音声コンテキストを含む文章が最初に描画されてからの時間です。

## 構文

```js-nolint
getOutputTimestamp()
```

### 引数

なし

### 返値

`AudioTimestamp` オブジェクトです。このオブジェクトは以下のプロパティを持ちます。

- `contextTime`: `BaseAudioContext` の {{domxref("BaseAudioContext/currentTime","currentTime")}} で用いられる時間座標系上の点で、音声コンテキストが最初に作られてからの時間です。
- `performanceTime`: `Performance` インターフェイスで用いられる時間座標系上の点で、音声コンテキストを含む文章が最初に描画されてからの時間です。

## 例

以下のコードでは、play ボタンが押されると音声ファイルの再生を開始し、`requestAnimationFrame` によるループを開始します。このループでは、継続して `contextTime` と `performanceTime` を出力します。

この例のコード全体は [output-timestamp](https://github.com/mdn/webaudio-examples/blob/master/output-timestamp/index.html) で見ることができます。([動く例を見る](https://mdn.github.io/webaudio-examples/output-timestamp/))

```js
// play ボタンを押す
playBtn.addEventListener("click", () => {
  // ユーザーの操作があったので、audioCtx を作ることができる
  if (!audioCtx) {
    audioCtx = new AudioContext();
  }
  source = new AudioBufferSourceNode(audioCtx);
  getData();
  source.start(0);
  playBtn.disabled = true;
  stopBtn.disabled = false;
  rAF = requestAnimationFrame(outputTimestamps);
});

// stop ボタンを押す
stopBtn.addEventListener("click", () => {
  source.stop(0);
  playBtn.disabled = false;
  stopBtn.disabled = true;
  cancelAnimationFrame(rAF);
});

// タイムスタンプ出力用の補助関数
function outputTimestamps() {
  const ts = audioCtx.getOutputTimestamp();
  output.textContent = `Context time: ${ts.contextTime} | Performance time: ${ts.performanceTime}`;
  rAF = requestAnimationFrame(outputTimestamps); // 自身を再登録する
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
