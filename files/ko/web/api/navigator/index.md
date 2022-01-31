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
translation_of: Web/API/Navigator
---
{{APIRef("DOM4")}}

**`Navigator`** 인터페이스는 {{glossary("user agent", "사용자 에이전트")}}의 상태와 신원 정보를 나타냅내며, 스크립트로 해당 정보를 질의할 때와 애플리케이션을 특정 활동에 등록할 때 사용합니다.

`Navigator` 객체는 {{domxref("window.navigator")}} 읽기 전용 속성으로 접근할 수 있습니다.

## 속성

아무 속성도 상속하지 않습니다.

### 표준 속성

- {{domxref("Navigator.connection")}} {{readonlyInline}} {{experimental_inline}}
  - : 장치의 네트워크 연결 정보를 담은 {{domxref("NetworkInformation")}} 객체를 반환합니다.
- {{domxref("Navigator.cookieEnabled")}} {{readonlyinline}}
  - : {{glossary("cookie", "쿠키")}} 설정을 할 수 있으면 참, 아니면 거짓을 반환합니다.
- {{domxref("Navigator.credentials")}} {{readonlyInline}}
  - : 사용자 인증 정보를 요청하고, 로그인과 회원가입 등 중요한 이벤트의 발생을 {{glossary("user agent", "사용자 에이전트")}}에 알려줄 수 있는 {{domxref("CredentialsContainer")}} 인터페이스를 반환합니다.
- {{domxref("Navigator.deviceMemory")}} {{readonlyInline}} {{experimental_inline}}
  - : 장치의 메모리를 기가바이트 단위로 반환합니다. 근삿값으로서, 실제 값을 가장 가까운 2의 배수로 반올림한 후에 1024로 나눠서 제공합니다.
- {{domxref("Navigator.doNotTrack")}} {{readonlyInline}} {{experimental_inline}}
  - : 사용자의 추적 거부 설정 값을 반환합니다. 값이 "`yes`"면 웹 사이트 또는 앱에서 사용자를 추적하지 않아야 합니다.
- {{domxref("Navigator.geolocation")}} {{readonlyInline}}
  - : 장치의 위치 정보에 접근할 수 있는 {{domxref("Geolocation")}} 객체를 반환합니다.
- {{domxref("NavigatorConcurrentHardware.hardwareConcurrency")}} {{readonlyInline}}
  - : 중앙처리장치의 사용 가능한 논리 코어 수를 반환합니다.
- {{domxref("NavigatorPlugins.javaEnabled")}} {{readonlyInline}}
  - : 호스트 브라우저에서 Java를 사용 가능한지 나타냅니다.
- {{domxref('Navigator.keyboard')}} {{readonlyinline}} {{experimental_inline}}
  - : Returns a {{domxref('Keyboard')}} object which provides access to functions that retrieve keyboard layout maps and toggle capturing of key presses from the physical keyboard.
- {{domxref("Navigator.language")}} {{readonlyInline}}
  - : 사용자의 선호 언어(주로 브라우저 UI 언어)를 나타내는 {{domxref("DOMString")}}을 반환합니다. 언어를 알 수 없는 경우 `null`을 반환합니다.
- {{domxref("Navigator.languages")}} {{readonlyInline}} {{experimental_inline}}
  - : 사용자에게 알려진 언어 목록을 나타내는 {{domxref("DOMString")}} 배열을 반환합니다. 정렬 순서는 사용자의 언어 선호도입니다.
- {{domxref("Navigator.locks")}} {{readonlyinline}} {{experimental_inline}}
  - : 새로운 {{domxref("Lock")}} 객체를 요청하거나, 기존 Lock 객체를 질의할 수 있는 {{domxref("LockManager")}} 객체를 반환합니다.
- {{domxref("Navigator.maxTouchPoints")}} {{readonlyInline}}
  - : 현재 장치에서 지원하는 최대 동시 터치 지점의 수를 반환합니다.
- {{domxref("Navigator.mediaCapabilities")}} {{readonlyinline}} {{experimental_inline}}
  - : 주어진 형식과 출력 형태에 대한 인코딩 및 디코딩 능력을 알아낼 수 있는 {{domxref("MediaCapabilities")}} 객체를 반환합니다.
- {{domxref("Navigator.mediaDevices")}} {{readonlyinline}}
  - : Returns a reference to a {{domxref("MediaDevices")}} object which can then be used to get information about available media devices ({{domxref("MediaDevices.enumerateDevices()")}}), find out what constrainable properties are supported for media on the user's computer and user agent ({{domxref("MediaDevices.getSupportedConstraints()")}}), and to request access to media using {{domxref("MediaDevices.getUserMedia()")}}.
