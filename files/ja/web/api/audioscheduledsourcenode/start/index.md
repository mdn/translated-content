---
title: "AudioScheduledSourceNode: start() メソッド"
short-title: start()
slug: Web/API/AudioScheduledSourceNode/start
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef("Web Audio API")}}

`start()` は {{domxref("AudioScheduledSourceNode")}} のメソッドで、指定した時刻に再生が始まるように、音をスケジュールします。
時刻を指定しなかった場合は、すぐに音を再生し始めます。

## 構文

```js-nolint
start()
start(when)
```

### 引数

- `when` {{optional_inline}}
  - : 音の再生を始めるべき時刻を、秒単位で指定します。この値は {{domxref("AudioContext")}} がその {{domxref("BaseAudioContext/currentTime", "currentTime")}} 属性で使用しているのと同じ時間座標系で指定します。0 の値を指定する（または `when` 引数を完全に除外する）と、音の再生をすぐに始めるようにします。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `InvalidStateNode` {{domxref("DOMException")}}
  - : ノードが既に開始されている場合に発生します。このエラーは {{domxref("AudioScheduledSourceNode.stop", "stop()")}} を事前に呼び出したためにノードがもう実行されていない場合でも発生します。
- {{jsxref("RangeError")}}
  - : `when` に指定した値が負である場合に発生します。

## 例

この例では、2 秒後に再生を始め、その1秒後に再生を停止するようにスケジュールされた {{domxref("OscillatorNode")}} を作成する方法を示します。時刻は {{domxref("BaseAudioContext/currentTime", "AudioContext.currentTime")}} が返すコンテキストの現在のタイムスタンプに希望の秒数を加えることで計算されます。

```js
context = new AudioContext();
osc = context.createOscillator();
osc.connect(context.destination);

/* 発振器の開始時刻と停止時刻を設定する。 */

osc.start(context.currentTime + 2);
osc.stop(context.currentTime + 3);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("AudioScheduledSourceNode.stop", "stop()")}}
- {{domxref("AudioScheduledSourceNode")}}
- {{domxref("AudioBufferSourceNode")}}
- {{domxref("ConstantSourceNode")}}
- {{domxref("OscillatorNode")}}
