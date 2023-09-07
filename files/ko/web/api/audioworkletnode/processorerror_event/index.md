---
title: AudioWorkletNode.onprocessorerror
slug: Web/API/AudioWorkletNode/processorerror_event
---

{{ APIRef("Web Audio API") }}

{{ domxref("AudioWorkletNode") }} 인터페이스의 `onprocessorerror` 속성은 {{domxref("AudioWorkletNode.processorerror_event", "processorerror")}} 이벤트가 발생했을 때 호출될 이벤트 처리기 함수를 정의합니다. 이것은 노드 뒤의 근본적인 {{domxref("AudioWorkletProcessor")}}가 이것의 생성자, {{domxref("AudioWorkletProcessor.process", "process")}} 메서드, 또는 유저에 의해 정의된 모든 클래스 메서드에서 예외를 발생시켰을 때 발생합니다.

한 번 예외가 발생되면, 프로세서 (그리고 따라서 노드) 는 생애 주기 내내 무음을 출력할 것입니다.

## 구문

```js
audioWorkletNode.onprocessorerror = function() { ... };
```

## 예제

// 예제 코드 추가하기

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Web Audio API 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
