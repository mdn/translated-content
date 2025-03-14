---
title: Geolocation
slug: Web/API/Geolocation
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

**`Geolocation`** 인터페이스는 장치의 위치를 가져오는 방법을 나타냅니다. `Geolocation`을 사용하면 웹 사이트나 웹 앱이 위치 정보를 활용해, 현재 위치에 대해 맞춤 콘텐츠를 제공할 수 있습니다.

{{domxref("Navigator")}} 객체의 {{domxref("Navigator.geolocation", "geolocation")}} 속성으로 이 인터페이스를 구현하는 객체에 접근할 수 있습니다.

> [!NOTE]
> 보안 상의 문제로, 웹 페이지가 위치 정보에 접근을 시도하면 사용자에게 알림을 보내고 권한을 허용할지 묻습니다. 각 브라우저는 자신만의 권한 정책과 요청 방식을 가지고 있으므로 주의해야 합니다.

## 속성

_`Geolocation` 인터페이스는 어떤 속성도 구현하거나 상속하지 않습니다._

## 메서드

**`Geolocation` 인터페이스는 어떤 메서드도 상속하지 않습니다.**

- {{domxref("Geolocation.getCurrentPosition()")}} {{securecontext_inline}}
  - : 장치의 현재 위치를 조사한 후 {{domxref("GeolocationPosition")}} 객체로 반환합니다.
- {{domxref("Geolocation.watchPosition()")}} {{securecontext_inline}}
  - : 장치의 위치가 변경될 때마다 호출하는 콜백을 등록합니다. 반환값은 콜백의 식별자로 쓸 수 있는 `long` 값입니다.
- {{domxref("Geolocation.clearWatch()")}} {{securecontext_inline}}
  - : `watchPosition()`을 이용해 등록한 특정 콜백을 삭제합니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Geolocation API 사용하기](/ko/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
