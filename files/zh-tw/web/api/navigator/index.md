---
title: Navigator
slug: Web/API/Navigator
---

{{ APIRef("DOM4") }}

**`Navigator`** 介面標示了用戶代理（user agent）的狀態與身份。它允許腳本查詢與註冊，以進行一些活動。

`Navigator` 可以被檢索，只要使用唯讀的 {{domxref("window.navigator")}} 屬性。

## 屬性

_它並不繼承任何屬性，但其實做已被定義於 {{domxref("NavigatorID")}}、{{domxref("NavigatorLanguage")}}、{{domxref("NavigatorOnLine")}}、{{domxref("NavigatorContentUtils")}}、{{domxref("NavigatorStorage")}}、{{domxref("NavigatorStorageUtils")}}、{{domxref("NavigatorConcurrentHardware")}}、{{domxref("NavigatorPlugins")}}、{{domxref("NavigatorUserMedia")}}._

### 標準

- {{domxref("Navigator.activeVRDisplays")}} {{readonlyInline}}{{experimental_inline}}
  - : Returns an array containing every {{domxref("VRDisplay")}} object that is currently presenting ({{domxref("VRDisplay.ispresenting")}} is `true`).
- {{domxref("NavigatorID.appCodeName")}} {{readonlyInline}}{{experimental_inline}}
  - : Returns the internal "code" name of the current browser. Do not rely on this property to return the correct value.
- {{domxref("NavigatorID.appName")}} {{readonlyInline}}{{experimental_inline}}
  - : Returns a {{domxref("DOMString")}} with the official name of the browser. Do not rely on this property to return the correct value.
- {{domxref("NavigatorID.appVersion")}} {{readonlyInline}}{{experimental_inline}}
  - : Returns the version of the browser as a {{domxref("DOMString")}}. Do not rely on this property to return the correct value.
- {{domxref("Navigator.battery")}} {{readonlyInline}}
  - : Returns a {{domxref("BatteryManager")}} object you can use to get information about the battery charging status.
- {{domxref("Navigator.connection")}} {{readonlyInline}}{{experimental_inline}}
  - : Provides a {{domxref("NetworkInformation")}} object containing information about the network connection of a device.
- {{domxref("Navigator.cookieEnabled")}} {{readonlyinline}}
  - : Returns false if setting a cookie will be ignored and true otherwise.
- {{domxref("Navigator.geolocation")}} {{readonlyInline}}
  - : Returns a {{domxref("Geolocation")}} object allowing accessing the location of the device.
- {{domxref("NavigatorConcurrentHardware.hardwareConcurrency")}} {{readOnlyInline}}
  - : Returns the number of logical processor cores available.
- {{domxref("NavigatorPlugins.javaEnabled")}} {{readonlyInline}}{{experimental_inline}}
  - : Returns a {{domxref("Boolean")}} flag indicating whether the host browser is Java-enabled or not.
- {{domxref("NavigatorLanguage.language")}} {{readonlyInline}}
  - : Returns a {{domxref("DOMString")}} representing the preferred language of the user, usually the language of the browser UI. The `null` value is returned when this is unknown.
- {{domxref("NavigatorLanguage.languages")}} {{readonlyInline}}
  - : Returns an array of {{domxref("DOMString")}} representing the languages known to the user, by order of preference.
- {{domxref("NavigatorPlugins.mimeTypes")}} {{readonlyInline}}{{experimental_inline}}
  - : Returns an {{domxref("MimeTypeArray")}} listing the MIME types supported by the browser.
- {{domxref("NavigatorOnLine.onLine")}} {{readonlyInline}}
  - : Returns a {{domxref("Boolean")}} indicating whether the browser is working online.
- {{domxref("Navigator.oscpu")}}
  - : Returns a string that represents the current operating system.
- {{domxref("Navigator.permissions")}} {{readonlyinline}}{{experimental_inline}}
  - : Returns a {{domxref("Permissions")}} object that can be used to query and update permission status of APIs covered by the [Permissions API](/zh-TW/docs/Web/API/Permissions_API).
- {{domxref("NavigatorID.platform")}} {{readonlyInline}}{{experimental_inline}}
  - : Returns a string representing the platform of the browser. Do not rely on this function to return a significant value.
- {{domxref("NavigatorPlugins.plugins")}} {{readonlyInline}}{{experimental_inline}}
  - : Returns a {{domxref("PluginArray")}} listing the plugins installed in the browser.
- {{domxref("NavigatorID.product")}} {{readonlyInline}} {{experimental_inline}}
  - : Always returns `'Gecko'`, on any browser. This property is kept only for compatibility purpose.
- {{domxref("Navigator.serviceWorker")}} {{readonlyInline}}
  - : Returns a {{domxref("ServiceWorkerContainer")}} object, which provides access to registration, removal, upgrade, and communication with the {{domxref("ServiceWorker")}} objects for the [associated document](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window).
- {{domxref("Navigator.storage")}} {{readonlyinline}}
  - : Returns the singleton {{domxref('StorageManager')}} object used for managing persistance permissions and estimating available storage on a site-by-site/app-by-app basis.
- {{domxref("NavigatorID.userAgent")}} {{readonlyInline}}
  - : Returns the user agent string for the current browser.

### Non-standard

> **備註：** Firefox OS devices adds more non-standard properties. You can consult them on the [Firefox OS Navigator extensions article](/zh-TW/docs/Mozilla/Firefox_OS/API/Navigator).

