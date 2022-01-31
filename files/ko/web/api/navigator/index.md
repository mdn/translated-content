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
<div>{{APIRef("DOM4")}}</div>

<p><code><strong>Navigator</strong></code> 인터페이스는 {{glossary("user agent", "사용자 에이전트")}}의 상태와 신원 정보를 나타냅내며, 스크립트로 해당 정보를 질의할 때와 애플리케이션을 특정 활동에 등록할 때 사용합니다.</p>

<p><code>Navigator</code> 객체는 {{domxref("window.navigator")}} 읽기 전용 속성으로 접근할 수 있습니다.</p>

<h2 id="속성">속성</h2>

<p>아무 속성도 상속하지 않습니다.</p>

<h3 id="표준_속성">표준 속성</h3>

<dl>
 <dt>{{domxref("Navigator.connection")}} {{readonlyInline}} {{experimental_inline}}</dt>
 <dd>장치의 네트워크 연결 정보를 담은 {{domxref("NetworkInformation")}} 객체를 반환합니다.</dd>
 <dt>{{domxref("Navigator.cookieEnabled")}} {{readonlyinline}}</dt>
 <dd>{{glossary("cookie", "쿠키")}} 설정을 할 수 있으면 참, 아니면 거짓을 반환합니다.</dd>
 <dt>{{domxref("Navigator.credentials")}} {{readonlyInline}}</dt>
 <dd>사용자 인증 정보를 요청하고, 로그인과 회원가입 등 중요한 이벤트의 발생을 {{glossary("user agent", "사용자 에이전트")}}에 알려줄 수 있는 {{domxref("CredentialsContainer")}} 인터페이스를 반환합니다.</dd>
 <dt>{{domxref("Navigator.deviceMemory")}} {{readonlyInline}} {{experimental_inline}}</dt>
 <dd>장치의 메모리를 기가바이트 단위로 반환합니다. 근삿값으로서, 실제 값을 가장 가까운 2의 배수로 반올림한 후에 1024로 나눠서 제공합니다.</dd>
 <dt>{{domxref("Navigator.doNotTrack")}} {{readonlyInline}} {{experimental_inline}}</dt>
 <dd>사용자의 추적 거부 설정 값을 반환합니다. 값이 "<code>yes</code>"면 웹 사이트 또는 앱에서 사용자를 추적하지 않아야 합니다.</dd>
 <dt>{{domxref("Navigator.geolocation")}} {{readonlyInline}}</dt>
 <dd>장치의 위치 정보에 접근할 수 있는 {{domxref("Geolocation")}} 객체를 반환합니다.</dd>
 <dt>{{domxref("NavigatorConcurrentHardware.hardwareConcurrency")}} {{readonlyInline}}</dt>
 <dd>중앙처리장치의 사용 가능한 논리 코어 수를 반환합니다.</dd>
 <dt>{{domxref("NavigatorPlugins.javaEnabled")}} {{readonlyInline}}</dt>
 <dd>호스트 브라우저에서 Java를 사용 가능한지 나타냅니다.</dd>
 <dt>{{domxref('Navigator.keyboard')}} {{readonlyinline}} {{experimental_inline}}</dt>
 <dd>Returns a {{domxref('Keyboard')}} object which provides access to functions that retrieve keyboard layout maps and toggle capturing of key presses from the physical keyboard.</dd>
 <dt>{{domxref("Navigator.language")}} {{readonlyInline}}</dt>
 <dd>사용자의 선호 언어(주로 브라우저 UI 언어)를 나타내는 {{domxref("DOMString")}}을 반환합니다. 언어를 알 수 없는 경우 <code>null</code>을 반환합니다.</dd>
 <dt>{{domxref("Navigator.languages")}} {{readonlyInline}} {{experimental_inline}}</dt>
 <dd>사용자에게 알려진 언어 목록을 나타내는 {{domxref("DOMString")}} 배열을 반환합니다. 정렬 순서는 사용자의 언어 선호도입니다.</dd>
 <dt>{{domxref("Navigator.locks")}} {{readonlyinline}} {{experimental_inline}}</dt>
 <dd>새로운 {{domxref("Lock")}} 객체를 요청하거나, 기존 Lock 객체를 질의할 수 있는 {{domxref("LockManager")}} 객체를 반환합니다.</dd>
 <dt>{{domxref("Navigator.maxTouchPoints")}} {{readonlyInline}}</dt>
 <dd>현재 장치에서 지원하는 최대 동시 터치 지점의 수를 반환합니다.</dd>
 <dt>{{domxref("Navigator.mediaCapabilities")}} {{readonlyinline}} {{experimental_inline}}</dt>
 <dd>주어진 형식과 출력 형태에 대한 인코딩 및 디코딩 능력을 알아낼 수 있는 {{domxref("MediaCapabilities")}} 객체를 반환합니다.</dd>
 <dt>{{domxref("Navigator.mediaDevices")}} {{readonlyinline}}</dt>
 <dd>Returns a reference to a {{domxref("MediaDevices")}} object which can then be used to get information about available media devices ({{domxref("MediaDevices.enumerateDevices()")}}), find out what constrainable properties are supported for media on the user's computer and user agent ({{domxref("MediaDevices.getSupportedConstraints()")}}), and to request access to media using {{domxref("MediaDevices.getUserMedia()")}}.</dd>
 <dt>{{domxref("Navigator.mediaSession")}} {{readonlyinline}} {{experimental_inline}}</dt>
 <dd>Returns {{domxref("MediaSession")}} object which can be used to provide metadata that can be used by the browser to present information about the currently-playing media to the user, such as in a global media controls UI.</dd>
 <dt>{{domxref("NavigatorPlugins.mimeTypes")}} {{readonlyInline}}</dt>
 <dd>Returns an {{domxref("MimeTypeArray")}} listing the MIME types supported by the browser.</dd>
 <dt>{{domxref("Navigator.onLine")}} {{readonlyInline}}</dt>
 <dd>Returns a {{domxref("Boolean")}} indicating whether the browser is working online.</dd>
 <dt>{{domxref("Navigator.permissions")}} {{readonlyinline}} {{experimental_inline}}</dt>
 <dd>Returns a {{domxref("Permissions")}} object that can be used to query and update permission status of APIs covered by the <a href="/en-US/docs/Web/API/Permissions_API">Permissions API</a>.</dd>
 <dt>{{domxref("NavigatorPlugins.plugins")}} {{readonlyInline}}</dt>
 <dd>Returns a {{domxref("PluginArray")}} listing the plugins installed in the browser.</dd>
 <dt>{{domxref("Navigator.presentation")}} {{readonlyInline}} {{experimental_inline}}</dt>
 <dd>Returns a reference to the {{domxref("Presentation")}} API.</dd>
 <dt>{{domxref("Navigator.serviceWorker")}} {{readonlyInline}}</dt>
 <dd>Returns a {{domxref("ServiceWorkerContainer")}} object, which provides access to registration, removal, upgrade, and communication with the {{domxref("ServiceWorker")}} objects for the <a href="https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window">associated document</a>.</dd>
 <dt>{{domxref("NavigatorStorage.storage")}} {{readonlyinline}}</dt>
 <dd>Returns the singleton {{domxref('StorageManager')}} object used for managing persistence permissions and estimating available storage on a site-by-site/app-by-app basis.</dd>
 <dt>{{domxref("NavigatorID.userAgent")}} {{readonlyInline}}</dt>
 <dd>Returns the user agent string for the current browser.</dd>
 <dt>{{domxref("Navigator.vendor")}} {{readonlyInline}}</dt>
 <dd>Returns the vendor name of the current browser (e.g., "Netscape6").</dd>
 <dt>{{domxref("Navigator.webdriver")}} {{readonlyInline}} {{experimental_inline}}</dt>
 <dd>Indicates whether the user agent is controlled by automation.</dd>
 <dt>{{domxref("Navigator.xr")}} {{readonlyInline}} {{experimental_inline}}</dt>
 <dd>Returns {{domxref("XR")}} object, which represents the entry point into the <a href="/en-US/docs/Web/API/WebXR_API">WebXR API</a>.</dd>
