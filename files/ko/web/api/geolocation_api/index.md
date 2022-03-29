---
title: Geolocation API
slug: Web/API/Geolocation_API
tags:
  - Geolocation API
  - Guide
  - Intermediate
  - Overview
translation_of: Web/API/Geolocation_API
---
{{securecontext_header}}{{DefaultAPISidebar("Geolocation API")}}

**Geolocation API**는 사용자가 원할 경우 웹 애플리케이션에 위치 정보를 제공할 수 있는 API입니다. 개인정보 보호를 위해, 브라우저는 위치 정보를 제공하기 전에 사용자에게 위치 정보 권한에 대한 확인을 받습니다.

`Geolocation` 객체를 사용하려는 WebExtension은 매니페스트에 `"geolocation"` 권한을 추가해야 합니다. 사용자의 운영 체제는 WebExtension이 처음으로 위치 정보를 요청하는 순간 사용자에게 정보 제공 여부를 물어봅니다.

## 개념과 사용법

사용자의 현재 위치를 지도에 표시하거나 위치 기반 개인화 정보를 제공하는 등, 웹 앱에서 위치 정보를 가져와야 하는 경우가 종종 있습니다.

Geolocation API는 {{domxref("Navigator.geolocation", "navigator.geolocation")}}을 통해 접근합니다. 이 때, 사용자의 브라우저는 위치 정보 접근 권한을 요청하게 되고, 사용자가 허가할 경우 현재 장치에서 사용 가능한 최선의 방법(GPS, WiFi, ...)을 통해 위치를 알아냅니다.

위의 과정이 끝난 후, 코드에서는 몇 가지 다른 방법으로 위치 정보를 가져올 수 있습니다.

- {{domxref("Geolocation.getCurrentPosition()")}}: 장치의 현재 위치를 가져옵니다.
- {{domxref("Geolocation.watchPosition()")}}: 장치의 위치가 바뀔 때마다, 자동으로 새로운 위치를 사용해 호출할 처리기 함수를 등록합니다.

두 메서드 모두 최대 세 개의 매개변수를 받습니다.

- 필수로 지정하는 성공 콜백: 위치 정보를 성공적으로 가져온 경우, 위치 데이터를 담은 {{domxref("GeolocationPosition")}} 객체를 유일한 매개변수로 하여 콜백을 호출합니다.
- 선택적으로 지정하는 실패 콜백: 위치 정보를 가져오지 못한 경우, 실패 원인을 담은 {{domxref("GeolocationPositionError")}} 객체를 유일한 매개변수로 하여 콜백을 호출합니다.
- 선택적으로 지정하는 {{domxref("PositionOptions")}} 객체는 위치 정보 회수에 적용할 옵션을 제공합니다.

`Geolocation` 사용법에 대한 추가 정보는 [Geolocation API 사용하기](/ko/docs/WebAPI/Using_geolocation) 문서를 참고하세요.

## 인터페이스

- {{domxref("Geolocation")}}
  - : Geolocation API의 주요 클래스로서 사용자의 현재 위치를 가져오고, 위치 변경을 감지하고, 이전에 등록했던 감지기를 제거하는 메서드를 담고 있습니다.
- {{domxref("GeolocationPosition")}}
  - : 사용자의 위치를 나타냅니다. `GeolocationPosition` 인스턴스는 {{domxref("Geolocation")}} 객체 메서드의 성공 콜백에 제공되며, 타임스탬프와 함께 {{domxref("GeolocationCoordinates")}} 객체 인스턴스를 포함합니다.
- {{domxref("GeolocationCoordinates")}}
  - : 사용자 위치의 좌표를 나타냅니다. `GeolocationCoordinates` 인스턴스는 위도, 경도 외에도 기타 중요한 관련 정보를 포함합니다.
- {{domxref("GeolocationPositionError")}}
  - : `GeolocationPositionError`는 {{domxref("Geolocation")}} 객체 메서드의 오류 콜백에 제공되며, 오류 코드와 오류 메시지를 담고 있습니다.
- {{domxref("Navigator.geolocation")}}
  - : API로 접근할 수 있는 지점입니다. {{domxref("Geolocation")}} 객체 인스턴스를 반환합니다.

## 연관 배열

- {{domxref("PositionOptions")}}
  - : {{domxref("Geolocation.getCurrentPosition()")}}과 {{domxref("Geolocation.watchPosition()")}}에 매개변수로 전달할 옵션을 나타내는 객체입니다.

## 예제

[Geolocation API 사용하기](/ko/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#examples)에서 예제를 확인하세요.

## 명세

{{Specifications("api.Geolocation")}}

## 브라우저 호환성

{{Compat("api.Geolocation")}}

### 가용성

WiFi 기반의 위치 정보는 보통 Google이 제공하므로, 기본 Geolocation API는 중국에서 사용하지 못할 수도 있습니다. 대신 [Baidu](http://lbsyun.baidu.com/index.php?title=jspopular/guide/geolocation), [Autonavi](https://lbs.amap.com/api/javascript-api/guide/services/geolocation#geolocation), [Tencent](http://lbs.qq.com/tool/component-geolocation.html) 등 지역 서드파티 제공자가 지원하는 라이브러리를 사용할 수 있습니다. 위 서비스는 WiFi 대신 IP 주소와 지역 앱을 사용해 위치 정보를 개선합니다.

## 같이 보기

- [Geolocation API 사용하기](/ko/docs/Web/API/Geolocation_API/Using)
- [w3.org의 Geolocation API](https://www.w3.org/TR/geolocation-API/)
- [Who moved my geolocation?](https://hacks.mozilla.org/2013/10/who-moved-my-geolocation/) (Hacks 블로그)
