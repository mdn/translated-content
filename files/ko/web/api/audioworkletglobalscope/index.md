---
title: AudioWorkletGlobalScope
slug: Web/API/AudioWorkletGlobalScope
---

{{APIRef("Web Audio API")}}

[Web Audio API](/ko/docs/Web/API/Web_Audio_API)의 **`AudioWorkletGlobalScope`** 인터페이스는 커스텀 {{domxref("AudioWorkletProcessor")}}에서 파생된 클래스를 정의하는 코드에 대한 전역 실행 컨텍스트를 나타냅니다.

각각의 {{domxref("BaseAudioContext")}}는 하나의 `AudioWorkletGlobalScope` 내에서 코드를 실행하는 {{domxref("BaseAudioContext.audioWorklet", "audioWorklet")}} 속성 아래에서 하나의 이용 가능한 {{domxref("AudioWorklet")}}을 가집니다.

전역 실행 컨텍스트가 현재의 `BaseAudioContext` 전체에 걸쳐 공유되므로, worklet 내에서 허용되는 행동을 수행하는 것과 다른 변수를 정의하는 것은 가능합니다 — `AudioWorkletProcessor`에서 파생된 클래스를 정의하는 것을 제외하고요.

## 속성

- {{domxref("AudioWorkletGlobalScope.currentFrame", "currentFrame")}} {{readonlyinline}}
  - : 처리되고 있는 오디오 블럭의 계속 증가하는 현재의 샘플 프레임을 나타내는 정수를 반환합니다. 이것은 각 오디오 블럭의 처리 후에 128씩 (렌더 quantum의 크기) 증가됩니다.
- {{domxref("AudioWorkletGlobalScope.currentTime", "currentTime")}} {{readonlyinline}}
  - : 처리되고 있는 오디오 블럭의 계속 증가하는 컨텍스트 시간을 나타내는 double 값을 반환합니다. 이것은 worklet이 속한 {{domxref("BaseAudioContext")}}의 {{domxref("BaseAudioContext.currentTime", "currentTime")}} 속성과 같습니다.
- {{domxref("AudioWorkletGlobalScope.sampleRate", "sampleRate")}} {{readonlyinline}}
  - : 연관된 {{domxref("BaseAudioContext")}}의 샘플 레이트를 나타내는 float 값을 반환합니다.

## 메서드

- {{domxref("AudioWorkletGlobalScope.registerProcessor", "registerProcessor()")}}
  - : {{domxref('AudioWorkletProcessor')}} 인터페이스에서 파생된 클래스를 등록합니다. 그리고 나서 이 클래스는 이것의 등록된 이름을 제공하는 {{domxref("AudioWorkletNode")}}를 생성함으로써 사용될 수 있습니다.

## 예제

이 예제에서 우리는 콘솔에 사용자 정의 {{domxref("AudioWorkletProcessor")}}의 생성자에 있는 모든 전역 속성을 출력합니다.

우선 우리는 프로세서를 정의하고, 등록할 필요가 있습니다. 이 작업은 별도의 파일에서 이루어져야 함을 기억하세요.

```js
// test-processor.js
class TestProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    // 초기화 순간의 현재 샘플 프레임과 시간
    // 값이 변하는 것을 보기 위해서, 여러분은 이 두 줄을 process 메서드에 넣을 수 있습니다
    console.log(currentFrame);
    console.log(currentTime);
  }
  // process 메서드는 필수적입니다 - 아무 소리도 나지 않는데,
  // outputs에 값을 넣지 않았기 때문입니다
  process(inputs, outputs, parameters) {
    return true;
  }
}

// 샘플 레이트는 절대 변하지 않을 것인데,
// 왜냐하면 이것은 BaseAudioContext의 읽기 전용 속성이고
// 오직 이것의 초기화 동안에만 설정되기 때문입니다
console.log(sampleRate);

// 여러분은 어떠한 변수든 선언하고 프로세서에서 사용할 수 있습니다
// 예를 들어 변수는 웨이브 테이블을 가진 ArrayBuffer일 수 있습니다
const usefulVariable = 42;
console.log(usefulVariable);

registerProcessor("test-processor", TestProcessor);
```

다음으로, 메인 스크립트 파일에서 우리는 프로세서를 로드하고, `AudioWorkletNode`에 프로세서의 이름을 전달하며 `AudioWorkletNode`의 인스턴스를 생성하고, 노드를 오디오 그래프에 연결할 것입니다. 우리는 콘솔에서 `console.log` 호출의 출력을 볼 수 있을 것입니다.

```js
const audioContext = new AudioContext();
await audioContext.audioWorklet.addModule("test-processor.js");
const testNode = new AudioWorkletNode(audioContext, "test-processor");
testNode.connect(audioContext.destination);
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Web Audio API](/ko/docs/Web/API/Web_Audio_API)
- [Web Audio API 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
