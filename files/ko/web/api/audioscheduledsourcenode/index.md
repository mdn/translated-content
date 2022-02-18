---
title: AudioScheduledSourceNode
slug: Web/API/AudioScheduledSourceNode
tags:
  - API
  - Audio
  - AudioScheduledSourceNode
  - Interface
  - Media
  - Reference
  - Web Audio API
  - sound
browser-compat: api.AudioScheduledSourceNode
---
{{APIRef("Web Audio API")}}

Web Audio API의 일부인 `AudioScheduledSourceNode` 인터페이스는 (선택적으로는 명시된 시간에) 시작되고 정지되는 능력을 공유하는 몇몇 유형의 오디오 소스 노드 인터페이스에 대한 부모 인터페이스입니다. 구체적으로 말하면, 이 인터페이스는 {{domxref("AudioScheduledSourceNode.start", "start()")}}와 {{domxref("AudioScheduledSourceNode.stop", "stop()")}} 메서드 뿐만 아니라, {{domxref("AudioScheduledSourceNode.onended", "onended")}} 이벤트 처리기 또한 정의합니다.

> **참고:** `AudioScheduledSourceNode` 객체는 직접적으로 생성될 수 없습니다. 대신, {{domxref("AudioBufferSourceNode")}}, {{domxref("OscillatorNode")}}, {{domxref("ConstantSourceNode")}}와 같이 이 인터페이스를 확장하는 인터페이스를 대신 사용하십시오.

다르게 서술되지 않는 한, `AudioScheduledSourceNode` 에 기반한 노드는 재생되고 있지 않을 때 무음을 출력합니다 (즉, `start()` 가 호출되기 전 그리고 `stop()` 이 호출된 후). 항상 그렇듯이, 무음은 0의 값을 가진 샘플들의 스트림으로 표현됩니다.

## 속성

부모 인터페이스인 {{domxref("AudioNode")}}로부터 속성을 상속받습니다.

## 메서드

부모 인터페이스인 {{domxref("AudioNode")}}로부터 메서드를 상속받고, 다음의 메서드를 추가합니다.

- {{domxref("AudioScheduledSourceNode.start", "start()")}}
  - : 노드가 명시된 시간에 일정한 소리 재생을 시작하도록 예정합니다. 만약 시간이 명시되지 않으면, 노드는 즉시 재생을 시작합니다.
- {{domxref("AudioScheduledSourceNode.stop", "stop()")}}
  - : 노드가 명시된 시간에 재생을 멈추도록 예정합니다. 만약 시간이 명시되지 않으면, 노드는 즉시 재생을 정지합니다.

## 이벤트

[`addEventListener()`](/ko/docs/Web/API/EventTarget/addEventListener)를 사용하거나 이 인터페이스의 `oneventname` 속성에 이벤트 수신기를 할당하여 아래의 이벤트를 수신하십시오.

- [`ended`](/ko/docs/Web/API/AudioScheduledSourceNode/ended_event)
  - : 소스 노드가 재생을 정지했을 때 발생되는데, 그 이유는 노드가 예정된 정지 시간에 도달했기 때문이거나, 오디오의 전체 재생이 수행되었거나, 혹은 전체 버퍼가 재생되었기 때문입니다.
    또한 [`onended`](/en-US/docs/Web/API/AudioScheduledSourceNode/onended) 이벤트 처리기 속성으로도 사용 가능합니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Web Audio API 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("AudioNode")}}
