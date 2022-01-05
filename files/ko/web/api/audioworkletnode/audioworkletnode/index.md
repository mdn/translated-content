---
title: AudioWorkletNode()
slug: Web/API/AudioWorkletNode/AudioWorkletNode
tags:
  - API
  - AudioWorkletNode
  - Constructor
  - Reference
  - Web Audio API
browser-compat: api.AudioWorkletNode.AudioWorkletNode
---
{{APIRef("Web Audio API")}}

**`AudioWorkletNode()`** 생성자는 새로운 {{domxref("AudioWorkletNode")}} 객체를 생성하는데, 이는 사용자 정의 오디오 프로세싱을 수행하기 위해 JavaScript 함수를 사용하는 {{domxref("AudioNode")}}를 나타냅니다.

## 구문

```js
var node = new AudioWorkletNode(context, name);
var node = new AudioWorkletNode(context, name, options);
```

### 매개변수

- `context`
  - : 이 노드가 관련될 {{domxref("BaseAudioContext")}} 인스턴스.
- `name`
  - : 이 노드가 기반으로 할 {{domxref("AudioWorkletProcessor")}}의 이름을 나타내는 문자열. 제공된 이름을 가진 프로세서는 {{domxref("AudioWorkletGlobalScope.registerProcessor()")}} 메서드를 사용하여 반드시 맨 먼저 등록되어야 합니다.
- `options` {{optional_inline}}

  - : 새로운 노드를 설정하기 위해 다음의 선택적인 속성들 중 0개 또는 그 이상을 포함하는 객체:

    <!-- 명세는 이 객체를 다음으로 나타냅니다: AudioWorkletNodeOptions -->

    > **참고:** 이 객체에 적용된 [structured clone algorithm](/ko/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)의 결과는
    > 또한 연관된 {{domxref("AudioWorkletProcessor.AudioWorkletProcessor", "AudioWorkletProcessor()")}} 생성자로 내부적으로 전달됩니다
    > — 이는 근본적인 사용자 정의 {{domxref("AudioWorkletProcessor")}}의 커스텀 초기화를 가능케 합니다.

    - `numberOfInputs` {{optional_inline}}
      - : {{domxref("AudioNode.numberOfInputs", "numberOfInputs")}} 속성을 초기화할 값. 기본값은 1입니다.
    - `numberOfOutputs` {{optional_inline}}
      - : {{domxref("AudioNode.numberOfOutputs", "numberOfOutputs")}} 속성을 초기화할 값. 기본값은 1입니다.
    - `outputChannelCount` {{optional_inline}}
      - : 각 출력에 대한 채널의 숫자를 정의하는 **배열**. 예를 들자면, _outputChannelCount: \[n, m]_ 은 첫번째 출력의 채널 숫자를 _n_ 으로 그리고 두번째 출력을 _m_ 으로 명시합니다. 배열의 길이는 반드시 `numberOfOutputs`과 일치해야 합니다.
    - `parameterData` {{optional_inline}}
      - : `key`가 사용자 정의 파라미터의 이름이고 `value`가 이것의 초기 값인 채로, (노드의 {{domxref("AudioWorkletNode.parameters", "parameters")}} 속성에 있는) 이 노드에 있는 사용자 정의 {{domxref("AudioParam")}} 객체의 초기 값을 포함하는 객체.
    - `processorOptions` {{optional_inline}}
      - : 근본적인 {{domxref("AudioWorkletProcessor")}}의 사용자 정의 초기화를 위해 사용될 수 있는 모든 추가적인 데이터.

### 반환 값

새롭게 생성된 {{domxref("AudioWorkletNode")}} 인스턴스.

### 예외

- `NotSupportedError` {{domxref("DOMException")}}
  - : 명시된 `options.outputChannelCount` 이 `0` 또는 현재 구현 지원보다 더 큽니다.

    `options.numberOfInputs`와 `options.numberOfOutputs`가 둘 다 0입니다.
- `IndexSizeError` {{domxref("DOMException")}}
  - : `options.outputChannelCount` 배열의 길이가 `options.numberOfOutputs`와 일치하지 않습니다.

## 사용 일람

각기 다른 `options` 매개변수 값들은 다음의 영향을 가질 수 있습니다.

만약 입력의 수와 출력의 수가 둘 다 0으로 설정된다면, `NotSupportedError`가 발생될 것이고 노드 구성 과정은 중단됩니다. 만약 `outputChannelCount` 배열의 길이가 `numberOfOutputs`과 일치하지 않다면, `IndexSizeError` {{domxref("DOMException")}}이 발생할 것입니다.

만약 `outputChannelCount`이 명시되지 않았고, `numberOfInputs`와 `numberOfOutputs`가 모두 1이라면, `AudioWorkletNode`의 초기 채널 카운트는 1으로 설정됩니다. 이것은 계산된 채널의 수로 동적으로 변화하는 출력 채널 카운트를 변화시키는 효과를 가지는데, 이는 입력의 채널 카운트와 {{domxref("AudioNode")}} 속성 {{domxref("AudioNode.channelCountMode", "channelCountMode")}}의 현재 설정에 기반합니다.

그렇지 않으면, 만약 `outputChannelCount`이 제공되고 만약 `numberOfInputs`와 `numberOfOutputs`의 값이 둘 다 1이라면, 오디오 worklet 노드의 채널 카운트는 `outputChannelCount`의 값으로 설정됩니다. 그렇지 않으면, 출력 채널의 집합에 있는 각 채널의 채널 카운트는 해당하는 `outputChannelCount` 배열의 값과 일치되도록 설정됩니다.

## 예제

_사용자 정의 오디오 프로세싱을 시연하는 완전한 예제는 {{domxref("AudioWorkletNode")}} 페이지에서 찾아보실 수 있습니다._

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Web Audio API](/ko/docs/Web/API/Web_Audio_API)
- [AudioWorklet을 사용한 백그라운드 오디오 프로세싱](/ko/docs/Web/API/Web_Audio_API/Using_AudioWorklet)
- {{domxref("AudioWorkletNode", "AudioWorkletNode")}} 인터페이스
