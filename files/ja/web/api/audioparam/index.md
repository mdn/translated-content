---
title: AudioParam
slug: Web/API/AudioParam
---

{{APIRef("Web Audio API")}}

Web Audio API の`AudioParam`インタフェースは、オーディオ関連のパラメーターを表します、通常は{{domxref("AudioNode")}}のパラメーター（{{ domxref("GainNode.gain") }}など）です。`AudioParam`は特定の値または値の変化に設定でき、特定の時間に特定のパターンに従って発生するようにスケジュールできます。

`AudioParam`には、a-rate と k-rate の 2 種類のパラメータがあります。

- _a-rate_ `AudioParam` は、オーディオ信号の各 [sample frame](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#Audio_buffers.3A_frames.2C_samples_and_channels) の現在のオーディオパラメータ値を取ります。
- _k-rate_ `AudioParam` は、処理されるブロック全体に対して同じ初期オーディオパラメータ値、つまり 128 サンプルフレームを使用します。

各{{domxref("AudioNode")}}は、そのパラメータのどれがスペック内の a-rate または k-rate であるかを定義します。

各`AudioParam`には、いつ、どのように値が変化するかを定義する初期値が空のイベントリストがあります。 このリストが空でない場合、`AudioParam.value`属性を使用した変更は無視されます。 このイベントリストにより、タイムラインベースの任意のオートメーションカーブを使用して、非常に正確な時間に発生する必要がある変更をスケジュールすることができます。 使用される時間は{{domxref("AudioContext.currentTime")}}で定義されているものです。

## Properties

親である[`AudioNode`](/ja/docs/Web/API/AudioNode)の属性を継承します。

- {{domxref("AudioParam.defaultValue")}} {{readonlyInline}}
  - : AudioParam を作成する特定の{{domxref("AudioNode")}}によって定義された属性の初期ボリュームを表します。
- {{domxref("AudioParam.maxValue")}} {{readonlyInline}}
  - : パラメータの公称（有効）範囲の最大可能値を表します。
- {{domxref("AudioParam.minValue")}} {{readonlyinline}}
  - : パラメータの公称（有効）範囲の最小可能値を表します。
- {{domxref("AudioParam.value")}}
  - : パラメータの現在のボリュームを浮動小数点値として表します。 最初は`AudioParam.defaultValue`の値に設定されています。 設定することはできますが、スケジュールされた自動化イベント（つまり、`AudioParam`のメソッドを使用してスケジュールされたイベント）がある間に発生した変更は無視され、例外は発生しません。

## Methods

親である[`AudioNode`](/ja/docs/Web/API/AudioNode)のメソッドを継承します。

- {{domxref("AudioParam.setValueAtTime()")}}
  - : {{domxref("AudioContext.currentTime")}}に対して正確な時間に`AudioParam`の値の変更をスケジュールします。 新しい値は`value`パラメータによって与えられます。
- {{domxref("AudioParam.linearRampToValueAtTime()")}}
  - : `AudioParam`の値を徐々に線形に変化させるようにスケジュールします。 変更は、*前のイベント*に指定された時間に開始され、`value`パラメーターで指定された新しい値へのランプ関数に従って進み、`endTime`パラメーターで指定された時間に新しい値に到達します。
- {{domxref("AudioParam.exponentialRampToValueAtTime()")}}
  - : `AudioParam`の値の段階的な指数関数的な変化をスケジュールします。 変更は*前のイベント*に指定された時間に開始され、`value`パラメーターで指定された新しい値への指数関数的な増加をたどり、`endTime`パラメーターで指定された時間に新しい値に到達します。
- {{domxref("AudioParam.setTargetAtTime()")}}
  - : `AudioParam`の値に対する変更の開始をスケジュールします。 変更は`startTime`で指定された時間に開始し、`target`パラメータで指定された値に向かって指数関数的に移動します。 指数関数的な減衰率は、`timeConstant`パラメーターによって定義されます。これは、秒単位で測定された時間です。
- {{domxref("AudioParam.setValueCurveAtTime()")}}
  - : `AudioParam`の値が、指定された開始時間から開始し、指定された期間にわたって、指定された間隔に収まるようにスケーリングされた浮動小数点数の配列で定義された一連の値に従うようにスケジュールします。
- {{domxref("AudioParam.cancelScheduledValues()")}}
  - : `AudioParam`に対する今後予定されているすべての変更をキャンセルします。
- {{domxref("AudioParam.cancelAndHoldAtTime()")}}
  - : AudioParam に対して将来予定されているすべての変更をキャンセルしますが、他の方法でさらに変更が加えられるまで、指定された時間にその値を保持します。

## Examples

まず、ゲイン値を設定した{{domxref("GainNode")}}の基本的な例です。 値はオーディオのサンプルフレームごとに異なるように設定される可能性があるため、ゲインは a-rate の`AudioParam`の例です。

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();

var gainNode = audioCtx.createGain();
gainNode.gain.value = 0;
```

次に、いくつかの値が設定された{{ domxref("BiquadFilterNode") }}を示す例です。 値はオーディオブロック全体に一度に設定されるため、これらは k-rate の`AudioParam`の例です。

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();

var biquadFilter = audioCtx.createBiquadFilter();

biquadFilter.type = "lowshelf";
biquadFilter.frequency.value = 1000;
biquadFilter.gain.value = 25;
```

## Specifications

| Specification                                                                | Status                               | Comment |
| ---------------------------------------------------------------------------- | ------------------------------------ | ------- |
| {{SpecName('Web Audio API', '#AudioParam', 'AudioParam')}} | {{Spec2('Web Audio API')}} |         |

## Browser compatibility

{{Compat("api.AudioParam")}}

## See also

- [Using the Web Audio API](/ja/docs/Web_Audio_API/Using_Web_Audio_API)
