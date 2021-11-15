---
title: AudioParamMap
slug: Web/API/AudioParamMap
tags:
  - Draft
  - Experimental
browser-compat: api.AudioParamMap
---
{{draft}}{{APIRef("Web Audio API")}}

Web Audio API의 **`AudioParamMap`** 인터페이스는 다수의 오디오 매개변수의 집합을 나타내는데, 각 매개변수는 {{domxref("DOMString")}}의 매핑으로 기술되고, DOMString은 {{domxref("AudioParam")}}의 값을 나타내는 AudioParam 객체에 대한 매개변수를 명시합니다.

## 속성

`AudioParamMap` 객체는 {{jsxref("Map")}}으로 이용되는데, 각 매개변수는 `AudioParam`에 매핑된 name 문자열에 의해 식별되고, 이 AudioParam은 저 매개변수의 값을 포함하고 있습니다. 덧붙여, 다음의 속성을 사용할 수 있습니다.

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
