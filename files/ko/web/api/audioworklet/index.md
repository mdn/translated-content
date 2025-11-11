---
title: AudioWorklet
slug: Web/API/AudioWorklet
---

{{APIRef("Web Audio API")}}{{securecontext_header}}

[Web Audio API](/ko/docs/Web/API/Web_Audio_API)의 **`AudioWorklet`** 인터페이스는 아주 낮은 레이턴시의 오디오 프로세싱을 제공하기 위해 별도의 스레드에서 실행되는 사용자 정의 오디오 프로세싱 스크립트를 제공하려는 목적으로 사용됩니다.

worklet의 코드는 worklet과 다른 오디오 노드에 의해 공유되는 별도의 Web Audio 스레드를 사용하며 {{domxref("AudioWorkletGlobalScope")}} 전역 실행 컨텍스트에서 실행됩니다.

오디오 컨텍스트의 `AudioWorklet` 인스턴스에 {{domxref("BaseAudioContext.audioWorklet")}} 속성을 통해 접근합니다.

## 속성

_`AudioWorklet` 인터페이스는 자신이 소유하는 어떠한 속성도 정의하지 않으나, {{domxref("Worklet")}}의 속성을 상속받습니다._

## 메서드

_이 인터페이스는 {{domxref('Worklet')}}으로부터 메서드를 상속받습니다. `AudioWorklet` 인터페이스는 자신이 소유하는 어떠한 메서드도 정의하지 않습니다._

## 이벤트

_`AudioWorklet`은 응답하는 이벤트를 가지고 있지 않습니다._

## 예제

{{domxref("AudioWorkletNode")}}에서 사용자 정의 오디오 노드 생성에 대한 완전한 예제를 참고해 보세요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("AudioWorkletGlobalScope")}} — `AudioWorklet`의 전역 실행 컨텍스트
- [Web Audio API](/ko/docs/Web/API/Web_Audio_API)
- [Web Audio API 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