</dl>

<h3 id="비표준_속성">비표준 속성</h3>

<dl>
 <dt>{{domxref("Navigator.buildID")}} {{non-standard_inline}}</dt>
 <dd>Returns the build identifier of the browser. In modern browsers this property now returns a fixed timestamp as a privacy measure, e.g. <code>20181001000000</code> in Firefox 64 onwards.</dd>
 <dt>{{domxref("Navigator.securitypolicy")}} {{non-standard_inline}}</dt>
 <dd>Returns an empty string. In Netscape 4.7x, returns "US &amp; CA domestic policy" or "Export policy".</dd>
 <dt>{{domxref("Navigator.standalone")}} {{non-standard_inline}}</dt>
 <dd>Returns a boolean indicating whether the browser is running in standalone mode. Available on Apple's iOS Safari only.</dd>
 <dt>{{domxref("Navigator.wakeLock")}} {{readonlyInline}} {{non-standard_inline}}</dt>
 <dd>Returns a {{domxref("WakeLock")}} interface you can use to request screen wake locks and prevent screen from dimming, turning off, or showing a screen saver.</dd>
</dl>

<h2 id="메서드">메서드</h2>

<p>아무 메서드도 상속하지 않습니다.</p>

<dl>
 <dt>{{domxref("Navigator.canShare()")}}</dt>
 <dd>Returns <code>true</code> if a call to <code>Navigator.share()</code> would succeed.</dd>
 <dt>{{domxref("Navigator.registerProtocolHandler()")}}</dt>
 <dd>Allows web sites to register themselves as a possible handler for a given protocol.</dd>
 <dt>{{domxref("Navigator.requestMediaKeySystemAccess()")}}</dt>
 <dd>Returns a <span style="line-height: 19.0909080505371px;">{{jsxref("Promise")}} for a MediaKeySystemAccess object.</span></dd>
 <dt>{{domxref("Navigator.sendBeacon()")}}</dt>
 <dd>Used to asynchronously transfer a small amount of data using {{Glossary("HTTP")}} from the User Agent to a web server.</dd>
 <dt>{{domxref("Navigator.share()")}}</dt>
 <dd>Invokes the native sharing mechanism of the current platform.</dd>
 <dt>{{domxref("Navigator.vibrate()")}}</dt>
 <dd>Causes vibration on devices with support for it. Does nothing if vibration support isn't available.</dd>
</dl>

<h2 id="명세">명세</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', '#the-navigator-object', 'the Navigator object')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<div>{{Compat("api.Navigator")}}</div>
