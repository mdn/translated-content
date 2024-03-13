---
title: "GeolocationCoordinates: altitude 속성"
short-title: altitude
slug: Web/API/GeolocationCoordinates/altitude
l10n:
  sourceCommit: b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

**`GeolocationCoordinates.altitude`** 읽기 전용 속성은 평균 해수면을 정의하는 [WGS84](https://gis-lab.info/docs/nima-tr8350.2-wgs84fin.pdf) 타원체를 기준으로 했을 때, 이 위치의 고도를 미터 단위로 표현한 `double`입니다. 구현체가 고도 데이터를 제공하지 못하면 이 값은 `null`입니다.

## 값

[WGS84](https://gis-lab.info/docs/nima-tr8350.2-wgs84fin.pdf) 타원체를 기준으로 한 미터 단위의 고도를 나타내는 `double`입니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Geolocation API 사용하기](/ko/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- 이 속성이 속한 {{domxref("GeolocationCoordinates")}}
- [National Imagery and Mapping Agency Technical Report 8350.2, Third Edition (WGS84)](https://gis-lab.info/docs/nima-tr8350.2-wgs84fin.pdf)
