---
title: AudioParam
slug: Web/API/AudioParam
---

{{APIRef("Web Audio API")}}

Web Audio API의 `AudioParam` 인터페이스는 오디오에 관련된 파라미터를 나타내는데, 보통 ({{ domxref("GainNode.gain") }}과 같은) {{domxref("AudioNode")}}의 파라미터입니다.

`AudioParam` 은 특정한 값이나 값의 변화로 설정될 수 있고, 특정한 시간에 그리고 특정한 패턴을 따라 일어나도록 예정될 수 있습니다.

각 `AudioParam` 은 이벤트의 리스트를 가지고 있고, 이는 초기적으로는 비어 있습니다. 이 이벤트의 리스트는 값이 언제 그리고 어떻게 변화할지를 정의합니다. 이 리스트가 비어있지 않을 때, `AudioParam.value` 특성을 사용한 변화는 무시됩니다. 이 이벤트의 리스트는 우리가 임의적인 타임라인 기반의 자동화 커브를 사용해 아주 정밀한 시간에 일어나야만 하는 변화들을 예정할 수 있게 합니다. 사용되는 이 시간은 {{domxref("BaseAudioContext/currentTime", "AudioContext.currentTime")}}에 정의된 것입니다.

## AudioParam 유형

두 종류의 `AudioParam` 이 있는데, 그것은 _a-rate_ 와 _k-rate_ 파라미터입니다. 각 {{domxref("AudioNode")}}는 명세에서 이것의 파라미터들 중 어떤 것이 _a-rate_ 이고 어떤 것이 _k-rate_ 인지 정의합니다.

### a-rate

_a-rate_ `AudioParam` 은 오디오 신호의 각 [샘플 프레임](/ko/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_buffers.3a_frames.2c_samples_and_channels)에 대해 현재의 오디오 파라미터 값을 취합니다.

### k-rate

_k-rate_ `AudioParam` 은 처리되는 전체 블럭에 대해 같은 초기 오디오 파라미터 값을 사용합니다. 즉, 128 샘플 프레임입니다. 다른 말로 하자면, 오디오가 노드에 의해 처리되는 동안 같은 값이 오디오에 있는 모든 프레임에 적용됩니다.

## 속성

- {{domxref("AudioParam.defaultValue")}} {{readonlyInline}}
  - : `AudioParam` 을 생성하는 특정한 {{domxref("AudioNode")}}에 의해 정의되는 특성의 초기 값을 나타냅니다.
- {{domxref("AudioParam.maxValue")}} {{readonlyInline}}
  - : 파라미터의 명목상의 (효과적인) 범위에 대한 최대로 가능한 값을 나타냅니다.
- {{domxref("AudioParam.minValue")}} {{readonlyinline}}
  - : 파라미터의 명목상의 (효과적인) 범위에 대한 최소로 가능한 값을 나타냅니다.
- {{domxref("AudioParam.value")}}
  - : 현재 시간에 대한 파라미터의 현재 값을 나타냅니다. 초기적으로는 {{domxref("AudioParam.defaultValue", "defaultValue")}}의 값으로 설정됩니다.

## 메서드

- {{domxref("AudioParam.setValueAtTime()")}}
  - : 정밀한 시간에서 `AudioParam` 의 값에 즉각적인 변화를 예정합니다. 이 시간은 {{domxref("BaseAudioContext/currentTime", "AudioContext.currentTime")}}과 비교하여 측정됩니다. 새로운 값은 `value` 매개변수에 의해 주어집니다.
- {{domxref("AudioParam.linearRampToValueAtTime()")}}
  - : `AudioParam` 의 값에 점진적인 선형적 변화를 예정합니다. 이 변화는 _previous_ 이벤트에 명시된 시간에 시작하고, `value` 매개변수에 주어진 새로운 값까지 선형적인 경사(ramp)를 따라 변경된 후, `endTime` 매개변수에 주어진 시간에서 새로운 값에 도달합니다.
- {{domxref("AudioParam.exponentialRampToValueAtTime()")}}
  - : `AudioParam` 의 값에 점진적인 지수적 변화를 예정합니다. 이 변화는 _previous_ 이벤트에 명시된 시간에 시작하고, `value` 매개변수에 주어진 새로운 값까지 지수적인 경사를 따라 변경된 후, `endTime` 매개변수에 주어진 시간에서 새로운 값에 도달합니다.
- {{domxref("AudioParam.setTargetAtTime()")}}
  - : `AudioParam` 의 값에 변화의 시작을 예정합니다. 이 변화는 `startTime` 에 명시된 시간에 시작해 `target` 매개변수에 주어진 값을 향해 지수적으로 움직입니다. 이 지수적인 감소(decay) 비율은 `timeConstant` 매개변수에 의해 정의되는데, 이 값은 초 단위로 측정된 시간입니다.
- {{domxref("AudioParam.setValueCurveAtTime()")}}
  - : `AudioParam` 의 값들이 주어진 구간에 맞도록 조정된 부동점 숫자들의 배열을 따르게 예정합니다. 수의 구간은 주어진 시작 시간에 시작하고, 주어진 지속 시간에 걸쳐 이어집니다.
- {{domxref("AudioParam.cancelScheduledValues()")}}
  - : `AudioParam` 에 예정된 모든 미래의 변화들을 취소합니다.
- {{domxref("AudioParam.cancelAndHoldAtTime()")}}
  - : `AudioParam` 에 예정된 모든 미래의 변화들을 취소하나 다른 메서드를 사용해 추가적인 변화가 만들어질 때까지 주어진 시간에서 값을 유지합니다.

## 예제

첫째는 기본적인 예제인데 {{domxref("GainNode")}}가 `gain` 값을 설정하는 것을 보여줍니다. `gain` 은 a-rate AudoParam의 예시인데, 왜냐하면 이 값은 잠재적으로 오디오의 각각의 샘플 프레임에 대해 다르게 설정될 수 있기 때문입니다.

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();

var gainNode = audioCtx.createGain();
gainNode.gain.value = 0;
```

다음 예제는 {{ domxref("DynamicsCompressorNode") }}가 몇 개의 파라미터 값들을 조작하는 것을 보여줍니다. 이 값들은 k-rate AudioParam의 예시인데, 왜냐하면 이것들은 한번에 전체 오디오 블럭에 대해 설정되기 때문입니다.

```js
var compressor = audioCtx.createDynamicsCompressor();
compressor.threshold.setValueAtTime(-50, audioCtx.currentTime);
compressor.knee.setValueAtTime(40, audioCtx.currentTime);
compressor.ratio.setValueAtTime(12, audioCtx.currentTime);
compressor.attack.setValueAtTime(0, audioCtx.currentTime);
compressor.release.setValueAtTime(0.25, audioCtx.currentTime);
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Web Audio API 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
