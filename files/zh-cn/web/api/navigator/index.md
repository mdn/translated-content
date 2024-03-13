---
title: Navigator
slug: Web/API/Navigator
---

{{apiref("DOM4")}}

`Navigator` 接口表示用户代理的状态和标识。它允许脚本查询它和注册自己进行一些活动。

可以使用只读的 {{domxref("window.navigator")}} 属性检索 navigator 对象。

## 属性

不从 _{{domxref("NavigatorID")}}、{{domxref("NavigatorLanguage")}}、{{domxref("NavigatorOnLine")}}、{{domxref("NavigatorGeolocation")}}、{{domxref("NavigatorPlugins")}}、{{domxref("NavigatorUserMedia")}}_ 和 _{{domxref("NetworkInformation")}}_ 中继承任何属性，但是实现了定义在这些对象中的如下属性。

### 标准属性

- {{domxref("Navigator.activeVRDisplays")}} {{readonlyInline}}{{experimental_inline}}
  - : 筛选所有的 {{domxref("VRDisplay")}} 对象，把其中所有 {{domxref("VRDisplay.ispresenting")}} 属性的值为 `true` 的对象以数组的形式返回。
- {{domxref("NavigatorID.appCodeName")}} {{readonlyInline}}{{deprecated_inline}}
  - : 返回当前浏览器的内部“开发代号”名称。不能保证此属性返回的值是正确的。
- {{domxref("NavigatorID.appName")}} {{readonlyInline}}{{deprecated_inline}}
  - : 以 {{domxref("DOMString")}} 的形式返回浏览器官方名称。不能保证此属性返回的值是正确的。
- {{domxref("NavigatorID.appVersion")}} {{readonlyInline}}{{deprecated_inline}}
  - : 以 {{domxref("DOMString")}} 的形式返回浏览器版本。不能保证此属性返回的值是正确的。
- {{domxref("Navigator.battery")}} {{readonlyInline}}{{deprecated_inline}}
  - : 返回一个 {{domxref("BatteryManager")}} 对象，你可以用它来获取一些电池充电状态的信息。
- {{domxref("Navigator.connection")}} {{readonlyInline}}{{experimental_inline}}
  - : 提供一个 {{domxref("NetworkInformation")}} 对象来获取设备的网络连接信息。
- {{domxref("Navigator.cookieEnabled")}} {{readonlyinline}}
  - : 当忽略 Cookie 时返回 false，否则返回 true
- {{domxref("Navigator.geolocation")}} {{readonlyInline}}
  - : 返回一个 {{domxref("Geolocation")}} 对象，据之可访问设备的地理位位置信息。
- {{domxref("NavigatorConcurrentHardware.hardwareConcurrency")}} {{readOnlyInline}}
  - : 返回可用的逻辑处理器核心数。
- {{domxref("NavigatorPlugins.javaEnabled")}} {{readonlyInline}}{{experimental_inline}}
  - : 返回 {{domxref("Boolean")}} 表明浏览器是否支持 Java。
- {{domxref('Navigator.keyboard')}} {{readonlyinline}} {{experimental_inline}}
  - : 返回一个 {{domxref("Keyboard")}} 对象，该对象提供对以下功能的访问：检索键盘布局图和切换从物理键盘捕获按键的功能。
- {{domxref("NavigatorLanguage.language")}} {{readonlyInline}}
  - : 返回 {{domxref("DOMString")}} 表示用户的首先语言，通常是浏览器用户界面的语言。当未知的时，返回 null。
- {{domxref("NavigatorLanguage.languages")}} {{readonlyInline}}
  - : 返回一个表示用户已知语言的 {{domxref("DOMString")}} 数组，并按优先顺序排列。
- {{domxref("NavigatorPlugins.mimeTypes")}} {{readonlyInline}}{{experimental_inline}}
  - : 返回 {{domxref("MimeTypeArray")}} 数组用于列举浏览器所支持的 MIME 类型。
- {{domxref("Navigator.locks")}} {{readonlyinline}}{{experimental_inline}}
  - : Returns a {{domxref("LockManager")}} object which provides methods for requesting a new {{domxref('Lock')}} object and querying for an existing {{domxref('Lock')}} object
- {{domxref("Navigator.mediaCapabilities")}} {{readonlyinline}}{{experimental_inline}}
  - : Returns a {{domxref("MediaCapabilities")}} object that can expose information about the decoding and encoding capabilities for a given format and output capabilities.
- {{domxref("Navigator.maxTouchPoints")}} {{readonlyInline}}
  - : Returns the maximum number of simultaneous touch contact points are supported by the current device.
- {{domxref("NavigatorOnLine.onLine")}} {{readonlyInline}}
  - : 返回 {{domxref("Boolean")}} 来表明浏览器是否联网。
- {{domxref("Navigator.oscpu")}}
  - : 返回当前操作系统名。
- {{domxref("Navigator.permissions")}} {{readonlyinline}}{{experimental_inline}}
  - : 返回一个 {{domxref("Permissions")}} 对象，该对象可用于查询和更新 [Permissions API](/zh-CN/docs/Web/API/Permissions_API) 涵盖的 API 的权限状态。
- {{domxref("NavigatorID.platform")}} {{readonlyInline}}{{experimental_inline}}
  - : 返回浏览器平台名，不确定此值是否有效。
