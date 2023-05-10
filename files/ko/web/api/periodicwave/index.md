---
title: PeriodicWave
slug: Web/API/PeriodicWave
---

{{ APIRef("Web Audio API") }}

**`PeriodicWave`** 인터페이스는 {{domxref("OscillatorNode")}}의 출력을 형성하는데 사용될 수 있는 주기적인 파형을 정의합니다.

`PeriodicWave`에는 입력도 출력도 없습니다; 이것은 {{domxref("OscillatorNode.setPeriodicWave()")}}를 호출할 때 사용자 정의 oscillator를 정의하기 위해 쓰입니다. `PeriodicWave` 그 자체는 {{domxref("BaseAudioContext.createPeriodicWave")}}에 의해 생성/반환됩니다.

## 생성자

- {{domxref("PeriodicWave.PeriodicWave()")}}
  - : 모든 속성에 기본값을 사용하여 새로운 `PeriodicWave` 객체 인스턴스를 생성합니다. 만약 처음에 사용자 정의 속성 값을 설정하기를 원한다면, {{domxref("BaseAudioContext.createPeriodicWave")}} 팩토리 메서드를 대신 사용하세요.

## 속성

_없습니다; 또한, `PeriodicWave`는 어떠한 속성도 상속받지 않습니다._

## 메서드

_없습니다; 또한, `PeriodicWave`는 어떠한 메서드도 상속받지 않습니다._

## 예제

간단한 사인파를 포함하는 `PeriodicWave` 객체를 어떻게 생성하는지 보여주는 간단한 예제 코드를 {{domxref("BaseAudioContext.createPeriodicWave")}}에서 확인해 보세요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Web Audio API 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
