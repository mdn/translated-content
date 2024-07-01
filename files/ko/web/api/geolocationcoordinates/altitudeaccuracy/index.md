---
title: "GeolocationCoordinates: altitudeAccuracy 속성"
short-title: altitudeAccuracy
slug: Web/API/GeolocationCoordinates/altitudeAccuracy
l10n:
  sourceCommit: b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

**`GeolocationCoordinates.altitudeAccuracy`** 읽기 전용 속성은 {{domxref("GeolocationCoordinates.altitude")}}의 오차범위(신뢰수준 95%)를 미터 단위로 표현한, 엄격히 양수로 제한된 `double`입니다. 구현체가 고도 데이터를 제공하지 못하면 이 값은 `null`입니다.

## 값

{{domxref("GeolocationCoordinates.altitude")}}의 오차범위(신뢰수준 95%)를 미터로 나타낸 양의 `double`입니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Geolocation API 사용하기](/ko/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("GeolocationCoordinates")}}
