---
title: AudioWorkletGlobalScope.registerProcessor
slug: Web/API/AudioWorkletGlobalScope/registerProcessor
---

{{ APIRef("Web Audio API") }}

{{domxref("AudioWorkletGlobalScope")}} 인터페이스의 **`registerProcessor`** 메서드는 명시된 _name_ 아래에서 {{domxref("AudioWorkletProcessor")}} 인터페이스로부터 파생된 클래스 생성자를 등록합니다.

## 구문

```js
AudioWorkletGlobalScope.registerProcessor(name, processorCtor);
```

### 매개변수

- `name`
  - : 프로세서가 등록될 이름을 나타내는 문자열.
- `processorCtor`
  - : {{domxref("AudioWorkletProcessor")}}로부터 파생된 클래스의 생성자.

> **참고:** 프로세서가 한 번 등록되고 나면
> {{domxref("AudioWorkletGlobalScope")}}에서
> 키-값 쌍 `{ name: constructor }` 가 내부적으로 저장됩니다.
> _name_ 은 등록된 프로세서를 기반으로 한 {{domxref("AudioWorkletNode")}}를 생성할 때 참조됩니다.
> 주어진 이름의 새로운 프로세서는 내부적으로 생성되고 새로운 노드와 연관됩니다.

### 반환 값

{{jsxref("undefined")}}

### 예외

- `NotSupportedError` {{domxref("DOMException")}}

  - : 다음의 조건 아래서 발생됩니다:

    - _name_ 이 빈 문자열입니다.
    - 주어진 _name_ 아래의 생성자가 이미 등록되었습니다. 같은 이름을 두 번 등록하는 것은 허용되지 않습니다.

- `TypeError` {{domxref("DOMException")}}

  - : 다음의 조건 아래서 발생됩니다:

    - _processorCtor_ 이 호출 가능한 생성자가 아닙니다.
    - 생성자의 {{domxref("AudioWorkletProcessor.parameterDescriptors",
        "parameterDescriptors")}} 속성이 존재하고 {{domxref("AudioParamDescriptor")}} 기반의 객체의 배열을 반환하지 않습니다.

## 예제

이 예제에서 우리는 아무 소리도 출력하지 않는 사용자 정의 `AudioWorkletNode` 를 생성할 것입니다.

우선, 우리는 사용자 정의 {{domxref("AudioWorkletProcessor")}}를 정의하고 등록할 필요가 있습니다. 이 작업은 별도의 파일에서 이루어져야 함에 주의하세요.

```js
// test-processor.js
class TestProcessor extends AudioWorkletProcessor {
  process(inputs, outputs, parameters) {
    return true;
  }
}

registerProcessor("test-processor", TestProcessor);
```

다음으로, 메인 스크립트 파일에서 우리는 프로세서를 로드하고, `AudioWorkletNode` 에 우리가 `registerProcessor` 를 호출할 때 사용했던 프로세서 이름을 전달하며 `AudioWorkletNode` 의 인스턴스를 생성하고, 이것을 오디오 그래프에 연결할 것입니다.

```js
const audioContext = new AudioContext();
await audioContext.audioWorklet.addModule("test-processor.js");
const node = new AudioWorkletNode(audioContext, "test-processor");
node.connect(audioContext.destination);
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Web Audio API 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
