---
title: Navigator
slug: Web/API/Navigator
tags:
  - API
  - DOM
  - Interface
  - Navigator
  - Reference
  - Web
  - Web Performance
browser-compat: api.Navigator
translation_of: Web/API/Navigator
---
{{APIRef("DOM4")}}

**`Navigator`** 인터페이스는 {{glossary("user agent", "사용자 에이전트")}}의 상태와 신원 정보를 나타내며, 스크립트로 해당 정보를 질의할 때와 애플리케이션을 특정 활동에 등록할 때 사용합니다.

`Navigator` 객체는 {{domxref("window.navigator")}} 읽기 전용 속성으로 접근할 수 있습니다.

## 속성

아무 속성도 상속하지 않습니다.

### 표준 속성

- {{domxref("Navigator.connection")}} {{readonlyInline}} {{experimental_inline}}
  - : 장치의 네트워크 연결 정보를 담은 {{domxref("NetworkInformation")}} 객체를 반환합니다.
- {{domxref("Navigator.cookieEnabled")}} {{readonlyinline}}
  - : {{glossary("cookie", "쿠키")}} 설정을 할 수 있으면 참, 아니면 거짓을 반환합니다.
- {{domxref("Navigator.credentials")}} {{readonlyInline}}
  - : {{domxref("CredentialsContainer")}} 인터페이스를 반환합니다. 사용자 인증 정보를 요청하거나, 로그인 및 로그아웃 등 중요한 인증 관련 이벤트가 발생한 것을 사용자 에이전트에게 알려줄 때 사용합니다.
- {{domxref("Navigator.deviceMemory")}} {{readonlyInline}} {{experimental_inline}}
  - : 장치의 메모리를 기가바이트 단위로 반환합니다. 근삿값으로, 실제 값을 가장 가까운 2의 배수로 반올림한 후에 1024로 나눠서 제공합니다.
- {{domxref("Navigator.geolocation")}} {{readonlyInline}}
  - : 장치의 위치 정보에 접근할 수 있는 {{domxref("Geolocation")}} 객체를 반환합니다.
- {{domxref("Navigator.hid")}} {{readonlyInline}}
  - : {{domxref("HID")}} 객체를 반환합니다. HID 장치에 연결하고, 연결된 HID 장치를 나열하고, HID 장치에 대한 이벤트 처리기를 부착할 수 있습니다.
- {{domxref("Navigator.hardwareConcurrency")}} {{readonlyInline}}
  - : 중앙처리장치의 사용 가능한 논리 코어 수를 반환합니다.
- {{domxref('Navigator.keyboard')}} {{readonlyinline}} {{experimental_inline}}
  - : {{domxref('Keyboard')}} 객체를 반환합니다. 키보드 레이아웃 맵을 가져올 수 있고, 물리적 키보드의 키 입력 캡처를 켜고 끌 수 있습니다.
- {{domxref("Navigator.language")}} {{readonlyInline}}
  - : 사용자의 선호 언어(주로 브라우저 UI 언어)를 나타내는 {{domxref("DOMString")}}을 반환합니다. 언어를 알 수 없는 경우 `null`을 반환합니다.
- {{domxref("Navigator.languages")}} {{readonlyInline}} {{experimental_inline}}
  - : 사용자에게 알려진 언어 목록을 나타내는 {{domxref("DOMString")}} 배열을 반환합니다. 정렬 순서는 사용자의 언어 선호도입니다.
- {{domxref("Navigator.locks")}} {{readonlyinline}} {{experimental_inline}}
  - : 새로운 {{domxref("Lock")}} 객체를 요청하거나, 기존 `Lock` 객체를 질의할 수 있는 {{domxref("LockManager")}} 객체를 반환합니다.
- {{domxref("Navigator.maxTouchPoints")}} {{readonlyInline}}
  - : 현재 장치에서 지원하는 최대 동시 터치 지점의 수를 반환합니다.
- {{domxref("Navigator.mediaCapabilities")}} {{readonlyinline}} {{experimental_inline}}
  - : 주어진 형식과 출력 형태에 대한 인코딩 및 디코딩 능력을 알아낼 수 있는 {{domxref("MediaCapabilities")}} 객체를 반환합니다.
- {{domxref("Navigator.mediaDevices")}} {{readonlyinline}}
  - : {{domxref("MediaStream")}} 객체를 반환합니다. 사용 가능한 미디어 장치들의 정보를 가져오고({{domxref("MediaDevices.enumerateDevices()")}}), 사용자의 컴퓨터와 사용자 에이전트가 지원하는 미디어 제약 조건 속성을 알아내고({{domxref("MediaDevices.getSupportedConstraints()")}}), 미디어 접근을 요청할 수 있습니다({{domxref("MediaDevices.getUserMedia()")}}).
