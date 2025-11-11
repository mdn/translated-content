---
title: "AudioNode: connect() メソッド"
slug: Web/API/AudioNode/connect
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

{{ domxref("AudioNode") }} インターフェイスの `connect()` メソッドは、ノードの出力のうち 1 個を接続先に接続できます。接続先は、別の `AudioNode` を用いる (音声データを指定のノードに導く) こともできますし、{{domxref("AudioParam")}} を用いる (ノードの出力データにより時間経過とともに自動的にパラメーターの値を変える) こともできます。

## 構文

```js-nolint
connect(destination)
connect(destination, outputIndex)
connect(destination, outputIndex, inputIndex)
```

### 引数

- `destination`
  - : 接続する {{domxref("AudioNode")}} または {{domxref("AudioParam")}} です。
- `outputIndex` {{optional_inline}}
  - : この `AudioNode` のどの出力を接続先に接続するかを指定するインデックスです。インデックス番号は出力のチャンネル数に基づいて決められます。([オーディオチャンネル](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#%E3%82%AA%E3%83%BC%E3%83%87%E3%82%A3%E3%82%AA%E3%83%81%E3%83%A3%E3%83%B3%E3%83%8D%E3%83%AB)を参照してください)
    ある出力のある入力への接続は 1 回しかできません (2 回目以降は無視されます) が、`connect()` を複数回呼ぶことで 1 個の出力を複数の入力に接続できます。これにより[ファンアウト](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#%E3%83%95%E3%82%A1%E3%83%B3%E3%82%A4%E3%83%B3%E3%81%A8%E3%83%95%E3%82%A1%E3%83%B3%E3%82%A2%E3%82%A6%E3%83%88)を実現できます。デフォルト値は 0 です。
- `inputIndex` {{optional_inline}}
  - : 接続先のどの入力をこの `AudioNode` に接続するかを指定するインデックスです。デフォルト値は 0 です。インデックス番号は入力のチャンネル数に基づいて決められます。([オーディオチャンネル](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#%E3%82%AA%E3%83%BC%E3%83%87%E3%82%A3%E3%82%AA%E3%83%81%E3%83%A3%E3%83%B3%E3%83%8D%E3%83%AB)を参照してください) ある `AudioNode` を別の `AudioNode` に接続し、この `AudioNode` を再び最初の `AudioNode` に接続することで、閉路を作ることもできます。

### 返値

接続先がノードの場合は、`connect()` は接続先の {{domxref("AudioNode")}} オブジェクトを返すので、複数の `connect()` の呼び出しを連続させることができます。このインターフェイスの実装が古く、{{jsxref("undefined")}} を返すブラウザーもあります。

接続先が `AudioParam` の場合は、`connect()` は `undefined` を返します。

### 例外

- `IndexSizeError` {{domxref("DOMException")}}
  - : `outputIndex` または `inputIndex` として指定された値が存在する入力や出力に対応しないとき投げられます。
- `InvalidAccessError` {{domxref("DOMException")}}
  - : 接続先のノードが接続元のノードと同じ音声コンテキストにないとき投げられます。
- `NotSupportedError` {{domxref("DOMException")}}
  - :指定された接続により (音声が同じノードを繰り返し流れる) 閉路が作られ、この閉路の中に同じ音声フレームを無限に参照して処理結果の波形が詰まるのを防ぐ {{domxref("DelayNode")}} オブジェクトがないとき投げられます。接続先を {{domxref("AudioParam")}} として引数 `inputIndex` が使われたときも投げられます。

## 例

### 音声入力への接続

`connect()` メソッドの最もわかりやすい使い方は、次の処理のためにあるノードの音声出力を別のノードの音声入力に接続することです。たとえば、{{domxref("MediaElementAudioSourceNode")}} が出力する音声 ({{HTMLElement("audio")}} などの HTML メディア要素が出力する音声) を {{domxref("BiquadFilterNode")}} を用いて実装されたバンドパスフィルターに通し、音声をスピーカーに送る前にノイズを減らすことができます。

この例では発振器を作成し、ゲインノードに接続することで、ゲインノードが発振器ノードの音量を制御できるようにします。

```js
const audioCtx = new AudioContext();

const oscillator = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);
```

### AudioParam の例

この例では、{{domxref("GainNode")}} のゲインの値を遅い周波数を設定した {{domxref("OscillatorNode")}} を用いて変えます。この手法は、_LFO_ により制御されたパラメーターと呼ばれます。

```js
const audioCtx = new AudioContext();

// 音を出すため通常の発振器を作成する
const oscillator = audioCtx.createOscillator();

// LFO (Low-frequency oscillator) として用い、
// パラメーターを制御する 2 個目の発振器を作成する
const lfo = audioCtx.createOscillator();

// 2 個目の発振器の周波数を低く設定する
lfo.frequency.value = 2.0; // 2Hz (1 秒あたり 2 回の振動)

// ゲインの AudioParam が LFO により制御されるゲインノードを作成する
const gain = audioCtx.createGain();

// LFO をゲインの AudioParam に接続する。これは、LFO の値は
// 音声は生成せず、かわりにゲインの値を変えるということである
lfo.connect(gain.gain);

// 音を出す発振器をゲインノードに接続する
oscillator.connect(gain);

// ゲインノードを出力先に接続し、音を聞けるようにする
gain.connect(audioCtx.destination);

// 音を出す発振器を起動する
oscillator.start();

// ゲインの値を変える発振器を起動する
lfo.start();
```

#### AudioParam のポイント

`connect()` を複数回呼ぶことにより、1 個の `AudioNode` の出力を複数の {{ domxref("AudioParam") }} に接続したり、複数の `AudioNode` の出力を 1 個の {{ domxref("AudioParam") }} に接続したりできます。これにより、[ファンインとファンアウト](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#%E3%83%95%E3%82%A1%E3%83%B3%E3%82%A4%E3%83%B3%E3%81%A8%E3%83%95%E3%82%A1%E3%83%B3%E3%82%A2%E3%82%A6%E3%83%88)に対応しています。

{{ domxref("AudioParam") }} は接続された任意の `AudioNode` から計算された音声データを受け取り、(モノラルでなければ) [ダウンミキシング](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#%E3%82%A2%E3%83%83%E3%83%97%E3%83%9F%E3%82%AD%E3%82%B7%E3%83%B3%E3%82%B0%E3%81%A8%E3%83%80%E3%82%A6%E3%83%B3%E3%83%9F%E3%82%AD%E3%82%B7%E3%83%B3%E3%82%B0)によりモノラルに変換します。そして、それを同様の他の出力、およびスケジュールされた時間での変化を含むそのパラメーター本来の値 (音声の接続がないとき通常 {{ domxref("AudioParam") }} が取るはずの値) とミックスします。

そのため、{{domxref("AudioParam")}} の値を中央の周波数に設定し、音源と {{domxref("AudioParam")}} の間で {{domxref("GainNode")}} を用いて {{domxref("AudioParam")}} の変化の幅を調整することで、{{domxref("AudioParam")}} が変化する範囲を設定できます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Web Audio API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
