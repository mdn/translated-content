---
title: AudioParamMap
slug: Web/API/AudioParamMap
---

{{APIRef("Web Audio API")}}

Web Audio API의 **`AudioParamMap`** 인터페이스는 다수의 오디오 파라미터의 집합을 나타내는데, 각 파라미터는 {{domxref("DOMString")}}의 매핑으로 기술되고, DOMString은 {{domxref("AudioParam")}} 객체에 대한 파라미터를 명시하며, AudioParam 객체는 자신의 값을 나타냅니다.

## 속성

`AudioParamMap` 객체는 {{jsxref("Map")}}으로써 이용되는데, 이 Map에서 각 파라미터는 이 파라미터의 값을 포함하고 있는 `AudioParam`에 매핑된 name 문자열에 의해 식별됩니다. 추가적으로, 다음의 속성들을 사용할 수 있습니다.

- {{domxref("AudioParamMap.size", "size")}}
  - : ?

## 메서드

- {{domxref("AudioParamMap.entries", "entries()")}}
  - : ?
- {{domxref("AudioParamMap.forEach", "forEach()")}}
  - : ?
- {{domxref("AudioParamMap.has", "has()")}}
  - : ?
- {{domxref("AudioParamMap.keys", "keys()")}}
  - : ?
- {{domxref("AudioParamMap.values", "values()")}}
  - : ?

## 브라우저 호환성

{{Compat}}
