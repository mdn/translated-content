---
title: AudioWorkletProcessor.process
slug: Web/API/AudioWorkletProcessor/process
---

{{APIRef("Web Audio API")}}

{{domxref("AudioWorkletProcessor")}}에서 파생된 클래스의 **`process()`** 메서드는 오디오 프로세서 worklet에 대한 오디오 프로세싱 알고리즘을 구현합니다.

비록 이 메서드가 {{domxref("AudioWorkletProcessor")}} 인터페이스의 일부가 아니긴 하지만, `AudioWorkletProcessor` 의 모든 구현은 반드시 `process()` 메서드를 제공해야 합니다.

이 메서드는 오디오 렌더링 스레드에서 프로세서의 해당하는 {{domxref("AudioWorkletNode")}}를 통해 향해지고 있는 (또한 렌더링 quantum으로도 알려져 있는) 각 오디오 블럭에 대해 한 번 동기적으로 호출됩니다. 다른 말로 하자면, 여러분의 프로세서가 조작할 새로운 오디오 블럭이 준비될 때마다, `process()` 함수가 그렇게 하기 위해 호출됩니다.

> **참고:**
>
> 현재, 오디오 데이터 블럭은 항상 128 프레임
> 길이입니다—즉, 그것들은 입력들의 채널의 각각에 대해
> 128개의 32비트 부동점 샘플을 포함합니다. 그러나, 오디오 블럭의 크기가 상황에 따라
> 달라지게 할 수 있도록 명세를 개정할 준비가 이미 되어 있습니다
> (예를 들자면, 만약 오디오 하드웨어나 CPU 활용이
> 더 큰 블럭 크기에서 더욱 효율적인 경우). 그러므로,
> 여러분은 특정한 크기를 추정하기보다는 **항상 반드시 샘플 배열의 크기를 확인** 해야 합니다.
>
> 이 크기는 심지어 시간에 따라 바뀌게 허용될지도 모르므로,
> 여러분은 절대로 단지 첫번째 블럭만을 보고 샘플 버퍼가 항상 같은 크기일 것이라고 추정해서는 안 됩니다.

## 구문

```js
var isActivelyProcessing = audioWorkletProcessor.process(
  inputs,
  outputs,
  parameters,
);
```

### 매개변수

- `inputs`

  - : 노드에 연결된 _inputs_ 의 배열인데, 이것의 각각의 원소는 결국 _channel_ 들의 배열입니다. 각 _channel_ 은 128개의 샘플을 포함하고 있는 {{jsxref("Float32Array")}}입니다. 예를 들자면, `inputs[n][m][i]` 는 _n_ 번째 입력, 그 입력의 _m_ 번째 채널, 그 채널의 _i_ 번째 샘플에 접근할 것입니다.

    각 샘플 값은 `[-1 .. 1]` 의 범위 내에 있습니다.

    _inputs_ 의 수와 따라서 그 배열의 길이는 노드의 생성에 고정되어 있습니다 ({{domxref("AudioWorkletNode")}}를 참고하세요). 만약 노드의 _n_ 번째 입력에 연결된 활성화된 노드가 없다면, `inputs[n]` 는 빈 배열일 것입니다 (0개의 입력 채널 사용 가능).

    각 입력의 _channel_ 들의 수는 {{domxref("AudioNode.channelCount", "channelCount")}}와 {{domxref("AudioNode.channelCountMode", "channelCountMode")}} 속성에 따라 다양할 수 있습니다.

- `outputs`
  - : 구조적으로 `inputs` 매개변수와 유사한 _outputs_ 의 배열. 이것은 `process()` 메서드의 실행 중에 채워지도록 의도되었습니다. 각 출력 채널은 기본적으로 0으로 채워집니다 — 출력 배열이 수정되지 않는 한 프로세서는 무음을 출력할 것입니다.
