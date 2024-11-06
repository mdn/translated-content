---
title: "GeolocationCoordinates: heading 속성"
short-title: heading
slug: Web/API/GeolocationCoordinates/heading
l10n:
  sourceCommit: b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

**`GeolocationCoordinates.heading`** 읽기 전용 속성은 장치가 이동 중인 방위를 나타내는 `double`입니다. 이 값은 장치가 북쪽에서 벗어난 각도를 도(°) 단위로 표현하며, 진북(真北)의 `0`도부터 시계방향으로 진행하므로 `90`도는 동쪽, `270`도는 서쪽입니다. `heading`은 {{domxref("GeolocationCoordinates.speed")}}가 `0`이면 [`NaN`](/ko/docs/Web/JavaScript/Reference/Global_Objects/NaN)이고, 장치가 방위 정보를 제공하지 못하면 `null`입니다.

## 값

장치가 이동 중인 방위를 나타내는 `double`입니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Geolocation API 사용하기](/ko/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("GeolocationCoordinates")}}