- {{domxref("Navigator.buildID")}} {{non-standard_inline}}
  - : Returns the build identifier of the browser (e.g., "2006090803").
- {{domxref("Navigator.cookieEnabled")}} {{non-standard_inline}}
  - : Returns a boolean indicating whether cookies are enabled in the browser or not.
- {{domxref("Navigator.credentials")}} {{non-standard_inline}}
  - : Returns the {{domxref("CredentialsContainer")}} interface which exposes methods to request credentials and notify the user agent when interesting events occur such as successful sign in or sign out.
- {{domxref("Navigator.doNotTrack")}} {{non-standard_inline}}
  - : Reports the value of the user's do-not-track preference. When this value is "yes", your web site or application should not track the user.
- {{domxref("Navigator.id")}} {{non-standard_inline}}
  - : Returns the {{domxref("window.navigator.id", "id")}} object which you can use to add support for [BrowserID](/zh-TW/docs/BrowserID) to your web site.
- {{domxref("Navigator.mediaDevices")}} {{non-standard_inline}}
  - : Returns a reference to a {{domxref("MediaDevices")}} object which can then be used to get information about available media devices ({{domxref("MediaDevices.enumerateDevices()")}}), find out what constrainable properties are supported for media on the user's computer and user agent ({{domxref("MediaDevices.getSupportedConstraints()")}}), and to request access to media using {{domxref("MediaDevices.getUserMedia()")}}.
- {{domxref("Navigator.mozNotification")}} {{deprecated_inline}} {{non-standard_inline}}
  {{domxref("Navigator.webkitNotification")}}
  - : Returns a {{domxref("navigator.mozNotification", "notification")}} object you can use to deliver notifications to the user from your web application.
- {{domxref("Navigator.mozSocial")}} {{non-standard_inline}}
  - : The Object, returned by the `navigator.mozSocial` property, is available within the social media provider's panel to provide functionality it may need.
- {{domxref("Navigator.presentation")}} {{non-standard_inline}}
  - : Returns a reference to the {{domxref("Presentation")}} API.
- {{domxref("Navigator.productSub")}} {{non-standard_inline}}
  - : Returns the build number of the current browser (e.g., "20060909").
- {{domxref("Navigator.securitypolicy")}} {{non-standard_inline}}
  - : Returns an empty string. In Netscape 4.7x, returns "US & CA domestic policy" or "Export policy".
- {{domxref("Navigator.standalone")}} {{non-standard_inline}}
  - : Returns a boolean indicating whether the browser is running in standalone mode. Available on Apple's iOS Safari only.
- {{domxref("Navigator.storageQuota")}} {{readonlyinline}} {{experimental_inline}}
  - : Returns a {{domxref('StorageQuota')}} interface which provides means to query and request storage usage and quota information.
- {{domxref("Navigator.vendor")}} {{non-standard_inline}}
  - : Returns the vendor name of the current browser (e.g., "Netscape6").
- {{domxref("Navigator.vendorSub")}} {{non-standard_inline}}
  - : Returns the vendor version number (e.g. "6.1").
- {{domxref("Navigator.webkitPointer")}} {{non-standard_inline}}
  - : Returns a PointerLock object for the [Mouse Lock API](/zh-TW/docs/API/Pointer_Lock_API).

## 方法

_Doesn't inherit any method, but implements those defined in {{domxref("NavigatorID")}}, {{domxref("NavigatorContentUtils")}}, _{{domxref("NavigatorUserMedia")}},_ and {{domxref("NavigatorStorageUtils")}}._

### Standard

- {{domxref("Navigator.getVRDisplays()")}} {{experimental_inline}}
  - : Returns a promise that resolves to an array of {{domxref("VRDisplay")}} objects representing any available VR devices connected to the computer.
- {{domxref("Navigator.getUserMedia", "Navigator.getUserMedia()")}} {{experimental_inline}}
  - : After having prompted the user for permission, returns the audio or video stream associated to a camera or microphone on the local computer.
- {{domxref("Navigator.registerContentHandler()")}}
  - : Allows web sites to register themselves as a possible handler for a given MIME type.
- {{domxref("Navigator.registerProtocolHandler()")}}
  - : Allows web sites to register themselves as a possible handler for a given protocol.
- {{domxref("Navigator.requestMediaKeySystemAccess()")}} {{experimental_inline}}
  - : Returns a {{jsxref("Promise")}} for a MediaKeySystemAccess object.
- {{domxref("Navigator.sendBeacon()")}}{{experimental_inline}}
  - : Used to asynchronously transfer a small amount of data using {{Glossary("HTTP")}} from the User Agent to a web server.
- {{domxref("Navigator.share()")}}{{experimental_inline}}
  - : Invokes the native sharing mechanism of the current platform.
- {{domxref("NavigatorID.taintEnabled()")}} {{deprecated_inline}} {{experimental_inline}}
  - : Returns `false`. JavaScript taint/untaint functions removed in JavaScript 1.2.
- {{domxref("Navigator.vibrate()")}}
  - : Causes vibration on devices with support for it. Does nothing if vibration support isn't available.

### Non-standard

> **備註：** Firefox OS devices adds more non-standard methods. You can consult them on the [Firefox OS Navigator extensions article](/zh-TW/docs/Mozilla/Firefox_OS/API/Navigator).

- {{domxref("Navigator.mozIsLocallyAvailable()")}} {{non-standard_inline}}
  - : Lets code check to see if the document at a given URI is available without using the network.
- {{domxref("Navigator.mozPay()")}} {{non-standard_inline}}
  - : Allows in-app payment.