- `parameters`

  - : 문자열 키와 {{jsxref("Float32Array")}} 값들을 포함하고 있는 객체. {{domxref("AudioWorkletProcessor.parameterDescriptors", "parameterDescriptors")}} getter를 사용해 정의된 각각의 사용자 정의 {{domxref("AudioParam")}}에 대해, 이 객체의 키는 그 {{domxref("AudioParam")}}의 `name` 이고, 그 값은 {{jsxref("Float32Array")}}입니다. 배열의 값들은 예정된 자동화 이벤트를 고려함으로써 계산됩니다.

    만약 이 매개변수의 자동화 비율이[`"a-rate"`](/ko/docs/Web/API/AudioParam#a-rate)라면, 배열은 128개의 값 — 현재 오디오 블럭에 있는 각 프레임에 대해 하나 — 을 포함할 것입니다. 만약 현재 블럭에 의해 표현된 시간 중에 발생한 자동화가 없다면, 128개의 동일한 값 대신 배열은 모든 블럭에 대해 변함없는 하나의 값을 포함할 것입니다.

    만약 자동화 비율이 [`"k-rate"`](/ko/docs/Web/API/AudioParam#k-rate)라면, 배열은 하나의 값을 포함할 것인데, 이는 128 프레임 각각에 대해 사용될 것입니다.

### 반환 값

{{Glossary("user agent", "사용자 에이전트의")}} 내부 로직이 노드를 끄는 것이 안전하다고 다르게 판단할 지라도 {{domxref("AudioWorkletNode")}}를 활성화된 채로 유지하게 할 것인지 말 것인지를 나타내는 Boolean 값.

반환된 값은 프로세서가 {{domxref("AudioWorkletProcessor")}}와 이것을 소유하는 노드의 생애 주기 정책에 영향을 끼칠 수 있게 합니다. 만약 반환 값과 노드 상태의 조합이 브라우저로 하여금 노드를 멈추게 결정한다면, `process()`는 다시 호출되지 않을 것입니다.

`true` 를 반환하는 것은 Web Audio API가 노드를 계속 살려두게 하는 반면, `false` 를 반환하는 것은 만약 노드가 새로운 오디오 데이터를 생성하는 것도 아니고 처리되고 있는 이것의 입력을 통해 데이터를 받고 있는 것도 아니라면 브라우저가 노드를 제거할 수 있게 합니다.

세 가지 가장 흔한 유형의 오디오 노드는:

1. 출력의 소스. 이런 노드를 구현하는 {{domxref("AudioWorkletProcessor")}}는 이것이 출력을 생산하는 한 `process` 메서드에서 `true` 를 반환해야 합니다. 이 메서드는 이것이 더 이상 출력을 생산하지 않을 것이라는 것을 알게 되지마자 `false` 를 반환해야 합니다. 예시로, {{domxref("AudioBufferSourceNode")}}를 생각해 보십시오 — 이런 노드 뒤의 프로세서는 버퍼가 재생되는 동안 `process` 메서드에서 `true` 를 반환해야 하고, 버퍼 재생이 끝났을 때 `false` 반환을 시작해야 합니다 (같은 {{domxref("AudioBufferSourceNode")}}에서 다시 `play` 를 호출할 방법은 없습니다).
2. 입력을 변형시키는 노드. 이런 노드를 구현하는 프로세서는 활동 중인 입력 노드들의 존재와 그 노드에 대한 참조들이 garbage-collected 될 수 있는지를 결정할 수 있게 허용하도록 `process` 메서드에서 `false` 를 반환해야 합니다. 이 동작을 하는 노드의 예시는 {{domxref("GainNode")}}입니다. 연결된 입력과 유지되는 참조가 없어지자마자, gain은 더 이상 무엇에도 적용되지 않을 수 있으므로, 이것은 안전하게 garbage-collected 될 수 있습니다.
3. 입력을 변형시키나 소위 _tail-time_ 을 가지고 있는 노드 — 이는 이것이 심지어 입력이 끊기거나 활동이 없는 후일지라도 (0개의 채널을 생산) 몇 번에 대해 출력을 생산할 것임을 의미합니다. 이런 노드를 구현하는 프로세서는 `process` 메서드에서, 0개의 채널을 포함하는 입력이 발견되자마자 시작하며, _tail-time_ 의 기간 동안 `true` 를 반환해야 합니다.

> **참고:**
>
> `return` 문의 부재는 이 메서드가 `undefined` 를 반환할 것임을 의미하고, 이것은 falsy 값이므로, 이것은 `false`를 반환하는 것과도 같습니다.
> 명시적인 `return` 문을 누락하는 것은 여러분의 노드에서 감지하기 어려운 문제를 야기할 수도 있습니다.

### 예외

`process()` 메서드는 유저에 의해 구현되므로, 이것은 아무 것이나 발생시킬 수 있습니다. 만약 uncaught error가 발생된다면, 노드는 {{domxref("AudioWorkletNode.onprocessorerror", "onprocessorerror")}} 이벤트를 발생시킬 것이고 이것의 생애 주기의 나머지 동안 무음을 출력할 것입니다.

## 예제

이 예제에서 우리는 프로세서의 첫번째 출력에 백색소음을 출력하는 `AudioWorkletProcessor` 를 생성할 것입니다. gain은 `customGain` 파라미터에 의해 제어될 수 있습니다.

```js
class WhiteNoiseProcessor extends AudioWorkletProcessor {
  process(inputs, outputs, parameters) {
    // 첫번째 출력을 취합니다
    const output = outputs[0];
    // 각 채널을 gain에 의해 곱해진 무작위 값으로 채웁니다
    output.forEach((channel) => {
      for (let i = 0; i < channel.length; i++) {
        // 각 샘플에 대해 무작위 값을 생성합니다
        // Math.random의 범위는 [0; 1)입니다; 우리는 [-1; 1]이 필요합니다
        // 이것은 정확한 1을 포함하지 않을 것이지만 단순성을 위해 지금으로선 괜찮습니다
        channel[i] =
          (Math.random() * 2 - 1) *
          // 배열은 자동화가 존재하는지와
          // 자동화가 k-rate인지 a-rate인지에 따라
          // 1개 또는 128개의 값을 포함할 수 있습니다
          (parameters["customGain"].length > 1
            ? parameters["customGain"][i]
            : parameters["customGain"][0]);
      }
    });
    // 이것은 자신만의 출력을 생성하는 소스 노드이므로, 만약 우리가
    // 메인 스레드에서 이것에 대해 어떠한 참조도 가지고 있지 않는다면
    // 이것이 뜻하지 않게 garbage-collected되지 않도록 우리는 true를 반환할 것입니다
    return true;
  }
  // process 메서드에서 사용되는 customGain 파라미터를 정의합니다
  static get parameterDescriptors() {
    return [
      {
        name: "customGain",
        defaultValue: 1,
        minValue: 0,
        maxValue: 1,
        automationRate: "a-rate",
      },
    ];
  }
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

브라우저에서 제공하는 메서드가 아니라 클라이언트 코드로 작성해야 하는 콜백 메서드입니다.

## 같이 보기

- [Web Audio API 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