- {{domxref("NavigatorPlugins.plugins")}} {{readonlyInline}}{{experimental_inline}}
  - : 返回 {{domxref("PluginArray")}} 数组用于列举出浏览器安装的插件。
- {{domxref("NavigatorID.product")}} {{readonlyInline}} {{experimental_inline}}
  - : 在任意浏览器下都只返回 `'Gecko'`，此属性只用于兼容的目的。
- {{domxref("Navigator.serviceWorker")}} {{readonlyInline}}
  - : 返回 {{domxref("ServiceWorkerContainer")}} 对象用于提供注册、删除、更新以及为了 [associated document](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window) 的 {{domxref("ServiceWorker")}} 对象之间的通信。
- {{domxref("NavigatorStorage.storage")}} {{readonlyinline}}
  - : Returns the singleton {{domxref('StorageManager')}} object used for managing persistence permissions and estimating available storage on a site-by-site/app-by-app basis.
- {{domxref("NavigatorID.userAgent")}} {{readonlyInline}}
  - : 返回当前浏览器的用户代理。
- {{domxref("Navigator.webdriver")}} {{readonlyInline}} {{experimental_inline}}
  - : TBD

### 非标准方法

- {{domxref("window.navigator.buildID", "navigator.buildID")}} {{non-standard_inline}}
  - : 返回浏览器识别码。这一方法返回时间戳，例如：在 Firefox 64 发行版中返回 `20181001000000`。
- {{domxref("Navigator.cookieEnabled")}} {{non-standard_inline}}
  - : 返回布尔值以表明 Cookies 是否能再浏览器中启用
- {{domxref("navigator.doNotTrack")}} {{non-standard_inline}}
  - : 报告用户的不追踪参数值，当值为 yes，你的网址或应用将不追踪用户
- {{domxref("navigator.id")}} {{non-standard_inline}}
  - : 返回 {{domxref("window.navigator.id", "id")}} 对象，你能用 [BrowserID](/zh-CN/docs/BrowserID) 添加支持到你的网址。
- {{domxref("window.navigator.mozApps", "navigator.mozApps")}} {{non-standard_inline}}
  - : Returns an {{domxref("window.navigator.mozApps", "Apps")}} object you can use to install, manage, and control [Open Web apps](/Open_Web_Apps).
- {{domxref("Navigator.mozAudioChannelManager", "navigator.mozAudioChannelManager")}} {{non-standard_inline}}
  - : The `navigator.mozAudioChannelManager` object provides access to the {{domxref("mozAudioChannelManager")}} interface, which is used to manage your Firefox OS device's audio channels, including setting what channel's volume to affect when the volume buttons are pressed inside a particular app.
- {{domxref("window.navigator.mozNotification","navigator.mozNotification")}} {{deprecated_inline}} {{non-standard_inline}}
  {{domxref("window.navigator.webkitNotification","navigator.webkitNotification")}}
  - : Returns a {{domxref("navigator.mozNotification", "notification")}} object you can use to deliver notifications to the user from your web application.
- {{domxref("navigator.mozSocial")}} {{non-standard_inline}}
  - : The Object, returned by the `navigator.mozSocial` property, is available within the social media provider's panel to provide functionality it may need.
- {{domxref("window.navigator.productSub", "navigator.productSub")}} {{non-standard_inline}}
  - : Returns the build number of the current browser (e.g., "20060909").
- {{domxref("window.navigator.securitypolicy", "navigator.securitypolicy")}} {{non-standard_inline}}
  - : Returns an empty string. In Netscape 4.7x, returns "US & CA domestic policy" or "Export policy".
- {{domxref("window.navigator.standalone", "navigator.standalone")}} {{non-standard_inline}}
  - : Returns a boolean indicating whether the browser is running in standalone mode. Available on Apple's iOS Safari only.
- {{domxref("window.navigator.vendor", "navigator.vendor")}} {{non-standard_inline}}
  - : 返回当前浏览器的供应商的名字（例如：“Netscape6”）。
- {{domxref("window.navigator.vendorSub", "navigator.vendorSub")}} {{non-standard_inline}}
  - : 返回供应商版本号码（例如：“6.1”）。
- [`navigator.webkitPointer`](/zh-CN/docs/API/Pointer_Lock_API) {{non-standard_inline}}
  - : Returns a PointerLock object for the [Mouse Lock API](/zh-CN/docs/API/Pointer_Lock_API).

## 方法

_Doesn't inherit any method, but implements those defined in {{domxref("NavigatorID")}}, {{domxref("NavigatorContentUtils")}}, _{{domxref("NavigatorUserMedia")}},_ and {{domxref("NavigatorStorageUtils")}}._

### 标准方法

- {{domxref("Navigator.getVRDisplays()")}} {{deprecated_inline}}
  - : Returns a promise that resolves to an array of {{domxref("VRDisplay")}} objects representing any available VR devices connected to the computer.
- {{domxref("NavigatorUserMedia.getUserMedia()")}}{{deprecated_inline}}
  - : After having prompted the user for permission, returns the audio or video stream associated to a camera or microphone on the local computer.
- {{domxref("window.navigator.registerContentHandler", "navigator.registerContentHandler")}}
  - : Allows web sites to register themselves as a possible handler for a given MIME type.
- {{domxref("navigator.registerProtocolHandler", "navigator.registerProtocolHandler")}}
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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
