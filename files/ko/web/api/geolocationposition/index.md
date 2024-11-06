---
title: GeolocationPosition
slug: Web/API/GeolocationPosition
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

**`GeolocationPosition`** 인터페이스는 주어진 시간에 장치가 위치한 지점을 나타냅니다. 지점은 {{domxref("Coordinates")}} 객체로 표현하여, 지구를 나타내는 회전타원체 위의 2D 위치와 더불어 높이와 속도 정보를 담습니다.

## 속성

`GeolocationPosition` 인터페이스는 어떤 속성도 상속하지 않습니다.

- {{domxref("Position.coords")}} {{readonlyInline}} {{securecontext_inline}}
  - : 주어진 시간의 위치를 나타내는 {{domxref("Coordinates")}} 객체입니다.
- {{domxref("Position.timestamp")}} {{readonlyInline}} {{securecontext_inline}}
  - : 위치를 기록한 시간을 나타내는 {{domxref("DOMTimeStamp")}}입니다.

## 메서드

`GeolocationPosition` 인터페이스는 어떤 메서드도 상속하거나 구현하지 않습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [위치정보 사용하기](/ko/docs/Web/API/Geolocation_API)
- 이 인터페이스를 사용하는 {{domxref("Geolocation")}} 인터페이스.
