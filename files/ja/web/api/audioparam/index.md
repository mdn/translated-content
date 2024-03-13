---
title: AudioParam
slug: Web/API/AudioParam
l10n:
  sourceCommit: 4adfb71916dac6948dd4aafc8e2bf95f00f1def3
---

{{APIRef("Web Audio API")}}

Web Audio API の `AudioParam` インターフェイスは、オーディオ関連のパラメーターを表します。通常は {{domxref("AudioNode")}} のパラメーター（{{ domxref("GainNode.gain") }} など）です。

`AudioParam` は特定の値または値の変化に設定でき、特定の時間に特定のパターンに従って発生するようにスケジュールできます。

それぞれの `AudioParam` には、いつ、どのように値を変更するかを定義するイベントのリストを持っており、最初は空です。このリストが空でない場合、 `AudioParam.value` 属性を使用した変更は無視されます。このイベントのリストにより、任意のタイムラインベースのオートメーションカーブを使用して、とても正確な時間に変更をスケジュールすることができます。使用される時間は {{domxref("BaseAudioContext/currentTime", "AudioContext.currentTime")}} で定義されたものです。

## AudioParam の種類

`AudioParam` には _a-rate_ パラメーターと _k-rate_ パラメーターの 2 種類があります。それぞれの {{domxref("AudioNode")}} は、そのパラメーターが _a-rate_ と _k-rate_ のどちらであるかを仕様で定義しています。

### a-rate

_a-rate_ の `AudioParam` は、音声信号の各[サンプルフレーム](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#オーディオバッファー_フレーム、サンプル、チャンネルセクション)の現在の音声パラメーターの値を導きます。

### k-rate

_k-rate_ の `AudioParam` は処理されるブロック全体、つまり 128 サンプルフレームに対して同じオーディオパラメーターの初期値を使用します。言い換えれば、ノードによって処理される音声のすべてのフレームに同じ値が適用されます。

## インスタンスプロパティ

- {{domxref("AudioParam.defaultValue")}} {{ReadOnlyInline}}
  - : `AudioParam` を作成する特定の {{domxref("AudioNode")}} によって定義された属性の初期値を表します。
- {{domxref("AudioParam.maxValue")}} {{ReadOnlyInline}}
  - : パラメーターの公称（有効）範囲の最大可能値を表します。
- {{domxref("AudioParam.minValue")}} {{ReadOnlyInline}}
  - : パラメーターの公称（有効）範囲の最小可能値を表します。
- {{domxref("AudioParam.value")}}
  - : パラメーターの現在の値を浮動小数点値として表します。 最初は {{domxref("AudioParam.defaultValue", "defaultValue")}} の値に設定されています。

## インスタンスメソッド

- {{domxref("AudioParam.setValueAtTime()")}}
  - : {{domxref("BaseAudioContext/currentTime", "AudioContext.currentTime")}} に対して正確な時間に `AudioParam` の値の変更をスケジュールします。 新しい値は `value` 引数によって与えられます。
- {{domxref("AudioParam.linearRampToValueAtTime()")}}
  - : `AudioParam` の値を徐々に線形に変化させるようにスケジュールします。 変更は、*前のイベント*に指定された時間に開始され、 `value` 引数で指定された新しい値へのランプ関数に従って進み、 `endTime` 引数で指定された時間に新しい値に到達します。
- {{domxref("AudioParam.exponentialRampToValueAtTime()")}}
  - : `AudioParam` の値の段階的な指数関数的な変化をスケジュールします。 変更は*前のイベント*に指定された時間に開始され、 `value` 引数で指定された新しい値への指数関数的な増加をたどり、 `endTime` 引数で指定された時間に新しい値に到達します。
- {{domxref("AudioParam.setTargetAtTime()")}}
  - : `AudioParam` の値に対する変更の開始をスケジュールします。 変更は `startTime` で指定された時間に開始し、 `target` 引数で指定された値に向かって指数関数的に移動します。 指数関数的な減衰率は、 `timeConstant` 引数によって定義されます。これは、秒単位で測定された時間です。
- {{domxref("AudioParam.setValueCurveAtTime()")}}
  - : `AudioParam` の値が、指定された開始時間から開始し、指定された期間にわたって、指定された間隔に収まるようにスケーリングされた浮動小数点数の配列で定義された一連の値に従うようにスケジュールします。
- {{domxref("AudioParam.cancelScheduledValues()")}}
  - : `AudioParam` に対する今後予定されているすべての変更をキャンセルします。
- {{domxref("AudioParam.cancelAndHoldAtTime()")}}
  - : `AudioParam` に対して将来予定されているすべての変更をキャンセルしますが、他の方法でさらに変更が加えられるまで、指定された時間にその値を保持します。

## 例

まず、ゲイン値を設定した {{domxref("GainNode")}} の基本的な例です。 値はオーディオのサンプルフレームごとに異なるように設定される可能性があるため、ゲインは _a-rate_ の `AudioParam` の例です。

```js
const audioCtx = new AudioContext();

const gainNode = audioCtx.createGain();
gainNode.gain.value = 0;
```

次に、いくつかの値が設定された {{ domxref("DynamicsCompressorNode") }} を示す例です。 値はオーディオブロック全体に一度に設定されるため、これらは _k-rate_ の `AudioParam` の例です。

```js
const compressor = audioCtx.createDynamicsCompressor();
compressor.threshold.setValueAtTime(-50, audioCtx.currentTime);
compressor.knee.setValueAtTime(40, audioCtx.currentTime);
compressor.ratio.setValueAtTime(12, audioCtx.currentTime);
compressor.attack.setValueAtTime(0, audioCtx.currentTime);
compressor.release.setValueAtTime(0.25, audioCtx.currentTime);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
