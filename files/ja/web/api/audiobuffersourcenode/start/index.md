---
title: "AudioBufferSourceNode: start() メソッド"
short-title: start()
slug: Web/API/AudioBufferSourceNode/start
l10n:
  sourceCommit: acb89828aff8c275143fb250351bb9a35e94cf10
---

{{ APIRef("Web Audio API") }}

`start()` は {{ domxref("AudioBufferSourceNode") }} インターフェイスのメソッドで、
このメソッドは、バッファーに含まれる音声データの再生を予約したり、すぐに再生を開始したりするために使用されます。

## 構文

```js-nolint
start(when)
start(when, offset)
start(when, offset, duration)
```

### 引数

- `when` {{optional_inline}}
  - : 音が鳴り始めるべき時刻（秒単位）。 {{domxref("AudioContext")}} が使用するのと同じ時間座標系で指定します。もし `when` が ({{domxref("BaseAudioContext/currentTime", "AudioContext.currentTime")}} よりも小さいか、 0 であれば、音の再生はすぐに開始されます。**既定値は 0 です。**
- `offset` {{optional_inline}}
  - : 音声バッファー内で再生を始めるべき時刻を、 `AudioContext` と同じ時間座標系で秒単位で指定したオフセットです。例えば、 10 秒の音声クリップの半分から再生を始めるには、 `offset` は 5 となります。既定値である 0 は、音声バッファーの先頭から再生を始めます。再生される音声の終わりを過ぎたオフセット（音声バッファーの {{domxref("AudioBuffer.duration", "duration")}} や {{domxref("AudioBufferSourceNode.loopEnd", "loopEnd")}} 属性に基づく）は、許容範囲内の最大値に暗黙に収められます。サウンドへのオフセットの計算は、現在の再生速度ではなく、音声バッファー本来のサンプルレートを使用して行われるため、サウンドが通常の 2 倍の速度で再生されている場合でも、 10 秒の音声バッファーの中間の点は 5 となります。
- `duration` {{optional_inline}}
  - : サウンドの再生時間を秒単位で指定します。この引数が指定されなかった場合、サウンドは自然に終了するか、 {{domxref("AudioScheduledSourceNode.stop", "stop()")}} メソッドを使用して停止されるまで再生されます。この引数を使用すると、 `start(when, offset)` を呼び出してから `stop(when+duration)` を使用するのと機能的に同じになります。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- {{jsxref("TypeError")}}
  - : 3 つの時間引数のうち 1 つ以上に負の値が指定された場合に発生します。時間物理学の法則を改ざんしようとしないでください。
- `InvalidStateError` {{domxref("DOMException")}}
  - : `start()` が既に呼び出されていた場合に発生します。この関数は `AudioBufferSourceNode` が生きている間に一度だけ呼び出すことができます。

## 例

最も単純な例は、音声バッファー再生を最初から始めるだけです。この場合、引数を指定する必要はありません。

```js
source.start();
```

次はそれよりも複雑な再生方法です。1 秒待った後、音声バッファーの 3 秒経過した位置から、10 秒間再生します。

```js
source.start(audioCtx.currentTime + 1, 3, 10);
```

> **メモ:** `start()` の使い方の完全な例は {{domxref("BaseAudioContext/decodeAudioData", "AudioContext.decodeAudioData()")}} を参照してください。[例をライブで試してみる](https://mdn.github.io/webaudio-examples/decode-audio-data/promise/)ことや、[この例のソース](https://github.com/mdn/webaudio-examples/tree/main/decode-audio-data)を見てみることもできます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
