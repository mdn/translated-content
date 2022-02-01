---
title: AudioWorkletProcessor.port
slug: Web/API/AudioWorkletProcessor/port
tags:
  - API
  - Audio
  - AudioWorkletProcessor
  - Experimental
  - Property
  - Reference
  - Web Audio API
browser-compat: api.AudioWorkletProcessor.port
---
{{APIRef("Web Audio API")}}{{SeeCompatTable}}

{{domxref("AudioWorkletProcessor")}} 인터페이스의 읽기 전용 **`port`** 속성은 연관된 {{domxref("MessagePort")}}를 반환합니다. 이것은 프로세서와 프로세서가 속한 {{domxref("AudioWorkletNode")}} 사이에서 소통하기 위해 사용될 수 있습니다.

> **참고:** 채널의 다른 쪽 끝에 있는 포트는
> 노드의 {{domxref("AudioWorkletNode.port", "port")}} 속성 아래에서 사용 가능합니다.

## 구문

```js
AudioWorkletProcessorInstance.port;
```

### 값

`AudioWorkletProcessor` 와 연관된 `AudioWorkletNode` 를 연결하고 있는 {{domxref("MessagePort")}} 객체.

## 예제

[`AudioWorkletNode.port`](/ko/docs/Web/API/AudioWorkletNode/port#examples)에서 예제 코드를 볼 수 있습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Web Audio API](/ko/docs/Web/API/Web_Audio_API)
- [Web Audio
  API 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