- {{domxref("Navigator.mediaSession")}} {{readonlyinline}} {{experimental_inline}}
  - : Returns {{domxref("MediaSession")}} object which can be used to provide metadata that can be used by the browser to present information about the currently-playing media to the user, such as in a global media controls UI.
- {{domxref("NavigatorPlugins.mimeTypes")}} {{readonlyInline}}
  - : Returns an {{domxref("MimeTypeArray")}} listing the MIME types supported by the browser.
- {{domxref("Navigator.onLine")}} {{readonlyInline}}
  - : Returns a {{domxref("Boolean")}} indicating whether the browser is working online.
- {{domxref("Navigator.permissions")}} {{readonlyinline}} {{experimental_inline}}
  - : Returns a {{domxref("Permissions")}} object that can be used to query and update permission status of APIs covered by the [Permissions API](/en-US/docs/Web/API/Permissions_API).
- {{domxref("NavigatorPlugins.plugins")}} {{readonlyInline}}
  - : Returns a {{domxref("PluginArray")}} listing the plugins installed in the browser.
- {{domxref("Navigator.presentation")}} {{readonlyInline}} {{experimental_inline}}
  - : Returns a reference to the {{domxref("Presentation")}} API.
- {{domxref("Navigator.serviceWorker")}} {{readonlyInline}}
  - : Returns a {{domxref("ServiceWorkerContainer")}} object, which provides access to registration, removal, upgrade, and communication with the {{domxref("ServiceWorker")}} objects for the [associated document](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window).
- {{domxref("NavigatorStorage.storage")}} {{readonlyinline}}
  - : Returns the singleton {{domxref('StorageManager')}} object used for managing persistence permissions and estimating available storage on a site-by-site/app-by-app basis.
- {{domxref("NavigatorID.userAgent")}} {{readonlyInline}}
  - : Returns the user agent string for the current browser.
- {{domxref("Navigator.vendor")}} {{readonlyInline}}
  - : Returns the vendor name of the current browser (e.g., "Netscape6").
- {{domxref("Navigator.webdriver")}} {{readonlyInline}} {{experimental_inline}}
  - : Indicates whether the user agent is controlled by automation.
- {{domxref("Navigator.xr")}} {{readonlyInline}} {{experimental_inline}}
  - : Returns {{domxref("XR")}} object, which represents the entry point into the [WebXR API](/en-US/docs/Web/API/WebXR_API).

### 비표준 속성

- {{domxref("Navigator.buildID")}} {{non-standard_inline}}
  - : Returns the build identifier of the browser. In modern browsers this property now returns a fixed timestamp as a privacy measure, e.g. `20181001000000` in Firefox 64 onwards.
- {{domxref("Navigator.securitypolicy")}} {{non-standard_inline}}
  - : Returns an empty string. In Netscape 4.7x, returns "US & CA domestic policy" or "Export policy".
- {{domxref("Navigator.standalone")}} {{non-standard_inline}}
  - : Returns a boolean indicating whether the browser is running in standalone mode. Available on Apple's iOS Safari only.
- {{domxref("Navigator.wakeLock")}} {{readonlyInline}} {{non-standard_inline}}
  - : Returns a {{domxref("WakeLock")}} interface you can use to request screen wake locks and prevent screen from dimming, turning off, or showing a screen saver.

## 메서드

아무 메서드도 상속하지 않습니다.

- {{domxref("Navigator.canShare()")}}
  - : Returns `true` if a call to `Navigator.share()` would succeed.
- {{domxref("Navigator.registerProtocolHandler()")}}
  - : Allows web sites to register themselves as a possible handler for a given protocol.
- {{domxref("Navigator.requestMediaKeySystemAccess()")}}
  - : Returns a {{jsxref("Promise")}} for a MediaKeySystemAccess object.
- {{domxref("Navigator.sendBeacon()")}}
  - : Used to asynchronously transfer a small amount of data using {{Glossary("HTTP")}} from the User Agent to a web server.
- {{domxref("Navigator.share()")}}
  - : Invokes the native sharing mechanism of the current platform.
- {{domxref("Navigator.vibrate()")}}
  - : Causes vibration on devices with support for it. Does nothing if vibration support isn't available.

## 명세

| Specification                                                                                        | Status                           | Comment |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', '#the-navigator-object', 'the Navigator object')}} | {{Spec2('HTML WHATWG')}} |         |

## 브라우저 호환성

{{Compat("api.Navigator")}}
