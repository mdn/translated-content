---
title: Navigator
slug: Web/API/Navigator
l10n:
  sourceCommit: baaf0062bf82c8ffe9c9f2948833589018c64ddd
---

{{APIRef("DOM4")}}

**`Navigator`** 인터페이스는 {{glossary("user agent", "사용자 에이전트")}}의 상태와 신원 정보를 나타내며, 스크립트로 해당 정보를 질의할 때와 애플리케이션을 특정 활동에 등록할 때 사용합니다.

`Navigator` 객체는 {{domxref("window.navigator")}} 읽기 전용 속성으로 접근할 수 있습니다.

## 속성

아무 속성도 상속하지 않습니다.

### 표준 속성

- {{domxref("Navigator.bluetooth")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 현재 문서의 {{domxref("Bluetooth")}} 객체를 반환합니다. [Web Bluetooth API](/ko/docs/Web/API/Web_Bluetooth_API)의 기능에 접근할 수 있습니다.
- {{domxref("Navigator.clipboard")}} {{ReadOnlyInline}} {{securecontext_inline}}
  - : 시스템 클립보드의 읽기, 쓰기에 접근할 수 있는 {{domxref("Clipboard")}} 객체를 반환합니다.
- {{domxref("Navigator.connection")}} {{readonlyInline}} {{experimental_inline}}
  - : 장치의 네트워크 연결 정보를 담은 {{domxref("NetworkInformation")}} 객체를 반환합니다.
- {{domxref("Navigator.contacts")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 사용자에게 사용자의 연락처 목록에서 항목을 선택하고 그 항목의 제한된 세부 정보를 웹사이트나 애플리케이션과 공유할 수 있게 하는 {{domxref('ContactsManager')}} 인터페이스를 반환합니다.
- {{domxref("Navigator.cookieEnabled")}} {{readonlyinline}}
  - : {{glossary("cookie", "쿠키")}} 설정을 할 수 있으면 참, 아니면 거짓을 반환합니다.
- {{domxref("Navigator.credentials")}} {{readonlyInline}}
  - : {{domxref("CredentialsContainer")}} 인터페이스를 반환합니다. 사용자 인증 정보를 요청하거나, 로그인 및 로그아웃 등 중요한 인증 관련 이벤트가 발생한 것을 사용자 에이전트에게 알려줄 때 사용합니다.
- {{domxref("Navigator.deviceMemory")}} {{readonlyInline}} {{experimental_inline}}
  - : 장치의 메모리를 기가바이트 단위로 반환합니다. 근삿값으로, 실제 값을 가장 가까운 2의 배수로 반올림한 후에 1024로 나눠서 제공합니다.
- {{domxref("Navigator.geolocation")}} {{readonlyInline}}
  - : 장치의 위치 정보에 접근할 수 있는 {{domxref("Geolocation")}} 객체를 반환합니다.
- {{domxref("Navigator.gpu")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 현재 브라우징 맥략의 {{domxref("GPU")}} 객체를 반환합니다. {{domxref("WebGPU_API", "WebGPU API", "", "nocode")}}의 진입점입니다.
- {{domxref("Navigator.hardwareConcurrency")}} {{readonlyInline}}
  - : 중앙처리장치의 사용 가능한 논리 코어 수를 반환합니다.
- {{domxref("Navigator.hid")}} {{readonlyInline}}
  - : {{domxref("HID")}} 객체를 반환합니다. HID 장치에 연결하고, 연결된 HID 장치를 나열하고, HID 장치에 대한 이벤트 처리기를 부착할 수 있습니다.
- {{domxref("Navigator.ink")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 현재 문서의 {{domxref("Ink")}} 객체를 반환합니다. [Ink API](/ko/docs/Web/API/Ink_API)의 기능에 접근할 수 있습니다.
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
- {{domxref("Navigator.pdfViewerEnabled")}} {{ReadOnlyInline}}
  - : 브라우저가 PDF 파일을 탐색할 때 인라인으로 표시할 수 있으면 `true`, 그렇지 않으면 `false`를 반환합니다.
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
- {{domxref("Navigator.usb")}} {{ReadOnlyInline}}
  - : 현재 문서의 {{domxref("USB")}} 객체를 반환합니다. [WebUSB API](/ko/docs/Web/API/WebUSB_API)의 기능에 접근할 수 있습니다.
- {{domxref("Navigator.userActivation")}} {{ReadOnlyInline}}
  - : 현재 창의 사용자 활성화 상태에 대한 정보가 포함된 {{domxref("UserActivation")}} 객체를 반환합니다.
- {{domxref("Navigator.userAgent")}} {{readonlyInline}}
  - : 현재 브라우저의 사용자 에이전트 문자열을 반환합니다.
- {{domxref("Navigator.userAgentData")}} {{readonlyInline}}
  - : {{domxref("NavigatorUAData")}} 객체를 반환합니다. 사용자의 브라우저와 운영체제에 대한 정보를 제공합니다.
- {{domxref("Navigator.virtualKeyboard")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 화면에 보이는 가상 키보드를 제어하기 위해 {{domxref("VirtualKeyboard")}} API의 참조를 반환합니다.
- {{domxref("Navigator.wakeLock")}} {{ReadOnlyInline}}
  - : {{domxref("WakeLock")}} 인터페이스를 반환합니다. 화면 깨우기를 잠그도록 요청하거나, 화면을 어둡게 하기, 끄기, 화면 보호기 표시하기를 방지할 수 있도록 요청할 수 있습니다.
- {{domxref("Navigator.webdriver")}} {{readonlyInline}} {{experimental_inline}}
  - : 사용자 에이전트가 자동화에 의해 제어 중인지 나타냅니다.
- {{domxref("Navigator.windowControlsOverlay")}} {{readonlyInline}}
  - : {{domxref("WindowControlsOverlay")}} 객체를 반환합니다. 데스크톱 PWA 제목표시줄의 형태에 대한 정보를 제공하고, 형태가 변화하는 것을 감지할 수 있는 이벤트도 발송합니다.
- {{domxref("Navigator.xr")}} {{readonlyInline}} {{experimental_inline}}
  - : [WebXR API](/ko/docs/Web/API/WebXR_Device_API)의 진입점인 {{domxref("XR")}} 객체를 반환합니다.

### 비표준 속성

- {{domxref("Navigator.buildID")}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : 브라우저의 빌드 식별자를 리턴합니다. 현재 최신 브라우저에서 이 속성은 개인 정보 보호 조치로 고정된 타임스탬프를 리턴합니다. 예를 들어 Firefox 64 이상에서는 `20181001000000`을 반환합니다.
- {{domxref("Navigator.globalPrivacyControl")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{non-standard_inline}}
  - : 자신의 정보가 공유되거나 판매되는 것에 대한 사용자의 동의를 나타내는 불리언 값을 리턴합니다.
- {{domxref("Navigator.standalone")}} {{Non-standard_Inline}}
  - : 브라우저가 독립 실행 모드로 실행중인지를 나타내는 불리언 값을 리턴합니다. Apple의 iOS Safari에서만 지원합니다.

### 사용되지 않는 속성

- {{domxref("Navigator.activeVRDisplays")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 현재 {{domxref("VRDisplay.ispresenting")}}이 `true`인 모든 {{domxref("VRDisplay")}} 객체를 담고 있는 배열을 반환합니다.
- {{domxref("Navigator.appCodeName")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : 어느 브라우저에서든 항상 `'Mozilla'`를 반환합니다.
- {{domxref("Navigator.appName")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : 어느 브라우저에서든 항상 `'Netscape'`를 반환합니다.
- {{domxref("Navigator.appVersion")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : 브라우저의 버전을 문자열로 반환합니다. 정확한 값으로 사용할 때에는 이 기능에 의존하지 마십시오.
- {{domxref("Navigator.doNotTrack")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : 사용자의 추적 금지 설정 값을 알립니다. 이 값이 "1"인 경우, 당신의 웹사이트 또는 애플리케이션은 사용자를 추적해서는 안됩니다.
- {{domxref("Navigator.mimeTypes")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : 브라우저가 지원하는 MIME 타입들을 나열하는 {{domxref("MimeTypeArray")}}를 반환합니다.
- {{domxref("Navigator.oscpu")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : 현재 운영 체제를 나타내는 문자열을 반환합니다.
- {{domxref("Navigator.platform")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : 브라우저의 플랫폼을 나타내는 문자열을 반환합니다. 중요한 값으로 사용할 때에는 이 기능에 의존하지 마십시오.
- {{domxref("Navigator.plugins")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : 브라우저에 설치된 플러그인을 나열하는 {{domxref("PluginArray")}}을 반환합니다.
- {{domxref("Navigator.product")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : 어느 브라우저에서든 항상 `'Gecko'`를 반환합니다.
- {{domxref("Navigator.productSub")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : `'20030107'`과 `'20100101'` 중 하나를 문자열로 반환합니다.
- {{domxref("Navigator.vendor")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : 빈 문자열, `'Apple Computer Inc.'`, `'Google Inc.'` 중 하나를 반환합니다.
- {{domxref("Navigator.vendorSub")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : 항상 빈 문자열을 반환합니다.

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

### 사용되지 않는 메서드

- {{domxref("Navigator.getUserMedia()")}} {{Deprecated_Inline}}
  - : 사용자에게 권한을 요청한 후에 로컬 컴퓨터의 카메라 또는 마이크와 연관된 오디오나 비디오 스트림을 반환합니다.
- {{domxref("Navigator.getVRDisplays()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : {{domxref("VRDisplay")}} 객체 배열을 이행하는 promise를 반환합니다. 이 객체는 컴퓨터에 사용 가능한 VR 기기가 연결되었는지를 나타냅니다.
- {{domxref("Navigator.javaEnabled()")}} {{Deprecated_Inline}}
  - : 항상 `false`를 반환합니다.
- {{domxref("Navigator.taintEnabled()")}} {{Deprecated_Inline}}
  - : `false`를 반환합니다. JavaScript taint/untaint 기능은 JavaScript 1.2에서 제거되었습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