- {{domxref("Navigator.mediaSession")}} {{readonlyinline}} {{experimental_inline}}
  - : 현재 재생 중인 미디어에 대한 메타데이터를 브라우저에게 제공할 때 사용하는 {{domxref("MediaSession")}} 객체를 반환합니다. 브라우저는 이 데이터를 전역 미디어 컨트롤 UI 등에 표시할 수 있습니다.
- {{domxref("Navigator.onLine")}} {{readonlyInline}}
  - : 브라우저가 온라인 상태인지 나타내는 불리언 값을 반환합니다.
- {{domxref("Navigator.permissions")}} {{readonlyinline}} {{experimental_inline}}
  - : {{domxref("Permissions")}} 객체를 반환합니다. [Permissions API](/ko/docs/Web/API/Permissions_API)의 권한을 질의하고 상태를 변경할 수 있습니다.
- {{domxref("Navigator.presentation")}} {{readonlyInline}} {{experimental_inline}}
  - : {{domxref("Presentation")}} API 참조를 반환합니다.
- {{domxref("Navigator.serial")}} {{readonlyInline}}
  - : {{domxref("Serial")}} 객체를 반환합니다. 직렬 포트를 제어할 수 있는 [Web Serial API](/ko/docs/Web/API/Web_Serial_API)의 진입점입니다.
- {{domxref("Navigator.serviceWorker")}} {{readonlyInline}}
  - : {{domxref("ServiceWorkerContainer")}} 객체를 반환합니다. [연관 문서(associated document)](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window)의 {{domxref("ServiceWorker")}}에 대한 등록, 제거, 업그레이드, 통신 기능을 제공합니다.
- {{domxref("Navigator.storage")}} {{readonlyinline}}
  - : {{domxref('StorageManager')}} 싱글턴 객체를 반환합니다. 사이트/앱에 할당된 저장 공간 권한을 관리하고, 남은 공간을 계산할 때 사용합니다.
- {{domxref("Navigator.userAgent")}} {{readonlyInline}}
  - : 현재 브라우저의 사용자 에이전트 문자열을 반환합니다.
- {{domxref("Navigator.userAgentData")}} {{readonlyInline}}
  - : {{domxref("NavigatorUAData")}} 객체를 반환합니다. 사용자의 브라우저와 운영체제에 대한 정보를 제공합니다.
- {{domxref("Navigator.webdriver")}} {{readonlyInline}} {{experimental_inline}}
  - : 사용자 에이전트가 자동화에 의해 제어 중인지 나타냅니다.
- {{domxref("Navigator.windowControlsOverlay")}} {{readonlyInline}}
  - : {{domxref("WindowControlsOverlay")}} 객체를 반환합니다. 데스크톱 PWA 제목표시줄의 형태에 대한 정보를 제공하고, 형태가 변화하는 것을 감지할 수 있는 이벤트도 발송합니다.
- {{domxref("Navigator.xr")}} {{readonlyInline}} {{experimental_inline}}
  - : [WebXR API](/ko/docs/Web/API/WebXR_API)의 진입점인 {{domxref("XR")}} 객체를 반환합니다.

## 메서드

아무 메서드도 상속하지 않습니다.

- {{domxref("Navigator.canShare()")}}
  - : `Navigator.share()` 호출이 성공할지 나타내는 불리언 값을 반환합니다.
- {{domxref("Navigator.clearAppBadge()")}}
  - : 현재 앱 아이콘의 배지를 제거하고, {{jsxref("undefined")}}로 이행하는 {{jsxref("Promise")}}를 반환합니다.
- {{domxref("Navigator.getBattery()")}}
  - : {{domxref("BatteryManager")}} 객체로 이행하는 {{jsxref("Promise")}}를 반환합니다. `BatteryManager`는 전원 충전 상태 정보를 제공합니다.
- {{domxref("Navigator.registerProtocolHandler()")}}
  - : 주어진 프로토콜에 대해 현재 웹 사이트를 사용 가능한 처리기로 등록합니다.
- {{domxref("Navigator.requestMediaKeySystemAccess()")}}
  - : {{domxref("MediaKeySystemAccess")}} 객체로 이행하는 {{jsxref("Promise")}}를 반환합니다.
- {{domxref("Navigator.sendBeacon()")}}
  - : 작은 데이터를 사용자 에이전트에서 웹 서버로, {{glossary("HTTP")}}를 통해 비동기적으로 전송할 때 사용합니다.
- {{domxref("Navigator.setAppBadge()")}}
  - : 현재 앱 아이콘에 배지를 추가하고, {{jsxref("undefined")}}로 이행하는 {{jsxref("Promise")}}를 반환합니다.
- {{domxref("Navigator.share()")}}
  - : 현재 플랫폼의 네이티브 공유 기능을 발동합니다.
- {{domxref("Navigator.vibrate()")}}
  - : 지원하는 경우, 장치가 진동하도록 합니다. 진동을 지원하지 않는 장치에서는 아무것도 하지 않습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
