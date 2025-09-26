---
title: Permissions API
slug: Web/API/Permissions_API
l10n:
  sourceCommit: 381c51574a3e6a07ee09c63493452440f046038d
---

{{DefaultAPISidebar("Permissions API")}}

**Permissions API**는 현재 맥락에 따른 API 권한의 상태를 조회할 수 있는 일관된 프로그래밍 방식을 제공합니다. 예를 들어, Permissions API를 사용하여 특정 API에 대한 접근 권한이 부여되었는지 또는 거부되었는지, 특정 사용자 권한이 필요한지를 확인할 수 있습니다.

이 API의 권한은 보안 맥락에서 API를 사용하기 위한 모든 요구 사항, 문서에 적용된 권한 정책 제한, 사용자 프롬프트 등 맥락에 대한 모든 보안 제한을 효과적으로 집계합니다. 예를 들어 API가 [권한 정책](/ko/docs/Web/HTTP/Headers/Permissions-Policy)에 의해 제한되는 경우, 반환된 권한은 `거부(denied)`되고 사용자에게 접근 여부를 묻는 메시지가 표시되지 않습니다.

> [!NOTE]
> 이 기능은 [WorkerNavigator.permissions](/ko/docs/Web/API/WorkerNavigator/permissions#browser_support) 속성을 지원하는 [Web Workers](/ko/docs/Web/API/Web_Workers_API)에서 사용할 수 있습니다.

## 개념 및 사용법

예를 들어, [Notifications API](/ko/docs/Web/API/Notifications_API)는 권한을 요청하고 권한 상태를 확인하는 자체 메서드를 제공한 반면, [Geolocation API](/ko/docs/Web/API/Geolocation)는 그렇지 않았습니다. Permissions API는 개발자가 권한 작업을 위한 일관되고 더 나은 사용자 환경을 구현할 수 있는 도구를 제공합니다.

`permissions` 속성은 표준 브라우징 맥락과 작업자 맥락({{domxref("WorkerNavigator")}} - 작업자 내부에서 권한 확인이 가능) 모두에서 {{domxref("Navigator")}} 객체에서 사용할 수 있게 되었으며, Permissions API 기능에 대한 접근을 제공하는 {{domxref("Permissions")}} 객체를 반환합니다.

이 객체가 있으면, {{domxref("Permissions.query()")}} 메서드를 사용하여 권한을 조회하여, 특정 API에 대한 {{domxref("PermissionStatus")}}로 확인되는 프로미스를 반환하는 등 권한 관련 작업을 수행할 수 있습니다.

### 권한 인식 API 목록(Permission-aware APIs)

Permissions API를 사용하여 모든 API의 권한 상태를 조회할 수 있는 것은 아닙니다. 권한을 인식 가능한 API의 전체 목록은 다음과 같습니다.

- [Background Synchronization API](/ko/docs/Web/API/Background_Synchronization_API): `background-sync` (항상 부여되어야 합니다.)
- [Clipboard API](/ko/docs/Web/API/Clipboard_API): `clipboard-read`, `clipboard-write`
- [Geolocation API](/ko/docs/Web/API/Geolocation_API): `geolocation`
- [Local Font Access API](/ko/docs/Web/API/Local_Font_Access_API)
- [Media Capture and Streams API](/ko/docs/Web/API/Media_Capture_and_Streams_API): `microphone`, `camera`
- [Notifications API](/ko/docs/Web/API/Notifications_API): `notifications`
- [Payment Handler API](/ko/docs/Web/API/Payment_Handler_API): `payment-handler`
- [Push API](/ko/docs/Web/API/Push_API): `push`
- [Sensor APIs](/ko/docs/Web/API/Sensor_APIs): `accelerometer`, `gyroscope`, `magnetometer`, `ambient-light-sensor`
- [Storage Access API](/ko/docs/Web/API/Storage_Access_API): `storage-access`
- [Storage API](/ko/docs/Web/API/Storage_API): `persistent-storage`
- [Web Audio Output Devices API](/ko/docs/Web/API/Audio_Output_Devices_API): `speaker-selection`
- [Web MIDI API](/ko/docs/Web/API/Web_MIDI_API): `midi`

## 예제

위치 찾기라는 간단한 예제를 만들었습니다. [예제를 실시간으로 실행](https://chrisdavidmills.github.io/location-finder-permissions-api/)하거나 [Github에서 소스 코드를 확인](https://github.com/chrisdavidmills/location-finder-permissions-api/tree/gh-pages)할 수 있습니다.

작동 방식에 대한 자세한 내용은 [Permissions API 사용하기](/ko/docs/Web/API/Permissions_API/Using_the_Permissions_API) 문서를 참조하세요.

## 인터페이스

- {{domxref("Navigator.permissions")}} 및 {{domxref("WorkerNavigator.permissions")}} {{ReadOnlyInline}}
  - : 기본 맥락 및 작업자 맥락에서 각각 {{domxref("Permissions")}} 객체에 대한 접근을 제공합니다.
- {{domxref("Permissions")}}
  - : 권한을 조회하고, 해제하는 메서드 등 핵심 권한 API 기능을 제공합니다.
- {{domxref("PermissionStatus")}}
  - : 권한의 현재 상태에 대한 액세스와 권한 상태 변경에 응답하는 이벤트 핸들러를 제공합니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Permissions API 사용하기](/ko/docs/Web/API/Permissions_API/Using_the_Permissions_API)
- [Permissions API를 사용하여 사용자가 카메라 액세스를 허용하거나 거부하는 빈도 감지하기](https://blog.addpipe.com/using-permissions-api-to-detect-getusermedia-responses/)
- {{DOMxref("Notification.permission_static", "Notification.permission")}}
- [개인정보 보호, 권한 및 정보 보안](/ko/docs/Web/Privacy)
